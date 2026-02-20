import { UnitData } from '../types';
import { BookOpen, Trophy, Pencil } from 'lucide-react';
import { MATH_LEARN } from '../mathLearn';
import { MATH_PRACTICE } from '../mathPractice';
import { MATH_ASSESS } from '../mathAssess';
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