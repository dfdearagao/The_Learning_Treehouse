export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' | 'WAIT';

export interface Position {
  x: number;
  y: number;
}

export interface GameObject {
  id: string;
  type: 'WALL' | 'FLOOR' | 'SWITCH' | 'DOOR' | 'BLOCK' | 'LASER_EMITTER' | 'GOAL' | 'SPIKE';
  pos: Position;
  state?: any; // For door: isOpen, For laser: direction, etc.
  triggerId?: string; // ID of the object this interacts with (e.g. Switch -> Door)
  color?: string; // Optional override
}

export interface LevelData {
  id: number;
  name: string;
  description: string;
  gridWidth: number;
  gridHeight: number;
  loopDuration: number; // in milliseconds
  maxEchoes: number;
  startPos: Position;
  layout: GameObject[]; // Static and dynamic objects
}

export interface PlayerAction {
  tick: number;
  dir: Direction;
}

export interface GameState {
  levelId: number;
  status: 'IDLE' | 'PLAYING' | 'WON' | 'LOST';
  currentLoop: number;
  timeRemaining: number;
  tick: number;
  playerPos: Position;
  echoes: PlayerAction[][]; // Array of past action histories
  currentHistory: PlayerAction[];
  dynamicObjects: GameObject[]; // Blocks, Doors state
}

export const TILE_SIZE = 40;
export const TICK_RATE = 200; // ms per move tick
export const FRAME_RATE = 16; // 60fps for timer update
