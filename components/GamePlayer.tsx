
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameItem } from '../types/types';
import { X, Trophy, RotateCcw, Play, CheckCircle } from 'lucide-react';
import { playSound } from '../utils/sound';

interface GamePlayerProps {
  game: GameItem;
  onClose: () => void;
}

// --- SHARED TYPES ---
type GameStatus = 'menu' | 'playing' | 'gameover';

// --- DATA: TRIVIA QUESTIONS ---
const TRIVIA_DATA: Record<string, { q: string; a: string[]; c: number }[]> = {
    'Vocabulary': [
        { q: "What is the opposite of 'Hot'?", a: ["Warm", "Cold", "Spicy", "Dry"], c: 1 },
        { q: "Which word describes a 'Bunny'?", a: ["Fluffy", "Scaly", "Hard", "Sharp"], c: 0 },
        { q: "What is a synonym for 'Big'?", a: ["Tiny", "Small", "Huge", "Soft"], c: 2 },
        { q: "Which is a compound word?", a: ["Cat", "Pancake", "Dog", "Fish"], c: 1 },
        { q: "Spell the color of the sky.", a: ["B-L-U-E", "G-R-E-E-N", "R-E-D", "P-I-N-K"], c: 0 },
    ],
    'Rhymes': [
        { q: "What rhymes with 'Cat'?", a: ["Dog", "Hat", "Fish", "Car"], c: 1 },
        { q: "What rhymes with 'Moon'?", a: ["Sun", "Spoon", "Star", "Sky"], c: 1 },
        { q: "What rhymes with 'Tree'?", a: ["Bee", "Log", "Ant", "Bus"], c: 0 },
        { q: "What rhymes with 'Frog'?", a: ["Log", "Toad", "Fly", "Water"], c: 0 },
        { q: "What rhymes with 'House'?", a: ["Mouse", "Home", "Door", "Roof"], c: 0 },
    ],
    'Logic': [
        { q: "What happens first?", a: ["Wake up", "Eat Lunch", "Go to Sleep", "Watch Sunset"], c: 0 },
        { q: "Which is heaviest?", a: ["Feather", "Pencil", "Elephant", "Apple"], c: 2 },
        { q: "If you mix Red and Yellow, you get...", a: ["Blue", "Green", "Orange", "Purple"], c: 2 },
        { q: "Which comes next? Morning, Afternoon...", a: ["Night", "Evening", "Breakfast", "Lunch"], c: 1 },
        { q: "Complete the pattern: A, B, A, B, __", a: ["B", "C", "A", "D"], c: 2 },
    ],
    'Space': [
        { q: "Which planet is known as the Red Planet?", a: ["Venus", "Mars", "Jupiter", "Saturn"], c: 1 },
        { q: "What gives us light in the day?", a: ["Moon", "Sun", "Stars", "Comet"], c: 1 },
        { q: "How many moons does Earth have?", a: ["1", "2", "3", "10"], c: 0 },
        { q: "Which planet has rings?", a: ["Mercury", "Mars", "Saturn", "Venus"], c: 2 },
    ],
    'History': [
        { q: "Who built the Pyramids?", a: ["Egyptians", "Romans", "Vikings", "Knights"], c: 0 },
        { q: "What did knights wear for protection?", a: ["Jeans", "Armor", "Robes", "T-Shirts"], c: 1 },
        { q: "Who was the first US President?", a: ["Lincoln", "Washington", "Jefferson", "Adams"], c: 1 },
    ],
    'Geography': [
        { q: "Which is a continent?", a: ["France", "Africa", "London", "Texas"], c: 1 },
        { q: "Where do penguins live?", a: ["Desert", "Antarctica", "Forest", "City"], c: 1 },
        { q: "What is the largest ocean?", a: ["Atlantic", "Pacific", "Indian", "Arctic"], c: 1 },
    ],
    'General': [
        { q: "How many legs does a spider have?", a: ["6", "8", "10", "12"], c: 1 },
        { q: "What do bees make?", a: ["Milk", "Jam", "Honey", "Bread"], c: 2 },
        { q: "What colors are on a zebra?", a: ["Red & Blue", "Black & White", "Green & Yellow", "Pink & Purple"], c: 1 },
    ]
};

// --- MATH GAME ENGINE ---
const MathGame = ({ onGameOver }: { onGameOver: (score: number) => void }) => {
  const [question, setQuestion] = useState<{ text: string; answers: number[]; correctIndex: number } | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  const generateQuestion = useCallback(() => {
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    
    // Simplify subtraction to avoid negatives for kids
    if (operator === '-' && b > a) [a, b] = [b, a];

    let correct = 0;
    if (operator === '+') correct = a + b;
    if (operator === '-') correct = a - b;
    if (operator === '*') correct = a * b;

    // Generate wrong answers
    const answers = new Set<number>([correct]);
    while (answers.size < 4) {
      const offset = Math.floor(Math.random() * 10) - 5;
      const val = correct + offset;
      if (val >= 0 && val !== correct) answers.add(val);
    }

    const answersArray = Array.from(answers).sort(() => Math.random() - 0.5);
    setQuestion({
      text: `${a} ${operator} ${b} = ?`,
      answers: answersArray,
      correctIndex: answersArray.indexOf(correct),
    });
  }, []);

  useEffect(() => {
    generateQuestion();
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onGameOver(score);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onGameOver, score, generateQuestion]);

  const handleAnswer = (index: number) => {
    if (index === question?.correctIndex) {
      playSound('success');
      setScore(s => s + 100);
      generateQuestion();
    } else {
      playSound('error');
      generateQuestion();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-md mx-auto">
      <div className="flex justify-between w-full mb-8 font-bold text-xl text-slate-700">
        <span>Score: {score}</span>
        <span className="text-orange-500">Time: {timeLeft}s</span>
      </div>
      
      <div className="bg-white p-8 rounded-3xl shadow-lg border-b-8 border-stone-200 w-full text-center mb-8">
        <h3 className="text-5xl font-black text-slate-800">{question?.text}</h3>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {question?.answers.map((ans, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 border-b-4 border-blue-300 active:border-b-0 active:translate-y-1 text-3xl font-bold py-6 rounded-2xl transition-all"
          >
            {ans}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- TRIVIA GAME ENGINE ---
const TriviaGame = ({ onGameOver, topic = 'General' }: { onGameOver: (score: number) => void; topic?: string }) => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [currentQ, setCurrentQ] = useState<{q: string, a: string[], c: number} | null>(null);

    // Get questions for this topic, fallback to General if empty or undefined
    const questionsPool = TRIVIA_DATA[topic] || TRIVIA_DATA['General'];

    const pickQuestion = useCallback(() => {
        const random = questionsPool[Math.floor(Math.random() * questionsPool.length)];
        setCurrentQ(random);
    }, [questionsPool]);

    useEffect(() => {
        pickQuestion();
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    onGameOver(score);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [onGameOver, score, pickQuestion]);

    const handleAnswer = (idx: number) => {
        if (currentQ && idx === currentQ.c) {
            playSound('success');
            setScore(s => s + 150);
        } else {
            playSound('error');
        }
        pickQuestion();
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full max-w-lg mx-auto">
            <div className="flex justify-between w-full mb-6 font-bold text-xl text-slate-700">
                <span>Score: {score}</span>
                <span className="text-orange-500">Time: {timeLeft}s</span>
            </div>
            
            <div className="bg-white p-6 rounded-3xl shadow-lg border-b-8 border-stone-200 w-full text-center mb-6 min-h-[160px] flex flex-col items-center justify-center relative overflow-hidden">
                <span className="absolute top-2 right-4 text-xs font-bold text-slate-300 uppercase tracking-widest">{topic} Trivia</span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 leading-tight z-10">{currentQ?.q}</h3>
            </div>

            <div className="grid grid-cols-1 gap-3 w-full">
                {currentQ?.a.map((ans, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        className="bg-indigo-100 hover:bg-indigo-200 text-indigo-900 border-b-4 border-indigo-300 active:border-b-0 active:translate-y-1 text-xl font-bold py-4 rounded-2xl transition-all"
                    >
                        {ans}
                    </button>
                ))}
            </div>
        </div>
    );
};

// --- MEMORY GAME ENGINE ---
const MemoryGame = ({ onGameOver, theme = 'animals' }: { onGameOver: (score: number) => void, theme?: 'animals' | 'artifacts' }) => {
  const [cards, setCards] = useState<{ id: number; emoji: string; isFlipped: boolean; isMatched: boolean }[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    const animalEmojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
    const artifactEmojis = ['🏺', '⚱️', '🗿', '💎', '📜', '🛡️', '⚔️', '👑'];
    
    const selectedEmojis = theme === 'artifacts' ? artifactEmojis : animalEmojis;

    const deck = [...selectedEmojis, ...selectedEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, idx) => ({ id: idx, emoji, isFlipped: false, isMatched: false }));
    setCards(deck);
  }, [theme]);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [first, second] = flippedIndices;
      if (cards[first].emoji === cards[second].emoji) {
        // Match
        playSound('success');
        setCards(prev => prev.map((card, idx) => 
          idx === first || idx === second ? { ...card, isMatched: true } : card
        ));
        setFlippedIndices([]);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map((card, idx) => 
            idx === first || idx === second ? { ...card, isFlipped: false } : card
          ));
          setFlippedIndices([]);
        }, 1000);
      }
      setMoves(m => m + 1);
    }
  }, [flippedIndices, cards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(c => c.isMatched)) {
        const finalScore = Math.max(0, 1000 - (moves * 20));
        setTimeout(() => onGameOver(finalScore), 500);
    }
  }, [cards, moves, onGameOver]);

  const handleCardClick = (index: number) => {
    if (flippedIndices.length < 2 && !cards[index].isFlipped && !cards[index].isMatched) {
      playSound('pop');
      setCards(prev => prev.map((c, i) => i === index ? { ...c, isFlipped: true } : c));
      setFlippedIndices(prev => [...prev, index]);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="mb-6 font-bold text-xl text-slate-700">Moves: {moves}</div>
      <div className="grid grid-cols-4 gap-3 md:gap-4 aspect-square w-full max-w-md">
        {cards.map((card, idx) => (
          <button
            key={idx}
            onClick={() => handleCardClick(idx)}
            className={`rounded-xl flex items-center justify-center text-4xl shadow-sm transition-all duration-300 transform ${
              card.isFlipped || card.isMatched 
                ? 'bg-white border-2 border-purple-200 rotate-0' 
                : 'bg-purple-500 border-b-4 border-purple-700 rotate-y-180'
            }`}
            style={{ perspective: '1000px' }}
          >
            {(card.isFlipped || card.isMatched) ? card.emoji : '❓'}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- SNAKE GAME ENGINE ---
const SnakeGame = ({ onGameOver }: { onGameOver: (score: number) => void }) => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState([0, -1]); // Up
  const [score, setScore] = useState(0);
  const directionRef = useRef(direction);

  const GRID_SIZE = 20;
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        const [dx, dy] = directionRef.current;
        let newDir = [dx, dy];
        
        if (e.key === 'ArrowUp' && dy !== 1) newDir = [0, -1];
        if (e.key === 'ArrowDown' && dy !== -1) newDir = [0, 1];
        if (e.key === 'ArrowLeft' && dx !== 1) newDir = [-1, 0];
        if (e.key === 'ArrowRight' && dx !== -1) newDir = [1, 0];

        directionRef.current = newDir;
        setDirection(newDir);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const moveSnake = () => {
      setSnake(prev => {
        const newHead = [prev[0][0] + directionRef.current[0], prev[0][1] + directionRef.current[1]];
        
        if (newHead[0] < 0 || newHead[0] >= GRID_SIZE || newHead[1] < 0 || newHead[1] >= GRID_SIZE) {
            onGameOver(score);
            return prev;
        }

        for (let segment of prev) {
            if (newHead[0] === segment[0] && newHead[1] === segment[1]) {
                onGameOver(score);
                return prev;
            }
        }

        const newSnake = [newHead, ...prev];
        
        if (newHead[0] === food[0] && newHead[1] === food[1]) {
            playSound('pop');
            setScore(s => s + 50);
            setFood([Math.floor(Math.random() * GRID_SIZE), Math.floor(Math.random() * GRID_SIZE)]);
        } else {
            newSnake.pop();
        }
        
        return newSnake;
      });
    };

    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  }, [food, score, onGameOver]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="mb-4 font-bold text-xl text-slate-700">Score: {score}</div>
      <div 
        className="bg-stone-800 rounded-lg shadow-inner relative"
        style={{ 
            width: '300px', 
            height: '300px', 
            display: 'grid', 
            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`, 
            gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)` 
        }}
      >
        {snake.map((segment, idx) => (
            <div 
                key={idx} 
                className="bg-green-500 rounded-sm border border-green-600"
                style={{ gridColumnStart: segment[0] + 1, gridRowStart: segment[1] + 1 }}
            />
        ))}
        <div 
            className="bg-red-500 rounded-full animate-pulse"
            style={{ gridColumnStart: food[0] + 1, gridRowStart: food[1] + 1 }}
        />
      </div>
      <p className="mt-4 text-slate-500 text-sm">Use Arrow Keys to Move</p>
      
      {/* Mobile Controls */}
      <div className="md:hidden grid grid-cols-3 gap-2 mt-4">
        <div></div>
        <button className="bg-slate-200 p-4 rounded-xl" onClick={() => directionRef.current = [0, -1]}>⬆️</button>
        <div></div>
        <button className="bg-slate-200 p-4 rounded-xl" onClick={() => directionRef.current = [-1, 0]}>⬅️</button>
        <button className="bg-slate-200 p-4 rounded-xl" onClick={() => directionRef.current = [0, 1]}>⬇️</button>
        <button className="bg-slate-200 p-4 rounded-xl" onClick={() => directionRef.current = [1, 0]}>➡️</button>
      </div>
    </div>
  );
};

// --- WHACK-A-MOLE ENGINE (Reflex) ---
const WhackAMole = ({ onGameOver, target = '😵' }: { onGameOver: (score: number) => void; target?: string }) => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [activeHole, setActiveHole] = useState<number | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    onGameOver(score);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        const moleTimer = setInterval(() => {
            setActiveHole(Math.floor(Math.random() * 9));
        }, 800);

        return () => {
            clearInterval(timer);
            clearInterval(moleTimer);
        }
    }, [onGameOver, score]);

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex justify-between w-full mb-6 font-bold text-xl text-slate-700 max-w-sm">
                <span>Score: {score}</span>
                <span className="text-red-500">Time: {timeLeft}s</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((hole) => (
                    <div key={hole} className="w-20 h-20 md:w-24 md:h-24 bg-stone-300 rounded-full shadow-inner relative overflow-hidden ring-4 ring-stone-200">
                        {activeHole === hole && (
                            <button 
                                onMouseDown={() => {
                                    playSound('pop');
                                    setScore(s => s + 50);
                                    setActiveHole(null);
                                }}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 bg-transparent rounded-full animate-bounce-in cursor-pointer flex items-center justify-center text-4xl md:text-5xl select-none hover:scale-110 active:scale-95 transition-transform"
                            >
                                {target}
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <p className="mt-6 text-slate-500 font-bold">Tap the targets!</p>
        </div>
    )
}

// --- MAIN WRAPPER ---
const GamePlayer: React.FC<GamePlayerProps> = ({ game, onClose }) => {
  const [status, setStatus] = useState<GameStatus>('menu');
  const [finalScore, setFinalScore] = useState(0);

  const handleStart = () => {
    playSound('click');
    setStatus('playing');
  };

  const handleGameOver = (score: number) => {
    playSound('complete');
    setFinalScore(score);
    setStatus('gameover');
  };

  const Icon = game.icon;

  // Decide which engine to use based on category or ID
  const renderEngine = () => {
    // 1. Check for specific Subject Page Activities based on generated ID format
    if (game.id.startsWith('activity-')) {
        const parts = game.id.split('-');
        // ID Format: activity-{subject}-{index}
        // Example: activity-reading-0
        if (parts.length >= 3) {
            const subject = parts[1];
            const index = parseInt(parts[2]);

            if (subject === 'reading') {
                if (index === 0) return <TriviaGame onGameOver={handleGameOver} topic="Vocabulary" />; // Word Wizard
                if (index === 1) return <TriviaGame onGameOver={handleGameOver} topic="Logic" />; // Story Sequence (Logic)
                if (index === 2) return <TriviaGame onGameOver={handleGameOver} topic="Rhymes" />; // Rhyme Time
            }
            
            if (subject === 'math') {
                // Pizza Fraction (0), Number Ninja (1), Geometry (2)
                return <MathGame onGameOver={handleGameOver} />; 
            }

            if (subject === 'science') {
                if (index === 0) return <WhackAMole onGameOver={handleGameOver} target="🌋" />; // Volcano
                if (index === 1) return <WhackAMole onGameOver={handleGameOver} target="🐞" />; // Bug Hunter
                if (index === 2) return <TriviaGame onGameOver={handleGameOver} topic="Space" />; // Solar System
            }

            if (subject === 'social-studies') {
                 if (index === 0) return <TriviaGame onGameOver={handleGameOver} topic="History" />; // Time Traveler
                 if (index === 1) return <TriviaGame onGameOver={handleGameOver} topic="Geography" />; // Map Maker
                 if (index === 2) return <MemoryGame onGameOver={handleGameOver} theme="artifacts" />; // Community (close to artifacts)
            }
        }
    }

    // 2. Default Arcade Game Logic (by Category or ID)
    if (game.category === 'Math') return <MathGame onGameOver={handleGameOver} />;
    
    // Logic & Reading -> Memory
    if (game.category === 'Logic' || game.category === 'Reading') {
         return <MemoryGame onGameOver={handleGameOver} />;
    }

    // Specific Snake Games
    if (['3', '5', '11'].includes(game.id)) return <SnakeGame onGameOver={handleGameOver} />; 

    // Science Split to make them distinct
    if (game.category === 'Science') {
        if (game.id === '15') return <TriviaGame onGameOver={handleGameOver} topic="Geography" />; // Globe Trotter
        if (game.id === '27') return <MemoryGame onGameOver={handleGameOver} theme="artifacts" />; // Artifact Hunter
        
        // Custom Whack-a-mole targets for other Science games
        let target = '🧪';
        if (game.id === '13') target = '🐞'; // Critter Catcher
        if (game.id === '22') target = '🐦'; // Bird Spotter
        if (game.id === '23') target = '🐟'; // Fish Feeder
        if (game.id === '28') target = '🫧'; // Bubble Pop Lab
        return <WhackAMole onGameOver={handleGameOver} target={target} />;
    }

    // Fun/Other Whack-a-mole variants
    let target = '😵';
    if (game.id === '21') target = '🍎'; // Fruit Frenzy
    if (game.id === '24') target = '👻'; // Ghost Buster
    if (game.id === '25') target = '🐶'; // Puppy Petting
    if (game.id === '19') target = '☄️'; // Asteroid Blaster
    
    return <WhackAMole onGameOver={handleGameOver} target={target} />;
  };

  const getInstructions = () => {
      // Custom instructions for subject activities
      if (game.title.includes("Wizard")) return "Answer the word riddles correctly!";
      if (game.title.includes("Rhyme")) return "Find the word that rhymes!";
      if (game.title.includes("Sequence") || game.title.includes("Logic")) return "What happens next? Choose the logical answer.";
      if (game.title.includes("Volcano")) return "Tap the lava blobs before they erupt!";
      
      if (game.category === 'Math') return "Solve the math problems before time runs out!";
      if (game.category === 'Logic' || game.category === 'Reading') return "Find all the matching pairs!";
      if (['3', '5', '11'].includes(game.id)) return "Eat the food, don't hit the walls!";
      if (game.id === '15') return "Answer geography questions to travel the world!";
      if (game.id === '27') return "Find matching ancient artifacts!";
      return "Tap the targets as fast as you can!";
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden relative border-8 border-white">
        {/* Header */}
        <div className={`p-4 flex justify-between items-center text-white ${game.color}`}>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl">
               <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold">{game.title}</h3>
          </div>
          <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Game Area Container */}
        <div className="p-4 md:p-8 h-[500px] flex flex-col items-center justify-center bg-stone-50 relative overflow-hidden">
          
          {/* MENU STATE */}
          {status === 'menu' && (
            <div className="text-center space-y-6 animate-in slide-in-from-bottom-8">
              <div className={`w-32 h-32 rounded-[2rem] ${game.color} flex items-center justify-center mx-auto shadow-xl rotate-3`}>
                <Icon size={64} className="text-white drop-shadow-md" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-800">Ready to Play?</h2>
                <p className="text-slate-500 font-bold text-lg mt-2 px-4">
                   {getInstructions()}
                </p>
              </div>
              <button 
                onClick={handleStart}
                className="group relative inline-flex items-center justify-center gap-2 bg-green-500 text-white px-12 py-4 rounded-2xl font-black text-2xl shadow-[0_6px_0_#15803d] hover:-translate-y-1 hover:shadow-[0_4px_0_#15803d] active:shadow-none active:translate-y-1 transition-all"
              >
                <Play size={28} fill="currentColor" />
                PLAY
              </button>
            </div>
          )}

          {/* PLAYING STATE */}
          {status === 'playing' && (
            <div className="w-full h-full flex flex-col animate-in fade-in duration-300">
               {renderEngine()}
            </div>
          )}

          {/* GAME OVER STATE */}
          {status === 'gameover' && (
             <div className="text-center space-y-6 animate-in zoom-in duration-300">
                <div className="relative">
                    <Trophy size={100} className="text-yellow-400 mx-auto drop-shadow-lg" />
                    <div className="absolute top-0 right-1/4 animate-bounce">
                        <CheckCircle size={32} className="text-green-500 bg-white rounded-full" />
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl font-black text-slate-800">Great Job!</h2>
                    <div className="mt-4 bg-white p-4 rounded-2xl border-2 border-stone-100 inline-block shadow-sm">
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Final Score</p>
                        <p className="text-5xl font-black text-green-500">{finalScore}</p>
                    </div>
                </div>
                <div className="flex gap-4 justify-center pt-4">
                    <button 
                        onClick={onClose}
                        className="bg-slate-200 text-slate-600 px-6 py-3 rounded-xl font-bold hover:bg-slate-300 transition-colors border-b-4 border-slate-300 active:border-b-0 active:translate-y-1"
                    >
                        Exit
                    </button>
                    <button 
                        onClick={() => {
                            playSound('click');
                            setStatus('menu');
                        }}
                        className="flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-xl font-bold shadow-[0_4px_0_#1d4ed8] hover:bg-blue-600 active:shadow-none active:translate-y-1 transition-all"
                    >
                        <RotateCcw size={20} /> Play Again
                    </button>
                </div>
             </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default GamePlayer;
