
import React, { useState, useEffect } from 'react';
import { ECActivity } from '../earlyChildhoodContent';
import { X, ArrowRight, ArrowLeft, RefreshCw, Trophy, BookOpen, Volume2, Square } from 'lucide-react';
import { playSound } from '../utils/sound';
import ToddlerGameEngine from './ToddlerGameEngine';

interface EarlyChildhoodPlayerProps {
    activity: ECActivity;
    onClose: () => void;
}

const EarlyChildhoodPlayer: React.FC<EarlyChildhoodPlayerProps> = ({ activity, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false); // For flashcards
    const [feedback, setFeedback] = useState<string | null>(null); // For sorting/quiz
    const [isSpeaking, setIsSpeaking] = useState(false); // For story reading

    // Cleanup speech when component unmounts or page changes
    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    // Stop speaking when turning the page
    useEffect(() => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    }, [currentIndex]);

    const handleSpeak = (text: string) => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            return;
        }

        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        } else {
            alert("Sorry, your browser doesn't support text-to-speech!");
        }
    };

    // --- STORY LOGIC ---
    const renderStory = () => {
        const pages = activity.data.pages;
        const currentPage = pages[currentIndex];

        const nextPage = () => {
            playSound('click');
            if (currentIndex < pages.length - 1) {
                setCurrentIndex(prev => prev + 1);
            } else {
                playSound('complete');
                setIsComplete(true);
            }
        };

        const prevPage = () => {
            playSound('click');
            if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
        };

        return (
            <div className="flex flex-col items-center justify-between h-full w-full max-w-xl mx-auto py-2">
                {/* Progress Pill */}
                <div className="mb-4">
                    <span className="bg-white px-4 py-1.5 rounded-full text-sm font-bold text-slate-400 shadow-sm border border-slate-100">
                        Page {currentIndex + 1} of {pages.length}
                    </span>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-[2.5rem] shadow-xl w-full flex-1 flex flex-col items-center justify-center p-8 border-4 border-white relative overflow-hidden group">
                    <div className="text-[8rem] md:text-[9rem] mb-6 drop-shadow-sm animate-in zoom-in duration-500 select-none transform transition-transform group-hover:scale-105">
                        {currentPage.image}
                    </div>
                    
                    <p className="text-2xl md:text-3xl font-black text-slate-800 text-center leading-snug font-sans max-w-md">
                        {currentPage.text}
                    </p>

                    <button 
                        onClick={() => handleSpeak(currentPage.text)}
                        className={`mt-6 flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all transform active:scale-95 shadow-sm text-sm ${
                            isSpeaking 
                            ? 'bg-red-50 text-red-500 hover:bg-red-100' 
                            : 'bg-blue-50 text-blue-500 hover:bg-blue-100'
                        }`}
                    >
                        {isSpeaking ? <Square size={16} fill="currentColor" /> : <Volume2 size={18} />}
                        {isSpeaking ? "Stop" : "Read to Me"}
                    </button>
                </div>

                {/* Minimal Controls */}
                <div className="flex gap-4 mt-6 w-full px-4">
                    <button 
                        onClick={prevPage} 
                        disabled={currentIndex === 0}
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'bg-white text-slate-400 shadow-sm hover:bg-slate-50'}`}
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div className="flex-1"></div>
                    <button 
                        onClick={nextPage}
                        className="w-14 h-14 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 hover:scale-105 transition-all flex items-center justify-center"
                    >
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        );
    };

    // --- FLASHCARD LOGIC ---
    const renderFlashcards = () => {
        const cards = activity.data.cards;
        const currentCard = cards[currentIndex];

        const nextCard = () => {
            playSound('click');
            setIsFlipped(false);
            setTimeout(() => {
                if (currentIndex < cards.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                } else {
                    playSound('complete');
                    setIsComplete(true);
                }
            }, 200);
        };

        const prevCard = () => {
            playSound('click');
            setIsFlipped(false);
            setTimeout(() => {
                if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
            }, 200);
        };

        return (
            <div className="flex flex-col items-center justify-between h-full w-full max-w-sm mx-auto py-4">
                {/* Progress Pill */}
                <div className="mb-6">
                    <span className="bg-white px-4 py-1.5 rounded-full text-xs font-bold text-slate-400 shadow-sm">
                        Card {currentIndex + 1} of {cards.length}
                    </span>
                </div>
                
                {/* Card Container */}
                <div 
                    className="group perspective w-full aspect-[3/4] cursor-pointer"
                    onClick={() => { playSound('pop'); setIsFlipped(!isFlipped); }}
                >
                    <div className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
                        {/* Front */}
                        <div className="absolute w-full h-full backface-hidden rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center bg-white border-4 border-white">
                            <span className="text-8xl select-none filter drop-shadow-sm transform group-hover:scale-110 transition-transform duration-300">{currentCard.front.replace(/[a-zA-Z0-9+\s]/g, '').trim()}</span>
                            <span className="text-4xl font-black text-slate-800 mt-4">{currentCard.front.replace(/[^a-zA-Z0-9+\s]/g, '').trim()}</span>
                            <div className="absolute bottom-8 text-slate-300 text-[10px] font-black uppercase tracking-widest">Tap to Flip</div>
                        </div>
                        {/* Back */}
                        <div className="absolute w-full h-full backface-hidden rounded-[2.5rem] shadow-xl flex items-center justify-center bg-white border-4 border-white rotate-y-180">
                            <span className="text-3xl font-black text-slate-800 select-none px-6 text-center">{currentCard.back}</span>
                        </div>
                    </div>
                </div>

                {/* Minimal Navigation */}
                <div className="flex items-center justify-center gap-8 mt-8 w-full">
                    <button 
                        onClick={(e) => { e.stopPropagation(); prevCard(); }}
                        disabled={currentIndex === 0}
                        className={`p-4 rounded-full transition-all ${currentIndex === 0 ? 'opacity-20 pointer-events-none' : 'bg-white text-slate-400 hover:bg-slate-50 shadow-sm'}`}
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <button 
                        onClick={(e) => { e.stopPropagation(); nextCard(); }}
                        className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                    >
                        {currentIndex === cards.length - 1 ? 'Finish' : 'Next'} <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        );
    };

    // --- QUIZ LOGIC ---
    const renderQuiz = () => {
        const questions = activity.data.questions;
        const currentQ = questions[currentIndex];

        const handleAnswer = (idx: number) => {
            if (idx === currentQ.correctIndex) {
                playSound('success');
                setFeedback("Correct! 🎉");
                setScore(s => s + 1);
                setTimeout(() => {
                    setFeedback(null);
                    if (currentIndex < questions.length - 1) {
                        setCurrentIndex(prev => prev + 1);
                    } else {
                        playSound('complete');
                        setIsComplete(true);
                    }
                }, 1000);
            } else {
                playSound('error');
                setFeedback("Try again! 🤔");
                setTimeout(() => setFeedback(null), 1000);
            }
        };

        return (
            <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto w-full">
                <div className="text-center mb-10">
                    {currentQ.image && <div className="text-8xl mb-6 animate-bounce-subtle">{currentQ.image}</div>}
                    <h2 className="text-3xl font-black text-slate-800 leading-tight">{currentQ.q}</h2>
                </div>

                <div className="grid grid-cols-1 gap-3 w-full">
                    {currentQ.options.map((opt: string, idx: number) => (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(idx)}
                            className="bg-white border-b-4 border-slate-100 hover:border-blue-300 hover:bg-blue-50 py-5 rounded-2xl text-xl font-bold text-slate-600 transition-all active:scale-95 shadow-sm"
                        >
                            {opt}
                        </button>
                    ))}
                </div>
                
                {feedback && (
                    <div className="mt-8 px-6 py-2 bg-yellow-100 text-yellow-700 rounded-full font-bold animate-bounce-in shadow-sm">
                        {feedback}
                    </div>
                )}
            </div>
        );
    };

    // --- SORTING LOGIC ---
    const renderSorting = () => {
        const { items, categoryA, categoryB } = activity.data;
        const currentItem = items[currentIndex];

        const handleSort = (target: 'A' | 'B') => {
            const correctCategory = currentItem.category;
            if (target === correctCategory) {
                playSound('success');
                setFeedback("Correct! 🌟");
                setTimeout(() => {
                    setFeedback(null);
                    if (currentIndex < items.length - 1) {
                        setCurrentIndex(prev => prev + 1);
                    } else {
                        playSound('complete');
                        setIsComplete(true);
                    }
                }, 800);
            } else {
                playSound('error');
                setFeedback("Oops! Try again.");
                setTimeout(() => setFeedback(null), 1000);
            }
        };

        return (
            <div className="flex flex-col items-center justify-center h-full w-full max-w-lg mx-auto">
                <h3 className="text-sm font-black text-slate-400 mb-8 uppercase tracking-widest">{activity.data.instruction}</h3>
                
                {/* The Item to Sort */}
                <div className="mb-12">
                    <div className={`w-40 h-40 bg-white rounded-[2.5rem] shadow-xl flex items-center justify-center text-8xl border-4 border-white animate-in zoom-in duration-300 ${currentItem.color || ''}`}>
                        {currentItem.content}
                    </div>
                </div>

                {/* Bins */}
                <div className="flex gap-4 w-full">
                    <button 
                        onClick={() => handleSort('A')}
                        className="flex-1 bg-white hover:bg-blue-50 border-b-4 border-blue-100 hover:border-blue-300 p-6 rounded-3xl transition-all active:scale-95 group shadow-sm"
                    >
                        <span className="block text-xl font-black text-blue-500">{categoryA}</span>
                    </button>
                    <button 
                        onClick={() => handleSort('B')}
                        className="flex-1 bg-white hover:bg-red-50 border-b-4 border-red-100 hover:border-red-300 p-6 rounded-3xl transition-all active:scale-95 group shadow-sm"
                    >
                        <span className="block text-xl font-black text-red-500">{categoryB}</span>
                    </button>
                </div>

                {feedback && (
                    <div className="absolute top-28 px-6 py-2 bg-white shadow-xl rounded-full font-black text-lg text-slate-800 animate-bounce-in z-20">
                        {feedback}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-[#F8F9FA] rounded-[3rem] shadow-2xl w-full max-w-3xl h-[85vh] md:h-[700px] overflow-hidden relative flex flex-col border-8 border-white/20">
                
                {/* Header */}
                <div className="px-8 pt-8 pb-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="text-3xl filter drop-shadow-sm">{activity.icon}</div>
                        <h2 className="text-xl font-black text-slate-800 tracking-tight">{activity.title}</h2>
                    </div>
                    <button 
                        onClick={onClose}
                        className="w-10 h-10 bg-white hover:bg-slate-100 rounded-full flex items-center justify-center transition-colors text-slate-400 hover:text-slate-600 shadow-sm"
                    >
                        <X size={20} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 relative overflow-y-auto">
                    {!isComplete && (
                        <>
                            {activity.type === 'story' && renderStory()}
                            {activity.type === 'flashcards' && renderFlashcards()}
                            {activity.type === 'quiz' && renderQuiz()}
                            {activity.type === 'sorting' && renderSorting()}
                            {activity.type === 'game' && (
                                <ToddlerGameEngine 
                                    activity={activity} 
                                    onComplete={() => {
                                        playSound('complete');
                                        setIsComplete(true);
                                    }} 
                                />
                            )}
                        </>
                    )}

                    {/* Completion Screen */}
                    {isComplete && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-10 animate-in zoom-in duration-500 rounded-[3rem]">
                            {activity.type === 'story' ? (
                                <BookOpen size={80} className="text-blue-400 drop-shadow-lg mb-6 animate-bounce" />
                            ) : (
                                <Trophy size={80} className="text-yellow-400 drop-shadow-lg mb-6 animate-bounce" fill="currentColor" />
                            )}
                            <h2 className="text-4xl font-black text-slate-800 mb-2">
                                {activity.type === 'story' ? 'The End!' : 'You Did It!'}
                            </h2>
                            <p className="text-xl text-slate-400 font-bold mb-10">
                                {activity.type === 'story' ? 'What a great story!' : 'Great job!'}
                            </p>
                            <div className="flex gap-4">
                                <button 
                                    onClick={onClose}
                                    className="px-8 py-3 bg-slate-100 text-slate-500 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors"
                                >
                                    Close
                                </button>
                                <button 
                                    onClick={() => {
                                        playSound('click');
                                        setIsComplete(false);
                                        setCurrentIndex(0);
                                        setScore(0);
                                    }}
                                    className="px-8 py-3 bg-green-500 text-white rounded-full font-bold text-lg shadow-lg hover:bg-green-600 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                                >
                                    <RefreshCw size={20} /> Replay
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EarlyChildhoodPlayer;
