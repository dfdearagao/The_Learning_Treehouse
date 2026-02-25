
import React from 'react';
import { EarlyChildhoodCategory } from '../types/types';
import { ArrowLeft, MousePointer2 } from 'lucide-react';
import { EARLY_CHILDHOOD_CATEGORIES } from '../constants';

interface EarlyChildhoodMenuPageProps {
  onBack: () => void;
  onCategorySelect: (categoryId: string) => void;
}

const EarlyChildhoodMenuPage: React.FC<EarlyChildhoodMenuPageProps> = ({ onBack, onCategorySelect }) => {
  // Filter out parent-teacher if it's meant to be separate, or include it. 
  // Based on "8ish icons", we focus on the content categories.
  const categories = EARLY_CHILDHOOD_CATEGORIES.filter(item => item.id !== 'parent-teacher');

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 pb-20">
      <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors w-fit mb-8"
      >
          <ArrowLeft size={20} />
          Back to Dashboard
      </button>

      <div className="mb-12 text-center md:text-left">
        <div className="inline-block p-4 bg-yellow-100 rounded-[2rem] mb-4 rotate-3 shadow-sm">
            <MousePointer2 size={48} className="text-yellow-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-2">
            Early Childhood
        </h1>
        <p className="text-slate-500 font-bold text-lg">Pick a playful path to start learning!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((item) => {
            const Icon = item.icon;
            return (
                <button 
                    key={item.id}
                    onClick={() => onCategorySelect(item.id)}
                    className="bg-white p-8 rounded-[2.5rem] shadow-sm border-b-8 border-stone-100 hover:border-stone-200 hover:-translate-y-2 transition-all cursor-pointer flex flex-col items-start gap-6 group text-left h-full"
                >
                    <div className={`p-4 rounded-3xl ${item.colorClass} group-hover:scale-110 transition-transform shrink-0 shadow-inner`}>
                        <Icon size={32} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-slate-800 mb-2 leading-tight">{item.title}</h4>
                        <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.description}</p>
                    </div>
                </button>
            )
        })}
      </div>
    </div>
  );
};

export default EarlyChildhoodMenuPage;
