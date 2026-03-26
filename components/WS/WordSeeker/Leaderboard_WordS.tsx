import React, { useState } from 'react';
import { getLeaderboard, ScoreEntry } from './storage_WordS';
import { Trophy, X } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function Leaderboard({ onClose }: Props) {
  const [scores] = useState<ScoreEntry[]>(getLeaderboard());

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[80vh]">
        <div className="p-6 bg-indigo-600 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <Trophy size={24} className="text-yellow-300" />
            <h2 className="text-2xl font-bold">Leaderboard</h2>
          </div>
          <button onClick={onClose} className="hover:bg-indigo-700 p-2 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1">
          {scores.length === 0 ? (
            <p className="text-center text-slate-500 dark:text-slate-400 py-8">No scores yet. Play a timed game to get on the board!</p>
          ) : (
            <div className="space-y-3">
              {scores.map((entry, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-4">
                    <span className={`font-bold text-lg w-6 text-center ${i === 0 ? 'text-yellow-500' : i === 1 ? 'text-slate-400' : i === 2 ? 'text-amber-600' : 'text-slate-500 dark:text-slate-400'}`}>
                      #{i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-100">{entry.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{new Date(entry.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-indigo-600 dark:text-indigo-400">{entry.score} pts</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{entry.time}s</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
