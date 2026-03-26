export interface ScoreEntry {
  name: string;
  score: number;
  time: number;
  date: string;
}

export interface PlayerStats {
  puzzlesCompleted: number;
  totalWins: number;
  totalTime: number;
  winRate: number;
  avgTime: number;
}

export interface DailyData {
  lastCompletedDate: string | null;
  streak: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string | null;
}

const LEADERBOARD_KEY = 'wordsearch_leaderboard';
const STATS_KEY = 'wordsearch_stats';
const DAILY_KEY = 'wordsearch_daily';
const ACHIEVEMENTS_KEY = 'wordsearch_achievements';

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  { id: 'first_puzzle', title: 'First Steps', description: 'Complete your first puzzle', icon: '🌟', unlockedAt: null },
  { id: 'five_puzzles', title: 'Getting the Hang of It', description: 'Complete 5 puzzles', icon: '🚀', unlockedAt: null },
  { id: 'ten_puzzles', title: 'Word Master', description: 'Complete 10 puzzles', icon: '👑', unlockedAt: null },
  { id: 'no_hints', title: 'Eagle Eye', description: 'Complete a puzzle without using hints', icon: '🦅', unlockedAt: null },
  { id: 'speed_demon', title: 'Speed Demon', description: 'Finish a puzzle in under 2 minutes', icon: '⚡', unlockedAt: null },
  { id: 'seven_day_streak', title: 'Dedicated', description: 'Achieve a 7-day streak', icon: '🔥', unlockedAt: null },
];

export function getLeaderboard(): ScoreEntry[] {
  const data = localStorage.getItem(LEADERBOARD_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveScore(entry: ScoreEntry) {
  const leaderboard = getLeaderboard();
  leaderboard.push(entry);
  leaderboard.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.time - b.time;
  });
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard.slice(0, 10)));
}

export function getStats(): PlayerStats {
  const data = localStorage.getItem(STATS_KEY);
  return data ? JSON.parse(data) : {
    puzzlesCompleted: 0,
    totalWins: 0,
    totalTime: 0,
    winRate: 0,
    avgTime: 0,
  };
}

export function updateStats(won: boolean, timeTaken: number) {
  const stats = getStats();
  stats.puzzlesCompleted += 1;
  if (won) stats.totalWins += 1;
  stats.totalTime += timeTaken;
  stats.winRate = stats.totalWins / stats.puzzlesCompleted;
  stats.avgTime = stats.totalTime / stats.puzzlesCompleted;
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export function getDailyData(): DailyData {
  const data = localStorage.getItem(DAILY_KEY);
  if (data) return JSON.parse(data);
  return { lastCompletedDate: null, streak: 0 };
}

export function updateDailyStreak(dateStr: string) {
  const data = getDailyData();
  if (data.lastCompletedDate === dateStr) return data; // Already completed today
  
  if (data.lastCompletedDate) {
    const lastDate = new Date(data.lastCompletedDate);
    const today = new Date(dateStr);
    
    // Reset time to midnight for accurate day diff
    lastDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - lastDate.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); 
    
    if (diffDays === 1) {
      data.streak += 1;
    } else if (diffDays > 1) {
      data.streak = 1;
    }
  } else {
    data.streak = 1;
  }
  
  data.lastCompletedDate = dateStr;
  localStorage.setItem(DAILY_KEY, JSON.stringify(data));
  return data;
}

export function getAchievements(): Achievement[] {
  const data = localStorage.getItem(ACHIEVEMENTS_KEY);
  if (!data) return INITIAL_ACHIEVEMENTS;
  
  const saved = JSON.parse(data) as Achievement[];
  // Merge with initial to ensure new achievements are added
  return INITIAL_ACHIEVEMENTS.map(initial => {
    const found = saved.find(s => s.id === initial.id);
    return found ? { ...initial, unlockedAt: found.unlockedAt } : initial;
  });
}

export function unlockAchievement(id: string): boolean {
  const achievements = getAchievements();
  const achievement = achievements.find(a => a.id === id);
  if (achievement && !achievement.unlockedAt) {
    achievement.unlockedAt = new Date().toISOString();
    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements));
    return true; // Newly unlocked
  }
  return false;
}
