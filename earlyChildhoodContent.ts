
export type ECType = 'flashcards' | 'sorting' | 'quiz' | 'story' | 'game';

export interface ECActivity {
    id: string;
    title: string;
    icon: string;
    colorClass: string;
    type: ECType;
    data: any; // Flexible data structure based on type
    isLocked?: boolean;
}

export const EC_CONTENT: Record<string, ECActivity[]> = {
    'pre-reading': [
        {
            id: 'pr-1',
            title: 'Alphabet Zoo',
            icon: '🦁',
            colorClass: 'bg-orange-100 text-orange-600',
            type: 'flashcards',
            data: {
                cards: [
                    { front: "A", back: "Alligator 🐊", color: "bg-green-100" },
                    { front: "B", back: "Bear 🐻", color: "bg-brown-100" },
                    { front: "C", back: "Cat 🐱", color: "bg-orange-100" },
                    { front: "D", back: "Dog 🐶", color: "bg-yellow-100" },
                    { front: "E", back: "Elephant 🐘", color: "bg-blue-100" }
                ]
            }
        },
        {
            id: 'pr-2',
            title: 'Rhyme Time',
            icon: '🎤',
            colorClass: 'bg-blue-100 text-blue-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "What rhymes with Cat?", options: ["Bat", "Dog", "Fish"], correctIndex: 0, image: "🐱" },
                    { q: "What rhymes with Pig?", options: ["Wig", "Cow", "Sun"], correctIndex: 0, image: "🐷" },
                    { q: "What rhymes with Star?", options: ["Car", "Moon", "Ball"], correctIndex: 0, image: "⭐" }
                ]
            }
        },
        {
            id: 'pr-3',
            title: 'Letter Sort',
            icon: '🅰️',
            colorClass: 'bg-purple-100 text-purple-600',
            type: 'sorting',
            data: {
                instruction: "Is it a Letter or Number?",
                categoryA: "Letter",
                categoryB: "Number",
                items: [
                    { content: "A", category: "A" },
                    { content: "5", category: "B" },
                    { content: "B", category: "A" },
                    { content: "2", category: "B" },
                    { content: "Z", category: "A" }
                ]
            }
        }
    ],
    'math-foundations': [
        {
            id: 'mf-1',
            title: 'Count the Animals',
            icon: '🦆',
            colorClass: 'bg-yellow-100 text-yellow-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "How many ducks? 🦆🦆", options: ["2", "3", "1"], correctIndex: 0, image: "" },
                    { q: "How many cows? 🐮", options: ["1", "5", "0"], correctIndex: 0, image: "" },
                    { q: "How many pigs? 🐷🐷🐷", options: ["3", "2", "4"], correctIndex: 0, image: "" }
                ]
            }
        },
        {
            id: 'mf-2',
            title: 'Shape Sorter',
            icon: '🔺',
            colorClass: 'bg-red-100 text-red-600',
            type: 'sorting',
            data: {
                instruction: "Is it a Circle or Square?",
                categoryA: "Circle",
                categoryB: "Square",
                items: [
                    { content: "⭕", category: "A" },
                    { content: "🟥", category: "B" },
                    { content: "🔴", category: "A" },
                    { content: "🟦", category: "B" }
                ]
            }
        },
        {
            id: 'mf-3',
            title: 'Big vs Small',
            icon: '🐘',
            colorClass: 'bg-green-100 text-green-600',
            type: 'flashcards',
            data: {
                cards: [
                    { front: "Big 🐘", back: "Elephant", color: "bg-gray-100" },
                    { front: "Small 🐭", back: "Mouse", color: "bg-pink-100" },
                    { front: "Big 🐳", back: "Whale", color: "bg-blue-100" },
                    { front: "Small 🐜", back: "Ant", color: "bg-red-100" }
                ]
            }
        },
        {
            id: 'mf-4',
            title: 'Number Match',
            icon: '🔢',
            colorClass: 'bg-blue-100 text-blue-600',
            type: 'flashcards',
            data: {
                cards: [
                    { front: "1", back: "One 🍎", color: "bg-white" },
                    { front: "2", back: "Two 🍎🍎", color: "bg-white" },
                    { front: "3", back: "Three 🍎🍎🍎", color: "bg-white" },
                    { front: "4", back: "Four 🍎🍎🍎🍎", color: "bg-white" },
                    { front: "5", back: "Five 🍎🍎🍎🍎🍎", color: "bg-white" }
                ]
            }
        },
        {
            id: 'mf-5',
            title: 'Heavy or Light',
            icon: '⚖️',
            colorClass: 'bg-indigo-100 text-indigo-600',
            type: 'sorting',
            data: {
                instruction: "Is it Heavy or Light?",
                categoryA: "Heavy",
                categoryB: "Light",
                items: [
                    { content: "🐘", category: "A" },
                    { content: "🪶", category: "B" },
                    { content: "🚙", category: "A" },
                    { content: "🎈", category: "B" }
                ]
            }
        },
        {
            id: 'mf-6',
            title: 'Pattern Power',
            icon: '🏁',
            colorClass: 'bg-pink-100 text-pink-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "Red, Blue, Red, Blue... What's next?", options: ["Red", "Blue", "Green"], correctIndex: 0, image: "🔴🔵🔴🔵❓" },
                    { q: "Star, Circle, Star, Circle...", options: ["Square", "Star", "Circle"], correctIndex: 1, image: "⭐⭕⭐⭕❓" },
                    { q: "A, B, A, B...", options: ["A", "C", "B"], correctIndex: 0, image: "🅰️🅱️🅰️🅱️❓" }
                ]
            }
        },
        {
            id: 'mf-7',
            title: 'More or Less',
            icon: '⚖️',
            colorClass: 'bg-teal-100 text-teal-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "Which has MORE?", options: ["🍪🍪🍪", "🍪"], correctIndex: 0, image: "" },
                    { q: "Which has LESS?", options: ["🎈🎈", "🎈🎈🎈🎈"], correctIndex: 0, image: "" },
                    { q: "Which has MORE?", options: ["🐱", "🐱🐱🐱"], correctIndex: 1, image: "" }
                ]
            }
        },
        {
            id: 'mf-8',
            title: 'Simple Sums',
            icon: '➕',
            colorClass: 'bg-orange-100 text-orange-600',
            type: 'flashcards',
            data: {
                cards: [
                    { front: "1 + 1", back: "2", color: "bg-white" },
                    { front: "2 + 2", back: "4", color: "bg-white" },
                    { front: "3 + 1", back: "4", color: "bg-white" },
                    { front: "1 + 2", back: "3", color: "bg-white" }
                ]
            }
        },
        {
            id: 'mf-9',
            title: 'Tall vs Short',
            icon: '🦒',
            colorClass: 'bg-yellow-100 text-yellow-600',
            type: 'sorting',
            data: {
                instruction: "Is it Tall or Short?",
                categoryA: "Tall",
                categoryB: "Short",
                items: [
                    { content: "🦒", category: "A" },
                    { content: "🐜", category: "B" },
                    { content: "🌲", category: "A" },
                    { content: "🍄", category: "B" }
                ]
            }
        },
        {
            id: 'mf-10',
            title: 'Shape Hunt',
            icon: '🔍',
            colorClass: 'bg-purple-100 text-purple-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "Find the Circle", options: ["🟥", "⭕", "🔺"], correctIndex: 1, image: "" },
                    { q: "Find the Square", options: ["⭕", "⭐", "🟥"], correctIndex: 2, image: "" },
                    { q: "Find the Triangle", options: ["🔺", "🟥", "🔷"], correctIndex: 0, image: "" }
                ]
            }
        }
    ],
    'creative-play': [
        {
            id: 'cp-1',
            title: 'Color Mixer',
            icon: '🎨',
            colorClass: 'bg-pink-100 text-pink-600',
            type: 'flashcards',
            data: {
                cards: [
                    { front: "🔴 + 🔵", back: "Purple 🟣", color: "bg-purple-100" },
                    { front: "🔴 + 🟡", back: "Orange 🟠", color: "bg-orange-100" },
                    { front: "🔵 + 🟡", back: "Green 🟢", color: "bg-green-100" }
                ]
            }
        },
        {
            id: 'cp-2',
            title: 'Art Tools',
            icon: '🖌️',
            colorClass: 'bg-pink-100 text-pink-600',
            type: 'sorting',
            data: {
                instruction: "Paint or Draw?",
                categoryA: "Paint",
                categoryB: "Draw",
                items: [
                    { content: "🖌️", category: "A" },
                    { content: "✏️", category: "B" },
                    { content: "🎨", category: "A" },
                    { content: "🖍️", category: "B" }
                ]
            }
        }
    ],
    'sel': [
        {
            id: 'sel-1',
            title: 'Feelings',
            icon: '😊',
            colorClass: 'bg-yellow-100 text-yellow-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "Which face is Happy?", options: ["😊", "😢", "😠"], correctIndex: 0, image: "" },
                    { q: "Which face is Sad?", options: ["😢", "😊", "😲"], correctIndex: 0, image: "" },
                    { q: "Which face is Surprised?", options: ["😲", "😢", "😠"], correctIndex: 0, image: "" }
                ]
            }
        },
        {
            id: 'sel-2',
            title: 'Good Choices',
            icon: '🤝',
            colorClass: 'bg-green-100 text-green-600',
            type: 'sorting',
            data: {
                instruction: "Good or Bad Choice?",
                categoryA: "Good",
                categoryB: "Bad",
                items: [
                    { content: "🤝", category: "A" },
                    { content: "👊", category: "B" },
                    { content: "🎁", category: "A" },
                    { content: "😈", category: "B" }
                ]
            }
        },
        {
            id: 'sel-3',
            title: 'Sharing is Caring',
            icon: '🧸',
            colorClass: 'bg-blue-100 text-blue-600',
            type: 'story',
            data: {
                pages: [
                    { image: "🏀", text: "Tim has a new ball." },
                    { image: "👦", text: "Ben wants to play too." },
                    { image: "😠", text: "Tim says 'No!' Ben is sad." },
                    { image: "🤔", text: "Tim thinks about Ben's feelings." },
                    { image: "🤝", text: "'Here Ben, let's play catch!'" },
                    { image: "😊", text: "Now they are both having fun." }
                ]
            }
        },
        {
            id: 'sel-4',
            title: 'Friendship Quiz',
            icon: '👯',
            colorClass: 'bg-purple-100 text-purple-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "Your friend falls down. You...", options: ["Laugh", "Help them up"], correctIndex: 1, image: "🤕" },
                    { q: "A friend is sad. You...", options: ["Give a hug", "Walk away"], correctIndex: 0, image: "😢" },
                    { q: "Playing a game. You...", options: ["Take turns", "Keep it all"], correctIndex: 0, image: "🎲" }
                ]
            }
        },
        {
            id: 'sel-5',
            title: 'Calm Down Tools',
            icon: '🧘',
            colorClass: 'bg-teal-100 text-teal-600',
            type: 'flashcards',
            data: {
                cards: [
                    { front: "😤", back: "Deep Breath", color: "bg-blue-50" },
                    { front: "🔢", back: "Count to 10", color: "bg-green-50" },
                    { front: "🧸", back: "Hug a Bear", color: "bg-yellow-50" },
                    { front: "🗣️", back: "Use Words", color: "bg-purple-50" }
                ]
            }
        },
        {
            id: 'sel-6',
            title: 'Kind or Unkind',
            icon: '❤️',
            colorClass: 'bg-red-100 text-red-600',
            type: 'sorting',
            data: {
                instruction: "Is it Kind or Unkind?",
                categoryA: "Kind",
                categoryB: "Unkind",
                items: [
                    { content: "🫂", category: "A" },
                    { content: "🤜", category: "B" },
                    { content: "💝", category: "A" },
                    { content: "🤬", category: "B" }
                ]
            }
        },
        {
            id: 'sel-7',
            title: 'Magic Words',
            icon: '✨',
            colorClass: 'bg-yellow-100 text-yellow-600',
            type: 'flashcards',
            data: {
                cards: [
                    { front: "🙏", back: "Please", color: "bg-white" },
                    { front: "🎁", back: "Thank You", color: "bg-white" },
                    { front: "🤕", back: "Sorry", color: "bg-white" },
                    { front: "🚪", back: "Excuse Me", color: "bg-white" }
                ]
            }
        },
        {
            id: 'sel-8',
            title: 'Feeling Detective',
            icon: '🕵️',
            colorClass: 'bg-indigo-100 text-indigo-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "Sam dropped his ice cream. He feels...", options: ["Sad", "Happy"], correctIndex: 0, image: "🍦" },
                    { q: "It's your birthday! You feel...", options: ["Excited", "Angry"], correctIndex: 0, image: "🎂" },
                    { q: "Loud thunder! You feel...", options: ["Scared", "Silly"], correctIndex: 0, image: "⚡" }
                ]
            }
        },
        {
            id: 'sel-9',
            title: 'The Helpful Bee',
            icon: '🐝',
            colorClass: 'bg-amber-100 text-amber-600',
            type: 'story',
            data: {
                pages: [
                    { image: "🐜", text: "Bee saw Ant carrying a heavy leaf." },
                    { image: "🐝", text: "'That looks heavy!' said Bee." },
                    { image: "🥵", text: "'It is,' said Ant. 'I am tired.'" },
                    { image: "🤲", text: "Bee flew down to help." },
                    { image: "🏡", text: "Together they carried it home." },
                    { image: "😊", text: "'Thank you!' said Ant." }
                ]
            }
        },
        {
            id: 'sel-10',
            title: 'Listen or Ignore',
            icon: '👂',
            colorClass: 'bg-emerald-100 text-emerald-600',
            type: 'sorting',
            data: {
                instruction: "Listening or Ignoring?",
                categoryA: "Listening",
                categoryB: "Ignoring",
                items: [
                    { content: "👀", category: "A" },
                    { content: "🙈", category: "B" },
                    { content: "👂", category: "A" },
                    { content: "🗣️", category: "B" }
                ]
            }
        }
    ],
    'fine-motor': [
        {
            id: 'fm-1',
            title: 'Line Tracer',
            icon: '✏️',
            colorClass: 'bg-purple-100 text-purple-600',
            type: 'flashcards',
            data: {
                cards: [
                    { front: "➖", back: "Straight Line", color: "bg-white" },
                    { front: "〰️", back: "Wavy Line", color: "bg-white" },
                    { front: "⚡", back: "Zig Zag", color: "bg-white" },
                    { front: "🌀", back: "Swirl", color: "bg-white" }
                ]
            }
        },
        {
            id: 'fm-2',
            title: 'Sorting Sizes',
            icon: '📏',
            colorClass: 'bg-purple-100 text-purple-600',
            type: 'sorting',
            data: {
                instruction: "Big or Small?",
                categoryA: "Big",
                categoryB: "Small",
                items: [
                    { content: "🐘", category: "A" },
                    { content: "🐜", category: "B" },
                    { content: "🚙", category: "A" },
                    { content: "🍓", category: "B" }
                ]
            }
        },
        {
            id: 'fm-3',
            title: 'Shape Tracing',
            icon: '⭕',
            colorClass: 'bg-blue-100 text-blue-600',
            type: 'flashcards',
            data: {
                cards: [
                    { front: "⭕", back: "Trace the Circle", color: "bg-white" },
                    { front: "🟥", back: "Trace the Square", color: "bg-white" },
                    { front: "🔺", back: "Trace the Triangle", color: "bg-white" },
                    { front: "⭐", back: "Trace the Star", color: "bg-white" }
                ]
            }
        },
        {
            id: 'fm-4',
            title: 'Cut or Draw',
            icon: '✂️',
            colorClass: 'bg-pink-100 text-pink-600',
            type: 'sorting',
            data: {
                instruction: "Cut or Draw?",
                categoryA: "Cut",
                categoryB: "Draw",
                items: [
                    { content: "✂️", category: "A" },
                    { content: "🖍️", category: "B" },
                    { content: "🪚", category: "A" },
                    { content: "✏️", category: "B" }
                ]
            }
        },
        {
            id: 'fm-5',
            title: 'Finger Fitness',
            icon: '🖐️',
            colorClass: 'bg-yellow-100 text-yellow-600',
            type: 'flashcards',
            data: {
                cards: [
                    { front: "✊", back: "Squeeze!", color: "bg-white" },
                    { front: "🖐️", back: "Stretch!", color: "bg-white" },
                    { front: "👆", back: "Point!", color: "bg-white" },
                    { front: "👍", back: "Thumbs Up!", color: "bg-white" }
                ]
            }
        },
        {
            id: 'fm-6',
            title: 'Pattern Beads',
            icon: '📿',
            colorClass: 'bg-teal-100 text-teal-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "Yellow, Green, Yellow, ...?", options: ["Green", "Yellow", "Red"], correctIndex: 0, image: "🟡🟢🟡❓" },
                    { q: "Triangle, Star, Triangle, ...?", options: ["Star", "Triangle", "Circle"], correctIndex: 0, image: "🔺⭐🔺❓" },
                    { q: "Up, Down, Up, ...?", options: ["Down", "Up", "Left"], correctIndex: 0, image: "⬆️⬇️⬆️❓" }
                ]
            }
        },
        {
            id: 'fm-7',
            title: 'Tool Time',
            icon: '🔨',
            colorClass: 'bg-gray-100 text-gray-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "Tool for cutting paper?", options: ["Scissors", "Spoon", "Rock"], correctIndex: 0, image: "📄" },
                    { q: "Tool for writing?", options: ["Pencil", "Leaf", "Stick"], correctIndex: 0, image: "📝" },
                    { q: "Tool for glueing?", options: ["Glue Stick", "Water", "Dirt"], correctIndex: 0, image: "🖼️" }
                ]
            }
        },
        {
            id: 'fm-8',
            title: 'Button Sort',
            icon: '🔘',
            colorClass: 'bg-indigo-100 text-indigo-600',
            type: 'sorting',
            data: {
                instruction: "Round or Square?",
                categoryA: "Round",
                categoryB: "Square",
                items: [
                    { content: "⚫️", category: "A" },
                    { content: "⬛️", category: "B" },
                    { content: "🔴", category: "A" },
                    { content: "🟦", category: "B" }
                ]
            }
        },
        {
            id: 'fm-9',
            title: 'The Busy Weaver',
            icon: '🕷️',
            colorClass: 'bg-black text-white',
            type: 'story',
            data: {
                pages: [
                    { image: "🕷️", text: "The little spider wanted to build a home." },
                    { image: "🧶", text: "She spun a long, silky thread. Up and down." },
                    { image: "🕸️", text: "She connected the lines carefully. Round and round." },
                    { image: "🏃", text: "Her legs moved fast and sure." },
                    { image: "✨", text: "Look! A beautiful web." },
                    { image: "😊", text: "Good job, little spider!" }
                ]
            }
        },
        {
            id: 'fm-10',
            title: 'Direction Detective',
            icon: '⬅️',
            colorClass: 'bg-green-100 text-green-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "Which arrow points UP?", options: ["⬆️", "⬇️", "⬅️"], correctIndex: 0, image: "" },
                    { q: "Which arrow points DOWN?", options: ["⬇️", "⬆️", "➡️"], correctIndex: 0, image: "" },
                    { q: "Which hand is waving?", options: ["👋", "🦵", "👃"], correctIndex: 0, image: "" }
                ]
            }
        }
    ],
    'exploration': [
        {
            id: 'exp-1',
            title: 'Day and Night',
            icon: '☀️',
            colorClass: 'bg-green-100 text-green-600',
            type: 'sorting',
            data: {
                instruction: "Day or Night?",
                categoryA: "Day",
                categoryB: "Night",
                items: [
                    { content: "☀️", category: "A" },
                    { content: "🌙", category: "B" },
                    { content: "😎", category: "A" },
                    { content: "🦉", category: "B" }
                ]
            }
        },
        {
            id: 'exp-2',
            title: 'Animal Homes',
            icon: '🏠',
            colorClass: 'bg-green-100 text-green-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "Who lives in a nest?", options: ["Bird", "Fish", "Dog"], correctIndex: 0, image: "🪺" },
                    { q: "Who lives in the ocean?", options: ["Whale", "Bear", "Cat"], correctIndex: 0, image: "🌊" },
                    { q: "Who lives in a cave?", options: ["Bat", "Bird", "Horse"], correctIndex: 0, image: "🦇" }
                ]
            }
        },
        {
            id: 'exp-3',
            title: 'Weather Words',
            icon: '🌦️',
            colorClass: 'bg-sky-100 text-sky-600',
            type: 'flashcards',
            data: {
                cards: [
                    { front: "☀️", back: "Sunny", color: "bg-yellow-100" },
                    { front: "🌧️", back: "Rainy", color: "bg-blue-100" },
                    { front: "❄️", back: "Snowy", color: "bg-white" },
                    { front: "💨", back: "Windy", color: "bg-gray-100" }
                ]
            }
        },
        {
            id: 'exp-4',
            title: 'Five Senses',
            icon: '👂',
            colorClass: 'bg-orange-100 text-orange-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "We use eyes to...", options: ["See", "Hear", "Smell"], correctIndex: 0, image: "👀" },
                    { q: "We use ears to...", options: ["Hear", "Taste", "Touch"], correctIndex: 0, image: "👂" },
                    { q: "We use our nose to...", options: ["Smell", "See", "Run"], correctIndex: 0, image: "👃" }
                ]
            }
        },
        {
            id: 'exp-5',
            title: 'Living or Not?',
            icon: '🌱',
            colorClass: 'bg-green-100 text-green-600',
            type: 'sorting',
            data: {
                instruction: "Living or Not Living?",
                categoryA: "Living",
                categoryB: "Not Living",
                items: [
                    { content: "🐶", category: "A" },
                    { content: "🪨", category: "B" },
                    { content: "🌳", category: "A" },
                    { content: "🚗", category: "B" }
                ]
            }
        },
        {
            id: 'exp-6',
            title: 'Hot or Cold?',
            icon: '🌡️',
            colorClass: 'bg-red-100 text-red-600',
            type: 'sorting',
            data: {
                instruction: "Hot or Cold?",
                categoryA: "Hot",
                categoryB: "Cold",
                items: [
                    { content: "🔥", category: "A" },
                    { content: "🧊", category: "B" },
                    { content: "☀️", category: "A" },
                    { content: "⛄", category: "B" }
                ]
            }
        },
        {
            id: 'exp-7',
            title: 'Sink or Float',
            icon: '🚤',
            colorClass: 'bg-blue-100 text-blue-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "Does a rock sink or float?", options: ["Sink", "Float"], correctIndex: 0, image: "🪨" },
                    { q: "Does a boat sink or float?", options: ["Float", "Sink"], correctIndex: 0, image: "⛵" },
                    { q: "Does a feather sink or float?", options: ["Float", "Sink"], correctIndex: 0, image: "🪶" }
                ]
            }
        },
        {
            id: 'exp-8',
            title: 'Recycle Sort',
            icon: '♻️',
            colorClass: 'bg-green-100 text-green-600',
            type: 'sorting',
            data: {
                instruction: "Recycle or Trash?",
                categoryA: "Recycle",
                categoryB: "Trash",
                items: [
                    { content: "📰", category: "A" },
                    { content: "🍎", category: "B" },
                    { content: "🥤", category: "A" },
                    { content: "🤧", category: "B" }
                ]
            }
        },
        {
            id: 'exp-9',
            title: 'Space Tour',
            icon: '🚀',
            colorClass: 'bg-indigo-100 text-indigo-600',
            type: 'flashcards',
            data: {
                cards: [
                    { front: "☀️", back: "Sun", color: "bg-yellow-100" },
                    { front: "🌙", back: "Moon", color: "bg-gray-100" },
                    { front: "🌍", back: "Earth", color: "bg-blue-100" },
                    { front: "⭐", back: "Star", color: "bg-yellow-50" }
                ]
            }
        },
        {
            id: 'exp-10',
            title: 'The Little Seed',
            icon: '🌻',
            colorClass: 'bg-yellow-100 text-yellow-600',
            type: 'story',
            data: {
                pages: [
                    { image: "🌱", text: "Once there was a tiny seed in the dirt." },
                    { image: "🌧️", text: "The rain fell. Drink, seed, drink!" },
                    { image: "☀️", text: "The sun shone. Warm, seed, warm!" },
                    { image: "🌿", text: "Pop! A little green stem came out." },
                    { image: "🍃", text: "Leaves grew big and green." },
                    { image: "🌻", text: "Look! A beautiful flower!" }
                ]
            }
        }
    ],
    'songs': [
        {
            id: 'sng-1',
            title: 'Old MacDonald',
            icon: '🚜',
            colorClass: 'bg-teal-100 text-teal-600',
            type: 'flashcards',
            data: {
                cards: [
                    { front: "🐮", back: "Moo Moo", color: "bg-white" },
                    { front: "🐷", back: "Oink Oink", color: "bg-white" },
                    { front: "🦆", back: "Quack Quack", color: "bg-white" },
                    { front: "🐑", back: "Baa Baa", color: "bg-white" }
                ]
            }
        },
        {
            id: 'sng-2',
            title: 'Twinkle Star',
            icon: '⭐',
            colorClass: 'bg-teal-100 text-teal-600',
            type: 'quiz',
            data: {
                questions: [
                    { q: "Twinkle twinkle little...?", options: ["Star", "Car", "Jar"], correctIndex: 0, image: "✨" },
                    { q: "Up above the world so...?", options: ["High", "Low", "Far"], correctIndex: 0, image: "🌍" },
                    { q: "Like a diamond in the...?", options: ["Sky", "Pie", "Eye"], correctIndex: 0, image: "💎" }
                ]
            }
        }
    ],
    'story-library': [
        {
            id: 'lib-1',
            title: 'The Very Hungry Caterpillar',
            icon: '🐛',
            colorClass: 'bg-green-100 text-green-700',
            type: 'story',
            data: {
                pages: [
                    { image: "🥚", text: "In the light of the moon, a little egg lay on a leaf." },
                    { image: "☀️", text: "One Sunday morning, the warm sun came up." },
                    { image: "🐛", text: "Pop! Out of the egg came a tiny and very hungry caterpillar." },
                    { image: "🍎", text: "On Monday, he ate through one apple. But he was still hungry." },
                    { image: "🍐🍐", text: "On Tuesday, he ate through two pears, but he was still hungry." },
                    { image: "🍓🍓", text: "On Thursday, he ate through four strawberries!" },
                    { image: "🍰🍉", text: "On Saturday, he ate a lot of food and had a tummy ache!" },
                    { image: "🍃", text: "The next day was Sunday again. He ate one nice green leaf." },
                    { image: "🏡", text: "He built a small house called a cocoon around himself." },
                    { image: "🦋", text: "Then he nibbled a hole in the cocoon and... he was a beautiful butterfly!" }
                ]
            }
        },
        {
            id: 'lib-2',
            title: 'Goldilocks and the Three Bears',
            icon: '🐻',
            colorClass: 'bg-amber-100 text-amber-800',
            type: 'story',
            data: {
                pages: [
                    { image: "👧🏼", text: "Once upon a time, there was a girl named Goldilocks." },
                    { image: "🏠", text: "She found a house in the forest. No one was home." },
                    { image: "🥣", text: "She tasted the porridge. 'This one is too hot!' she said." },
                    { image: "🥣", text: "She tasted the next one. 'This one is too cold!'" },
                    { image: "😋", text: "She tasted the last one. 'This one is just right!' and she ate it all up." },
                    { image: "🪑", text: "She sat on a big chair. 'Too hard!' Then a medium chair. 'Too soft!'" },
                    { image: "💥", text: "She sat on the little chair. 'Just right!' But then it broke!" },
                    { image: "🛏️", text: "She went upstairs. The little bed was just right, so she fell asleep." },
                    { image: "🐻🐻🐻", text: "The three bears came home! 'Someone has been eating my porridge!'" },
                    { image: "😱", text: "They found Goldilocks! She woke up and ran all the way home." }
                ]
            }
        },
        {
            id: 'lib-3',
            title: 'The Three Little Pigs',
            icon: '🐷',
            colorClass: 'bg-pink-100 text-pink-600',
            type: 'story',
            data: {
                pages: [
                    { image: "🐷🐷🐷", text: "Three little pigs set out to build their own houses." },
                    { image: "🌾", text: "The first pig built his house of straw because it was easy." },
                    { image: "🪵", text: "The second pig built his house of sticks." },
                    { image: "🧱", text: "The third pig worked hard and built his house of bricks." },
                    { image: "🐺", text: "A big bad wolf came to the straw house. 'I'll huff and puff and blow your house down!'" },
                    { image: "💨", text: "Whoosh! The straw house blew away. The pig ran to the stick house." },
                    { image: "💨", text: "The wolf blew the stick house down too! The pigs ran to the brick house." },
                    { image: "😤", text: "The wolf huffed and puffed, but he could not blow down the brick house!" },
                    { image: "🔥", text: "He tried to go down the chimney but fell into a pot of soup!" },
                    { image: "🎉", text: "The wolf ran away, and the pigs lived happily ever after." }
                ]
            }
        },
        {
            id: 'lib-4',
            title: 'Little Red Riding Hood',
            icon: '👒',
            colorClass: 'bg-red-100 text-red-700',
            type: 'story',
            data: {
                pages: [
                    { image: "👧", text: "Little Red Riding Hood was taking a basket of food to her Grandma." },
                    { image: "🐺", text: "In the woods, she met a wolf. 'Where are you going?' he asked." },
                    { image: "👵", text: "'To Grandma's house,' she said. The wolf ran there first!" },
                    { image: "🚪", text: "The wolf locked Grandma in the closet and dressed in her clothes." },
                    { image: "👀", text: "Red arrived. 'Grandma, what big eyes you have!' 'The better to see you with.'" },
                    { image: "👂", text: "'Grandma, what big ears you have!' 'The better to hear you with.'" },
                    { image: "🦷", text: "'Grandma, what big teeth you have!' 'The better to eat you with!'" },
                    { image: "🪓", text: "Just then, a woodcutter came in and scared the wolf away!" },
                    { image: "🫂", text: "He let Grandma out, and they were all safe." },
                    { image: "🧺", text: "They ate the lunch together happily." }
                ]
            }
        },
        {
            id: 'lib-5',
            title: 'Brown Bear, Brown Bear',
            icon: '🐻',
            colorClass: 'bg-amber-100 text-amber-900',
            type: 'story',
            data: {
                pages: [
                    { image: "🐻", text: "Brown Bear, Brown Bear, what do you see?" },
                    { image: "🐦", text: "I see a Red Bird looking at me." },
                    { image: "🐤", text: "Red Bird, Red Bird, what do you see? I see a Yellow Duck." },
                    { image: "🐴", text: "Yellow Duck, Yellow Duck, what do you see? I see a Blue Horse." },
                    { image: "🐸", text: "Blue Horse, Blue Horse, what do you see? I see a Green Frog." },
                    { image: "🐱", text: "Green Frog, Green Frog, what do you see? I see a Purple Cat." },
                    { image: "🐶", text: "Purple Cat, Purple Cat, what do you see? I see a White Dog." },
                    { image: "🐑", text: "White Dog, White Dog, what do you see? I see a Black Sheep." },
                    { image: "🐠", text: "Black Sheep, Black Sheep, what do you see? I see a Goldfish." },
                    { image: "👀", text: "Goldfish, Goldfish, what do you see? I see children looking at me!" }
                ]
            }
        },
        {
            id: 'lib-6',
            title: 'The Tortoise and the Hare',
            icon: '🐢',
            colorClass: 'bg-green-100 text-green-800',
            type: 'story',
            data: {
                pages: [
                    { image: "🐇", text: "The Hare was boasting about how fast he could run." },
                    { image: "🐢", text: "The Tortoise said, 'I will race you!'" },
                    { image: "😂", text: "The Hare laughed. 'You? I will win easily!'" },
                    { image: "🏁", text: "The race began. Zoom! The Hare ran far ahead." },
                    { image: "💤", text: "The Hare was so far ahead, he took a nap under a tree." },
                    { image: "🚶", text: "The Tortoise kept walking. Slow and steady." },
                    { image: "👀", text: "He passed the sleeping Hare." },
                    { image: "😲", text: "The Hare woke up! He ran as fast as he could." },
                    { image: "🏆", text: "But it was too late. The Tortoise crossed the finish line!" },
                    { image: "🌟", text: "Slow and steady wins the race." }
                ]
            }
        },
        {
            id: 'lib-7',
            title: 'The Lion and the Mouse',
            icon: '🦁',
            colorClass: 'bg-yellow-100 text-yellow-800',
            type: 'story',
            data: {
                pages: [
                    { image: "🦁", text: "A Lion was sleeping. A little Mouse ran over his paw." },
                    { image: "😠", text: "The Lion woke up and grabbed the Mouse. 'I will eat you!'" },
                    { image: "🐭", text: "'Please let me go!' said the Mouse. 'Maybe I can help you someday.'" },
                    { image: "😆", text: "The Lion laughed. 'You are too small to help me.' But he let him go." },
                    { image: "🕸️", text: "Later, hunters caught the Lion in a big net." },
                    { image: "🦁", text: "He roared for help, but he couldn't get out." },
                    { image: "🐭", text: "The Mouse heard the Lion. He ran to the net." },
                    { image: "🦷", text: "Nibble, nibble, nibble. The Mouse chewed the ropes." },
                    { image: "⛓️", text: "The net broke open! The Lion was free." },
                    { image: "🤝", text: "'Thank you,' said the Lion. 'Little friends can do big things.'" }
                ]
            }
        },
        {
            id: 'lib-8',
            title: 'Jack and the Beanstalk',
            icon: '🌱',
            colorClass: 'bg-green-100 text-green-700',
            type: 'story',
            data: {
                pages: [
                    { image: "🐄", text: "Jack traded his cow for magic beans." },
                    { image: "🌱", text: "His mom threw them out the window. Overnight, a giant beanstalk grew!" },
                    { image: "☁️", text: "Jack climbed up, up, up into the clouds." },
                    { image: "🏰", text: "He found a giant castle." },
                    { image: "👹", text: "A Giant lived there. 'Fee Fi Fo Fum!'" },
                    { image: "🥚", text: "Jack found a goose that laid golden eggs." },
                    { image: "🏃", text: "He took the goose and ran! The Giant chased him." },
                    { image: "🪓", text: "Jack climbed down fast and chopped the beanstalk." },
                    { image: "📉", text: "The stalk fell, and the Giant couldn't come down." },
                    { image: "🏡", text: "Jack and his mom lived happily ever after." }
                ]
            }
        },
        {
            id: 'lib-9',
            title: 'The Ugly Duckling',
            icon: '🦢',
            colorClass: 'bg-slate-100 text-slate-600',
            type: 'story',
            data: {
                pages: [
                    { image: "🥚", text: "A mother duck sat on her eggs. One egg was very big." },
                    { image: "🐣", text: "The eggs hatched. But the big egg hatched last." },
                    { image: "🦆", text: "Out came a grey, funny-looking bird. 'He is ugly,' said the others." },
                    { image: "😢", text: "No one wanted to play with him. He was very sad." },
                    { image: "🚶", text: "He ran away and spent the winter alone." },
                    { image: "☀️", text: "Spring came. He saw beautiful white birds on the water." },
                    { image: "💧", text: "He looked at his reflection in the water." },
                    { image: "🦢", text: "He wasn't an ugly duckling anymore. He was a beautiful Swan!" },
                    { image: "❤️", text: "The other swans welcomed him." },
                    { image: "😊", text: "He was so happy to find his family." }
                ]
            }
        },
        {
            id: 'lib-10',
            title: 'Humpty Dumpty',
            icon: '🧱',
            colorClass: 'bg-blue-100 text-blue-700',
            type: 'story',
            data: {
                pages: [
                    { image: "🥚", text: "Humpty Dumpty sat on a wall." },
                    { image: "😎", text: "He was having a great time looking at the kingdom." },
                    { image: "🤸", text: "Humpty Dumpty had a great fall!" },
                    { image: "💥", text: "Crash! He fell to the ground." },
                    { image: "🐎", text: "All the king's horses..." },
                    { image: "👮", text: "...and all the king's men..." },
                    { image: "🧩", text: "Tried to put Humpty together again." },
                    { image: "🩹", text: "They used glue and tape." },
                    { image: "🤕", text: "He was a bit cracked, but he was okay." },
                    { image: "🧱", text: "Next time, he sat on a lower wall!" }
                ]
            }
        },
        {
            id: 'lib-11',
            title: 'Itsy Bitsy Spider',
            icon: '🕷️',
            colorClass: 'bg-purple-100 text-purple-700',
            type: 'story',
            data: {
                pages: [
                    { image: "🕷️", text: "The Itsy Bitsy Spider went up the water spout." },
                    { image: "🌧️", text: "Down came the rain!" },
                    { image: "🌊", text: "And washed the spider out." },
                    { image: "☀️", text: "Out came the sun and dried up all the rain." },
                    { image: "🕷️", text: "And the Itsy Bitsy Spider went up the spout again." },
                    { image: "🧗", text: "He climbed higher and higher." },
                    { image: "🕸️", text: "He spun a beautiful web at the top." },
                    { image: "🪰", text: "He caught a fly for lunch." },
                    { image: "😴", text: "Then he took a nap in the sunshine." },
                    { image: "😊", text: "Good job, spider!" }
                ]
            }
        },
        {
            id: 'lib-12',
            title: 'Goodnight Moon',
            icon: '🌙',
            colorClass: 'bg-indigo-100 text-indigo-800',
            type: 'story',
            data: {
                pages: [
                    { image: "🟩", text: "In the great green room..." },
                    { image: "🎈", text: "There was a telephone and a red balloon." },
                    { image: "🖼️", text: "And a picture of a cow jumping over the moon." },
                    { image: "🐻", text: "And three little bears sitting on chairs." },
                    { image: "🧤", text: "And two little kittens and a pair of mittens." },
                    { image: "🏠", text: "And a little toyhouse and a young mouse." },
                    { image: "🌙", text: "Goodnight room. Goodnight moon." },
                    { image: "🐄", text: "Goodnight cow jumping over the moon." },
                    { image: "🕯️", text: "Goodnight light and the red balloon." },
                    { image: "💤", text: "Goodnight noises everywhere." }
                ]
            }
        }
    ],
    'toddler-learning': [
        {
            id: 'tl-1',
            title: 'Color Spin',
            icon: '🎨',
            colorClass: 'bg-pink-100 text-pink-600',
            type: 'game',
            data: {
                gameId: 'color-spin',
                colors: [
                    { name: 'Red', hex: '#ef4444', class: 'bg-red-500', textClass: 'text-red-500' },
                    { name: 'Blue', hex: '#3b82f6', class: 'bg-blue-500', textClass: 'text-blue-500' },
                    { name: 'Yellow', hex: '#eab308', class: 'bg-yellow-400', textClass: 'text-yellow-500' },
                    { name: 'Green', hex: '#22c55e', class: 'bg-green-500', textClass: 'text-green-500' },
                    { name: 'Purple', hex: '#a855f7', class: 'bg-purple-500', textClass: 'text-purple-500' },
                    { name: 'Orange', hex: '#f97316', class: 'bg-orange-500', textClass: 'text-orange-500' }
                ],
                items: [
                    { id: 'c1', content: '🥦', color: 'Green', name: 'Broccoli' },
                    { id: 'c2', content: '🍌', color: 'Yellow', name: 'Banana' },
                    { id: 'c3', content: '🪑', color: 'Blue', name: 'Chair' },
                    { id: 'c4', content: '🎃', color: 'Orange', name: 'Pumpkin' },
                    { id: 'c5', content: '🐸', color: 'Green', name: 'Frog' },
                    { id: 'c6', content: '🍓', color: 'Red', name: 'Strawberry' },
                    { id: 'c7', content: '👜', color: 'Purple', name: 'Purse' },
                    { id: 'c8', content: '🏀', color: 'Orange', name: 'Basketball' },
                    { id: 'c9', content: '🧀', color: 'Yellow', name: 'Cheese' },
                    { id: 'c10', content: '🚙', color: 'Blue', name: 'Car' },
                    { id: 'c11', content: '🌲', color: 'Green', name: 'Tree' },
                    { id: 'c12', content: '🫐', color: 'Blue', name: 'Blueberries' },
                    { id: 'c13', content: '🍇', color: 'Purple', name: 'Grapes' },
                    { id: 'c14', content: '🥕', color: 'Orange', name: 'Carrot' },
                    { id: 'c15', content: '🌻', color: 'Yellow', name: 'Sunflower' },
                    { id: 'c16', content: '🍎', color: 'Red', name: 'Apple' }
                ]
            }
        },
        {
            id: 'tl-2',
            title: 'Counting',
            icon: '🔢',
            colorClass: 'bg-blue-100 text-blue-600',
            type: 'game',
            data: {
                gameId: 'counting',
                rounds: [
                    { emoji: '🐻', count: 2, options: ['1', '2', '3'] },
                    { emoji: '🍎', count: 3, options: ['2', '3', '4'] },
                    { emoji: '⭐', count: 1, options: ['1', '0', '2'] }
                ]
            }
        },
        {
            id: 'tl-4',
            title: 'Handwriting',
            icon: '✍️',
            colorClass: 'bg-yellow-100 text-yellow-600',
            type: 'game',
            data: {
                gameId: 'tracing',
                letters: ['A', 'B', 'C']
            }
        },
        {
            id: 'tl-5',
            title: 'Jack in a Box',
            icon: '🎁',
            colorClass: 'bg-red-100 text-red-600',
            type: 'game',
            data: {
                gameId: 'jack-in-box',
                tapsRequired: 5
            }
        },
        {
            id: 'tl-6',
            title: 'Jigsaw Puzzles',
            icon: '🧩',
            colorClass: 'bg-orange-100 text-orange-600',
            type: 'game',
            data: {
                gameId: 'puzzles',
                puzzles: [
                    { 
                        name: 'Happy Lion', 
                        image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&h=600&q=80',
                        rows: 2,
                        cols: 2
                    },
                    { 
                        name: 'Cute Elephant', 
                        image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=600&h=600&q=80',
                        rows: 2,
                        cols: 2
                    },
                    { 
                        name: 'Playful Monkey', 
                        image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=600&h=600&q=80',
                        rows: 3,
                        cols: 2
                    },
                    { 
                        name: 'Friendly Giraffe', 
                        image: 'https://images.unsplash.com/photo-1547721064-36202633ad1b?auto=format&fit=crop&w=600&h=600&q=80',
                        rows: 2,
                        cols: 3
                    }
                ]
            }
        },
        {
            id: 'tl-8',
            title: 'Matching game',
            icon: '🍎',
            colorClass: 'bg-green-100 text-green-600',
            type: 'game',
            data: {
                gameId: 'matching-drag',
                items: [
                    { id: '1', content: '🍎', matchId: 'm1' },
                    { id: '2', content: '🍌', matchId: 'm2' },
                    { id: '3', content: '🍇', matchId: 'm3' }
                ],
                targets: [
                    { id: 'm1', label: 'Apple' },
                    { id: 'm2', label: 'Banana' },
                    { id: 'm3', label: 'Grapes' }
                ]
            }
        },
        {
            id: 'tl-9',
            title: 'Memory',
            icon: '🎴',
            colorClass: 'bg-red-100 text-red-600',
            type: 'game',
            data: {
                gameId: 'memory',
                items: ['🐶', '🐱', '🐭', '🐹']
            }
        },
        {
            id: 'tl-10',
            title: 'Sorting',
            icon: '🦋',
            colorClass: 'bg-green-100 text-green-600',
            type: 'game',
            data: {
                gameId: 'sorting-drag',
                bins: [
                    { id: 'insects', label: 'Insects', icon: '🐜' },
                    { id: 'animals', label: 'Animals', icon: '🐾' }
                ],
                items: [
                    { id: 's1', content: '🦋', binId: 'insects' },
                    { id: 's2', content: '🐶', binId: 'animals' },
                    { id: 's3', content: '🐞', binId: 'insects' },
                    { id: 's4', content: '🐱', binId: 'animals' },
                    { id: 's5', content: '🐝', binId: 'insects' },
                    { id: 's6', content: '🦁', binId: 'animals' }
                ]
            }
        },
        {
            id: 'tl-11',
            title: 'Same or Different',
            icon: '🐶',
            colorClass: 'bg-blue-100 text-blue-600',
            type: 'game',
            data: {
                gameId: 'odd-one-out',
                rounds: [
                    { items: ['🐶', '🐶', '🐱'], target: '🐱' },
                    { items: ['🍎', '🍌', '🍎'], target: '🍌' },
                    { items: ['⭐', '🌙', '⭐'], target: '🌙' }
                ]
            }
        },
        {
            id: 'tl-12',
            title: 'Sound Buttons',
            icon: '🐱',
            colorClass: 'bg-orange-100 text-orange-600',
            type: 'game',
            data: {
                gameId: 'sound-board',
                buttons: [
                    { icon: '🐱', sound: 'Meow' },
                    { icon: '🐶', sound: 'Woof' },
                    { icon: '🐮', sound: 'Moo' }
                ]
            }
        },
        {
            id: 'tl-13',
            title: 'Sounds',
            icon: '👂',
            colorClass: 'bg-yellow-100 text-yellow-600',
            type: 'game',
            data: {
                gameId: 'sound-quiz',
                rounds: [
                    { sound: 'Meow', options: ['Cat', 'Dog', 'Cow'], correct: 'Cat' },
                    { sound: 'Oink', options: ['Pig', 'Sheep', 'Duck'], correct: 'Pig' }
                ]
            }
        },
        {
            id: 'tl-14',
            title: 'The Alphabet',
            icon: '🅰️',
            colorClass: 'bg-rose-100 text-rose-600',
            type: 'game',
            data: {
                gameId: 'alphabet-explorer',
                letters: [
                    { char: 'A', word: 'Apple', emoji: '🍎' },
                    { char: 'B', word: 'Ball', emoji: '⚽' },
                    { char: 'C', word: 'Cat', emoji: '🐱' },
                    { char: 'D', word: 'Dog', emoji: '🐶' }
                ]
            }
        }
    ]
};
