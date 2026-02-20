import { Question, InteractiveData } from './types';

export interface QuestionTemplate {
    q: string;
    options: string[];
    correctIndex: number;
    hint?: string;
    explanation: string;
}

export interface LearnContent {
    objectives: string[];
    learn: InteractiveData;
}

// Fix: Add LessonContent interface which is expected by subject-specific question files
export interface LessonContent {
    objectives: string[];
    learn: InteractiveData;
    practice: QuestionTemplate[];
    quiz: QuestionTemplate[];
}

/**
 * Transforms question templates into full Question objects with generated IDs.
 */
const mapTemplatesToQuestions = (templates: QuestionTemplate[], lessonId: number, prefix: string): Question[] => {
    return templates.map((t, i) => ({
        id: `${prefix}-${lessonId}-${i}`,
        type: 'multiple_choice',
        q: t.q,
        options: t.options,
        correctIndex: t.correctIndex,
        hint: t.hint,
        explanation: t.explanation
    }));
};

/**
 * Main retriever function for split files. Combines data from learning, practice, and assessment banks.
 */
export const getLessonContentFromSplit = (
    lessonId: number, 
    learnBank: Record<string, LearnContent>,
    practiceBank: Record<string, QuestionTemplate[]>,
    assessBank: Record<string, QuestionTemplate[]>
): { objectives: string[], learn: InteractiveData, practice: Question[], quiz: Question[] } => {
    const key = lessonId.toString();
    
    const learnData = learnBank[key] || learnBank['default'];
    const practiceData = practiceBank[key] || practiceBank['default'];
    const assessData = assessBank[key] || assessBank['default'];

    return {
        objectives: learnData.objectives,
        learn: learnData.learn,
        practice: mapTemplatesToQuestions(practiceData, lessonId, 'prac'),
        quiz: mapTemplatesToQuestions(assessData, lessonId, 'quiz')
    };
};