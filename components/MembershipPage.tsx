
import React, { useState } from 'react';
import { Check, Star, Zap, Crown, Sparkles, X } from 'lucide-react';

interface MembershipPageProps {
  onBack: () => void;
}

const MembershipPage: React.FC<MembershipPageProps> = ({ onBack }) => {
  const [billing, setBilling] = useState<'annual' | 'monthly'>('annual');

  // Pricing Data
  const plans = [
    {
      id: 'core',
      name: 'CORE',
      icon: Star,
      theme: 'yellow',
      // Matching Dashboard stats colors
      colorClass: 'bg-yellow-100 text-yellow-700',
      borderColor: 'border-yellow-200',
      button: 'bg-white text-yellow-700 border-b-4 border-yellow-200 hover:bg-yellow-50',
      priceColor: 'text-yellow-600',
      monthlyPrice: 9.95,
      annualPrice: 4.91,
      annualTotal: 58.95,
      headline: 'One game, one subject',
      subjects: [
        { name: 'Math', active: true, game: 1 },
        { name: 'Science', active: false, game: 1 },
        { name: 'English', active: false, game: 2 },
      ],
      features: [
        { text: 'Up to 350 Magicoin/month', icon: '💰' },
        { text: 'Track your child\'s progress', icon: null },
      ],
      ribbon: 'Save 50%'
    },
    {
      id: 'plus',
      name: 'PLUS',
      icon: Zap,
      theme: 'blue',
      // Matching Science/Blue themes
      colorClass: 'bg-blue-100 text-blue-700',
      borderColor: 'border-blue-200',
      button: 'bg-white text-blue-700 border-b-4 border-blue-200 hover:bg-blue-50',
      priceColor: 'text-blue-600',
      monthlyPrice: 14.95,
      annualPrice: 7.41,
      annualTotal: 88.95,
      headline: 'One game, two subjects',
      subjects: [
        { name: 'Math & Science', active: true, game: 1 },
        { name: 'English', active: false, game: 2 },
      ],
      features: [
        { text: 'Up to 720 Magicoin/month', icon: '💎' },
        { text: 'Latest Mythical Epics', icon: '🐉' },
        { text: 'Track progress & set goals', icon: null },
        { text: 'Exclusive gear & pets', icon: null },
      ],
      ribbon: 'Save 50%'
    },
    {
      id: 'ultra',
      name: 'ULTRA',
      icon: Crown,
      theme: 'purple',
      // Matching Level/Purple themes
      colorClass: 'bg-purple-100 text-purple-700',
      borderColor: 'border-purple-300', // Stronger border for premium
      button: 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-b-4 border-purple-700 hover:scale-[1.02] shadow-lg',
      priceColor: 'text-purple-700',
      monthlyPrice: 19.95,
      annualPrice: 9.91,
      annualTotal: 118.95,
      headline: 'Two games, three subjects',
      bestValue: true,
      subjects: [
        { name: 'Math & Science', active: true, game: 1 },
        { name: 'English', active: true, game: 2 },
      ],
      features: [
        { text: 'Max Magicoin + Bonus', icon: '💎' },
        { text: 'Latest Mythical Epics', icon: '🐉' },
        { text: 'Track progress & set goals', icon: null },
        { text: 'Exclusive gear & pets', icon: null },
        { text: 'All Ultra benefits', icon: '✨' },
      ],
      ribbon: 'Save 50%'
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 font-sans bg-cream">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 max-w-7xl mx-auto px-4 pt-8">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors w-fit"
        >
            <X size={24} />
            Close
        </button>
      </div>

      <div className="text-center mb-12 space-y-4 px-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
          Choose Your Membership
        </h1>
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold border-2 border-orange-200">
            <span className="text-xl">🔥</span> Save 50% with annual plans!
        </div>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-12 px-4">
        <div className="bg-white p-1.5 rounded-full shadow-sm border-2 border-stone-100 inline-flex relative">
          <button
            onClick={() => setBilling('annual')}
            className={`px-6 md:px-8 py-3 rounded-full font-black text-lg transition-all ${
              billing === 'annual' 
                ? 'bg-treehouse-green text-white shadow-md transform scale-105' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Annually
          </button>
          <button
            onClick={() => setBilling('monthly')}
            className={`px-6 md:px-8 py-3 rounded-full font-black text-lg transition-all ${
              billing === 'monthly' 
                ? 'bg-treehouse-green text-white shadow-md transform scale-105' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto px-4">
        {plans.map((plan) => {
          const Icon = plan.icon;
          const currentPrice = billing === 'annual' ? plan.annualPrice : plan.monthlyPrice;
          const regularPrice = plan.monthlyPrice;

          return (
            <div 
              key={plan.id} 
              className={`relative bg-white rounded-[2.5rem] shadow-xl overflow-hidden border-b-8 transition-transform hover:-translate-y-2 duration-300 flex flex-col h-full ${plan.id === 'ultra' ? 'border-purple-300 ring-4 ring-purple-100 scale-105 z-10' : 'border-stone-100'}`}
            >
              {/* Best Value Badge */}
              {plan.bestValue && (
                <div className="absolute top-0 right-0 p-4 z-20">
                   <div className="bg-amber-400 text-white font-black text-xs px-3 py-1 rounded-full shadow-md border-2 border-white rotate-12 flex flex-col items-center justify-center w-16 h-16 animate-bounce-subtle">
                      <span>BEST</span>
                      <span>VALUE</span>
                   </div>
                </div>
              )}

              {/* Header */}
              <div className={`pt-10 pb-6 px-6 text-center relative ${plan.id === 'ultra' ? 'bg-purple-50/50' : ''}`}>
                 <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-black uppercase tracking-wider mb-4 border-2 border-transparent ${plan.colorClass}`}>
                     <Icon size={18} fill="currentColor" /> {plan.name}
                 </div>

                 {billing === 'annual' && (
                     <div className="text-slate-400 line-through text-sm font-bold">${regularPrice}</div>
                 )}
                 
                 <div className="flex items-center justify-center gap-1 mt-1">
                     <span className="text-2xl font-bold text-slate-400">$</span>
                     <span className={`text-6xl font-black ${plan.priceColor}`}>
                         {currentPrice}
                     </span>
                     <span className="text-slate-400 font-bold self-end mb-2">/mo*</span>
                 </div>

                 <h3 className="mt-4 font-bold text-slate-600">
                     {plan.headline}
                 </h3>
              </div>

              {/* Game Access Visuals */}
              <div className="px-6 py-2">
                  <div className="flex gap-2">
                      {plan.subjects.map((sub, idx) => (
                          <div key={idx} className={`flex-1 rounded-2xl overflow-hidden relative h-20 border-2 ${sub.active ? 'border-stone-100 bg-stone-50' : 'border-stone-50 bg-stone-50/50 opacity-40'}`}>
                              {sub.active ? (
                                  <div className="w-full h-full flex flex-col items-center justify-center">
                                      <span className="text-2xl drop-shadow-sm">{sub.game === 1 ? '🧙‍♂️' : '🏗️'}</span>
                                      <span className="text-[10px] font-bold text-slate-500 uppercase mt-1">{sub.name}</span>
                                  </div>
                              ) : (
                                  <div className="w-full h-full flex items-center justify-center bg-stone-100/50">
                                      <div className="w-8 h-2 rounded-full bg-stone-200"></div>
                                  </div>
                              )}
                          </div>
                      ))}
                  </div>
              </div>

              {/* Features List */}
              <div className="flex-1 px-8 py-6 space-y-4">
                  {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm font-bold text-slate-600">
                          {feature.icon ? (
                              <span className="shrink-0 text-lg">{feature.icon}</span>
                          ) : (
                              <div className="shrink-0 mt-0.5 bg-green-100 text-green-600 rounded-full p-0.5 border border-green-200">
                                  <Check size={12} strokeWidth={4} />
                              </div>
                          )}
                          <span className="leading-snug">{feature.text}</span>
                      </div>
                  ))}
              </div>

              {/* Footer Action */}
              <div className="p-6 mt-auto">
                  <button className={`w-full py-4 rounded-2xl font-black text-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 ${plan.button}`}>
                      {plan.id === 'ultra' && <Sparkles size={20} />}
                      Choose {plan.name}
                  </button>
                  {billing === 'annual' && (
                      <p className="text-center text-xs text-slate-400 font-bold mt-3">
                          *${plan.annualTotal} billed annually
                      </p>
                  )}
              </div>

            </div>
          );
        })}
      </div>

      <p className="text-center text-slate-400 font-bold mt-12 text-sm">
          Plan auto-renews. Cancel anytime.
      </p>

    </div>
  );
};

export default MembershipPage;
