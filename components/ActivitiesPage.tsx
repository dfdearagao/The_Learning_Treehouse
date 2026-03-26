
import React from 'react';
import { Gamepad2, Rocket, Sparkles, Brain, ArrowLeft, ArrowRight, Timer, Book, Beaker, Compass } from 'lucide-react';

interface ActivitiesPageProps {
  onBack: () => void;
  onArcadeClick: () => void;
  onSpaceJumpClick: () => void;
  onStellarPopClick: () => void;
  onBrainGymClick: () => void;
  onNeonNebulaClick: () => void;
  onWordSeekerClick: () => void;
  onEchoShiftClick: () => void;
}

const ActivitiesPage: React.FC<ActivitiesPageProps> = ({
  onBack,
  onArcadeClick,
  onSpaceJumpClick,
  onStellarPopClick,
  onBrainGymClick,
  onNeonNebulaClick,
  onWordSeekerClick,
  onEchoShiftClick
}) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-3 rounded-full bg-white shadow-md hover:bg-stone-50 transition-colors text-slate-600"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-3xl font-black text-slate-800">Activities</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Arcade Games */}
        <button 
          onClick={onArcadeClick}
          className="w-full min-h-[260px] p-8 rounded-[2.5rem] bg-white shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between items-start border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group hover:bg-purple-50"
        >
          <div className="p-5 rounded-2xl bg-purple-100 text-purple-600 group-hover:scale-110 transition-transform">
            <Gamepad2 size={48} />
          </div>
          <div className="text-left w-full">
            <span className="text-2xl font-black text-slate-700 block mb-2">Arcade Games</span>
            <p className="text-slate-500 text-sm mb-4 font-medium">Fun classic games to test your skills!</p>
            <div className="flex items-center gap-2 text-purple-500 font-bold text-sm bg-white/50 px-4 py-2 rounded-full w-fit">
              Play Now <ArrowRight size={16} />
            </div>
          </div>
        </button>

        {/* Card 2: Rocket Defense */}
        <button 
          onClick={onSpaceJumpClick}
          className="w-full min-h-[260px] p-8 rounded-[2.5rem] bg-white shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between items-start border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group hover:bg-green-50"
        >
          <div className="p-5 rounded-2xl bg-green-100 text-green-600 group-hover:scale-110 transition-transform">
            <Rocket size={48} />
          </div>
          <div className="text-left w-full">
            <span className="text-2xl font-black text-slate-700 block mb-2">Rocket Defense</span>
            <p className="text-slate-500 text-sm mb-4 font-medium">Defend the galaxy with math power!</p>
            <div className="flex items-center gap-2 text-green-500 font-bold text-sm bg-white/50 px-4 py-2 rounded-full w-fit">
              Launch <ArrowRight size={16} />
            </div>
          </div>
        </button>

        {/* Card 3: Stellar Pop */}
        <button 
          onClick={onStellarPopClick}
          className="w-full min-h-[260px] p-8 rounded-[2.5rem] bg-white shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between items-start border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group hover:bg-indigo-50"
        >
          <div className="p-5 rounded-2xl bg-indigo-100 text-indigo-600 group-hover:scale-110 transition-transform">
            <Sparkles size={48} />
          </div>
          <div className="text-left w-full">
            <span className="text-2xl font-black text-slate-700 block mb-2">Stellar Pop</span>
            <p className="text-slate-500 text-sm mb-4 font-medium">Pop bubbles and learn letters & numbers!</p>
            <div className="flex items-center gap-2 text-indigo-500 font-bold text-sm bg-white/50 px-4 py-2 rounded-full w-fit">
              Pop <ArrowRight size={16} />
            </div>
          </div>
        </button>

        {/* Card 4: Word Stack */}
        <button 
          onClick={onBrainGymClick}
          className="w-full min-h-[260px] p-8 rounded-[2.5rem] bg-white shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between items-start border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group hover:bg-blue-50"
        >
          <div className="p-5 rounded-2xl bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
            <Brain size={48} />
          </div>
          <div className="text-left w-full">
            <span className="text-2xl font-black text-slate-700 block mb-2">Word Stack</span>
            <p className="text-slate-500 text-sm mb-4 font-medium">Build words and stack your knowledge!</p>
            <div className="flex items-center gap-2 text-blue-500 font-bold text-sm bg-white/50 px-4 py-2 rounded-full w-fit">
              Train <ArrowRight size={16} />
            </div>
          </div>
        </button>

        {/* Card 5: Neon Nebula */}
        <button 
          onClick={onNeonNebulaClick}
          className="w-full min-h-[260px] p-8 rounded-[2.5rem] bg-white shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between items-start border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group hover:bg-red-50"
        >
          <div className="p-5 rounded-2xl bg-red-100 text-red-600 group-hover:scale-110 transition-transform">
            <Timer size={48} />
          </div>
          <div className="text-left w-full">
            <span className="text-2xl font-black text-slate-700 block mb-2">Neon Nebula</span>
            <p className="text-slate-500 text-sm mb-4 font-medium">Race through space and collect letters!</p>
            <div className="flex items-center gap-2 text-red-500 font-bold text-sm bg-white/50 px-4 py-2 rounded-full w-fit">
              Play Now <ArrowRight size={16} />
            </div>
          </div>
        </button>

        {/* Card 6: Word Seeker */}
        <button 
          onClick={onWordSeekerClick}
          className="w-full min-h-[260px] p-8 rounded-[2.5rem] bg-white shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between items-start border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group hover:bg-amber-50"
        >
          <div className="p-5 rounded-2xl bg-amber-100 text-amber-600 group-hover:scale-110 transition-transform">
            <Book size={48} />
          </div>
          <div className="text-left w-full">
            <span className="text-2xl font-black text-slate-700 block mb-2">Word Seeker</span>
            <p className="text-slate-500 text-sm mb-4 font-medium">Embark on epic word search adventures!</p>
            <div className="flex items-center gap-2 text-amber-500 font-bold text-sm bg-white/50 px-4 py-2 rounded-full w-fit">
              Play Now <ArrowRight size={16} />
            </div>
          </div>
        </button>

        {/* Card 7: Echo Shift */}
        <button 
          onClick={onEchoShiftClick}
          className="w-full min-h-[260px] p-8 rounded-[2.5rem] bg-white shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between items-start border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group hover:bg-teal-50"
        >
          <div className="p-5 rounded-2xl bg-teal-100 text-teal-600 group-hover:scale-110 transition-transform">
            <Timer size={48} />
          </div>
          <div className="text-left w-full">
            <span className="text-2xl font-black text-slate-700 block mb-2">Echo Shift</span>
            <p className="text-slate-500 text-sm mb-4 font-medium">Record actions and use echoes to solve puzzles!</p>
            <div className="flex items-center gap-2 text-teal-500 font-bold text-sm bg-white/50 px-4 py-2 rounded-full w-fit">
              Play Now <ArrowRight size={16} />
            </div>
          </div>
        </button>

        {/* Card 8: History Explorer (Coming Soon) */}
        <button 
          onClick={() => alert("History Explorer is coming soon!")}
          className="w-full min-h-[260px] p-8 rounded-[2.5rem] bg-white shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between items-start border-b-8 border-stone-100 active:border-stone-50 active:translate-y-2 group hover:bg-orange-50"
        >
          <div className="p-5 rounded-2xl bg-orange-100 text-orange-600 group-hover:scale-110 transition-transform">
            <Compass size={48} />
          </div>
          <div className="text-left w-full">
            <span className="text-2xl font-black text-slate-700 block mb-2">History Explorer</span>
            <p className="text-slate-500 text-sm mb-4 font-medium">Travel back in time and explore!</p>
            <div className="flex items-center gap-2 text-orange-500 font-bold text-sm bg-white/50 px-4 py-2 rounded-full w-fit">
              Coming Soon <ArrowRight size={16} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ActivitiesPage;
