
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GRID_WIDTH, GRID_HEIGHT, SHAPES, COLORS, INITIAL_THEME, BASIC_DICTIONARY } from '../../constants_WS';
import { Grid, ActivePiece, GameState, WordMatch, ThemeConfig, Cell } from '../../types/types_WS';
import { createEmptyGrid, checkCollision, mergePieceToGrid, findWords, clearBoard, applyGravity, checkFullRows } from './Game_Logic_WS';
import { getThemeConfig, getAIHint, checkWordWithAI } from './Game_Service_WS';
import { Trophy, Play, RotateCcw, Pause, Brain, Sparkles, ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, RotateCw, HelpCircle } from 'lucide-react';

interface WordStackProps {
  onClose: () => void;
  onScoreUpdate: (score: number) => void;
}

const WordStack: React.FC<WordStackProps> = ({ onClose, onScoreUpdate }) => {
  const [grid, setGrid] = useState<Grid>(createEmptyGrid());
  const [activePiece, setActivePiece] = useState<ActivePiece | null>(null);
  const [gameState, setGameState] = useState<GameState>(GameState.MENU);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [linesCleared, setLinesCleared] = useState(0);
  const [theme, setTheme] = useState<ThemeConfig>(INITIAL_THEME);
  const [nextPiece, setNextPiece] = useState<ActivePiece | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [highScores, setHighScores] = useState<{name: string, score: number}[]>([]);
  const [playerName, setPlayerName] = useState('');
  const [showRules, setShowRules] = useState(false);

  const gameLoopRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const dropCounterRef = useRef<number>(0);

  // --- Game Logic ---

  const getRandomLetter = useCallback(() => {
    const weights = theme.letterWeights;
    const letters = Object.keys(weights);
    const totalWeight = letters.reduce((sum, l) => sum + weights[l], 0);
    let random = Math.random() * totalWeight;
    
    for (const letter of letters) {
      if (random < weights[letter]) return letter;
      random -= weights[letter];
    }
    return 'E';
  }, [theme]);

  const createPiece = useCallback((): ActivePiece => {
    const specialRoll = Math.random();
    let specialType: any = 'NORMAL';
    let shape: any;

    if (specialRoll < 0.05) specialType = 'BOMB';
    else if (specialRoll < 0.10) specialType = 'HEAVY';
    else if (specialRoll < 0.15) specialType = 'SPLITTER';
    else if (specialRoll < 0.20) specialType = 'GHOST';

    if (specialType !== 'NORMAL') {
        shape = specialType;
    } else {
        // Filter out special shapes from random selection
        const normalShapes = Object.keys(SHAPES).filter(k => !['BOMB', 'HEAVY', 'SPLITTER', 'GHOST'].includes(k));
        shape = normalShapes[Math.floor(Math.random() * normalShapes.length)];
    }

    const shapeCoords = SHAPES[shape][0];
    const letters = shapeCoords.map(() => getRandomLetter());
    
    return {
      shape,
      x: Math.floor(GRID_WIDTH / 2) - 1,
      y: 0,
      rotation: 0,
      letters,
      color: COLORS[shape],
      specialType,
      ghostTimer: specialType === 'GHOST' ? Date.now() + 3000 : undefined,
      isGhostSolid: false,
    };
  }, [getRandomLetter]);

  const startGame = () => {
    setGrid(createEmptyGrid());
    setScore(0);
    setLevel(1);
    setLinesCleared(0);
    setGameState(GameState.PLAYING);
    setActivePiece(createPiece());
    setNextPiece(createPiece());
    setHint(null);
  };

  const gameOver = () => {
    setGameState(GameState.GAME_OVER);
    onScoreUpdate(score);
  };

  const saveScore = () => {
      if (!playerName.trim()) return;
      const newHighScores = [...highScores, { name: playerName, score }].sort((a, b) => b.score - a.score).slice(0, 5);
      setHighScores(newHighScores);
      setPlayerName('');
      startGame();
  };

  const movePiece = (dx: number, dy: number) => {
    if (!activePiece || gameState !== GameState.PLAYING || isProcessing) return;
    
    if (!checkCollision({ ...activePiece, x: activePiece.x + dx, y: activePiece.y + dy }, grid)) {
      setActivePiece({ ...activePiece, x: activePiece.x + dx, y: activePiece.y + dy });
      return true;
    }
    return false;
  };

  const rotatePiece = () => {
    if (!activePiece || gameState !== GameState.PLAYING || isProcessing) return;
    
    // Heavy pieces cannot rotate
    if (activePiece.specialType === 'HEAVY') return;

    const nextRotation = (activePiece.rotation + 1) % SHAPES[activePiece.shape].length;
    if (!checkCollision({ ...activePiece, rotation: nextRotation }, grid)) {
      setActivePiece({ ...activePiece, rotation: nextRotation });
    }
  };

  const dropPiece = useCallback(async () => {
    if (!activePiece || gameState !== GameState.PLAYING || isProcessing) return;

    if (!checkCollision({ ...activePiece, y: activePiece.y + 1 }, grid)) {
      setActivePiece({ ...activePiece, y: activePiece.y + 1 });
    } else {
      // Lock piece
      setIsProcessing(true);
      const newGrid = mergePieceToGrid(activePiece, grid);
      
      // Clear previous hints
      for (let y = 0; y < GRID_HEIGHT; y++) {
          for (let x = 0; x < GRID_WIDTH; x++) {
              if (newGrid[y][x]) {
                  newGrid[y][x]!.isHint = false;
              }
          }
      }

      // Process matches and full rows
      const matches = findWords(newGrid);
      const clearingMatches = matches.filter(m => m.type === 'CLEAR');
      const hintMatches = matches.filter(m => m.type === 'HINT');
      const fullRows = checkFullRows(newGrid);
      
      const { grid: clearedGrid, score: gainedScore, clearedCells } = clearBoard(newGrid, clearingMatches, fullRows);
      
      // Force gravity for SPLITTER and BOMB (to fill hole)
      const shouldForceGravity = activePiece.specialType === 'SPLITTER' || activePiece.specialType === 'BOMB';

      if (clearedCells > 0 || shouldForceGravity) {
        setGrid(clearedGrid);
        setScore(s => s + gainedScore);
        
        // Apply gravity
        setTimeout(() => {
            const gravityGrid = applyGravity(clearedGrid);
            setGrid(gravityGrid);
            
            // Check for chain reactions
            const chainMatches = findWords(gravityGrid);
            const chainClearingMatches = chainMatches.filter(m => m.type === 'CLEAR');
            const chainFullRows = checkFullRows(gravityGrid);

            if (chainClearingMatches.length > 0 || chainFullRows.length > 0) {
                // Recursive or simplified chain
                const { grid: chainGrid, score: chainScore } = clearBoard(gravityGrid, chainClearingMatches, chainFullRows);
                setGrid(applyGravity(chainGrid));
                setScore(s => s + chainScore);
            }
            
            spawnNext();
        }, 300);
      } else {
        // Apply hints if no clears
        if (hintMatches.length > 0) {
            hintMatches.forEach(m => {
                m.coordinates.forEach(c => {
                    if (newGrid[c.y][c.x]) {
                        newGrid[c.y][c.x]!.isHint = true;
                    }
                });
            });
        }
        setGrid(newGrid);
        spawnNext();
      }
    }
  }, [activePiece, grid, gameState, isProcessing, nextPiece]);

  const spawnNext = () => {
    if (!nextPiece) return;
    
    if (checkCollision(nextPiece, grid)) {
      gameOver();
    } else {
      setActivePiece(nextPiece);
      setNextPiece(createPiece());
    }
    setIsProcessing(false);
  };

  // --- Game Loop ---
  useEffect(() => {
    if (gameState !== GameState.PLAYING) return;

    const update = (time: number) => {
      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;
      dropCounterRef.current += deltaTime;

      // Heavy pieces fall faster (e.g., 3x speed)
      let dropInterval = Math.max(100, 1000 - (level - 1) * 100);
      if (activePiece?.specialType === 'HEAVY') {
          dropInterval = 100; // Very fast
      }

      if (dropCounterRef.current > dropInterval) {
        dropPiece();
        dropCounterRef.current = 0;
      }

      // Ghost Piece Logic
      if (activePiece?.specialType === 'GHOST' && !activePiece.isGhostSolid) {
          if (Date.now() > (activePiece.ghostTimer || 0)) {
              setActivePiece(prev => prev ? { ...prev, isGhostSolid: true } : null);
          }
      }

      gameLoopRef.current = requestAnimationFrame(update);
    };

    gameLoopRef.current = requestAnimationFrame(update);
    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, [gameState, level, dropPiece, activePiece]);

  // --- AI Features ---
  const fetchHint = async () => {
    if (!activePiece || !nextPiece) return;
    setHint("Thinking...");
    const aiHint = await getAIHint(grid, nextPiece.letters);
    setHint(aiHint || "Try to build words horizontally!");
  };

  const changeTheme = async (themeName: string) => {
    const weights = await getThemeConfig(themeName);
    if (weights) {
      setTheme({ name: themeName as any, letterWeights: weights });
    }
  };

  // --- Controls ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== GameState.PLAYING) return;
      
      switch (e.key) {
        case 'ArrowLeft': movePiece(-1, 0); break;
        case 'ArrowRight': movePiece(1, 0); break;
        case 'ArrowDown': dropPiece(); break;
        case 'ArrowUp': rotatePiece(); break;
        case ' ': // Hard drop
            let currentY = activePiece?.y || 0;
            while (activePiece && !checkCollision({ ...activePiece, y: currentY + 1 }, grid)) {
                currentY++;
            }
            if (activePiece) setActivePiece({ ...activePiece, y: currentY });
            break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, activePiece, grid]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-6xl w-full h-full flex flex-col md:flex-row gap-6">
        
        {/* Left Sidebar: Stats & Next Piece */}
        <div className="w-full md:w-64 flex flex-col gap-4">
          <div className="bg-slate-800 rounded-3xl p-6 border-b-4 border-slate-700 shadow-xl">
            <button 
              onClick={onClose}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={20} /> Back to Dashboard
            </button>
            
            <div className="space-y-6">
              <div>
                <span className="text-slate-500 text-xs font-black uppercase tracking-widest">Score</span>
                <div className="text-4xl font-black text-white tabular-nums">{score}</div>
              </div>
              <div>
                <span className="text-slate-500 text-xs font-black uppercase tracking-widest">Level</span>
                <div className="text-2xl font-black text-blue-400">{level}</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-3xl p-6 border-b-4 border-slate-700 shadow-xl flex-1">
            <span className="text-slate-500 text-xs font-black uppercase tracking-widest block mb-4">Next Piece</span>
            <div className="aspect-square bg-slate-900/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {nextPiece && (
                <div className="grid grid-cols-4 grid-rows-4 gap-1">
                  {SHAPES[nextPiece.shape][0].map(([r, c], i) => (
                    <div 
                      key={i}
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white ${nextPiece.color}`}
                      style={{ gridRowStart: r + 1, gridColumnStart: c + 1 }}
                    >
                      {nextPiece.letters[i]}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Center: Game Board */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative bg-slate-800 p-2 rounded-[2rem] shadow-2xl border-4 border-slate-700">
            <div 
              className="grid bg-slate-950 rounded-2xl overflow-hidden"
              style={{ 
                gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`,
                gridTemplateRows: `repeat(${GRID_HEIGHT}, 1fr)`,
                width: 'min(70vh * 0.5, 90vw)',
                aspectRatio: `${GRID_WIDTH} / ${GRID_HEIGHT}`
              }}
            >
              {/* Render Grid */}
              {grid.map((row, y) => row.map((cell, x) => (
                <div 
                  key={`${x}-${y}`} 
                  className={`border-[0.5px] border-slate-900/30 flex items-center justify-center text-xs font-bold transition-all duration-300 ${cell ? cell.color : ''} ${cell?.isClearing ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} ${cell?.isHint ? 'ring-4 ring-yellow-400 z-10 animate-pulse' : ''}`}
                >
                  {cell?.letter}
                </div>
              )))}

              {/* Render Active Piece */}
              {activePiece && SHAPES[activePiece.shape][activePiece.rotation].map(([r, c], i) => {
                const x = activePiece.x + c;
                const y = activePiece.y + r;
                if (y < 0) return null;
                return (
                  <div 
                    key={`active-${i}`}
                    className={`absolute flex items-center justify-center text-xs font-bold text-white shadow-inner rounded-sm ${activePiece.color}`}
                    style={{ 
                      width: `${100 / GRID_WIDTH}%`,
                      height: `${100 / GRID_HEIGHT}%`,
                      left: `${x * (100 / GRID_WIDTH)}%`,
                      top: `${y * (100 / GRID_HEIGHT)}%`,
                    }}
                  >
                    {activePiece.letters[i]}
                  </div>
                );
              })}
            </div>

            {/* Overlays */}
            <AnimatePresence>
              {gameState === GameState.MENU && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 bg-slate-900/90 backdrop-blur-sm rounded-[1.8rem] flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="w-20 h-20 bg-blue-500 rounded-3xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20">
                    <Brain size={48} />
                  </div>
                  <h2 className="text-4xl font-black text-white mb-2">Word Stack</h2>
                  <p className="text-slate-400 mb-8 max-w-xs">Stack letters, build words, and clear the board in this AI-powered puzzle!</p>
                  <button 
                    onClick={startGame}
                    className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-2xl font-black text-xl flex items-center gap-3 transition-all active:scale-95 shadow-xl shadow-blue-500/20"
                  >
                    <Play size={24} fill="currentColor" /> Start Training
                  </button>
                </motion.div>
              )}

              {gameState === GameState.GAME_OVER && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-10 bg-red-900/90 backdrop-blur-sm rounded-[1.8rem] flex flex-col items-center justify-center p-8 text-center"
                >
                  <h2 className="text-5xl font-black text-white mb-2">Game Over</h2>
                  <div className="text-2xl font-bold text-red-200 mb-8">Final Score: {score}</div>
                  
                  <div className="w-full max-w-xs mb-6">
                      <label className="block text-red-200 text-sm font-bold mb-2">Enter Name for Leaderboard:</label>
                      <input 
                        type="text" 
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl bg-red-950/50 border-2 border-red-400/50 text-white placeholder-red-400/50 focus:outline-none focus:border-red-400 font-bold text-center"
                        maxLength={10}
                      />
                  </div>

                  <button 
                    onClick={saveScore}
                    disabled={!playerName.trim()}
                    className="bg-white text-red-600 px-8 py-4 rounded-2xl font-black text-xl flex items-center gap-3 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <RotateCcw size={24} /> Save & Play Again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Sidebar: Leaderboard, Controls & Pause */}
        <div className="w-full md:w-72 flex flex-col gap-4">
          
          {/* Pause Button */}
          <button 
            onClick={() => setGameState(prev => prev === GameState.PLAYING ? GameState.PAUSED : GameState.PLAYING)}
            disabled={gameState === GameState.GAME_OVER || gameState === GameState.MENU}
            className={`w-full py-4 rounded-3xl font-black text-xl flex items-center justify-center gap-2 transition-all shadow-xl ${
              gameState === GameState.PAUSED 
                ? 'bg-yellow-500 text-yellow-950 hover:bg-yellow-400' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {gameState === GameState.PAUSED ? <Play fill="currentColor" /> : <Pause fill="currentColor" />}
            {gameState === GameState.PAUSED ? "Resume Game" : "Pause Game"}
          </button>

          {/* Controls Info */}
          <div className="bg-slate-800 rounded-3xl p-6 border-b-4 border-slate-700 shadow-xl">
             <div className="flex justify-between items-center mb-4">
                <span className="text-slate-500 text-xs font-black uppercase tracking-widest">Controls</span>
                <button onClick={() => setShowRules(!showRules)} className="text-blue-400 hover:text-blue-300">
                    <HelpCircle size={18} />
                </button>
             </div>
             
             {showRules ? (
                 <div className="text-sm text-slate-300 space-y-2 leading-tight">
                     <p><strong className="text-white">Goal:</strong> Clear blocks to score points.</p>
                     <p><strong className="text-white">How:</strong></p>
                     <ul className="list-disc pl-4 space-y-1">
                         <li>Form words (5+ letters) horizontally, vertically, or diagonally.</li>
                         <li>Fill an entire row with blocks.</li>
                         <li>4-letter words glow as hints!</li>
                     </ul>
                 </div>
             ) : (
                <div className="space-y-3 text-sm font-bold text-slate-400">
                <div className="flex justify-between">
                    <span>Move</span>
                    <span className="text-white">← / →</span>
                </div>
                <div className="flex justify-between">
                    <span>Rotate</span>
                    <span className="text-white">↑</span>
                </div>
                <div className="flex justify-between">
                    <span>Soft Drop</span>
                    <span className="text-white">↓</span>
                </div>
                <div className="flex justify-between">
                    <span>Hard Drop</span>
                    <span className="text-white">Space</span>
                </div>
                </div>
             )}
          </div>

          {/* Leaderboard */}
          <div className="bg-slate-800 rounded-3xl p-6 border-b-4 border-slate-700 shadow-xl flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={20} className="text-yellow-400" />
              <span className="text-slate-500 text-xs font-black uppercase tracking-widest">Leaderboard</span>
            </div>
            
            {highScores.length > 0 ? (
              <div className="space-y-2">
                {highScores.map((s, i) => (
                  <div key={i} className="flex justify-between items-center bg-slate-900/50 p-3 rounded-xl">
                    <div className="flex items-center gap-2">
                        <span className={`font-black ${i === 0 ? 'text-yellow-400' : 'text-slate-500'}`}>#{i + 1}</span>
                        <span className="font-bold text-white text-sm truncate max-w-[80px]">{s.name}</span>
                    </div>
                    <span className="font-bold text-blue-400">{s.score}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-slate-500 py-8 italic text-sm">
                No high scores yet.
                <br />Start playing!
              </div>
            )}
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden grid grid-cols-3 gap-2 mt-4">
             <button onClick={() => movePiece(-1, 0)} className="bg-slate-700 p-4 rounded-2xl flex items-center justify-center"><ChevronLeft /></button>
             <div className="grid grid-rows-2 gap-2">
                <button onClick={() => rotatePiece()} className="bg-slate-700 p-4 rounded-2xl flex items-center justify-center"><RotateCw /></button>
                <button onClick={() => dropPiece()} className="bg-slate-700 p-4 rounded-2xl flex items-center justify-center"><ChevronDown /></button>
             </div>
             <button onClick={() => movePiece(1, 0)} className="bg-slate-700 p-4 rounded-2xl flex items-center justify-center"><ChevronRight /></button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WordStack;
