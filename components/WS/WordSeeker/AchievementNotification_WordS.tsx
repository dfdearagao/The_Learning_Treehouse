import React, { useEffect, useState } from 'react';
import { Achievement } from './storage_WordS';
import { Trophy } from 'lucide-react';

interface Props {
  achievement: Achievement | null;
  onClose: () => void;
}

export default function AchievementNotification({ achievement, onClose }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (achievement) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 300); // Wait for transition
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 transition-all duration-300 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-amber-200 dark:border-amber-700/50 p-4 flex items-center gap-4 max-w-sm">
        <div className="bg-amber-100 dark:bg-amber-900/40 p-3 rounded-xl text-3xl">
          {achievement.icon}
        </div>
        <div>
          <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Trophy size={14} />
            Achievement Unlocked
          </div>
          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight">{achievement.title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
}
