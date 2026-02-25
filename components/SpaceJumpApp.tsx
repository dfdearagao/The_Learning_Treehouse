
import React, { useState } from 'react';
import { User } from '../types/types';
import { ViewState, Subject, AvatarConfig, UserProgress } from '../types/types_BQ';
import AvatarEditor from './BQ/AvatarEditor_BQ';
import WorldMap from './BQ/WorldMap_BQ';
import LevelMap from './BQ/LevelMap_BQ';
import GameLevel from './BQ/GameLevel_BQ';
import BossBattle from './BQ/BossBattle_BQ';
import ParentDashboard from './BQ/ParentDashboard_BQ';
import { soundManager } from '../utils/soundService_BQ';

interface SpaceJumpAppProps {
    user: User;
    onBack: () => void;
}

const SpaceJumpApp: React.FC<SpaceJumpAppProps> = ({ user, onBack }) => {
    // Start directly at LEVEL_MAP as per design request (skipping Avatar Select & World Map)
    const [viewState, setViewState] = useState<ViewState>('LEVEL_MAP');
    const [avatar, setAvatar] = useState<AvatarConfig>({ color: 'bg-blue-500', accessory: 'hero', name: user.name });
    
    // Mock user progress for the game context
    // Default currentWorld to 'MATH' as we are skipping the selection screen
    const [progress, setProgress] = useState<UserProgress>({
        xp: user.xp,
        level: user.level,
        badges: [],
        worldsCompleted: [],
        currentWorld: 'MATH', 
        currentLevelIndex: 0
    });

    // --- State Transitions ---

    const handleAvatarSave = (config: AvatarConfig) => {
        setAvatar(config);
        setViewState('LEVEL_MAP'); // Go to Level Map directly
        soundManager.playSuccess();
    };

    const handleWorldSelect = (subject: Subject) => {
        setProgress(prev => ({ ...prev, currentWorld: subject }));
        setViewState('LEVEL_MAP');
        soundManager.playClick();
    };

    const handleLevelSelect = (levelIndex: number) => {
        // If it's the last level (boss)
        if (levelIndex === 99) { // Example: last level index
             setViewState('BOSS_BATTLE');
        } else {
             setProgress(prev => ({ ...prev, currentLevelIndex: levelIndex }));
             setViewState('GAME_LEVEL');
        }
        soundManager.playClick();
    };

    const handleLevelComplete = (score: number) => {
        // Update progress logic here
        const nextLevel = progress.currentLevelIndex + 1;
        setProgress(prev => ({ 
            ...prev, 
            xp: prev.xp + score, 
            currentLevelIndex: nextLevel 
        }));
        setViewState('LEVEL_MAP');
        soundManager.playWin();
    };

    const handleBossVictory = () => {
        if (progress.currentWorld) {
            setProgress(prev => ({
                ...prev,
                worldsCompleted: [...prev.worldsCompleted, prev.currentWorld!],
                badges: [...prev.badges, `${prev.currentWorld} Master`]
            }));
        }
        setViewState('VICTORY'); // Could show a victory screen, then back to map
        setTimeout(() => setViewState('LEVEL_MAP'), 3000);
    };

    return (
        <div className="fixed inset-0 z-50 bg-[#eff6ff] overflow-hidden font-sans">
            {viewState === 'AVATAR_SELECT' && (
                <AvatarEditor 
                    currentConfig={avatar} 
                    onSave={handleAvatarSave} 
                />
            )}

            {viewState === 'MAP' && (
                <WorldMap 
                    progress={progress}
                    onSelectWorld={handleWorldSelect}
                    onOpenDashboard={() => setViewState('PARENT_DASHBOARD')}
                />
            )}

            {viewState === 'LEVEL_MAP' && progress.currentWorld && (
                <LevelMap 
                    currentLevelIndex={progress.currentLevelIndex}
                    subject={progress.currentWorld}
                    avatar={avatar}
                    onSelectLevel={handleLevelSelect}
                    onBack={onBack} // Exit game entirely since map is skipped
                    onOpenDashboard={() => setViewState('PARENT_DASHBOARD')}
                />
            )}

            {viewState === 'GAME_LEVEL' && progress.currentWorld && (
                <GameLevel 
                    subject={progress.currentWorld}
                    levelIndex={progress.currentLevelIndex}
                    onComplete={handleLevelComplete}
                    onExit={() => setViewState('LEVEL_MAP')}
                />
            )}

            {viewState === 'BOSS_BATTLE' && progress.currentWorld && (
                <BossBattle 
                    subject={progress.currentWorld}
                    onVictory={handleBossVictory}
                    onDefeat={() => setViewState('LEVEL_MAP')}
                />
            )}

            {viewState === 'PARENT_DASHBOARD' && (
                <ParentDashboard 
                    progress={progress}
                    onBack={() => setViewState('LEVEL_MAP')} // Return to Level Map
                />
            )}
            
            {/* Global Back Button (Top Left) if in Avatar Select (since Map is now skipped from main flow) */}
            {viewState === 'AVATAR_SELECT' && (
                 <button 
                    onClick={onBack}
                    className="absolute top-6 left-6 z-50 bg-white/40 hover:bg-white/60 text-slate-600 font-extrabold px-6 py-3 rounded-full backdrop-blur-md transition-all border-2 border-white/50 shadow-sm text-sm"
                 >
                    Exit Game
                 </button>
            )}
        </div>
    );
};

export default SpaceJumpApp;
