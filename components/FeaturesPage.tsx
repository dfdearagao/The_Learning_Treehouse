import React from 'react';
import { FEATURES } from '../constants';
import FeatureCard from './FeatureCard';
import SectionDivider from './SectionDivider';
import { Sparkles } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-800">
          Everything You Need to <span className="text-blue-500">Thrive</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600">
          Whether you're a teacher managing a classroom or a student ready for adventure, our toolbox is packed with magic.
        </p>
      </div>

      <SectionDivider emoji="🌟" title="What We Do" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="h-full">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>

      <div className="mt-20 bg-blue-600 rounded-[3rem] p-12 text-center text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 space-y-6">
          <Sparkles size={48} className="mx-auto text-yellow-300" />
          <h2 className="text-3xl font-bold">Ready to unlock these features?</h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Join thousands of students and teachers building their futures in the Treehouse today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;