
import React, { useState } from 'react';
import { User } from '../types/types';
import { Star, Coins, Trophy, BookOpen, Gamepad2, Palette, Brain, Rocket, User as UserIcon, ShoppingBag, Home, ArrowRight, Calendar as CalendarIcon, CheckSquare, Check, Sparkles, FileText, Maximize2, X, Trash2, CheckCircle, Circle, AlertTriangle } from 'lucide-react';
import { CORE_SUBJECTS, EARLY_CHILDHOOD, EARLY_CHILDHOOD_CATEGORIES, GRADES } from '../constants';
import EarlyChildhoodCard from './EarlyChildhoodCard';
import { getUSHolidays } from '../utils/holidays';

interface DashboardProps {
  user: User;
  assignments?: any[];
  onGradeClick: (id: string) => void;
  onArcadeClick: () => void;
  onProfileClick: () => void;
  onStoreClick: () => void;
  onTreehouseClick: () => void;
  onParentTeacherClick: () => void;
  onEarlyChildhoodClick: () => void;
  onActivitiesClick: () => void;
  onOpenCalendarClick?: () => void;
  onUpdateAssignment?: (id: string, updates: any) => void;
  onDeleteAssignment?: (id: string) => void;
  showWorkloadWarnings: boolean;
}

const getSubjectColors = (subject: string) => {
    switch (subject) {
        case 'Math': return { bg: 'bg-red-50', border: 'border-red-100', iconBg: 'bg-red-500', text: 'text-red-600' };
        case 'Reading': return { bg: 'bg-blue-50', border: 'border-blue-100', iconBg: 'bg-blue-500', text: 'text-blue-600' };
        case 'Science': return { bg: 'bg-green-50', border: 'border-green-100', iconBg: 'bg-green-500', text: 'text-green-600' };
        case 'Social Studies': return { bg: 'bg-purple-50', border: 'border-purple-100', iconBg: 'bg-purple-500', text: 'text-purple-600' };
        default: return { bg: 'bg-orange-50', border: 'border-orange-100', iconBg: 'bg-orange-500', text: 'text-orange-600' };
    }
};

const Dashboard: React.FC<DashboardProps> = ({ 
    user, 
    assignments = [],
    onGradeClick, 
    onArcadeClick, 
    onProfileClick, 
    onStoreClick,
    onTreehouseClick,
    onParentTeacherClick,
    onEarlyChildhoodClick,
    onActivitiesClick,
    onOpenCalendarClick,
    onUpdateAssignment,
    onDeleteAssignment,
    showWorkloadWarnings
}) => {
  // --- Calendar Logic ---
  const today = new Date();
  const currentDay = today.getDate();
  const monthName = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();
  const usHolidays = getUSHolidays(year);
  
  // Mock days for current month view (simplified grid)
  const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();
  const startDay = new Date(year, today.getMonth(), 1).getDay();

  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Only find parent-teacher item to display at bottom
  const parentTeacherItem = EARLY_CHILDHOOD_CATEGORIES.find(item => item.id === 'parent-teacher');

  // Filter assignments for the current week (Sunday to Saturday)
  const currentWeekAssignments = assignments.filter(a => {
    const assignmentDate = new Date(a.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7); // Next Sunday (so < endOfWeek includes Saturday)
    
    return assignmentDate >= startOfWeek && assignmentDate < endOfWeek;
  });

  const selectedDateAssignments = selectedDate 
    ? assignments.filter(a => a.date === selectedDate)
    : currentWeekAssignments;

  const displayAssignments = selectedDate ? selectedDateAssignments : currentWeekAssignments;
  const displayTitle = selectedDate 
    ? `Missions for ${new Date(selectedDate + 'T12:00:00').toLocaleDateString('default', { month: 'short', day: 'numeric' })}` 
    : 'Weekly Missions';

  return (
    <div className="space-y-12">
      {/* Stats Bar */}
      <div className="bg-white rounded-3xl p-4 shadow-md flex flex-row flex-wrap xl:flex-nowrap justify-between items-center gap-4 border-b-4 border-stone-100">
        
        {/* User Info */}
        <div className="flex items-center gap-4 shrink-0">
          <img src={user.avatar} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-yellow-300 shadow-sm" />
          <div>
            <h2 className="text-xl font-bold text-slate-800 whitespace-nowrap">Hi, {user.name}!</h2>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="bg-green-100 text-green-700 text-xs font-black px-2 py-0.5 rounded-full">{user.grade}</span>
              <p className="text-slate-500 font-bold text-sm hidden sm:block">Ready to learn today?</p>
            </div>
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
                  <div className="flex items-center gap-2">
                      <span className="text-slate-400 font-bold text-sm bg-stone-100 px-3 py-1 rounded-full">{monthName} {year}</span>
                      <button 
                          onClick={onOpenCalendarClick}
                          className="flex items-center gap-1 text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full text-sm font-bold transition-colors"
                      >
                          <Maximize2 size={14} /> Open
                      </button>
                  </div>
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
                          const dateStr = `${year}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                          const dayAssignments = assignments.filter(a => a.date === dateStr);
                          const hasAssignment = dayAssignments.length > 0;
                          const isOverloaded = dayAssignments.length > 3;
                          const allCompleted = hasAssignment && dayAssignments.every(a => a.status === 'completed');
                          const holiday = usHolidays.find(h => h.date === dateStr);

                          return (
                              <button 
                                  key={day} 
                                  onClick={() => setSelectedDate(dateStr)}
                                  title={holiday ? holiday.name : ''}
                                  className={`aspect-square flex flex-col items-center justify-center rounded-lg text-sm font-bold transition-colors cursor-pointer relative ${
                                      isToday 
                                      ? 'bg-blue-500 text-white shadow-md scale-110 z-10' 
                                      : holiday
                                      ? 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                                      : 'text-slate-600 hover:bg-stone-100'
                                  }`}
                              >
                                  {day}
                                  {holiday && <Star size={8} className="absolute top-1 left-1 text-amber-400 fill-amber-400" />}
                                  {showWorkloadWarnings && isOverloaded && <AlertTriangle size={12} className="absolute top-1 right-1 text-red-500" />}
                                  {hasAssignment && (
                                      <div className="absolute bottom-1 flex gap-0.5">
                                          {allCompleted ? (
                                              <Check size={12} className={isToday ? 'text-white' : 'text-green-500'} />
                                          ) : (
                                              Array.from(new Set(dayAssignments.map(a => a.subject))).slice(0, 3).map(subject => (
                                                  <div key={subject as string} className={`w-1.5 h-1.5 rounded-full ${isToday ? 'bg-white' : getSubjectColors(subject as string).iconBg}`}></div>
                                              ))
                                          )}
                                      </div>
                                  )}
                              </button>
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
                      {displayTitle}
                      {selectedDate && (
                          <button 
                              onClick={() => setSelectedDate(null)}
                              className="text-xs text-slate-400 hover:text-slate-600 ml-2 underline"
                          >
                              (Show Week)
                          </button>
                      )}
                  </h3>
                  <div className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {displayAssignments.filter(a => a.status === 'completed').length}/{displayAssignments.length} Complete
                  </div>
              </div>

              <div className="space-y-3 flex-1">
                  {/* Assigned Homework */}
                  {displayAssignments.length > 0 ? (
                      <div className="mb-4">
                          <div className="space-y-2">
                              {displayAssignments.map(assignment => {
                                  const colors = getSubjectColors(assignment.subject);
                                  const isCompleted = assignment.status === 'completed';
                                  return (
                                  <div key={assignment.id} className={`flex items-center gap-3 p-3 ${colors.bg} border-2 ${colors.border} rounded-xl ${isCompleted ? 'opacity-60' : ''}`}>
                                      <button 
                                          onClick={() => onUpdateAssignment?.(assignment.id, { status: isCompleted ? 'pending' : 'completed' })}
                                          className={`${colors.text} hover:scale-110 transition-transform`}
                                      >
                                          {isCompleted ? <CheckCircle size={20} /> : <Circle size={20} />}
                                      </button>
                                      <div className={`flex-1 ${isCompleted ? 'line-through' : ''}`}>
                                          <div className="text-sm font-bold text-slate-800">{assignment.title}</div>
                                          <div className={`text-[10px] font-bold ${colors.text} uppercase tracking-wider`}>Due: {assignment.date}</div>
                                      </div>
                                      <button 
                                          onClick={() => onDeleteAssignment?.(assignment.id)}
                                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                                      >
                                          <Trash2 size={16} />
                                      </button>
                                  </div>
                              )})}
                          </div>
                      </div>
                  ) : (
                      <div className="text-center text-slate-400 font-bold py-8">
                          {selectedDate ? 'No missions assigned for this date!' : 'No missions assigned for this week!'}
                      </div>
                  )}
              </div>
          </div>
      </div>

       {/* All Grades Quick Links */}
       <div className="pt-4"> {/* Added padding top to separate from calendar */}
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <BookOpen className="text-orange-500" /> Explore Grades
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {GRADES.map((grade) => (
                <div key={grade.id} className="h-full">
                    <button 
                      onClick={() => onGradeClick(grade.id)}
                      className={`w-full h-full p-6 rounded-3xl bg-white shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-4 border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group`}
                    >
                        <div className={`p-5 rounded-full ${grade.color} text-white group-hover:scale-110 transition-transform`}>
                            <grade.icon size={32} />
                        </div>
                        <span className="text-xl font-black text-slate-700">{grade.title}</span>
                    </button>
                </div>
            ))}
        </div>
      </div>

      {/* Activities, Early Childhood & Parent/Teacher Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Activities Section */}
        <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">🎮</span> Activities
            </h3>
            <button 
                onClick={onActivitiesClick}
                className="flex-1 w-full bg-white p-6 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between items-start border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group hover:bg-purple-50 min-h-[170px]"
            >
                <div className="p-4 rounded-2xl bg-purple-100 text-purple-600 group-hover:scale-110 transition-transform shadow-inner">
                    <Gamepad2 size={36} />
                </div>
                <div className="text-left w-full mt-3">
                    <h4 className="text-2xl font-black text-slate-700 mb-1">Activities</h4>
                    <p className="text-slate-500 font-bold mb-3 text-sm">Games, Puzzles & More!</p>
                    <div className="flex items-center gap-2 text-purple-500 font-bold text-sm bg-white/50 px-3 py-1.5 rounded-full w-fit">
                        Explore All <ArrowRight size={16} />
                    </div>
                </div>
            </button>
        </div>

        {/* Early Childhood Section */}
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

        {/* Parent/Teacher Corner Section */}
        {parentTeacherItem && (
            <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="text-3xl">🍎</span> {parentTeacherItem.title}
                </h3>
                <button 
                    onClick={onParentTeacherClick}
                    className="flex-1 w-full bg-white p-6 rounded-[2rem] shadow-xl border-b-8 border-stone-100 hover:border-slate-200 hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center justify-center gap-4 group text-center min-h-[170px]"
                >
                     <div className={`p-5 rounded-[1.5rem] ${parentTeacherItem.colorClass} group-hover:scale-110 transition-transform shrink-0 shadow-inner`}>
                        <parentTeacherItem.icon size={40} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-slate-700 mb-2">{parentTeacherItem.title}</h4>
                        <p className="text-slate-500 font-bold leading-relaxed text-sm max-w-xs mx-auto">{parentTeacherItem.description}</p>
                    </div>
                </button>
            </div>
        )}
      </div>

      {/* Day Details Modal */}
      {selectedDate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative">
                  <div className="p-6 bg-blue-600 text-white flex justify-between items-center">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                          <CalendarIcon size={20} />
                          {new Date(selectedDate + 'T12:00:00').toLocaleDateString('default', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </h3>
                      <button onClick={() => setSelectedDate(null)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                          <X size={20} />
                      </button>
                  </div>
                  <div className="p-6 max-h-[60vh] overflow-y-auto">
                      {assignments.filter(a => a.date === selectedDate).length > 0 ? (
                          <div className="space-y-3">
                              {assignments.filter(a => a.date === selectedDate).map(assignment => {
                                  const colors = getSubjectColors(assignment.subject);
                                  const isCompleted = assignment.status === 'completed';
                                  return (
                                  <div key={assignment.id} className={`flex items-center gap-3 p-3 ${colors.bg} border-2 ${colors.border} rounded-xl ${isCompleted ? 'opacity-60' : ''}`}>
                                      <button 
                                          onClick={() => onUpdateAssignment?.(assignment.id, { status: isCompleted ? 'pending' : 'completed' })}
                                          className={`${colors.text} hover:scale-110 transition-transform`}
                                      >
                                          {isCompleted ? <CheckCircle size={20} /> : <Circle size={20} />}
                                      </button>
                                      <div className={`flex-1 ${isCompleted ? 'line-through' : ''}`}>
                                          <div className="text-sm font-bold text-slate-800">{assignment.title}</div>
                                          <div className={`text-[10px] font-bold ${colors.text} uppercase tracking-wider`}>{assignment.subject}</div>
                                      </div>
                                      <button 
                                          onClick={() => onDeleteAssignment?.(assignment.id)}
                                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                                      >
                                          <Trash2 size={16} />
                                      </button>
                                  </div>
                              )})}
                          </div>
                      ) : (
                          <div className="text-center py-8 text-slate-500 font-bold">
                              <div className="text-4xl mb-3">🎉</div>
                              No homework assigned for this day!
                          </div>
                      )}
                  </div>
              </div>
          </div>
      )}

    </div>
  );
};

export default Dashboard;
