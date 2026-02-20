import React from 'react';
import { HOW_IT_WORKS } from '../constants';
import SectionDivider from './SectionDivider';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface HowItWorksPageProps {
  onJoin: () => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onJoin }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-800">
          Your Journey <span className="text-orange-500">Begins Here</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600">
          Getting started is as easy as 1-2-3-4! Follow the path to become a Learning Treehouse explorer.
        </p>
      </div>

      <SectionDivider emoji="🚀" title="How It Works" />

      <div className="relative mt-12 mb-20">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-3 bg-stone-200 -translate-y-1/2 rounded-full -z-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div key={step.id} className="relative flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-lg border-b-4 border-stone-200 lg:bg-white/80 lg:backdrop-blur-sm transition-transform hover:-translate-y-2">
                <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-md relative z-10`}>
                  <StepIcon size={40} />
                  <div className="absolute -top-3 -right-3 bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-cream text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{step.description}</p>
                
                {/* Mobile Arrow */}
                {index < HOW_IT_WORKS.length - 1 && (
                  <div className="lg:hidden mt-6 text-stone-300">
                     <ChevronRight size={32} className="rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-100 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-white shadow-lg">
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-3xl font-black text-slate-800">Start Your Adventure!</h2>
          <p className="text-slate-600 font-bold text-lg">It's free to join and fun to learn.</p>
        </div>
        <button 
          onClick={onJoin}
          className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-[0_6px_0_#9a3412] hover:shadow-[0_4px_0_#9a3412] hover:translate-y-[2px] active:shadow-none active:translate-y-[6px] transition-all flex items-center gap-3"
        >
          Join Now <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HowItWorksPage;