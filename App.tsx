
import React, { useState } from 'react';
import { MOCK_USER, CORE_SUBJECTS, EARLY_CHILDHOOD_CATEGORIES } from './constants';
import { User, StoreItem, GameItem, PlacedItem } from './types/types';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import FeaturesPage from './components/FeaturesPage';
import HowItWorksPage from './components/HowItWorksPage';
import SubjectPage from './components/SubjectPage';
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
import SpaceJumpApp from './components/SpaceJumpApp';
import StellarPopApp from './components/StellarPopApp';
import WordStack from './components/WS/WordStack';
import MembershipPage from './components/MembershipPage';
import { Menu, X, LogIn, TreeDeciduous, Crown } from 'lucide-react';
import { playSound } from './utils/sound';

type Page = 'home' | 'features' | 'how-it-works' | 'subject' | 'grade-subject' | 'unit' | 'arcade' | 'profile' | 'store' | 'parent-teacher' | 'join' | 'treehouse' | 'early-childhood' | 'early-childhood-menu' | 'lesson-summaries' | 'grade-summary-detail' | 'space-jump' | 'stellar-pop' | 'membership' | 'word-stack';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  
  // Navigation State
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);
  const [selectedEarlyChildhoodId, setSelectedEarlyChildhoodId] = useState<string | null>(null);
  const [activeGame, setActiveGame] = useState<GameItem | null>(null);
  
  // Lesson Summary State
  const [summaryGrade, setSummaryGrade] = useState<string | null>(null);

  // User State
  const [user, setUser] = useState<User>(MOCK_USER);

  const handleLogin = () => {
    playSound('success');
    setIsLoggedIn(true);
    setCurrentPage('home'); // Reset to home/dashboard on login
  };

  const handleLogout = () => {
    playSound('pop');
    setIsLoggedIn(false);
    setCurrentPage('home');
    setSelectedSubjectId(null);
    setSelectedGrade(null);
    setSelectedUnitId(null);
    setSelectedEarlyChildhoodId(null);
  };

  const navigateTo = (page: Page) => {
    playSound('click');
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSubject = (subjectId: string) => {
    playSound('pop');
    setSelectedSubjectId(subjectId);
    setSelectedGrade(null); // Reset grade when entering a subject
    setCurrentPage('subject');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleGradeSelect = (grade: string) => {
      playSound('click');
      setSelectedGrade(grade);
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

  const handlePublicSubjectClick = (id: string) => {
    playSound('click');
    // If not logged in, go to join page
    navigateTo('join');
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
      {currentPage !== 'membership' && (
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
                ) : (
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => navigateTo('membership')}
                      className="hidden lg:flex items-center gap-1 font-bold text-amber-500 hover:text-amber-600 transition-colors mr-4"
                    >
                      <Crown size={18} fill="currentColor" /> Premium
                    </button>
                    <span className="font-bold text-slate-600">Welcome, {user.name}</span>
                    <button 
                      onClick={handleLogout}
                      className="text-slate-500 hover:text-red-500 font-bold transition-colors"
                    >
                      Log Out
                    </button>
                    <img src={user.avatar} alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
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
            <div className="md:hidden bg-white border-b border-stone-200 p-4 space-y-4 shadow-lg animate-in slide-in-from-top-5">
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
              ) : (
                <>
                  <button className="block w-full text-left text-amber-500 font-bold p-2 hover:bg-stone-50 rounded-lg flex items-center gap-2" onClick={() => navigateTo('membership')}>
                    <Crown size={18} /> Premium
                  </button>
                  <button 
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-center bg-red-100 text-red-600 px-6 py-3 rounded-xl font-bold"
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
      <main className={`${(currentPage === 'membership' || currentPage === 'stellar-pop') ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12'} min-h-[calc(100vh-80px)]`}>
        
        {currentPage === 'membership' ? (
           <MembershipPage onBack={() => {
              playSound('click');
              setCurrentPage('home');
           }} />
        ) : isLoggedIn ? (
          <>
            {/* SUBJECT OVERVIEW PAGE */}
            {currentPage === 'subject' && (
               (() => {
                 const subject = getSelectedSubject();
                 return subject ? (
                   <SubjectPage 
                        subject={subject} 
                        onBack={() => {
                            playSound('click');
                            setCurrentPage('home');
                        }} 
                        onGradeSelect={handleGradeSelect}
                        onTeacherClick={() => navigateTo('parent-teacher')}
                        onActivityClick={(game) => {
                            playSound('click');
                            setActiveGame(game);
                        }}
                   />
                 ) : (
                   <div className="text-center py-20">
                     <p>Subject not found</p>
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
                            setCurrentPage('subject');
                        }}
                        onUnitSelect={handleUnitSelect}
                    />
                 ) : (
                    <div className="text-center py-20">
                     <p>Grade or Subject not found</p>
                     <button onClick={() => setCurrentPage('home')} className="mt-4 text-blue-500 font-bold">Go Back</button>
                   </div>
                 )
               })()
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
                    setCurrentPage('home');
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
                        setCurrentPage('home');
                    }}
                />
            )}

            {/* STELLAR POP GAME */}
            {currentPage === 'stellar-pop' && (
                <StellarPopApp 
                    onBack={() => {
                        playSound('click');
                        setCurrentPage('home');
                    }}
                />
            )}

            {/* WORD STACK GAME */}
            {currentPage === 'word-stack' && (
                <WordStack 
                    onClose={() => {
                        playSound('click');
                        setCurrentPage('home');
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

            {/* HOME DASHBOARD */}
            {currentPage === 'home' && (
               <Dashboard 
                  user={user} 
                  onSubjectClick={navigateToSubject} 
                  onArcadeClick={() => navigateTo('arcade')}
                  onProfileClick={() => navigateTo('profile')}
                  onStoreClick={() => navigateTo('store')}
                  onTreehouseClick={() => navigateTo('treehouse')}
                  onParentTeacherClick={() => navigateTo('parent-teacher')}
                  onEarlyChildhoodClick={() => navigateTo('early-childhood-menu')}
                  onSpaceJumpClick={() => navigateTo('space-jump')}
                  onStellarPopClick={() => navigateTo('stellar-pop')}
                  onBrainGymClick={() => navigateTo('word-stack')}
               />
            )}
          </>
        ) : (
          /* Public Pages */
          <>
            {currentPage === 'home' && (
              <HomePage 
                onNavigate={(page) => navigateTo(page as Page)} 
                onSubjectClick={handlePublicSubjectClick}
              />
            )}
            {currentPage === 'features' && <FeaturesPage />}
            {currentPage === 'how-it-works' && <HowItWorksPage onJoin={() => navigateTo('join')} />}
            {currentPage === 'join' && <JoinPage onLogin={handleLogin} />}
            {/* Note: 'subject' page is not rendered here, effectively restricting access */}
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
      {(currentPage !== 'membership' && currentPage !== 'stellar-pop') && (
        <footer className="bg-slate-800 text-slate-300 py-12 mt-12 rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center items-center gap-2 mb-6 opacity-80">
                  <TreeDeciduous size={24} className="text-green-400" />
                  <span className="font-bold text-xl text-white">The Learning Treehouse</span>
              </div>
              <p className="mb-4 text-sm">&copy; 2024 The Learning Treehouse. All rights reserved.</p>
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
