
import React, { useState, useEffect, useRef } from 'react';
import { ECActivity } from '../earlyChildhoodContent';
import { playSound } from '../utils/sound';
import { ArrowRight, ArrowLeft, RefreshCw, Trophy, Volume2, Square, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToddlerGameEngineProps {
    activity: ECActivity;
    onComplete: () => void;
}

const ToddlerGameEngine: React.FC<ToddlerGameEngineProps> = ({ activity, onComplete }) => {
    const [roundIndex, setRoundIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [gameState, setGameState] = useState<any>({});
    const { gameId, rounds, items, pairs, buttons, letters, tapsRequired, bins, puzzles, targets } = activity.data;

    // --- GAME LOGIC HELPERS ---

    const handleCorrect = () => {
        playSound('success');
        setFeedback("Yay! 🎉");
        setScore(s => s + 1);
        setTimeout(() => {
            setFeedback(null);
            if (rounds && roundIndex < rounds.length - 1) {
                setRoundIndex(prev => prev + 1);
            } else if (letters && roundIndex < letters.length - 1) {
                setRoundIndex(prev => prev + 1);
            } else if (puzzles && roundIndex < puzzles.length - 1) {
                setRoundIndex(prev => prev + 1);
            } else {
                onComplete();
            }
        }, 1000);
    };

    const handleWrong = () => {
        playSound('error');
        setFeedback("Try again! 🤔");
        setTimeout(() => setFeedback(null), 1000);
    };

    // --- SPECIFIC GAMES ---

    // 1. Color Spin Game
    const renderColorSpin = () => {
        const { colors, items: gameItems } = activity.data;
        const [currentSpinColor, setCurrentSpinColor] = useState<any>(null);
        const [coveredItems, setCoveredItems] = useState<string[]>([]);
        const [isSpinning, setIsSpinning] = useState(false);
        const [rotation, setRotation] = useState(0);

        const handleSpin = () => {
            if (isSpinning) return;
            
            playSound('click');
            setIsSpinning(true);
            
            // Calculate random rotation (at least 5 full spins)
            const spins = 5;
            const randomDegree = Math.floor(Math.random() * 360);
            const totalRotation = rotation + (spins * 360) + randomDegree;
            
            setRotation(totalRotation);

            setTimeout(() => {
                setIsSpinning(false);
                // Calculate which color we landed on
                // The pointer is at the top (0 degrees).
                // The wheel rotates clockwise.
                // The effective angle at the top is (360 - (totalRotation % 360)) % 360.
                const effectiveAngle = (360 - (totalRotation % 360)) % 360;
                
                // Each slice is 60 degrees (360 / 6)
                // Index 0 (Red): 0-60
                // Index 1 (Blue): 60-120
                // ...
                const colorIndex = Math.floor(effectiveAngle / 60);
                const landedColor = colors[colorIndex];
                
                setCurrentSpinColor(landedColor);
                playSound('pop');
                
                if ('speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance(`Find something ${landedColor.name}!`);
                    window.speechSynthesis.speak(utterance);
                }
            }, 3000); // 3 seconds spin
        };

        const handleItemClick = (item: any) => {
            if (!currentSpinColor || coveredItems.includes(item.id)) return;

            if (item.color === currentSpinColor.name) {
                playSound('success');
                setCoveredItems([...coveredItems, item.id]);
                setCurrentSpinColor(null); // Reset spin
                
                if (coveredItems.length + 1 === gameItems.length) {
                    setTimeout(handleCorrect, 1000);
                }
            } else {
                handleWrong();
            }
        };

        // Create conic gradient string
        const gradient = `conic-gradient(
            ${colors[0].hex} 0deg 60deg,
            ${colors[1].hex} 60deg 120deg,
            ${colors[2].hex} 120deg 180deg,
            ${colors[3].hex} 180deg 240deg,
            ${colors[4].hex} 240deg 300deg,
            ${colors[5].hex} 300deg 360deg
        )`;

        return (
            <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 p-4">
                {/* Left: The Grid */}
                <div className="flex-1 max-w-md">
                    <div className="bg-white p-4 rounded-[2rem] shadow-xl border-4 border-slate-200">
                        <div className="grid grid-cols-4 gap-2 md:gap-4">
                            {gameItems.map((item: any) => {
                                const isCovered = coveredItems.includes(item.id);
                                const isMatch = currentSpinColor && item.color === currentSpinColor.name;
                                const itemColorObj = colors.find((c: any) => c.name === item.color);
                                
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleItemClick(item)}
                                        disabled={!currentSpinColor || isCovered}
                                        className={`
                                            aspect-square rounded-xl flex items-center justify-center text-4xl md:text-5xl relative overflow-hidden transition-all
                                            ${isCovered ? 'cursor-default' : ''}
                                            ${!isCovered && isMatch ? 'animate-pulse ring-4 ring-yellow-400 z-10' : ''}
                                            ${!isCovered && !currentSpinColor ? 'opacity-50' : ''}
                                            bg-slate-50 border-2 border-slate-100
                                        `}
                                    >
                                        {item.content}
                                        {isCovered && (
                                            <div className={`absolute inset-0 ${itemColorObj.class} flex items-center justify-center opacity-90`}>
                                                <CheckCircle2 className="text-white w-8 h-8" />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right: The Spinner */}
                <div className="flex flex-col items-center gap-6">
                    <div className="relative w-64 h-64">
                        {/* Pointer */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 text-slate-800 filter drop-shadow-lg">
                            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-slate-800"></div>
                        </div>
                        
                        {/* Wheel */}
                        <div 
                            className="w-full h-full rounded-full shadow-2xl border-8 border-white transition-transform duration-[3000ms] ease-out"
                            style={{ 
                                background: gradient,
                                transform: `rotate(${rotation}deg)` 
                            }}
                        >
                            {/* Center Cap */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md z-10"></div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-black text-slate-800 mb-2 h-8">
                            {currentSpinColor ? (
                                <span className={currentSpinColor.textClass}>Find {currentSpinColor.name}!</span>
                            ) : (
                                isSpinning ? "Spinning..." : "Spin to Play!"
                            )}
                        </h3>
                        <button
                            onClick={handleSpin}
                            disabled={isSpinning || currentSpinColor !== null}
                            className={`
                                px-8 py-3 rounded-full font-bold text-xl shadow-lg transition-all flex items-center gap-2
                                ${isSpinning || currentSpinColor !== null 
                                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                                    : 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105'}
                            `}
                        >
                            <RefreshCw className={isSpinning ? "animate-spin" : ""} />
                            {isSpinning ? "Spinning..." : "SPIN"}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // 14. Alphabet Explorer
    const renderAlphabetExplorer = () => {
        const letter = letters[roundIndex];
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex items-center gap-12 mb-12">
                    <div className="text-[12rem] font-black text-rose-500 animate-in slide-in-from-left-12 duration-500">
                        {letter.char}
                    </div>
                    <div className="text-[10rem] animate-in slide-in-from-right-12 duration-500">
                        {letter.emoji}
                    </div>
                </div>
                <h2 className="text-4xl font-black text-slate-800 mb-12">
                    {letter.char} is for {letter.word}!
                </h2>
                <div className="flex gap-4">
                    <button 
                        onClick={() => {
                            if ('speechSynthesis' in window) {
                                const utterance = new SpeechSynthesisUtterance(`${letter.char} is for ${letter.word}`);
                                window.speechSynthesis.speak(utterance);
                            }
                        }}
                        className="px-8 py-3 bg-rose-100 text-rose-600 rounded-full font-bold flex items-center gap-2 hover:bg-rose-200 transition-colors"
                    >
                        <Volume2 size={24} /> Listen
                    </button>
                    <button 
                        onClick={handleCorrect}
                        className="px-12 py-3 bg-rose-500 text-white rounded-full font-bold shadow-lg hover:bg-rose-600 transition-all flex items-center gap-2"
                    >
                        Next Letter <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        );
    };

    // 13. Sound Quiz
    const renderSoundQuiz = () => {
        const round = rounds[roundIndex];
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-3xl font-black text-slate-800 mb-8">Which animal says...</h2>
                <button 
                    onClick={() => {
                        if ('speechSynthesis' in window) {
                            const utterance = new SpeechSynthesisUtterance(round.sound);
                            window.speechSynthesis.speak(utterance);
                        }
                    }}
                    className="w-32 h-32 bg-yellow-400 text-white rounded-full flex items-center justify-center shadow-xl mb-12 hover:scale-110 transition-transform"
                >
                    <Volume2 size={64} />
                </button>
                <div className="grid grid-cols-3 gap-6 w-full max-w-md">
                    {round.options.map((opt: string) => (
                        <button
                            key={opt}
                            onClick={() => opt === round.correct ? handleCorrect() : handleWrong()}
                            className="bg-white border-b-4 border-slate-100 hover:border-yellow-300 py-6 rounded-3xl text-xl font-bold text-slate-700 shadow-sm transition-all active:scale-95"
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    // 10. Sorting Drag Game
    const renderSortingDrag = () => {
        const [sortedItems, setSortedItems] = useState<string[]>([]);
        const [currentItemIndex, setCurrentItemIndex] = useState(0);
        const currentItem = items[currentItemIndex];
        
        const binRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

        const handleDragEnd = (event: any, info: any, binId: string) => {
            const binElement = binRefs.current[binId];
            if (binElement) {
                const rect = binElement.getBoundingClientRect();
                const { x, y } = info.point;
                
                if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                    if (currentItem.binId === binId) {
                        playSound('pop');
                        setSortedItems([...sortedItems, currentItem.id]);
                        if (currentItemIndex < items.length - 1) {
                            setCurrentItemIndex(prev => prev + 1);
                        } else {
                            handleCorrect();
                        }
                    } else {
                        handleWrong();
                    }
                }
            }
        };

        return (
            <div className="flex flex-col items-center justify-between h-full py-4">
                <h2 className="text-2xl font-black text-slate-800 mb-4">Drag to the right bin!</h2>
                
                <div className="relative h-48 w-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {currentItem && (
                            <motion.div
                                key={currentItem.id}
                                drag
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, info) => {
                                    bins.forEach((bin: any) => handleDragEnd(e, info, bin.id));
                                }}
                                whileDrag={{ scale: 1.2, zIndex: 50 }}
                                className="w-32 h-32 bg-white rounded-[2rem] shadow-xl flex items-center justify-center text-7xl cursor-grab active:cursor-grabbing border-4 border-white"
                            >
                                {currentItem.content}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex gap-8 w-full px-4">
                    {bins.map((bin: any) => (
                        <div
                            key={bin.id}
                            ref={el => binRefs.current[bin.id] = el}
                            className="flex-1 bg-white/50 border-4 border-dashed border-slate-200 rounded-[2.5rem] p-6 flex flex-col items-center justify-center gap-4 min-h-[200px] transition-colors"
                        >
                            <div className="text-5xl">{bin.icon}</div>
                            <span className="text-xl font-black text-slate-600 uppercase tracking-wider">{bin.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // 8. Matching Drag Game
    const renderMatchingDrag = () => {
        const [matchedIds, setMatchedIds] = useState<string[]>([]);
        const targetRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

        const handleDragEnd = (event: any, info: any, item: any) => {
            const targetId = item.matchId;
            const targetElement = targetRefs.current[targetId];
            
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                const { x, y } = info.point;
                
                if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                    playSound('success');
                    setMatchedIds([...matchedIds, item.id]);
                    if (matchedIds.length + 1 === items.length) {
                        setTimeout(handleCorrect, 500);
                    }
                }
            }
        };

        return (
            <div className="flex flex-col items-center justify-between h-full py-4">
                <h2 className="text-2xl font-black text-slate-800 mb-8">Match them up!</h2>
                
                <div className="flex justify-between w-full px-8 gap-12 flex-1">
                    <div className="flex flex-col justify-around gap-4">
                        {items.map((item: any) => (
                            <div key={item.id} className="relative w-24 h-24">
                                {!matchedIds.includes(item.id) && (
                                    <motion.div
                                        drag
                                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                        dragElastic={1}
                                        onDragEnd={(e, info) => handleDragEnd(e, info, item)}
                                        whileDrag={{ scale: 1.1, zIndex: 50 }}
                                        className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center text-5xl cursor-grab active:cursor-grabbing border-4 border-white"
                                    >
                                        {item.content}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col justify-around gap-4 flex-1 max-w-xs">
                        {targets.map((target: any) => {
                            const isMatched = items.find((it: any) => it.matchId === target.id && matchedIds.includes(it.id));
                            return (
                                <div
                                    key={target.id}
                                    ref={el => targetRefs.current[target.id] = el}
                                    className={`h-24 rounded-3xl border-4 border-dashed flex items-center justify-center transition-all ${
                                        isMatched ? 'bg-green-100 border-green-300' : 'bg-white/30 border-slate-200'
                                    }`}
                                >
                                    {isMatched ? (
                                        <div className="flex items-center gap-4">
                                            <span className="text-5xl">{isMatched.content}</span>
                                            <CheckCircle2 className="text-green-500" />
                                        </div>
                                    ) : (
                                        <span className="text-lg font-black text-slate-400 uppercase">{target.label}</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    // 7. Letter Puzzle Game
    const renderLetterPuzzle = () => {
        const puzzle = puzzles[roundIndex];
        const [isAssembled, setIsAssembled] = useState(false);
        const targetRef = useRef<HTMLDivElement>(null);

        const handleDragEnd = (event: any, info: any) => {
            if (targetRef.current) {
                const rect = targetRef.current.getBoundingClientRect();
                const { x, y } = info.point;
                
                if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                    setIsAssembled(true);
                    setTimeout(() => {
                        setIsAssembled(false);
                        handleCorrect();
                    }, 1500);
                }
            }
        };

        return (
            <div className="flex flex-col items-center justify-center h-full py-4">
                <h2 className="text-3xl font-black text-slate-800 mb-12">Match the letter to the picture!</h2>
                
                <div className="flex items-center gap-12">
                    <div className="w-48 h-48 flex items-center justify-center">
                        {!isAssembled && (
                            <motion.div
                                drag
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                dragElastic={1}
                                onDragEnd={handleDragEnd}
                                whileDrag={{ scale: 1.1, zIndex: 50 }}
                                className="w-40 h-40 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center text-8xl font-black text-blue-500 cursor-grab active:cursor-grabbing border-4 border-white"
                            >
                                {puzzle.letter}
                            </motion.div>
                        )}
                    </div>

                    <div 
                        ref={targetRef}
                        className={`w-64 h-64 rounded-[3rem] border-4 border-dashed flex flex-col items-center justify-center transition-all ${
                            isAssembled ? 'bg-blue-100 border-blue-400 scale-110' : 'bg-white/30 border-slate-200'
                        }`}
                    >
                        <div className="text-9xl mb-2">{puzzle.image}</div>
                        {isAssembled && (
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-black text-blue-600">{puzzle.letter}</span>
                                <span className="text-2xl font-bold text-slate-600">is for {puzzle.word}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // 6. Jigsaw Puzzles
    const renderPuzzles = () => {
        const puzzle = puzzles[roundIndex];
        const rows = puzzle.rows || 2;
        const cols = puzzle.cols || 2;
        const totalPieces = rows * cols;
        
        const [placedPieces, setPlacedPieces] = useState<number[]>([]);
        const [shuffledPieces, setShuffledPieces] = useState<number[]>([]);
        const slotRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

        // Initialize shuffled pieces
        useEffect(() => {
            const pieces = Array.from({ length: totalPieces }, (_, i) => i);
            setShuffledPieces(pieces.sort(() => Math.random() - 0.5));
            setPlacedPieces([]);
        }, [roundIndex, totalPieces]);

        const handleDragEnd = (event: any, info: any, pieceIndex: number) => {
            const slotElement = slotRefs.current[pieceIndex];
            if (slotElement) {
                const rect = slotElement.getBoundingClientRect();
                const slotCenterX = rect.left + rect.width / 2;
                const slotCenterY = rect.top + rect.height / 2;
                
                // Use the pointer position from info.point
                const { x, y } = info.point;
                
                // Calculate distance between pointer and slot center
                const distance = Math.sqrt(
                    Math.pow(x - slotCenterX, 2) + Math.pow(y - slotCenterY, 2)
                );
                
                // Very lenient snapping: if pointer is within 100px of slot center
                if (distance < 100) {
                    playSound('pop');
                    setPlacedPieces(prev => {
                        if (prev.includes(pieceIndex)) return prev;
                        const next = [...prev, pieceIndex];
                        if (next.length === totalPieces) {
                            setTimeout(handleCorrect, 800);
                        }
                        return next;
                    });
                    setShuffledPieces(prev => prev.filter(p => p !== pieceIndex));
                } else {
                    playSound('click');
                }
            }
        };

        const pieceWidth = 140;
        const pieceHeight = 140;

        return (
            <div className="flex flex-col items-center justify-center h-full py-4 px-4 md:px-8 overflow-hidden bg-slate-50/50">
                <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 text-center">Assemble the {puzzle.name}!</h2>
                
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-6xl">
                    {/* The Puzzle Board */}
                    <div 
                        className="relative bg-white rounded-[2.5rem] p-4 shadow-2xl border-4 border-slate-200 z-0"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(${cols}, ${pieceWidth}px)`,
                            gridTemplateRows: `repeat(${rows}, ${pieceHeight}px)`,
                            gap: '4px'
                        }}
                    >
                        {/* Background Guide (Ghost Image) */}
                        <div 
                            className="absolute inset-4 opacity-20 pointer-events-none rounded-2xl overflow-hidden"
                            style={{
                                backgroundImage: `url(${puzzle.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                zIndex: 0
                            }}
                        />

                        {Array.from({ length: totalPieces }).map((_, i) => {
                            const isPlaced = placedPieces.includes(i);
                            const row = Math.floor(i / cols);
                            const col = i % cols;

                            return (
                                <div
                                    key={i}
                                    ref={el => slotRefs.current[i] = el}
                                    className={`relative z-10 w-full h-full rounded-xl border-2 border-slate-100 flex items-center justify-center transition-all ${
                                        isPlaced ? 'bg-transparent border-transparent' : 'bg-slate-50/30'
                                    }`}
                                >
                                    {isPlaced && (
                                        <motion.div
                                            initial={{ scale: 1.1, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="w-full h-full rounded-lg shadow-sm"
                                            style={{
                                                backgroundImage: `url(${puzzle.image})`,
                                                backgroundSize: `${cols * 100}% ${rows * 100}%`,
                                                backgroundPosition: `${cols > 1 ? (col / (cols - 1)) * 100 : 0}% ${rows > 1 ? (row / (rows - 1)) * 100 : 0}%`,
                                                opacity: 1
                                            }}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* The Piece Tray */}
                    <div className="flex-1 min-h-[300px] lg:min-h-[450px] w-full bg-white/80 rounded-[3rem] p-8 md:p-12 border-4 border-dashed border-slate-200 flex flex-wrap items-center justify-center gap-6 md:gap-10 shadow-inner z-10">
                        <AnimatePresence>
                            {shuffledPieces.map((pieceIndex) => {
                                const row = Math.floor(pieceIndex / cols);
                                const col = pieceIndex % cols;
                                
                                return (
                                    <motion.div
                                        key={pieceIndex}
                                        layout
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        drag
                                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                        dragElastic={0.9}
                                        onDragEnd={(e, info) => handleDragEnd(e, info, pieceIndex)}
                                        whileDrag={{ 
                                            scale: 1.15, 
                                            zIndex: 1000, 
                                            opacity: 1,
                                            boxShadow: "0 30px 60px -12px rgb(0 0 0 / 0.4)" 
                                        }}
                                        className="w-[110px] h-[110px] md:w-[140px] md:h-[140px] bg-white rounded-2xl shadow-xl cursor-grab active:cursor-grabbing border-4 border-white overflow-hidden ring-2 ring-slate-100 relative"
                                        style={{
                                            backgroundImage: `url(${puzzle.image})`,
                                            backgroundSize: `${cols * 100}% ${rows * 100}%`,
                                            backgroundPosition: `${cols > 1 ? (col / (cols - 1)) * 100 : 0}% ${rows > 1 ? (row / (rows - 1)) * 100 : 0}%`,
                                            opacity: 1
                                        }}
                                    />
                                );
                            })}
                        </AnimatePresence>
                        
                        {shuffledPieces.length === 0 && placedPieces.length === totalPieces && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <Trophy size={100} className="text-yellow-400 mx-auto mb-6 drop-shadow-xl" />
                                <p className="text-3xl font-black text-slate-800 uppercase tracking-widest">Puzzle Complete!</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // 4. Tracing Game
    const renderTracing = () => {
        const letter = letters[roundIndex];
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-3xl font-black text-slate-800 mb-12">Trace the letter {letter}!</h2>
                <div className="relative w-64 h-64 bg-white rounded-[3rem] shadow-xl flex items-center justify-center border-4 border-white mb-12">
                    <span className="text-[10rem] font-black text-slate-100 select-none">
                        {letter}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button 
                            onClick={handleCorrect}
                            className="w-full h-full rounded-[3rem] flex items-center justify-center text-[10rem] font-black text-yellow-500 opacity-0 hover:opacity-100 transition-opacity cursor-crosshair"
                        >
                            {letter}
                        </button>
                    </div>
                </div>
                <p className="text-slate-400 font-bold">Use your finger to trace!</p>
            </div>
        );
    };

    // 1. Colors Game
    const renderColors = () => {
        const round = rounds[roundIndex];
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-3xl font-black text-slate-800 mb-8">Find the {round.target}!</h2>
                <div className="text-9xl mb-12 animate-bounce-subtle">{round.emoji}</div>
                <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                    {round.options.map((opt: string) => (
                        <button
                            key={opt}
                            onClick={() => opt === round.target ? handleCorrect() : handleWrong()}
                            className="bg-white border-b-4 border-slate-100 hover:border-pink-300 py-6 rounded-3xl text-xl font-bold text-slate-700 shadow-sm transition-all active:scale-95"
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    // 2. Counting Game
    const renderCounting = () => {
        const round = rounds[roundIndex];
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-3xl font-black text-slate-800 mb-8">How many?</h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-md">
                    {Array.from({ length: round.count }).map((_, i) => (
                        <div key={i} className="text-6xl animate-in zoom-in duration-300" style={{ animationDelay: `${i * 100}ms` }}>
                            {round.emoji}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                    {round.options.map((opt: string) => (
                        <button
                            key={opt}
                            onClick={() => parseInt(opt) === round.count ? handleCorrect() : handleWrong()}
                            className="bg-white border-b-4 border-slate-100 hover:border-blue-300 py-6 rounded-3xl text-2xl font-black text-slate-700 shadow-sm transition-all active:scale-95"
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    // 3. Eggs Game (Tap targets)
    const renderEggs = () => {
        const targetCount = items.filter((i: any) => i.isTarget).length;
        const [foundCount, setFoundCount] = useState(0);
        const [tappedIndices, setTappedIndices] = useState<number[]>([]);

        const handleEggTap = (index: number, isTarget: boolean) => {
            if (tappedIndices.includes(index)) return;
            
            if (isTarget) {
                playSound('pop');
                setTappedIndices([...tappedIndices, index]);
                const newFound = foundCount + 1;
                setFoundCount(newFound);
                if (newFound === targetCount) {
                    handleCorrect();
                }
            } else {
                handleWrong();
            }
        };

        return (
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-3xl font-black text-slate-800 mb-4">{activity.data.instruction}</h2>
                <p className="text-slate-400 font-bold mb-8">Found: {foundCount} / {targetCount}</p>
                <div className="grid grid-cols-3 gap-6">
                    {items.map((item: any, i: number) => (
                        <button
                            key={i}
                            onClick={() => handleEggTap(i, item.isTarget)}
                            className={`text-8xl transition-all transform active:scale-90 ${tappedIndices.includes(i) ? 'opacity-20 scale-75 grayscale' : 'hover:scale-110'} ${item.color}`}
                        >
                            {item.content}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    // 5. Jack in a Box
    const renderJackInBox = () => {
        const [taps, setTaps] = useState(0);
        const [popped, setPopped] = useState(false);

        const handleTap = () => {
            if (popped) return;
            playSound('click');
            const newTaps = taps + 1;
            setTaps(newTaps);
            if (newTaps >= tapsRequired) {
                playSound('complete');
                setPopped(true);
                setTimeout(onComplete, 2000);
            }
        };

        return (
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-3xl font-black text-slate-800 mb-12">Tap the box!</h2>
                <button 
                    onClick={handleTap}
                    className={`text-[10rem] transition-all transform active:scale-95 ${popped ? 'animate-bounce' : 'animate-pulse'}`}
                >
                    {popped ? '🤡' : '🎁'}
                </button>
                {!popped && (
                    <div className="mt-12 w-full max-w-xs bg-slate-100 h-4 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-red-500 transition-all duration-300" 
                            style={{ width: `${(taps / tapsRequired) * 100}%` }}
                        />
                    </div>
                )}
            </div>
        );
    };

    // 9. Memory Game
    const renderMemory = () => {
        const [cards, setCards] = useState<any[]>([]);
        const [flipped, setFlipped] = useState<number[]>([]);
        const [matched, setMatched] = useState<number[]>([]);

        useEffect(() => {
            const gameItems = [...activity.data.items, ...activity.data.items]
                .sort(() => Math.random() - 0.5)
                .map((content, id) => ({ id, content }));
            setCards(gameItems);
        }, []);

        const handleFlip = (index: number) => {
            if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;
            
            playSound('pop');
            const newFlipped = [...flipped, index];
            setFlipped(newFlipped);

            if (newFlipped.length === 2) {
                const [first, second] = newFlipped;
                if (cards[first].content === cards[second].content) {
                    playSound('success');
                    setMatched([...matched, first, second]);
                    setFlipped([]);
                    if (matched.length + 2 === cards.length) {
                        setTimeout(handleCorrect, 1000);
                    }
                } else {
                    setTimeout(() => {
                        setFlipped([]);
                    }, 1000);
                }
            }
        };

        return (
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-3xl font-black text-slate-800 mb-8">Find the pairs!</h2>
                <div className="grid grid-cols-4 gap-3">
                    {cards.map((card, i) => (
                        <button
                            key={i}
                            onClick={() => handleFlip(i)}
                            className={`w-16 h-20 md:w-20 md:h-24 rounded-2xl flex items-center justify-center text-4xl transition-all transform ${
                                flipped.includes(i) || matched.includes(i) 
                                ? 'bg-white rotate-y-180 shadow-md' 
                                : 'bg-red-400 text-white shadow-inner'
                            }`}
                        >
                            {(flipped.includes(i) || matched.includes(i)) ? card.content : '?'}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    // 11. Odd One Out
    const renderOddOneOut = () => {
        const round = rounds[roundIndex];
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-3xl font-black text-slate-800 mb-12">Which one is different?</h2>
                <div className="flex gap-8">
                    {round.items.map((item: string, i: number) => (
                        <button
                            key={i}
                            onClick={() => item === round.target ? handleCorrect() : handleWrong()}
                            className="text-8xl hover:scale-110 transition-transform transform active:scale-90"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    // 12. Sound Board
    const renderSoundBoard = () => {
        const [playedCount, setPlayedCount] = useState(0);
        const [playedIndices, setPlayedIndices] = useState<number[]>([]);

        const handlePress = (index: number, text: string) => {
            playSound('pop');
            if (!playedIndices.includes(index)) {
                setPlayedIndices([...playedIndices, index]);
                setPlayedCount(prev => prev + 1);
            }
            
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(text);
                window.speechSynthesis.speak(utterance);
            }
        };

        return (
            <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-3xl font-black text-slate-800 mb-12">Tap to hear!</h2>
                <div className="grid grid-cols-3 gap-6">
                    {buttons.map((btn: any, i: number) => (
                        <button
                            key={i}
                            onClick={() => handlePress(i, btn.sound)}
                            className={`w-32 h-32 bg-white rounded-[2rem] shadow-lg flex flex-col items-center justify-center gap-2 border-b-8 transition-all active:scale-95 ${playedIndices.includes(i) ? 'border-orange-400' : 'border-slate-100'}`}
                        >
                            <span className="text-5xl">{btn.icon}</span>
                            <span className="text-xs font-black text-slate-400 uppercase">{btn.sound}</span>
                        </button>
                    ))}
                </div>
                <button 
                    onClick={onComplete}
                    className="mt-12 px-8 py-3 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-800 transition-all"
                >
                    I'm Done!
                </button>
            </div>
        );
    };

    // Default Fallback
    const renderDefault = () => (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-9xl mb-8 animate-bounce-subtle">{activity.icon}</div>
            <h2 className="text-3xl font-black text-slate-800 mb-4">{activity.title}</h2>
            <p className="text-slate-400 font-bold mb-12">This game is ready to play!</p>
            <button 
                onClick={onComplete}
                className="px-12 py-4 bg-treehouse-green text-white rounded-full font-black text-xl shadow-xl hover:scale-105 transition-all"
            >
                START GAME
            </button>
        </div>
    );

    return (
        <div className="h-full w-full relative">
            {gameId === 'color-spin' && renderColorSpin()}
            {gameId === 'counting' && renderCounting()}
            {gameId === 'jack-in-box' && renderJackInBox()}
            {gameId === 'memory' && renderMemory()}
            {gameId === 'odd-one-out' && renderOddOneOut()}
            {gameId === 'sound-board' && renderSoundBoard()}
            {gameId === 'sorting-drag' && renderSortingDrag()}
            {gameId === 'matching-drag' && renderMatchingDrag()}
            {gameId === 'puzzles' && renderPuzzles()}
            {gameId === 'sound-quiz' && renderSoundQuiz()}
            {gameId === 'alphabet-explorer' && renderAlphabetExplorer()}
            {gameId === 'tracing' && renderTracing()}
            
            {/* Fallback for others to keep them playable */}
            {!['color-spin', 'counting', 'jack-in-box', 'memory', 'odd-one-out', 'sound-board', 'sorting-drag', 'matching-drag', 'puzzles', 'sound-quiz', 'alphabet-explorer', 'tracing'].includes(gameId) && renderDefault()}

            {feedback && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 py-5 bg-white shadow-2xl rounded-[2rem] font-black text-4xl text-slate-800 animate-bounce-in z-50 border-4 border-yellow-400">
                    {feedback}
                </div>
            )}
        </div>
    );
};


export default ToddlerGameEngine;
