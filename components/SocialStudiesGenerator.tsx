import { UnitData } from '../types';
import { BookOpen, Trophy, Pencil } from 'lucide-react';
import { SS_LEARN } from '../socialStudiesLearn';
import { SS_PRACTICE } from '../socialStudiesPractice';
import { SS_ASSESS } from '../socialStudiesAssess';
import { getLessonContentFromSplit } from '../questionUtils';

export const generateSSUnit = (grade: string, lessonId: number, lessonTitle: string): UnitData => {
    const content = getLessonContentFromSplit(lessonId, SS_LEARN, SS_PRACTICE, SS_ASSESS);

    return {
        title: lessonTitle,
        description: `Grade: ${grade} Social Studies`,
        objectives: content.objectives,
        sections: [
            { id: 'learn', title: 'Learn It', subtitle: 'Interactive Lesson', type: 'learn', icon: BookOpen, content: { interactive: content.learn } },
            { id: 'practice', title: 'Practice It', subtitle: 'Guided Exercises', type: 'practice', icon: Pencil, content: { questions: content.practice } },
            { id: 'assess', title: 'Assess It', subtitle: 'Quiz', type: 'assess', icon: Trophy, content: { questions: content.quiz } }
        ]
    };
};