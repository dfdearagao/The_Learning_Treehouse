
import React, { useState, useEffect } from 'react';
import { Subject, Boss, Question, SUBJECT_THEMES } from '../types_BQ';
import { generateLevelQuestions, generateBossDialogue } from './geminiService_BQ';
import confetti from 'canvas-confetti';
import { Heart, ShieldAlert, Sparkles, Sword } from 'lucide-react';
import { soundManager } from '../utils/soundService_BQ';

interface BossBattleProps {
  subject: Subject;
  onVictory: () => void;
  onDefeat: () => void; // Unused in this happy path game, but good for structure
}

// Predefined bosses
const BOSSES: Record<Subject, Boss> = {
  MATH: {
    name: "Count Von Count",
    subject: 'MATH',
    description: "The Number Nibbler!",
    visual: "🧛‍♂️",
    maxHealth: 3,
    dialogueIntro: "I vant to count your mistakes!",
    dialogueDefeat: "You are number one!"
  },
  READING: {
    name: "Spellinda",
    subject: 'READING',
    description: "The Word Witch",
    visual: "🧙‍♀️",
    maxHealth: 3,
    dialogueIntro: "Riddle me this!",
    dialogueDefeat: "Your vocabulary is magical!"
  },
  SCIENCE: {
    name: "Robo-Know",
    subject: 'SCIENCE',
    description: "The Fact Machine",
    visual: "🤖",
    maxHealth: 3,
    dialogueIntro: "Processing... logic required.",
    dialogueDefeat: "System overload! You are too smart."
  },
  LOGIC: {
    name: "Puzzlor",
    subject: 'LOGIC',
    description: "The Pattern Dragon",
    visual: "🐉",
    maxHealth: 3,
    dialogueIntro: "Can you solve my maze?",
    dialogueDefeat: "You have tamed the chaos!"
  }
};

const BossBattle: React.FC<BossBattleProps> = ({ subject, onVictory }) => {
  const boss = BOSSES[subject];
  const [bossHealth, setBossHealth] = useState(boss.maxHealth);
  const [playerHealth, setPlayerHealth] = useState(3);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [dialogue, setDialogue] = useState(boss.dialogueIntro);
  const [loading, setLoading] = useState(true);
  const [turnState, setTurnState] = useState<'player_input' | 'attack_anim' | 'boss_talk'>('player_input');

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const qData = await generateLevelQuestions(subject, 4); // Slightly harder for boss
      setQuestions(qData);
      const intro = await generateBossDialogue(boss, 'intro');
      setDialogue(intro);
      setLoading(false);
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subject]);

  const handleAttack = async (answer: string) => {
    soundManager.playShoot();
    const isCorrect = answer === questions[currentQIndex].correctAnswer;
    
    setTurnState('attack_anim');
    
    if (isCorrect) {
      setTimeout(() => soundManager.playExplosion(), 300); // Delayed hit sound
      setBossHealth(h => Math.max(0, h - 1));
      const line = await generateBossDialogue(boss, 'damage');
      setDialogue(line);
    } else {
      setTimeout(() => soundManager.playWrong(), 300);
      setPlayerHealth(h => Math.max(0, h - 1));
      setDialogue("Try again, young hero!");
    }

    // Small delay for animation feel
    setTimeout(() => {
        if (isCorrect && bossHealth <= 1) { // Will be 0 after update
            handleWin();
        } else if (!isCorrect && playerHealth <= 1) {
             // In a kids game, we usually just let them retry or heal. 
             // Let's heal the player for infinite retry but reset boss slightly?
             // For now, just continue.
             nextTurn();
        } else {
            nextTurn();
        }
    }, 1500);
  };

  const nextTurn = () => {
    setCurrentQIndex(prev => (prev + 1) % questions.length); // Loop questions if needed
    setTurnState('player_input');
  };

  const handleWin = async () => {
    // We let the App handle the big win sound
    const line = await generateBossDialogue(boss, 'defeat');
    setDialogue(line);
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
    setTimeout(onVictory, 2000);
  };

  if (loading) return <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-500">Summoning Boss...</div>;

  const currentQ = questions[currentQIndex];

  return (
    <div className={`absolute inset-0 bg-gray-900 text-white p-4 flex flex-col items-center justify-between overflow-hidden`}>
        {/* Background ambience */}
        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${SUBJECT_THEMES[subject].bg}`}></div>

        {/* Boss Area */}
        <div className="flex flex-col items-center mt-8 z-10 w-full">
            <div className="flex gap-2 mb-4">
                {[...Array(boss.maxHealth)].map((_, i) => (
                    <Heart key={i} className={`w-8 h-8 transition-all ${i < bossHealth ? 'fill-red-500 text-red-500' : 'fill-gray-700 text-gray-800'}`} />
                ))}
            </div>
            <div className={`text-9xl mb-4 transform transition-all duration-500 ${turnState === 'attack_anim' ? 'scale-90 rotate-12' : 'animate-float'}`}>
                {boss.visual}
            </div>
            <div className="bg-white text-black p-4 rounded-2xl rounded-tl-none shadow-lg max-w-xs text-center font-bold text-lg relative">
                "{dialogue}"
                <div className="absolute -top-3 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-white border-r-[20px] border-r-transparent"></div>
            </div>
        </div>

        {/* Battle Action Area */}
        <div className="w-full max-w-2xl bg-slate-800 p-6 rounded-3xl shadow-2xl border-4 border-slate-700 z-10 mb-8">
            {turnState === 'player_input' ? (
                <>
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-blue-200">{currentQ.text}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentQ.options?.map(opt => (
                            <button
                                key={opt}
                                onClick={() => handleAttack(opt)}
                                className="bg-slate-700 hover:bg-slate-600 border-b-4 border-slate-900 hover:border-slate-800 py-4 rounded-xl font-bold text-lg transition-all active:translate-y-1"
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <div className="h-48 flex items-center justify-center">
                    <Sword className="w-16 h-16 text-yellow-400 animate-spin" />
                </div>
            )}
        </div>

        {/* Player Status */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
           <div className="w-16 h-16 rounded-full bg-blue-500 border-4 border-white flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" />
           </div>
           <div className="flex flex-col">
               <span className="font-bold text-shadow">Hero</span>
               <div className="flex">
                 {[...Array(3)].map((_, i) => (
                    <ShieldAlert key={i} className={`w-5 h-5 ${i < playerHealth ? 'text-blue-400 fill-blue-400' : 'text-gray-700'}`} />
                 ))}
               </div>
           </div>
        </div>
    </div>
  );
};

export default BossBattle;
