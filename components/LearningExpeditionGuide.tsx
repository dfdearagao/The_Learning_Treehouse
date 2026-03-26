import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronDown, ChevronRight, CheckCircle, Flag, Clock, MessageSquare, Play, CheckSquare, Award, Plus, Volume2, Info, Video, ExternalLink, X, FileText, Star, Timer, Flame, Download, Layers, Calculator, FlaskConical, Globe, Lock } from 'lucide-react';
import { Unit, Lesson } from '../types/types';
import ReactPlayer from 'react-player';

interface LearningExpeditionGuideProps {
  curriculum: { subject: string, units: (Unit & {isLocked?: boolean})[] }[];
  searchQuery?: string;
  completedLessonIds?: Set<number>;
  notes?: Record<number, string>;
  setNotes?: React.Dispatch<React.SetStateAction<Record<number, string>>>;
  flags?: Record<number, boolean>;
  setFlags?: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  onMarkUnitComplete?: (unit: Unit) => void;
  isHighContrast?: boolean;
  onAddCustomLesson?: (unitId: number, lesson: Lesson) => void;
  onToggleLessonCompletion?: (lessonId: number) => void;
  onDownloadCertificate?: (unitTitle: string) => void;
  onOpenToolbox?: (subject: string) => void;
  onOpenWidgets?: (subject: string) => void;
  onOpenResources?: (subject: string) => void;
  theme?: { bg: string, text: string, border: string, icon: any };
  grade?: string;
}

const LearningExpeditionGuide: React.FC<LearningExpeditionGuideProps> = ({ 
    curriculum, 
    searchQuery = '', 
    completedLessonIds = new Set(), 
    notes = {}, 
    setNotes = () => {}, 
    flags = {}, 
    setFlags = () => {}, 
    onMarkUnitComplete = () => {},
    isHighContrast = false,
    onAddCustomLesson = () => {},
    onToggleLessonCompletion = () => {},
    onDownloadCertificate = () => {},
    onOpenToolbox = () => {},
    onOpenWidgets = () => {},
    onOpenResources = () => {},
    theme,
    grade
}) => {
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>(() => JSON.parse(localStorage.getItem('leg_exp_subj') || '{}'));
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>(() => JSON.parse(localStorage.getItem('leg_exp_unit') || '{}'));
  const [showNotes, setShowNotes] = useState<Record<number, boolean>>({});
  const [videoModalUrl, setVideoModalUrl] = useState<string | null>(null);
  const [flashcardsModal, setFlashcardsModal] = useState<{vocab: {word: string, definition: string}[], currentIdx: number, isFlipped: boolean} | null>(null);
  const [customLessonModalUnitId, setCustomLessonModalUnitId] = useState<number | null>(null);
  const [customLessonTitle, setCustomLessonTitle] = useState('');
  const [customLessonDuration, setCustomLessonDuration] = useState('15m');
  const [lessonRatings, setLessonRatings] = useState<Record<number, number>>(() => JSON.parse(localStorage.getItem('leg_ratings') || '{}'));
  const [activeTimers, setActiveTimers] = useState<Record<number, number>>({});
  const [timerIntervals, setTimerIntervals] = useState<Record<number, NodeJS.Timeout>>({});

  useEffect(() => localStorage.setItem('leg_exp_subj', JSON.stringify(expandedSubjects)), [expandedSubjects]);
  useEffect(() => localStorage.setItem('leg_exp_unit', JSON.stringify(expandedUnits)), [expandedUnits]);
  useEffect(() => localStorage.setItem('leg_ratings', JSON.stringify(lessonRatings)), [lessonRatings]);

  const toggleTimer = (lessonId: number) => {
      if (timerIntervals[lessonId]) {
          clearInterval(timerIntervals[lessonId]);
          const newIntervals = { ...timerIntervals };
          delete newIntervals[lessonId];
          setTimerIntervals(newIntervals);
      } else {
          const interval = setInterval(() => {
              setActiveTimers(prev => ({ ...prev, [lessonId]: (prev[lessonId] || 0) + 1 }));
          }, 1000);
          setTimerIntervals(prev => ({ ...prev, [lessonId]: interval }));
      }
  };

  const formatTime = (seconds: number) => {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleRate = (lessonId: number, rating: number) => {
      setLessonRatings(prev => ({ ...prev, [lessonId]: rating }));
  };

  useEffect(() => {
      if (searchQuery) {
          const allSubjs: Record<string, boolean> = {};
          const allUnits: Record<string, boolean> = {};
          curriculum.forEach(s => {
              allSubjs[s.subject] = true;
              s.units.forEach(u => allUnits[u.id] = true);
          });
          setExpandedSubjects(allSubjs);
          setExpandedUnits(allUnits);
      }
  }, [searchQuery, curriculum]);

  const toggleSubject = (subject: string) => setExpandedSubjects(prev => ({ ...prev, [subject]: prev[subject] === false ? true : false }));
  const toggleUnit = (unitId: number) => setExpandedUnits(prev => ({ ...prev, [unitId]: prev[unitId] === false ? true : false }));
  const toggleFlag = (lessonId: number) => setFlags(prev => ({ ...prev, [lessonId]: !prev[lessonId] }));
  const toggleNote = (lessonId: number) => setShowNotes(prev => ({ ...prev, [lessonId]: !prev[lessonId] }));

  const highlightText = (text: string) => {
     if (!searchQuery) return text;
     const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
     return parts.map((part, i) => part.toLowerCase() === searchQuery.toLowerCase() ? <mark key={i} className="bg-yellow-200 text-slate-800 rounded-sm px-1">{part}</mark> : part);
  };

  const handleSpeak = (text: string) => {
      if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          window.speechSynthesis.speak(utterance);
      } else {
          alert('Text-to-speech is not supported in your browser.');
      }
  };

  const handleAddCustom = (unitId: number) => {
      setCustomLessonModalUnitId(unitId);
      setCustomLessonTitle('');
      setCustomLessonDuration('15m');
  };

  const submitCustomLesson = () => {
      if (customLessonTitle && customLessonModalUnitId !== null) {
          const newLesson: Lesson = {
              id: Date.now(),
              title: customLessonTitle,
              duration: customLessonDuration,
              type: 'custom',
              isCustom: true
          };
          onAddCustomLesson(customLessonModalUnitId, newLesson);
          setCustomLessonModalUnitId(null);
      }
  };

  const isYoungerGrade = grade === 'Kindergarten' || grade === '1st Grade' || grade === '2nd Grade';
  const baseTextSize = isYoungerGrade ? 'text-lg' : 'text-base';
  const headingTextSize = isYoungerGrade ? 'text-3xl' : 'text-2xl';

  const getGradeMascot = (g?: string) => {
      if (!g) return null;
      if (g.includes('Kindergarten') || g.includes('1st') || g.includes('2nd')) return '🦉';
      if (g.includes('3rd') || g.includes('4th') || g.includes('5th')) return '🦊';
      return '🤖';
  };

  const getSubjectToolbox = (subject: string) => {
      if (subject === 'Math') return { name: 'Calculator', icon: Calculator, action: () => onOpenToolbox(subject) };
      if (subject === 'Science') return { name: 'Periodic Table', icon: FlaskConical, action: () => onOpenToolbox(subject) };
      if (subject === 'Reading') return { name: 'Dictionary', icon: BookOpen, action: () => onOpenToolbox(subject) };
      if (subject === 'Social Studies') return { name: 'Interactive Map', icon: Globe, action: () => onOpenToolbox(subject) };
      return null;
  };

  const getSubjectResourceLibrary = (subject: string) => {
      if (subject === 'Math') return { name: 'Formula Sheet', icon: FileText, action: () => onOpenResources(subject) };
      if (subject === 'Science') return { name: 'Lab Safety Guide', icon: FileText, action: () => onOpenResources(subject) };
      if (subject === 'Reading') return { name: 'Reading Log', icon: FileText, action: () => onOpenResources(subject) };
      if (subject === 'Social Studies') return { name: 'Primary Sources', icon: FileText, action: () => onOpenResources(subject) };
      return null;
  };

  const getSubjectBadge = (subject: string) => {
      if (subject === 'Math') return { name: 'Math Wizard', icon: Award, color: 'text-blue-500', bg: 'bg-blue-100' };
      if (subject === 'Science') return { name: 'Mad Scientist', icon: Award, color: 'text-green-500', bg: 'bg-green-100' };
      if (subject === 'Reading') return { name: 'Bookworm', icon: Award, color: 'text-red-500', bg: 'bg-red-100' };
      if (subject === 'Social Studies') return { name: 'Historian', icon: Award, color: 'text-yellow-500', bg: 'bg-yellow-100' };
      return { name: 'Scholar', icon: Award, color: 'text-purple-500', bg: 'bg-purple-100' };
  };

  const totalLessons = curriculum.reduce((acc, subj) => acc + subj.units.reduce((uAcc, u) => uAcc + u.lessons.length, 0), 0);
  const completedLessonsCount = Array.from(completedLessonIds).length;
  const masteryPercentage = totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0;

  return (
    <div className={`rounded-[2rem] p-8 border-2 shadow-sm print:shadow-none print:border-none print:p-0 ${isHighContrast ? 'bg-gray-900 border-gray-800' : 'bg-white border-stone-100'} ${baseTextSize}`}>
        
        {/* Grade-Level Mastery Progress & Mascot */}
        <div className="mb-8 bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 flex items-center justify-between gap-6">
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                    <h3 className={`font-black ${headingTextSize} text-slate-800 flex items-center gap-2`}>
                        {grade ? `${grade} Mastery Progress` : 'Mastery Progress'}
                        {getGradeMascot(grade) && <span className="text-3xl">{getGradeMascot(grade)}</span>}
                    </h3>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                    <div 
                        className="bg-emerald-500 h-full rounded-full transition-all duration-1000 ease-out relative"
                        style={{ width: `${masteryPercentage}%` }}
                    >
                        {masteryPercentage > 10 && (
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-white">
                                {masteryPercentage}%
                            </span>
                        )}
                    </div>
                </div>
                <p className="text-sm font-bold text-slate-500 mt-2">
                    {completedLessonsCount} of {totalLessons} lessons completed
                </p>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center bg-white p-4 rounded-xl border-2 border-slate-100 shadow-sm min-w-[120px]">
                {masteryPercentage === 100 ? (
                    <button 
                        onClick={() => onDownloadCertificate(grade || 'All Subjects')}
                        className="flex flex-col items-center justify-center hover:opacity-80 transition-opacity"
                        title="Download Certificate"
                    >
                        <Award size={32} className="text-yellow-500" />
                        <span className="text-xs font-bold text-yellow-600 mt-2 text-center">
                            Download<br/>Certificate
                        </span>
                    </button>
                ) : (
                    <>
                        <Award size={32} className="text-slate-300" />
                        <span className="text-xs font-bold text-slate-500 mt-2 text-center">
                            Keep Going!
                        </span>
                    </>
                )}
            </div>
        </div>

        <div className="flex items-center gap-2 mb-6 print:hidden">
            {theme && theme.icon ? React.createElement(theme.icon, { className: isHighContrast ? 'text-blue-400' : theme.text }) : <BookOpen className={isHighContrast ? 'text-blue-400' : 'text-indigo-500'} />}
            <h2 className={`font-black ${headingTextSize} ${isHighContrast ? 'text-white' : 'text-slate-800'}`}>Curriculum Details</h2>
        </div>
        {curriculum.length === 0 && (
            <div className="text-slate-500 font-bold text-center py-8">No lessons found matching your criteria.</div>
        )}
        {curriculum.map((subjectGroup) => {
            const isSubjExpanded = expandedSubjects[subjectGroup.subject] !== false;
            
            // Determine subject icon for badges
            let SubjectIcon = Award;
            if (subjectGroup.subject === 'Math') SubjectIcon = Calculator;
            if (subjectGroup.subject === 'Reading') SubjectIcon = BookOpen;
            if (subjectGroup.subject === 'Science') SubjectIcon = FlaskConical;
            if (subjectGroup.subject === 'Social Studies') SubjectIcon = Globe;

            const toolbox = getSubjectToolbox(subjectGroup.subject);
            const resourceLibrary = getSubjectResourceLibrary(subjectGroup.subject);
            const badge = getSubjectBadge(subjectGroup.subject);
            
            const subjectLessons = subjectGroup.units.reduce((acc, u) => acc + u.lessons.length, 0);
            const completedSubjectLessons = subjectGroup.units.reduce((acc, u) => acc + u.lessons.filter(l => completedLessonIds.has(l.id)).length, 0);
            const isSubjectMastered = subjectLessons > 0 && completedSubjectLessons === subjectLessons;

            return (
            <div key={subjectGroup.subject} className={`mb-6 border-2 rounded-2xl overflow-hidden print:border-none print:mb-8 break-inside-avoid ${isHighContrast ? 'border-gray-800' : (theme ? theme.border : 'border-slate-100')}`}>
                <div className={`w-full flex flex-col md:flex-row md:items-center justify-between p-4 transition-colors print:hidden ${isHighContrast ? 'bg-gray-800' : (theme ? `${theme.bg}` : 'bg-slate-50')}`}>
                    <button 
                        onClick={() => toggleSubject(subjectGroup.subject)}
                        className="flex-1 flex items-center justify-between hover:opacity-80 text-left"
                    >
                        <div className="flex items-center gap-3">
                            <h3 className={`font-black ${headingTextSize} ${isHighContrast ? 'text-white' : (theme ? theme.text : 'text-slate-800')}`}>{subjectGroup.subject}</h3>
                            {isSubjectMastered && (
                                <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${badge.bg} ${badge.color} text-xs font-bold`} title="Subject Mastered!">
                                    <badge.icon size={14} />
                                    <span className="hidden sm:inline">{badge.name}</span>
                                </div>
                            )}
                        </div>
                        {isSubjExpanded ? <ChevronDown className={isHighContrast ? 'text-gray-400' : 'text-slate-400'} /> : <ChevronRight className={isHighContrast ? 'text-gray-400' : 'text-slate-400'} />}
                    </button>
                    
                    {/* Subject-Specific Toolboxes & Resources */}
                    <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-4">
                        {toolbox && (
                            <button 
                                onClick={(e) => { e.stopPropagation(); toolbox.action(); }}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold transition-colors ${isHighContrast ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-slate-600 hover:bg-slate-100 shadow-sm border border-slate-200'}`}
                            >
                                <toolbox.icon size={16} />
                                <span className="hidden sm:inline">{toolbox.name}</span>
                            </button>
                        )}
                        {resourceLibrary && (
                            <button 
                                onClick={(e) => { e.stopPropagation(); resourceLibrary.action(); }}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold transition-colors ${isHighContrast ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-slate-600 hover:bg-slate-100 shadow-sm border border-slate-200'}`}
                            >
                                <resourceLibrary.icon size={16} />
                                <span className="hidden sm:inline">{resourceLibrary.name}</span>
                            </button>
                        )}
                    </div>
                </div>
                <h3 className={`hidden print:block font-black mb-4 border-b-2 pb-2 ${headingTextSize} ${isHighContrast ? 'text-white border-gray-700' : 'text-slate-800 border-slate-200'}`}>{subjectGroup.subject}</h3>
                
                <div className={`p-4 grid grid-cols-1 md:grid-cols-2 gap-4 print:!block print:p-0 ${isSubjExpanded ? 'block' : 'hidden'}`}>
                    {subjectGroup.units.map((unit) => {
                        const isUnitExpanded = expandedUnits[unit.id] !== false;
                        const allLessonsCompleted = unit.lessons.length > 0 && unit.lessons.every(l => completedLessonIds.has(l.id));
                        const isLocked = unit.isLocked;
                        
                        return (
                        <div key={unit.id} className={`border-2 rounded-xl overflow-hidden print:border-none print:mb-6 break-inside-avoid ${isHighContrast ? 'border-gray-800' : 'border-slate-100'} ${isLocked ? 'opacity-60' : ''}`}>
                            <div className={`flex items-center justify-between p-3 transition-colors print:hidden border-b ${isHighContrast ? 'bg-gray-900 hover:bg-gray-800 border-gray-800' : 'bg-white hover:bg-slate-50 border-slate-100'}`}>
                                <button onClick={() => !isLocked && toggleUnit(unit.id)} className={`flex-1 flex items-center justify-between text-left ${isLocked ? 'cursor-not-allowed' : ''}`}>
                                    <div className="flex items-center gap-2">
                                        {isLocked && <Lock size={16} className={isHighContrast ? 'text-gray-500' : 'text-slate-400'} />}
                                        <h4 className={`font-bold ${isHighContrast ? 'text-gray-200' : 'text-slate-700'}`}>{highlightText(unit.title)}</h4>
                                        <span title="Unit Completed Badge">
                                            {allLessonsCompleted && <SubjectIcon size={16} className="text-yellow-500 fill-yellow-500" />}
                                        </span>
                                        {allLessonsCompleted && onDownloadCertificate && (
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); onDownloadCertificate(unit.title); }}
                                                className={`ml-2 p-1 rounded-full transition-colors ${isHighContrast ? 'bg-blue-900 text-blue-300 hover:bg-blue-800' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                                                title="Download Certificate"
                                            >
                                                <Download size={14} />
                                            </button>
                                        )}
                                    </div>
                                    {!isLocked && (isUnitExpanded ? <ChevronDown size={18} className={`flex-shrink-0 mx-2 ${isHighContrast ? 'text-gray-500' : 'text-slate-400'}`} /> : <ChevronRight size={18} className={`flex-shrink-0 mx-2 ${isHighContrast ? 'text-gray-500' : 'text-slate-400'}`} />)}
                                </button>
                                {!isLocked && (
                                <button 
                                    onClick={() => onMarkUnitComplete(unit)}
                                    disabled={allLessonsCompleted}
                                    className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-bold transition-colors ${allLessonsCompleted ? (isHighContrast ? 'bg-emerald-900 text-emerald-400' : 'bg-emerald-100 text-emerald-600') : (isHighContrast ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-slate-100 text-slate-500 hover:bg-slate-200')}`}
                                    title="Mark Unit Complete"
                                >
                                    <CheckSquare size={14} /> {allLessonsCompleted ? 'Done' : 'Mark Done'}
                                </button>
                                )}
                            </div>
                            <h4 className={`hidden print:block font-bold text-lg mb-2 ${isHighContrast ? 'text-white' : 'text-slate-800'}`}>{unit.title}</h4>
                            
                            <ul className={`p-2 space-y-1 print:bg-transparent print:p-0 print:space-y-1 print:!block ${isUnitExpanded && !isLocked ? 'block' : 'hidden'} ${isHighContrast ? 'bg-gray-800/50' : 'bg-slate-50/50'}`}>
                                {unit.lessons.map(lesson => {
                                    const isCompleted = completedLessonIds.has(lesson.id);
                                    return (
                                    <li key={lesson.id} className={`flex flex-col gap-2 p-2 rounded-lg transition-colors print:text-black print:p-0 print:hover:bg-transparent ${isHighContrast ? 'hover:bg-gray-800' : 'hover:bg-white'}`}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <button onClick={() => onToggleLessonCompletion(lesson.id)} className="focus:outline-none print:hidden">
                                                    {isCompleted ? (
                                                        <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                                                    ) : (
                                                        <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ml-0.5 ${isHighContrast ? 'border-gray-600' : 'border-slate-300'}`} />
                                                    )}
                                                </button>
                                                <span className="hidden print:inline-block mr-2 font-bold text-lg leading-none">{isCompleted ? '☑' : '☐'}</span>
                                                <div className="flex items-center gap-2">
                                                    <span className={`font-medium ${isCompleted ? (isHighContrast ? 'text-gray-300' : 'text-slate-800') : (isHighContrast ? 'text-gray-400' : 'text-slate-700')}`}>
                                                        {highlightText(lesson.title)}
                                                        {lesson.isCustom && <span className="ml-2 text-[10px] uppercase bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded font-bold">Custom</span>}
                                                    </span>
                                                    <button onClick={() => handleSpeak(lesson.title)} className={`p-1 rounded-full transition-colors print:hidden ${isHighContrast ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-slate-200 text-slate-400'}`} title="Read Aloud">
                                                        <Volume2 size={14} />
                                                    </button>
                                                    {lesson.vocabulary && lesson.vocabulary.length > 0 && (
                                                        <div className="relative group print:hidden">
                                                            <Info size={14} className={`cursor-help ${isHighContrast ? 'text-gray-500' : 'text-slate-400'}`} />
                                                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-xl z-10">
                                                                <h4 className="font-bold mb-1 text-blue-300">Key Vocabulary</h4>
                                                                <ul className="space-y-1">
                                                                    {lesson.vocabulary.map((v, idx) => (
                                                                        <li key={idx}><strong className="text-emerald-300">{v.word}:</strong> {v.definition}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                {flags[lesson.id] && <Flag size={14} className="text-red-500 fill-red-500 print:hidden" />}
                                            </div>
                                            <div className="flex items-center gap-2 print:hidden">
                                                {lesson.type === 'quiz' && (
                                                    <button className={`text-xs font-bold px-2 py-1 rounded-md transition-colors flex items-center gap-1 ${isHighContrast ? 'bg-purple-900 text-purple-100 hover:bg-purple-800' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'}`}>
                                                        Take Quiz
                                                    </button>
                                                )}
                                                <button onClick={() => toggleTimer(lesson.id)} className={`p-1.5 rounded-md transition-colors flex items-center gap-1 ${timerIntervals[lesson.id] ? 'bg-red-100 text-red-600 animate-pulse' : (isHighContrast ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-slate-100 text-slate-400 hover:bg-slate-200')}`} title="Time Tracking">
                                                    <Timer size={14} />
                                                    {activeTimers[lesson.id] !== undefined && <span className="text-xs font-bold">{formatTime(activeTimers[lesson.id])}</span>}
                                                </button>
                                                <button onClick={() => alert(`Downloading worksheet for ${lesson.title}`)} className={`p-1.5 rounded-md transition-colors ${isHighContrast ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`} title="Download Worksheet">
                                                    <FileText size={14} />
                                                </button>
                                                <span className={`text-xs font-bold flex items-center gap-1 ${isHighContrast ? 'text-gray-500' : 'text-slate-400'}`}><Clock size={12}/> {lesson.duration}</span>
                                                {lesson.videoUrl && (
                                                    <button onClick={() => setVideoModalUrl(lesson.videoUrl!)} className={`p-1.5 rounded-md transition-colors ${isHighContrast ? 'bg-gray-800 text-blue-400 hover:bg-gray-700' : 'bg-blue-50 text-blue-500 hover:bg-blue-100'}`} title="Watch Video">
                                                        <Video size={14} />
                                                    </button>
                                                )}
                                                {lesson.vocabulary && lesson.vocabulary.length > 0 && (
                                                    <button onClick={() => setFlashcardsModal({vocab: lesson.vocabulary!, currentIdx: 0, isFlipped: false})} className={`p-1.5 rounded-md transition-colors ${isHighContrast ? 'bg-gray-800 text-emerald-400 hover:bg-gray-700' : 'bg-emerald-50 text-emerald-500 hover:bg-emerald-100'}`} title="Flashcards">
                                                        <Layers size={14} />
                                                    </button>
                                                )}
                                                <button onClick={() => toggleFlag(lesson.id)} className={`p-1.5 rounded-md transition-colors ${flags[lesson.id] ? (isHighContrast ? 'bg-red-900 text-red-400' : 'bg-red-100 text-red-600') : (isHighContrast ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-slate-100 text-slate-400 hover:bg-slate-200')}`} title="Needs Review">
                                                    <Flag size={14} className={flags[lesson.id] ? 'fill-red-500' : ''} />
                                                </button>
                                                <button onClick={() => toggleNote(lesson.id)} className={`p-1.5 rounded-md transition-colors ${notes[lesson.id] ? (isHighContrast ? 'bg-amber-900 text-amber-400' : 'bg-amber-100 text-amber-600') : (isHighContrast ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-slate-100 text-slate-400 hover:bg-slate-200')}`} title="Notes">
                                                    <MessageSquare size={14} className={notes[lesson.id] ? 'fill-amber-500' : ''} />
                                                </button>
                                                <button onClick={() => alert(`Navigating to lesson: ${lesson.title}`)} className={`text-xs font-bold px-2 py-1 rounded-md transition-colors flex items-center gap-1 ${isHighContrast ? 'bg-blue-900 text-blue-100 hover:bg-blue-800' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}>
                                                    Start <Play size={10} className={isHighContrast ? 'fill-blue-100' : 'fill-indigo-700'} />
                                                </button>
                                            </div>
                                        </div>
                                        
                                        {/* Learning Styles, Resources & Ratings */}
                                        <div className="ml-8 mr-4 flex flex-wrap items-center gap-2 print:hidden mt-1">
                                            {isCompleted && (
                                                <div className="flex items-center gap-1 mr-2">
                                                    {[1, 2, 3, 4, 5].map(star => (
                                                        <button key={star} onClick={() => handleRate(lesson.id, star)} className="focus:outline-none">
                                                            <Star size={12} className={star <= (lessonRatings[lesson.id] || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'} />
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                            {lesson.learningStyles?.map(style => (
                                                    <span key={style} className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${isHighContrast ? 'bg-gray-700 text-gray-300' : 'bg-slate-200 text-slate-600'}`}>
                                                        {style}
                                                    </span>
                                                ))}
                                                {lesson.resources?.map((res, idx) => (
                                                    <a key={idx} href={res.url} target="_blank" rel="noreferrer" className={`text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center gap-1 ${isHighContrast ? 'bg-blue-900 text-blue-300 hover:bg-blue-800' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}>
                                                        <ExternalLink size={10} /> {res.title}
                                                    </a>
                                                ))}
                                                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${isHighContrast ? 'bg-gray-800 text-gray-400' : 'bg-slate-100 text-slate-500'}`}>
                                                    CCSS.MATH.CONTENT
                                                </span>
                                            </div>

                                        {(showNotes[lesson.id] || (notes[lesson.id] && window.matchMedia('print').matches)) && (
                                            <div className="ml-8 mr-4 mt-1 print:ml-6 print:mr-0">
                                                <textarea 
                                                    value={notes[lesson.id] || ''}
                                                    onChange={(e) => setNotes(prev => ({...prev, [lesson.id]: e.target.value}))}
                                                    placeholder="Add parent/teacher notes here..."
                                                    className={`w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring-2 print:border-none print:bg-transparent print:p-0 print:italic print:text-slate-600 print:resize-none ${isHighContrast ? 'bg-gray-800 border-gray-700 text-white focus:ring-amber-500' : 'bg-amber-50 border-amber-200 focus:ring-amber-400'}`}
                                                    rows={2}
                                                />
                                            </div>
                                        )}
                                    </li>
                                )})}
                                <div className="p-2 print:hidden">
                                    <button onClick={() => handleAddCustom(unit.id)} className={`w-full py-2 flex items-center justify-center gap-2 text-sm font-bold rounded-lg border-2 border-dashed transition-colors ${isHighContrast ? 'border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white' : 'border-slate-300 text-slate-500 hover:bg-slate-100 hover:text-slate-700'}`}>
                                        <Plus size={16} /> Add Custom Lesson
                                    </button>
                                </div>
                            </ul>
                        </div>
                    )})}
                </div>
            </div>
        )})}

        {/* Video Modal */}
        {videoModalUrl && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 print:hidden">
                <div className={`relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl ${isHighContrast ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className={`flex items-center justify-between p-4 border-b ${isHighContrast ? 'border-gray-800' : 'border-slate-100'}`}>
                        <h3 className={`font-bold ${isHighContrast ? 'text-white' : 'text-slate-800'}`}>Video Preview</h3>
                        <button onClick={() => setVideoModalUrl(null)} className={`p-1 rounded-full transition-colors ${isHighContrast ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-slate-100 text-slate-500'}`}>
                            <X size={20} />
                        </button>
                    </div>
                    <div className="aspect-video bg-black flex items-center justify-center">
                        {/* @ts-ignore */}
                        <ReactPlayer url={videoModalUrl} controls width="100%" height="100%" />
                    </div>
                </div>
            </div>
        )}

        {/* Custom Lesson Modal */}
        {customLessonModalUnitId !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 print:hidden">
                <div className={`relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl ${isHighContrast ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className={`flex items-center justify-between p-4 border-b ${isHighContrast ? 'border-gray-800' : 'border-slate-100'}`}>
                        <h3 className={`font-bold ${isHighContrast ? 'text-white' : 'text-slate-800'}`}>Add Custom Lesson</h3>
                        <button onClick={() => setCustomLessonModalUnitId(null)} className={`p-1 rounded-full transition-colors ${isHighContrast ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-slate-100 text-slate-500'}`}>
                            <X size={20} />
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="mb-4">
                            <label className={`block text-sm font-bold mb-2 ${isHighContrast ? 'text-gray-300' : 'text-slate-700'}`}>Lesson Title</label>
                            <input 
                                type="text" 
                                value={customLessonTitle}
                                onChange={(e) => setCustomLessonTitle(e.target.value)}
                                placeholder="e.g., Field Trip to Museum"
                                className={`w-full px-4 py-2 border-2 rounded-xl focus:outline-none transition-colors font-medium ${isHighContrast ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-100 text-slate-700 focus:border-indigo-300 focus:bg-white'}`}
                            />
                        </div>
                        <div className="mb-6">
                            <label className={`block text-sm font-bold mb-2 ${isHighContrast ? 'text-gray-300' : 'text-slate-700'}`}>Duration</label>
                            <input 
                                type="text" 
                                value={customLessonDuration}
                                onChange={(e) => setCustomLessonDuration(e.target.value)}
                                placeholder="e.g., 30m"
                                className={`w-full px-4 py-2 border-2 rounded-xl focus:outline-none transition-colors font-medium ${isHighContrast ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-100 text-slate-700 focus:border-indigo-300 focus:bg-white'}`}
                            />
                        </div>
                        <button 
                            onClick={submitCustomLesson}
                            disabled={!customLessonTitle.trim()}
                            className={`w-full py-3 rounded-xl font-bold transition-colors ${!customLessonTitle.trim() ? 'opacity-50 cursor-not-allowed' : ''} ${isHighContrast ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
                        >
                            Add Lesson
                        </button>
                    </div>
                </div>
            </div>
        )}
        {/* Flashcards Modal */}
        {flashcardsModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm print:hidden">
                <div className={`w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl ${isHighContrast ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className={`flex items-center justify-between p-4 border-b ${isHighContrast ? 'border-gray-800' : 'border-slate-100'}`}>
                        <h3 className={`font-bold ${isHighContrast ? 'text-white' : 'text-slate-800'}`}>Vocabulary Flashcards</h3>
                        <button onClick={() => setFlashcardsModal(null)} className={`p-1 rounded-full transition-colors ${isHighContrast ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-slate-100 text-slate-500'}`}>
                            <X size={20} />
                        </button>
                    </div>
                    <div className="p-8 flex flex-col items-center">
                        <div 
                            onClick={() => setFlashcardsModal(prev => prev ? {...prev, isFlipped: !prev.isFlipped} : null)}
                            className={`w-full h-64 rounded-2xl flex items-center justify-center p-8 cursor-pointer transition-all duration-500 transform perspective-1000 shadow-lg ${isHighContrast ? 'bg-gray-800 border-2 border-gray-700' : 'bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-100'}`}
                            style={{ transformStyle: 'preserve-3d', transform: flashcardsModal.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center p-8 text-center" style={{ backfaceVisibility: 'hidden' }}>
                                <h2 className={`text-3xl font-black ${isHighContrast ? 'text-white' : 'text-indigo-900'}`}>
                                    {flashcardsModal.vocab[flashcardsModal.currentIdx].word}
                                </h2>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center p-8 text-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                                <p className={`text-xl font-medium ${isHighContrast ? 'text-gray-300' : 'text-slate-700'}`}>
                                    {flashcardsModal.vocab[flashcardsModal.currentIdx].definition}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full mt-8">
                            <button 
                                onClick={() => setFlashcardsModal(prev => prev ? {...prev, currentIdx: Math.max(0, prev.currentIdx - 1), isFlipped: false} : null)}
                                disabled={flashcardsModal.currentIdx === 0}
                                className={`px-4 py-2 rounded-xl font-bold transition-colors ${flashcardsModal.currentIdx === 0 ? 'opacity-50 cursor-not-allowed' : ''} ${isHighContrast ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                            >
                                Previous
                            </button>
                            <span className={`font-bold ${isHighContrast ? 'text-gray-400' : 'text-slate-500'}`}>
                                {flashcardsModal.currentIdx + 1} / {flashcardsModal.vocab.length}
                            </span>
                            <button 
                                onClick={() => setFlashcardsModal(prev => prev ? {...prev, currentIdx: Math.min(prev.vocab.length - 1, prev.currentIdx + 1), isFlipped: false} : null)}
                                disabled={flashcardsModal.currentIdx === flashcardsModal.vocab.length - 1}
                                className={`px-4 py-2 rounded-xl font-bold transition-colors ${flashcardsModal.currentIdx === flashcardsModal.vocab.length - 1 ? 'opacity-50 cursor-not-allowed' : ''} ${isHighContrast ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default LearningExpeditionGuide;
