export type ViewState = 'HOME' | 'AVATAR_SELECT' | 'MAP' | 'LEVEL_MAP' | 'GAME_LEVEL' | 'BOSS_BATTLE' | 'PARENT_DASHBOARD' | 'VICTORY';

export type Subject = 'MATH' | 'READING' | 'SCIENCE' | 'LOGIC';

export interface AvatarConfig {
  color: string;
  accessory: string;
  name: string;
}

export interface UserProgress {
  xp: number;
  level: number;
  badges: string[];
  worldsCompleted: Subject[];
  currentWorld: Subject | null;
  currentLevelIndex: number; // 0-9, where 9 is boss
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'text-input';
  options?: string[];
  correctAnswer: string;
  hint: string;
  explanation: string;
}

export interface Boss {
  name: string;
  subject: Subject;
  description: string;
  visual: string; // Emoji or icon name
  maxHealth: number;
  dialogueIntro: string;
  dialogueDefeat: string;
}

export const SUBJECT_COLORS: Record<Subject, string> = {
  MATH: 'bg-red-400 border-red-600 text-red-900',
  READING: 'bg-purple-400 border-purple-600 text-purple-900',
  SCIENCE: 'bg-blue-400 border-blue-600 text-blue-900',
  LOGIC: 'bg-green-400 border-green-600 text-green-900',
};

export const SUBJECT_THEMES: Record<Subject, { bg: string, icon: string, name: string }> = {
  MATH: { bg: 'from-red-100 to-red-200', icon: 'Calculator', name: 'Number Nibbler' },
  READING: { bg: 'from-purple-100 to-purple-200', icon: 'BookOpen', name: 'Word Wizard' },
  SCIENCE: { bg: 'from-blue-100 to-blue-200', icon: 'FlaskConical', name: 'Science Bot' },
  LOGIC: { bg: 'from-green-100 to-green-200', icon: 'Puzzle', name: 'Logic Dragon' },
};