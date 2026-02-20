
import React, { useState } from 'react';
import { User } from '../types';
import { Star, Coins, Trophy, BookOpen, Gamepad2, Palette, Brain, Rocket, User as UserIcon, ShoppingBag, Home, ArrowRight, Calendar as CalendarIcon, CheckSquare, Check, Sparkles } from 'lucide-react';
import { CORE_SUBJECTS, EARLY_CHILDHOOD, EARLY_CHILDHOOD_CATEGORIES } from '../constants';
import EarlyChildhoodCard from './EarlyChildhoodCard';

interface DashboardProps {
  user: User;
  onSubjectClick: (id: string) => void;
  onArcadeClick: () => void;
  onProfileClick: () => void;
  onStoreClick: () => void;
  onTreehouseClick: () => void;
  onParentTeacherClick: () => void;
  onEarlyChildhoodClick: () => void;
  onSpaceJumpClick: () => void;
  onStellarPopClick: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
    user, 
    onSubjectClick, 
    onArcadeClick, 
    onProfileClick, 
    onStoreClick,
    onTreehouseClick,
    onParentTeacherClick,
    onEarlyChildhoodClick,
    onSpaceJumpClick,
    onStellarPopClick
}) => {
  // --- Calendar Logic ---
  const today = new Date();
  const currentDay = today.getDate();
  const monthName = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();
  
  // Mock days for current month view (simplified grid)
  const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();
  const startDay = new Date(year, today.getMonth(), 1).getDay();

  // --- To-Do List Logic ---
  const [tasks, setTasks] = useState([
      { id: 1, text: "Complete 1 Math Lesson", completed: false, xp: 50, color: "bg-red-100 text-red-600" },
      { id: 2, text: "Play 'Rocket Defense'", completed: false, xp: 30, color: "bg-green-100 text-green-600" },
      { id: 3, text: "Read for 15 minutes", completed: true, xp: 40, color: "bg-blue-100 text-blue-600" },
  ]);

  const toggleTask = (id: number) => {
      setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  // Only find parent-teacher item to display at bottom
  const parentTeacherItem = EARLY_CHILDHOOD_CATEGORIES.find(item => item.id === 'parent-teacher');

  return (
    <div className="space-y-12">
      {/* Stats Bar */}
      <div className="bg-white rounded-3xl p-4 shadow-md flex flex-row flex-wrap xl:flex-nowrap justify-between items-center gap-4 border-b-4 border-stone-100">
        
        {/* User Info */}
        <div className="flex items-center gap-4 shrink-0">
          <img src={user.avatar} alt="Avatar" className="w-16 h-16 rounded-full border-4 border-yellow-300 shadow-sm" />
          <div>
            <h2 className="text-xl font-bold text-slate-800 whitespace-nowrap">Hi, {user.name}!</h2>
            <p className="text-slate-500 font-bold text-sm hidden sm:block">Ready to learn today?</p>
          </div>
        </div>
        
        {/* Profile, Store & Treehouse Buttons */}
        <div className="flex gap-3 shrink-0">
            <button 
                onClick={onProfileClick}
                className="flex items-center gap-2 bg-cyan-100 px-4 py-2 rounded-2xl text-cyan-700 font-bold hover:bg-cyan-200 transition-colors active:scale-95"
            >
                <div className="bg-white/50 p-1.5 rounded-full">
                    <UserIcon size={18} className="stroke-cyan-600" />
                </div>
                <span>Profile</span>
            </button>
            <button 
                onClick={onStoreClick}
                className="flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-2xl text-pink-700 font-bold hover:bg-pink-200 transition-colors active:scale-95"
            >
                <div className="bg-white/50 p-1.5 rounded-full">
                    <ShoppingBag size={18} className="stroke-pink-600" />
                </div>
                <span>Store</span>
            </button>
            <button 
                onClick={onTreehouseClick}
                className="flex items-center gap-2 bg-treehouse-green/20 px-4 py-2 rounded-2xl text-green-700 font-bold hover:bg-treehouse-green/30 transition-colors active:scale-95"
            >
                <div className="bg-white/50 p-1.5 rounded-full">
                    <Home size={18} className="stroke-green-600" />
                </div>
                <span>Treehouse</span>
            </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-3 justify-end shrink-0">
          <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-2xl text-purple-700 font-bold">
            <Trophy size={20} className="fill-purple-500" />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase opacity-70">Level</span>
              <span className="text-lg leading-none">{user.level}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-2xl text-blue-700 font-bold">
            <Star size={20} className="fill-blue-500" />
             <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase opacity-70">XP</span>
              <span className="text-lg leading-none">{user.xp}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-2xl text-yellow-700 font-bold">
            <Coins size={20} className="fill-yellow-500" />
             <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase opacity-70">Coins</span>
              <span className="text-lg leading-none">{user.coins}</span>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Calendar & To-Do List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Calendar Widget */}
          <div className="bg-white p-6 rounded-[2rem] shadow-md border-b-8 border-stone-100 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-black text-slate-700 flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                        <CalendarIcon size={20} /> 
                      </div>
                      Calendar
                  </h3>
                  <span className="text-slate-400 font-bold text-sm bg-stone-100 px-3 py-1 rounded-full">{monthName} {year}</span>
              </div>
              
              <div className="flex-1">
                  {/* Days Header */}
                  <div className="grid grid-cols-7 text-center mb-2">
                      {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                          <div key={d} className="text-xs font-black text-slate-300 uppercase">{d}</div>
                      ))}
                  </div>
                  {/* Days Grid */}
                  <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: startDay }).map((_, i) => <div key={`empty-${i}`} />)}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                          const day = i + 1;
                          const isToday = day === currentDay;
                          return (
                              <div 
                                  key={day} 
                                  className={`aspect-square flex items-center justify-center rounded-lg text-sm font-bold transition-colors cursor-default ${
                                      isToday 
                                      ? 'bg-blue-500 text-white shadow-md scale-110' 
                                      : 'text-slate-600 hover:bg-stone-50'
                                  }`}
                              >
                                  {day}
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>

          {/* To-Do List Widget */}
          <div className="lg:col-span-2 bg-white p-6 rounded-[2rem] shadow-md border-b-8 border-stone-100 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-black text-slate-700 flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-xl text-green-600">
                        <CheckSquare size={20} /> 
                      </div>
                      Daily Missions
                  </h3>
                  <div className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {tasks.filter(t => t.completed).length}/{tasks.length} Complete
                  </div>
              </div>

              <div className="space-y-3 flex-1">
                  {tasks.map(task => (
                      <button 
                          key={task.id} 
                          onClick={() => toggleTask(task.id)}
                          className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all group text-left ${
                              task.completed 
                              ? 'bg-stone-50 border-stone-100 opacity-60' 
                              : 'bg-white border-stone-100 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-sm'
                          }`}
                      >
                          <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-colors shrink-0 ${
                              task.completed 
                              ? 'bg-green-500 border-green-500 text-white' 
                              : 'border-stone-300 bg-white group-hover:border-blue-300'
                          }`}>
                              {task.completed && <Check size={18} strokeWidth={4} />}
                          </div>
                          
                          <div className="flex-1">
                              <span className={`font-bold text-lg block ${task.completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                                  {task.text}
                              </span>
                          </div>

                          <div className={`text-xs font-black px-3 py-1.5 rounded-full ${task.color.replace('text-', 'bg-').replace('100', '500').replace('600', 'white')}`}>
                              +{task.xp} XP
                          </div>
                      </button>
                  ))}
              </div>
          </div>
      </div>

       {/* All Subjects Quick Links */}
       <div className="pt-4"> {/* Added padding top to separate from calendar */}
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <BookOpen className="text-orange-500" /> Explore Subjects
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CORE_SUBJECTS.map((subject) => (
                <div key={subject.id} className="h-full">
                    <button 
                      onClick={() => onSubjectClick(subject.id)}
                      className={`w-full h-full p-6 rounded-3xl bg-white shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-4 border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group`}
                    >
                        <div className={`p-5 rounded-full bg-gradient-to-br ${subject.gradient} text-white group-hover:scale-110 transition-transform`}>
                            <subject.mascot size={32} />
                        </div>
                        <span className="text-xl font-black text-slate-700">{subject.title}</span>
                    </button>
                </div>
            ))}
        </div>
      </div>

      {/* Activities Section */}
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">🎮</span> Activities
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {/* Card 1: Arcade Games */}
             <button 
                onClick={onArcadeClick}
                className="w-full h-full min-h-[260px] p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all flex flex-col justify-between items-start border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group hover:bg-purple-50"
             >
                <div className="p-4 rounded-2xl bg-purple-100 text-purple-600 group-hover:scale-110 transition-transform">
                    <Gamepad2 size={40} />
                </div>
                <div className="text-left w-full">
                    <span className="text-2xl font-black text-slate-700 block mb-2">Arcade Games</span>
                    <div className="flex items-center gap-2 text-purple-500 font-bold text-sm bg-white/50 px-3 py-1 rounded-full w-fit">
                        Play <ArrowRight size={16} />
                    </div>
                </div>
             </button>

             {/* Card 2: Rocket Defense (Previously Space Jump) */}
             <button 
                onClick={onSpaceJumpClick}
                className="w-full h-full min-h-[260px] p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all flex flex-col justify-between items-start border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group hover:bg-green-50"
             >
                <div className="p-4 rounded-2xl bg-green-100 text-green-600 group-hover:scale-110 transition-transform">
                    <Rocket size={40} />
                </div>
                <div className="text-left w-full">
                    <span className="text-2xl font-black text-slate-700 block mb-2">Rocket Defense</span>
                    <div className="flex items-center gap-2 text-green-500 font-bold text-sm bg-white/50 px-3 py-1 rounded-full w-fit">
                        Launch <ArrowRight size={16} />
                    </div>
                </div>
             </button>

             {/* Card 3: Stellar Pop (Replaces Creative Corner) */}
             <button 
                onClick={onStellarPopClick}
                className="w-full h-full min-h-[260px] p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all flex flex-col justify-between items-start border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group hover:bg-indigo-50"
             >
                <div className="p-4 rounded-2xl bg-indigo-100 text-indigo-600 group-hover:scale-110 transition-transform">
                    <Sparkles size={40} />
                </div>
                <div className="text-left w-full">
                    <span className="text-2xl font-black text-slate-700 block mb-2">Stellar Pop</span>
                    <div className="flex items-center gap-2 text-indigo-500 font-bold text-sm bg-white/50 px-3 py-1 rounded-full w-fit">
                        Pop <ArrowRight size={16} />
                    </div>
                </div>
             </button>

             {/* Card 4: Brain Gym */}
             <button 
                className="w-full h-full min-h-[260px] p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all flex flex-col justify-between items-start border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group hover:bg-blue-50"
             >
                <div className="p-4 rounded-2xl bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                    <Brain size={40} />
                </div>
                <div className="text-left w-full">
                    <span className="text-2xl font-black text-slate-700 block mb-2">Brain Gym</span>
                    <div className="flex items-center gap-2 text-blue-500 font-bold text-sm bg-white/50 px-3 py-1 rounded-full w-fit">
                        Train <ArrowRight size={16} />
                    </div>
                </div>
             </button>
        </div>
      </div>

      {/* Early Childhood & Parent/Teacher Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
         {/* Early Childhood Section (Takes 1 col, stretched to match) */}
         <div className="flex flex-col h-full">
             <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">🧸</span> Early Childhood
             </h3>
             <div className="flex-1">
                <EarlyChildhoodCard 
                    {...EARLY_CHILDHOOD} 
                    onClick={onEarlyChildhoodClick} 
                />
             </div>
         </div>

         {/* Parent/Teacher Corner Section (Takes 1 col) */}
         {parentTeacherItem && (
            <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="text-3xl">🍎</span> {parentTeacherItem.title}
                </h3>
                <button 
                    onClick={onParentTeacherClick}
                    className="flex-1 w-full bg-white p-8 rounded-[2rem] shadow-xl border-b-8 border-stone-100 hover:border-slate-200 hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center justify-center gap-6 group text-center min-h-[260px]"
                >
                     <div className={`p-8 rounded-[2rem] ${parentTeacherItem.colorClass} group-hover:scale-110 transition-transform shrink-0 shadow-inner`}>
                        <parentTeacherItem.icon size={64} />
                    </div>
                    <div>
                        <h4 className="text-3xl font-black text-slate-700 mb-3">{parentTeacherItem.title}</h4>
                        <p className="text-slate-500 font-bold leading-relaxed text-lg max-w-xs mx-auto">{parentTeacherItem.description}</p>
                    </div>
                </button>
            </div>
         )}
      </div>

    </div>
  );
};

export default Dashboard;
