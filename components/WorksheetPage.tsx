import React, { useState, useEffect } from 'react';
import { Worksheet } from '../types/types';
import { playSound } from '../utils/sound';
import { 
  X, 
  Printer, 
  CheckCircle2, 
  Trophy,
  ArrowLeft,
  Timer,
  Star,
  Sun,
  Cloud,
  Pencil,
  BookOpen,
  Heart,
  Zap,
  Smile
} from 'lucide-react';

interface WorksheetPageProps {
  worksheet: Worksheet;
  onBack: () => void;
}

const WorksheetPage: React.FC<WorksheetPageProps> = ({ worksheet, onBack }) => {
  const [worksheetAnswers, setWorksheetAnswers] = useState<Record<string, string>>({});
  const [worksheetScore, setWorksheetScore] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Function to get a random pastel color for question backgrounds
  const getQuestionColor = (index: number) => {
    const colors = [
      'bg-blue-50 border-blue-200',
      'bg-green-50 border-green-200',
      'bg-yellow-50 border-yellow-200',
      'bg-purple-50 border-purple-200',
      'bg-pink-50 border-pink-200',
      'bg-orange-50 border-orange-200'
    ];
    return colors[index % colors.length];
  };

  const midPoint = Math.ceil(worksheet.questions.length / 2);
  const questionsPage1 = worksheet.questions.slice(0, midPoint);
  const questionsPage2 = worksheet.questions.slice(midPoint);
  const pages = [questionsPage1, questionsPage2];

  return (
    <div className="min-h-screen bg-sky-100 pb-20 w-full overflow-x-hidden font-sans print:bg-white print:pb-0">
      {/* Navigation Header - Hidden when printing */}
      <div className="print:hidden flex items-center justify-between py-6 px-4 max-w-6xl mx-auto">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-full font-bold shadow-md hover:bg-indigo-50 hover:scale-105 transition-all"
        >
            <ArrowLeft size={24} /> Back to Class
        </button>
        
        <div className="flex gap-3">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-indigo-600 font-bold shadow-md border-2 border-indigo-100">
              <Timer size={20} className="text-orange-400" />
              <span className="text-lg font-mono">{formatTime(elapsedTime)}</span>
          </div>
          <button 
            onClick={() => window.print()}
            className="p-2 bg-white hover:bg-yellow-50 rounded-full text-yellow-500 shadow-md transition-colors border-2 border-yellow-100" 
            title="Print Worksheet"
          >
              <Printer size={24} />
          </button>
        </div>
      </div>

      {pages.map((pageQuestions, pageIdx) => (
        <div 
          key={pageIdx}
          className={`bg-white rounded-[2rem] shadow-2xl w-full max-w-6xl mx-auto relative overflow-hidden border-8 border-white print:shadow-none print:border-0 print:w-full print:max-w-none print:rounded-none ${pageIdx === 0 ? 'mb-8 print:mb-0 print:break-after-page' : ''}`}
        >
          
          {/* Decorative Top Border */}
          <div className="h-4 w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 print:hidden"></div>

          <div className="p-6 md:p-12 print:p-8">
              {/* Header Section with Name/Date - Only on Page 1 */}
              {pageIdx === 0 && (
                <div className="relative border-b-4 border-dashed border-sky-200 pb-8 mb-8">
                    {/* Decorative Icons */}
                    <div className="absolute -top-4 -left-4 text-yellow-400 animate-pulse print:hidden"><Sun size={48} fill="currentColor" /></div>
                    <div className="absolute top-0 right-0 text-sky-300 print:hidden"><Cloud size={48} fill="currentColor" /></div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Star className="text-yellow-400 fill-yellow-400" size={28} />
                              <h2 className="text-4xl font-black text-indigo-600 tracking-tight">{worksheet.title}</h2>
                            </div>
                            <p className="text-slate-500 font-bold text-lg bg-slate-100 inline-block px-3 py-1 rounded-lg">
                              {worksheet.difficulty} Level
                            </p>
                        </div>

                        {/* Name and Date Fields for Printing */}
                        <div className="flex flex-col gap-4 w-full md:w-auto min-w-[300px]">
                            <div className="flex items-end gap-2">
                                <span className="font-bold text-slate-400 text-sm uppercase tracking-wider">Name:</span>
                                <div className="flex-1 border-b-2 border-slate-300 h-8"></div>
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="font-bold text-slate-400 text-sm uppercase tracking-wider">Date:</span>
                                <div className="flex-1 border-b-2 border-slate-300 h-8"></div>
                            </div>
                        </div>
                    </div>
                </div>
              )}

              {/* Questions Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 print:grid-cols-1 print:gap-8">
                  {pageQuestions.map((q, localIdx) => {
                      const globalIdx = pageIdx === 0 ? localIdx : questionsPage1.length + localIdx;
                      return (
                      <div 
                        key={q.id} 
                        className={`relative p-6 rounded-3xl border-4 transition-all hover:shadow-lg print:border-2 print:shadow-none break-inside-avoid ${getQuestionColor(globalIdx)}`}
                      >
                          {/* Question Number Badge */}
                          <div className="absolute -top-4 -left-4 bg-white border-4 border-current w-10 h-10 rounded-full flex items-center justify-center font-black text-xl shadow-sm z-10">
                              <span className={globalIdx % 2 === 0 ? 'text-blue-500' : 'text-pink-500'}>{globalIdx + 1}</span>
                          </div>

                          <div className="mt-2 space-y-4">
                              <p className="text-xl font-bold text-slate-700 leading-snug">{q.question}</p>
                              
                              {q.type === 'choice' && q.options ? (
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {q.options.map((opt, optIdx) => (
                                          <button 
                                              key={optIdx}
                                              onClick={() => setWorksheetAnswers({...worksheetAnswers, [q.id]: opt})}
                                              className={`p-3 rounded-2xl border-2 font-bold text-left text-base transition-all relative overflow-hidden group ${
                                                  worksheetAnswers[q.id] === opt 
                                                  ? 'bg-white border-indigo-500 text-indigo-700 shadow-md' 
                                                  : 'bg-white/60 border-transparent hover:border-indigo-300 text-slate-600 hover:bg-white'
                                              }`}
                                          >
                                              <span className={`inline-block w-6 h-6 rounded-full text-center leading-6 text-xs mr-2 ${
                                                worksheetAnswers[q.id] === opt ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-500'
                                              }`}>
                                                {String.fromCharCode(65 + optIdx)}
                                              </span>
                                              {opt}
                                              {worksheetAnswers[q.id] === opt && (
                                                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-500" size={20} />
                                              )}
                                          </button>
                                      ))}
                                  </div>
                              ) : (
                                  <div className="relative mt-4">
                                    <Pencil className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                                    <input 
                                        type="text" 
                                        className="w-full border-b-4 border-dashed border-slate-300 py-2 pl-8 font-handwriting text-2xl text-indigo-600 focus:border-indigo-500 outline-none bg-transparent placeholder-slate-300 transition-colors"
                                        placeholder="Write your answer..."
                                        value={worksheetAnswers[q.id] || ''}
                                        onChange={(e) => setWorksheetAnswers({...worksheetAnswers, [q.id]: e.target.value})}
                                    />
                                  </div>
                              )}
                          </div>
                      </div>
                  )})}
              </div>

              {/* Submit Section - Only on Page 2 (or last page) */}
              {pageIdx === pages.length - 1 && (
                <div className="mt-12 pt-8 border-t-4 border-dashed border-slate-200 flex flex-col items-center justify-center gap-4 print:hidden">
                    <div className="flex gap-4 text-slate-400">
                      <Smile size={32} />
                      <Heart size={32} />
                      <Zap size={32} />
                    </div>
                    <button 
                        onClick={() => {
                            let correct = 0;
                            worksheet.questions.forEach(q => {
                                const u = worksheetAnswers[q.id]?.toString().trim().toLowerCase() || "";
                                const a = q.answer?.toString().trim().toLowerCase() || "";
                                if (u === a) correct++;
                            });
                            playSound('success');
                            setWorksheetScore(correct);
                            setIsTimerRunning(false);
                        }}
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-16 py-5 rounded-full font-black text-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3 border-4 border-white ring-4 ring-indigo-100"
                    >
                        <CheckCircle2 size={32} /> I'm Finished!
                    </button>
                </div>
              )}
          </div>
          
          {/* Decorative Bottom Border */}
          <div className="h-4 w-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 print:hidden"></div>
        </div>
      ))}

      {/* SCORE POPUP - Kid Friendly Design */}
      {worksheetScore !== null && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-indigo-900/80 backdrop-blur-sm animate-in fade-in">
                <div className="bg-white rounded-[3rem] shadow-2xl p-8 max-w-lg w-full text-center border-8 border-yellow-300 relative animate-in zoom-in duration-300">
                        
                        {/* Floating Confetti Icons */}
                        <div className="absolute -top-6 -left-6 text-pink-400 animate-bounce delay-100"><Star size={48} fill="currentColor" /></div>
                        <div className="absolute -bottom-6 -right-6 text-blue-400 animate-bounce delay-300"><Star size={48} fill="currentColor" /></div>

                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full border-8 border-yellow-300 shadow-xl">
                            <Trophy size={64} className="text-yellow-400 drop-shadow-md" fill="currentColor" />
                        </div>
                        
                        <div className="mt-12">
                            <h2 className="text-4xl font-black text-indigo-600 mb-2 font-comic">Awesome Job!</h2>
                            
                            <div className="grid grid-cols-2 gap-4 mb-8 mt-6">
                                <div className="bg-indigo-50 rounded-3xl p-4 border-4 border-indigo-100">
                                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Your Score</p>
                                    <p className="text-4xl font-black text-indigo-600">{worksheetScore} <span className="text-xl text-indigo-300">/ {worksheet.questions.length}</span></p>
                                </div>
                                <div className="bg-orange-50 rounded-3xl p-4 border-4 border-orange-100">
                                    <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">Time Taken</p>
                                    <p className="text-4xl font-black text-orange-500">{formatTime(elapsedTime)}</p>
                                </div>
                            </div>

                            <div className="mb-8">
                              {worksheetScore === worksheet.questions.length ? (
                                  <div className="bg-green-100 text-green-700 p-4 rounded-2xl font-bold text-lg border-2 border-green-200 flex items-center justify-center gap-2">
                                    <Star fill="currentColor" /> Perfect Score! You're a Superstar! <Star fill="currentColor" />
                                  </div>
                              ) : worksheetScore > worksheet.questions.length / 2 ? (
                                  <div className="bg-blue-100 text-blue-700 p-4 rounded-2xl font-bold text-lg border-2 border-blue-200">
                                    Great work! You're getting smarter every day! 🧠
                                  </div>
                              ) : (
                                  <div className="bg-yellow-100 text-yellow-700 p-4 rounded-2xl font-bold text-lg border-2 border-yellow-200">
                                    Nice try! Practice makes perfect! 💪
                                  </div>
                              )}
                            </div>

                            <button 
                            onClick={() => {
                                playSound('pop');
                                onBack();
                            }}
                            className="w-full bg-yellow-400 text-yellow-900 py-4 rounded-2xl font-black text-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all border-b-8 border-yellow-500 active:border-b-0 active:translate-y-2"
                            >
                            Play Again
                            </button>
                        </div>
                </div>
            </div>
      )}
    </div>
  );
};

export default WorksheetPage;
