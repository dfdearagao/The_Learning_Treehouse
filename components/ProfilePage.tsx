import React, { useState } from 'react';
import { User, StoreItem } from '../types/types';
import { ArrowLeft, Save, User as UserIcon, Palette, Package, Trophy, BarChart2, Star } from 'lucide-react';
import { STORE_ITEMS, AVATAR_SEEDS } from '../constants';

interface ProfilePageProps {
  user: User;
  onBack: () => void;
  onUpdateProfile: (updatedUser: Partial<User>) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onBack, onUpdateProfile }) => {
  const [name, setName] = useState(user.name);
  const [grade, setGrade] = useState(user.grade || 'Kindergarten');
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatar);
  const [activeTab, setActiveTab] = useState<'info' | 'avatar' | 'inventory' | 'stats' | 'achievements'>('info');

  const handleSave = () => {
    onUpdateProfile({ name, grade, avatar: selectedAvatar });
    alert("Profile Saved!");
  };

  const inventoryItems = STORE_ITEMS.filter(item => user.inventory?.includes(item.id));
  const equippedItemIds = user.equippedItems ? Object.values(user.equippedItems) : [];
  const equippedItems = STORE_ITEMS.filter(item => equippedItemIds.includes(item.id));

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
       <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold mb-8 transition-colors w-fit"
        >
            <ArrowLeft size={20} />
            Back to Dashboard
        </button>

        <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar / Tabs */}
            <div className="w-full md:w-64 flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 custom-scrollbar">
                <button 
                    onClick={() => setActiveTab('info')}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all whitespace-nowrap ${activeTab === 'info' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <UserIcon size={20} /> My Info
                </button>
                <button 
                    onClick={() => setActiveTab('avatar')}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all whitespace-nowrap ${activeTab === 'avatar' ? 'bg-white shadow-md text-purple-600' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <Palette size={20} /> Avatar Studio
                </button>
                <button 
                    onClick={() => setActiveTab('inventory')}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all whitespace-nowrap ${activeTab === 'inventory' ? 'bg-white shadow-md text-orange-600' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <Package size={20} /> My Stuff
                </button>
                <button 
                    onClick={() => setActiveTab('stats')}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all whitespace-nowrap ${activeTab === 'stats' ? 'bg-white shadow-md text-green-600' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <BarChart2 size={20} /> Learning Stats
                </button>
                <button 
                    onClick={() => setActiveTab('achievements')}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all whitespace-nowrap ${activeTab === 'achievements' ? 'bg-white shadow-md text-yellow-600' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <Trophy size={20} /> Achievements
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border-b-8 border-stone-100 min-h-[500px]">
                    
                    {/* Info Tab */}
                    {activeTab === 'info' && (
                        <div className="space-y-8 max-w-lg">
                            <h2 className="text-3xl font-black text-slate-800 mb-6">About Me</h2>
                            
                            <div>
                                <label className="block text-slate-500 font-bold mb-2 uppercase text-xs tracking-wider">My Name</label>
                                <input 
                                    type="text" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-blue-400 outline-none font-bold text-lg text-slate-700 bg-stone-50 focus:bg-white transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-500 font-bold mb-2 uppercase text-xs tracking-wider">My Grade</label>
                                <select 
                                    value={grade}
                                    onChange={(e) => setGrade(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-blue-400 outline-none font-bold text-lg text-slate-700 bg-stone-50 focus:bg-white transition-colors"
                                >
                                    {['Preschool', 'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'].map(g => (
                                        <option key={g} value={g}>{g}</option>
                                    ))}
                                </select>
                            </div>

                            <button 
                                onClick={handleSave}
                                className="flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-green-600 active:translate-y-1 active:shadow-none transition-all"
                            >
                                <Save size={20} /> Save Changes
                            </button>
                        </div>
                    )}

                    {/* Avatar Tab */}
                    {activeTab === 'avatar' && (
                         <div className="space-y-8">
                            <h2 className="text-3xl font-black text-slate-800 mb-6">Avatar Studio</h2>
                            
                            <div className="flex flex-col items-center mb-8 relative">
                                <div className="relative w-64 h-64 rounded-full border-8 border-purple-200 shadow-2xl mb-4 bg-gradient-to-b from-purple-50 to-pink-50 flex items-center justify-center overflow-hidden group">
                                    <img src={selectedAvatar} alt="Current Avatar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    
                                    {/* Render Equipped Accessories over Avatar */}
                                    {equippedItems.map(item => {
                                        let positionClass = '-translate-y-4'; // Default
                                        if (item.id.includes('hat') || item.id.includes('crown') || item.id.includes('pharaoh')) {
                                            positionClass = '-translate-y-12';
                                        } else if (item.id.includes('glasses')) {
                                            positionClass = '-translate-y-2';
                                        }
                                        return (
                                            <div key={item.id} className="absolute inset-0 flex items-center justify-center pointer-events-none drop-shadow-lg">
                                                <span className={`text-6xl transform ${positionClass}`}>{item.icon}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="font-bold text-slate-500 uppercase tracking-widest text-sm">Your Look</p>
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 bg-stone-50 p-6 rounded-3xl border-2 border-stone-100">
                                {AVATAR_SEEDS.map((seed) => {
                                    const url = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&mouth=smile&eyes=happy&clothingGraphicProbability=0`;
                                    return (
                                        <button 
                                            key={seed}
                                            onClick={() => setSelectedAvatar(url)}
                                            className={`p-2 rounded-2xl border-4 transition-all ${selectedAvatar === url ? 'border-purple-500 bg-white scale-110 shadow-xl z-10' : 'border-transparent hover:bg-white hover:shadow-md'}`}
                                        >
                                            <img src={url} alt={seed} className="w-full h-auto rounded-full" />
                                        </button>
                                    )
                                })}
                            </div>

                             <button 
                                onClick={handleSave}
                                className="mt-8 flex items-center gap-2 bg-purple-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-purple-600 active:translate-y-1 active:shadow-none transition-all w-full justify-center md:w-auto"
                            >
                                <Save size={20} /> Save Avatar
                            </button>
                         </div>
                    )}

                    {/* Stats Tab */}
                    {activeTab === 'stats' && (
                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-3">
                                <BarChart2 className="text-green-500" size={32} /> Learning Stats
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-6 rounded-3xl text-white shadow-lg relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h3 className="text-green-100 font-bold uppercase tracking-widest text-sm mb-2">Current Streak</h3>
                                        <div className="text-6xl font-black flex items-baseline gap-2">
                                            {user.streaks || 0} <span className="text-2xl font-bold text-green-200">Days</span>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 text-8xl opacity-20">🔥</div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-6 rounded-3xl text-white shadow-lg relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h3 className="text-blue-100 font-bold uppercase tracking-widest text-sm mb-2">Total XP</h3>
                                        <div className="text-6xl font-black flex items-baseline gap-2">
                                            {user.xp} <span className="text-2xl font-bold text-blue-200">XP</span>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 text-8xl opacity-20">⭐</div>
                                </div>
                                
                                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-3xl text-white shadow-lg relative overflow-hidden md:col-span-2">
                                    <div className="relative z-10 flex justify-between items-center">
                                        <div>
                                            <h3 className="text-yellow-100 font-bold uppercase tracking-widest text-sm mb-2">Level</h3>
                                            <div className="text-6xl font-black flex items-baseline gap-2">
                                                {user.level}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <h3 className="text-yellow-100 font-bold uppercase tracking-widest text-sm mb-2">Coins</h3>
                                            <div className="text-4xl font-black flex items-baseline gap-2 justify-end">
                                                {user.coins} 💰
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Achievements Tab */}
                    {activeTab === 'achievements' && (
                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-3">
                                <Trophy className="text-yellow-500" size={32} /> Achievement Showcase
                            </h2>

                            {(!user.badges || user.badges.length === 0) ? (
                                <div className="text-center py-12 bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200">
                                    <p className="text-slate-400 font-bold mb-4">No achievements yet!</p>
                                    <p className="text-slate-500">Keep learning to earn badges.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {user.badges.map((badge, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-3xl border-4 border-yellow-100 shadow-md flex flex-col items-center text-center relative overflow-hidden group hover:border-yellow-300 transition-colors">
                                            <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="text-6xl mb-4 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                                                🏅
                                            </div>
                                            <h4 className="font-black text-slate-800 text-lg relative z-10">{badge}</h4>
                                            <p className="text-sm font-bold text-slate-500 mt-2 relative z-10">Earned a badge!</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                    {activeTab === 'inventory' && (
                        <div>
                             <h2 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-3">
                                <span className="text-4xl">🎒</span> My Stuff
                             </h2>

                             {inventoryItems.length === 0 ? (
                                <div className="text-center py-12 bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200">
                                    <p className="text-slate-400 font-bold mb-4">Your backpack is empty!</p>
                                    <p className="text-slate-500">Go to the store to buy cool things.</p>
                                </div>
                             ) : (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {inventoryItems.map(item => (
                                        <div key={item.id} className="bg-stone-50 p-4 rounded-2xl border-2 border-stone-100 flex flex-col items-center text-center">
                                            <div className="text-4xl mb-2">{item.icon}</div>
                                            <h4 className="font-bold text-slate-700">{item.name}</h4>
                                            <span className="text-xs font-bold text-slate-400 uppercase">{item.category}</span>
                                        </div>
                                    ))}
                                </div>
                             )}
                        </div>
                    )}

                </div>
            </div>
        </div>
    </div>
  );
};

export default ProfilePage;