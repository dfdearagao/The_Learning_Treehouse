import React, { useState } from 'react';
import { User as UserType } from '../types/types';
import { Plus, GraduationCap, Users, Heart, Clock, Target, Palette, BookOpen, Check } from 'lucide-react';
import { playSound } from '../utils/sound';
import { GRADES, CORE_SUBJECTS, AVATAR_SEEDS } from '../constants';

interface Props {
  profiles: UserType[];
  onSelectProfile: (name: string) => void;
  onAddProfiles: (profiles: {
    name: string, 
    grade: string, 
    avatar: string,
    settings: {
      homeworkPace: 'None' | 'Light' | 'Balanced' | 'Intensive';
      dailyTimeGoal: number;
      learningFocus: string[];
      themePreference: 'Standard' | 'Space' | 'Nature';
    }
  }[]) => void;
}

const getAvatarUrl = (seed: string) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&mouth=smile&eyes=happy&clothingGraphicProbability=0`;

const ProfileSelection: React.FC<Props> = ({ profiles, onSelectProfile, onAddProfiles }) => {
  const [isAdding, setIsAdding] = useState(profiles.length === 0);
  const [draftProfiles, setDraftProfiles] = useState([{ 
    name: '', 
    grade: '2nd Grade', 
    avatar: getAvatarUrl(AVATAR_SEEDS[0]),
    settings: {
      homeworkPace: 'Balanced' as 'None' | 'Light' | 'Balanced' | 'Intensive',
      dailyTimeGoal: 30,
      learningFocus: ['Math', 'Reading'] as string[],
      themePreference: 'Standard' as 'Standard' | 'Space' | 'Nature'
    }
  }]);

  const handleNumChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = parseInt(e.target.value);
    const newDrafts = [...draftProfiles];
    if (num > newDrafts.length) {
      for (let i = newDrafts.length; i < num; i++) {
        newDrafts.push({ 
          name: '', 
          grade: '2nd Grade', 
          avatar: getAvatarUrl(AVATAR_SEEDS[i % AVATAR_SEEDS.length]),
          settings: {
            homeworkPace: 'Balanced',
            dailyTimeGoal: 30,
            learningFocus: ['Math', 'Reading'],
            themePreference: 'Standard'
          }
        });
      }
    } else {
      newDrafts.length = num;
    }
    setDraftProfiles(newDrafts);
  };

  const updateDraft = (index: number, field: string, value: any) => {
    const newDrafts = [...draftProfiles];
    if (field.startsWith('settings.')) {
      const settingKey = field.split('.')[1];
      (newDrafts[index].settings as any)[settingKey] = value;
    } else {
      (newDrafts[index] as any)[field] = value;
    }
    setDraftProfiles(newDrafts);
  };

  const toggleFocus = (idx: number, subject: string) => {
    const current = draftProfiles[idx].settings.learningFocus;
    const next = current.includes(subject) 
      ? current.filter(s => s !== subject)
      : [...current, subject];
    updateDraft(idx, 'settings.learningFocus', next);
  };

  const allValid = draftProfiles.every(p => p.name.trim().length > 0);

  if (isAdding) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 flex flex-col items-center justify-center min-h-[600px] py-12">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl w-full max-w-2xl border-b-8 border-stone-200">
          <h2 className="text-3xl font-black text-slate-800 mb-6 text-center">Create Profiles</h2>
          
          <div className="mb-6 flex items-center justify-between bg-stone-50 p-4 rounded-2xl border-2 border-stone-100">
            <label className="font-bold text-slate-600">How many profiles?</label>
            <select 
              value={draftProfiles.length} 
              onChange={handleNumChange}
              className="p-2 bg-white rounded-xl border-2 border-stone-200 font-bold text-slate-700 outline-none focus:border-green-400"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <div className="space-y-6 max-h-[50vh] overflow-y-auto pr-2">
            {draftProfiles.map((draft, idx) => (
              <div key={idx} className="bg-stone-50 p-5 rounded-2xl border-2 border-stone-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-black text-lg shadow-sm">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-700 text-lg">Profile {idx + 1}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2 space-y-3 bg-white p-4 rounded-xl border-2 border-stone-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Choose Avatar</p>
                      <div className="flex items-center gap-4">
                        <img src={draft.avatar} alt="Selected" className="w-12 h-12 rounded-full border-2 border-green-400 bg-stone-50 shadow-sm" />
                      </div>
                    </div>
                    <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 max-h-40 overflow-y-auto p-2 bg-stone-50 rounded-lg border border-stone-100">
                      {AVATAR_SEEDS.map((seed) => {
                        const url = getAvatarUrl(seed);
                        return (
                          <button
                            key={seed}
                            onClick={() => {
                              playSound('pop');
                              updateDraft(idx, 'avatar', url);
                            }}
                            className={`relative rounded-full overflow-hidden border-2 transition-all hover:scale-110 ${
                              draft.avatar === url ? 'border-green-500 bg-white shadow-md' : 'border-transparent hover:border-stone-300'
                            }`}
                          >
                            <img src={url} alt={seed} className="w-full h-full" />
                            {draft.avatar === url && (
                              <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                                <Check size={12} className="text-green-600" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase ml-2">Name</label>
                    <input 
                      type="text" 
                      value={draft.name} 
                      onChange={e => updateDraft(idx, 'name', e.target.value)} 
                      className="w-full p-3 bg-white rounded-xl border-2 border-stone-200 outline-none font-bold text-slate-700 focus:border-green-400 mt-1" 
                      placeholder="Profile Name" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase ml-2">Grade</label>
                    <select 
                      value={draft.grade} 
                      onChange={e => updateDraft(idx, 'grade', e.target.value)} 
                      className="w-full p-3 bg-white rounded-xl border-2 border-stone-200 outline-none font-bold text-slate-700 focus:border-green-400 mt-1"
                    >
                      {GRADES.map(g => <option key={g.id} value={g.id}>{g.id}</option>)}
                    </select>
                  </div>

                  {/* Settings Section */}
                  <div className="md:col-span-2 space-y-4 pt-4 border-t-2 border-stone-100 mt-2">
                    <div className="bg-white p-3 rounded-xl border-2 border-stone-100">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen size={18} className="text-blue-500" />
                        <span className="font-bold text-slate-700">Auto-Assign Homework</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {(['None', 'Light', 'Balanced', 'Intensive'] as const).map(pace => (
                          <button
                            key={pace}
                            onClick={() => {
                              playSound('pop');
                              updateDraft(idx, 'settings.homeworkPace', pace);
                            }}
                            className={`py-2 rounded-lg text-xs font-black transition-all border-2 ${
                              draft.settings.homeworkPace === pace
                                ? 'bg-blue-500 text-white border-blue-500 shadow-md'
                                : 'bg-stone-50 text-slate-500 border-stone-100 hover:border-stone-200'
                            }`}
                          >
                            {pace === 'None' ? 'Off' : pace + ' Pace'}
                          </button>
                        ))}
                      </div>
                      {draft.settings.homeworkPace !== 'None' && (
                        <p className="text-[10px] font-bold text-blue-400 mt-2 ml-1">
                          {draft.settings.homeworkPace === 'Light' && "• 1-2 missions per week"}
                          {draft.settings.homeworkPace === 'Balanced' && "• 3-4 missions per week"}
                          {draft.settings.homeworkPace === 'Intensive' && "• Daily missions assigned"}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-xl border-2 border-stone-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock size={18} className="text-orange-500" />
                          <span className="text-sm font-bold text-slate-700">Daily Goal</span>
                        </div>
                        <select 
                          value={draft.settings.dailyTimeGoal}
                          onChange={e => updateDraft(idx, 'settings.dailyTimeGoal', parseInt(e.target.value))}
                          className="w-full p-2 bg-stone-50 rounded-lg border-2 border-stone-100 font-bold text-slate-600 outline-none"
                        >
                          <option value={15}>15 Minutes</option>
                          <option value={30}>30 Minutes</option>
                          <option value={45}>45 Minutes</option>
                          <option value={60}>60 Minutes</option>
                        </select>
                      </div>

                      <div className="bg-white p-3 rounded-xl border-2 border-stone-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Palette size={18} className="text-purple-500" />
                          <span className="text-sm font-bold text-slate-700">Theme</span>
                        </div>
                        <select 
                          value={draft.settings.themePreference}
                          onChange={e => updateDraft(idx, 'settings.themePreference', e.target.value)}
                          className="w-full p-2 bg-stone-50 rounded-lg border-2 border-stone-100 font-bold text-slate-600 outline-none"
                        >
                          <option value="Standard">Standard</option>
                          <option value="Space">Space Adventure</option>
                          <option value="Nature">Nature Explorer</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border-2 border-stone-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Target size={18} className="text-red-500" />
                        <span className="text-sm font-bold text-slate-700">Learning Focus</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {CORE_SUBJECTS.map(subject => (
                          <button
                            key={subject.id}
                            onClick={() => {
                              playSound('pop');
                              toggleFocus(idx, subject.title);
                            }}
                            className={`px-3 py-1.5 rounded-full text-xs font-black transition-all border-2 ${
                              draft.settings.learningFocus.includes(subject.title)
                                ? 'bg-green-500 text-white border-green-500'
                                : 'bg-stone-50 text-slate-500 border-stone-100 hover:border-stone-200'
                            }`}
                          >
                            {subject.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 space-y-3 mt-4 border-t-2 border-stone-100">
              <button 
                onClick={() => { 
                  playSound('success'); 
                  onAddProfiles(draftProfiles); 
                  setIsAdding(false); 
                  setDraftProfiles([{ 
                    name: '', 
                    grade: '2nd Grade', 
                    avatar: getAvatarUrl(AVATAR_SEEDS[0]),
                    settings: {
                      homeworkPace: 'Balanced',
                      dailyTimeGoal: 30,
                      learningFocus: ['Math', 'Reading'],
                      themePreference: 'Standard'
                    }
                  }]);
                }} 
                disabled={!allValid} 
                className="w-full py-4 rounded-2xl font-black text-xl bg-green-500 text-white shadow-lg shadow-green-200 hover:bg-green-600 disabled:opacity-50 transition-all active:scale-95"
              >
                Create {draftProfiles.length} {draftProfiles.length === 1 ? 'Profile' : 'Profiles'}
              </button>
              {profiles.length > 0 && (
                <button 
                  onClick={() => { 
                    playSound('click'); 
                    setIsAdding(false); 
                    setDraftProfiles([{ 
                      name: '', 
                      grade: '2nd Grade', 
                      avatar: getAvatarUrl(AVATAR_SEEDS[0]),
                      settings: {
                        homeworkPace: 'Balanced',
                        dailyTimeGoal: 30,
                        learningFocus: ['Math', 'Reading'],
                        themePreference: 'Standard'
                      }
                    }]);
                  }} 
                  className="w-full py-4 rounded-2xl font-bold text-slate-500 hover:bg-stone-50 transition-colors"
                >
                  Cancel
                </button>
              )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 flex flex-col items-center justify-center min-h-[600px] py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-slate-800 tracking-tight">Who is learning today?</h1>
        <p className="text-slate-500 font-bold text-lg mt-2">Choose your profile to continue.</p>
      </div>
      <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl w-full max-w-3xl border-b-8 border-stone-200">
        <div className="flex flex-wrap justify-center gap-6">
          {profiles.map((u, idx) => (
            <button
              key={idx}
              onClick={() => {
                playSound('success');
                onSelectProfile(u.name);
              }}
              className="flex flex-col items-center p-6 bg-stone-50 rounded-[2.5rem] hover:bg-green-50 hover:scale-105 hover:shadow-xl transition-all border-4 border-transparent hover:border-green-200 group w-56 h-72"
            >
              <div className="relative mb-4">
                <img src={u.avatar} alt={u.name} className="w-44 h-44 rounded-full shadow-sm group-hover:shadow-md transition-all border-4 border-white" />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-sm border border-stone-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Check className="text-green-500" size={16} />
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center w-full overflow-hidden flex-1">
                <span className="font-black text-xl text-slate-700 group-hover:text-green-700 truncate w-full text-center block leading-tight mb-1">
                  {u.name}
                </span>
                {u.grade && (
                  <span className="text-[10px] font-black bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                    {u.grade}
                  </span>
                )}
              </div>
            </button>
          ))}
          <button
            onClick={() => {
              playSound('click');
              setIsAdding(true);
              setDraftProfiles([{ 
                name: '', 
                grade: '2nd Grade', 
                avatar: getAvatarUrl(AVATAR_SEEDS[0]),
                settings: {
                  homeworkPace: 'Balanced',
                  dailyTimeGoal: 30,
                  learningFocus: ['Math', 'Reading'],
                  themePreference: 'Standard'
                }
              }]);
            }}
            className="flex flex-col items-center justify-center p-6 bg-stone-50 rounded-3xl hover:bg-stone-100 hover:scale-105 hover:shadow-lg transition-all border-4 border-dashed border-stone-200 hover:border-stone-300 group w-56 h-72"
          >
            <div className="w-44 h-44 rounded-full mb-4 bg-stone-200 flex items-center justify-center group-hover:bg-stone-300 transition-colors">
              <Plus size={48} className="text-slate-400 group-hover:text-slate-500" />
            </div>
            <span className="font-black text-2xl text-slate-500 group-hover:text-slate-600">Add New</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSelection;
