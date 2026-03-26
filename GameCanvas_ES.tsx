import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameObject, Position, TILE_SIZE, LevelData } from './types_ES';
import { User, Copy, Lock, Unlock, Zap, Box, Flag, CircleDot } from 'lucide-react';

interface GameCanvasProps {
  level: LevelData;
  playerPos: Position;
  echoes: Position[];
  objects: GameObject[];
  width: number;
  height: number;
}

const getTileColor = (x: number, y: number) => {
  return (x + y) % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-800/30';
};

const GameCanvas: React.FC<GameCanvasProps> = ({ level, playerPos, echoes, objects, width, height }) => {
  
  // Helper to render grid
  const renderGrid = () => {
    const tiles = [];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        tiles.push(
          <div
            key={`${x}-${y}`}
            className={`absolute border-slate-700/20 border ${getTileColor(x, y)}`}
            style={{
              width: TILE_SIZE,
              height: TILE_SIZE,
              left: x * TILE_SIZE,
              top: y * TILE_SIZE,
            }}
          />
        );
      }
    }
    return tiles;
  };

  const renderObjects = () => {
    return objects.map(obj => {
      let Content = null;
      let styleClass = '';
      
      switch (obj.type) {
        case 'WALL':
          styleClass = 'bg-slate-600 border border-slate-500 shadow-lg';
          break;
        case 'GOAL':
          Content = <Flag className="text-cyan-400 w-6 h-6 animate-pulse" />;
          styleClass = 'bg-cyan-900/30 border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.3)]';
          break;
        case 'BLOCK':
          Content = <Box className="text-amber-200 w-6 h-6" />;
          styleClass = 'bg-amber-700 border border-amber-500 shadow-md z-10';
          break;
        case 'SWITCH':
          const isActive = false; // Visual only, logic handled in engine. We could pass active state if needed.
          Content = <CircleDot className={`w-5 h-5 ${obj.color === 'purple' ? 'text-purple-400' : 'text-amber-400'}`} />;
          styleClass = 'bg-slate-900/80 border border-slate-700 z-0 scale-75 rounded-full';
          break;
        case 'DOOR':
           // Use obj.state.isOpen
           const isOpen = obj.state?.isOpen;
           Content = isOpen ? <Unlock className="w-5 h-5 opacity-50" /> : <Lock className="w-5 h-5" />;
           styleClass = isOpen 
            ? `bg-slate-900/20 border-2 border-dashed ${obj.color === 'purple' ? 'border-purple-900/50 text-purple-900' : 'border-amber-900/50 text-amber-900'} opacity-50 z-10` 
            : `bg-slate-900 border-2 ${obj.color === 'purple' ? 'border-purple-500 text-purple-400' : 'border-amber-500 text-amber-400'} shadow-lg z-10`;
           break;
        case 'LASER_EMITTER':
           Content = <Zap className="w-4 h-4 text-red-500 fill-red-500" />;
           styleClass = 'bg-slate-800 border border-slate-600 z-10';
           break;
      }

      return (
        <motion.div
          key={obj.id}
          initial={false}
          animate={{ x: obj.pos.x * TILE_SIZE, y: obj.pos.y * TILE_SIZE }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`absolute flex items-center justify-center rounded-md ${styleClass}`}
          style={{ width: TILE_SIZE, height: TILE_SIZE }}
        >
          {Content}
        </motion.div>
      );
    });
  };

  const renderLasers = () => {
    const beams: React.ReactElement[] = [];
    objects.filter(o => o.type === 'LASER_EMITTER').forEach(emitter => {
        // Simple raycast visualization matching engine logic
        // We re-calculate here purely for visuals. 
        // In a real optimized game, engine should pass beam segments.
        let bx = emitter.pos.x;
        let by = emitter.pos.y;
        const dx = emitter.state.dir === 'RIGHT' ? 1 : emitter.state.dir === 'LEFT' ? -1 : 0;
        const dy = emitter.state.dir === 'DOWN' ? 1 : emitter.state.dir === 'UP' ? -1 : 0;
        
        // Advance once to start
        bx += dx; by += dy;

        for(let i=0; i<20; i++) {
           if(bx < 0 || bx >= width || by < 0 || by >= height) break;
           
           // Check collision visually
           const hitObj = objects.find(o => o.pos.x === bx && o.pos.y === by);
           // Echo collision check?
           const echoHit = echoes.some(e => e.x === bx && e.y === by);
           
           // Draw beam segment
           const isHorizontal = dy === 0;
           beams.push(
             <motion.div
               key={`beam-${emitter.id}-${i}`}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="absolute bg-red-500 shadow-[0_0_8px_#ef4444] z-0 pointer-events-none"
               style={{
                 left: bx * TILE_SIZE + (isHorizontal ? 0 : TILE_SIZE/2 - 2),
                 top: by * TILE_SIZE + (isHorizontal ? TILE_SIZE/2 - 2 : 0),
                 width: isHorizontal ? TILE_SIZE : 4,
                 height: isHorizontal ? 4 : TILE_SIZE,
               }}
             />
           );

           if(hitObj && (hitObj.type === 'WALL' || hitObj.type === 'BLOCK' || (hitObj.type === 'DOOR' && !hitObj.state.isOpen))) break;
           if(echoHit) break; 

           bx += dx; by += dy;
        }
    });
    return beams;
  };

  return (
    <div 
      className="relative bg-slate-900 rounded-lg shadow-2xl overflow-hidden border-2 border-slate-700"
      style={{ width: width * TILE_SIZE, height: height * TILE_SIZE }}
    >
      {renderGrid()}
      {renderObjects()}
      {renderLasers()}
      
      {/* Echoes */}
      <AnimatePresence>
        {echoes.map((pos, idx) => (
          <motion.div
            key={`echo-${idx}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1, x: pos.x * TILE_SIZE, y: pos.y * TILE_SIZE }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute flex items-center justify-center z-10"
            style={{ width: TILE_SIZE, height: TILE_SIZE }}
          >
            <div className="w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center border border-purple-400 shadow-[0_0_10px_#a855f7]">
               <Copy className="w-5 h-5 text-purple-200" />
            </div>
            <div className="absolute -top-3 -right-3 text-[10px] font-bold text-purple-300 bg-slate-900 px-1 rounded">E{idx+1}</div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Player */}
      <motion.div
        animate={{ x: playerPos.x * TILE_SIZE, y: playerPos.y * TILE_SIZE }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute flex items-center justify-center z-20"
        style={{ width: TILE_SIZE, height: TILE_SIZE }}
      >
        <div className="w-8 h-8 bg-cyan-500/80 rounded-full flex items-center justify-center border-2 border-cyan-300 shadow-[0_0_15px_#22d3ee]">
          <User className="w-5 h-5 text-white" />
        </div>
      </motion.div>

    </div>
  );
};

export default GameCanvas;