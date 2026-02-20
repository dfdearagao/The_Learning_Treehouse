import { UnitData } from '../types';
import { BookOpen, Trophy, Pencil } from 'lucide-react';
import { READING_LEARN } from '../readingLearn';
import { READING_PRACTICE } from '../readingPractice';
import { READING_ASSESS } from '../readingAssess';
import { getLessonContentFromSplit } from '../questionUtils';

export const generateReadingUnit = (grade: string, lessonId: number, lessonTitle: string): UnitData => {
    const content = getLessonContentFromSplit(lessonId, READING_LEARN, READING_PRACTICE, READING_ASSESS);

    return {
        title: lessonTitle,
        description: `Grade: ${grade} Reading`,
        objectives: content.objectives,
        sections: [
            { id: 'learn', title: 'Learn It', subtitle: 'Interactive Lesson', type: 'learn', icon: BookOpen, content: { interactive: content.learn } },
            { id: 'practice', title: 'Practice It', subtitle: 'Guided Exercises', type: 'practice', icon: Pencil, content: { questions: content.practice } },
            { id: 'assess', title: 'Assess It', subtitle: 'Quiz', type: 'assess', icon: Trophy, content: { questions: content.quiz } }
        ]
    };
};