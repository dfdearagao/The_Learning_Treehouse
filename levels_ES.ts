import { LevelData } from './types_ES';

export const LEVELS: LevelData[] = [
  {
    id: 1,
    name: "Initialization",
    description: "Welcome to the simulation. Reach the data core (Cyan). Use 'R' to reset if stuck.",
    gridWidth: 8,
    gridHeight: 8,
    loopDuration: 10000,
    maxEchoes: 2,
    startPos: { x: 1, y: 1 },
    layout: [
      // Walls
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 1 } },
      { id: 'w2', type: 'WALL', pos: { x: 3, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 3, y: 3 } },
      // Goal
      { id: 'goal', type: 'GOAL', pos: { x: 6, y: 6 } },
    ]
  },
  {
    id: 2,
    name: "Cooperation",
    description: "You cannot be everywhere at once. Or can you? Stand on the switch to open the door. Wait for the loop.",
    gridWidth: 9,
    gridHeight: 7,
    loopDuration: 8000,
    maxEchoes: 3,
    startPos: { x: 1, y: 3 },
    layout: [
      { id: 'w_mid', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w_mid2', type: 'WALL', pos: { x: 4, y: 4 } },
      
      // Door blocking the path
      { id: 'door1', type: 'DOOR', pos: { x: 4, y: 3 }, state: { isOpen: false }, color: 'amber' },
      
      // Switch controlling the door
      { id: 'sw1', type: 'SWITCH', pos: { x: 1, y: 5 }, triggerId: 'door1', color: 'amber' },
      
      { id: 'goal', type: 'GOAL', pos: { x: 7, y: 3 } },
    ]
  },
  {
    id: 3,
    name: "Entanglement",
    description: "Two switches, two doors. Coordinate with your echoes to clear the path.",
    gridWidth: 10,
    gridHeight: 8,
    loopDuration: 12000,
    maxEchoes: 4,
    startPos: { x: 1, y: 1 },
    layout: [
      // Central corridor walls
      { id: 'w1', type: 'WALL', pos: { x: 4, y: 0 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 1 } },
      { id: 'w3', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w4', type: 'WALL', pos: { x: 4, y: 5 } },
      { id: 'w5', type: 'WALL', pos: { x: 4, y: 6 } },
      { id: 'w6', type: 'WALL', pos: { x: 4, y: 7 } },
      
      // Doors
      { id: 'd1', type: 'DOOR', pos: { x: 4, y: 3 }, state: { isOpen: false }, color: 'amber' },
      { id: 'd2', type: 'DOOR', pos: { x: 4, y: 4 }, state: { isOpen: false }, color: 'purple' },

      // Switches (Moved to Left Side to be reachable)
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 1 }, triggerId: 'd1', color: 'amber' },
      { id: 's2', type: 'SWITCH', pos: { x: 2, y: 6 }, triggerId: 'd2', color: 'purple' },

      // Obstacles
      { id: 'b1', type: 'BLOCK', pos: { x: 2, y: 3 } }, // Pushable block

      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 3 } },
    ]
  },
  {
    id: 4,
    name: "Photon Barrier",
    description: "Lasers are deadly. Blocks can stop them. Echoes are solid.",
    gridWidth: 10,
    gridHeight: 10,
    loopDuration: 10000,
    maxEchoes: 5,
    startPos: { x: 1, y: 8 },
    layout: [
      // Goal
      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 1 } },

      // Emitters
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 4 }, state: { dir: 'RIGHT' } },
      { id: 'l2', type: 'LASER_EMITTER', pos: { x: 9, y: 6 }, state: { dir: 'LEFT' } },

      // Blocks to push
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 8 } },
      { id: 'b2', type: 'BLOCK', pos: { x: 4, y: 8 } },
      
      // Walls for structure
      { id: 'w1', type: 'WALL', pos: { x: 6, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 6, y: 4 } },
      { id: 'w3', type: 'WALL', pos: { x: 6, y: 5 } },
    ]
  }
,
  {
    id: 5,
    name: "Chamber 5",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 9,
    gridHeight: 10,
    loopDuration: 8000,
    maxEchoes: 2,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 7, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } }
    ]
  },
  {
    id: 6,
    name: "Chamber 6",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 10,
    gridHeight: 8,
    loopDuration: 9000,
    maxEchoes: 2,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 7, y: 6 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 6 }, triggerId: 'd1', color: 'cyan' },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 7,
    name: "Chamber 7",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 11,
    gridHeight: 9,
    loopDuration: 10000,
    maxEchoes: 2,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 9, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } }
    ]
  },
  {
    id: 8,
    name: "Chamber 8",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 8,
    gridHeight: 10,
    loopDuration: 11000,
    maxEchoes: 2,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 6, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 5, y: 8 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 8 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 9,
    name: "Chamber 9",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 9,
    gridHeight: 8,
    loopDuration: 12000,
    maxEchoes: 2,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 7, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 10,
    name: "Chamber 10",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 10,
    gridHeight: 9,
    loopDuration: 8000,
    maxEchoes: 3,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'd1', type: 'DOOR', pos: { x: 7, y: 7 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 7 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 11,
    name: "Chamber 11",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 11,
    gridHeight: 10,
    loopDuration: 9000,
    maxEchoes: 3,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 9, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } }
    ]
  },
  {
    id: 12,
    name: "Chamber 12",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 8,
    gridHeight: 8,
    loopDuration: 10000,
    maxEchoes: 3,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 6, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 5, y: 6 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 6 }, triggerId: 'd1', color: 'cyan' },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 13,
    name: "Chamber 13",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 9,
    gridHeight: 9,
    loopDuration: 11000,
    maxEchoes: 3,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 7, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } }
    ]
  },
  {
    id: 14,
    name: "Chamber 14",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 10,
    gridHeight: 10,
    loopDuration: 12000,
    maxEchoes: 3,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 7, y: 8 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 8 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 15,
    name: "Chamber 15",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 11,
    gridHeight: 8,
    loopDuration: 8000,
    maxEchoes: 3,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 9, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 16,
    name: "Chamber 16",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 8,
    gridHeight: 9,
    loopDuration: 9000,
    maxEchoes: 3,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 6, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'd1', type: 'DOOR', pos: { x: 5, y: 7 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 7 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 17,
    name: "Chamber 17",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 9,
    gridHeight: 10,
    loopDuration: 10000,
    maxEchoes: 3,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 7, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } }
    ]
  },
  {
    id: 18,
    name: "Chamber 18",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 10,
    gridHeight: 8,
    loopDuration: 11000,
    maxEchoes: 3,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 7, y: 6 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 6 }, triggerId: 'd1', color: 'cyan' },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 19,
    name: "Chamber 19",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 11,
    gridHeight: 9,
    loopDuration: 12000,
    maxEchoes: 3,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 9, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } }
    ]
  },
  {
    id: 20,
    name: "Chamber 20",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 8,
    gridHeight: 10,
    loopDuration: 8000,
    maxEchoes: 4,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 6, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 5, y: 8 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 8 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 21,
    name: "Chamber 21",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 9,
    gridHeight: 8,
    loopDuration: 9000,
    maxEchoes: 4,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 7, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 22,
    name: "Chamber 22",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 10,
    gridHeight: 9,
    loopDuration: 10000,
    maxEchoes: 4,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'd1', type: 'DOOR', pos: { x: 7, y: 7 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 7 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 23,
    name: "Chamber 23",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 11,
    gridHeight: 10,
    loopDuration: 11000,
    maxEchoes: 4,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 9, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } }
    ]
  },
  {
    id: 24,
    name: "Chamber 24",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 8,
    gridHeight: 8,
    loopDuration: 12000,
    maxEchoes: 4,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 6, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 5, y: 6 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 6 }, triggerId: 'd1', color: 'cyan' },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 25,
    name: "Chamber 25",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 9,
    gridHeight: 9,
    loopDuration: 8000,
    maxEchoes: 4,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 7, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } }
    ]
  },
  {
    id: 26,
    name: "Chamber 26",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 10,
    gridHeight: 10,
    loopDuration: 9000,
    maxEchoes: 4,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 7, y: 8 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 8 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 27,
    name: "Chamber 27",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 11,
    gridHeight: 8,
    loopDuration: 10000,
    maxEchoes: 4,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 9, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 28,
    name: "Chamber 28",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 8,
    gridHeight: 9,
    loopDuration: 11000,
    maxEchoes: 4,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 6, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'd1', type: 'DOOR', pos: { x: 5, y: 7 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 7 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 29,
    name: "Chamber 29",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 9,
    gridHeight: 10,
    loopDuration: 12000,
    maxEchoes: 4,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 7, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } }
    ]
  },
  {
    id: 30,
    name: "Chamber 30",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 10,
    gridHeight: 8,
    loopDuration: 8000,
    maxEchoes: 5,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 7, y: 6 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 6 }, triggerId: 'd1', color: 'cyan' },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 31,
    name: "Chamber 31",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 11,
    gridHeight: 9,
    loopDuration: 9000,
    maxEchoes: 5,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 9, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } }
    ]
  },
  {
    id: 32,
    name: "Chamber 32",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 8,
    gridHeight: 10,
    loopDuration: 10000,
    maxEchoes: 5,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 6, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 5, y: 8 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 8 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 33,
    name: "Chamber 33",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 9,
    gridHeight: 8,
    loopDuration: 11000,
    maxEchoes: 5,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 7, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 34,
    name: "Chamber 34",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 10,
    gridHeight: 9,
    loopDuration: 12000,
    maxEchoes: 5,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'd1', type: 'DOOR', pos: { x: 7, y: 7 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 7 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 35,
    name: "Chamber 35",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 11,
    gridHeight: 10,
    loopDuration: 8000,
    maxEchoes: 5,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 9, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } }
    ]
  },
  {
    id: 36,
    name: "Chamber 36",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 8,
    gridHeight: 8,
    loopDuration: 9000,
    maxEchoes: 5,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 6, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 5, y: 6 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 6 }, triggerId: 'd1', color: 'cyan' },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 37,
    name: "Chamber 37",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 9,
    gridHeight: 9,
    loopDuration: 10000,
    maxEchoes: 5,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 7, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } }
    ]
  },
  {
    id: 38,
    name: "Chamber 38",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 10,
    gridHeight: 10,
    loopDuration: 11000,
    maxEchoes: 5,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 7, y: 8 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 8 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 39,
    name: "Chamber 39",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 11,
    gridHeight: 8,
    loopDuration: 12000,
    maxEchoes: 5,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 9, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 40,
    name: "Chamber 40",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 8,
    gridHeight: 9,
    loopDuration: 8000,
    maxEchoes: 6,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 6, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'd1', type: 'DOOR', pos: { x: 5, y: 7 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 7 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 41,
    name: "Chamber 41",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 9,
    gridHeight: 10,
    loopDuration: 9000,
    maxEchoes: 6,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 7, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } }
    ]
  },
  {
    id: 42,
    name: "Chamber 42",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 10,
    gridHeight: 8,
    loopDuration: 10000,
    maxEchoes: 6,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 7, y: 6 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 6 }, triggerId: 'd1', color: 'cyan' },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 43,
    name: "Chamber 43",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 11,
    gridHeight: 9,
    loopDuration: 11000,
    maxEchoes: 6,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 9, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } }
    ]
  },
  {
    id: 44,
    name: "Chamber 44",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 8,
    gridHeight: 10,
    loopDuration: 12000,
    maxEchoes: 6,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 6, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 5, y: 8 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 8 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 45,
    name: "Chamber 45",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 9,
    gridHeight: 8,
    loopDuration: 8000,
    maxEchoes: 6,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 7, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 46,
    name: "Chamber 46",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 10,
    gridHeight: 9,
    loopDuration: 9000,
    maxEchoes: 6,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'd1', type: 'DOOR', pos: { x: 7, y: 7 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 7 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
  {
    id: 47,
    name: "Chamber 47",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 11,
    gridHeight: 10,
    loopDuration: 10000,
    maxEchoes: 6,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 9, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } }
    ]
  },
  {
    id: 48,
    name: "Chamber 48",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 8,
    gridHeight: 8,
    loopDuration: 11000,
    maxEchoes: 6,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 6, y: 6 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 5, y: 6 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 6 }, triggerId: 'd1', color: 'cyan' },
      { id: 'l1', type: 'LASER_EMITTER', pos: { x: 0, y: 5 }, state: { dir: 'RIGHT' } },
      { id: 'b1', type: 'BLOCK', pos: { x: 3, y: 4 } }
    ]
  },
  {
    id: 49,
    name: "Chamber 49",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 9,
    gridHeight: 9,
    loopDuration: 12000,
    maxEchoes: 6,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 7, y: 7 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } }
    ]
  },
  {
    id: 50,
    name: "Chamber 50",
    description: "Navigate the anomalies and coordinate with your echoes.",
    gridWidth: 10,
    gridHeight: 10,
    loopDuration: 8000,
    maxEchoes: 6,
    startPos: { x: 1, y: 1 },
    layout: [
      { id: 'goal', type: 'GOAL', pos: { x: 8, y: 8 } },
      { id: 'w0', type: 'WALL', pos: { x: 2, y: 2 } },
      { id: 'w1', type: 'WALL', pos: { x: 3, y: 3 } },
      { id: 'w2', type: 'WALL', pos: { x: 4, y: 2 } },
      { id: 'w3', type: 'WALL', pos: { x: 5, y: 3 } },
      { id: 'w4', type: 'WALL', pos: { x: 6, y: 2 } },
      { id: 'd1', type: 'DOOR', pos: { x: 7, y: 8 }, state: { isOpen: false }, color: 'cyan' },
      { id: 's1', type: 'SWITCH', pos: { x: 2, y: 8 }, triggerId: 'd1', color: 'cyan' }
    ]
  },
];