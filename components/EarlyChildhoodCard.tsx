
import React from 'react';
import { EarlyChildhoodItem } from '../types/types';
import { ArrowRight } from 'lucide-react';

interface EarlyChildhoodCardProps extends EarlyChildhoodItem {
    onClick?: () => void;
}

const EarlyChildhoodCard: React.FC<EarlyChildhoodCardProps> = ({ title, description, mascot: Mascot, gradient, onClick }) => {
  return (
    <div 
        onClick={onClick}
        className={`relative w-full h-full max-w-4xl mx-auto rounded-[2rem] p-6 md:p-8 shadow-xl bg-gradient-to-r ${gradient} overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:scale-[1.01] active:scale-[0.99] flex flex-col justify-center border-b-8 border-yellow-200/50 min-h-[170px]`}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 h-full">
        <div className="flex-1 text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <div className="inline-block p-3 bg-white/40 rounded-full mb-3 text-amber-900 shadow-sm">
             <Mascot size={36} />
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-amber-900 mb-1">{title}</h3>
          <p className="text-amber-800 font-semibold text-sm mb-4">{description}</p>
          <button className="inline-flex items-center gap-2 bg-amber-900 text-white px-6 py-2 rounded-xl font-bold text-sm shadow-md hover:bg-amber-800 transition-colors transform active:scale-95">
            Play & Learn
            <ArrowRight size={16} />
          </button>
        </div>
        
        {/* Visual Decoration */}
        <div className="hidden md:block shrink-0">
            <div className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner animate-bounce-subtle">
                <span className="text-6xl drop-shadow-md">🧸</span>
            </div>
        </div>
      </div>
      
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
    </div>
  );
};

export default EarlyChildhoodCard;
