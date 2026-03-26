
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


export enum GameStatus {
  MENU = 'MENU',
  PLAYING = 'PLAYING',
  PAUSED = 'PAUSED',
  SHOP = 'SHOP',
  GAME_OVER = 'GAME_OVER',
  VICTORY = 'VICTORY'
}

export enum ObjectType {
  OBSTACLE = 'OBSTACLE',
  GEM = 'GEM',
  LETTER = 'LETTER',
  SHOP_PORTAL = 'SHOP_PORTAL',
  ALIEN = 'ALIEN',
  MISSILE = 'MISSILE'
}

export interface GameObject {
  id: string;
  type: ObjectType;
  position: [number, number, number]; // x, y, z
  active: boolean;
  value?: string; // For letters (G, E, M...)
  color?: string;
  targetIndex?: number; // Index in the target word
  points?: number; // Score value for gems
  hasFired?: boolean; // For Aliens
}

export interface HighScore {
    name: string;
    score: number;
}

export const LANE_WIDTH = 2.2;
export const JUMP_HEIGHT = 2.5;
export const JUMP_DURATION = 0.6; // seconds
export const RUN_SPEED_BASE = 22.5;
export const SPAWN_DISTANCE = 120;
export const REMOVE_DISTANCE = 20; // Behind player

// 100 Level Words (Repeating and extending the theme)
export const LEVEL_WORDS = [
  "GALAXY", "ORBIT", "PULSAR", "COSMOS", "NEBULA", "QUASAR", "VORTEX", "MATRIX", "ZENITH", "LEGEND",
  "ASTEROID", "COMET", "METEOR", "PLANET", "STAR", "NOVA", "SOLAR", "LUNAR", "VOID", "SPACE",
  "GRAVITY", "PHOTON", "PROTON", "ATOM", "CORE", "BEAM", "RAY", "LIGHT", "DARK", "MATTER",
  "ENERGY", "POWER", "FORCE", "SPEED", "TIME", "WARP", "JUMP", "DRIVE", "SHIP", "CRAFT",
  "PILOT", "FLIGHT", "PATH", "ROAD", "WAY", "LINE", "GRID", "MAP", "ZONE", "AREA",
  "SECTOR", "REGION", "FIELD", "WAVE", "FLOW", "TIDE", "SURF", "RIDE", "RUN", "DASH",
  "BOLT", "FLASH", "GLOW", "SHINE", "SPARK", "FIRE", "ICE", "COLD", "HEAT", "WARM",
  "COOL", "CHILL", "CALM", "STORM", "WIND", "RAIN", "SNOW", "HAIL", "DUST", "SAND",
  "ROCK", "STONE", "IRON", "GOLD", "GEM", "ORE", "FUEL", "GAS", "AIR", "SKY",
  "BLUE", "RED", "GREEN", "CYAN", "PINK", "GOLD", "SILVER", "NEON", "GLITCH", "CYBER"
];

export const NEON_PALETTE = [
    '#2979ff', // Blue
    '#ff1744', // Red
    '#ffea00', // Yellow
    '#00e676', // Green
    '#d500f9', // Purple
    '#00b0ff', // Cyan
    '#ff9100', // Orange
    '#f50057', // Pink
];

export interface ShopItem {
    id: string;
    name: string;
    description: string;
    cost: number;
    icon: any; // Lucide icon component
    oneTime?: boolean; // If true, remove from pool after buying
}
