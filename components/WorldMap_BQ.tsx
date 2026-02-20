
import React from 'react';
import { Subject, SUBJECT_THEMES, UserProgress } from '../types_BQ';
import { Lock, Star, Trophy, Calculator, BookOpen, FlaskConical, Puzzle } from 'lucide-react';

interface WorldMapProps {
  progress: UserProgress;
  onSelectWorld: (subject: Subject) => void;
  onOpenDashboard: () => void;
}

const WorldNode: React.FC<{
  subject: Subject;
  locked: boolean;
  completed: boolean;
  onClick: () => void;
}> = ({ subject, locked, completed, onClick }) => {
  const theme = SUBJECT_THEMES[subject];
  const Icon = {
    'Calculator': Calculator,
    'BookOpen': BookOpen,
    'FlaskConical': FlaskConical,
    'Puzzle': Puzzle
  }[theme.icon] || Star;

  // Colors based on subject for the card background (matching screenshot vibe)
  const bgColors: Record<string, string> = {
      MATH: 'bg-[#FCA5A5]', // Pinkish Red (screenshot look)
      READING: 'bg-[#D8B4FE]', // Purple
      SCIENCE: 'bg-[#93C5FD]', // Blue
      LOGIC: 'bg-[#86EFAC]', // Green
  };
  
  const bgColor = bgColors[subject] || 'bg-gray-300';

  return (
    <button
      onClick={onClick}
      disabled={locked}
      className={`
        relative w-48 h-48 rounded-[2rem] flex flex-col items-center justify-center gap-4
        transform transition-all duration-300 group
        ${locked ? 'bg-gray-200 cursor-not-allowed opacity-70 grayscale' : `${bgColor} hover:scale-105 active:translate-y-2 shadow-xl hover:shadow-2xl`}
        border-[6px] border-white
      `}
    >
      {completed && <div className="absolute -top-3 -right-3 bg-yellow-400 text-white p-2 rounded-full border-4 border-white shadow-sm z-10"><Trophy size={20} fill="currentColor" /></div>}
      
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${locked ? 'bg-gray-300' : 'bg-white/30'} shadow-inner`}>
        {locked ? <Lock className="text-gray-500 w-10 h-10" /> : <Icon className="text-slate-800 w-10 h-10" strokeWidth={2.5} />}
      </div>
      <span className={`font-black text-lg ${locked ? 'text-gray-500' : 'text-slate-800'}`}>{theme.name}</span>
    </button>
  );
};

const WorldMap: React.FC<WorldMapProps> = ({ progress, onSelectWorld, onOpenDashboard }) => {
  // Only showing MATH for now based on screenshot
  const worlds: Subject[] = ['MATH']; 

  return (
    <div className="absolute inset-0 bg-[#eff6ff] flex flex-col items-center overflow-hidden font-sans">
        
        {/* Top Header Bar */}
        <div className="w-full max-w-6xl px-4 mt-6 z-10 pl-36 md:pl-4"> {/* Left padding to avoid collision with absolute Exit button */}
            <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2 px-4 md:pr-8 md:pl-4 flex justify-between items-center border-[1px] border-white/50">
                
                {/* Stats Pills */}
                <div className="flex items-center gap-4">
                    <div className="bg-[#FDE047] text-yellow-900 px-6 py-2 rounded-full font-black text-lg border-2 border-[#FACC15] flex items-center gap-2 shadow-sm">
                        <Star fill="currentColor" className="text-yellow-700" size={20} />
                        {progress.xp} XP
                    </div>
                    <div className="bg-[#E9D5FF] text-purple-900 px-6 py-2 rounded-full font-black text-lg border-2 border-[#D8B4FE] flex items-center gap-2 shadow-sm">
                        <Trophy fill="currentColor" className="text-purple-600" size={20} />
                        {progress.badges.length} Badges
                    </div>
                </div>

                {/* Dashboard Link */}
                <button onClick={onOpenDashboard} className="text-blue-500 font-bold hover:text-blue-600 hover:underline transition-colors text-lg hidden md:block">
                    Parents Dashboard
                </button>
                {/* Mobile Icon for Dashboard */}
                <button onClick={onOpenDashboard} className="md:hidden text-blue-500 p-2">
                    <Trophy size={24} />
                </button>
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center w-full -mt-20">
            <h1 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-16 tracking-tight drop-shadow-sm text-center">
                Choose Your Adventure!
            </h1>

            <div className="flex justify-center gap-8 flex-wrap animate-in zoom-in duration-500">
                {worlds.map((subject, index) => {
                    const isLocked = index > 0 && !progress.worldsCompleted.includes(worlds[index - 1]);
                    const isCompleted = progress.worldsCompleted.includes(subject);

                    return (
                        <WorldNode
                            key={subject}
                            subject={subject}
                            locked={isLocked}
                            completed={isCompleted}
                            onClick={() => onSelectWorld(subject)}
                        />
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default WorldMap;
