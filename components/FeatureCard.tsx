
import React from 'react';
import { FeatureItem } from '../types/types';

const FeatureCard: React.FC<FeatureItem> = ({ title, description, icon: Icon, colorClass }) => {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 duration-300 border-b-4 border-stone-200 hover:border-stone-300 h-full text-center">
      <div className={`p-4 rounded-full mb-6 ${colorClass}`}>
        <Icon size={40} strokeWidth={2.5} />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">{title}</h3>
      {description && <p className="text-slate-500 font-medium leading-relaxed">{description}</p>}
    </div>
  );
};

export default FeatureCard;
