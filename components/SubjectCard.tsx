
import React from 'react';
import { SubjectItem } from '../types/types';
import { ArrowRight } from 'lucide-react';

interface SubjectCardProps extends SubjectItem {
  onClick?: (id: string) => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ id, title, mascot: Mascot, gradient, textColor, onClick }) => {
  return (
    <div 
      onClick={() => onClick && onClick(id)}
      className={`relative overflow-hidden rounded-3xl p-6 shadow-lg bg-gradient-to-br ${gradient} hover:scale-105 transition-transform duration-300 group cursor-pointer h-full`}
    >
      <div className="relative z-10 flex flex-col h-full justify-between min-h-[260px]">
        <div className="flex justify-between items-start">
          <div className={`p-4 bg-white/30 backdrop-blur-sm rounded-2xl ${textColor}`}>
            <Mascot size={40} />
          </div>
        </div>
        
        <div>
          <h3 className={`text-3xl font-extrabold mb-4 text-white drop-shadow-md`}>{title}</h3>
          <button className="flex items-center gap-2 bg-white text-slate-800 px-6 py-3 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-50 transition-colors">
            Explore
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
      
      {/* Decorative background circle */}
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-all"></div>
    </div>
  );
};

export default SubjectCard;
