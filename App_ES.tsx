import React, { useState, useEffect, useRef } from 'react';
import { 
  Timer, 
  RotateCw, 
  Play, 
  RefreshCw, 
  X, 
  Trophy, 
  AlertCircle, 
  Clock, 
  SkipForward, 
  ChevronUp, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight,
  Lightbulb,
  Loader2
} from 'lucide-react';
import { LEVELS } from './levels_ES';
import { 
  Direction, 
  GameObject, 
  Position, 
  PlayerAction, 
  LevelData, 
  GameState,
  TILE_SIZE,
  TICK_RATE,
  FRAME_RATE
} from './types_ES';
import { simulateTick } from './gameLogic_ES';
import GameCanvas from './GameCanvas_ES';
import { GoogleGenAI } from "@google/genai";

const App_ES: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [scale, setScale] = useState(1);
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState("");
  const [isGeneratingHint, setIsGeneratingHint] = useState(false);

  const level = LEVELS[currentLevelIdx];
  const containerRef = useRef<HTMLDivElement>(null);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const inputQueueRef = useRef<Direction[]>([]);
  
  // Initialize Level
  const initLevel = () => {
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    
    const initialState: GameState = {
      levelId: level.id,
      status: 'IDLE',
      currentLoop: 1,
      timeRemaining: level.loopDuration,
      tick: 0,
      playerPos: { ...level.startPos },
      echoes: [],
      currentHistory: [],
      dynamicObjects: JSON.parse(JSON.stringify(level.layout))
    };
    
    setGameState(initialState);
    inputQueueRef.current = [];
  };

  useEffect(() => {
    initLevel();
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [currentLevelIdx]);

  // Responsive Scaling
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const padding = 40;
      const availableWidth = window.innerWidth - padding;
      const availableHeight = window.innerHeight - 350; // Account for UI
      const gameWidth = level.gridWidth * TILE_SIZE;
      const gameHeight = level.gridHeight * TILE_SIZE;
      
      const scaleW = availableWidth / gameWidth;
      const scaleH = availableHeight / gameHeight;
      setScale(Math.min(1, scaleW, scaleH));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [level]);

  // Input Handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let dir: Direction | null = null;
      if (e.key === 'ArrowUp') dir = 'UP';
      if (e.key === 'ArrowDown') dir = 'DOWN';
      if (e.key === 'ArrowLeft') dir = 'LEFT';
      if (e.key === 'ArrowRight') dir = 'RIGHT';
      
      if (dir) {
        e.preventDefault();
        inputQueueRef.current.push(dir);
      }
      
      if (e.key === 'r' || e.key === 'R') {
        initLevel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentLevelIdx]);

  const handleInput = (dir: Direction) => {
    inputQueueRef.current.push(dir);
  };

  // Game Loop
  useEffect(() => {
    if (!gameState || gameState.status !== 'PLAYING') return;

    gameLoopRef.current = setInterval(() => {
      setGameState(prev => {
        if (!prev || prev.status !== 'PLAYING') return prev;

        // 1. Get current action
        const dir = inputQueueRef.current.shift() || 'WAIT';
        const playerAction: PlayerAction = { tick: prev.tick, dir };

        // 2. Get echo actions for this tick
        const echoActions = prev.echoes.map(history => 
          history.find(a => a.tick === prev.tick)
        );

        // 3. Simulate
        const echoPositions = prev.echoes.map((history, i) => {
           // This is a bit tricky because simulateTick expects current echo positions
           // We need to derive them from history up to this tick
           // For simplicity, let's assume simulateTick handles it or we pass them
           // Actually, simulateTick takes echoPositions as input
           // We need to maintain them in state or derive them
           // Let's derive them:
           let pos = { ...level.startPos };
           for (let t = 0; t <= prev.tick; t++) {
             const action = history.find(a => a.tick === t);
             if (action) {
               // We need a simple getNextPos here or use the one from logic
               // but we need to check collisions too... 
               // This is why simulateTick is better if it handles everything.
             }
           }
           // Wait, the current simulateTick expects current positions.
           // Let's just store echo positions in the state for easier access.
           return prev.playerPos; // Placeholder, see below
        });

        // RE-THINK: The simulateTick in gameLogic_ES is designed to be called once per tick
        // and it returns the NEXT positions.
        
        // Let's add echoPositions to our GameState for easier management
        // (Extending the interface locally or updating types_ES)
        
        // For now, I'll just use a simplified version of simulateTick logic here
        // or update GameState to include currentEchoPositions.
        
        const nextTick = prev.tick + 1;
        const nextTime = prev.timeRemaining - TICK_RATE;

        // Use a simplified simulation if simulateTick is too complex to integrate directly without state changes
        const result = simulateTick(
          level,
          playerAction,
          echoActions,
          prev.dynamicObjects,
          prev.playerPos,
          (prev as any).currentEchoPositions || prev.echoes.map(() => ({...level.startPos}))
        );

        let nextStatus = result.event === 'WIN' ? 'WON' : result.event === 'DEATH' ? 'LOST' : 'PLAYING';
        let nextLoop = prev.currentLoop;
        let nextEchoes = prev.echoes;
        let nextHistory = [...prev.currentHistory, playerAction];
        let nextPlayerPos = result.nextPlayerPos;
        let nextEchoPositions = result.nextEchoPositions;
        let nextObjects = result.nextObjects;
        let nextTimeRemaining = nextTime;

        if (nextTime <= 0 && nextStatus === 'PLAYING') {
          if (prev.currentLoop < level.maxEchoes + 1) {
            // New Loop
            return {
              ...prev,
              currentLoop: prev.currentLoop + 1,
              timeRemaining: level.loopDuration,
              tick: 0,
              playerPos: { ...level.startPos },
              echoes: [...prev.echoes, nextHistory],
              currentHistory: [],
              dynamicObjects: JSON.parse(JSON.stringify(level.layout)),
              currentEchoPositions: [...prev.echoes, nextHistory].map(() => ({...level.startPos}))
            } as any;
          } else {
            nextStatus = 'LOST';
          }
        }

        return {
          ...prev,
          status: nextStatus as any,
          tick: nextTick,
          timeRemaining: nextTimeRemaining,
          playerPos: nextPlayerPos,
          currentHistory: nextHistory,
          dynamicObjects: nextObjects,
          currentEchoPositions: nextEchoPositions
        } as any;
      });
    }, TICK_RATE);

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [gameState?.status]);

  // Hint System
  const getHint = async () => {
    setIsGeneratingHint(true);
    setShowHint(true);
    setHintText("Analyzing temporal rift...");

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are a temporal guide for the game EchoShift. 
        The player is stuck on Level ${level.id}: ${level.name}.
        Level Goal: ${level.description}
        Grid: ${level.gridWidth}x${level.gridHeight}
        Max Echoes: ${level.maxEchoes}
        Objects: ${JSON.stringify(level.layout)}
        
        Provide a short, cryptic, but helpful hint (max 2 sentences) to help them solve the puzzle. Focus on how to use their "Echoes" (past recordings).`,
      });
      setHintText(response.text || "The timeline is clouded. Try recording a different path.");
    } catch (err) {
      setHintText("The temporal link is unstable. Try pressing switches to open doors!");
    } finally {
      setIsGeneratingHint(false);
    }
  };

  if (!gameState) return null;

  const formatTime = (ms: number) => (ms / 1000).toFixed(1);

  const ControlButton = ({ dir, icon: Icon }: { dir: Direction, icon: any }) => (
    <button 
      className="w-16 h-16 bg-slate-800/80 backdrop-blur-md rounded-2xl flex items-center justify-center active:bg-cyan-500 active:scale-95 transition-all border-b-4 border-slate-900 active:border-b-0 shadow-lg"
      onPointerDown={(e) => {
        e.preventDefault(); 
        handleInput(dir);
      }}
    >
      <Icon className="text-slate-200 w-8 h-8" />
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center p-4 touch-none select-none">
      
      {/* Header */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center md:items-end mb-4 md:mb-6">
        <div className="text-center md:text-left mb-2 md:mb-0">
           <div className="flex items-center gap-4 mb-2">
             <button 
               onClick={onBack}
               className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors text-slate-400"
             >
               <X size={20} />
             </button>
             <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
               ECHOSHIFT
             </h1>
           </div>
           <div className="flex justify-center md:justify-start gap-4 text-sm font-medium text-slate-400">
             <span className="flex items-center gap-1"><RotateCw size={14}/> Loop {gameState.currentLoop} / {level.maxEchoes + 1}</span>
             <span className="flex items-center gap-1 text-cyan-400"><Clock size={14}/> {formatTime(gameState.timeRemaining)}s</span>
           </div>
        </div>
        <div className="text-center md:text-right">
            <h2 className="text-lg md:text-xl font-bold text-slate-100">{level.id}. {level.name}</h2>
            <p className="text-slate-500 text-xs md:text-sm max-w-xs">{level.description}</p>
        </div>
      </div>

      {/* Game Area Container for Scaling */}
      <div 
        ref={containerRef}
        className="relative group flex items-center justify-center"
        style={{ 
          width: level.gridWidth * TILE_SIZE, 
          height: level.gridHeight * TILE_SIZE,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          marginBottom: (scale < 1) ? `-${(1 - scale) * level.gridHeight * TILE_SIZE}px` : '0px'
        }}
      >
        
        {/* Canvas */}
        <GameCanvas 
          level={level}
          width={level.gridWidth}
          height={level.gridHeight}
          objects={gameState.dynamicObjects}
          playerPos={gameState.playerPos}
          echoes={(gameState as any).currentEchoPositions || []}
        />

        {/* Overlays */}
        {gameState.status === 'IDLE' && (
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center z-50 rounded-lg">
             <button 
                onClick={() => setGameState(prev => prev ? ({ ...prev, status: 'PLAYING' }) : null)}
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(8,145,178,0.5)] flex items-center gap-2 transition-transform hover:scale-105"
             >
                <Play size={20} fill="currentColor" /> INITIATE LINK
             </button>
             <p className="mt-4 text-slate-400 text-sm">Use Arrow Keys or Tap Controls</p>
          </div>
        )}

        {gameState.status === 'WON' && (
          <div className="absolute inset-0 bg-green-900/90 backdrop-blur-md flex flex-col items-center justify-center z-50 animate-in fade-in duration-300 rounded-lg">
             <Trophy size={64} className="text-yellow-400 mb-4 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
             <h2 className="text-3xl font-bold text-white mb-2">COMPLETE</h2>
             <div className="flex gap-4">
               {currentLevelIdx < LEVELS.length - 1 ? (
                 <button 
                    onClick={() => setCurrentLevelIdx(prev => prev + 1)}
                    className="bg-white text-green-900 px-6 py-2 rounded-full font-bold hover:bg-green-100 flex items-center gap-2"
                 >
                    Next Level <SkipForward size={16} />
                 </button>
               ) : (
                 <div className="text-center">
                    <p className="text-xl font-bold text-white">ALL CLEAR</p>
                    <button 
                        onClick={() => setCurrentLevelIdx(0)}
                        className="mt-4 text-sm text-green-300 hover:text-white underline"
                    >
                        Restart
                    </button>
                 </div>
               )}
             </div>
          </div>
        )}

        {gameState.status === 'LOST' && (
          <div className="absolute inset-0 bg-red-900/90 backdrop-blur-md flex flex-col items-center justify-center z-50 animate-in fade-in duration-300 rounded-lg">
             <AlertCircle size={64} className="text-white mb-4" />
             <h2 className="text-3xl font-bold text-white mb-2">LOOP FAILED</h2>
             <button 
                onClick={initLevel}
                className="bg-white text-red-900 px-8 py-3 rounded-full font-bold hover:bg-red-100 flex items-center gap-2 shadow-lg"
             >
                <RefreshCw size={20} /> RETRY
             </button>
          </div>
        )}
      </div>

      {/* Mobile Controls */}
      <div className="mt-8 grid grid-cols-3 gap-4 md:hidden">
        <div />
        <ControlButton dir="UP" icon={ChevronUp} />
        <div />
        <ControlButton dir="LEFT" icon={ChevronLeft} />
        <ControlButton dir="DOWN" icon={ChevronDown} />
        <ControlButton dir="RIGHT" icon={ChevronRight} />
      </div>

      {/* Desktop Helper */}
      <div className="hidden md:flex mt-12 gap-8 text-slate-500 text-sm font-medium">
        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-700 text-slate-300">ARROWS</kbd> Move
        </div>
        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-700 text-slate-300">R</kbd> Reset
        </div>
        <button 
          onClick={getHint}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <Lightbulb size={16} /> Get Hint
        </button>
      </div>

      {/* Hint Modal */}
      {showHint && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-slate-900 border-2 border-cyan-500/50 rounded-3xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(6,182,212,0.2)] animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-xl">
                  <Lightbulb className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Temporal Insight</h3>
              </div>
              <button onClick={() => setShowHint(false)} className="text-slate-500 hover:text-white">
                <X size={24} />
              </button>
            </div>
            
            <div className="min-h-[80px] flex items-center justify-center">
              {isGeneratingHint ? (
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="text-cyan-400 animate-spin" size={32} />
                  <p className="text-slate-400 text-sm animate-pulse">Consulting the Oracle...</p>
                </div>
              ) : (
                <p className="text-slate-200 text-lg leading-relaxed italic">
                  "{hintText}"
                </p>
              )}
            </div>

            <button 
              onClick={() => setShowHint(false)}
              className="w-full mt-8 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl font-bold transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default App_ES;
