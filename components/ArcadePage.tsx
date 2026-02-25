import React, { useState } from 'react';
import { ARCADE_GAMES } from '../constants';
import { GameItem } from '../types/types';
import { ArrowLeft, Play, Search } from 'lucide-react';
import GamePlayer from './GamePlayer';

interface ArcadePageProps {
  onBack: () => void;
}

const ArcadePage: React.FC<ArcadePageProps> = ({ onBack }) => {
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Math', 'Reading', 'Science', 'Logic', 'Fun'];

  const filteredGames = ARCADE_GAMES.filter(game => {
    const matchesCategory = filter === 'All' || game.category === filter;
    const matchesSearch = game.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors w-fit"
        >
            <ArrowLeft size={20} />
            Back to Dashboard
        </button>
        
        <div className="flex-1 max-w-md relative">
            <input 
                type="text" 
                placeholder="Search games..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-stone-200 focus:border-purple-400 outline-none font-bold text-slate-600"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-black text-slate-800 mb-2">Arcade Zone 🕹️</h1>
        <p className="text-slate-500 font-bold text-lg">Play games, earn points, and have fun!</p>
      </div>

      {/* Category Filter */}
      <div className="flex overflow-x-auto pb-4 gap-3 mb-8 scrollbar-hide">
        {categories.map(cat => (
            <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-colors ${
                    filter === cat 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'bg-white text-slate-500 hover:bg-stone-100'
                }`}
            >
                {cat}
            </button>
        ))}
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredGames.map((game) => {
            const Icon = game.icon;
            return (
                <button
                    key={game.id}
                    onClick={() => setSelectedGame(game)}
                    className="group bg-white p-4 rounded-3xl shadow-sm border-b-4 border-stone-100 hover:border-purple-300 hover:shadow-xl hover:-translate-y-1 transition-all text-left flex flex-col h-full"
                >
                    <div className={`w-full aspect-square rounded-2xl ${game.color} mb-4 flex items-center justify-center text-white shadow-inner relative overflow-hidden`}>
                        <Icon size={48} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        <div className="absolute top-2 right-2 bg-white/20 p-1.5 rounded-full backdrop-blur-sm">
                            <Play size={12} fill="white" />
                        </div>
                    </div>
                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{game.category}</span>
                        <h3 className="font-bold text-slate-700 leading-tight">{game.title}</h3>
                    </div>
                </button>
            )
        })}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-20">
            <p className="text-slate-400 font-bold text-xl">No games found... try another search!</p>
        </div>
      )}

      {selectedGame && (
        <GamePlayer game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}
    </div>
  );
};

export default ArcadePage;
