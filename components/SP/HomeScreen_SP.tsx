/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Play, Trophy, Star, Sparkles, ScrollText, Keyboard, Calculator, Type } from 'lucide-react';
import { HighScore } from '../../types/types_SP';

interface HomeScreenProps {
  onStartGame: () => void;
  highScores: HighScore[];
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onStartGame, highScores }) => {
  const [activeTab, setActiveTab] = useState<'scores' | 'rules'>('scores');

  return (
    <div className="w-full h-full bg-[#121212] flex flex-col items-center justify-center p-6 relative overflow-hidden font-roboto text-[#e3e3e3]">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-md w-full flex flex-col items-center gap-8">
        {/* Title Section */}
        <div className="text-center space-y-2">
           <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-4">
             <Sparkles className="w-8 h-8 text-white" />
           </div>
           <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 pb-2">
             Stellar Pop
           </h1>
           <p className="text-[#c4c7c5] text-lg">Strategic Educational Arcade</p>
        </div>

        {/* Action */}
        <button
          onClick={onStartGame}
          className="group relative px-8 py-4 bg-[#e3e3e3] text-[#121212] rounded-full font-bold text-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 transition-all active:scale-95 flex items-center gap-3"
        >
          <Play className="w-6 h-6 fill-current" />
          Start Game
          <div className="absolute inset-0 rounded-full ring-2 ring-white/50 animate-ping opacity-20"></div>
        </button>

        {/* Info Panel (Tabs) */}
        <div className="w-full bg-[#1e1e1e] border border-[#444746] rounded-3xl p-6 shadow-2xl min-h-[400px] flex flex-col">
          {/* Tab Navigation */}
          <div className="flex items-center gap-6 mb-6 border-b border-[#444746] px-2">
            <button
                onClick={() => setActiveTab('scores')}
                className={`flex items-center gap-2 pb-3 px-2 transition-all relative ${
                    activeTab === 'scores' ? 'text-[#42a5f5]' : 'text-[#8e918f] hover:text-[#c4c7c5]'
                }`}
            >
                <Trophy className="w-5 h-5" />
                <span className="font-bold">High Scores</span>
                {activeTab === 'scores' && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#42a5f5] rounded-t-full" />
                )}
            </button>
            <button
                onClick={() => setActiveTab('rules')}
                className={`flex items-center gap-2 pb-3 px-2 transition-all relative ${
                    activeTab === 'rules' ? 'text-[#42a5f5]' : 'text-[#8e918f] hover:text-[#c4c7c5]'
                }`}
            >
                <ScrollText className="w-5 h-5" />
                <span className="font-bold">How to Play</span>
                {activeTab === 'rules' && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#42a5f5] rounded-t-full" />
                )}
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {activeTab === 'scores' ? (
              <div className="space-y-3">
                {highScores.length === 0 ? (
                  <div className="text-center py-12 text-[#8e918f] italic flex flex-col items-center gap-2">
                    <Trophy className="w-12 h-12 opacity-20" />
                    No scores yet. Be the first!
                  </div>
                ) : (
                  highScores.map((score, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#2d2d2d]/50 hover:bg-[#2d2d2d] transition-colors">
                      <div className="flex items-center gap-3">
                        <span className={`
                          w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm
                          ${idx === 0 ? 'bg-yellow-400/20 text-yellow-400 ring-1 ring-yellow-400/50' : 
                            idx === 1 ? 'bg-gray-300/20 text-gray-300 ring-1 ring-gray-300/50' :
                            idx === 2 ? 'bg-orange-400/20 text-orange-400 ring-1 ring-orange-400/50' :
                            'bg-[#444746] text-[#c4c7c5]'}
                        `}>
                          {idx + 1}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-white font-medium text-lg">{score.score.toLocaleString()}</span>
                          <span className="text-xs text-[#8e918f]">{new Date(score.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      {idx < 3 && <Star className="w-4 h-4 text-white/20" />}
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="space-y-4 text-[#c4c7c5] animate-in fade-in slide-in-from-right-4 duration-300">
                {/* Controls */}
                <div className="bg-[#2d2d2d]/50 p-4 rounded-xl border border-[#444746]/50">
                    <h3 className="text-white font-bold flex items-center gap-2 mb-2">
                        <Keyboard className="w-4 h-4 text-[#42a5f5]" /> Controls
                    </h3>
                    <ul className="text-sm space-y-2 opacity-90">
                        <li className="flex justify-between items-center">
                            <span>Aim Slingshot</span>
                            <span className="bg-white/10 px-2 py-0.5 rounded text-white font-mono text-xs">Arrow Keys</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Charge & Shoot</span>
                            <span className="bg-white/10 px-2 py-0.5 rounded text-white font-mono text-xs">Hold SPACE</span>
                        </li>
                    </ul>
                </div>

                {/* Objective */}
                <div className="bg-[#2d2d2d]/50 p-4 rounded-xl border border-[#444746]/50">
                    <h3 className="text-white font-bold flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-yellow-400" /> Objective
                    </h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                        Match <strong>3 or more</strong> bubbles of the same color to pop them. Clear the board before the bubbles reach the bottom line!
                    </p>
                </div>

                 {/* Bonuses */}
                 <div className="bg-[#2d2d2d]/50 p-4 rounded-xl border border-[#444746]/50">
                    <h3 className="text-white font-bold flex items-center gap-2 mb-3">
                        <Star className="w-4 h-4 text-purple-400" /> Educational Bonuses
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 bg-[#1e1e1e] p-2 rounded-lg">
                            <div className="bg-green-400/10 p-1.5 rounded-md">
                                <Calculator className="w-4 h-4 text-green-400" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">Math Bonus</p>
                                <p className="text-xs opacity-80">Match Numbers! Score = Sum × 20</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 bg-[#1e1e1e] p-2 rounded-lg">
                             <div className="bg-orange-400/10 p-1.5 rounded-md">
                                <Type className="w-4 h-4 text-orange-400" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">Literacy Bonus</p>
                                <p className="text-xs opacity-80">Match Letters! Score = Count × 50</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;