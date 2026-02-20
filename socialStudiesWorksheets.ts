import { Worksheet } from './types';

export const getSSWorksheets = (grade: string, lessonId: number, lessonTitle: string): Worksheet[] => {
    const worksheets: Worksheet[] = [];
    const lowerTitle = lessonTitle.toLowerCase();

    // --- TOPIC BANKS ---
    const communityQs = [
        { q: "Who helps put out fires?", o: ["Firefighter", "Baker", "Artist"] },
        { q: "Who keeps us safe?", o: ["Police Officer", "Chef", "Farmer"] },
        { q: "Who teaches us?", o: ["Teacher", "Vet", "Pilot"] },
        { q: "Where do we buy food?", o: ["Grocery Store", "Bank", "Park"] },
        { q: "Where do we borrow books?", o: ["Library", "Zoo", "Pool"] },
        { q: "Who helps sick pets?", o: ["Vet", "Doctor", "Nurse"] },
        { q: "Who delivers mail?", o: ["Mail Carrier", "Driver", "Cook"] },
        { q: "What is a rule?", o: ["Something to follow", "A game", "A toy"] },
        { q: "Why do we have laws?", o: ["Safety", "For fun", "To be mean"] },
        { q: "What is a neighbor?", o: ["Person living near", "Person far away", "A pet"] }
    ];

    const mapQs = [
        { q: "What shows us where places are?", o: ["Map", "Book", "Clock"] },
        { q: "What is the blue part on a map?", o: ["Water", "Land", "Ice"] },
        { q: "What is the green part on a map?", o: ["Land", "Water", "Sky"] },
        { q: "What shows North, South, East, West?", o: ["Compass", "Ruler", "Scale"] },
        { q: "What is a round map called?", o: ["Globe", "Circle", "Ball"] },
        { q: "Do maps have symbols?", o: ["Yes", "No", "Never"] },
        { q: "What is a continent?", o: ["Big land", "Small island", "City"] },
        { q: "What is an ocean?", o: ["Big water", "Puddle", "River"] },
        { q: "Where is the North Pole?", o: ["Top", "Bottom", "Middle"] },
        { q: "Where is the South Pole?", o: ["Bottom", "Top", "Side"] }
    ];

    const historyQs = [
        { q: "What is History?", o: ["Study of the Past", "Future", "Now"] },
        { q: "Did people have cars 1000 years ago?", o: ["No", "Yes", "Maybe"] },
        { q: "Who was the first President?", o: ["Washington", "Lincoln", "Jefferson"] },
        { q: "What is a timeline?", o: ["Order of events", "A clock", "A map"] },
        { q: "What is an invention?", o: ["New creation", "Old rock", "Tree"] },
        { q: "What is a tradition?", o: ["Family custom", "New game", "Toy"] },
        { q: "How did people travel long ago?", o: ["Horses", "Cars", "Planes"] },
        { q: "What is an artifact?", o: ["Old object", "New phone", "Food"] },
        { q: "Do things change over time?", o: ["Yes", "No", "Never"] },
        { q: "What is the past?", o: ["Already happened", "Happening now", "Tomorrow"] }
    ];

    const civicsQs = [
        { q: "What is a citizen?", o: ["Member of community", "Alien", "Tourist"] },
        { q: "What is voting?", o: ["Choosing", "Running", "Eating"] },
        { q: "What is a right?", o: ["Freedom", "Toy", "Candy"] },
        { q: "What represents the USA?", o: ["Flag", "Apple", "Car"] },
        { q: "What color is the flag?", o: ["Red/White/Blue", "Green", "Pink"] },
        { q: "Where does the President live?", o: ["White House", "Castle", "Tent"] },
        { q: "What is the Bald Eagle?", o: ["National Bird", "Pet", "Food"] },
        { q: "What is the Statue of Liberty?", o: ["Symbol of Freedom", "Doll", "Person"] },
        { q: "Do we pay taxes?", o: ["Yes", "No", "Never"] },
        { q: "What is the Constitution?", o: ["List of Rules", "Book", "Map"] }
    ];

    for (let i = 1; i <= 10; i++) {
        let difficulty: 'Easy' | 'Medium' | 'Hard' = 'Medium';
        if (i <= 3) difficulty = 'Easy';
        else if (i >= 8) difficulty = 'Hard';

        const questions = [];
        
        let pool = communityQs; // fallback
        if (lowerTitle.includes("map") || lowerTitle.includes("globe") || lowerTitle.includes("geography")) pool = mapQs;
        else if (lowerTitle.includes("history") || lowerTitle.includes("past") || lowerTitle.includes("time")) pool = historyQs;
        else if (lowerTitle.includes("civic") || lowerTitle.includes("government") || lowerTitle.includes("flag") || lowerTitle.includes("symbol")) pool = civicsQs;

        for (let q = 1; q <= 10; q++) {
            const template = pool[(q - 1) % pool.length];
            questions.push({
                id: `ws-${lessonId}-${i}-q${q}`,
                question: template.q,
                type: 'choice',
                options: template.o
            });
        }

        worksheets.push({
            id: `ss-${lessonId}-${i}`,
            title: `Worksheet ${i}: ${difficulty} Activity`,
            difficulty: difficulty,
            questions: questions
        });
    }

    return worksheets;
};