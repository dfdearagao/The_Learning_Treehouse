
import React, { useState, useEffect } from 'react';
import { SubjectItem, UnitData, Worksheet } from '../types';
import { MATH_CURRICULUM, READING_CURRICULUM, SCIENCE_CURRICULUM, SOCIAL_STUDIES_CURRICULUM } from '../constants';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Trophy, 
  ArrowRight,
  Menu,
  Play,
  Crown,
  FileText,
  Printer,
  ChevronRight,
  Pencil,
  Check
} from 'lucide-react';
import { generateMathUnit } from './MathGenerator';
import { generateReadingUnit } from './ReadingGenerator';
import { generateScienceUnit } from './ScienceGenerator';
import { generateSSUnit } from './SocialStudiesGenerator';
import { getMathWorksheets } from '../mathWorksheets';
import { getReadingWorksheets } from '../readingWorksheets';
import { getScienceWorksheets } from '../scienceWorksheets';
import { getSSWorksheets } from '../socialStudiesWorksheets';
import { playSound } from '../utils/sound';

interface UnitPageProps {
  subject: SubjectItem;
  grade: string;
  unitId: number;
  onBack: () => void;
  onComplete: () => void;
  completedSections: string[];
  onSectionComplete: (sectionId: string) => void;
}

const UnitPage: React.FC<UnitPageProps> = ({ subject, grade, unitId, onBack, onComplete, completedSections, onSectionComplete }) => {
  
  // 1. Determine Curriculum & Lesson Title
  const curriculum = 
    subject.id === 'math' ? MATH_CURRICULUM[grade] :
    subject.id === 'reading' ? READING_CURRICULUM[grade] :
    subject.id === 'science' ? SCIENCE_CURRICULUM[grade] :
    SOCIAL_STUDIES_CURRICULUM[grade];
    
  let lessonTitle = "Lesson";
  let unitTitle = "Unit";
  let specificObjectives: string[] | undefined;
  
  if (curriculum) {
      const unit = curriculum.find(u => u.lessons.some(l => l.id === unitId));
      if (unit) {
          unitTitle = unit.title;
          const lesson = unit.lessons.find(l => l.id === unitId);
          if (lesson) {
              lessonTitle = lesson.title;
              specificObjectives = lesson.objectives;
          }
      }
  }

  // 2. Generate Unit Data using specialized generators
  const [data] = useState<UnitData>(() => {
      let unitData: UnitData;
      
      if (subject.id === 'math') unitData = generateMathUnit(grade, unitId, lessonTitle);
      else if (subject.id === 'reading') unitData = generateReadingUnit(grade, unitId, lessonTitle);
      else if (subject.id === 'science') unitData = generateScienceUnit(grade, unitId, lessonTitle);
      else unitData = generateSSUnit(grade, unitId, lessonTitle);

      // Override objectives if specific ones exist in the curriculum constants
      if (specificObjectives && specificObjectives.length > 0) {
          unitData.objectives = specificObjectives;
      }

      // --- ADD MASTER IT SECTION ---
      // Generate worksheets for this specific lesson
      let worksheets: Worksheet[] = [];
      if (subject.id === 'math') worksheets = getMathWorksheets(grade, unitId, lessonTitle);
      else if (subject.id === 'reading') worksheets = getReadingWorksheets(grade, unitId, lessonTitle);
      else if (subject.id === 'science') worksheets = getScienceWorksheets(grade, unitId, lessonTitle);
      else worksheets = getSSWorksheets(grade, unitId, lessonTitle);

      unitData.sections.push({
          id: 'master',
          title: 'Master It',
          subtitle: 'Printable Worksheets',
          type: 'master',
          icon: Crown,
          content: { worksheets: worksheets }
      });

      return unitData;
  });

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const activeSection = data.sections[activeSectionIndex];
  
  // Interactive State
  const [interactiveState, setInteractiveState] = useState<any>(null);
  const [currentStepId, setCurrentStepId] = useState(1);
  const [feedback, setFeedback] = useState<string | null>(null);

  // Practice List State
  const [practiceInputs, setPracticeInputs] = useState<Record<string, string>>({});
  const [practiceResults, setPracticeResults] = useState<Record<string, 'correct' | 'incorrect'>>({});

  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [textInput, setTextInput] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Worksheet State
  const [selectedWorksheet, setSelectedWorksheet] = useState<Worksheet | null>(null);
  const [worksheetAnswers, setWorksheetAnswers] = useState<Record<string, string>>({});
  const [worksheetScore, setWorksheetScore] = useState<number | null>(null);

  // Reset states when section changes
  useEffect(() => {
      if (!showMenu) {
          if (activeSection.type === 'learn' && activeSection.content.interactive) {
              setInteractiveState(activeSection.content.interactive.initialState);
              setCurrentStepId(1);
              setFeedback(null);
          } else if (activeSection.type === 'practice') {
              setPracticeInputs({});
              setPracticeResults({});
          } else if (activeSection.type === 'assess') {
              setCurrentQuestionIndex(0);
              setScore(0);
              setShowResult(false);
              setSelectedOption(null);
              setTextInput("");
          } else if (activeSection.type === 'master') {
              setSelectedWorksheet(null);
              setWorksheetAnswers({});
              setWorksheetScore(null);
          }
      }
  }, [activeSection, showMenu]);

  const handleNextSection = () => {
      playSound('pop');
      if (activeSectionIndex < data.sections.length - 1) {
          onSectionComplete(activeSection.id);
          setActiveSectionIndex(prev => prev + 1);
          // Automatically moving to next section, keeping user in flow
      } else {
          onSectionComplete(activeSection.id);
          onComplete();
      }
  };

  const handleBackClick = () => {
      playSound('click');
      // If inside a worksheet, go back to worksheet list
      if (!showMenu && activeSection.type === 'master' && selectedWorksheet) {
          setSelectedWorksheet(null);
          setWorksheetScore(null);
          return;
      }

      if (!showMenu) {
          setShowMenu(true);
      } else {
          onBack();
      }
  };

  const handleMenuSelect = (index: number) => {
      playSound('click');
      setActiveSectionIndex(index);
      setShowMenu(false);
  };

  // --- INTERACTIVE HANDLERS ---
  const handleInteraction = (action: string, value?: any) => {
      const currentStep = activeSection.content.interactive?.steps.find(s => s.id === currentStepId);
      if (!currentStep) return;

      let success = false;
      if (currentStep.type === 'interaction' && currentStep.config.action === action) success = true;
      else if (currentStep.type === 'input' && value !== undefined && value.toString() === currentStep.config.targetValue?.toString()) success = true;

      if (success) {
          playSound('success');
          setFeedback(currentStep.feedback.success);
          if (currentStep.updateState) setInteractiveState((prev: any) => ({ ...prev, ...currentStep.updateState }));
          setTimeout(() => {
              setFeedback(null);
              const nextStep = activeSection.content.interactive?.steps.find(s => s.id === currentStepId + 1);
              if (nextStep) setCurrentStepId(prev => prev + 1);
              else {
                  setFeedback("Lesson Complete! Moving to Practice...");
                  playSound('complete');
                  setTimeout(handleNextSection, 1500);
              }
          }, 1500);
      } else {
          playSound('error');
          setFeedback(currentStep.feedback.error || "Try again!");
      }
  };

  // --- PRACTICE HANDLERS ---
  const checkPracticeAnswer = (qId: string, answer: any) => {
    const q = activeSection.content.questions?.find(q => q.id === qId);
    if (!q) return;
    const isCorrect = q.type === 'multiple_choice' ? answer === q.correctIndex : answer.toString().trim().toLowerCase() === q.answer?.toLowerCase();
    
    if (isCorrect) playSound('success');
    else playSound('error');

    setPracticeResults(prev => ({...prev, [qId]: isCorrect ? 'correct' : 'incorrect'}));
  }

  // --- QUIZ HANDLERS ---
  const handleQuizAnswer = (optionIndex?: number, textValue?: string) => {
      const currentQ = activeSection.content.questions?.[currentQuestionIndex];
      if (!currentQ) return;

      let isCorrect = false;
      if (currentQ.type === 'multiple_choice' && optionIndex === currentQ.correctIndex) isCorrect = true;
      else if (currentQ.type === 'fill_blank' && textValue?.trim().toLowerCase() === currentQ.answer?.toLowerCase()) isCorrect = true;

      if (isCorrect) {
          playSound('success');
          setScore(s => s + 1);
          setFeedback("Correct! 🎉");
      } else {
          playSound('error');
          setFeedback(`Incorrect. ${currentQ.explanation}`);
      }

      setTimeout(() => {
          setFeedback(null);
          setSelectedOption(null);
          setTextInput("");
          if (currentQuestionIndex < (activeSection.content.questions?.length || 0) - 1) setCurrentQuestionIndex(prev => prev + 1);
          else {
              playSound('complete');
              setShowResult(true);
          }
      }, 2000);
  };

  const ActiveIcon = activeSection.icon;

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 pb-20">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button onClick={handleBackClick} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors">
            <ArrowLeft size={20} /> 
            {showMenu ? 'Back to Lessons' : (activeSection.type === 'master' && selectedWorksheet) ? 'Back to List' : 'Back to Menu'}
        </button>
        {!showMenu && (
            <div className="flex gap-2">
                {data.sections.map((sec, idx) => (
                    <button 
                        key={sec.id} 
                        onClick={() => handleMenuSelect(idx)}
                        className={`h-3 w-12 rounded-full transition-all hover:scale-110 ${idx <= activeSectionIndex ? 'bg-green-500' : 'bg-stone-200'}`} 
                        title={`Go to ${sec.title}`}
                    />
                ))}
            </div>
        )}
      </div>

      <div className="text-center mb-12">
        <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm border-2 border-stone-100 text-xs md:text-sm font-black text-slate-500 uppercase tracking-[0.25em] mb-6">
            {subject.title} • {grade}
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-2">{unitTitle}</h1>
        <p className="text-xl font-bold text-slate-400 max-w-2xl mx-auto">{lessonTitle}</p>
      </div>

      {showMenu ? (
          // --- MENU VIEW ---
          <div className="max-w-5xl mx-auto">
              
              {/* OBJECTIVES SECTION */}
              {data.objectives && data.objectives.length > 0 && (
                <div className="max-w-2xl mx-auto mb-12">
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border-2 border-white shadow-sm">
                        <h3 className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">In this lesson, you will:</h3>
                        <div className="space-y-3">
                            {data.objectives.map((obj, i) => (
                                <div key={i} className="flex items-start gap-3 text-slate-700 font-bold text-sm md:text-base leading-snug">
                                    <div className="bg-green-500 rounded-full p-1 mt-0.5 shrink-0 shadow-sm">
                                        <Check size={12} className="text-white" strokeWidth={4} />
                                    </div>
                                    {obj}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
              )}

              <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Choose an Activity</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {data.sections.map((section, idx) => {
                      const Icon = section.icon;
                      const isComplete = completedSections.includes(section.id);
                      
                      let colorClass = "bg-blue-500";
                      let bgClass = "bg-blue-50 hover:bg-blue-100 border-blue-200";
                      
                      if (section.type === 'practice') {
                          colorClass = "bg-green-500";
                          bgClass = "bg-green-50 hover:bg-green-100 border-green-200";
                      } else if (section.type === 'assess') {
                          colorClass = "bg-orange-500";
                          bgClass = "bg-orange-50 hover:bg-orange-100 border-orange-200";
                      } else if (section.type === 'master') {
                          colorClass = "bg-purple-500";
                          bgClass = "bg-purple-50 hover:bg-purple-100 border-purple-200";
                      }

                      return (
                          <button
                              key={section.id}
                              onClick={() => handleMenuSelect(idx)}
                              onMouseEnter={() => playSound('hover')}
                              className={`group relative p-8 rounded-[2.5rem] border-4 transition-all duration-300 text-left flex flex-col items-center text-center gap-6 shadow-md hover:shadow-xl hover:-translate-y-2 ${bgClass}`}
                          >
                              {isComplete && (
                                  <div className="absolute top-4 right-4 bg-green-500 text-white p-1 rounded-full shadow-md animate-in zoom-in">
                                      <CheckCircle2 size={24} />
                                  </div>
                              )}
                              
                              <div className={`w-24 h-24 rounded-3xl ${colorClass} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-0`}>
                                  <Icon size={48} />
                              </div>
                              
                              <div>
                                  <h3 className="text-2xl font-black text-slate-800 mb-1">{section.title}</h3>
                                  <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">{section.subtitle}</p>
                              </div>

                              <div className={`mt-auto px-6 py-2 rounded-full font-bold text-white text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 ${colorClass}`}>
                                  Start
                              </div>
                          </button>
                      )
                  })}
              </div>
          </div>
      ) : (
          // --- CONTENT VIEW ---
          <div className="bg-white rounded-[2.5rem] shadow-xl border-b-8 border-stone-100 overflow-hidden min-h-[500px] animate-in fade-in zoom-in-95 duration-300">
              <div className={`p-6 bg-slate-50 border-b border-stone-100 flex items-center justify-between`}>
                  <div className="flex items-center gap-4">
                      <div className="bg-white p-3 rounded-2xl shadow-sm text-blue-500">
                          <ActiveIcon size={24} />
                      </div>
                      <div>
                          <h2 className="text-xl font-black text-slate-800">
                              {selectedWorksheet ? selectedWorksheet.title : activeSection.title}
                          </h2>
                          <p className="text-sm font-bold text-slate-400">{activeSection.subtitle}</p>
                      </div>
                  </div>
                  {feedback && activeSection.type !== 'practice' && (
                      <div className="animate-bounce-in bg-yellow-100 text-yellow-800 px-4 py-2 rounded-xl font-bold text-sm shadow-sm">{feedback}</div>
                  )}
              </div>

              <div className="p-8 md:p-12">
                {/* LEARN */}
                {activeSection.type === 'learn' && activeSection.content.interactive && (
                    <div className="flex flex-col items-center justify-center space-y-8">
                        <div className="text-xl font-bold text-slate-700 text-center max-w-lg">
                            {activeSection.content.interactive.steps.find(s => s.id === currentStepId)?.prompt}
                        </div>
                        <div className="w-full max-w-2xl bg-slate-50 rounded-3xl p-8 min-h-[300px] flex items-center justify-center relative">
                            {activeSection.content.interactive.type === 'flashcard' && interactiveState && (
                                <button onClick={() => handleInteraction('tap_card')} className="bg-white w-64 h-80 rounded-3xl shadow-lg border-b-8 border-stone-200 hover:-translate-y-2 transition-all flex flex-col items-center justify-center gap-4 px-4 text-center">
                                    <div className="text-6xl md:text-8xl">{interactiveState.content}</div>
                                    <div className="text-xl font-black text-slate-400 uppercase tracking-widest">{interactiveState.subtext}</div>
                                </button>
                            )}
                            {activeSection.content.interactive.type === 'number_line' && interactiveState && (
                                <div className="w-full flex flex-col items-center gap-8">
                                    <div className="flex items-center gap-2 w-full justify-between px-4">
                                        {(interactiveState.range || [0, 1, 2, 3, 4, 5]).map((n: number) => (
                                            <div key={n} className="flex flex-col items-center">
                                                {interactiveState.current === n && <div className="text-4xl mb-2">🐸</div>}
                                                <div className="w-1 h-4 bg-stone-300"></div>
                                                <span className="font-bold text-slate-500 mt-2">{n}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-full h-1 bg-stone-300 rounded-full -mt-8"></div>
                                    <button onClick={() => handleInteraction('hop')} className="mt-8 bg-green-500 text-white px-6 py-3 rounded-xl font-bold">HOP!</button>
                                </div>
                            )}
                            {activeSection.content.interactive.type === 'blocks' && interactiveState && (
                                <div className="flex flex-col items-center gap-4">
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {Array.from({length: interactiveState.ones}).map((_, i) => <div key={i} className="w-12 h-12 bg-yellow-400 rounded-lg border-2 border-yellow-500 shadow-sm"></div>)}
                                    </div>
                                    <button onClick={() => handleInteraction('add_one')} className="bg-blue-500 text-white px-6 py-3 rounded-xl font-bold">Add Block</button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* PRACTICE */}
                {activeSection.type === 'practice' && (
                    <div className="max-w-3xl mx-auto space-y-8">
                        {activeSection.content.questions?.map((q, idx) => (
                            <div key={q.id} className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border-2 border-stone-100 relative overflow-hidden">
                                {practiceResults[q.id] === 'correct' && <div className="absolute left-0 top-0 bottom-0 w-2 bg-green-500"></div>}
                                {practiceResults[q.id] === 'incorrect' && <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-400"></div>}
                                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-start gap-3">
                                    <span className="bg-stone-100 text-stone-500 text-sm px-2 py-1 rounded-lg shrink-0 mt-1">{idx + 1}</span> {q.q}
                                </h3>
                                {q.type === 'multiple_choice' ? (
                                    <div className="flex flex-wrap gap-3">
                                        {q.options?.map((opt, optIdx) => (
                                            <button key={optIdx} onClick={() => checkPracticeAnswer(q.id, optIdx)} disabled={practiceResults[q.id] === 'correct'} className={`px-6 py-3 rounded-full border-2 font-bold transition-all ${practiceResults[q.id] === 'correct' && optIdx === q.correctIndex ? 'bg-green-100 border-green-500 text-green-700' : 'bg-white border-stone-200 text-slate-600 hover:border-blue-300'}`}>{opt}</button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3 max-w-lg">
                                        <input type="text" value={practiceInputs[q.id] || ''} onChange={(e) => setPracticeInputs({...practiceInputs, [q.id]: e.target.value})} placeholder="Answer..." className="flex-1 p-3 rounded-xl border-2 font-bold" />
                                        <button onClick={() => checkPracticeAnswer(q.id, practiceInputs[q.id])} className="bg-blue-500 text-white px-6 py-3 rounded-xl font-bold">Check</button>
                                    </div>
                                )}
                                {practiceResults[q.id] === 'correct' && <div className="mt-4 flex items-center gap-2 text-green-600 font-bold"><CheckCircle2 size={20} /> Correct!</div>}
                            </div>
                        ))}
                        <div className="flex justify-center pt-8">
                            <button onClick={handleNextSection} className="bg-green-500 text-white px-12 py-4 rounded-2xl font-black text-xl shadow-lg hover:bg-green-600 flex items-center gap-2">Finish Practice <ArrowRight /></button>
                        </div>
                    </div>
                )}

                {/* ASSESS */}
                {activeSection.type === 'assess' && (
                    <div>
                        {!showResult ? (
                            <div className="max-w-2xl mx-auto space-y-8">
                                <div className="flex justify-between items-center text-sm font-bold text-slate-400 uppercase tracking-widest">
                                    <span>Question {currentQuestionIndex + 1} of {activeSection.content.questions?.length}</span>
                                    <span>Score: {score}</span>
                                </div>
                                <div className="bg-white p-6 rounded-3xl border-2 border-stone-100 shadow-sm text-center">
                                    <h3 className="text-2xl font-bold text-slate-800">{activeSection.content.questions?.[currentQuestionIndex].q}</h3>
                                </div>
                                <div className="space-y-4">
                                    {activeSection.content.questions?.[currentQuestionIndex].type === 'multiple_choice' ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {activeSection.content.questions?.[currentQuestionIndex].options?.map((opt, idx) => (
                                                <button key={idx} onClick={() => { setSelectedOption(idx); handleQuizAnswer(idx); }} className={`p-4 rounded-xl border-2 font-bold text-lg transition-all ${selectedOption === idx ? 'bg-blue-100 border-blue-400 text-blue-700' : 'bg-white border-stone-200 hover:border-blue-300'}`}>{opt}</button>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center gap-4">
                                            <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder="Answer here..." className="w-full max-w-md p-4 rounded-xl border-2 border-stone-200 font-bold text-xl text-center" />
                                            <button onClick={() => handleQuizAnswer(undefined, textInput)} className="bg-blue-500 text-white px-8 py-3 rounded-xl font-bold shadow-md hover:bg-blue-600">Submit</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12 space-y-6">
                                <Trophy size={80} className="text-yellow-400 mx-auto drop-shadow-lg" />
                                <h2 className="text-4xl font-black text-slate-800">Section Complete!</h2>
                                <p className="text-xl font-bold text-slate-500">You scored {score} out of {activeSection.content.questions?.length}</p>
                                <button onClick={handleNextSection} className="bg-green-500 text-white px-12 py-4 rounded-2xl font-black text-xl shadow-lg hover:bg-green-600 flex items-center gap-2 justify-center mx-auto">Continue <ArrowRight /></button>
                            </div>
                        )}
                    </div>
                )}

                {/* MASTER IT */}
                {activeSection.type === 'master' && (
                    <div className="max-w-4xl mx-auto">
                        {!selectedWorksheet ? (
                            // WORKSHEET LIST VIEW
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {activeSection.content.worksheets?.map((sheet, idx) => (
                                    <button
                                        key={sheet.id}
                                        onClick={() => { playSound('click'); setSelectedWorksheet(sheet); }}
                                        className="bg-white p-6 rounded-2xl border-b-4 border-stone-100 hover:border-purple-300 hover:shadow-lg hover:-translate-y-1 transition-all text-left flex items-center justify-between group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-black shadow-sm ${
                                                sheet.difficulty === 'Easy' ? 'bg-green-400' : sheet.difficulty === 'Medium' ? 'bg-blue-400' : 'bg-purple-400'
                                            }`}>
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 text-lg">{sheet.title}</h3>
                                                <span className={`text-xs font-bold uppercase tracking-wider ${
                                                    sheet.difficulty === 'Easy' ? 'text-green-500' : sheet.difficulty === 'Medium' ? 'text-blue-500' : 'text-purple-500'
                                                }`}>{sheet.difficulty}</span>
                                            </div>
                                        </div>
                                        <ChevronRight className="text-stone-300 group-hover:text-purple-500 transition-colors" />
                                    </button>
                                ))}
                            </div>
                        ) : (
                            // WORKSHEET PLAYER VIEW
                            <div className="bg-white rounded-3xl shadow-sm border-2 border-stone-200 p-8 md:p-12 relative animate-in fade-in slide-in-from-bottom-4">
                                {/* Paper Effect Headers */}
                                <div className="flex justify-between items-start border-b-2 border-slate-800 pb-6 mb-8 border-dashed">
                                    <div>
                                        <h2 className="text-3xl font-black text-slate-800 mb-1">{selectedWorksheet.title}</h2>
                                        <p className="text-slate-500 font-bold">Grade: {grade} • {subject.title}</p>
                                    </div>
                                    <div className="flex gap-2 print:hidden">
                                        <button className="p-2 bg-stone-100 hover:bg-stone-200 rounded-lg text-slate-600 transition-colors" title="Print">
                                            <Printer size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    {selectedWorksheet.questions.map((q, idx) => (
                                        <div key={q.id} className="flex gap-4">
                                            <div className="font-black text-slate-400 text-xl">{idx + 1}.</div>
                                            <div className="flex-1 space-y-4">
                                                <p className="text-xl font-bold text-slate-800">{q.question}</p>
                                                
                                                {q.type === 'choice' && q.options ? (
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                        {q.options.map((opt, optIdx) => (
                                                            <button 
                                                                key={optIdx}
                                                                onClick={() => setWorksheetAnswers({...worksheetAnswers, [q.id]: opt})}
                                                                className={`p-3 rounded-xl border-2 font-bold text-left transition-all ${
                                                                    worksheetAnswers[q.id] === opt 
                                                                    ? 'bg-purple-100 border-purple-500 text-purple-700' 
                                                                    : 'bg-white border-stone-200 hover:border-purple-300 text-slate-600'
                                                                }`}
                                                            >
                                                                <span className="mr-2 opacity-50">{String.fromCharCode(65 + optIdx)}.</span>
                                                                {opt}
                                                            </button>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <input 
                                                        type="text" 
                                                        className="w-full border-b-2 border-stone-300 p-2 font-handwriting text-2xl text-blue-600 focus:border-blue-500 outline-none bg-transparent placeholder-stone-300"
                                                        placeholder="Write answer here..."
                                                        value={worksheetAnswers[q.id] || ''}
                                                        onChange={(e) => setWorksheetAnswers({...worksheetAnswers, [q.id]: e.target.value})}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 pt-8 border-t-2 border-stone-100 flex justify-center print:hidden">
                                    <button 
                                        onClick={() => {
                                            if (!selectedWorksheet) return;
                                            let correct = 0;
                                            selectedWorksheet.questions.forEach(q => {
                                                // Simple normalization
                                                const u = worksheetAnswers[q.id]?.toString().trim().toLowerCase() || "";
                                                const a = q.answer?.toString().trim().toLowerCase() || "";
                                                if (u === a) correct++;
                                            });
                                            playSound('success');
                                            setWorksheetScore(correct);
                                        }}
                                        className="bg-purple-600 text-white px-12 py-4 rounded-2xl font-black text-xl shadow-lg hover:bg-purple-700 hover:-translate-y-1 transition-all flex items-center gap-2"
                                    >
                                        <CheckCircle2 /> Submit Worksheet
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
              </div>
          </div>
      )}

      {/* SCORE POPUP */}
      {worksheetScore !== null && selectedWorksheet && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
                <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 max-w-sm w-full text-center border-8 border-white relative animate-in zoom-in">
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                            <Trophy size={80} className="text-yellow-400 drop-shadow-lg" fill="currentColor" />
                        </div>
                        <div className="mt-8">
                            <h2 className="text-3xl font-black text-slate-800 mb-2">Worksheet Complete!</h2>
                            
                            <div className="bg-stone-100 rounded-2xl p-4 mb-6 border-2 border-stone-200">
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Your Score</p>
                                <p className="text-5xl font-black text-purple-600">{worksheetScore} <span className="text-2xl text-slate-300">/ {selectedWorksheet.questions.length}</span></p>
                            </div>

                            {worksheetScore === selectedWorksheet.questions.length ? (
                                <p className="text-lg font-bold text-green-500 mb-6">Perfect Score! You're a star! 🌟</p>
                            ) : worksheetScore > selectedWorksheet.questions.length / 2 ? (
                                <p className="text-lg font-bold text-blue-500 mb-6">Great job! Keep practicing!</p>
                            ) : (
                                <p className="text-lg font-bold text-orange-500 mb-6">Nice try! Don't give up!</p>
                            )}

                            <button 
                            onClick={() => {
                                playSound('pop');
                                setWorksheetScore(null);
                                setSelectedWorksheet(null);
                                setWorksheetAnswers({});
                            }}
                            className="w-full bg-purple-600 text-white py-3 rounded-xl font-black shadow-lg hover:bg-purple-700 transition-all active:scale-95"
                            >
                            Continue
                            </button>
                        </div>
                </div>
            </div>
      )}
    </div>
  );
};

export default UnitPage;
