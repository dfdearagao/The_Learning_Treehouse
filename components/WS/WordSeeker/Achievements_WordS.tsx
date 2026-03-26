import React, { useState } from 'react';
import { getAchievements, Achievement } from './storage_WordS';
import { Medal, X } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function Achievements({ onClose }: Props) {
  const [achievements] = useState<Achievement[]>(getAchievements());

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[80vh]">
        <div className="p-6 bg-amber-500 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <Medal size={24} className="text-amber-100" />
            <h2 className="text-2xl font-bold">Achievements</h2>
          </div>
          <button onClick={onClose} className="hover:bg-amber-600 p-2 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((a) => {
            const unlocked = !!a.unlockedAt;
            return (
              <div key={a.id} className={`flex items-start gap-4 p-4 rounded-2xl border ${unlocked ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800' : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 opacity-60 grayscale'}`}>
                <div className="text-4xl">{a.icon}</div>
                <div>
                  <h3 className={`font-bold ${unlocked ? 'text-amber-900 dark:text-amber-100' : 'text-slate-600 dark:text-slate-400'}`}>{a.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 leading-tight">{a.description}</p>
                  {unlocked && (
                    <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-2 font-medium uppercase tracking-wider">
                      Unlocked {new Date(a.unlockedAt!).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
