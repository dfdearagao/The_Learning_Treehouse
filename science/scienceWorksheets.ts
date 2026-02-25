import { Worksheet } from '../types/types';

export const getScienceWorksheets = (grade: string, lessonId: number, lessonTitle: string): Worksheet[] => {
    const worksheets: Worksheet[] = [];
    const lowerTitle = lessonTitle.toLowerCase();

    // --- TOPIC BANKS ---
    const plantQs = [
        { q: "What do plants need to grow?", o: ["Sun & Water", "Pizza", "Toys"] },
        { q: "Which part is in the ground?", o: ["Roots", "Leaves", "Flower"] },
        { q: "Which part makes seeds?", o: ["Flower", "Stem", "Root"] },
        { q: "Why are leaves green?", o: ["Chlorophyll", "Paint", "Magic"] },
        { q: "Do plants breathe?", o: ["Yes", "No", "Only on Tuesdays"] },
        { q: "What holds the plant up?", o: ["Stem", "Leaf", "Petal"] },
        { q: "What grows from a seed?", o: ["Plant", "Rock", "Bird"] },
        { q: "Do plants need soil?", o: ["Usually Yes", "Never", "No"] },
        { q: "Can we eat plants?", o: ["Yes (Fruits/Veg)", "No", "Never"] },
        { q: "Example of a plant?", o: ["Tree", "Dog", "Car"] }
    ];

    const animalQs = [
        { q: "Which animal has fur?", o: ["Bear", "Fish", "Snake"] },
        { q: "Which animal lays eggs?", o: ["Chicken", "Dog", "Cat"] },
        { q: "Where do fish live?", o: ["Water", "Trees", "Houses"] },
        { q: "What does a cow eat?", o: ["Grass", "Meat", "Candy"] },
        { q: "Is a bird a mammal?", o: ["No", "Yes", "Maybe"] },
        { q: "How do birds fly?", o: ["Wings", "Motors", "Magic"] },
        { q: "What is a baby dog called?", o: ["Puppy", "Kitten", "Cub"] },
        { q: "Which animal moves slow?", o: ["Turtle", "Cheetah", "Rabbit"] },
        { q: "Do all animals sleep?", o: ["Yes", "No", "Only cats"] },
        { q: "Which is a pet?", o: ["Cat", "Lion", "Shark"] }
    ];

    const weatherQs = [
        { q: "What falls from clouds?", o: ["Rain", "Sand", "Rocks"] },
        { q: "What color is the sun?", o: ["Yellow/White", "Blue", "Green"] },
        { q: "When is it coldest?", o: ["Winter", "Summer", "Spring"] },
        { q: "What do you wear in snow?", o: ["Coat", "Swimsuit", "Shorts"] },
        { q: "What is moving air called?", o: ["Wind", "Rain", "Fog"] },
        { q: "What comes from a storm?", o: ["Thunder", "Music", "Silence"] },
        { q: "What season has flowers?", o: ["Spring", "Winter", "Fall"] },
        { q: "What do we use for rain?", o: ["Umbrella", "Sunglasses", "Fan"] },
        { q: "Is the sun hot?", o: ["Yes", "No", "Freezing"] },
        { q: "Can you see wind?", o: ["No, feel it", "Yes, it's blue", "Yes, it's red"] }
    ];

    const matterQs = [
        { q: "Which is a solid?", o: ["Rock", "Water", "Air"] },
        { q: "Which is a liquid?", o: ["Milk", "Ice", "Wood"] },
        { q: "Which is a gas?", o: ["Steam", "Apple", "Rain"] },
        { q: "Ice is water in what state?", o: ["Solid", "Liquid", "Gas"] },
        { q: "Can liquids change shape?", o: ["Yes", "No", "Never"] },
        { q: "Is air matter?", o: ["Yes", "No", "Maybe"] },
        { q: "What happens when ice melts?", o: ["Becomes water", "Becomes hard", "Disappears"] },
        { q: "Is a chair solid?", o: ["Yes", "No", "Liquid"] },
        { q: "Can you hold gas in your hand?", o: ["Hard to do", "Yes easily", "Like a rock"] },
        { q: "Does matter take up space?", o: ["Yes", "No", "Only sometimes"] }
    ];

    const spaceQs = [
        { q: "What planet do we live on?", o: ["Earth", "Mars", "Moon"] },
        { q: "What shines at night?", o: ["Moon & Stars", "Sun", "Clouds"] },
        { q: "Is the sun a star?", o: ["Yes", "No", "Planet"] },
        { q: "Which planet is Red?", o: ["Mars", "Earth", "Venus"] },
        { q: "Does Earth move?", o: ["Yes", "No", "Stops at night"] },
        { q: "Who goes to space?", o: ["Astronauts", "Doctors", "Chefs"] },
        { q: "What do they fly in?", o: ["Rocket", "Car", "Bus"] },
        { q: "Is the moon made of cheese?", o: ["No", "Yes", "Maybe"] },
        { q: "Is space hot or cold?", o: ["Cold", "Hot", "Warm"] },
        { q: "How many suns do we have?", o: ["1", "2", "100"] }
    ];

    for (let i = 1; i <= 10; i++) {
        let difficulty: 'Easy' | 'Medium' | 'Hard' = 'Medium';
        if (i <= 3) difficulty = 'Easy';
        else if (i >= 8) difficulty = 'Hard';

        const questions = [];
        
        // Select Topic
        let pool = animalQs; // fallback
        if (lowerTitle.includes("plant")) pool = plantQs;
        else if (lowerTitle.includes("weather") || lowerTitle.includes("season")) pool = weatherQs;
        else if (lowerTitle.includes("matter") || lowerTitle.includes("solid") || lowerTitle.includes("liquid")) pool = matterQs;
        else if (lowerTitle.includes("space") || lowerTitle.includes("planet") || lowerTitle.includes("earth")) pool = spaceQs;
        else if (lowerTitle.includes("animal") || lowerTitle.includes("living")) pool = animalQs;

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
            id: `sci-${lessonId}-${i}`,
            title: `Worksheet ${i}: ${difficulty} Lab`,
            difficulty: difficulty,
            questions: questions
        });
    }

    return worksheets;
};