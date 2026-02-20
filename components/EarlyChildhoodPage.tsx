
import React, { useState } from 'react';
import { EarlyChildhoodCategory } from '../types';
import { ArrowLeft, Star, Play, Lock } from 'lucide-react';
import { EC_CONTENT, ECActivity } from '../earlyChildhoodContent';
import EarlyChildhoodPlayer from './EarlyChildhoodPlayer';

interface EarlyChildhoodPageProps {
  category: EarlyChildhoodCategory;
  onBack: () => void;
}

const EarlyChildhoodPage: React.FC<EarlyChildhoodPageProps> = ({ category, onBack }) => {
  const [selectedActivity, setSelectedActivity] = useState<ECActivity | null>(null);
  
  // Get activities from the content registry, or empty list if not found
  const activities = EC_CONTENT[category.id] || [];
  const Icon = category.icon;

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 pb-20">
      
      {/* Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors bg-white px-4 py-2 rounded-full shadow-sm"
        >
            <ArrowLeft size={24} />
            <span className="text-lg">Back</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className={`relative rounded-3xl p-8 md:p-10 ${category.colorClass.replace('text', 'bg').split(' ')[0]} bg-opacity-10 border-2 border-stone-100 shadow-sm overflow-hidden mb-12`}>
         
         <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className={`w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-md`}>
                <Icon size={48} className={category.colorClass.split(' ')[1]} />
            </div>
            <div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-2">{category.title}</h1>
                <p className="text-lg md:text-xl font-bold text-slate-500">
                    {category.description}
                </p>
            </div>
         </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
            <div className="bg-yellow-400 p-3 rounded-2xl text-white shadow-md">
                <Star size={32} fill="currentColor" />
            </div>
            <h2 className="text-3xl font-black text-slate-800">Let's Play & Learn!</h2>
        </div>

        {activities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((activity) => (
                    <button
                        key={activity.id}
                        disabled={activity.isLocked}
                        onClick={() => setSelectedActivity(activity)}
                        className={`group relative p-6 rounded-[2rem] border-b-8 transition-all duration-300 text-left h-full flex flex-col ${
                            activity.isLocked 
                            ? 'bg-stone-100 border-stone-200 opacity-60 cursor-not-allowed' 
                            : 'bg-white border-stone-100 hover:border-stone-200 hover:-translate-y-2 hover:shadow-xl shadow-lg'
                        }`}
                    >
                        {/* Activity Icon */}
                        <div className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center text-5xl shadow-inner ${activity.colorClass.replace('text', 'bg').split(' ')[0]} bg-opacity-30`}>
                            {activity.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <h3 className="text-2xl font-black text-slate-800 mb-2 leading-tight">
                                {activity.title}
                            </h3>
                            <span className={`inline-flex items-center gap-1 font-bold px-3 py-1 rounded-full text-sm ${activity.colorClass.replace('text', 'bg').split(' ')[0]} bg-opacity-20 ${activity.colorClass.split(' ')[1]}`}>
                                {activity.type === 'flashcards' && '📚 Cards'}
                                {activity.type === 'quiz' && '❓ Quiz'}
                                {activity.type === 'sorting' && '🧩 Sort'}
                                {activity.type === 'story' && '📖 Story'}
                            </span>
                        </div>

                        {/* Play Button Overlay (Visible on Hover for unlocked) */}
                        {!activity.isLocked && (
                            <div className="absolute bottom-6 right-6 w-12 h-12 bg-treehouse-green rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                                <Play size={24} fill="currentColor" className="ml-1" />
                            </div>
                        )}
                        
                        {activity.isLocked && (
                             <div className="absolute top-6 right-6 text-stone-400">
                                <Lock size={24} />
                            </div>
                        )}
                    </button>
                ))}
            </div>
        ) : (
            <div className="text-center py-20 bg-stone-50 rounded-[3rem] border-4 border-dashed border-stone-200">
                <p className="text-2xl font-bold text-stone-400">More activities coming soon!</p>
            </div>
        )}
      </div>

      {/* Progress Footer */}
      <div className="mt-16 bg-white p-8 rounded-[3rem] shadow-xl border-t-8 border-stone-100 text-center max-w-3xl mx-auto">
         <h3 className="text-2xl font-black text-slate-800 mb-4">Your Progress</h3>
         <div className="relative h-8 bg-stone-100 rounded-full overflow-hidden shadow-inner">
             <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 w-[35%] rounded-full"></div>
             {/* Stars on progress bar */}
             <div className="absolute top-1/2 left-[33%] -translate-y-1/2 bg-white p-1 rounded-full shadow-sm">
                 <Star size={16} className="text-orange-500" fill="currentColor" />
             </div>
         </div>
         <p className="mt-4 text-slate-500 font-bold">Keep going! You're doing great!</p>
      </div>

      {/* Activity Player Modal */}
      {selectedActivity && (
          <EarlyChildhoodPlayer 
            activity={selectedActivity} 
            onClose={() => setSelectedActivity(null)} 
          />
      )}

    </div>
  );
};

export default EarlyChildhoodPage;
