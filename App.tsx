
import React, { useState, useEffect } from 'react';
import { MOCK_USER, CORE_SUBJECTS, EARLY_CHILDHOOD_CATEGORIES, GRADES } from './constants';
import { User, StoreItem, GameItem, PlacedItem, Worksheet } from './types/types';
import { getMathWorksheets } from './math/mathWorksheets';
import { getReadingWorksheets } from './reading/readingWorksheets';
import { getScienceWorksheets } from './science/scienceWorksheets';
import { getSSWorksheets } from './socialStudies/socialStudiesWorksheets';
import { LESSON_CATALOG } from './lessonCatalog';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import FeaturesPage from './components/FeaturesPage';
import HowItWorksPage from './components/HowItWorksPage';
import GradePage from './components/GradePage';
import GradeSubjectPage from './components/GradeSubjectPage';
import UnitPage from './components/UnitPage';
import ArcadePage from './components/ArcadePage';
import GamePlayer from './components/GamePlayer';
import ProfilePage from './components/ProfilePage';
import StorePage from './components/StorePage';
import ParentTeacherPage from './components/ParentTeacherPage';
import LessonSummariesDashboard from './components/LessonSummariesDashboard';
import GradeSummaryDetail from './components/GradeSummaryDetail';
import JoinPage from './components/JoinPage';
import TreehousePage from './components/TreehousePage';
import EarlyChildhoodPage from './components/EarlyChildhoodPage';
import EarlyChildhoodMenuPage from './components/EarlyChildhoodMenuPage';
import ActivitiesPage from './components/ActivitiesPage';
import SpaceJumpApp from './components/SpaceJumpApp';
import StellarPopApp from './components/StellarPopApp';
import WordStack from './components/WS/WordStack';
import MembershipPage from './components/MembershipPage';
import NeonNebula from './components/NN/NeonNebula';
import WordSeeker from './components/WS/WordSeeker/App_WordS';
import App_ES from './App_ES';
import LearningExpeditionGuidePage from './components/LearningExpeditionGuidePage';
import WorksheetPage from './components/WorksheetPage';
import AssignHomeworkPage from './components/AssignHomeworkPage';
import FullCalendarPage from './components/FullCalendarPage';
import ProfileSelection from './components/ProfileSelection';
import { Menu, X, LogIn, TreeDeciduous, Crown, User as UserIcon, ShoppingBag, Home, Gamepad2, Palette, Calendar as CalendarIcon, Users } from 'lucide-react';
import { playSound } from './utils/sound';

type Page = 'home' | 'features' | 'how-it-works' | 'grade' | 'grade-subject' | 'unit' | 'arcade' | 'profile' | 'store' | 'parent-teacher' | 'join' | 'treehouse' | 'early-childhood' | 'early-childhood-menu' | 'lesson-summaries' | 'grade-summary-detail' | 'space-jump' | 'stellar-pop' | 'membership' | 'word-stack' | 'activities' | 'neon-nebula' | 'word-seeker' | 'echo-shift' | 'worksheet' | 'learning-expedition-guide' | 'assign-homework' | 'full-calendar';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedWorksheet, setSelectedWorksheet] = useState<Worksheet | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const worksheetId = params.get('worksheetId');
    if (worksheetId) {
      const parts = worksheetId.split('-');
      if (parts.length >= 2) {
        // ID format: prefix-lessonId-index (e.g., math-101-1)
        const lessonId = parseInt(parts[1]);
        const lesson = LESSON_CATALOG.find(l => l.lessonId === lessonId);
        
        if (lesson) {
            let worksheets: Worksheet[] = [];
            if (worksheetId.startsWith('math-')) {
                worksheets = getMathWorksheets(lesson.grade, lesson.lessonId, lesson.lessonName);
            } else if (worksheetId.startsWith('reading-')) {
                worksheets = getReadingWorksheets(lesson.grade, lesson.lessonId, lesson.lessonName);
            } else if (worksheetId.startsWith('sci-')) {
                worksheets = getScienceWorksheets(lesson.grade, lesson.lessonId, lesson.lessonName);
            } else if (worksheetId.startsWith('ss-')) {
                worksheets = getSSWorksheets(lesson.grade, lesson.lessonId, lesson.lessonName);
            }

            const worksheet = worksheets.find(ws => ws.id === worksheetId);
            if (worksheet) {
                setSelectedWorksheet(worksheet);
                setCurrentPage('worksheet');
            }
        }
      }
    }
  }, []);
  
  // Navigation State
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);
  const [selectedEarlyChildhoodId, setSelectedEarlyChildhoodId] = useState<string | null>(null);
  const [activeGame, setActiveGame] = useState<GameItem | null>(null);
  
  // Lesson Summary State
  const [summaryGrade, setSummaryGrade] = useState<string | null>(null);

  // User State
  const [users, setUsers] = useState<User[]>([]);
  const [activeUserId, setActiveUserId] = useState<string>('');

  const user = users.find(u => u.name === activeUserId) || users[0] || MOCK_USER;

  const setUser = (updater: (prev: User) => User) => {
    setUsers(prevUsers => prevUsers.map(u => u.name === activeUserId ? updater(u) : u));
  };

  // Homework State
  const [assignments, setAssignments] = useState<any[]>([]);
  const [showWorkloadWarnings, setShowWorkloadWarnings] = useState(true);

  const handleUpdateAssignment = (id: string, updates: any) => {
    setAssignments(prev => prev.map(a => a.id === id ? { ...a, ...updates } : a));
  };

  const handleDeleteAssignment = (id: string) => {
    setAssignments(prev => prev.filter(a => a.id !== id));
  };

  const handleLogin = (email: string, profileData?: any) => {
    playSound('success');
    setIsLoggedIn(true);
    if (profileData) {
      const newUser: User = {
        ...MOCK_USER,
        name: profileData.username,
        grade: profileData.grade || '2nd Grade',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${profileData.username}&mouth=smile&eyes=happy&clothingGraphicProbability=0`,
        level: 1,
        xp: 0,
        coins: 0,
        streaks: 0,
        badges: [],
        unlockedRooms: [],
        inventory: [],
        treehouseState: {},
        progress: {},
        lessonProgress: {},
        equippedItems: {}
      };
      setUsers([newUser]);
      setActiveUserId(newUser.name);
    } else {
      setActiveUserId('');
    }
    setCurrentPage('home');
  };

  const handleAccountLogout = () => {
    playSound('pop');
    setIsLoggedIn(false);
    setActiveUserId('');
    setCurrentPage('home');
    setSelectedSubjectId(null);
    setSelectedGrade(null);
    setSelectedUnitId(null);
    setSelectedEarlyChildhoodId(null);
  };

  const handleSwitchProfile = () => {
    playSound('pop');
    setActiveUserId('');
    setCurrentPage('home');
    setIsMobileMenuOpen(false);
  };

  const handleSelectProfile = (name: string) => {
    setActiveUserId(name);
    setCurrentPage('home');
  };

  const handleAddProfiles = (newProfiles: {
    name: string, 
    grade: string, 
    avatar: string,
    settings: {
      homeworkPace: 'None' | 'Light' | 'Balanced' | 'Intensive';
      dailyTimeGoal: number;
      learningFocus: string[];
      themePreference: 'Standard' | 'Space' | 'Nature';
    }
  }[]) => {
    const newUsers = newProfiles.map(p => ({
      ...MOCK_USER,
      name: p.name,
      grade: p.grade,
      avatar: p.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${p.name}&mouth=smile&eyes=happy&clothingGraphicProbability=0`,
      level: 1,
      xp: 0,
      coins: 0,
      streaks: 0,
      badges: [],
      unlockedRooms: [],
      inventory: [],
      treehouseState: {},
      progress: {},
      lessonProgress: {},
      equippedItems: {},
      settings: p.settings
    }));
    setUsers(prev => [...prev, ...newUsers]);

    // Auto-assign homework if requested
    const newAssignments: any[] = [];
    newProfiles.forEach(p => {
      if (p.settings.homeworkPace !== 'None') {
        const gradeLessons = LESSON_CATALOG.filter(l => l.grade === p.grade);
        if (gradeLessons.length === 0) return;

        let missionsPerWeek = 2;
        if (p.settings.homeworkPace === 'Balanced') missionsPerWeek = 4;
        if (p.settings.homeworkPace === 'Intensive') missionsPerWeek = 7;

        const today = new Date();
        const totalMissions = missionsPerWeek * 4; // 4 weeks

        for (let i = 0; i < totalMissions; i++) {
          const lesson = gradeLessons[i % gradeLessons.length];
          const date = new Date(today);
          const weekOffset = Math.floor(i / missionsPerWeek) * 7;
          const dayOffset = Math.floor((i % missionsPerWeek) * (7 / missionsPerWeek));
          date.setDate(today.getDate() + weekOffset + dayOffset);

          newAssignments.push({
            id: Math.random().toString(36).substr(2, 9),
            userId: p.name,
            title: lesson.lessonName,
            type: 'lesson',
            date: date.toISOString().split('T')[0],
            subject: lesson.subject,
            status: 'pending'
          });
        }
      }
    });

    if (newAssignments.length > 0) {
      setAssignments(prev => [...prev, ...newAssignments]);
    }
  };

  const navigateTo = (page: Page) => {
    playSound('click');
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToGrade = (gradeId: string) => {
    playSound('pop');
    setSelectedGrade(gradeId);
    setSelectedSubjectId(null); // Reset subject when entering a grade
    setCurrentPage('grade');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleSubjectSelect = (subjectId: string) => {
      playSound('click');
      setSelectedSubjectId(subjectId);
      setCurrentPage('grade-subject');
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUnitSelect = (unitId: number) => {
      playSound('click');
      setSelectedUnitId(unitId);
      setCurrentPage('unit');
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEarlyChildhoodClick = (categoryId: string) => {
      playSound('pop');
      setSelectedEarlyChildhoodId(categoryId);
      setCurrentPage('early-childhood');
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePublicGradeClick = (id: string) => {
    playSound('click');
    setSelectedGrade(id);
    setSelectedSubjectId(null);
    setCurrentPage('grade');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSelectedSubject = () => {
    return CORE_SUBJECTS.find(s => s.id === selectedSubjectId);
  };

  const getSelectedEarlyChildhoodCategory = () => {
      return EARLY_CHILDHOOD_CATEGORIES.find(c => c.id === selectedEarlyChildhoodId);
  };

  // --- Progress Handlers ---

  const handleSectionComplete = (subjectId: string, grade: string, lessonId: number, sectionId: string) => {
      setUser(prev => {
          const key = `${subjectId}-${grade}-${lessonId}`;
          const currentSections = prev.lessonProgress?.[key] || [];
          if (!currentSections.includes(sectionId)) {
              playSound('success');
              return {
                  ...prev,
                  lessonProgress: {
                      ...prev.lessonProgress,
                      [key]: [...currentSections, sectionId]
                  },
                  xp: prev.xp + 10 // Small reward for section
              };
          }
          return prev;
      });
  };

  const handleLessonComplete = (subjectId: string, grade: string, lessonId: number) => {
    setUser(prev => {
      const key = `${subjectId}-${grade}`;
      const currentProgress = prev.progress?.[key] || [];
      if (!currentProgress.includes(lessonId)) {
        playSound('complete');
        return {
          ...prev,
          progress: {
            ...prev.progress,
            [key]: [...currentProgress, lessonId]
          },
          xp: prev.xp + 50, // Bonus XP
          coins: prev.coins + 20 // Bonus Coins
        };
      }
      return prev;
    });
  };

  // --- Store, Profile, Game Handlers ---

  const handleBuyItem = (item: StoreItem) => {
    if (user.coins >= item.price) {
        if (user.inventory?.includes(item.id)) return; // Already owned
        
        playSound('success');
        setUser(prev => ({
            ...prev,
            coins: prev.coins - item.price,
            inventory: [...(prev.inventory || []), item.id]
        }));
        alert(`You bought ${item.name}!`);
    } else {
        playSound('error');
        alert("Not enough coins!");
    }
  };

  const handleUpdateProfile = (updatedUser: Partial<User>) => {
    playSound('success');
    setUser(prev => ({ ...prev, ...updatedUser }));
  };

  // Updated to support positioned items
  const handleUpdateTreehouseRoom = (roomId: string, items: PlacedItem[]) => {
      playSound('pop');
      setUser(prev => ({
          ...prev,
          treehouseState: {
              ...(prev.treehouseState || {}),
              [roomId]: items
          }
      }));
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-slate-800 selection:bg-yellow-200">
      {/* Navigation */}
      {(currentPage !== 'membership' && currentPage !== 'stellar-pop' && currentPage !== 'neon-nebula' && currentPage !== 'word-seeker' && currentPage !== 'echo-shift') && (
        <nav className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b-2 border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo area */}
              <div 
                className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
                onClick={() => {
                  if (isLoggedIn) {
                    setCurrentPage('home');
                  } else {
                    navigateTo('home');
                  }
                }}
              >
                <div className="bg-treehouse-green p-2 rounded-xl text-white">
                  <TreeDeciduous size={32} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-extrabold text-sm text-orange-500 tracking-wide uppercase">The Learning</span>
                  <span className="font-black text-2xl text-green-600 tracking-tight -mt-1">Treehouse</span>
                </div>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-8">
                {!isLoggedIn ? (
                  <>
                    <button 
                      onClick={() => navigateTo('home')} 
                      className={`font-bold transition-colors ${currentPage === 'home' ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}
                    >
                      Home
                    </button>
                    <button 
                      onClick={() => navigateTo('features')} 
                      className={`font-bold transition-colors ${currentPage === 'features' ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}
                    >
                      Features
                    </button>
                    <button 
                      onClick={() => navigateTo('how-it-works')} 
                      className={`font-bold transition-colors ${currentPage === 'how-it-works' ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}
                    >
                      How it Works
                    </button>
                    <button
                      onClick={() => navigateTo('membership')}
                      className="flex items-center gap-1 font-bold text-amber-500 hover:text-amber-600 transition-colors"
                    >
                      <Crown size={18} fill="currentColor" /> Membership
                    </button>
                    <button 
                      onClick={() => navigateTo('join')}
                      className="flex items-center gap-2 bg-dark-blue text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                      <LogIn size={18} />
                      Login / Sign Up
                    </button>
                  </>
                ) : activeUserId ? (
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => navigateTo('membership')}
                      className="hidden lg:flex items-center gap-1 font-bold text-amber-500 hover:text-amber-600 transition-colors mr-4"
                    >
                      <Crown size={18} fill="currentColor" /> Premium
                    </button>
                    <span className="font-bold text-slate-600">Welcome, {user.name}</span>
                    <button 
                      onClick={handleSwitchProfile}
                      className="text-slate-500 hover:text-blue-500 font-bold transition-colors"
                    >
                      Switch Profile
                    </button>
                    <button 
                      onClick={handleAccountLogout}
                      className="text-slate-500 hover:text-red-500 font-bold transition-colors"
                    >
                      Log Out
                    </button>
                    <img src={user.avatar} alt="User" className="w-14 h-14 rounded-full border-2 border-white shadow-sm" />
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={handleAccountLogout}
                      className="text-slate-500 hover:text-red-500 font-bold transition-colors"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-green-600 p-2">
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Nav Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-b border-stone-200 p-4 space-y-4 shadow-lg animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
              {!isLoggedIn ? (
                <>
                  <button className="block w-full text-left text-slate-600 font-bold p-2 hover:bg-stone-50 rounded-lg" onClick={() => navigateTo('home')}>Home</button>
                  <button className="block w-full text-left text-slate-600 font-bold p-2 hover:bg-stone-50 rounded-lg" onClick={() => navigateTo('features')}>Features</button>
                  <button className="block w-full text-left text-slate-600 font-bold p-2 hover:bg-stone-50 rounded-lg" onClick={() => navigateTo('how-it-works')}>How it Works</button>
                  <button className="block w-full text-left text-amber-500 font-bold p-2 hover:bg-stone-50 rounded-lg flex items-center gap-2" onClick={() => navigateTo('membership')}>
                    <Crown size={18} /> Membership
                  </button>
                  <button 
                    onClick={() => navigateTo('join')}
                    className="w-full flex justify-center items-center gap-2 bg-dark-blue text-white px-6 py-3 rounded-xl font-bold mt-4"
                  >
                    <LogIn size={18} />
                    Login / Sign Up
                  </button>
                </>
              ) : activeUserId ? (
                <>
                  <button className="block w-full text-left text-slate-600 font-bold p-2 hover:bg-stone-50 rounded-lg flex items-center gap-2" onClick={() => navigateTo('home')}>
                    <Home size={18} /> Home
                  </button>
                  <button className="block w-full text-left text-slate-600 font-bold p-2 hover:bg-stone-50 rounded-lg flex items-center gap-2" onClick={() => navigateTo('profile')}>
                    <UserIcon size={18} /> Profile
                  </button>
                  <button className="block w-full text-left text-slate-600 font-bold p-2 hover:bg-stone-50 rounded-lg flex items-center gap-2" onClick={() => navigateTo('store')}>
                    <ShoppingBag size={18} /> Store
                  </button>
                  <button className="block w-full text-left text-slate-600 font-bold p-2 hover:bg-stone-50 rounded-lg flex items-center gap-2" onClick={() => navigateTo('treehouse')}>
                    <TreeDeciduous size={18} /> Treehouse
                  </button>
                  <button className="block w-full text-left text-slate-600 font-bold p-2 hover:bg-stone-50 rounded-lg flex items-center gap-2" onClick={() => navigateTo('arcade')}>
                    <Gamepad2 size={18} /> Arcade
                  </button>
                  <button className="block w-full text-left text-slate-600 font-bold p-2 hover:bg-stone-50 rounded-lg flex items-center gap-2" onClick={() => navigateTo('early-childhood-menu')}>
                    <Palette size={18} /> Early Childhood
                  </button>
                  <button className="block w-full text-left text-slate-600 font-bold p-2 hover:bg-stone-50 rounded-lg flex items-center gap-2" onClick={() => navigateTo('full-calendar')}>
                    <CalendarIcon size={18} /> Calendar
                  </button>
                  <button className="block w-full text-left text-slate-600 font-bold p-2 hover:bg-stone-50 rounded-lg flex items-center gap-2" onClick={() => navigateTo('parent-teacher')}>
                    <Users size={18} /> Parent & Teacher
                  </button>
                  <button className="block w-full text-left text-slate-600 font-bold p-2 hover:bg-stone-50 rounded-lg flex items-center gap-2" onClick={handleSwitchProfile}>
                    <UserIcon size={18} /> Switch Profile
                  </button>
                  <button className="block w-full text-left text-amber-500 font-bold p-2 hover:bg-stone-50 rounded-lg flex items-center gap-2" onClick={() => navigateTo('membership')}>
                    <Crown size={18} /> Premium
                  </button>
                  <button 
                      onClick={handleAccountLogout}
                      className="w-full text-center bg-red-100 text-red-600 px-6 py-3 rounded-xl font-bold mt-4"
                    >
                      Log Out
                  </button>
                </>
              ) : (
                <>
                  <button 
                      onClick={handleAccountLogout}
                      className="w-full text-center bg-red-100 text-red-600 px-6 py-3 rounded-xl font-bold mt-4"
                    >
                      Log Out
                  </button>
                </>
              )}
            
            </div>
          )}
        </nav>
      )}

      {/* Main Content Area */}
      <main className={`${(currentPage === 'membership' || currentPage === 'stellar-pop' || currentPage === 'neon-nebula' || currentPage === 'word-seeker' || currentPage === 'echo-shift') ? 'h-screen overflow-hidden' : `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${currentPage === 'home' ? 'pt-0 pb-8 md:pb-12' : 'py-8 md:py-12'}`} min-h-[calc(100vh-80px)]`}>
        
        {currentPage === 'membership' ? (
           <MembershipPage onBack={() => {
              playSound('click');
              setCurrentPage('home');
           }} />
        ) : isLoggedIn ? (
          !activeUserId ? (
            <ProfileSelection 
              profiles={users} 
              onSelectProfile={handleSelectProfile} 
              onAddProfiles={handleAddProfiles} 
            />
          ) : (
          <>
            {/* GRADE OVERVIEW PAGE */}
            {currentPage === 'grade' && (
               (() => {
                 const grade = GRADES.find(g => g.id === selectedGrade);
                 return grade ? (
                   <GradePage 
                        grade={grade} 
                        onBack={() => {
                            playSound('click');
                            setCurrentPage('home');
                        }} 
                        onSubjectSelect={handleSubjectSelect}
                   />
                 ) : (
                   <div className="text-center py-20">
                     <p>Grade not found</p>
                     <button onClick={() => setCurrentPage('home')} className="mt-4 text-blue-500 font-bold">Go Back</button>
                   </div>
                 );
               })()
            )}
            
            {/* GRADE SPECIFIC PAGE (e.g., 2nd Grade Math) */}
            {currentPage === 'grade-subject' && (
               (() => {
                 const subject = getSelectedSubject();
                 return subject && selectedGrade ? (
                    <GradeSubjectPage 
                        user={user}
                        subject={subject}
                        grade={selectedGrade}
                        onBack={() => {
                            playSound('click');
                            setCurrentPage('grade');
                        }}
                        onUnitSelect={handleUnitSelect}
                        onWorksheetSelect={(worksheet) => {
                            playSound('click');
                            setSelectedWorksheet(worksheet);
                            setCurrentPage('worksheet');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    />
                 ) : (
                    <div className="text-center py-20">
                     <p>Grade or Subject not found</p>
                     <button onClick={() => setCurrentPage('home')} className="mt-4 text-blue-500 font-bold">Go Back</button>
                   </div>
                 )
               })()
            )}

            {/* WORKSHEET PAGE */}
            {currentPage === 'worksheet' && selectedWorksheet && (
                <WorksheetPage 
                    worksheet={selectedWorksheet}
                    onBack={() => {
                        playSound('click');
                        if (selectedGrade && selectedSubjectId) {
                            setCurrentPage('grade-subject');
                        } else {
                            setCurrentPage('home');
                        }
                        setSelectedWorksheet(null);
                        const url = new URL(window.location.href);
                        url.searchParams.delete('worksheetId');
                        window.history.pushState({}, '', url.toString());
                    }}
                />
            )}

            {/* DEDICATED UNIT PAGE */}
            {currentPage === 'unit' && (
                (() => {
                    const subject = getSelectedSubject();
                    return subject && selectedGrade && selectedUnitId ? (
                        <UnitPage 
                            subject={subject}
                            grade={selectedGrade}
                            unitId={selectedUnitId}
                            // Pass completed sections from user state
                            completedSections={user.lessonProgress?.[`${subject.id}-${selectedGrade}-${selectedUnitId}`] || []}
                            onSectionComplete={(sectionId) => handleSectionComplete(subject.id, selectedGrade, selectedUnitId, sectionId)}
                            onBack={() => {
                                playSound('click');
                                setCurrentPage('grade-subject');
                            }}
                            onComplete={() => {
                                handleLessonComplete(subject.id, selectedGrade, selectedUnitId);
                                setCurrentPage('grade-subject');
                            }}
                        />
                    ) : (
                        <div className="text-center py-20">
                            <p>Unit not found</p>
                            <button onClick={() => setCurrentPage('grade-subject')} className="mt-4 text-blue-500 font-bold">Go Back</button>
                        </div>
                    )
                })()
            )}

            {/* ARCADE PAGE */}
            {currentPage === 'arcade' && (
                <ArcadePage onBack={() => {
                    playSound('click');
                    setCurrentPage('activities');
                }} />
            )}

            {/* PROFILE PAGE */}
            {currentPage === 'profile' && (
                <ProfilePage 
                    user={user} 
                    onBack={() => {
                        playSound('click');
                        setCurrentPage('home');
                    }} 
                    onUpdateProfile={handleUpdateProfile}
                />
            )}

            {/* STORE PAGE */}
            {currentPage === 'store' && (
                <StorePage 
                    user={user} 
                    onBack={() => {
                        playSound('click');
                        setCurrentPage('home');
                    }} 
                    onBuy={handleBuyItem}
                />
            )}

            {/* TREEHOUSE PAGE */}
            {currentPage === 'treehouse' && (
                <TreehousePage 
                    user={user} 
                    onBack={() => {
                        playSound('click');
                        setCurrentPage('home');
                    }}
                    onUpdateRoom={handleUpdateTreehouseRoom}
                />
            )}

            {/* PARENT/TEACHER PAGE */}
            {currentPage === 'parent-teacher' && (
                <ParentTeacherPage 
                    user={user} 
                    onBack={() => {
                        playSound('click');
                        setCurrentPage('home');
                    }}
                    onLessonSummariesClick={() => navigateTo('lesson-summaries')}
                    onLearningGuideClick={() => navigateTo('learning-expedition-guide')}
                    onAssignHomeworkClick={() => navigateTo('assign-homework')}
                    showWorkloadWarnings={showWorkloadWarnings}
                    onToggleWorkloadWarnings={() => setShowWorkloadWarnings(!showWorkloadWarnings)}
                />
            )}

            {/* ASSIGN HOMEWORK PAGE */}
            {currentPage === 'assign-homework' && (
                <AssignHomeworkPage 
                    onBack={() => navigateTo('parent-teacher')}
                    onAssign={(assignment) => {
                        setAssignments(prev => [...prev, { ...assignment, userId: activeUserId }]);
                        playSound('success');
                    }}
                />
            )}

            {/* LEARNING EXPEDITION GUIDE PAGE */}
            {currentPage === 'learning-expedition-guide' && (
                <LearningExpeditionGuidePage 
                    user={user}
                    onBack={() => {
                        playSound('click');
                        setCurrentPage('parent-teacher');
                    }}
                />
            )}

            {/* LESSON SUMMARIES DASHBOARD */}
            {currentPage === 'lesson-summaries' && (
                <LessonSummariesDashboard 
                    onBack={() => navigateTo('parent-teacher')}
                    onGradeSelect={(grade) => {
                        playSound('click');
                        setSummaryGrade(grade);
                        navigateTo('grade-summary-detail');
                    }}
                />
            )}

            {/* GRADE SUMMARY DETAIL */}
            {currentPage === 'grade-summary-detail' && summaryGrade && (
                <GradeSummaryDetail 
                    grade={summaryGrade}
                    onBack={() => navigateTo('lesson-summaries')}
                />
            )}

            {/* NEW: Early Childhood Menu Selection Page */}
            {currentPage === 'early-childhood-menu' && (
                <EarlyChildhoodMenuPage 
                    onBack={() => {
                        playSound('click');
                        setCurrentPage('home');
                    }}
                    onCategorySelect={handleEarlyChildhoodClick}
                />
            )}

            {/* EARLY CHILDHOOD PAGE */}
            {currentPage === 'early-childhood' && (
               (() => {
                 const category = getSelectedEarlyChildhoodCategory();
                 return category ? (
                    <EarlyChildhoodPage 
                        category={category}
                        onBack={() => {
                            playSound('click');
                            setCurrentPage('early-childhood-menu');
                        }}
                    />
                 ) : (
                    <div className="text-center py-20">
                        <p>Category not found</p>
                        <button onClick={() => setCurrentPage('early-childhood-menu')} className="mt-4 text-blue-500 font-bold">Go Back</button>
                    </div>
                 )
               })()
            )}

            {/* SPACE JUMP GAME */}
            {currentPage === 'space-jump' && (
                <SpaceJumpApp 
                    user={user}
                    onBack={() => {
                        playSound('click');
                        setCurrentPage('activities');
                    }}
                />
            )}

            {/* STELLAR POP GAME */}
            {currentPage === 'stellar-pop' && (
                <StellarPopApp 
                    onBack={() => {
                        playSound('click');
                        setCurrentPage('activities');
                    }}
                />
            )}

            {/* WORD STACK GAME */}
            {currentPage === 'word-stack' && (
                <WordStack 
                    onClose={() => {
                        playSound('click');
                        setCurrentPage('activities');
                    }}
                    onScoreUpdate={(score) => {
                        setUser(prev => ({
                            ...prev,
                            xp: prev.xp + Math.floor(score / 10),
                            coins: prev.coins + Math.floor(score / 50)
                        }));
                    }}
                />
            )}

            {/* NEON NEBULA GAME */}
            {currentPage === 'neon-nebula' && (
                <NeonNebula 
                    onBack={() => {
                        playSound('click');
                        setCurrentPage('activities');
                    }}
                />
            )}

            {/* WORD SEEKER GAME */}
            {currentPage === 'word-seeker' && (
                <WordSeeker 
                    onBack={() => {
                        playSound('click');
                        setCurrentPage('activities');
                    }}
                />
            )}

            {/* ECHO SHIFT GAME */}
            {currentPage === 'echo-shift' && (
                <App_ES 
                    onBack={() => {
                        playSound('click');
                        setCurrentPage('activities');
                    }}
                />
            )}

            {/* ACTIVITIES PAGE */}
            {currentPage === 'activities' && (
                <ActivitiesPage 
                    onBack={() => navigateTo('home')}
                    onArcadeClick={() => navigateTo('arcade')}
                    onSpaceJumpClick={() => navigateTo('space-jump')}
                    onStellarPopClick={() => navigateTo('stellar-pop')}
                    onBrainGymClick={() => navigateTo('word-stack')}
                    onNeonNebulaClick={() => navigateTo('neon-nebula')}
                    onWordSeekerClick={() => navigateTo('word-seeker')}
                    onEchoShiftClick={() => navigateTo('echo-shift')}
                />
            )}

            {/* FULL CALENDAR PAGE */}
            {currentPage === 'full-calendar' && (
                <FullCalendarPage 
                    assignments={assignments.filter(a => a.userId === activeUserId)}
                    onBack={() => navigateTo('home')}
                    onUpdateAssignment={handleUpdateAssignment}
                    onDeleteAssignment={handleDeleteAssignment}
                    showWorkloadWarnings={showWorkloadWarnings}
                />
            )}

            {/* HOME DASHBOARD */}
            {currentPage === 'home' && (
               <Dashboard 
                  user={user} 
                  assignments={assignments.filter(a => a.userId === activeUserId)}
                  onGradeClick={navigateToGrade} 
                  onArcadeClick={() => navigateTo('arcade')}
                  onProfileClick={() => navigateTo('profile')}
                  onStoreClick={() => navigateTo('store')}
                  onTreehouseClick={() => navigateTo('treehouse')}
                  onParentTeacherClick={() => navigateTo('parent-teacher')}
                  onEarlyChildhoodClick={() => navigateTo('early-childhood-menu')}
                  onActivitiesClick={() => navigateTo('activities')}
                  onOpenCalendarClick={() => navigateTo('full-calendar')}
                  onUpdateAssignment={handleUpdateAssignment}
                  onDeleteAssignment={handleDeleteAssignment}
                  showWorkloadWarnings={showWorkloadWarnings}
               />
            )}
          </>
          )
        ) : (
          /* Public Pages */
          <>
            {currentPage === 'home' && (
              <HomePage 
                onNavigate={(page) => navigateTo(page as Page)} 
                onGradeClick={handlePublicGradeClick}
              />
            )}
            {currentPage === 'features' && <FeaturesPage />}
            {currentPage === 'how-it-works' && <HowItWorksPage onJoin={() => navigateTo('join')} />}
            {currentPage === 'join' && <JoinPage onLogin={handleLogin} />}
            {currentPage === 'grade' && (
               (() => {
                 const grade = GRADES.find(g => g.id === selectedGrade);
                 return grade ? (
                   <GradePage 
                        grade={grade} 
                        onBack={() => {
                            playSound('click');
                            setCurrentPage('home');
                        }} 
                        onSubjectSelect={(subjectId) => {
                            playSound('click');
                            navigateTo('join'); // Require login for subject selection
                        }}
                   />
                 ) : (
                   <div className="text-center py-20">
                     <p>Grade not found</p>
                     <button onClick={() => setCurrentPage('home')} className="mt-4 text-blue-500 font-bold">Go Back</button>
                   </div>
                 );
               })()
            )}
          </>
        )}
      </main>

      {/* Global Game Player Overlay */}
      {activeGame && (
          <GamePlayer 
            game={activeGame} 
            onClose={() => {
                playSound('click');
                setActiveGame(null);
            }} 
          />
      )}

      {/* Footer */}
      {(currentPage !== 'membership' && currentPage !== 'stellar-pop' && currentPage !== 'neon-nebula' && currentPage !== 'word-seeker' && currentPage !== 'echo-shift') && (
        <footer className="bg-slate-800 text-slate-300 py-12 mt-12 rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center items-center gap-2 mb-6 opacity-80">
                  <TreeDeciduous size={24} className="text-green-400" />
                  <span className="font-bold text-xl text-white">The Learning Treehouse</span>
              </div>
              <p className="mb-4 text-sm">&copy; 2026 The Learning Treehouse. All rights reserved.</p>
              <div className="flex justify-center gap-6 text-sm font-semibold">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-white transition-colors">Contact Support</a>
                  <button onClick={() => navigateTo('membership')} className="hover:text-amber-400 text-amber-500 transition-colors">Membership</button>
              </div>
          </div>
        </footer>
      )}
    </div>
  );
}
