
import React, { useState, useRef, useEffect } from 'react';
import { User, PlacedItem } from '../types';
import { STORE_ITEMS } from '../constants';
import { ArrowLeft, Home, ShoppingBag, ChevronRight, Lock, Plus, Trash2, Move } from 'lucide-react';
import { playSound } from '../utils/sound';

interface TreehousePageProps {
  user: User;
  onBack: () => void;
  onUpdateRoom: (roomId: string, items: PlacedItem[]) => void;
}

interface RoomConfig {
    id: string;
    name: string;
    type: 'room' | 'outdoor' | 'special';
    bgGradient: string;
    floorColor: string;
    wallColor?: string;
    icon: string;
    position: { left: string; top: string }; // Position in World View
    isLocked?: boolean;
}

const ROOMS: RoomConfig[] = [
    { 
        id: 'bedroom', 
        name: 'My Room', 
        type: 'room',
        bgGradient: 'from-pink-100 to-pink-200', 
        floorColor: 'bg-[#A78BFA]',
        wallColor: 'bg-[#FDF2F8]',
        icon: '🏠',
        position: { left: '25%', top: '35%' }
    },
    { 
        id: 'kitchen', 
        name: 'Kitchen', 
        type: 'room',
        bgGradient: 'from-yellow-50 to-yellow-100', 
        floorColor: 'bg-[#F59E0B]',
        wallColor: 'bg-yellow-50',
        icon: '🍳',
        position: { left: '60%', top: '25%' }
    },
    { 
        id: 'lobby', 
        name: 'Living Room', 
        type: 'special',
        bgGradient: 'from-blue-400 to-blue-600', 
        floorColor: 'bg-[#1E40AF]',
        wallColor: 'bg-blue-300',
        icon: '🐠',
        position: { left: '50%', top: '60%' }
    },
    { 
        id: 'observatory', 
        name: 'Observatory', 
        type: 'special',
        bgGradient: 'from-indigo-900 to-slate-900', 
        floorColor: 'bg-slate-800',
        wallColor: 'bg-slate-900',
        icon: '🔭',
        position: { left: '80%', top: '20%' },
        isLocked: true
    },
    { 
        id: 'library', 
        name: 'Office', 
        type: 'room',
        bgGradient: 'from-emerald-100 to-teal-200', 
        floorColor: 'bg-[#10B981]',
        wallColor: 'bg-emerald-50',
        icon: '📚',
        position: { left: '85%', top: '55%' }
    },
];

const TreehousePage: React.FC<TreehousePageProps> = ({ user, onBack, onUpdateRoom }) => {
  const [currentView, setCurrentView] = useState<'world' | 'room'>('world');
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  
  // Dragging State
  const [draggingItemId, setDraggingItemId] = useState<string | null>(null);
  const roomRef = useRef<HTMLDivElement>(null);

  // Get placed items for the currently selected room
  const currentRoomItems = selectedRoomId && user.treehouseState 
    ? (user.treehouseState[selectedRoomId] || []) 
    : [];

  // User inventory (list of unique item IDs available to place)
  // Logic: We show all items the user owns. When they click one, it adds a NEW instance to the room.
  const userInventory = STORE_ITEMS.filter(item => user.inventory?.includes(item.id));

  const handleRoomClick = (room: RoomConfig) => {
    if (room.isLocked) {
        playSound('error');
        return;
    }
    playSound('pop');
    setSelectedRoomId(room.id);
    setCurrentView('room');
  };

  const handleAddItem = (itemId: string) => {
      if (!selectedRoomId) return;
      playSound('click');
      
      const newItem: PlacedItem = {
          uid: Math.random().toString(36).substr(2, 9),
          itemId,
          x: 50, // Center
          y: 50
      };

      const updatedItems = [...currentRoomItems, newItem];
      onUpdateRoom(selectedRoomId, updatedItems);
  };

  const handleRemoveItem = (uid: string) => {
      if (!selectedRoomId) return;
      playSound('pop');
      const updatedItems = currentRoomItems.filter(item => item.uid !== uid);
      onUpdateRoom(selectedRoomId, updatedItems);
  };

  const handleDragStart = (uid: string) => {
      setDraggingItemId(uid);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
      if (!draggingItemId || !roomRef.current || !selectedRoomId) return;

      const rect = roomRef.current.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

      let x = ((clientX - rect.left) / rect.width) * 100;
      let y = ((clientY - rect.top) / rect.height) * 100;

      // Constrain to room bounds
      x = Math.max(0, Math.min(100, x));
      y = Math.max(0, Math.min(100, y));

      // Update state locally for smooth drag (though reacting to every move might be heavy, for this scale it's fine)
      const updatedItems = currentRoomItems.map(item => 
          item.uid === draggingItemId ? { ...item, x, y } : item
      );
      
      // Note: In a real app, you might throttle this or only update on mouse up. 
      // For responsiveness here, we'll update live but this triggers re-renders.
      onUpdateRoom(selectedRoomId, updatedItems);
  };

  const handleDragEnd = () => {
      setDraggingItemId(null);
  };

  const selectedRoomConfig = ROOMS.find(r => r.id === selectedRoomId);

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 min-h-screen bg-slate-900/50 fixed inset-0 z-50 flex items-center justify-center p-0 md:p-8 backdrop-blur-sm">
      
      {/* GAME CONTAINER FRAME */}
      <div className="relative w-full max-w-7xl h-full md:h-[800px] bg-sky-300 md:rounded-[2.5rem] shadow-2xl overflow-hidden border-0 md:border-8 border-white ring-4 ring-black/10 flex flex-col">
        
        {/* --- 1. WORLD VIEW (TREE STRUCTURE) --- */}
        {currentView === 'world' && (
            <div className="relative w-full h-full bg-gradient-to-b from-sky-300 to-green-100 overflow-hidden">
                
                {/* HUD Header */}
                <div className="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-between items-start z-30 pointer-events-none">
                    <button 
                        onClick={onBack}
                        className="pointer-events-auto bg-pink-500 text-white p-3 rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform active:scale-95"
                    >
                        <ArrowLeft size={28} strokeWidth={3} />
                    </button>

                    <div className="flex flex-col items-center">
                        <div className="bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full font-black text-lg border-4 border-white shadow-lg tracking-wide transform -rotate-2">
                            MY TREEHOUSE
                        </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-md px-4 md:px-6 py-2 rounded-full border-4 border-yellow-400 shadow-xl flex items-center gap-2">
                        <span className="text-xl">💰</span>
                        <span className="text-lg font-black text-yellow-600">{user.coins}</span>
                    </div>
                </div>

                {/* THE TREE GRAPHIC (SVG) */}
                <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
                    <svg viewBox="0 0 1000 800" preserveAspectRatio="xMidYMax slice" className="w-full h-full max-h-[90%] md:max-h-full">
                        {/* Shadow */}
                        <ellipse cx="500" cy="780" rx="200" ry="40" fill="rgba(0,0,0,0.1)" />
                        
                        {/* Trunk */}
                        <path d="M 450,800 Q 420,600 400,400 Q 300,300 200,350" stroke="#8B4513" strokeWidth="60" fill="none" strokeLinecap="round" />
                        <path d="M 550,800 Q 580,600 600,400 Q 750,300 850,250" stroke="#8B4513" strokeWidth="60" fill="none" strokeLinecap="round" />
                        <path d="M 500,800 L 500,400 Q 500,200 500,100" stroke="#8B4513" strokeWidth="80" fill="none" strokeLinecap="round" />
                        <path d="M 500,500 Q 700,500 850,600" stroke="#8B4513" strokeWidth="50" fill="none" strokeLinecap="round" />
                        <path d="M 500,300 Q 300,200 150,250" stroke="#8B4513" strokeWidth="40" fill="none" strokeLinecap="round" />

                        {/* Leaves Clouds */}
                        <circle cx="200" cy="350" r="120" fill="#4ade80" />
                        <circle cx="180" cy="320" r="100" fill="#22c55e" />
                        
                        <circle cx="850" cy="250" r="130" fill="#4ade80" />
                        <circle cx="880" cy="220" r="110" fill="#22c55e" />

                        <circle cx="500" cy="100" r="150" fill="#4ade80" />
                        <circle cx="530" cy="80" r="120" fill="#22c55e" />

                        <circle cx="850" cy="600" r="140" fill="#4ade80" />
                        <circle cx="820" cy="580" r="110" fill="#22c55e" />
                        
                        <circle cx="500" cy="600" r="100" fill="#4ade80" />
                    </svg>
                </div>

                {/* ROOM NODES (Interactive) */}
                {ROOMS.map((room) => (
                    <button
                        key={room.id}
                        onClick={() => handleRoomClick(room)}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20 transition-all hover:scale-110 active:scale-95 flex flex-col items-center"
                        style={{ top: room.position.top, left: room.position.left }}
                    >
                        {/* House Graphic */}
                        <div className={`relative w-28 h-28 md:w-40 md:h-40 ${room.isLocked ? 'grayscale opacity-80' : ''}`}>
                            {/* Roof */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-orange-400 rounded-t-full shadow-lg border-4 border-orange-600 z-10"></div>
                            {/* Base */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-amber-100 border-4 border-amber-800 shadow-md flex items-center justify-center overflow-hidden rounded-b-xl">
                                <div className={`w-full h-full ${room.bgGradient.replace('bg-', 'bg-gradient-to-b ')} opacity-30`}></div>
                                <span className="absolute text-4xl md:text-6xl drop-shadow-md group-hover:-translate-y-2 transition-transform duration-300">
                                    {room.icon}
                                </span>
                                {room.isLocked && (
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <Lock className="text-white w-8 h-8" />
                                    </div>
                                )}
                            </div>
                            {/* Label */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg font-black text-xs md:text-sm border-2 border-slate-200 shadow-sm whitespace-nowrap text-slate-700 group-hover:bg-yellow-100 transition-colors">
                                {room.name}
                            </div>
                        </div>
                    </button>
                ))}

            </div>
        )}

        {/* --- 2. ROOM INTERIOR VIEW (EDITOR) --- */}
        {currentView === 'room' && selectedRoomConfig && (
            <div className="flex flex-col md:flex-row w-full h-full bg-stone-900">
                
                {/* MAIN STAGE (Room) */}
                <div className="flex-1 relative overflow-hidden flex flex-col bg-sky-200 cursor-default touch-none"
                     onMouseMove={handleDragMove}
                     onMouseUp={handleDragEnd}
                     onMouseLeave={handleDragEnd}
                     onTouchMove={handleDragMove}
                     onTouchEnd={handleDragEnd}
                >
                    
                    {/* Back Button */}
                    <button 
                        onClick={() => { playSound('pop'); setCurrentView('world'); }}
                        className="absolute top-4 left-4 z-40 bg-white text-slate-700 p-2 rounded-xl border-4 border-slate-100 shadow-md hover:scale-105 active:scale-95 font-bold flex items-center gap-2"
                    >
                        <ArrowLeft size={20} strokeWidth={3} /> World
                    </button>

                    {/* THE ROOM */}
                    <div 
                        ref={roomRef}
                        className="relative w-full h-full flex flex-col shadow-inner"
                    >
                        {/* 1. Wall (Top 60%) */}
                        <div className={`h-[60%] w-full ${selectedRoomConfig.wallColor || 'bg-white'} border-b-8 border-black/5 relative`}>
                            {/* Window */}
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-sky-300 rounded-xl border-8 border-white shadow-inner overflow-hidden">
                                <div className="w-full h-full bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.5)_50%,transparent_55%)]"></div>
                                <div className="absolute bottom-0 w-full h-4 bg-white/50"></div>
                                <div className="absolute right-0 h-full w-4 bg-white/50"></div>
                            </div>
                            {/* Decorative Wall Items (Static) */}
                            <div className="absolute top-1/4 right-1/4 w-24 h-32 bg-white rounded-lg shadow-sm border-4 border-stone-200 flex items-center justify-center">
                                <div className="text-4xl opacity-20">🖼️</div>
                            </div>
                        </div>

                        {/* 2. Floor (Bottom 40%) */}
                        <div className={`h-[40%] w-full ${selectedRoomConfig.floorColor} relative perspective-floor`}>
                            {/* Floor Texture */}
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:40px_100%]"></div>
                        </div>

                        {/* 3. PLACED ITEMS (Draggable) */}
                        {currentRoomItems.map((item) => {
                            const storeItem = STORE_ITEMS.find(i => i.id === item.itemId);
                            if (!storeItem) return null;

                            return (
                                <div
                                    key={item.uid}
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing hover:scale-110 transition-transform touch-none group"
                                    style={{ left: `${item.x}%`, top: `${item.y}%`, zIndex: Math.floor(item.y) }}
                                    onMouseDown={() => handleDragStart(item.uid)}
                                    onTouchStart={() => handleDragStart(item.uid)}
                                >
                                    <div className="text-[5rem] md:text-[8rem] filter drop-shadow-xl select-none pointer-events-none">
                                        {storeItem.icon}
                                    </div>
                                    
                                    {/* Delete Handle (Visible on Hover) */}
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); handleRemoveItem(item.uid); }}
                                        className="absolute -top-4 -right-4 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm z-50 hover:scale-110"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            );
                        })}

                        {/* 4. Avatar (Static Center for now, or moveable if desired) */}
                        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-30 opacity-90 drop-shadow-2xl">
                            <img src={user.avatar} alt="Me" className="w-32 md:w-48" />
                        </div>

                    </div>
                </div>

                {/* SIDEBAR: INVENTORY (Bottom on mobile, Right on desktop) */}
                <div className="h-48 md:h-full md:w-80 bg-white border-t-8 md:border-t-0 md:border-l-8 border-stone-200 flex flex-col shadow-2xl relative z-50">
                    <div className="p-4 bg-stone-100 border-b border-stone-200 flex justify-between items-center">
                        <div className="flex items-center gap-2 font-black text-slate-700 uppercase tracking-widest">
                            <ShoppingBag size={20} /> My Items
                        </div>
                        <div className="text-xs font-bold text-slate-400">
                            Tap to Place
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                        {userInventory.length === 0 ? (
                            <div className="text-center text-slate-400 font-bold mt-8">
                                <p className="text-4xl mb-2">🎒</p>
                                <p>Empty!</p>
                                <p className="text-xs font-normal mt-1">Visit the store to buy items.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 md:grid-cols-2 gap-3">
                                {userInventory.map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleAddItem(item.id)}
                                        className="aspect-square bg-stone-50 rounded-xl border-2 border-stone-200 hover:border-blue-400 hover:bg-blue-50 transition-all flex flex-col items-center justify-center p-2 group active:scale-95"
                                    >
                                        <span className="text-3xl drop-shadow-sm mb-1">{item.icon}</span>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase leading-none text-center">{item.name}</span>
                                        <Plus size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 absolute top-1 right-1" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        )}

      </div>
    </div>
  );
};

export default TreehousePage;
