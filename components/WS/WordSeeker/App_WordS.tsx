import React, { useState, useEffect, useCallback, useRef } from 'react';
import useSound from './useSound_WordS';
import { generateGrid, PlacedWord, GridCell } from './wordSearch_WordS';
import { getDailySeed, mulberry32 } from './random_WordS';
import { 
  updateStats, updateDailyStreak, unlockAchievement, getDailyData, 
  INITIAL_ACHIEVEMENTS, Achievement 
} from './storage_WordS';
import confetti from 'canvas-confetti';
import { 
  RefreshCw, Volume2, VolumeX, Lightbulb, CheckCircle2, 
  Trophy, Medal, Calendar, Timer, AlertCircle, Sun, Moon,
  Snowflake, Eye, Wand2, ArrowLeft
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import Leaderboard from './Leaderboard_WordS';
import Achievements from './Achievements_WordS';
import AchievementNotification from './AchievementNotification_WordS';
import GameOverModal from './GameOverModal_WordS';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const THEMES = {
  Animals: ["LION", "TIGER", "BEAR", "ELEPHANT", "MONKEY", "GIRAFFE", "ZEBRA", "PENGUIN", "KANGAROO", "HIPPO", "SNAKE", "CROCODILE", "DOLPHIN", "WHALE", "SHARK", "CHEETAH", "LEOPARD", "PANTHER", "WOLF", "FOX", "RABBIT", "SQUIRREL", "HAMSTER", "PARROT", "EAGLE", "FALCON", "OWL", "TURTLE", "LIZARD", "FROG", "OCTOPUS", "LOBSTER", "CRAB", "JELLYFISH", "STARFISH"],
  Space: ["PLANET", "STAR", "GALAXY", "COMET", "METEOR", "ASTEROID", "MOON", "SUN", "ORBIT", "ROCKET", "NEBULA", "COSMOS", "ECLIPSE", "ASTRONAUT", "TELESCOPE", "UNIVERSE", "GRAVITY", "QUASAR", "PULSAR", "SATELLITE", "SHUTTLE", "CRATER", "VOID", "INFINITY", "SOLAR", "LUNAR", "MARTIAN", "JUPITER", "SATURN", "VENUS", "MARS", "PLUTO", "NEPTUNE", "URANUS", "MERCURY"],
  Food: ["PIZZA", "BURGER", "PASTA", "SALAD", "SUSHI", "TACO", "APPLE", "BANANA", "ORANGE", "GRAPE", "MANGO", "CHEESE", "BREAD", "CHICKEN", "STEAK", "POTATO", "TOMATO", "CARROT", "BROCCOLI", "SPINACH", "CHERRY", "BERRY", "MELON", "PEACH", "PEAR", "PLUM", "KIWI", "LEMON", "LIME", "COFFEE", "TEA", "JUICE", "MILK", "WATER", "COOKIE", "CAKE", "DONUT"],
  Sports: ["SOCCER", "TENNIS", "BASKETBALL", "BASEBALL", "VOLLEYBALL", "GOLF", "RUGBY", "HOCKEY", "CRICKET", "SWIMMING", "TRACK", "BOXING", "KARATE", "JUDO", "SURFING", "SKATING", "SKIING", "CYCLING", "ARCHERY", "FENCING", "SAILING", "ROWING", "DIVING", "SQUASH", "BADMINTON", "BOWLING", "DARTS", "BILLIARDS", "CHESS", "RUNNING", "JUMPING", "CLIMBING"],
  Technology: ["COMPUTER", "INTERNET", "SOFTWARE", "HARDWARE", "NETWORK", "DATABASE", "SERVER", "ROUTER", "KEYBOARD", "MONITOR", "LAPTOP", "TABLET", "MOBILE", "PHONE", "CAMERA", "PRINTER", "SCANNER", "MOUSE", "SCREEN", "BATTERY", "CHARGER", "WIFI", "BLUETOOTH", "CLOUD", "DATA", "PIXEL", "BINARY", "ROBOT", "DRONE", "SENSOR", "CHIP", "CIRCUIT", "ENGINE", "VIRTUAL"],
  Geography: ["MOUNTAIN", "RIVER", "OCEAN", "DESERT", "FOREST", "ISLAND", "VALLEY", "CANYON", "VOLCANO", "GLACIER", "PLATEAU", "TUNDRA", "SAVANNA", "JUNGLE", "SWAMP", "COAST", "BEACH", "CLIFF", "CAVE", "LAKE", "POND", "STREAM", "WATERFALL", "HILL", "PLAIN", "DELTA", "REEF", "LAGOON", "PENINSULA", "ARCHIPELAGO", "CONTINENT", "COUNTRY", "CITY", "VILLAGE"],
  Movies: ["ACTION", "COMEDY", "DRAMA", "HORROR", "ROMANCE", "THRILLER", "FANTASY", "SCIFI", "WESTERN", "DOCUMENTARY", "ANIMATION", "MUSICAL", "DIRECTOR", "ACTOR", "ACTRESS", "SCRIPT", "SCENE", "CAMERA", "LIGHTS", "SOUND", "EDITING", "EFFECTS", "CINEMA", "THEATER", "SCREEN", "POSTER", "TRAILER", "REVIEW", "OSCAR", "AWARD", "GENRE", "PLOT", "TWIST", "HERO", "VILLAIN"],
  Music: ["GUITAR", "PIANO", "DRUMS", "VIOLIN", "FLUTE", "TRUMPET", "SAXOPHONE", "BASS", "CELLO", "CLARINET", "HARP", "TROMBONE", "TUBA", "BANJO", "CELLO", "ORGAN", "SYNTH", "VOCAL", "CHORUS", "VERSE", "BRIDGE", "MELODY", "RHYTHM", "TEMPO", "BEAT", "CHORD", "SCALE", "ALBUM", "SINGLE", "CONCERT", "STAGE", "ARTIST", "BAND", "OPERA", "JAZZ", "ROCK", "POP"],
  History: ["ANCIENT", "MEDIEVAL", "MODERN", "EMPIRE", "KINGDOM", "REPUBLIC", "REVOLUTION", "WAR", "PEACE", "TREATY", "ALLIANCE", "DYNASTY", "PHARAOH", "KNIGHT", "CASTLE", "TEMPLE", "PYRAMID", "COLONY", "EXPLORER", "VOYAGE", "CONQUEST", "FREEDOM", "LIBERTY", "JUSTICE", "RIGHTS", "VOTE", "LEADER", "KING", "QUEEN", "PRINCE", "PRINCESS", "LEGEND", "MYTH", "ARTIFACT"],
  Coding: ["VARIABLE", "FUNCTION", "CLASS", "OBJECT", "ARRAY", "STRING", "NUMBER", "BOOLEAN", "LOOP", "CONDITION", "MODULE", "PACKAGE", "IMPORT", "EXPORT", "RETURN", "CONST", "LET", "ASYNC", "AWAIT", "PROMISE", "FETCH", "API", "JSON", "HTML", "CSS", "REACT", "NODE", "SCRIPT", "DEBUG", "ERROR", "SYNTAX", "LOGIC", "ALGORITHM", "STACK", "QUEUE", "TREE", "GRAPH"],
  Nature: ["FLOWER", "TREE", "LEAF", "GRASS", "PLANT", "GARDEN", "PARK", "FIELD", "MEADOW", "BUSH", "ROOT", "STEM", "PETAL", "BLOOM", "SEED", "SOIL", "EARTH", "STONE", "ROCK", "SAND", "MUD", "DUST", "WIND", "RAIN", "SNOW", "ICE", "FIRE", "HEAT", "COLD", "LIGHT", "DARK", "SHADE", "SUNLIGHT", "MOONLIGHT"],
  Weather: ["SUNNY", "CLOUDY", "RAINY", "SNOWY", "WINDY", "STORMY", "FOGGY", "MISTY", "HAZY", "HUMID", "BREEZY", "CHILLY", "FROSTY", "THUNDER", "LIGHTNING", "RAINBOW", "TORNADO", "CYCLONE", "TYPHOON", "BLIZZARD", "DROUGHT", "FLOOD", "SEASON", "SPRING", "SUMMER", "AUTUMN", "WINTER", "DEGREE", "CELSIUS", "KNOTS", "GUST", "SHOWER", "DRIZZLE"],
  Colors: ["RED", "BLUE", "GREEN", "YELLOW", "ORANGE", "PURPLE", "PINK", "BROWN", "BLACK", "WHITE", "GRAY", "SILVER", "GOLD", "BRONZE", "CYAN", "MAGENTA", "VIOLET", "INDIGO", "TEAL", "LIME", "OLIVE", "MAROON", "NAVY", "AQUA", "BEIGE", "IVORY", "CORAL", "SALMON", "PEACH", "LAVENDER", "TURQUOISE", "CRIMSON", "SCARLET", "AZURE"]
};

type Difficulty = 'easy' | 'medium' | 'hard' | 'progressive';
type GameMode = 'standard' | 'timed' | 'daily';

const TIME_LIMITS = { easy: 120, medium: 180, hard: 240, progressive: 150 };

export default function WordSeeker({ onBack }: { onBack?: () => void }) {
  const [theme, setTheme] = useState<keyof typeof THEMES>('Animals');
  const [difficulty, setDifficulty] = useState<Difficulty>('progressive');
  const [gameMode, setGameMode] = useState<GameMode>('standard');
  
  const [grid, setGrid] = useState<GridCell[][]>([]);
  const [placedWords, setPlacedWords] = useState<PlacedWord[]>([]);
  const [size, setSize] = useState(8);
  
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectionStart, setSelectionStart] = useState<{r: number, c: number} | null>(null);
  const [selectionCurrent, setSelectionCurrent] = useState<{r: number, c: number} | null>(null);
  
  const [foundCells, setFoundCells] = useState<Map<string, string>>(new Map());
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // New Game State
  const [timer, setTimer] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [incorrectSelections, setIncorrectSelections] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [streak, setStreak] = useState(0);
  
  // Combo System
  const [comboMultiplier, setComboMultiplier] = useState(1);
  const [lastWordTime, setLastWordTime] = useState(0);

  // Power-Ups
  const [powerUps, setPowerUps] = useState({ freeze: 1, reveal: 1, magic: 1 });
  const [isFrozen, setIsFrozen] = useState(false);

  // Modals & Notifications
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const [achievementQueue, setAchievementQueue] = useState<Achievement[]>([]);
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);
  const [hintCell, setHintCell] = useState<{r: number, c: number} | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const dailyData = getDailyData();
    setStreak(dailyData.streak);
  }, []);

  const { play: playCorrect } = useSound('/sounds/correct.mp3', { volume: 0.7, type: 'correct' });
  const { play: playComplete } = useSound('/sounds/complete.mp3', { volume: 0.7, type: 'complete' });
  const { play: playWrong } = useSound('/sounds/incorrect.mp3', { volume: 0.5, type: 'incorrect' });

  const gridRef = useRef<HTMLDivElement>(null);

  const initGame = useCallback((mode: GameMode = gameMode, diff: Difficulty = difficulty, currentTheme: keyof typeof THEMES = theme, resetLevel: boolean = true) => {
    let rng = Math.random;
    let actualDiff: 'easy' | 'medium' | 'hard' = 'easy';
    
    const currentLevel = resetLevel ? 1 : level;
    if (resetLevel) {
      setLevel(1);
      setTotalScore(0);
    }

    if (diff === 'progressive') {
      // Scale difficulty based on current level in level mode
      if (currentLevel <= 2) actualDiff = 'easy';
      else if (currentLevel <= 5) actualDiff = 'medium';
      else actualDiff = 'hard';
    } else {
      actualDiff = diff;
    }

    if (mode === 'daily') {
      rng = mulberry32(getDailySeed());
      actualDiff = 'medium';
      currentTheme = 'Space'; 
    }

    const { grid: newGrid, placedWords: newPlacedWords, size: newSize } = generateGrid(THEMES[currentTheme], actualDiff, rng);
    
    setGrid(newGrid);
    setPlacedWords(newPlacedWords);
    setSize(newSize);
    setFoundCells(new Map());
    setStatus('playing');
    setSelectionStart(null);
    setSelectionCurrent(null);
    setIsSelecting(false);
    
    setScore(0);
    setIncorrectSelections(0);
    setHintsUsed(0);
    setTimeTaken(0);
    setShowGameOver(false);
    setComboMultiplier(1);
    setLastWordTime(0);
    setIsFrozen(false);
    if (resetLevel) {
      setPowerUps({ freeze: 1, reveal: 1, magic: 1 });
    }

    if (mode === 'timed') {
      if (resetLevel) {
        let timeLimit = TIME_LIMITS[actualDiff];
        if (diff === 'progressive' && currentLevel > 1) {
          timeLimit = Math.max(45, timeLimit - (currentLevel * 5));
        }
        setTimer(timeLimit);
      } else {
        setTimer(prev => prev + 30);
      }
    } else if (mode === 'daily') {
      setTimer(TIME_LIMITS[actualDiff]);
    } else {
      setTimer(0);
    }
  }, [gameMode, difficulty, theme, level]);

  useEffect(() => {
    initGame(gameMode, difficulty, theme, true);
  }, []); // Only on mount or manual reset via dropdowns if needed, but we handle it in onChange

  // Timer Effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status === 'playing') {
      interval = setInterval(() => {
        if (!isFrozen) {
          setTimeTaken(prev => prev + 1);
          if (gameMode === 'timed' || gameMode === 'daily') {
            setTimer(prev => {
              if (prev <= 1) {
                setStatus('lost');
                setShowGameOver(true);
                return 0;
              }
              return prev - 1;
            });
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [status, gameMode, isFrozen]);

  // Combo Reset Effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status === 'playing' && comboMultiplier > 1) {
      interval = setInterval(() => {
        if (Date.now() - lastWordTime > 10000) {
          setComboMultiplier(1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [status, comboMultiplier, lastWordTime]);

  // Achievement Queue Processor
  useEffect(() => {
    if (achievementQueue.length > 0 && !currentAchievement) {
      setCurrentAchievement(achievementQueue[0]);
      setAchievementQueue(prev => prev.slice(1));
    }
  }, [achievementQueue, currentAchievement]);

  const queueAchievement = (id: string) => {
    if (unlockAchievement(id)) {
      const ach = INITIAL_ACHIEVEMENTS.find(a => a.id === id);
      if (ach) setAchievementQueue(prev => [...prev, ach]);
    }
  };

  const handleWin = useCallback((finalScore: number, finalTime: number, hints: number, incorrect: number) => {
    setStatus('won');
    setTotalScore(prev => prev + finalScore);
    if (soundEnabled) playComplete();
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    
    updateStats(true, finalTime);
    
    if (gameMode === 'daily') {
      const data = updateDailyStreak(new Date().toISOString().split('T')[0]);
      setStreak(data.streak);
      if (data.streak >= 7) queueAchievement('seven_day_streak');
      setTimeout(() => setShowGameOver(true), 1500);
    } else {
      // In standard/timed, we show "Level Complete" and allow moving to next level
      // If it's the last level or something, we could end, but let's make it infinite levels
      // We'll show the game over modal after a few levels or if they want to stop
      // For now, let's just show a "Next Level" button in the UI
    }

    queueAchievement('first_puzzle');
    
    const stats = JSON.parse(localStorage.getItem('wordsearch_stats') || '{}');
    if (stats.puzzlesCompleted >= 5) queueAchievement('five_puzzles');
    if (stats.puzzlesCompleted >= 10) queueAchievement('ten_puzzles');
    
    if (hints === 0) queueAchievement('no_hints');
    if (finalTime < 120) queueAchievement('speed_demon');
  }, [gameMode, soundEnabled, playComplete]);

  const getSelectedCells = useCallback(() => {
    if (!selectionStart || !selectionCurrent) return [];
    const dr = selectionCurrent.r - selectionStart.r;
    const dc = selectionCurrent.c - selectionStart.c;
    
    if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return [selectionStart];

    const steps = Math.max(Math.abs(dr), Math.abs(dc));
    const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
    const stepC = dc === 0 ? 0 : dc / Math.abs(dc);

    const cells = [];
    for (let i = 0; i <= steps; i++) {
      cells.push({ r: selectionStart.r + i * stepR, c: selectionStart.c + i * stepC });
    }
    return cells;
  }, [selectionStart, selectionCurrent]);

  const handlePointerDown = (r: number, c: number) => {
    if (status !== 'playing') return;
    setIsSelecting(true);
    setSelectionStart({r, c});
    setSelectionCurrent({r, c});
  };

  const handlePointerEnter = (r: number, c: number) => {
    if (isSelecting && status === 'playing') setSelectionCurrent({r, c});
  };

  const checkSelection = useCallback(() => {
    const cells = getSelectedCells();
    if (cells.length === 0) return;

    const selectedWordStr = cells.map(c => grid[c.r][c.c].letter).join('');
    const selectedWordStrRev = cells.map(c => grid[c.r][c.c].letter).reverse().join('');

    let foundMatch = false;
    let matchColor = '';

    const newPlacedWords = placedWords.map(pw => {
      if (!pw.found && (pw.word === selectedWordStr || pw.word === selectedWordStrRev)) {
        const matchForwards = pw.cells.length === cells.length && pw.cells.every((pc, i) => pc.r === cells[i].r && pc.c === cells[i].c);
        const matchBackwards = pw.cells.length === cells.length && pw.cells.every((pc, i) => pc.r === cells[cells.length - 1 - i].r && pc.c === cells[cells.length - 1 - i].c);
        
        if (matchForwards || matchBackwards) {
          foundMatch = true;
          matchColor = pw.color;
          return { ...pw, found: true };
        }
      }
      return pw;
    });

    if (foundMatch) {
      setPlacedWords(newPlacedWords);
      if (soundEnabled) playCorrect();
      
      let newScore = score + (10 * comboMultiplier);
      setScore(newScore);

      const now = Date.now();
      if (lastWordTime > 0 && now - lastWordTime <= 10000) {
        setComboMultiplier(prev => Math.min(prev + 1, 5));
      } else {
        setComboMultiplier(1);
      }
      setLastWordTime(now);

      setFoundCells(prev => {
        const next = new Map(prev);
        cells.forEach(c => next.set(`${c.r},${c.c}`, matchColor));
        return next;
      });

      if (newPlacedWords.every(pw => pw.found)) {
        if (gameMode === 'timed' || gameMode === 'daily') {
          newScore += timer * 2; // Time bonus
          if (incorrectSelections === 0) newScore += 50; // Accuracy bonus
          setScore(newScore);
        }
        handleWin(newScore, timeTaken, hintsUsed, incorrectSelections);
      }
    } else {
      if (cells.length > 1) {
        if (soundEnabled) playWrong();
        setIncorrectSelections(prev => prev + 1);
        if (gameMode === 'timed' || gameMode === 'daily') {
          setScore(prev => Math.max(0, prev - 2)); // Penalty
        }
      }
    }
  }, [getSelectedCells, grid, placedWords, soundEnabled, playCorrect, playWrong, score, timer, gameMode, incorrectSelections, handleWin, timeTaken, hintsUsed, comboMultiplier, lastWordTime]);

  const handlePointerUp = useCallback(() => {
    if (isSelecting) {
      checkSelection();
      setIsSelecting(false);
      setSelectionStart(null);
      setSelectionCurrent(null);
    }
  }, [isSelecting, checkSelection]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isSelecting || status !== 'playing') return;
    if (e.cancelable) e.preventDefault();

    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement;
    if (element && element.dataset.r && element.dataset.c) {
      const r = parseInt(element.dataset.r);
      const c = parseInt(element.dataset.c);
      if (selectionCurrent?.r !== r || selectionCurrent?.c !== c) {
        setSelectionCurrent({r, c});
      }
    }
  }, [isSelecting, status, selectionCurrent]);

  useEffect(() => {
    window.addEventListener('pointerup', handlePointerUp);
    return () => window.removeEventListener('pointerup', handlePointerUp);
  }, [handlePointerUp]);

  const selectedCells = getSelectedCells();
  const selectedCellsSet = new Set(selectedCells.map(c => `${c.r},${c.c}`));

  const handleHint = () => {
    const unfoundWords = placedWords.filter(w => !w.found);
    if (unfoundWords.length > 0) {
      setHintsUsed(prev => prev + 1);
      const randomWord = unfoundWords[Math.floor(Math.random() * unfoundWords.length)];
      setHintCell(randomWord.cells[0]);
      setTimeout(() => setHintCell(null), 1500);
    }
  };

  const useFreeze = () => {
    if (powerUps.freeze > 0 && status === 'playing' && !isFrozen) {
      setPowerUps(prev => ({ ...prev, freeze: prev.freeze - 1 }));
      setIsFrozen(true);
      setTimeout(() => setIsFrozen(false), 10000);
    }
  };

  const useReveal = () => {
    if (powerUps.reveal > 0 && status === 'playing') {
      const unfoundWords = placedWords.filter(w => !w.found);
      if (unfoundWords.length > 0) {
        setPowerUps(prev => ({ ...prev, reveal: prev.reveal - 1 }));
        const randomWord = unfoundWords[Math.floor(Math.random() * unfoundWords.length)];
        setHintCell(randomWord.cells[0]);
        setTimeout(() => setHintCell(null), 3000);
      }
    }
  };

  const useMagic = () => {
    if (powerUps.magic > 0 && status === 'playing') {
      const unfoundWords = placedWords.filter(w => !w.found);
      if (unfoundWords.length > 0) {
        setPowerUps(prev => ({ ...prev, magic: prev.magic - 1 }));
        
        // Find longest word
        let longestWord = unfoundWords[0];
        for (const w of unfoundWords) {
          if (w.word.length > longestWord.word.length) {
            longestWord = w;
          }
        }

        // Mark as found
        const newPlacedWords = placedWords.map(pw => 
          pw.id === longestWord.id ? { ...pw, found: true } : pw
        );
        setPlacedWords(newPlacedWords);
        
        if (soundEnabled) playCorrect();
        
        let newScore = score + (10 * comboMultiplier);
        setScore(newScore);

        setFoundCells(prev => {
          const next = new Map(prev);
          longestWord.cells.forEach(c => next.set(`${c.r},${c.c}`, longestWord.color));
          return next;
        });

        if (newPlacedWords.every(pw => pw.found)) {
          if (gameMode === 'timed' || gameMode === 'daily') {
            newScore += timer * 2; // Time bonus
            if (incorrectSelections === 0) newScore += 50; // Accuracy bonus
            setScore(newScore);
          }
          handleWin(newScore, timeTaken, hintsUsed, incorrectSelections);
        }
      }
    }
  };

  const foundCount = placedWords.filter(w => w.found).length;
  const totalCount = placedWords.length;

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans flex flex-col items-center py-8 px-4 selection:bg-transparent transition-colors duration-300">
      
      {/* Header */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          {onBack && (
            <button 
              onClick={onBack}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-xl transition-colors"
              title="Back to Activities"
            >
              <ArrowLeft size={24} />
            </button>
          )}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight flex items-center gap-3">
              WordSeeker
              {gameMode === 'daily' && <span className="text-sm bg-amber-500 text-white px-3 py-1 rounded-full uppercase tracking-wider font-bold shadow-sm">Daily</span>}
            </h1>
            {gameMode === 'daily' && streak > 0 && (
              <p className="text-amber-600 dark:text-amber-400 font-bold mt-1 text-sm flex items-center gap-1">
                🔥 {streak} Day Streak
              </p>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-3 bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
          <select 
            className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium py-2 px-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-colors duration-300"
            value={gameMode}
            onChange={(e) => {
              const mode = e.target.value as GameMode;
              setGameMode(mode);
              initGame(mode, difficulty, theme, true);
            }}
          >
            <option value="standard">Standard</option>
            <option value="timed">Timed</option>
            <option value="daily">Daily Challenge</option>
          </select>

          {gameMode !== 'daily' && (
            <>
              <select 
                className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium py-2 px-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-colors duration-300"
                value={theme}
                onChange={(e) => {
                  const newTheme = e.target.value as keyof typeof THEMES;
                  setTheme(newTheme);
                  initGame(gameMode, difficulty, newTheme, true);
                }}
              >
                {Object.keys(THEMES).map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              
              <select 
                className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium py-2 px-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-colors duration-300"
                value={difficulty}
                onChange={(e) => {
                  const newDiff = e.target.value as Difficulty;
                  setDifficulty(newDiff);
                  initGame(gameMode, newDiff, theme, true);
                }}
              >
                <option value="progressive">Progressive</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </>
          )}

          <div className="flex items-center gap-1 border-l border-slate-200 dark:border-slate-600 pl-2 ml-1">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-xl transition-colors"
              title={isDarkMode ? "Light Mode" : "Dark Mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setShowLeaderboard(true)}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-xl transition-colors"
              title="Leaderboard"
            >
              <Trophy size={20} />
            </button>
            <button 
              onClick={() => setShowAchievements(true)}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-xl transition-colors"
              title="Achievements"
            >
              <Medal size={20} />
            </button>
            <button 
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-xl transition-colors"
              title={soundEnabled ? "Mute Sound" : "Enable Sound"}
            >
              {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
            <button 
              onClick={() => initGame()}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-xl transition-colors"
              title="New Puzzle"
            >
              <RefreshCw size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8 items-start justify-center">
        
        {/* Grid Container */}
        <div className="flex-1 w-full max-w-2xl flex flex-col items-center">
          
          {/* Top Stats Bar */}
          <div className="w-full flex justify-between items-center mb-4 px-2">
            {(gameMode === 'timed' || gameMode === 'daily') && (
              <div className={cn(
                "flex items-center gap-2 font-mono text-xl font-bold px-4 py-2 rounded-xl transition-colors",
                timer < 30 ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 animate-pulse" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              )}>
                <Timer size={20} />
                {formatTime(timer)}
              </div>
            )}
            
            {(gameMode === 'timed' || gameMode === 'daily') && (
              <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-xl font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                Level: {level} | Score: {totalScore + score}
                {comboMultiplier > 1 && (
                  <span className="ml-2 text-amber-500 animate-bounce">
                    x{comboMultiplier} Combo!
                  </span>
                )}
              </div>
            )}
            {gameMode === 'standard' && (
              <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-xl font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                Level: {level}
              </div>
            )}
          </div>

          {/* Power-Ups Bar (Visible on Mobile) */}
          <div className="w-full grid grid-cols-3 gap-2 mb-4 px-2">
            <button
              onClick={useFreeze}
              disabled={status !== 'playing' || powerUps.freeze === 0 || isFrozen}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-2 rounded-xl border transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                isFrozen ? "bg-blue-100 border-blue-300 text-blue-600 dark:bg-blue-900/50 dark:border-blue-700 dark:text-blue-400 animate-pulse" : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
              )}
              title="Time Freeze (10s)"
            >
              <Snowflake size={20} className="mb-1 text-blue-500" />
              <span className="text-xs font-bold">{powerUps.freeze}</span>
            </button>
            <button
              onClick={useReveal}
              disabled={status !== 'playing' || powerUps.reveal === 0}
              className="flex flex-col items-center justify-center py-2 px-2 rounded-xl border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Reveal First Letter"
            >
              <Eye size={20} className="mb-1 text-emerald-500" />
              <span className="text-xs font-bold">{powerUps.reveal}</span>
            </button>
            <button
              onClick={useMagic}
              disabled={status !== 'playing' || powerUps.magic === 0}
              className="flex flex-col items-center justify-center py-2 px-2 rounded-xl border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Magic Wand (Find Longest)"
            >
              <Wand2 size={20} className="mb-1 text-purple-500" />
              <span className="text-xs font-bold">{powerUps.magic}</span>
            </button>
          </div>

          <div 
            ref={gridRef}
            className="bg-white dark:bg-slate-800 p-3 md:p-6 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 touch-none select-none transition-colors duration-300 relative"
            onMouseLeave={() => { if (isSelecting) {} }}
            onTouchMove={handleTouchMove}
          >
            {status === 'lost' && (
              <div className="absolute inset-0 bg-slate-900/80 rounded-3xl z-20 flex flex-col items-center justify-center text-white p-6 text-center backdrop-blur-sm">
                <AlertCircle size={48} className="text-red-500 mb-4" />
                <h2 className="text-3xl font-bold mb-2">Time's Up!</h2>
                <p className="text-slate-300 mb-6">You found {foundCount} out of {totalCount} words.</p>
                <button 
                  onClick={() => initGame()}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}

            {status === 'won' && gameMode !== 'daily' && (
              <div className="absolute inset-0 bg-slate-900/80 rounded-3xl z-20 flex flex-col items-center justify-center text-white p-6 text-center backdrop-blur-sm">
                <Trophy size={48} className="text-yellow-400 mb-4" />
                <h2 className="text-3xl font-bold mb-2">Level {level} Complete!</h2>
                <p className="text-slate-300 mb-6">You found all words. Ready for the next one?</p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setShowGameOver(true)}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-bold transition-colors"
                  >
                    Finish & Save
                  </button>
                  <button 
                    onClick={() => {
                      setLevel(prev => prev + 1);
                      initGame(gameMode, difficulty, theme, false);
                    }}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-colors"
                  >
                    Next Level
                  </button>
                </div>
              </div>
            )}

            <div 
              className="grid gap-1 md:gap-1.5"
              style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
            >
              {grid.map((row, r) => 
                row.map((cell, c) => {
                  const isSelected = selectedCellsSet.has(`${r},${c}`);
                  const foundColor = foundCells.get(`${r},${c}`);
                  const isFound = !!foundColor;
                  const isHinted = hintCell?.r === r && hintCell?.c === c;

                  return (
                    <div
                      key={`${r}-${c}`}
                      data-r={r}
                      data-c={c}
                      onPointerDown={(e) => {
                        if (e.button !== 0 && e.pointerType === 'mouse') return;
                        handlePointerDown(r, c);
                      }}
                      onPointerEnter={() => handlePointerEnter(r, c)}
                      className={cn(
                        "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg md:rounded-xl text-lg sm:text-xl md:text-2xl font-bold cursor-pointer transition-all duration-150 select-none",
                        isSelected && !isFound && "bg-indigo-500 text-white scale-105 shadow-md",
                        isFound && !isSelected && `${foundColor} text-slate-900`,
                        isFound && isSelected && `bg-indigo-600 text-white scale-105 shadow-md`,
                        !isSelected && !isFound && "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600",
                        isHinted && "animate-pulse bg-amber-300 text-amber-900 shadow-lg scale-110 z-10 ring-4 ring-amber-400/50"
                      )}
                    >
                      {cell.letter}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 flex flex-col gap-6">
          
          {/* Progress Card */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-md border border-slate-200 dark:border-slate-700 p-6 transition-colors duration-300">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Progress</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                  {foundCount} of {totalCount} words found
                </p>
              </div>
              {status === 'won' && (
                <div className="flex items-center gap-1 text-emerald-500 font-bold bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                  <CheckCircle2 size={16} />
                  <span>Solved!</span>
                </div>
              )}
            </div>
            
            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-indigo-500 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(foundCount / totalCount) * 100}%` }}
              />
            </div>

            <button
              onClick={handleHint}
              disabled={status !== 'playing'}
              className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-100 dark:bg-amber-900/40 hover:bg-amber-200 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Lightbulb size={20} />
              Need a Hint?
            </button>
          </div>

          {/* Word List */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-md border border-slate-200 dark:border-slate-700 p-6 flex-1 transition-colors duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Words to Find</h2>
            <div className="flex flex-wrap gap-2">
              {placedWords.map(pw => (
                <div 
                  key={pw.id}
                  className={cn(
                    "px-3 py-1.5 rounded-lg font-bold text-sm md:text-base transition-all duration-300",
                    pw.found 
                      ? `${pw.color} text-slate-900 line-through opacity-60` 
                      : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                  )}
                >
                  {pw.word}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {showLeaderboard && <Leaderboard onClose={() => setShowLeaderboard(false)} />}
      {showAchievements && <Achievements onClose={() => setShowAchievements(false)} />}
      
      {showGameOver && (status === 'won' || status === 'lost') && (
        <GameOverModal 
          mode={gameMode}
          timeTaken={timeTaken}
          wordsFound={totalCount}
          score={totalScore + (status === 'won' ? 0 : score)}
          level={level}
          onPlayAgain={() => initGame(gameMode, difficulty, theme, true)}
          onClose={() => setShowGameOver(false)}
        />
      )}

      <AchievementNotification 
        achievement={currentAchievement} 
        onClose={() => setCurrentAchievement(null)} 
      />
    </div>
  );
}
