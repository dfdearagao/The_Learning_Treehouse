import { create } from 'zustand';
import { GameStatus, HighScore, RUN_SPEED_BASE, LEVEL_WORDS } from './types_NN';

interface GameState {
  status: GameStatus;
  speed: number;
  laneCount: number;
  score: number;
  lives: number;
  maxLives: number;
  gemsCollected: number;
  distance: number;
  level: number;
  collectedLetters: number[];
  highScores: HighScore[];
  
  hasDoubleJump: boolean;
  hasImmortality: boolean;
  isImmortalityActive: boolean;

  setStatus: (status: GameStatus) => void;
  startGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  restartGame: () => void;
  
  setDistance: (distance: number) => void;
  collectGem: (points: number) => void;
  collectLetter: (index: number) => void;
  takeDamage: () => void;
  heal: (amount: number) => void;
  
  activateImmortality: () => void;
  
  openShop: () => void;
  closeShop: () => void;
  buyItem: (id: string, cost: number) => void;
  
  saveHighScore: (name: string) => void;
}

export const useStore = create<GameState>((set, get) => ({
  status: GameStatus.MENU,
  speed: RUN_SPEED_BASE,
  laneCount: 3,
  score: 0,
  lives: 3,
  maxLives: 3,
  gemsCollected: 0,
  distance: 0,
  level: 1,
  collectedLetters: [],
  highScores: [],
  
  hasDoubleJump: false,
  hasImmortality: false,
  isImmortalityActive: false,

  setStatus: (status) => set({ status }),
  
  startGame: () => set({ 
    status: GameStatus.PLAYING,
    speed: RUN_SPEED_BASE,
    score: 0,
    lives: get().maxLives,
    gemsCollected: 0,
    distance: 0,
    level: 1,
    collectedLetters: []
  }),
  
  pauseGame: () => set({ status: GameStatus.PAUSED }),
  
  resumeGame: () => set({ status: GameStatus.PLAYING }),
  
  restartGame: () => set({
    status: GameStatus.PLAYING,
    speed: RUN_SPEED_BASE,
    score: 0,
    lives: get().maxLives,
    gemsCollected: 0,
    distance: 0,
    level: 1,
    collectedLetters: []
  }),
  
  setDistance: (distance) => set({ distance }),
  
  collectGem: (points) => set((state) => ({ 
    score: state.score + points,
    gemsCollected: state.gemsCollected + 1
  })),
  
  collectLetter: (index) => set((state) => {
    if (state.collectedLetters.includes(index)) return state;
    const newLetters = [...state.collectedLetters, index];
    
    const currentWord = LEVEL_WORDS[state.level - 1] || "GALAXY";
    const isWordComplete = newLetters.length === currentWord.length;
    
    if (isWordComplete) {
      return { 
        collectedLetters: newLetters, 
        score: state.score + 500,
        level: state.level + 1,
        speed: state.speed + 2
      };
    }
    
    return { collectedLetters: newLetters, score: state.score + 200 };
  }),
  
  takeDamage: () => set((state) => {
    const newLives = state.lives - 1;
    if (newLives <= 0) {
      return { lives: 0, status: GameStatus.GAME_OVER };
    }
    return { lives: newLives };
  }),
  
  heal: (amount) => set((state) => ({
    lives: Math.min(state.maxLives, state.lives + amount)
  })),
  
  activateImmortality: () => {
    const state = get();
    if (state.hasImmortality && !state.isImmortalityActive) {
      set({ isImmortalityActive: true });
      setTimeout(() => {
        set({ isImmortalityActive: false });
      }, 5000);
    }
  },
  
  openShop: () => set({ status: GameStatus.SHOP }),
  
  closeShop: () => set({ 
    status: GameStatus.PLAYING,
    collectedLetters: []
  }),
  
  buyItem: (id, cost) => set((state) => {
    if (state.score < cost) return state;
    
    const newState: Partial<GameState> = { score: state.score - cost };
    
    if (id === 'DOUBLE_JUMP') newState.hasDoubleJump = true;
    if (id === 'MAX_LIFE') {
      newState.maxLives = state.maxLives + 1;
      newState.lives = state.maxLives + 1;
    }
    if (id === 'HEAL') newState.lives = Math.min(state.maxLives, state.lives + 1);
    if (id === 'IMMORTAL') newState.hasImmortality = true;
    
    return newState;
  }),
  
  saveHighScore: (name) => set((state) => {
    const newScores = [...state.highScores, { name, score: state.score }]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    return { highScores: newScores };
  })
}));
