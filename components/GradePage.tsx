import React from 'react';
import { CORE_SUBJECTS } from '../constants';
import { ArrowLeft, Play, Star, BookOpen, Layers, ArrowRight, GraduationCap } from 'lucide-react';

interface GradePageProps {
  grade: { id: string; title: string; color: string; icon: any };
  onBack: () => void;
  onSubjectSelect: (subjectId: string) => void;
}

const GradePage: React.FC<GradePageProps> = ({ grade, onBack, onSubjectSelect }) => {
  const Mascot = grade.icon;

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
      <div className={`relative rounded-[3rem] p-8 md:p-16 ${grade.color} text-white shadow-xl overflow-hidden mb-12`}>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="bg-white/20 p-8 rounded-full backdrop-blur-md shadow-inner">
            <Mascot size={80} className="text-white drop-shadow-md" />
          </div>
          <div className="text-center md:text-left space-y-4 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black drop-shadow-sm">{grade.title}</h1>
            <p className="text-lg md:text-xl font-medium opacity-95 leading-relaxed">
              Explore all subjects for {grade.title}. Choose a subject below to start learning!
            </p>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>
      </div>

      {/* Subject Selection Grid */}
      <div className="mb-16">
         <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <BookOpen className="text-slate-600" size={28} />
            Select a Subject
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_SUBJECTS.map((subject) => (
              <div key={subject.id} className="bg-stone-200 p-6 md:p-8 rounded-3xl shadow-sm border-2 border-transparent hover:border-stone-300 transition-colors flex flex-col items-center text-center">
                <div className={`p-5 rounded-full bg-gradient-to-br ${subject.gradient} text-white mb-4`}>
                    <subject.mascot size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{subject.title}</h3>
                <p className="text-slate-500 font-medium mb-6 flex-1">Dive into {subject.title.toLowerCase()} lessons for {grade.title}.</p>
                <button 
                  onClick={() => onSubjectSelect(subject.id)}
                  className="w-full py-4 bg-emerald-700 text-white font-bold rounded-xl shadow-[0_4px_0_#064e3b] hover:bg-emerald-800 hover:translate-y-0.5 hover:shadow-[0_2px_0_#064e3b] active:translate-y-1 active:shadow-none transition-all"
                >
                  Explore {subject.title}
                </button>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default GradePage;
