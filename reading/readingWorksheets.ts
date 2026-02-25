import { Worksheet } from '../types/types';

export const getReadingWorksheets = (grade: string, lessonId: number, lessonTitle: string): Worksheet[] => {
    const worksheets: Worksheet[] = [];
    const lowerTitle = lessonTitle.toLowerCase();

    // --- QUESTION BANKS ---
    
    const phonicsQs = [
        { q: "What letter does 'Apple' start with?", a: "A" },
        { q: "What sound does 'B' make?", a: "Buh" },
        { q: "Which word has a short 'a' sound?", options: ["Cat", "Cake", "Car"], a: "Cat", type: "choice" },
        { q: "Which word rhymes with 'Cat'?", options: ["Hat", "Dog", "Fish"], a: "Hat", type: "choice" },
        { q: "Fill in the blank: C_T (Meow)", a: "A" },
        { q: "What letter comes after C?", a: "D" },
        { q: "Which is a vowel?", options: ["E", "T", "P"], a: "E", type: "choice" },
        { q: "Does 'Fish' start with F?", options: ["Yes", "No"], a: "Yes", type: "choice" },
        { q: "Circle the word that starts with S.", options: ["Sun", "Moon", "Star"], a: "Sun", type: "choice" },
        { q: "How many syllables in 'Banana'?", a: "3" }
    ];

    const grammarQs = [
        { q: "Identify the Noun: 'The big dog ran.'", options: ["Dog", "Big", "Ran"], a: "Dog", type: "choice" },
        { q: "Identify the Verb: 'She jumps high.'", options: ["Jumps", "She", "High"], a: "Jumps", type: "choice" },
        { q: "Which is an Adjective?", options: ["Blue", "Run", "Boy"], a: "Blue", type: "choice" },
        { q: "Plural of 'Cat'?", a: "Cats" },
        { q: "Past tense of 'Walk'?", a: "Walked" },
        { q: "Which word needs a capital letter?", options: ["sarah", "dog", "ball"], a: "sarah", type: "choice" },
        { q: "Fix the sentence: 'i like pizza.'", a: "Capital I" },
        { q: "Is 'Happy' a noun or adjective?", options: ["Adjective", "Noun"], a: "Adjective", type: "choice" },
        { q: "Opposite of 'Hot'?", a: "Cold" },
        { q: "Pronoun for a boy?", options: ["He", "She", "It"], a: "He", type: "choice" }
    ];

    const comprehensionQs = [
        { q: "Who is the main character in the story?", a: "The hero" },
        { q: "Where did the story take place (Setting)?", a: "Place" },
        { q: "What happened first?", a: "Beginning" },
        { q: "How did the story end?", a: "Conclusion" },
        { q: "Why was the character sad?", a: "Conflict" },
        { q: "What is the main idea?", a: "Topic" },
        { q: "Is this story real (Non-fiction) or fake (Fiction)?", options: ["Fiction", "Non-fiction"], a: "Fiction", type: "choice" },
        { q: "What problem did they solve?", a: "Resolution" },
        { q: "Describe the character's feelings.", a: "Emotion" },
        { q: "What lesson did they learn?", a: "Theme" }
    ];

    const sightWordQs = [
        { q: "Spell the word: THE", a: "THE" },
        { q: "Use 'AND' in a sentence.", a: "Sentence" },
        { q: "Which word is 'IS'?", options: ["IS", "SI", "IF"], a: "IS", type: "choice" },
        { q: "Read: 'I see a dog.'", a: "Read aloud" },
        { q: "Spell: YOU", a: "YOU" },
        { q: "Find the word 'LOOK'", options: ["LOOK", "BOOK", "COOK"], a: "LOOK", type: "choice" },
        { q: "What rhymes with 'TO'?", a: "DO" },
        { q: "Is 'CAT' a sight word?", options: ["No", "Yes"], a: "No", type: "choice" },
        { q: "Fill blank: I ___ happy.", options: ["AM", "IS"], a: "AM", type: "choice" },
        { q: "Spell: BIG", a: "BIG" }
    ];

    for (let i = 1; i <= 10; i++) {
        let difficulty: 'Easy' | 'Medium' | 'Hard' = 'Medium';
        if (i <= 3) difficulty = 'Easy';
        else if (i >= 8) difficulty = 'Hard';

        const questions = [];
        
        let pool = comprehensionQs; // Default
        if (lowerTitle.includes("phonic") || lowerTitle.includes("alphabet") || lowerTitle.includes("sound")) pool = phonicsQs;
        else if (lowerTitle.includes("grammar") || lowerTitle.includes("noun") || lowerTitle.includes("verb")) pool = grammarQs;
        else if (lowerTitle.includes("sight word") || lowerTitle.includes("foundational")) pool = sightWordQs;

        // Generate 10 questions
        for (let q = 1; q <= 10; q++) {
            // Cycle through pool or pick random
            const template = pool[(q - 1) % pool.length];
            
            questions.push({
                id: `ws-${lessonId}-${i}-q${q}`,
                question: template.q,
                type: (template.type as any) || 'text',
                options: (template as any).options,
                answer: template.a
            });
        }

        worksheets.push({
            id: `reading-${lessonId}-${i}`,
            title: `Worksheet ${i}: ${difficulty} Activity`,
            difficulty: difficulty,
            questions: questions
        });
    }

    return worksheets;
};