export type Cell = {
  letter: string;
  locked: boolean;
  color: string;
  id: string; // Unique ID for React keys and animations
  isClearing?: boolean;
  isHint?: boolean;
};

export type Grid = (Cell | null)[][];

export type Coordinate = {
  x: number;
  y: number;
};

export type TetrominoShape = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L' | 'P_I' | 'P_T' | 'P_U' | 'P_V' | 'P_W' | 'BOMB' | 'HEAVY' | 'SPLITTER' | 'GHOST';

export type PieceSpecialType = 'NORMAL' | 'BOMB' | 'HEAVY' | 'SPLITTER' | 'GHOST';

export type ActivePiece = {
  shape: TetrominoShape;
  x: number;
  y: number;
  rotation: number; // 0, 1, 2, 3
  letters: string[]; // The letters assigned to this piece's blocks
  color: string;
  specialType: PieceSpecialType;
  ghostTimer?: number; // timestamp when it becomes solid
  isGhostSolid?: boolean;
};

export enum GameState {
  MENU,
  PLAYING,
  PAUSED,
  GAME_OVER,
}

export type Theme = 'Standard' | 'Sci-Fi' | 'Nature' | 'Magic' | 'Custom';

export interface ThemeConfig {
  name: Theme;
  letterWeights: Record<string, number>; // A: 10, B: 2, etc.
}

export interface WordMatch {
  word: string;
  coordinates: Coordinate[];
  score: number;
  type: 'CLEAR' | 'HINT';
}

export interface HighScore {
  score: number;
  date: string;
  theme: string;
  playerName?: string;
}
