import React, { useState } from 'react';
import { StoreItem, User } from '../types';
import { STORE_ITEMS } from '../constants';
import { Coins, ArrowLeft, ShoppingBag, Check } from 'lucide-react';

interface StorePageProps {
  user: User;
  onBack: () => void;
  onBuy: (item: StoreItem) => void;
}

const StorePage: React.FC<StorePageProps> = ({ user, onBack, onBuy }) => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'House', 'Pet', 'Toy', 'Accessory'];

  const filteredItems = STORE_ITEMS.filter(
    item => filter === 'All' || item.category === filter
  );

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
            const isPurchased = user.inventory?.includes(item.id);
            const canAfford = user.coins >= item.price;

            return (
                <div key={item.id} className="bg-white p-4 rounded-3xl shadow-sm border-b-4 border-stone-100 hover:shadow-lg transition-all flex flex-col items-center text-center group">
                    <div className={`w-full aspect-square rounded-2xl ${item.color} mb-4 flex items-center justify-center text-6xl shadow-inner`}>
                        {item.icon}
                    </div>
                    <div className="mb-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">{item.category}</span>
                        <h3 className="font-bold text-slate-800 text-lg leading-tight">{item.name}</h3>
                    </div>
                    
                    <div className="mt-auto w-full">
                        {isPurchased ? (
                            <button disabled className="w-full py-2 bg-stone-100 text-stone-400 font-bold rounded-xl flex items-center justify-center gap-2 cursor-default">
                                <Check size={18} /> Owned
                            </button>
                        ) : (
                            <button 
                                onClick={() => onBuy(item)}
                                disabled={!canAfford}
                                className={`w-full py-2 font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm active:translate-y-1 active:shadow-none border-b-2 border-transparent ${
                                    canAfford 
                                    ? 'bg-treehouse-green text-white hover:bg-green-500 hover:border-green-700' 
                                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                                }`}
                            >
                                {canAfford ? (
                                    <>
                                        Buy <span className="bg-black/10 px-2 rounded-lg text-sm">{item.price} 💰</span>
                                    </>
                                ) : (
                                    <>Need {item.price} 💰</>
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