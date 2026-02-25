import { UnitData } from '../types/types';
import { BookOpen, Trophy, Pencil } from 'lucide-react';
import { MATH_LEARN } from '../math/mathLearn';
import { MATH_PRACTICE } from '../math/mathPractice';
import { MATH_ASSESS } from '../math/mathAssess';
import { getLessonContentFromSplit } from '../questionUtils';

export const generateMathUnit = (grade: string, lessonId: number, lessonTitle: string): UnitData => {
    const content = getLessonContentFromSplit(lessonId, MATH_LEARN, MATH_PRACTICE, MATH_ASSESS);

    return {
        title: lessonTitle,
        description: `Grade: ${grade} Math`,
        objectives: content.objectives,
        sections: [
            { id: 'learn', title: 'Learn It', subtitle: 'Interactive Lesson', type: 'learn', icon: BookOpen, content: { interactive: content.learn } },
            { id: 'practice', title: 'Practice It', subtitle: 'Guided Exercises', type: 'practice', icon: Pencil, content: { questions: content.practice } },
            { id: 'assess', title: 'Assess It', subtitle: 'Quiz', type: 'assess', icon: Trophy, content: { questions: content.quiz } }
        ]
    };
};