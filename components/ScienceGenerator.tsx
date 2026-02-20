import { UnitData } from '../types';
import { BookOpen, Trophy, Pencil } from 'lucide-react';
import { SCIENCE_LEARN } from '../scienceLearn';
import { SCIENCE_PRACTICE } from '../sciencePractice';
import { SCIENCE_ASSESS } from '../scienceAssess';
import { getLessonContentFromSplit } from '../questionUtils';

export const generateScienceUnit = (grade: string, lessonId: number, lessonTitle: string): UnitData => {
    const content = getLessonContentFromSplit(lessonId, SCIENCE_LEARN, SCIENCE_PRACTICE, SCIENCE_ASSESS);

    return {
        title: lessonTitle,
        description: `Grade: ${grade} Science`,
        objectives: content.objectives,
        sections: [
            { id: 'learn', title: 'Learn It', subtitle: 'Interactive Lesson', type: 'learn', icon: BookOpen, content: { interactive: content.learn } },
            { id: 'practice', title: 'Practice It', subtitle: 'Guided Exercises', type: 'practice', icon: Pencil, content: { questions: content.practice } },
            { id: 'assess', title: 'Assess It', subtitle: 'Quiz', type: 'assess', icon: Trophy, content: { questions: content.quiz } }
        ]
    };
};