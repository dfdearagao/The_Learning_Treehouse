import { Direction, GameObject, Position, PlayerAction, LevelData } from './types_ES';

export const isPosEqual = (a: Position, b: Position) => a.x === b.x && a.y === b.y;

export const getNextPos = (pos: Position, dir: Direction): Position => {
  switch (dir) {
    case 'UP': return { x: pos.x, y: pos.y - 1 };
    case 'DOWN': return { x: pos.x, y: pos.y + 1 };
    case 'LEFT': return { x: pos.x - 1, y: pos.y };
    case 'RIGHT': return { x: pos.x + 1, y: pos.y };
    default: return pos;
  }
};

export const isValidMove = (
  target: Position,
  gridWidth: number,
  gridHeight: number,
  objects: GameObject[]
): boolean => {
  // Check bounds
  if (target.x < 0 || target.x >= gridWidth || target.y < 0 || target.y >= gridHeight) return false;

  // Check collision with static/solid objects
  const collider = objects.find(o => isPosEqual(o.pos, target));
  if (collider) {
    if (collider.type === 'WALL') return false;
    if (collider.type === 'DOOR' && !collider.state.isOpen) return false;
    if (collider.type === 'LASER_EMITTER') return false;
    // Blocks are handled separately via push logic
  }
  return true;
};

// Simulation Step
// We need to re-simulate the entire frame for all actors to ensure consistent interactions
export const simulateTick = (
  level: LevelData,
  playerAction: PlayerAction | undefined, // Current player's action
  echoActions: (PlayerAction | undefined)[], // Actions of all past echoes for this tick
  currentObjects: GameObject[],
  playerPos: Position,
  echoPositions: Position[]
): {
  nextPlayerPos: Position;
  nextEchoPositions: Position[];
  nextObjects: GameObject[];
  event: 'NONE' | 'WIN' | 'DEATH';
} => {
  let nextObjects = JSON.parse(JSON.stringify(currentObjects)) as GameObject[];
  let nextPlayerPos = { ...playerPos };
  let nextEchoPositions = [...echoPositions];
  let gameEvent: 'NONE' | 'WIN' | 'DEATH' = 'NONE';

  // Helper to find object at pos
  const findObject = (pos: Position) => nextObjects.find(o => isPosEqual(o.pos, pos));

  // 1. Process Movements (Player & Echoes)
  // We process them sequentially for simplicity. Ideally should be simultaneous but that's complex.
  // Priority: Echoes (oldest first), then Player. 
  
  // Combine all movers: Echoes first, then Player
  const movers = [
    ...echoActions.map((action, idx) => ({ 
      id: `echo-${idx}`, 
      isPlayer: false, 
      idx, 
      action, 
      currentPos: nextEchoPositions[idx] 
    })),
    { 
      id: 'player', 
      isPlayer: true, 
      idx: -1, 
      action: playerAction, 
      currentPos: nextPlayerPos 
    }
  ];

  // We need to track occupied positions for this tick to prevent overlaps
  // But for now, let's just check against objects and walls.
  // Echoes and Player can overlap (ghost mechanic) but usually bad for puzzle clarity.
  // Let's allow overlap for now to prevent "getting stuck in yourself", but collision with blocks is key.

  for (const mover of movers) {
    if (!mover.action || mover.action.dir === 'WAIT') continue;

    const targetPos = getNextPos(mover.currentPos, mover.action.dir);
    
    // Check bounds & walls
    if (!isValidMove(targetPos, level.gridWidth, level.gridHeight, nextObjects)) {
      continue; // Blocked
    }

    // Check interaction with dynamic objects (Block Push)
    const objAtTarget = findObject(targetPos);
    if (objAtTarget && objAtTarget.type === 'BLOCK') {
      // Try to push block
      const blockTarget = getNextPos(targetPos, mover.action.dir);
      // Check if block can move
      // Block cannot move into another block, wall, or closed door
      // AND block cannot move into any other actor? (Simplification: ignore actor collision for blocks for now)
      if (isValidMove(blockTarget, level.gridWidth, level.gridHeight, nextObjects) && !findObject(blockTarget)) {
         // Move block
         objAtTarget.pos = blockTarget;
         // Move actor
         if (mover.isPlayer) nextPlayerPos = targetPos;
         else nextEchoPositions[mover.idx] = targetPos;
      }
    } else {
      // Just move
      if (mover.isPlayer) nextPlayerPos = targetPos;
      else nextEchoPositions[mover.idx] = targetPos;
    }
  }

  // 2. Update Switches & Doors
  // Check all switches
  const switches = nextObjects.filter(o => o.type === 'SWITCH');
  const allActorPositions = [nextPlayerPos, ...nextEchoPositions];
  
  // Also include blocks in "actors" that can press switches
  const blocks = nextObjects.filter(o => o.type === 'BLOCK');
  const allPressers = [...allActorPositions, ...blocks.map(b => b.pos)];

  switches.forEach(sw => {
    const isPressed = allPressers.some(p => isPosEqual(p, sw.pos));
    
    // Find linked door
    if (sw.triggerId) {
      const door = nextObjects.find(d => d.id === sw.triggerId);
      if (door && door.type === 'DOOR') {
        door.state.isOpen = isPressed;
      }
    }
  });

  // 3. Check Lasers
  const lasers = nextObjects.filter(o => o.type === 'LASER_EMITTER');
  let laserHazardPositions: Position[] = [];
  
  lasers.forEach(laser => {
    let beamPos = getNextPos(laser.pos, laser.state.dir);
    let safety = 0;
    while (safety < 20) { // Max range to prevent infinite
      if (beamPos.x < 0 || beamPos.x >= level.gridWidth || beamPos.y < 0 || beamPos.y >= level.gridHeight) break;
      
      const hitObj = findObject(beamPos);
      if (hitObj && (hitObj.type === 'WALL' || hitObj.type === 'BLOCK' || (hitObj.type === 'DOOR' && !hitObj.state.isOpen))) {
        break; // Laser stopped
      }

      // Check if any echo is blocking the laser?
      // "Echoes can block lasers" - interpreted as solid to laser
      const echoBlocking = nextEchoPositions.some(e => isPosEqual(e, beamPos));
      if (echoBlocking) {
        break; // Laser stopped by Echo body
      }

      laserHazardPositions.push(beamPos);
      beamPos = getNextPos(beamPos, laser.state.dir);
      safety++;
    }
  });

  // 4. Check Win/Loss
  
  // Death by Laser
  if (laserHazardPositions.some(p => isPosEqual(p, nextPlayerPos))) {
    gameEvent = 'DEATH';
  }

  // Win by Goal
  const goal = nextObjects.find(o => o.type === 'GOAL');
  if (goal && isPosEqual(nextPlayerPos, goal.pos)) {
    gameEvent = 'WIN';
  }

  return {
    nextPlayerPos,
    nextEchoPositions,
    nextObjects,
    event: gameEvent
  };
};
