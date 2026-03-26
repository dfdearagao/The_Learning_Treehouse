import React, { useState } from 'react';
import { StoreItem, User } from '../types/types';
import { STORE_ITEMS } from '../constants';
import { Coins, ArrowLeft, ShoppingBag, Check, Lock, Sparkles } from 'lucide-react';

interface StorePageProps {
  user: User;
  onBack: () => void;
  onBuy: (item: StoreItem) => void;
}

const StorePage: React.FC<StorePageProps> = ({ user, onBack, onBuy }) => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Furniture', 'Decor', 'Tech', 'Pet', 'Toy', 'Accessory', 'Room', 'Consumable'];

  const filteredItems = STORE_ITEMS.filter(
    item => filter === 'All' || item.category === filter
  );

  // Simple daily deal logic (just picking the first two items for demo)
  const dailyDeals = STORE_ITEMS.slice(0, 2);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors w-fit"
        >
            <ArrowLeft size={20} />
            Back to Dashboard
        </button>

        <div className="flex items-center gap-3 bg-yellow-100 px-6 py-3 rounded-full text-yellow-700 font-bold shadow-sm self-start md:self-auto">
            <Coins size={24} className="fill-yellow-500" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs uppercase opacity-70">Your Balance</span>
              <span className="text-xl">{user.coins} Coins</span>
            </div>
        </div>
      </div>

      <div className="mb-8 text-center md:text-left">
        <h1 className="text-4xl font-black text-slate-800 mb-2 flex items-center gap-3 md:justify-start justify-center">
            <span className="text-4xl">🏪</span> General Store
        </h1>
        <p className="text-slate-500 font-bold text-lg">Spend your hard-earned coins on cool stuff!</p>
      </div>

      {/* Daily Deals Section */}
      {filter === 'All' && (
          <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                  <Sparkles className="text-yellow-500" /> Daily Deals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dailyDeals.map(item => (
                      <div key={`deal-${item.id}`} className="bg-gradient-to-r from-indigo-500 to-purple-500 p-1 rounded-3xl shadow-md">
                          <div className="bg-white rounded-[1.4rem] p-4 h-full flex items-center gap-4">
                              <div className={`w-24 h-24 rounded-2xl ${item.color} flex items-center justify-center text-5xl shadow-inner shrink-0`}>
                                  {item.icon}
                              </div>
                              <div className="flex-1">
                                  <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider block mb-1">20% OFF</span>
                                  <h3 className="font-bold text-slate-800 text-xl leading-tight mb-2">{item.name}</h3>
                                  <button 
                                      onClick={() => onBuy({...item, price: Math.floor(item.price * 0.8)})}
                                      disabled={user.coins < Math.floor(item.price * 0.8) || (user.inventory?.includes(item.id) && !item.isConsumable)}
                                      className="py-2 px-4 bg-yellow-400 text-yellow-900 font-bold rounded-xl flex items-center gap-2 hover:bg-yellow-300 transition-colors disabled:opacity-50"
                                  >
                                      Buy for {Math.floor(item.price * 0.8)} <Coins size={16} />
                                  </button>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      )}

      {/* Category Filter */}
      <div className="flex overflow-x-auto pb-4 gap-3 mb-8 scrollbar-hide justify-center md:justify-start">
        {categories.map(cat => (
            <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-colors ${
                    filter === cat 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-slate-500 hover:bg-stone-100'
                }`}
            >
                {cat}
            </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map(item => {
            const isPurchased = user.inventory?.includes(item.id) && !item.isConsumable;
            const canAfford = user.coins >= item.price;
            const isLevelLocked = item.requiredLevel && user.level < item.requiredLevel;
            const isSubjectLocked = item.requiredSubject && false; // In a real app, check if subject is completed
            const isLocked = isLevelLocked || isSubjectLocked;

            return (
                <div key={item.id} className={`bg-white p-4 rounded-3xl shadow-sm border-b-4 border-stone-100 transition-all flex flex-col items-center text-center group ${isLocked ? 'opacity-75 grayscale-[0.5]' : 'hover:shadow-lg'}`}>
                    <div className={`w-full aspect-square rounded-2xl ${item.color} mb-4 flex items-center justify-center text-6xl shadow-inner relative`}>
                        {item.icon}
                        {isLocked && (
                            <div className="absolute inset-0 bg-slate-900/40 rounded-2xl flex items-center justify-center backdrop-blur-[2px]">
                                <Lock className="text-white w-12 h-12" />
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">{item.category}</span>
                        <h3 className="font-bold text-slate-800 text-lg leading-tight">{item.name}</h3>
                        {isLevelLocked && <p className="text-xs font-bold text-red-500 mt-1">Requires Lvl {item.requiredLevel}</p>}
                        {isSubjectLocked && <p className="text-xs font-bold text-orange-500 mt-1">Requires {item.requiredSubject}</p>}
                    </div>
                    
                    <div className="mt-auto w-full">
                        {isPurchased ? (
                            <button disabled className="w-full py-2 bg-stone-100 text-stone-400 font-bold rounded-xl flex items-center justify-center gap-2 cursor-default">
                                <Check size={18} /> Owned
                            </button>
                        ) : (
                            <button 
                                onClick={() => onBuy(item)}
                                disabled={!canAfford || isLocked}
                                className={`w-full py-2 font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm active:translate-y-1 active:shadow-none border-b-2 border-transparent ${
                                    canAfford && !isLocked
                                    ? 'bg-treehouse-green text-white hover:bg-green-500 hover:border-green-700' 
                                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                                }`}
                            >
                                {canAfford && !isLocked ? (
                                    <>
                                        Buy <span className="bg-black/10 px-2 rounded-lg text-sm">{item.price} 💰</span>
                                    </>
                                ) : isLocked ? (
                                    <>Locked</>
                                ) : (
                                    <>Need {item.price - user.coins} 💰</>
                                )}
                            </button>
                        )}
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default StorePage;