import React from 'react';
import { SubjectItem, GameItem } from '../types';
import { ArrowLeft, Play, Star, BookOpen, Layers, ArrowRight, GraduationCap } from 'lucide-react';

interface SubjectPageProps {
  subject: SubjectItem;
  onBack: () => void;
  onGradeSelect: (grade: string) => void;
  onTeacherClick: () => void;
  onActivityClick: (game: GameItem) => void;
}

const GRADES = [
  "Kindergarten",
  "1st Grade",
  "2nd Grade",
  "3rd Grade",
  "4th Grade",
  "5th Grade"
];

const SubjectPage: React.FC<SubjectPageProps> = ({ subject, onBack, onGradeSelect, onTeacherClick, onActivityClick }) => {
  const Mascot = subject.mascot;

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Home
      </button>

      {/* Hero Section */}
      <div className={`relative rounded-[3rem] p-8 md:p-16 bg-gradient-to-br ${subject.gradient} text-white shadow-xl overflow-hidden mb-12`}>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="bg-white/20 p-8 rounded-full backdrop-blur-md shadow-inner">
            <Mascot size={80} className="text-white drop-shadow-md" />
          </div>
          <div className="text-center md:text-left space-y-4 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black drop-shadow-sm">{subject.title}</h1>
            <p className="text-lg md:text-xl font-medium opacity-95 leading-relaxed">
              {subject.longDescription}
            </p>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>
      </div>

      {/* Grade Selection Grid */}
      <div className="mb-16">
         <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <GraduationCap className="text-slate-600" size={28} />
            Select Your Grade Level
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GRADES.map((grade) => (
              <div key={grade} className="bg-stone-200 p-6 md:p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-stone-300 transition-colors">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{grade}</h3>
                <p className="text-slate-500 font-medium mb-6">Choose this grade, then pick a {subject.title.toLowerCase()} activity.</p>
                <button 
                  onClick={() => onGradeSelect(grade)}
                  className="w-full py-4 bg-emerald-700 text-white font-bold rounded-xl shadow-[0_4px_0_#064e3b] hover:bg-emerald-800 hover:translate-y-0.5 hover:shadow-[0_2px_0_#064e3b] active:translate-y-1 active:shadow-none transition-all"
                >
                  Choose {grade}
                </button>
              </div>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* What You'll Learn Column */}
        <div className="lg:col-span-2 space-y-8">
           {/* Tags / Curriculum */}
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border-b-8 border-stone-100">
             <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-slate-400" size={28} />
                <h2 className="text-2xl font-bold text-slate-800">What You'll Learn</h2>
             </div>
             <div className="flex flex-wrap gap-3">
                {subject.learningTags?.map((tag, idx) => (
                  <span key={idx} className="px-5 py-3 bg-stone-100 text-slate-700 rounded-xl font-bold text-sm border-2 border-stone-200">
                    {tag}
                  </span>
                ))}
             </div>
          </div>

          {/* Featured Activities */}
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border-b-8 border-stone-100">
            <div className="flex items-center gap-3 mb-6">
                <Layers className="text-slate-400" size={28} />
                <h2 className="text-2xl font-bold text-slate-800">Featured Activities</h2>
             </div>
            
            <div className="space-y-4">
              {subject.sampleActivities?.map((activity, idx) => {
                 // Construct a temporary GameItem to launch the player
                 let category: GameItem['category'] = 'Fun';
                 if (subject.id === 'math') category = 'Math';
                 if (subject.id === 'reading') category = 'Reading';
                 if (subject.id === 'science') category = 'Science';
                 if (subject.id === 'social-studies') category = 'Social Studies';

                 const tempGameItem: GameItem = {
                    id: `activity-${subject.id}-${idx}`,
                    title: activity.title,
                    category: category,
                    color: subject.textColor.replace('text-', 'bg-').replace('900', '500'),
                    icon: Play
                 };

                 return (
                    <div 
                        key={idx} 
                        onClick={() => onActivityClick(tempGameItem)}
                        className="group flex items-center justify-between p-4 rounded-2xl border-2 border-stone-100 hover:border-blue-200 hover:bg-blue-50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${subject.textColor.replace('text', 'bg').replace('900', '100')} ${subject.textColor}`}>
                          <Play size={20} fill="currentColor" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-lg">{activity.title}</h3>
                          <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">{activity.type}</span>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-yellow-50 p-8 rounded-[2rem] border-4 border-yellow-200 text-center space-y-4">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto text-white shadow-md">
              <Star size={32} fill="currentColor" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Earn Badges!</h3>
            <p className="text-slate-600">Complete lessons in {subject.title} to unlock special stickers for your profile.</p>
          </div>

          <div className="bg-treehouse-green/10 p-8 rounded-[2rem] border-4 border-treehouse-green/20 text-center space-y-4">
            <h3 className="text-xl font-bold text-treehouse-green">Teachers</h3>
            <p className="text-slate-600">Access lesson plans and worksheets for {subject.title} directly from the teacher dashboard.</p>
            <button 
                onClick={onTeacherClick}
                className="w-full py-3 bg-white text-treehouse-green font-bold rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              View Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;