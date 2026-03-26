import React, { useState } from 'react';
import { saveScore, ScoreEntry } from './storage_WordS';
import { Trophy, Clock, Target, ArrowRight, Share2, Check } from 'lucide-react';

interface Props {
  mode: 'standard' | 'timed' | 'daily';
  timeTaken: number;
  wordsFound: number;
  score: number;
  level: number;
  onPlayAgain: () => void;
  onClose: () => void;
}

export default function GameOverModal({ mode, timeTaken, wordsFound, score, level, onPlayAgain, onClose }: Props) {
  const [name, setName] = useState('');
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const emojis = "🟩".repeat(Math.min(5, Math.ceil(score / 100))) + "⬜".repeat(Math.max(0, 5 - Math.ceil(score / 100)));
    const text = `WordSeeker Daily ⏱️ ${timeTaken}s 🏆 Score: ${score} ${emojis}\nLevel Reached: ${level}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSave = () => {
    if (!name.trim()) return;
    saveScore({
      name: name.trim().substring(0, 12),
      score,
      time: timeTaken,
      date: new Date().toISOString()
    });
    setSaved(true);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col transform transition-all scale-100">
        <div className="p-8 text-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white relative">
          <Trophy size={48} className="mx-auto mb-4 text-yellow-300 drop-shadow-lg" />
          <h2 className="text-3xl font-extrabold tracking-tight mb-2">Game Over!</h2>
          <p className="text-indigo-100 font-medium">You reached Level {level} and found {wordsFound} words this level.</p>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
              <Clock size={24} className="mx-auto text-indigo-500 mb-2" />
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Time</p>
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{timeTaken}s</p>
            </div>
            {mode === 'timed' && (
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-2xl border border-amber-100 dark:border-amber-800/50 text-center">
                <Target size={24} className="mx-auto text-amber-500 mb-2" />
                <p className="text-sm text-amber-600 dark:text-amber-500 font-medium uppercase tracking-wider">Score</p>
                <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">{score}</p>
              </div>
            )}
          </div>

          {(mode === 'timed' || mode === 'daily') && !saved && (
            <div className="mb-8 bg-slate-50 dark:bg-slate-700/30 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Save High Score</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  maxLength={12}
                  placeholder="Your Name" 
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="flex-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl px-4 py-2 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <button 
                  onClick={handleSave}
                  disabled={!name.trim()}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-4 py-2 rounded-xl font-bold transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {saved && (
            <div className="mb-8 text-center text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-xl">
              Score saved to leaderboard!
            </div>
          )}

          <div className="mb-6">
            <button
              onClick={handleShare}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-700 dark:text-blue-300 font-bold rounded-xl transition-colors"
            >
              {copied ? <Check size={20} /> : <Share2 size={20} />}
              {copied ? "Copied to Clipboard!" : "Share Result"}
            </button>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold rounded-xl transition-colors"
            >
              Close
            </button>
            <button 
              onClick={onPlayAgain}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-200 dark:shadow-none"
            >
              Play Again
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
