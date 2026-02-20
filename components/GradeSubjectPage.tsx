import React, { useState, useMemo } from 'react';
import { SubjectItem, User } from '../types';
import { Unit, Lesson } from '../types';
import { MATH_CURRICULUM, READING_CURRICULUM, SCIENCE_CURRICULUM, SOCIAL_STUDIES_CURRICULUM } from '../constants';
import { 
  ArrowLeft, 
  Play, 
  CheckCircle2, 
  Lock, 
  Target,
  BookOpen,
  Trophy,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Zap
} from 'lucide-react';

interface GradeSubjectPageProps {
  user: User;
  subject: SubjectItem;
  grade: string;
  onBack: () => void;
  onUnitSelect: (unitId: number) => void;
}

const GradeSubjectPage: React.FC<GradeSubjectPageProps> = ({ user, subject, grade, onBack, onUnitSelect }) => {
  const curriculum = useMemo(() => {
    // Determine curriculum based on subject/grade
    if (subject.id === 'math') return MATH_CURRICULUM[grade] || MATH_CURRICULUM['Kindergarten'];
    if (subject.id === 'reading') return READING_CURRICULUM[grade] || READING_CURRICULUM['Kindergarten'];
    if (subject.id === 'science') return SCIENCE_CURRICULUM[grade] || SCIENCE_CURRICULUM['Kindergarten'];
    if (subject.id === 'social-studies') return SOCIAL_STUDIES_CURRICULUM[grade] || SOCIAL_STUDIES_CURRICULUM['Kindergarten'];
    
    // Fallback if something goes wrong
    return MATH_CURRICULUM['Kindergarten'];
  }, [subject.id, grade]);

  // Determine completed lessons from User state
  const completedLessonIds = user.progress?.[`${subject.id}-${grade}`] || [];
  
  // Find the highest completed ID to determine current pointer
  const maxCompletedId = completedLessonIds.length > 0 ? Math.max(...completedLessonIds) : 0;
  
  // The first lesson of the curriculum
  const firstLessonId = curriculum.length > 0 && curriculum[0].lessons.length > 0 ? curriculum[0].lessons[0].id : 1;

  // Current Lesson is max completed + 1, or the first one if none completed
  const currentLessonId = maxCompletedId > 0 ? maxCompletedId + 1 : firstLessonId;
  
  // State to track which units are expanded (default to the first unit)
  const [expandedUnits, setExpandedUnits] = useState<number[]>([curriculum[0]?.id || 1]); 

  const toggleUnit = (unitId: number) => {
    setExpandedUnits(prev => 
        prev.includes(unitId) 
        ? prev.filter(id => id !== unitId) 
        : [...prev, unitId]
    );
  };

  // Calculate stats
  const totalLessons = curriculum.reduce((acc, unit) => acc + unit.lessons.length, 0);
  
  const completedCount = completedLessonIds.length;
  const progressPercentage = Math.round((completedCount / Math.max(totalLessons, 1)) * 100);

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 pb-20">
      
      {/* Navigation Header */}
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors">
            <ArrowLeft size={20} /> Back to {subject.title}
        </button>
        <div className="bg-white px-4 py-2 rounded-full font-bold text-slate-600 shadow-sm border border-stone-200">{grade}</div>
      </div>

      {/* Hero Banner */}
      <div className={`relative rounded-[2.5rem] p-8 md:p-12 bg-gradient-to-r ${subject.gradient} text-white shadow-lg overflow-hidden mb-12`}>
         <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white/20 p-6 rounded-[2rem] backdrop-blur-sm shadow-inner shrink-0">
                <subject.mascot size={64} className="text-white drop-shadow-md" />
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-black mb-2">{subject.title} Adventure</h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-bold opacity-90">
                     <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full"><BookOpen size={16} /> {curriculum.length} Units</span>
                     <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full"><Target size={16} /> Lesson {currentLessonId}</span>
                </div>
            </div>
            
            {/* Progress Circle (Desktop) */}
            <div className="hidden md:flex ml-auto flex-col items-center justify-center bg-white/10 p-6 rounded-3xl border-2 border-white/20">
                 <div className="text-4xl font-black">{progressPercentage}%</div>
                 <div className="text-xs uppercase tracking-widest opacity-80">Mastery</div>
            </div>
         </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Curriculum Accordion */}
        <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <BookOpen className="text-slate-400" />
                <h2 className="text-2xl font-black text-slate-800">Your Learning Map</h2>
            </div>

            {curriculum.map((unit) => {
                const isExpanded = expandedUnits.includes(unit.id);
                
                // UNLOCK HACK: Treat all units as unlocked for testing
                const unitHasUnlocked = true; // unit.lessons.some(l => l.id <= currentLessonId);
                const unitFullyCompleted = unit.lessons.every(l => completedLessonIds.includes(l.id));
                
                return (
                    <div 
                        key={unit.id} 
                        className={`rounded-[2rem] border-2 transition-all duration-500 overflow-hidden ${
                            unitHasUnlocked 
                            ? 'bg-white border-stone-100 shadow-sm' 
                            : 'bg-stone-50 border-stone-100 opacity-80'
                        }`}
                    >
                        {/* Unit Header (Clickable) */}
                        <button 
                            onClick={() => toggleUnit(unit.id)}
                            className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm font-bold text-xl ${
                                    unitFullyCompleted ? 'bg-green-500' : unitHasUnlocked ? 'bg-blue-500' : 'bg-slate-300'
                                }`}>
                                    {unit.id}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">{unit.title}</h3>
                                    <p className="text-slate-500 text-sm font-semibold">{unit.lessons.length} Lessons • {unit.description}</p>
                                </div>
                            </div>
                            <div className={`p-2 rounded-full bg-stone-100 text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                                <ChevronDown size={20} />
                            </div>
                        </button>

                        {/* Lessons List (Expandable) */}
                        {isExpanded && (
                            <div className="border-t-2 border-stone-50 bg-stone-50/50 p-4 space-y-3">
                                {unit.lessons.map((lesson) => {
                                    // UNLOCK HACK: Never return 'locked' status
                                    const status = completedLessonIds.includes(lesson.id) ? 'completed' : 'current';
                                    
                                    return (
                                        <button
                                            key={lesson.id}
                                            // UNLOCK HACK: Always enabled
                                            disabled={false}
                                            onClick={() => onUnitSelect(lesson.id)}
                                            className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all relative group ${
                                                status === 'current' ? 'bg-white border-blue-400 shadow-md scale-[1.01] z-10' :
                                                'bg-white border-stone-200 hover:border-green-300 hover:bg-green-50'
                                            }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    {status === 'completed' && <CheckCircle2 size={24} className="text-green-500" />}
                                                    {status === 'current' && <div className="bg-blue-100 text-blue-600 p-1.5 rounded-full animate-pulse"><Play size={16} fill="currentColor" /></div>}
                                                </div>
                                                <div className="text-left">
                                                    <h4 className={`font-bold text-lg text-slate-700`}>{lesson.title}</h4>
                                                    <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mt-0.5">
                                                        <span className="flex items-center gap-1"><Clock size={12} /> {lesson.duration}</span>
                                                        <span className="uppercase tracking-wider px-1.5 py-0.5 bg-stone-100 rounded text-[10px]">{lesson.type}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {status === 'current' && (
                                                <div className="px-3 py-1 bg-blue-500 text-white text-xs font-black rounded-full shadow-sm animate-bounce-subtle">
                                                    START
                                                </div>
                                            )}
                                        </button>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
        
        {/* Right Column: Stats & Motivation */}
        <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-b-4 border-stone-100 text-center sticky top-24">
                <div className="w-20 h-20 bg-yellow-400 rounded-3xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg rotate-3">
                    <Trophy size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-2">My Progress</h3>
                <div className="space-y-6 mt-6">
                    <div>
                         <div className="flex justify-between items-center text-sm mb-2">
                            <span className="font-bold text-slate-400 uppercase tracking-widest">Mastery</span>
                            <span className="font-black text-blue-600">{progressPercentage}%</span>
                        </div>
                        <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${progressPercentage}%` }}></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="bg-stone-50 p-3 rounded-2xl border border-stone-100">
                             <div className="text-2xl font-black text-slate-800">{completedCount}</div>
                             <div className="text-[10px] font-bold text-slate-400 uppercase">Lessons Done</div>
                        </div>
                         <div className="bg-stone-50 p-3 rounded-2xl border border-stone-100">
                             <div className="text-2xl font-black text-slate-800 flex items-center justify-center gap-1">4 <Zap size={14} className="text-yellow-500" fill="currentColor" /></div>
                             <div className="text-[10px] font-bold text-slate-400 uppercase">Day Streak</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default GradeSubjectPage;