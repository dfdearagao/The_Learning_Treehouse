import React from 'react';

interface SectionDividerProps {
  emoji: string;
  title: string;
  extraSpacing?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ emoji, title, extraSpacing = false }) => {
  return (
    <div className={`flex items-center justify-center w-full max-w-4xl mx-auto my-8 ${extraSpacing ? 'mt-20' : 'mt-12'}`}>
      <div className="h-1 flex-1 bg-stone-200 rounded-full"></div>
      <div className="px-6 flex items-center gap-2">
        <span className="text-3xl filter drop-shadow-sm">{emoji}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-700">{title}</h2>
      </div>
      <div className="h-1 flex-1 bg-stone-200 rounded-full"></div>
    </div>
  );
};

export default SectionDivider;