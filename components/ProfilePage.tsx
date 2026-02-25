import React, { useState } from 'react';
import { User, StoreItem } from '../types/types';
import { ArrowLeft, Save, User as UserIcon, Palette, Package } from 'lucide-react';
import { STORE_ITEMS } from '../constants';

interface ProfilePageProps {
  user: User;
  onBack: () => void;
  onUpdateProfile: (updatedUser: Partial<User>) => void;
}

const AVATAR_SEEDS = ['Alex', 'Micah', 'Avery', 'Willow', 'River', 'Rowan', 'Scout', 'Charlie', 'Jordan', 'Taylor', 'Casey', 'Jamie'];

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onBack, onUpdateProfile }) => {
  const [name, setName] = useState(user.name);
  const [grade, setGrade] = useState(user.grade || 'Kindergarten');
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatar);
  const [activeTab, setActiveTab] = useState<'info' | 'avatar' | 'inventory'>('info');

  const handleSave = () => {
    onUpdateProfile({ name, grade, avatar: selectedAvatar });
    alert("Profile Saved!");
  };

  const inventoryItems = STORE_ITEMS.filter(item => user.inventory?.includes(item.id));

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
            <div className="w-full md:w-64 flex flex-row md:flex-col gap-2">
                <button 
                    onClick={() => setActiveTab('info')}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'info' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <UserIcon size={20} /> My Info
                </button>
                <button 
                    onClick={() => setActiveTab('avatar')}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'avatar' ? 'bg-white shadow-md text-purple-600' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <Palette size={20} /> My Style
                </button>
                <button 
                    onClick={() => setActiveTab('inventory')}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'inventory' ? 'bg-white shadow-md text-orange-600' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <Package size={20} /> My Stuff
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
                            <h2 className="text-3xl font-black text-slate-800 mb-6">Choose Your Look</h2>
                            
                            <div className="flex flex-col items-center mb-8">
                                <img src={selectedAvatar} alt="Current Avatar" className="w-32 h-32 rounded-full border-4 border-purple-200 shadow-lg mb-4" />
                                <p className="font-bold text-slate-500">Preview</p>
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                                {AVATAR_SEEDS.map((seed) => {
                                    const url = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
                                    return (
                                        <button 
                                            key={seed}
                                            onClick={() => setSelectedAvatar(url)}
                                            className={`p-2 rounded-2xl border-4 transition-all ${selectedAvatar === url ? 'border-purple-500 bg-purple-50 scale-110 shadow-md' : 'border-transparent hover:bg-stone-50'}`}
                                        >
                                            <img src={url} alt={seed} className="w-full h-auto rounded-full" />
                                        </button>
                                    )
                                })}
                            </div>

                             <button 
                                onClick={handleSave}
                                className="mt-8 flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-green-600 active:translate-y-1 active:shadow-none transition-all"
                            >
                                <Save size={20} /> Save Avatar
                            </button>
                         </div>
                    )}

                    {/* Inventory Tab */}
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