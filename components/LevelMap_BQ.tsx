
import React, { useEffect, useState, useRef } from 'react';
import { AvatarConfig, Subject } from '../types_BQ';
import { Star, Lock, ArrowLeft, Check, Crown, ZoomIn, ZoomOut, LayoutDashboard } from 'lucide-react';
import { AvatarDisplay } from './AvatarEditor_BQ';
import { soundManager } from '../utils/soundService_BQ';

interface LevelMapProps {
  currentLevelIndex: number;
  subject: Subject;
  avatar: AvatarConfig;
  onSelectLevel: (levelIndex: number) => void;
  onBack: () => void;
  onOpenDashboard: () => void;
}

// --- Procedural Generation for 100 Levels ---
const TOTAL_LEVELS = 100;

const LEVEL_NODES = Array.from({ length: TOTAL_LEVELS }, (_, i) => {
  // x spreads evenly from roughly 0.5% to 99.5%
  const x = 0.5 + (i / (TOTAL_LEVELS - 1)) * 99;
  
  // y oscillates using combined sine waves for organic "neural" feel
  // We clamp it between ~20% and ~80% to keep it comfortably on screen
  const y = 50 + Math.sin(i * 0.5) * 25 + Math.cos(i * 1.3) * 15;
  
  return { x, y };
});

const LevelMap: React.FC<LevelMapProps> = ({ currentLevelIndex, subject, avatar, onSelectLevel, onBack, onOpenDashboard }) => {
  const [animateIn, setAnimateIn] = useState(false);
  const [zoom, setZoom] = useState(1);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const currentLevelRef = useRef<HTMLDivElement>(null);
  
  // Drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    // Trigger entrance animations
    setTimeout(() => setAnimateIn(true), 100);

    // Smooth scroll to center current level
    if (currentLevelRef.current && containerRef.current) {
        // We need to account for zoom when calculating scroll position
        setTimeout(() => {
            currentLevelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }, 600);
    }
  }, []);

  const getSmoothPath = () => {
    if (LEVEL_NODES.length === 0) return '';
    let d = `M ${LEVEL_NODES[0].x} ${LEVEL_NODES[0].y}`;
    for (let i = 0; i < LEVEL_NODES.length - 1; i++) {
        const p1 = LEVEL_NODES[i];
        const p2 = LEVEL_NODES[i+1];
        const midX = (p1.x + p2.x) / 2;
        d += ` C ${midX} ${p1.y}, ${midX} ${p2.y}, ${p2.x} ${p2.y}`;
    }
    return d;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleZoom = (direction: 'in' | 'out') => {
    soundManager.playClick();
    setZoom(prev => {
        const newZoom = direction === 'in' ? prev + 0.2 : prev - 0.2;
        return Math.max(0.4, Math.min(newZoom, 1.8)); // Clamp zoom level
    });
  };

  const totalLevels = LEVEL_NODES.length;
  const progressPercent = Math.round((Math.min(currentLevelIndex, totalLevels) / totalLevels) * 100);

  // Map Width Calculations
  const baseMapWidthVW = Math.max(100, TOTAL_LEVELS * 20); // Base width in VW units
  
  const scaledMapWidthVW = baseMapWidthVW * zoom;

  return (
    <div className="h-full bg-[#0b1120] relative font-sans overflow-hidden flex flex-col text-slate-100">
      <style>{`
        @keyframes flow {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-flow {
          animation: flow 20s linear infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(6, 182, 212, 0); }
          100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); }
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .non-scaling-stroke {
             vector-effect: non-scaling-stroke;
        }
        .grid-bg {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(30, 41, 59, 0.5) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(30, 41, 59, 0.5) 1px, transparent 1px);
        }
      `}</style>
      
      {/* --- UI Header --- */}
      <div className="relative z-50 px-6 py-4 bg-slate-900/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between shrink-0 shadow-lg">
        <button 
            onClick={onBack} 
            className="p-3 rounded-full bg-cyan-900/30 hover:bg-cyan-800/50 text-cyan-400 border border-cyan-500/30 transition-all"
        >
            <ArrowLeft size={20} strokeWidth={3} />
        </button>
        
        <div className="flex-1 mx-8 max-w-lg hidden md:block">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-[0.2em]">
                <span>Rocket Defense: World 1</span>
                <span className="text-cyan-400">Sync: {progressPercent}%</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] transition-all duration-1000 ease-out rounded-full relative"
                    style={{ width: `${progressPercent}%` }}
                />
            </div>
        </div>
        
        <button 
            onClick={onOpenDashboard}
            className="p-3 rounded-full bg-cyan-900/30 hover:bg-cyan-800/50 text-cyan-400 border border-cyan-500/30 transition-all"
            title="Parents Dashboard"
        >
            <LayoutDashboard size={20} />
        </button>
      </div>

      {/* --- Zoom Controls --- */}
      <div className="absolute bottom-6 right-6 z-50 flex flex-col gap-3">
        <button 
          onClick={() => handleZoom('in')}
          className="bg-slate-800/90 backdrop-blur border border-slate-700 p-3 rounded-full text-cyan-400 hover:bg-slate-700 hover:text-cyan-200 transition-all shadow-xl active:scale-95"
          title="Zoom In"
        >
          <ZoomIn size={24} />
        </button>
        <button 
          onClick={() => handleZoom('out')}
          className="bg-slate-800/90 backdrop-blur border border-slate-700 p-3 rounded-full text-cyan-400 hover:bg-slate-700 hover:text-cyan-200 transition-all shadow-xl active:scale-95"
          title="Zoom Out"
        >
          <ZoomOut size={24} />
        </button>
      </div>

      {/* --- Scrollable Map Container --- */}
      <div 
        ref={containerRef} 
        className={`flex-1 relative overflow-x-auto overflow-y-hidden hide-scrollbar bg-[#0b1120] grid-bg ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
         <div 
            style={{ width: `${scaledMapWidthVW}vw`, height: '100%' }}
            className="relative"
         >
             <div 
                style={{ 
                    width: `${baseMapWidthVW}vw`, 
                    height: '100%', 
                    transform: `scale(${zoom})`, 
                    transformOrigin: 'left center' 
                }}
                className="relative"
             >
                 {/* --- Path Layer --- */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                     <defs>
                         <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                         </linearGradient>
                     </defs>

                     {/* Path Lines */}
                     <path 
                        d={getSmoothPath()} 
                        fill="none" 
                        stroke="#1e293b" 
                        strokeWidth="4" 
                        strokeLinecap="round"
                        className="non-scaling-stroke"
                     />
                     <path 
                        d={getSmoothPath()} 
                        fill="none" 
                        stroke="url(#pathGradient)" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        opacity="0.8"
                        className="non-scaling-stroke"
                     />
                 </svg>

                 {/* --- Nodes --- */}
                 {LEVEL_NODES.map((node, index) => {
                    const isLocked = index > currentLevelIndex;
                    const isCompleted = index < currentLevelIndex;
                    const isCurrent = index === currentLevelIndex;
                    const isBoss = index === LEVEL_NODES.length - 1;
                    
                    const nodeDelay = Math.min(index * 50, 2000); 

                    return (
                        <div 
                            key={index}
                            ref={isCurrent ? currentLevelRef : null}
                            className={`absolute z-20 transition-all duration-700 ease-out ${animateIn ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                            style={{ 
                                left: `${node.x}%`, 
                                top: `${node.y}%`,
                                transform: `translate(-50%, -50%)`,
                                transitionDelay: `${nodeDelay}ms`
                            }}
                        >
                            {/* Avatar Marker (Active Link) */}
                            {isCurrent && (
                                <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-40 animate-float-slow pointer-events-none flex flex-col items-center">
                                    <AvatarDisplay config={avatar} size="sm" />
                                    <div className="mt-1 bg-cyan-900/90 text-[10px] font-black uppercase text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.6)] whitespace-nowrap tracking-wider">
                                        Active Link
                                    </div>
                                </div>
                            )}

                            {/* Node Button */}
                            <button
                                onClick={() => {
                                    if (!isLocked) {
                                        soundManager.playClick();
                                        onSelectLevel(index);
                                    } else {
                                        soundManager.playLock();
                                    }
                                }}
                                disabled={isLocked}
                                className={`
                                    relative group flex items-center justify-center rounded-full transition-all duration-300
                                    ${isBoss ? 'w-20 h-20' : 'w-12 h-12 md:w-14 md:h-14'}
                                    ${isCurrent ? 'z-30' : 'z-20'}
                                    ${!isLocked && !isCurrent ? 'hover:scale-110' : ''}
                                `}
                            >
                                {/* Circle Background */}
                                <div className={`
                                    absolute inset-0 rounded-full border transition-all duration-300 flex items-center justify-center
                                    ${isLocked 
                                        ? 'bg-slate-800/80 border-slate-700/50' 
                                        : isCurrent
                                            ? 'bg-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.6)] border-cyan-200 animate-pulse-ring'
                                            : isCompleted
                                                ? 'bg-slate-900 border-cyan-500/50'
                                                : 'bg-slate-800 border-slate-600'
                                    }
                                `}>
                                    {isLocked && <Lock size={14} className="text-slate-500" />}
                                    
                                    {!isLocked && !isBoss && (
                                        <span className={`font-black text-lg ${isCurrent ? 'text-white' : 'text-cyan-400'}`}>
                                            {index + 1}
                                        </span>
                                    )}

                                    {isBoss && !isLocked && <Crown size={24} className="text-white fill-yellow-400" />}
                                </div>
                            </button>
                        </div>
                    );
                 })}
             </div>
         </div>
      </div>
    </div>
  );
};

export default LevelMap;
