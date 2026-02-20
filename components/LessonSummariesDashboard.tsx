import React from 'react';
import { ArrowLeft, GraduationCap, Star } from 'lucide-react';

interface LessonSummariesDashboardProps {
  onBack: () => void;
  onGradeSelect: (grade: string) => void;
}

const GRADES = [
  "Kindergarten",
  "1st Grade",
  "2nd Grade",
  "3rd Grade",
  "4th Grade",
  "5th Grade"
];

const LessonSummariesDashboard: React.FC<LessonSummariesDashboardProps> = ({ onBack, onGradeSelect }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors w-fit mb-8"
      >
          <ArrowLeft size={20} />
          Back to Corner
      </button>

      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl font-black text-slate-800 mb-2 flex items-center gap-3 justify-center md:justify-start">
            <span className="bg-orange-500 text-white p-2 rounded-xl shadow-lg rotate-3"><GraduationCap size={32} /></span>
            Lesson Summaries
        </h1>
        <p className="text-slate-500 font-bold text-lg">Choose a grade level to see what students are exploring!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GRADES.map((grade, idx) => (
          <button
            key={grade}
            onClick={() => onGradeSelect(grade)}
            className="group relative bg-white p-8 rounded-[2.5rem] shadow-sm border-b-8 border-stone-100 hover:border-orange-300 hover:-translate-y-2 transition-all text-center flex flex-col items-center gap-4"
          >
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110 group-hover:rotate-6 ${
                idx % 3 === 0 ? 'bg-blue-500' : idx % 3 === 1 ? 'bg-green-500' : 'bg-purple-500'
            }`}>
              <span className="text-3xl font-black">{grade.charAt(0)}</span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-800">{grade}</h3>
              <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mt-1">View Summaries</p>
            </div>
            
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Star className="text-yellow-400 fill-yellow-400" size={24} />
            </div>
          </button>
        ))}
      </div>

      <div className="mt-16 bg-white p-8 rounded-[3rem] shadow-lg border-b-8 border-stone-100 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-blue-100 p-6 rounded-full shrink-0">
             <span className="text-5xl">📖</span>
          </div>
          <div>
              <h2 className="text-2xl font-black text-slate-800 mb-2">Why review summaries?</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                  Lesson summaries provide a quick snapshot of the key concepts, vocabulary, and skills students are working on. Use these to reinforce learning at home or plan your next classroom discussion!
              </p>
          </div>
      </div>
    </div>
  );
};

export default LessonSummariesDashboard;
