
import React, { useState, useEffect, useRef } from 'react';
import { Subject, Question, SUBJECT_THEMES } from '../../types/types_BQ';
import { generateLevelQuestions } from './geminiService_BQ';
import { Loader2, Rocket, ArrowLeft, Pause, Play, Zap, Sparkles, Volume2, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../../utils/soundService_BQ';

interface GameLevelProps {
  subject: Subject;
  levelIndex: number;
  onComplete: (score: number) => void;
  onExit: () => void;
}

// Game Constants
const FPS = 60;
const SHIP_SPEED = 1.5; // % per frame
const BULLET_SPEED = 2.5; // % per frame
const TARGET_SPEED_BASE = 0.2; // % per frame

interface Entity {
  id: string;
  x: number; // % (0-100)
  y: number; // % (0-100)
  text?: string;
  isCorrect?: boolean;
  colorClass?: string;
}

// Neon color palettes for targets
const NEON_COLORS = [
  'shadow-[0_0_15px_#f472b6] border-pink-400 text-pink-100 bg-pink-900/40',
  'shadow-[0_0_15px_#a78bfa] border-violet-400 text-violet-100 bg-violet-900/40',
  'shadow-[0_0_15px_#22d3ee] border-cyan-400 text-cyan-100 bg-cyan-900/40',
  'shadow-[0_0_15px_#34d399] border-emerald-400 text-emerald-100 bg-emerald-900/40',
];

const GameLevel: React.FC<GameLevelProps> = ({ subject, levelIndex, onComplete, onExit }) => {
  // --- Game State ---
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [gameState, setGameState] = useState<'START' | 'PLAYING' | 'PAUSED' | 'COMPLETE'>('START');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{msg: string, type: 'good'|'bad'} | null>(null);

  // Refs for Game Loop
  const requestRef = useRef<number>(0);
  const shipPos = useRef<number>(50); // X %
  const bullets = useRef<Entity[]>([]);
  const targets = useRef<Entity[]>([]);
  const keysPressed = useRef<Record<string, boolean>>({});
  const frameCount = useRef(0);
  
  // Force re-render for visual updates that need React (score/UI)
  const [, setTick] = useState(0);

  // --- Initialization ---
  useEffect(() => {
    const fetchQ = async () => {
      setLoading(true);
      const data = await generateLevelQuestions(subject, levelIndex + 1);
      setQuestions(data);
      setLoading(false);
    };
    fetchQ();
    return () => cancelAnimationFrame(requestRef.current);
  }, [subject, levelIndex]);

  // --- Input Handling ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.code] = true;
      if (e.code === 'Space' && gameState === 'PLAYING') fireBullet();
    };
    const handleKeyUp = (e: KeyboardEvent) => keysPressed.current[e.code] = false;
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState]);

  // --- Game Mechanics ---

  const fireBullet = () => {
    soundManager.playShoot();
    bullets.current.push({
      id: Math.random().toString(),
      x: shipPos.current,
      y: 82, // Just above ship
    });
  };

  const spawnTargets = (question: Question) => {
    targets.current = [];
    if (question.options) {
      const laneCount = question.options.length;
      const laneWidth = 100 / laneCount;
      const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

      shuffledOptions.forEach((opt, idx) => {
        targets.current.push({
          id: `t-${idx}-${Math.random()}`,
          x: (idx * laneWidth) + (laneWidth / 2),
          y: -15 - (Math.random() * 25), // Staggered start above screen
          text: opt,
          isCorrect: opt === question.correctAnswer,
          colorClass: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)]
        });
      });
    }
  };

  const handleImpact = (isCorrect: boolean, x: number, y: number) => {
    if (isCorrect) {
      soundManager.playCorrect();
      soundManager.playExplosion();
      
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: x / 100, y: y / 100 },
        colors: ['#22d3ee', '#fcd34d']
      });
      setScore(s => s + 100);
      setFeedback({ msg: "Target Neutralized!", type: "good" });
      
      // Delay before next question
      setTimeout(() => {
        setFeedback(null);
        if (currentQIndex < questions.length - 1) {
          setCurrentQIndex(prev => prev + 1);
          spawnTargets(questions[currentQIndex + 1]);
        } else {
          setGameState('COMPLETE');
          soundManager.playWin();
          onComplete(score + 100);
        }
      }, 1500);

      // Clear targets temporarily
      targets.current = [];
      
    } else {
      soundManager.playWrong();
      setScore(s => Math.max(0, s - 20));
      setFeedback({ msg: "Miss!", type: "bad" });
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  const update = () => {
    if (gameState !== 'PLAYING') return;

    // 1. Move Ship
    if (keysPressed.current['ArrowLeft']) shipPos.current = Math.max(5, shipPos.current - SHIP_SPEED);
    if (keysPressed.current['ArrowRight']) shipPos.current = Math.min(95, shipPos.current + SHIP_SPEED);

    // 2. Move Bullets
    bullets.current.forEach(b => b.y -= BULLET_SPEED);
    bullets.current = bullets.current.filter(b => b.y > -5);

    // 3. Move Targets
    const currentQuestion = questions[currentQIndex];
    if (targets.current.length === 0 && currentQuestion && frameCount.current % 60 === 0) {
         spawnTargets(currentQuestion);
    }

    targets.current.forEach(t => {
      t.y += TARGET_SPEED_BASE + (levelIndex * 0.03);
      if (t.y > 110) {
        t.y = -20;
        t.x = Math.random() * 80 + 10;
      }
    });

    // 4. Collision Detection
    for (let bIndex = bullets.current.length - 1; bIndex >= 0; bIndex--) {
      const b = bullets.current[bIndex];
      let hit = false;
      
      for (let tIndex = targets.current.length - 1; tIndex >= 0; tIndex--) {
        const t = targets.current[tIndex];
        
        // Hitbox approx (in %)
        const xDist = Math.abs(b.x - t.x);
        const yDist = Math.abs(b.y - t.y);

        if (xDist < 6 && yDist < 6) {
          hit = true;
          handleImpact(!!t.isCorrect, t.x, t.y);
          if (!t.isCorrect) {
             targets.current.splice(tIndex, 1); // Remove wrong target
          }
          break; 
        }
      }

      if (hit) {
        bullets.current.splice(bIndex, 1);
      }
    }

    frameCount.current++;
    setTick(prev => prev + 1);
    requestRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [gameState, currentQIndex, questions]);

  useEffect(() => {
    if (gameState === 'PLAYING' && questions.length > 0 && targets.current.length === 0) {
      spawnTargets(questions[currentQIndex]);
    }
  }, [gameState, questions, currentQIndex]);


  // --- Render Helpers ---

  if (loading) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f172a] text-cyan-200 z-50">
        <Loader2 className="w-12 h-12 animate-spin mb-4 opacity-80" />
        <h2 className="text-xl font-bold tracking-widest uppercase animate-pulse">Initializing Systems...</h2>
      </div>
    );
  }

  return (
    <div 
      className="absolute inset-0 overflow-hidden bg-[#0f172a] touch-none select-none font-sans"
      onTouchMove={(e) => {
        const touch = e.touches[0];
        // Calculate percentage relative to the container's width, not window
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const pct = ((touch.clientX - rect.left) / rect.width) * 100;
        shipPos.current = Math.max(5, Math.min(95, pct));
      }}
      onClick={(e) => {
        if ((e.target as HTMLElement).tagName !== 'BUTTON') {
             fireBullet();
        }
      }}
    >
      <style>{`
        /* Starfield Background Animation */
        @keyframes drift {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(56,189,248,0.8) 0%, transparent 70%);
          border-radius: 50%;
          animation: drift 10s infinite linear;
        }
      `}</style>

      {/* --- 1. Background Layer (Space Style) --- */}
      <div className={`absolute inset-0 z-0 bg-gradient-to-b from-slate-900 via-[#1e1b4b] to-slate-900`}>
         {/* Neural/Tech Pattern Overlay */}
         <div className="absolute inset-0 opacity-[0.05]" 
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} 
         />
         {/* Floating Particles */}
         {[...Array(8)].map((_, i) => (
            <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100 + 20}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
            }} />
         ))}
      </div>

      {/* --- 2. HUD Layer --- */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-30 pointer-events-none">
         <div className="flex gap-4 pointer-events-auto">
             <button onClick={() => { soundManager.playClick(); onExit(); }} className="bg-slate-800/40 backdrop-blur-md border border-white/10 p-3 rounded-full hover:bg-white/10 transition-colors">
                <ArrowLeft className="w-5 h-5 text-cyan-200" />
             </button>
             <div className="bg-slate-800/40 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full shadow-lg flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                 <span className="font-mono text-cyan-100 font-bold tracking-wider">{score.toString().padStart(5, '0')}</span>
             </div>
         </div>
         <div className="flex gap-1">
            {questions.map((_, i) => (
                <div key={i} className={`h-1.5 w-6 rounded-full transition-all ${i === currentQIndex ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : i < currentQIndex ? 'bg-emerald-500' : 'bg-slate-700'}`} />
            ))}
         </div>
      </div>

      {/* --- 3. Gameplay Layer --- */}
      
      {/* Current Question Display (Top Center) */}
      <div className="absolute top-20 left-0 w-full flex justify-center z-20 pointer-events-none">
         <div className={`
            max-w-md mx-4 px-8 py-4 rounded-3xl backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] 
            transform transition-all duration-300
            ${feedback?.type === 'good' ? 'bg-emerald-500/20 border-emerald-400 scale-105' : feedback?.type === 'bad' ? 'bg-rose-500/20 border-rose-400 shake' : 'bg-slate-800/60'}
         `}>
            <h2 className={`text-xl md:text-3xl font-bold text-center leading-tight ${feedback ? 'text-white' : 'text-cyan-100'}`}>
                {feedback ? feedback.msg : questions[currentQIndex]?.text}
            </h2>
         </div>
      </div>

      {/* Game World */}
      <div className="absolute inset-0 z-10">
          
          {/* Targets (Memory Nodes) */}
          {targets.current.map((t) => (
              <div 
                key={t.id}
                className={`absolute flex items-center justify-center rounded-full border-2 backdrop-blur-md transition-transform ${t.colorClass}`}
                style={{
                    left: `${t.x}%`,
                    top: `${t.y}%`,
                    width: '12vh',
                    height: '12vh',
                    transform: 'translate(-50%, -50%)',
                }}
              >
                  {/* Inner Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                  <span className="text-white font-bold text-lg md:text-2xl drop-shadow-md z-10">{t.text}</span>
              </div>
          ))}

          {/* Bullets (Energy Pulses) */}
          {bullets.current.map((b) => (
              <div 
                key={b.id}
                className="absolute bg-cyan-300 rounded-full shadow-[0_0_15px_#22d3ee]"
                style={{
                    left: `${b.x}%`,
                    top: `${b.y}%`,
                    width: '6px',
                    height: '24px',
                    transform: 'translate(-50%, 0)',
                    opacity: 0.8
                }}
              />
          ))}

          {/* Player Ship (Rocket) */}
          <div 
            className="absolute bottom-8 transition-transform duration-75 ease-out"
            style={{
                left: `${shipPos.current}%`,
                transform: `translateX(-50%) rotate(${keysPressed.current['ArrowLeft'] ? '-10deg' : keysPressed.current['ArrowRight'] ? '10deg' : '0deg'})`
            }}
          >
             <div className="relative group">
                 {/* Main Ship Body */}
                 <div className="relative z-10">
                    <Rocket size={56} className="text-cyan-400 fill-slate-900 stroke-[1.5px] drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                    {/* Glowing Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-100 rounded-full blur-[2px] animate-pulse" />
                 </div>
                 
                 {/* Engine Trail */}
                 <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-cyan-400 to-transparent blur-sm opacity-60" />
                 <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-6 h-8 bg-cyan-500/20 blur-md rounded-full animate-pulse" />
             </div>
             
             {/* Mobile Hint */}
             <div className="absolute top-full mt-4 w-40 left-1/2 -translate-x-1/2 text-cyan-200/30 text-[10px] uppercase tracking-widest text-center md:hidden">
                Tap to Fire
             </div>
          </div>
      </div>

      {/* --- 4. Overlays --- */}

      {/* Start Overlay */}
      {gameState === 'START' && (
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center z-50 p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 animate-pulse-ring border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <Rocket className="w-12 h-12 text-cyan-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                Rocket Defense
            </h1>
            <p className="text-cyan-200/60 text-lg mb-10 max-w-md">
                Intercept the correct data packets to charge the defense network.
            </p>
            <button 
                onClick={() => {
                  soundManager.playClick();
                  setGameState('PLAYING');
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xl font-bold py-4 px-12 rounded-full shadow-[0_0_25px_rgba(6,182,212,0.4)] transform transition hover:scale-105 active:scale-95 flex items-center gap-3"
            >
                <Play fill="currentColor" size={20} /> INITIATE
            </button>
        </div>
      )}

      {/* Complete Overlay */}
      {gameState === 'COMPLETE' && (
         <div className="absolute inset-0 bg-slate-900/95 flex flex-col items-center justify-center z-50 text-center p-6">
             <div className="text-6xl mb-6 animate-float">🏆</div>
             <h2 className="text-4xl font-bold text-white mb-2">Sector Secured!</h2>
             <p className="text-cyan-200/60 text-xl mb-10">Defense Systems Charged</p>
             <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/10 mb-8 min-w-[200px]">
                 <div className="text-sm text-slate-400 uppercase tracking-widest mb-1">Total Score</div>
                 <div className="text-5xl font-mono font-bold text-yellow-400">{score}</div>
             </div>
             <button 
                 onClick={() => {
                   soundManager.playClick();
                   onComplete(score);
                 }}
                 className="bg-yellow-500 hover:bg-yellow-400 text-yellow-950 text-xl font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-transform hover:scale-105"
             >
                 Continue Journey
             </button>
         </div>
      )}

      {/* Pause Button */}
      {gameState === 'PLAYING' && (
        <button 
            onClick={() => {
              soundManager.playClick();
              setGameState('PAUSED');
            }}
            className="absolute bottom-6 right-6 bg-slate-800/40 backdrop-blur-md border border-white/10 p-4 rounded-full text-cyan-200 hover:bg-white/10 z-30 transition-all hover:scale-110"
        >
            <Pause />
        </button>
      )}

      {/* Pause Menu */}
      {gameState === 'PAUSED' && (
         <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center z-50">
             <h2 className="text-3xl text-white font-bold mb-8 tracking-widest">SYSTEM PAUSED</h2>
             <div className="flex gap-4">
                 <button onClick={() => { soundManager.playClick(); setGameState('PLAYING'); }} className="bg-cyan-600 hover:bg-cyan-500 px-8 py-3 rounded-full text-white font-bold shadow-lg transition-transform hover:scale-105">Resume</button>
                 <button onClick={onExit} className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-full text-white font-bold transition-transform hover:scale-105 border border-white/10">Abort Mission</button>
             </div>
         </div>
      )}

    </div>
  );
};

export default GameLevel;
