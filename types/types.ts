
import { LucideIcon } from 'lucide-react';

export interface User {
  name: string;
  avatar: string;
  level: number;
  xp: number;
  coins: number;
  grade?: string;
  inventory?: string[];
  treehouseState?: Record<string, PlacedItem[]>; // Updated to store position
  progress?: Record<string, number[]>; // Key: "subject-grade" (e.g. "math-2nd Grade"), Value: [completedLessonIds]
  lessonProgress?: Record<string, string[]>; // Key: "subject-grade-lessonId", Value: ['learn', 'practice']
}

export interface PlacedItem {
  uid: string; // Unique ID for this specific placement
  itemId: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
}

export interface FeatureItem {
  title: string;
  description?: string;
  icon: LucideIcon;
  colorClass: string;
}

export interface ActivityItem {
  title: string;
  type: string;
}

export interface SubjectItem {
  id: string;
  title: string;
  mascot: LucideIcon;
  gradient: string;
  textColor: string;
  description?: string; // Short description
  longDescription?: string; // Longer description for the page
  learningTags?: string[]; // E.g., ["Phonics", "Grammar"]
  sampleActivities?: ActivityItem[];
}

export interface EarlyChildhoodItem {
  title: string;
  description: string;
  mascot: LucideIcon;
  gradient: string;
}

export interface GameItem {
  id: string;
  title: string;
  category: 'Math' | 'Reading' | 'Logic' | 'Science' | 'Social Studies' | 'Fun';
  color: string;
  icon: LucideIcon;
}

export interface EarlyChildhoodCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
}

export interface StoreItem {
  id: string;
  name: string;
  price: number;
  category: 'Furniture' | 'Decor' | 'Tech' | 'Pet' | 'Toy' | 'Accessory';
  icon: string; // Emoji or URL
  color: string;
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  type: 'practice' | 'quiz' | 'project';
  objectives?: string[]; // 3 bullet points describing learning outcomes
}

export interface Unit {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

// --- Unit Page & Generator Types ---

export interface LearnMicroStep {
    id: number;
    prompt: string;
    type: 'interaction' | 'input';
    config: {
        action?: string;
        targetValue?: any;
        requiredCount?: number;
    };
    updateState?: any; 
    feedback: {
        success: string;
        error: string;
    }
}

export interface Question {
  id: string;
  type: 'multiple_choice' | 'fill_blank';
  q: string; // Question text
  options?: string[]; // For MC
  answer?: string; // For Fill Blank
  correctIndex?: number; // For MC
  visualType?: 'number_line' | 'blocks' | 'pattern' | 'flashcard' | 'grouping';
  visualConfig?: any; 
  hint?: string;
  explanation: string;
}

export interface InteractiveData {
  type: 'number_line' | 'blocks' | 'pattern' | 'flashcard' | 'grouping';
  steps: LearnMicroStep[];
  quickCheck: Question[];
  initialState?: any;
}

export interface WorksheetQuestion {
    id: string;
    question: string;
    type: 'text' | 'choice';
    options?: string[]; // If choice
    answer?: string; // Correct answer text
}

export interface Worksheet {
    id: string;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    questions: WorksheetQuestion[];
}

export interface UnitSection {
  id: string;
  title: string;
  subtitle: string;
  type: 'learn' | 'practice' | 'assess' | 'master';
  icon: any; // We store the Lucide Icon component here or a reference
  content: {
      interactive?: InteractiveData; // For Learn It
      questions?: Question[]; // For Practice/Assess
      worksheets?: Worksheet[]; // For Master It
  }
}

export interface UnitData {
  title: string;
  description: string;
  objectives?: string[];
  sections: UnitSection[];
}
