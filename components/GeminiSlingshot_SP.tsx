
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { getStrategicHint, TargetCandidate } from './geminiService_SP';
import { Point, Bubble, Particle, BubbleColor, DebugInfo, FloatingText } from '../types_SP';
import { Loader2, Trophy, Keyboard, Monitor, GraduationCap, RotateCcw, AlertTriangle, ArrowDownToLine, Home, MousePointer2 } from 'lucide-react';
import { soundManager } from '../utils/soundService_BQ';

const GRAVITY = 0.0; 
const FRICTION = 0.998; 

// Visual Scale Settings - Reduced for "Zoomed Out" feel
const BUBBLE_RADIUS = 16; // Reduced from 22
const ROW_HEIGHT = BUBBLE_RADIUS * Math.sqrt(3);
const GRID_COLS = 12;
const GRID_ROWS = 9; // Increased logic grid height
const SLINGSHOT_BOTTOM_OFFSET = 160; // Slightly lower offset
const SHOTS_PER_ROW = 4; 

const MAX_DRAG_DIST = 150; // Reduced drag distance

// Material Design Colors & Scoring Strategy
const COLOR_CONFIG: Record<BubbleColor, { hex: string, points: number, label: string }> = {
  red:    { hex: '#ef5350', points: 100, label: 'Red' },     
  blue:   { hex: '#42a5f5', points: 150, label: 'Blue' },    
  green:  { hex: '#66bb6a', points: 200, label: 'Green' },   
  yellow: { hex: '#ffee58', points: 250, label: 'Yellow' },  
  purple: { hex: '#ab47bc', points: 300, label: 'Purple' },  
  orange: { hex: '#ffa726', points: 500, label: 'Orange' }   
};

const COLOR_KEYS: BubbleColor[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

// Helper to generate random educational content
const getRandomContent = (): { content: string, type: 'number' | 'letter' } => {
    const isNumber = Math.random() > 0.5;
    if (isNumber) {
        // Numbers 0-9
        return { 
            content: Math.floor(Math.random() * 10).toString(),
            type: 'number'
        };
    } else {
        // Letters A-Z
        const charCode = 65 + Math.floor(Math.random() * 26);
        return {
            content: String.fromCharCode(charCode),
            type: 'letter'
        };
    }
};

// Color Helper for Gradients
const adjustColor = (color: string, amount: number) => {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substring(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substring(2, 4), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substring(4, 6), 16) + amount));
    
    const componentToHex = (c: number) => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

interface GeminiSlingshotProps {
  onExit: () => void;
  onRecordScore: (score: number) => void;
}

const GeminiSlingshot: React.FC<GeminiSlingshotProps> = ({ onExit, onRecordScore }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  
  // Game State Refs
  const ballPos = useRef<Point>({ x: 0, y: 0 });
  const ballVel = useRef<Point>({ x: 0, y: 0 });
  const anchorPos = useRef<Point>({ x: 0, y: 0 });
  
  // Ball State Refs
  const currentBallContent = useRef<{ content: string, type: 'number'|'letter' }>({ content: '?', type: 'letter' });
  const currentBallColorRef = useRef<BubbleColor>('red');

  // Controls
  const keysPressed = useRef<Set<string>>(new Set());
  const aimAngle = useRef<number>(-Math.PI / 2); // Pointing straight up
  const chargePower = useRef<number>(0.0); // 0 to 1.0
  const isDragging = useRef<boolean>(false); // Mouse/Touch drag state

  const isFlying = useRef<boolean>(false);
  const flightStartTime = useRef<number>(0);
  const bubbles = useRef<Bubble[]>([]);
  const particles = useRef<Particle[]>([]);
  const floatingTexts = useRef<FloatingText[]>([]);
  const scoreRef = useRef<number>(0);
  
  // Difficulty State
  const shotsFiredRef = useRef<number>(0);
  const rowsAddedRef = useRef<number>(0);

  const aimTargetRef = useRef<Point | null>(null);
  const isAiThinkingRef = useRef<boolean>(false);
  
  // AI Request Trigger
  const captureRequestRef = useRef<boolean>(false);
  
  // React State
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [aimTarget, setAimTarget] = useState<Point | null>(null);
  const [score, setScore] = useState(0);
  const [shotsUntilRow, setShotsUntilRow] = useState(SHOTS_PER_ROW);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [aiRecommendedColor, setAiRecommendedColor] = useState<BubbleColor | null>(null);
  // kept for logic but not rendered
  const [debugInfo, setDebugInfo] = useState<DebugInfo | null>(null);

  useEffect(() => {
    aimTargetRef.current = aimTarget;
  }, [aimTarget]);

  useEffect(() => {
    isAiThinkingRef.current = isAiThinking;
  }, [isAiThinking]);

  // Report score on game over
  useEffect(() => {
    if (gameOver) {
        soundManager.playWrong();
        onRecordScore(score);
    }
  }, [gameOver, score, onRecordScore]);
  
  const getBubblePos = (row: number, col: number, logicalWidth: number) => {
    // logicalWidth is the CSS pixel width of the container
    const xOffset = (logicalWidth - (GRID_COLS * BUBBLE_RADIUS * 2)) / 2 + BUBBLE_RADIUS;
    
    // row % 2 logic needs to handle negative rows correctly for staggered layout
    // We want -1 to behave like 1 (odd), -2 to behave like 2 (even)
    const isOdd = Math.abs(row) % 2 === 1; 

    const x = xOffset + col * (BUBBLE_RADIUS * 2) + (isOdd ? BUBBLE_RADIUS : 0);
    // Include rowsAddedRef to shift everything down visually
    const y = BUBBLE_RADIUS + (row + rowsAddedRef.current) * ROW_HEIGHT;
    return { x, y };
  };

  const getActiveColors = useCallback((): BubbleColor[] => {
      const active = new Set<BubbleColor>();
      bubbles.current.forEach(b => { if(b.active) active.add(b.color); });
      if (active.size === 0) return [...COLOR_KEYS]; // Fallback if active board is empty
      return Array.from(active);
  }, []);

  const initGrid = useCallback((logicalWidth: number) => {
    const newBubbles: Bubble[] = [];
    rowsAddedRef.current = 0;
    shotsFiredRef.current = 0;
    setShotsUntilRow(SHOTS_PER_ROW);

    // Difficulty: Increased initial rows to 7 since bubbles are smaller
    for (let r = 0; r < 7; r++) { 
      for (let c = 0; c < (r % 2 !== 0 ? GRID_COLS - 1 : GRID_COLS); c++) {
        // Density logic
        if (Math.random() > 0.05) {
            const { x, y } = getBubblePos(r, c, logicalWidth);
            const { content, type } = getRandomContent();
            newBubbles.push({
              id: `${r}-${c}`,
              row: r,
              col: c,
              x,
              y,
              color: COLOR_KEYS[Math.floor(Math.random() * COLOR_KEYS.length)],
              active: true,
              content,
              contentType: type
            });
        }
      }
    }
    bubbles.current = newBubbles;
    
    // Init first ball with random available color
    const activeColors = Array.from(new Set(newBubbles.map(b => b.color)));
    currentBallColorRef.current = activeColors[Math.floor(Math.random() * activeColors.length)] || 'red';
    currentBallContent.current = getRandomContent(); 
    
    setLoading(false);
    setGameOver(false);
    scoreRef.current = 0;
    setScore(0);
    
    // Trigger initial AI analysis after a short delay to allow render
    setTimeout(() => {
        captureRequestRef.current = true;
    }, 2000);
  }, []);

  const createExplosion = (x: number, y: number, color: string) => {
    soundManager.playExplosion();
    for (let i = 0; i < 15; i++) {
      particles.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.5) * 12,
        life: 1.0,
        color
      });
    }
  };

  const createFloatingText = (x: number, y: number, text: string, color: string = "#ffffff") => {
      floatingTexts.current.push({
          x,
          y,
          text,
          color,
          life: 1.5, // seconds
          vy: -2
      });
  };

  const isPathClear = (target: Bubble) => {
    if (!anchorPos.current) return false;
    
    const startX = anchorPos.current.x;
    const startY = anchorPos.current.y;
    const endX = target.x;
    const endY = target.y;

    const dx = endX - startX;
    const dy = endY - startY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const steps = Math.ceil(distance / (BUBBLE_RADIUS / 2)); 

    for (let i = 1; i < steps - 2; i++) { 
        const t = i / steps;
        const cx = startX + dx * t;
        const cy = startY + dy * t;

        for (const b of bubbles.current) {
            if (!b.active || b.id === target.id) continue;
            const distSq = Math.pow(cx - b.x, 2) + Math.pow(cy - b.y, 2);
            if (distSq < Math.pow(BUBBLE_RADIUS * 1.8, 2)) {
                return false; 
            }
        }
    }
    return true;
  };

  const getAllReachableClusters = (): TargetCandidate[] => {
    const activeBubbles = bubbles.current.filter(b => b.active);
    const uniqueColors = Array.from(new Set(activeBubbles.map(b => b.color))) as BubbleColor[];
    const allClusters: TargetCandidate[] = [];

    // Analyze opportunities for ALL colors
    for (const color of uniqueColors) {
        const visited = new Set<string>();
        
        for (const b of activeBubbles) {
            if (b.color !== color || visited.has(b.id)) continue;

            const clusterMembers: Bubble[] = [];
            const queue = [b];
            visited.add(b.id);

            while (queue.length > 0) {
                const curr = queue.shift()!;
                clusterMembers.push(curr);
                
                const neighbors = activeBubbles.filter(n => 
                    !visited.has(n.id) && n.color === color && isNeighbor(curr, n)
                );
                neighbors.forEach(n => {
                    visited.add(n.id);
                    queue.push(n);
                });
            }

            // Check if this cluster is hittable
            clusterMembers.sort((a,b) => b.y - a.y); 
            const hittableMember = clusterMembers.find(m => isPathClear(m));

            if (hittableMember) {
                const xPct = hittableMember.x / (gameContainerRef.current?.clientWidth || window.innerWidth);
                let desc = "Center";
                if (xPct < 0.33) desc = "Left";
                else if (xPct > 0.66) desc = "Right";

                allClusters.push({
                    id: hittableMember.id,
                    color: color,
                    size: clusterMembers.length,
                    row: hittableMember.row,
                    col: hittableMember.col,
                    pointsPerBubble: COLOR_CONFIG[color].points,
                    description: `${desc}`
                });
            }
        }
    }
    return allClusters;
  };

  const checkMatches = (startBubble: Bubble) => {
    const toCheck = [startBubble];
    const visited = new Set<string>();
    const matches: Bubble[] = [];
    const targetColor = startBubble.color;

    while (toCheck.length > 0) {
      const current = toCheck.pop()!;
      if (visited.has(current.id)) continue;
      visited.add(current.id);

      if (current.color === targetColor) {
        matches.push(current);
        const neighbors = bubbles.current.filter(b => b.active && !visited.has(b.id) && isNeighbor(current, b));
        toCheck.push(...neighbors);
      }
    }

    if (matches.length >= 3) {
      let points = 0;
      const basePoints = COLOR_CONFIG[targetColor].points;
      
      // Educational Scoring Logic
      let numberSum = 0;
      let letterCount = 0;
      let matchType = '';

      matches.forEach(b => {
        b.active = false;
        createExplosion(b.x, b.y, COLOR_CONFIG[b.color].hex);
        points += basePoints;
        
        if (b.contentType === 'number') {
            numberSum += parseInt(b.content);
        } else if (b.contentType === 'letter') {
            letterCount++;
        }
      });
      
      // Apply Educational Bonuses
      if (numberSum > 0 && letterCount === 0) {
          const bonus = numberSum * 20;
          points += bonus;
          matchType = `Math Bonus! +${bonus}`;
          soundManager.playSuccess();
      } else if (letterCount > 0 && numberSum === 0) {
          const bonus = letterCount * 50;
          points += bonus;
          matchType = `Literacy Bonus! +${bonus}`;
          soundManager.playSuccess();
      } else {
          // Mixed bonus
          points += 100;
          soundManager.playClick();
      }
      
      // Floating Text for Bonus
      if (matchType) {
          createFloatingText(startBubble.x, startBubble.y - 40, matchType, "#FFD700");
      }

      // Combo Multiplier
      const multiplier = matches.length > 3 ? 1.5 : 1.0;
      scoreRef.current += Math.floor(points * multiplier);
      setScore(scoreRef.current);
      return true;
    }
    return false;
  };

  const isNeighbor = (a: Bubble, b: Bubble) => {
    const dr = b.row - a.row;
    const dc = b.col - a.col;
    if (Math.abs(dr) > 1) return false;
    if (dr === 0) return Math.abs(dc) === 1;
    
    // Parity logic for neighbor checks needs to handle negative rows
    const isOdd = Math.abs(a.row) % 2 === 1;
    if (isOdd) {
        return dc === 0 || dc === 1;
    } else {
        return dc === -1 || dc === 0;
    }
  };

  const performAiAnalysis = async (screenshot: string) => {
    isAiThinkingRef.current = true;
    setIsAiThinking(true);
    setAiRecommendedColor(null);

    // Client-Side Pre-Calc for ALL colors
    const allClusters = getAllReachableClusters();
    const maxRow = bubbles.current.reduce((max, b) => b.active ? Math.max(max, b.row) : max, 0);
    // Danger calculation takes rowsAdded into account
    const dangerLevel = (maxRow + rowsAddedRef.current);

    // Use current logical width from container
    const logicalWidth = gameContainerRef.current?.clientWidth || 1000;

    // Pass the current color so AI knows what we are shooting
    getStrategicHint(
        screenshot,
        allClusters,
        dangerLevel,
        currentBallColorRef.current 
    ).then(aiResponse => {
        const { hint, debug } = aiResponse;
        setDebugInfo(debug);
        
        if (typeof hint.targetRow === 'number' && typeof hint.targetCol === 'number') {
            if (hint.recommendedColor) {
                setAiRecommendedColor(hint.recommendedColor);
            }
            const pos = getBubblePos(hint.targetRow, hint.targetCol, logicalWidth);
            setAimTarget(pos);
        }
        
        // Unlock
        isAiThinkingRef.current = false;
        setIsAiThinking(false);
    });
  };

  // --- Rendering Helper ---
  const drawBubble = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, colorKey: BubbleColor, content: string = "") => {
    const config = COLOR_CONFIG[colorKey];
    const baseColor = config.hex;
    
    // Main Sphere Gradient (gives 3D depth)
    const grad = ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, radius * 0.1, x, y, radius);
    grad.addColorStop(0, '#ffffff');             // Specular highlight center (brightest)
    grad.addColorStop(0.2, baseColor);           // Main color body
    grad.addColorStop(1, adjustColor(baseColor, -60)); // Shadowed edge (darkest)

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    // Subtle Outline
    ctx.strokeStyle = adjustColor(baseColor, -80);
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // Secondary "Glossy" Highlight
    ctx.beginPath();
    ctx.ellipse(x - radius * 0.3, y - radius * 0.35, radius * 0.25, radius * 0.15, Math.PI / 4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fill();

    // EDUCATIONAL CONTENT: Draw Text
    if (content) {
        ctx.save();
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.font = "bold 16px 'Roboto Mono', monospace"; // Slightly smaller text
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowColor = "rgba(0,0,0,0.5)";
        ctx.shadowBlur = 4;
        ctx.fillText(content, x, y + 1);
        ctx.restore();
    }
  };

  // --- FIRE LOGIC ---
  const fireBall = useCallback(() => {
     if (isFlying.current || gameOver) return;
     
     soundManager.playShoot();
     isFlying.current = true;
     flightStartTime.current = performance.now();
     
     // Velocity is proportional to charge (max 25 speed)
     const power = Math.max(0.1, chargePower.current);
     const speed = power * 25; 
     
     ballVel.current = {
         x: Math.cos(aimAngle.current) * speed,
         y: Math.sin(aimAngle.current) * speed
     };
     
     // Reset Charge
     chargePower.current = 0;
  }, [gameOver]);

  // --- Input & Physics Loop ---
  useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
          if (gameOver) return;
          keysPressed.current.add(e.key);
      };

      const handleKeyUp = (e: KeyboardEvent) => {
          if (gameOver) return;
          keysPressed.current.delete(e.key);
          
          if (e.key === ' ' && !isFlying.current) {
             fireBall();
          }
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      
      return () => {
          window.removeEventListener('keydown', handleKeyDown);
          window.removeEventListener('keyup', handleKeyUp);
      };
  }, [gameOver, fireBall]); 

  // --- TOUCH / MOUSE CONTROLS ---
  const handlePointerDown = (e: React.PointerEvent) => {
      if (gameOver || isFlying.current) return;
      isDragging.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
      if (!isDragging.current || !gameContainerRef.current || isFlying.current) return;
      
      const rect = gameContainerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const dx = x - anchorPos.current.x;
      const dy = y - anchorPos.current.y;
      
      // Calculate pull angle (user pulls back)
      const pullAngle = Math.atan2(dy, dx);
      
      // Aim angle is opposite to pull
      let newAimAngle = pullAngle + Math.PI;
      
      // Normalize angle
      while (newAimAngle > Math.PI) newAimAngle -= 2 * Math.PI;
      while (newAimAngle < -Math.PI) newAimAngle += 2 * Math.PI;

      // Calculate Power based on drag distance
      const dist = Math.sqrt(dx*dx + dy*dy);
      const power = Math.min(1.0, dist / MAX_DRAG_DIST);
      
      chargePower.current = power;
      
      // Update aim only if dragged enough to be intentional
      if (dist > 10) {
          // Clamp angle to upward direction to avoid shooting down
          aimAngle.current = Math.max(-Math.PI + 0.1, Math.min(-0.1, newAimAngle));
      }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      e.currentTarget.releasePointerCapture(e.pointerId);
      
      if (chargePower.current > 0.15) { 
          fireBall();
      } else {
          chargePower.current = 0; // Cancel shot
      }
  };

  // Mount Effect: Init Grid only once
  useEffect(() => {
    if (gameContainerRef.current) {
        initGrid(gameContainerRef.current.clientWidth);
    }
  }, [initGrid]);

  useEffect(() => {
    if (!canvasRef.current || !gameContainerRef.current) return;

    const canvas = canvasRef.current;
    const container = gameContainerRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    
    let animationFrameId: number;
    
    // Initial Setup
    // Get Device Pixel Ratio for Retina screens
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = container.clientWidth * dpr;
    canvas.height = container.clientHeight * dpr;
    canvas.style.width = `${container.clientWidth}px`;
    canvas.style.height = `${container.clientHeight}px`;
    
    // Scale all drawing operations
    ctx.scale(dpr, dpr);
    
    // Use logical dimensions for game logic
    const logicalWidth = container.clientWidth;
    const logicalHeight = container.clientHeight;

    anchorPos.current = { x: logicalWidth / 2, y: logicalHeight - SLINGSHOT_BOTTOM_OFFSET };
    
    // Only center ball if not flying to avoid jitter during resize
    if (!isFlying.current) {
        ballPos.current = { ...anchorPos.current };
    }
    
    // DO NOT CALL initGrid() HERE. It resets state on every gameOver change.

    const render = () => {
        // High DPI Resize Logic
        const dpr = window.devicePixelRatio || 1;
        const currentLogicalWidth = container.clientWidth;
        const currentLogicalHeight = container.clientHeight;
        
        if (canvas.width !== currentLogicalWidth * dpr || canvas.height !== currentLogicalHeight * dpr) {
            canvas.width = currentLogicalWidth * dpr;
            canvas.height = currentLogicalHeight * dpr;
            canvas.style.width = `${currentLogicalWidth}px`;
            canvas.style.height = `${currentLogicalHeight}px`;
            
            ctx.scale(dpr, dpr);
            
            // Recenter Anchor
            anchorPos.current = { x: currentLogicalWidth / 2, y: currentLogicalHeight - SLINGSHOT_BOTTOM_OFFSET };
            
            // Recenter Bubbles
            bubbles.current.forEach(b => {
                const { x, y } = getBubblePos(b.row, b.col, currentLogicalWidth);
                b.x = x;
                b.y = y;
            });
            
            if (!isFlying.current) {
                ballPos.current = { ...anchorPos.current };
            }
        }
        
        ctx.clearRect(0, 0, currentLogicalWidth, currentLogicalHeight);
        
        // Draw Background
        const bgGrad = ctx.createRadialGradient(currentLogicalWidth/2, currentLogicalHeight/2, 100, currentLogicalWidth/2, currentLogicalHeight/2, currentLogicalWidth);
        bgGrad.addColorStop(0, '#1e1e1e');
        bgGrad.addColorStop(1, '#000000');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, currentLogicalWidth, currentLogicalHeight);

        // --- UPDATE LOGIC ---
        
        if (!gameOver) {
            if (!isFlying.current && !isDragging.current) {
                // Keyboard Rotation (fallback)
                if (keysPressed.current.has('ArrowLeft')) aimAngle.current -= 0.03;
                if (keysPressed.current.has('ArrowRight')) aimAngle.current += 0.03;
                
                // Clamp Angle (-170 deg to -10 deg approx)
                aimAngle.current = Math.max(-Math.PI + 0.1, Math.min(-0.1, aimAngle.current));
                
                // Keyboard Charging
                if (keysPressed.current.has(' ')) {
                    chargePower.current = Math.min(1.0, chargePower.current + 0.02);
                } else {
                    chargePower.current = Math.max(0, chargePower.current - 0.1);
                }
            }
            
            // Update Ball Position based on charge (Visual drag back)
            if (!isFlying.current) {
                const dragDist = chargePower.current * MAX_DRAG_DIST;
                ballPos.current.x = anchorPos.current.x - Math.cos(aimAngle.current) * dragDist;
                ballPos.current.y = anchorPos.current.y - Math.sin(aimAngle.current) * dragDist;
            }

            // Physics Flying Loop
            if (isFlying.current) {
                if (performance.now() - flightStartTime.current > 5000) {
                    isFlying.current = false;
                    ballPos.current = { ...anchorPos.current };
                    ballVel.current = { x: 0, y: 0 };
                } else {
                    const currentSpeed = Math.sqrt(ballVel.current.x ** 2 + ballVel.current.y ** 2);
                    const steps = Math.ceil(currentSpeed / (BUBBLE_RADIUS * 0.8)); 
                    let collisionOccurred = false;

                    for (let i = 0; i < steps; i++) {
                        ballPos.current.x += ballVel.current.x / steps;
                        ballPos.current.y += ballVel.current.y / steps;
                        
                        // Wall Bounces (Logical Width)
                        if (ballPos.current.x < BUBBLE_RADIUS || ballPos.current.x > currentLogicalWidth - BUBBLE_RADIUS) {
                            ballVel.current.x *= -1;
                            ballPos.current.x = Math.max(BUBBLE_RADIUS, Math.min(currentLogicalWidth - BUBBLE_RADIUS, ballPos.current.x));
                            // Optional: Sound on bounce
                        }
                        
                        // Ceiling Collision (Visually adjusted ceiling)
                        if (ballPos.current.y < BUBBLE_RADIUS) {
                            collisionOccurred = true;
                            break;
                        }

                        // Bubble Collision
                        for (const b of bubbles.current) {
                            if (!b.active) continue;
                            const dist = Math.sqrt(
                                Math.pow(ballPos.current.x - b.x, 2) + 
                                Math.pow(ballPos.current.y - b.y, 2)
                            );
                            if (dist < BUBBLE_RADIUS * 1.8) { 
                                collisionOccurred = true;
                                break;
                            }
                        }
                        if (collisionOccurred) break;
                    }

                    ballVel.current.y += GRAVITY; 
                    ballVel.current.x *= FRICTION;
                    ballVel.current.y *= FRICTION;

                    if (collisionOccurred) {
                        isFlying.current = false;
                        
                        // Snap to Grid
                        let bestDist = Infinity;
                        let bestRow = 0;
                        let bestCol = 0;
                        let bestX = 0;
                        let bestY = 0;

                        // Range must cover potential new upper rows.
                        // rowsAddedRef is positive, so we scan from -rowsAdded.
                        const scanStartRow = -(rowsAddedRef.current + 2);

                        for (let r = scanStartRow; r < GRID_ROWS + 5; r++) {
                            // Logic for columns in staggered grid
                            const isOdd = Math.abs(r) % 2 === 1;
                            const colsInRow = isOdd ? GRID_COLS - 1 : GRID_COLS;
                            
                            for (let c = 0; c < colsInRow; c++) {
                                // Use Current Logical Width & rowsAdded
                                const { x, y } = getBubblePos(r, c, currentLogicalWidth);
                                const occupied = bubbles.current.some(b => b.active && b.row === r && b.col === c);
                                if (occupied) continue;

                                const dist = Math.sqrt(
                                    Math.pow(ballPos.current.x - x, 2) + 
                                    Math.pow(ballPos.current.y - y, 2)
                                );
                                
                                if (dist < bestDist) {
                                    bestDist = dist;
                                    bestRow = r;
                                    bestCol = c;
                                    bestX = x;
                                    bestY = y;
                                }
                            }
                        }

                        // Determine new bubble y-position for Game Over Check
                        if (bestY + BUBBLE_RADIUS > anchorPos.current.y - 120) {
                            setGameOver(true);
                        }

                        const newBubble: Bubble = {
                            id: `${bestRow}-${bestCol}-${Date.now()}`,
                            row: bestRow,
                            col: bestCol,
                            x: bestX,
                            y: bestY,
                            color: currentBallColorRef.current,
                            active: true,
                            content: currentBallContent.current.content,
                            contentType: currentBallContent.current.type
                        };
                        bubbles.current.push(newBubble);
                        
                        // Check matches returns true if match occurred
                        // Sound logic is inside checkMatches (via props, but local is better here)
                        const matched = checkMatches(newBubble);
                        
                        if (!matched) {
                            soundManager.playClick(); // Clack sound for attach
                        }
                        
                        // RANDOMIZE NEXT BALL COLOR
                        // Pick from currently valid colors on the board
                        const validColors = getActiveColors();
                        currentBallColorRef.current = validColors[Math.floor(Math.random() * validColors.length)];
                        
                        // Prepare next ball content
                        currentBallContent.current = getRandomContent();
                        ballPos.current = { ...anchorPos.current };
                        ballVel.current = { x: 0, y: 0 };
                        
                        // DIFFICULTY INCREMENT
                        shotsFiredRef.current++;
                        setShotsUntilRow(Math.max(0, SHOTS_PER_ROW - shotsFiredRef.current));

                        if (shotsFiredRef.current >= SHOTS_PER_ROW) {
                            shotsFiredRef.current = 0;
                            rowsAddedRef.current++;
                            setShotsUntilRow(SHOTS_PER_ROW);

                            // Recalculate positions for ALL bubbles
                            bubbles.current.forEach(b => {
                                const { x, y } = getBubblePos(b.row, b.col, currentLogicalWidth);
                                b.x = x;
                                b.y = y;
                            });

                            // Add new row at top
                            const newRowIndex = -(rowsAddedRef.current); // E.g. -1, -2
                            const isOdd = Math.abs(newRowIndex) % 2 === 1;
                            const colsInRow = isOdd ? GRID_COLS - 1 : GRID_COLS;
                            
                            for (let c = 0; c < colsInRow; c++) {
                                const { x, y } = getBubblePos(newRowIndex, c, currentLogicalWidth);
                                const { content, type } = getRandomContent();
                                bubbles.current.push({
                                    id: `${newRowIndex}-${c}-${Date.now()}`,
                                    row: newRowIndex,
                                    col: c,
                                    x,
                                    y,
                                    color: COLOR_KEYS[Math.floor(Math.random() * COLOR_KEYS.length)],
                                    active: true,
                                    content,
                                    contentType: type
                                });
                            }
                            
                            // Check game over again after shift
                            const lowestBubbleY = bubbles.current.reduce((max, b) => b.active ? Math.max(max, b.y) : max, 0);
                            if (lowestBubbleY + BUBBLE_RADIUS > anchorPos.current.y - 120) {
                                setGameOver(true);
                            }
                        }

                        if (!gameOver) {
                            captureRequestRef.current = true;
                        }
                    }
                    
                    // Out of bounds bottom
                    if (ballPos.current.y > currentLogicalHeight) {
                        isFlying.current = false;
                        ballPos.current = { ...anchorPos.current };
                        ballVel.current = { x: 0, y: 0 };
                    }
                }
            }
        }

        // --- DRAWING ---

        // Aim Guide (Dotted Line)
        if (!isFlying.current && !gameOver) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(anchorPos.current.x, anchorPos.current.y);
            const guideLen = 800;
            ctx.lineTo(
                anchorPos.current.x + Math.cos(aimAngle.current) * guideLen, 
                anchorPos.current.y + Math.sin(aimAngle.current) * guideLen
            );
            ctx.strokeStyle = 'rgba(255,255,255,0.1)';
            ctx.setLineDash([10, 10]);
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();
        }

        // Draw Grid Bubbles
        bubbles.current.forEach(b => {
            if (!b.active) return;
            drawBubble(ctx, b.x, b.y, BUBBLE_RADIUS - 1, b.color, b.content);
        });

        // AI Aim Highlight
        const currentAimTarget = aimTargetRef.current;
        if (currentAimTarget && !isFlying.current && !gameOver) {
             const recColor = aiRecommendedColor ? aiRecommendedColor : currentBallColorRef.current;
             const isMatch = recColor === currentBallColorRef.current;
             
             if (currentAimTarget && isMatch) {
                ctx.save();
                ctx.shadowBlur = 20;
                ctx.shadowColor = COLOR_CONFIG[recColor].hex;
                ctx.beginPath();
                ctx.arc(currentAimTarget.x, currentAimTarget.y, BUBBLE_RADIUS + 5, 0, Math.PI * 2);
                ctx.strokeStyle = COLOR_CONFIG[recColor].hex;
                ctx.lineWidth = 3;
                ctx.setLineDash([5, 5]);
                ctx.stroke();
                ctx.restore();
             }
        }

        // Slingshot Bands (Back)
        const bandColor = chargePower.current > 0 ? '#fdd835' : 'rgba(255,255,255,0.3)';
        if (!isFlying.current) {
            ctx.beginPath();
            ctx.moveTo(anchorPos.current.x - 30, anchorPos.current.y);
            ctx.lineTo(ballPos.current.x, ballPos.current.y);
            ctx.lineWidth = 5;
            ctx.strokeStyle = bandColor;
            ctx.lineCap = 'round';
            ctx.stroke();
        }

        // Ball
        ctx.save();
        drawBubble(
            ctx, 
            ballPos.current.x, 
            ballPos.current.y, 
            BUBBLE_RADIUS, 
            currentBallColorRef.current,
            currentBallContent.current.content
        );
        ctx.restore();

        // Slingshot Bands (Front)
        if (!isFlying.current) {
            ctx.beginPath();
            ctx.moveTo(ballPos.current.x, ballPos.current.y);
            ctx.lineTo(anchorPos.current.x + 30, anchorPos.current.y);
            ctx.lineWidth = 5;
            ctx.strokeStyle = bandColor;
            ctx.lineCap = 'round';
            ctx.stroke();
        }

        // Slingshot Handle
        ctx.beginPath();
        ctx.moveTo(anchorPos.current.x, currentLogicalHeight); 
        ctx.lineTo(anchorPos.current.x, anchorPos.current.y + 40); 
        ctx.lineTo(anchorPos.current.x - 35, anchorPos.current.y); 
        ctx.moveTo(anchorPos.current.x, anchorPos.current.y + 40);
        ctx.lineTo(anchorPos.current.x + 35, anchorPos.current.y); 
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#444';
        ctx.stroke();

        // Particles
        for (let i = particles.current.length - 1; i >= 0; i--) {
            const p = particles.current[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.05;
            if (p.life <= 0) particles.current.splice(i, 1);
            else {
                ctx.globalAlpha = p.life;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
                ctx.globalAlpha = 1.0;
            }
        }
        
        // Floating Texts (Bonuses)
        for (let i = floatingTexts.current.length - 1; i >= 0; i--) {
            const ft = floatingTexts.current[i];
            ft.y += ft.vy;
            ft.life -= 0.02;
            if (ft.life <= 0) {
                floatingTexts.current.splice(i, 1);
            } else {
                ctx.save();
                ctx.globalAlpha = Math.min(1, ft.life);
                ctx.fillStyle = ft.color;
                ctx.font = "bold 24px 'Roboto Mono', monospace";
                ctx.shadowColor = "black";
                ctx.shadowBlur = 4;
                ctx.fillText(ft.text, ft.x, ft.y);
                ctx.restore();
            }
        }

        // Capture Logic
        if (captureRequestRef.current && !gameOver) {
            captureRequestRef.current = false;
            const offscreen = document.createElement('canvas');
            const targetWidth = 480; 
            const scale = Math.min(1, targetWidth / canvas.width); // canvas.width is scaled
            offscreen.width = canvas.width * scale;
            offscreen.height = canvas.height * scale;
            const oCtx = offscreen.getContext('2d');
            if (oCtx) {
                oCtx.drawImage(canvas, 0, 0, offscreen.width, offscreen.height);
                const screenshot = offscreen.toDataURL("image/jpeg", 0.6);
                setTimeout(() => performAiAnalysis(screenshot), 0);
            }
        }
        
        animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
        cancelAnimationFrame(animationFrameId);
    };
  }, [gameOver, getActiveColors, fireBall]);

  const handleRestart = () => {
    // Reset via initGrid logic
    if (gameContainerRef.current) {
        initGrid(gameContainerRef.current.clientWidth);
    }
  };

  return (
    <div className="flex w-full h-screen bg-[#121212] overflow-hidden font-roboto text-[#e3e3e3]">
      
      {/* GAME AREA */}
      <div 
        ref={gameContainerRef} 
        className="flex-1 relative h-full overflow-hidden touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* Loading Overlay */}
        {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
            <div className="flex flex-col items-center">
                <Loader2 className="w-12 h-12 text-[#42a5f5] animate-spin mb-4" />
                <p className="text-[#e3e3e3] text-lg font-medium">Starting Engine...</p>
            </div>
            </div>
        )}

        {/* Game Over Overlay */}
        {gameOver && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-50 backdrop-blur-sm animate-in fade-in duration-300">
                <div className="bg-[#1e1e1e] p-8 rounded-[32px] border border-[#444746] shadow-2xl flex flex-col items-center text-center max-w-sm w-full">
                    <div className="bg-red-500/20 p-4 rounded-full mb-6">
                        <AlertTriangle className="w-10 h-10 text-red-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Game Over!</h2>
                    <p className="text-[#c4c7c5] mb-6">The bubbles reached the bottom.</p>
                    
                    <div className="bg-[#2d2d2d] w-full p-4 rounded-xl mb-6 flex justify-between items-center">
                        <span className="text-sm font-medium text-[#c4c7c5] uppercase tracking-wider">Final Score</span>
                        <span className="text-2xl font-bold text-[#42a5f5]">{score.toLocaleString()}</span>
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <button 
                            onClick={handleRestart}
                            className="flex items-center justify-center gap-2 bg-[#a8c7fa] hover:bg-[#82b4f8] text-[#062e6f] px-6 py-3 rounded-full font-bold transition-transform active:scale-95 w-full"
                        >
                            <RotateCcw className="w-5 h-5" />
                            Play Again
                        </button>
                        <button 
                            onClick={onExit}
                            className="flex items-center justify-center gap-2 bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white px-6 py-3 rounded-full font-bold transition-transform active:scale-95 w-full border border-[#444746]"
                        >
                            <Home className="w-5 h-5" />
                            Main Menu
                        </button>
                    </div>
                </div>
            </div>
        )}

        {/* HUD: Score & Danger */}
        {/* Scaled down for mobile "zoom out" effect */}
        <div className="absolute top-4 left-4 z-40 flex flex-col gap-2 pointer-events-none origin-top-left scale-75 md:scale-100">
            <div className="bg-[#1e1e1e]/80 backdrop-blur p-4 rounded-[24px] border border-[#444746] shadow-xl flex items-center gap-4 min-w-[140px]">
                <div className="bg-[#42a5f5]/20 p-2 rounded-full">
                    <Trophy className="w-5 h-5 text-[#42a5f5]" />
                </div>
                <div>
                    <p className="text-[10px] text-[#c4c7c5] uppercase tracking-wider font-medium">Score</p>
                    <p className="text-2xl font-bold text-white leading-none">{score.toLocaleString()}</p>
                </div>
            </div>

             <div className="bg-[#1e1e1e]/80 backdrop-blur p-4 rounded-[24px] border border-[#444746] shadow-xl flex items-center gap-4 min-w-[140px]">
                <div className="bg-[#ffa726]/20 p-2 rounded-full">
                    <ArrowDownToLine className="w-5 h-5 text-[#ffa726]" />
                </div>
                <div>
                    <p className="text-[10px] text-[#c4c7c5] uppercase tracking-wider font-medium">Shift In</p>
                    <p className="text-2xl font-bold text-white leading-none">{shotsUntilRow}</p>
                </div>
            </div>
        </div>

        {/* HUD: Controls Tip */}
        <div className="absolute top-6 right-6 z-40 pointer-events-none hidden md:block">
             <div className="bg-[#1e1e1e]/80 backdrop-blur border border-[#444746] p-4 rounded-xl text-xs text-[#c4c7c5] space-y-2">
                 <div className="flex items-center gap-2">
                     <Keyboard className="w-4 h-4" />
                     <span className="font-bold uppercase">Desktop Controls</span>
                 </div>
                 <div className="flex items-center justify-between gap-4">
                     <span>Aim</span>
                     <span className="bg-white/10 px-2 py-0.5 rounded text-white font-mono">← / →</span>
                 </div>
                 <div className="flex items-center justify-between gap-4">
                     <span>Shoot</span>
                     <span className="bg-white/10 px-2 py-0.5 rounded text-white font-mono">Hold SPACE</span>
                 </div>
             </div>
        </div>
        
        {/* Mobile Aim Tip */}
        <div className="absolute bottom-24 w-full text-center pointer-events-none md:hidden opacity-50 text-[#c4c7c5] text-sm font-bold animate-pulse">
            <MousePointer2 className="w-4 h-4 inline mr-2" />
            Drag back to Aim & Shoot
        </div>

        {/* Watermark */}
        <div className="absolute bottom-4 right-4 z-30 opacity-50 pointer-events-none flex items-center gap-2">
            {isAiThinking && <Loader2 className="w-3 h-3 animate-spin text-[#a8c7fa]" />}
            <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3 h-3 text-white" />
                <p className="text-[10px] text-white font-medium">Educational Mode</p>
            </div>
            <p className="text-[10px] text-white font-medium">| Powered by Google Gemini 3 Flash</p>
        </div>
      </div>
    </div>
  );
};

export default GeminiSlingshot;
