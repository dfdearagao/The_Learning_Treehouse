
import React, { useState } from 'react';
import HomeScreen from './HomeScreen_SP';
import GeminiSlingshot from './GeminiSlingshot_SP';
import { HighScore } from '../types_SP';
import { ArrowLeft } from 'lucide-react';

interface StellarPopAppProps {
    onBack: () => void;
}

const StellarPopApp: React.FC<StellarPopAppProps> = ({ onBack }) => {
    const [gameState, setGameState] = useState<'home' | 'playing'>('home');
    const [highScores, setHighScores] = useState<HighScore[]>([
        { score: 15000, date: new Date().toISOString() },
        { score: 12000, date: new Date().toISOString() },
        { score: 8500, date: new Date().toISOString() }
    ]);

    const handleStartGame = () => setGameState('playing');
    
    // When exiting game, go back to game menu
    const handleExitGame = () => setGameState('home');
    
    const handleRecordScore = (score: number) => {
        const newScore: HighScore = { score, date: new Date().toISOString() };
        // Keep top 10 scores
        setHighScores(prev => [...prev, newScore].sort((a, b) => b.score - a.score).slice(0, 10));
    };

    if (gameState === 'home') {
        return (
            <div className="relative w-full h-full min-h-screen bg-[#121212]">
                <HomeScreen onStartGame={handleStartGame} highScores={highScores} />
                
                {/* Global Exit Button to leave the Stellar Pop App entirely */}
                <button 
                    onClick={onBack}
                    className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white/50 hover:text-white font-bold transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
                >
                    <ArrowLeft size={20} /> Exit to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full min-h-screen">
            <GeminiSlingshot 
                onExit={handleExitGame} 
                onRecordScore={handleRecordScore} 
            />
            {/* In-game exit button (top-left) in case player gets stuck, though game has its own controls usually */}
            <button 
                onClick={handleExitGame}
                className="absolute top-4 left-4 z-[60] p-2 text-white/30 hover:text-white transition-colors"
                title="Return to Game Menu"
            >
                <ArrowLeft size={24} />
            </button>
        </div>
    );
};

export default StellarPopApp;
