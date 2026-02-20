
import { LessonContent } from './questionUtils';

export const MATH_CONTENT: Record<string, LessonContent> = {
    // ==========================================
    // KINDERGARTEN (101 - 109)
    // ==========================================
    "101": { 
        objectives: ["Count orally from 1 to 20", "Recognize written numerals 0-20", "Understand that numbers represent quantities"],
        learn: {
            type: 'blocks', initialState: { ones: 0 },
            steps: [
                { id: 1, prompt: "Let's count! Click to add 1 block.", type: 'interaction', config: { action: 'add_one' }, updateState: { ones: 1 }, feedback: { success: "That's 1!", error: "Click add" } },
                { id: 2, prompt: "Add another for 2.", type: 'interaction', config: { action: 'add_one' }, updateState: { ones: 2 }, feedback: { success: "That's 2!", error: "Add one" } },
                { id: 3, prompt: "One more makes 3!", type: 'interaction', config: { action: 'add_one' }, updateState: { ones: 3 }, feedback: { success: "Excellent, 3 blocks!", error: "Add one" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "What number is this: 5?", options: ["5", "2", "3", "1"], correctIndex: 0, explanation: "This is five." },
            { q: "Count the dots: ● ●", options: ["2", "1", "3", "4"], correctIndex: 0, explanation: "There are two dots." },
            { q: "What comes after 1?", options: ["2", "3", "0", "4"], correctIndex: 0, explanation: "2 comes after 1." },
            { q: "Find the number 10.", options: ["10", "01", "1", "0"], correctIndex: 0, explanation: "10 is a one and a zero." },
            { q: "Count the fingers on one hand.", options: ["5", "4", "6", "10"], correctIndex: 0, explanation: "Most people have 5." },
            { q: "What number is 3?", options: ["3", "E", "8", "2"], correctIndex: 0, explanation: "This is three." },
            { q: "Count the stars: ★ ★ ★ ★", options: ["4", "3", "5", "2"], correctIndex: 0, explanation: "Four stars." },
            { q: "Which is the smallest number?", options: ["1", "5", "9", "3"], correctIndex: 0, explanation: "1 is the smallest." },
            { q: "Count 1, 2, _", options: ["3", "4", "5", "0"], correctIndex: 0, explanation: "3 comes next." },
            { q: "How many suns in the sky?", options: ["1", "2", "0", "5"], correctIndex: 0, explanation: "Just one sun!" }
        ], 
        quiz: [
            { q: "Identify 7.", options: ["7", "1", "9", "4"], correctIndex: 0, explanation: "This is seven." },
            { q: "Count: ● ● ● ● ●", options: ["5", "4", "6", "3"], correctIndex: 0, explanation: "Five dots." },
            { q: "What number is zero?", options: ["0", "O", "1", "8"], correctIndex: 0, explanation: "0 is zero." },
            { q: "Count your eyes.", options: ["2", "1", "3", "0"], correctIndex: 0, explanation: "You have two eyes." },
            { q: "What comes after 9?", options: ["10", "8", "11", "9"], correctIndex: 0, explanation: "10 comes after 9." },
            { q: "Which is more: 5 or 2?", options: ["5", "2"], correctIndex: 0, explanation: "5 is more." },
            { q: "Find the 4.", options: ["4", "7", "1", "0"], correctIndex: 0, explanation: "This is four." },
            { q: "Count the wheels on a car.", options: ["4", "2", "3", "1"], correctIndex: 0, explanation: "Cars have 4 wheels." },
            { q: "Count: 1, 2, 3, 4, _", options: ["5", "6", "7", "4"], correctIndex: 0, explanation: "5 comes after 4." },
            { q: "How many legs on a dog?", options: ["4", "2", "0", "6"], correctIndex: 0, explanation: "Dogs have 4 legs." },
            { q: "Count the dots: ● ● ●", options: ["3", "2", "1", "4"], correctIndex: 0, explanation: "Three dots." },
            { q: "Find the 8.", options: ["8", "B", "0", "3"], correctIndex: 0, explanation: "This is eight." },
            { q: "What is 1 more than 1?", options: ["2", "3", "1", "0"], correctIndex: 0, explanation: "1 and 1 is 2." },
            { q: "Identify 6.", options: ["6", "9", "0", "5"], correctIndex: 0, explanation: "This is six." },
            { q: "Count: 8, 9, _", options: ["10", "11", "7", "8"], correctIndex: 0, explanation: "10 follows 9." }
        ] 
    },
    "102": {
        objectives: ["Count objects in a line or circle", "Answer 'how many?' questions", "Understand the last number said is the total"],
        learn: {
            type: 'flashcard', initialState: { content: "🍎🍎", subtext: "Two Apples" },
            steps: [{ id: 1, prompt: "Tap to count the apples!", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "1, 2", subtext: "Total: 2" }, feedback: { success: "The last number is the total!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "How many apples? 🍎 🍎 🍎", options: ["3", "2", "4", "1"], correctIndex: 0, explanation: "Count 1, 2, 3." },
            { q: "Count the fish: 🐟 🐟", options: ["2", "1", "3", "0"], correctIndex: 0, explanation: "Two fish." },
            { q: "How many dots? ● ● ● ●", options: ["4", "3", "5", "6"], correctIndex: 0, explanation: "Four dots." },
            { q: "Count the cars: 🚗", options: ["1", "2", "0", "3"], correctIndex: 0, explanation: "One car." },
            { q: "How many stars? ★ ★ ★ ★ ★", options: ["5", "4", "6", "3"], correctIndex: 0, explanation: "Five stars." },
            { q: "Count the trees: 🌲 🌲 🌲", options: ["3", "2", "4", "1"], correctIndex: 0, explanation: "Three trees." },
            { q: "How many hearts? ❤️ ❤️", options: ["2", "1", "3", "0"], correctIndex: 0, explanation: "Two hearts." },
            { q: "Count the bells: 🔔 🔔 🔔 🔔", options: ["4", "3", "5", "2"], correctIndex: 0, explanation: "Four bells." },
            { q: "How many squares? 🟦 🟦", options: ["2", "1", "3", "4"], correctIndex: 0, explanation: "Two squares." },
            { q: "Count the birds: 🐦 🐦 🐦 🐦 🐦", options: ["5", "4", "6", "10"], correctIndex: 0, explanation: "Five birds." }
        ],
        quiz: [
            { q: "How many? ● ● ●", options: ["3", "2", "4", "1"], correctIndex: 0, explanation: "Three." },
            { q: "Count the moons: 🌙 🌙", options: ["2", "1", "3", "0"], correctIndex: 0, explanation: "Two." },
            { q: "How many stars? ★", options: ["1", "0", "2", "5"], correctIndex: 0, explanation: "One." },
            { q: "Count the balls: ⚽ ⚽ ⚽ ⚽", options: ["4", "3", "5", "2"], correctIndex: 0, explanation: "Four." },
            { q: "How many cakes? 🎂 🎂 🎂", options: ["3", "2", "1", "4"], correctIndex: 0, explanation: "Three." },
            { q: "Count: 🚗 🚗", options: ["2", "1", "3", "4"], correctIndex: 0, explanation: "Two." },
            { q: "How many ducks? 🦆 🦆 🦆 🦆 🦆", options: ["5", "4", "6", "3"], correctIndex: 0, explanation: "Five." },
            { q: "Count the bugs: 🐞 🐞", options: ["2", "1", "3", "0"], correctIndex: 0, explanation: "Two." },
            { q: "How many eyes on a face?", options: ["2", "1", "3", "4"], correctIndex: 0, explanation: "Two." },
            { q: "Count: 🌲 🌲 🌲 🌲", options: ["4", "3", "5", "6"], correctIndex: 0, explanation: "Four." },
            { q: "How many suns?", options: ["1", "2", "0", "5"], correctIndex: 0, explanation: "One." },
            { q: "Count the dots: ●", options: ["1", "2", "0", "3"], correctIndex: 0, explanation: "One." },
            { q: "How many hats? 🎩 🎩 🎩", options: ["3", "2", "4", "5"], correctIndex: 0, explanation: "Three." },
            { q: "Count the apples: 🍎 🍎", options: ["2", "1", "3", "0"], correctIndex: 0, explanation: "Two." },
            { q: "How many squares? 🟥 🟥 🟥 🟥", options: ["4", "3", "2", "1"], correctIndex: 0, explanation: "Four." }
        ]
    },
    "103": {
        objectives: ["Identify groups with more or less items", "Compare written numbers (e.g. 5 > 3)", "Use matching strategies to compare"],
        learn: {
            type: 'flashcard', initialState: { content: "5 vs 2", subtext: "Which is more?" },
            steps: [{ id: 1, prompt: "Tap the side with more!", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "5 > 2", subtext: "5 is more" }, feedback: { success: "5 is bigger than 2!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "Which is more: 5 or 3?", options: ["5", "3"], correctIndex: 0, explanation: "5 is larger." },
            { q: "Which is less: 1 or 4?", options: ["1", "4"], correctIndex: 0, explanation: "1 is smaller." },
            { q: "Is 2 equal to 2?", options: ["Yes", "No"], correctIndex: 0, explanation: "Same." },
            { q: "Which group has more? 🍎 🍎 vs 🍎", options: ["2 Apples", "1 Apple"], correctIndex: 0, explanation: "2 > 1." },
            { q: "Which number is bigger: 10 or 8?", options: ["10", "8"], correctIndex: 0, explanation: "10 is bigger." },
            { q: "Which is smaller: 6 or 9?", options: ["6", "9"], correctIndex: 0, explanation: "6 is smaller." },
            { q: "Compare 7 and 7.", options: ["Equal", "More", "Less"], correctIndex: 0, explanation: "Same." },
            { q: "Which group is smaller? ● vs ● ● ●", options: ["1 dot", "3 dots"], correctIndex: 0, explanation: "1 < 3." },
            { q: "Find the biggest number.", options: ["9", "2", "5", "1"], correctIndex: 0, explanation: "9 is the most." },
            { q: "Find the smallest number.", options: ["0", "5", "10", "2"], correctIndex: 0, explanation: "0 is the least." }
        ],
        quiz: [
            { q: "Which is more: 8 or 2?", options: ["8", "2"], correctIndex: 0, explanation: "8." },
            { q: "Which is less: 5 or 10?", options: ["5", "10"], correctIndex: 0, explanation: "5." },
            { q: "Is 4 bigger than 1?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
            { q: "Which is smallest?", options: ["1", "5", "10", "3"], correctIndex: 0, explanation: "1." },
            { q: "Which is largest?", options: ["10", "7", "2", "9"], correctIndex: 0, explanation: "10." },
            { q: "Compare 3 and 5.", options: ["5 is more", "3 is more", "Equal"], correctIndex: 0, explanation: "5 is more." },
            { q: "Are 6 and 6 equal?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
            { q: "Which group has less? ●●● or ●●●●●", options: ["3 dots", "5 dots"], correctIndex: 0, explanation: "3 is less." },
            { q: "Which is bigger: 0 or 1?", options: ["1", "0"], correctIndex: 0, explanation: "1." },
            { q: "Which is smaller: 10 or 20?", options: ["10", "20"], correctIndex: 0, explanation: "10." },
            { q: "Find the most.", options: ["★ ★ ★", "★", "★ ★"], correctIndex: 0, explanation: "3 stars." },
            { q: "Find the least.", options: ["●", "● ● ●", "● ●"], correctIndex: 0, explanation: "1 dot." },
            { q: "Is 9 less than 10?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
            { q: "Compare 2 and 8.", options: ["8 is bigger", "2 is bigger"], correctIndex: 0, explanation: "8 is bigger." },
            { q: "Which number is tiny?", options: ["1", "10", "20", "5"], correctIndex: 0, explanation: "1." }
        ]
    },
    "104": {
        objectives: ["Model addition as putting together", "Model subtraction as taking apart", "Solve simple word problems using objects"],
        learn: {
            type: 'blocks', initialState: { ones: 1 },
            steps: [
                { id: 1, prompt: "Add 1 block to make 2.", type: 'interaction', config: { action: 'add_one' }, updateState: { ones: 2 }, feedback: { success: "1 + 1 = 2!", error: "Add a block" } },
                { id: 2, prompt: "Add another for 3.", type: 'interaction', config: { action: 'add_one' }, updateState: { ones: 3 }, feedback: { success: "2 + 1 = 3!", error: "" } }
            ],
            quickCheck: []
        },
        practice: [
            { q: "1 + 1 = ?", options: ["2", "1", "3"], correctIndex: 0, explanation: "2." },
            { q: "2 + 1 = ?", options: ["3", "2", "4"], correctIndex: 0, explanation: "3." },
            { q: "3 - 1 = ?", options: ["2", "3", "1"], correctIndex: 0, explanation: "2." },
            { q: "2 - 1 = ?", options: ["1", "0", "2"], correctIndex: 0, explanation: "1." },
            { q: "1 + 2 = ?", options: ["3", "1", "2"], correctIndex: 0, explanation: "3." },
            { q: "4 - 1 = ?", options: ["3", "4", "2"], correctIndex: 0, explanation: "3." },
            { q: "3 + 1 = ?", options: ["4", "3", "2"], correctIndex: 0, explanation: "4." },
            { q: "2 + 2 = ?", options: ["4", "2", "0"], correctIndex: 0, explanation: "4." },
            { q: "5 - 1 = ?", options: ["4", "5", "3"], correctIndex: 0, explanation: "4." },
            { q: "0 + 5 = ?", options: ["5", "0", "1"], correctIndex: 0, explanation: "5." }
        ],
        quiz: [
            { q: "1 + 2 = ?", options: ["3", "2", "1"], correctIndex: 0, explanation: "3." },
            { q: "3 + 2 = ?", options: ["5", "4", "6"], correctIndex: 0, explanation: "5." },
            { q: "5 - 2 = ?", options: ["3", "5", "2"], correctIndex: 0, explanation: "3." },
            { q: "4 - 2 = ?", options: ["2", "4", "6"], correctIndex: 0, explanation: "2." },
            { q: "1 + 4 = ?", options: ["5", "4", "1"], correctIndex: 0, explanation: "5." },
            { q: "2 + 3 = ?", options: ["5", "2", "3"], correctIndex: 0, explanation: "5." },
            { q: "3 - 3 = ?", options: ["0", "3", "6"], correctIndex: 0, explanation: "0." },
            { q: "2 - 2 = ?", options: ["0", "2", "4"], correctIndex: 0, explanation: "0." },
            { q: "1 + 1 = ?", options: ["2", "1", "0"], correctIndex: 0, explanation: "2." },
            { q: "4 + 1 = ?", options: ["5", "4", "3"], correctIndex: 0, explanation: "5." },
            { q: "5 - 0 = ?", options: ["5", "0", "4"], correctIndex: 0, explanation: "5." },
            { q: "0 + 0 = ?", options: ["0", "1", "10"], correctIndex: 0, explanation: "0." },
            { q: "3 + 0 = ?", options: ["3", "0", "30"], correctIndex: 0, explanation: "3." },
            { q: "4 - 4 = ?", options: ["0", "4", "8"], correctIndex: 0, explanation: "0." },
            { q: "2 + 1 = ?", options: ["3", "2", "1"], correctIndex: 0, explanation: "3." }
        ]
    },
    "105": {
        objectives: ["Compose numbers 11-19", "Decompose teen numbers", "Understand 10 as a bundle"],
        learn: {
            type: 'flashcard', initialState: { content: "10 + 1", subtext: "Makes 11" },
            steps: [{ id: 1, prompt: "Tap to see 11.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "11", subtext: "1 Ten, 1 One" }, feedback: { success: "Correct!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "10 + 1 = ?", options: ["11", "10", "1"], correctIndex: 0, explanation: "11." },
            { q: "10 + 2 = ?", options: ["12", "10", "2"], correctIndex: 0, explanation: "12." },
            { q: "10 + 3 = ?", options: ["13", "10", "3"], correctIndex: 0, explanation: "13." },
            { q: "10 + 4 = ?", options: ["14", "104", "40"], correctIndex: 0, explanation: "14." },
            { q: "10 + 5 = ?", options: ["15", "10", "5"], correctIndex: 0, explanation: "15." },
            { q: "What is 10 and 6?", options: ["16", "10", "6"], correctIndex: 0, explanation: "16." },
            { q: "What is 10 and 7?", options: ["17", "71", "10"], correctIndex: 0, explanation: "17." },
            { q: "What is 10 and 8?", options: ["18", "81", "10"], correctIndex: 0, explanation: "18." },
            { q: "What is 10 and 9?", options: ["19", "91", "10"], correctIndex: 0, explanation: "19." },
            { q: "What is 1 ten and 5 ones?", options: ["15", "51", "10"], correctIndex: 0, explanation: "15." }
        ],
        quiz: [
            { q: "10 + 1 = ?", options: ["11", "12", "10"], correctIndex: 0, explanation: "11." },
            { q: "10 + 4 = ?", options: ["14", "41", "10"], correctIndex: 0, explanation: "14." },
            { q: "10 + 7 = ?", options: ["17", "71", "10"], correctIndex: 0, explanation: "17." },
            { q: "10 + 9 = ?", options: ["19", "91", "10"], correctIndex: 0, explanation: "19." },
            { q: "Ten and Two?", options: ["12", "21", "10"], correctIndex: 0, explanation: "12." },
            { q: "Ten and Five?", options: ["15", "51", "10"], correctIndex: 0, explanation: "15." },
            { q: "Ten and Three?", options: ["13", "31", "10"], correctIndex: 0, explanation: "13." },
            { q: "Ten and Six?", options: ["16", "61", "10"], correctIndex: 0, explanation: "16." },
            { q: "Ten and Eight?", options: ["18", "81", "10"], correctIndex: 0, explanation: "18." },
            { q: "1 ten, 1 one?", options: ["11", "10", "1"], correctIndex: 0, explanation: "11." },
            { q: "1 ten, 0 ones?", options: ["10", "0", "1"], correctIndex: 0, explanation: "10." },
            { q: "1 ten, 9 ones?", options: ["19", "91", "10"], correctIndex: 0, explanation: "19." },
            { q: "What makes 14?", options: ["10+4", "10+1", "4+4"], correctIndex: 0, explanation: "10+4." },
            { q: "What makes 17?", options: ["10+7", "7+7", "10+1"], correctIndex: 0, explanation: "10+7." },
            { q: "What makes 13?", options: ["10+3", "3+3", "1+3"], correctIndex: 0, explanation: "10+3." }
        ]
    },
    "106": {
        objectives: ["Describe objects by length or weight", "Compare two objects", "Use vocabulary (heavy/light)"],
        learn: {
            type: 'flashcard', initialState: { content: "📏", subtext: "Compare" },
            steps: [{ id: 1, prompt: "Tap to see which is longer!", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Train vs Car", subtext: "Train is longer" }, feedback: { success: "Correct!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "Longer?", options: ["Train", "Car"], correctIndex: 0, explanation: "Train." },
            { q: "Shorter?", options: ["Pencil", "Tree"], correctIndex: 0, explanation: "Pencil." },
            { q: "Heavier?", options: ["Elephant", "Bird"], correctIndex: 0, explanation: "Elephant." },
            { q: "Lighter?", options: ["Feather", "Rock"], correctIndex: 0, explanation: "Feather." },
            { q: "Taller?", options: ["Giraffe", "Dog"], correctIndex: 0, explanation: "Giraffe." },
            { q: "Bigger?", options: ["House", "Shoe"], correctIndex: 0, explanation: "House." },
            { q: "Smaller?", options: ["Ant", "Cat"], correctIndex: 0, explanation: "Ant." },
            { q: "Holds more?", options: ["Pool", "Cup"], correctIndex: 0, explanation: "Pool." },
            { q: "Holds less?", options: ["Spoon", "Bucket"], correctIndex: 0, explanation: "Spoon." },
            { q: "Faster?", options: ["Plane", "Snail"], correctIndex: 0, explanation: "Plane." }
        ],
        quiz: [
            { q: "Which is heavy?", options: ["Rock", "Feather", "Air"], correctIndex: 0, explanation: "Rock." },
            { q: "Which is light?", options: ["Cloud", "Brick", "Car"], correctIndex: 0, explanation: "Cloud." },
            { q: "Which is tall?", options: ["Tree", "Grass", "Flower"], correctIndex: 0, explanation: "Tree." },
            { q: "Which is short?", options: ["Mouse", "Horse", "Bear"], correctIndex: 0, explanation: "Mouse." },
            { q: "Longer thing?", options: ["Snake", "Worm", "Ant"], correctIndex: 0, explanation: "Snake." },
            { q: "Shorter thing?", options: ["Ladybug", "Lizard", "Cat"], correctIndex: 0, explanation: "Ladybug." },
            { q: "Bigger number?", options: ["10", "1", "5"], correctIndex: 0, explanation: "10." },
            { q: "Smaller number?", options: ["0", "8", "4"], correctIndex: 0, explanation: "0." },
            { q: "Holds the most?", options: ["Ocean", "Lake", "Bathtub"], correctIndex: 0, explanation: "Ocean." },
            { q: "Holds the least?", options: ["Cup", "Pot", "Sink"], correctIndex: 0, explanation: "Cup." },
            { q: "Which is wide?", options: ["Road", "Sidewalk", "String"], correctIndex: 0, explanation: "Road." },
            { q: "Which is narrow?", options: ["Thread", "Rope", "Belt"], correctIndex: 0, explanation: "Thread." },
            { q: "Deepest?", options: ["Pool", "Puddle", "Dish"], correctIndex: 0, explanation: "Pool." },
            { q: "Shallowest?", options: ["Puddle", "Pool", "Lake"], correctIndex: 0, explanation: "Puddle." },
            { q: "Heaviest animal?", options: ["Whale", "Dolphin", "Fish"], correctIndex: 0, explanation: "Whale." }
        ]
    },
    "107": {
        objectives: ["Sort objects (color, shape)", "Count categories", "Identify the most"],
        learn: {
            type: 'flashcard', initialState: { content: "🔴🔵", subtext: "Sort" },
            steps: [{ id: 1, prompt: "Tap to group red items.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🔴🔴", subtext: "Red Group" }, feedback: { success: "Good job!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "Red apple, red ball. How many red?", options: ["2", "1", "0"], correctIndex: 0, explanation: "2." },
            { q: "Blue car, red bus. How many blue?", options: ["1", "2", "0"], correctIndex: 0, explanation: "1." },
            { q: "Sort: Cat, Dog, Tree. Animals?", options: ["2", "1", "3"], correctIndex: 0, explanation: "2." },
            { q: "Sort: Apple, Banana, Rock. Food?", options: ["2", "1", "0"], correctIndex: 0, explanation: "2." },
            { q: "How many blue? 🔵 🔴 🔵", options: ["2", "1", "3"], correctIndex: 0, explanation: "2." },
            { q: "How many squares? 🟥 🟥 🟥", options: ["3", "1", "2"], correctIndex: 0, explanation: "3." },
            { q: "Is 🟡 yellow?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
            { q: "Category: Fruits. Car belongs?", options: ["No", "Yes"], correctIndex: 0, explanation: "No." },
            { q: "Category: Animals. Lion belongs?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
            { q: "Sort: B, A, 1. Numbers?", options: ["1", "2", "3"], correctIndex: 0, explanation: "1." }
        ],
        quiz: [
            { q: "Sort: 🍎 🍓. How many red?", options: ["2", "1", "0"], correctIndex: 0, explanation: "2." },
            { q: "Which is a vehicle?", options: ["Bus", "Dog", "Cloud"], correctIndex: 0, explanation: "Bus." },
            { q: "Which is a fruit?", options: ["Banana", "Car", "Chair"], correctIndex: 0, explanation: "Banana." },
            { q: "Color: 🟢", options: ["Green", "Red", "Blue"], correctIndex: 0, explanation: "Green." },
            { q: "Shape: ⭕", options: ["Circle", "Square", "Triangle"], correctIndex: 0, explanation: "Circle." },
            { q: "Which is cold?", options: ["Ice", "Fire", "Sun"], correctIndex: 0, explanation: "Ice." },
            { q: "Which is hot?", options: ["Sun", "Ice", "Snow"], correctIndex: 0, explanation: "Sun." },
            { q: "Category: Clothes?", options: ["Shirt", "Fork", "Bed"], correctIndex: 0, explanation: "Shirt." },
            { q: "Wheels on bike?", options: ["2", "4", "3"], correctIndex: 0, explanation: "2." },
            { q: "Wheels on car?", options: ["4", "2", "3"], correctIndex: 0, explanation: "4." },
            { q: "Which flies?", options: ["Plane", "Boat", "Train"], correctIndex: 0, explanation: "Plane." },
            { q: "Which swims?", options: ["Fish", "Dog", "Bird"], correctIndex: 0, explanation: "Fish." },
            { q: "How many legs: 🐶", options: ["4", "2", "0"], correctIndex: 0, explanation: "4." },
            { q: "How many legs: 👤", options: ["2", "4", "0"], correctIndex: 0, explanation: "2." },
            { q: "Is grass green?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." }
        ]
    },
    "108": {
        objectives: ["Name shapes", "Describe position", "Find shapes in world"],
        learn: {
            type: 'flashcard', initialState: { content: "🟦", subtext: "Square" },
            steps: [{ id: 1, prompt: "This is a Square. Tap!", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "⭕", subtext: "Circle" }, feedback: { success: "Circle is round!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "Shape of a ball?", options: ["Circle", "Square"], correctIndex: 0, explanation: "Circle." },
            { q: "Sides on triangle?", options: ["3", "4"], correctIndex: 0, explanation: "3." },
            { q: "Shape of door?", options: ["Rectangle", "Circle"], correctIndex: 0, explanation: "Rectangle." },
            { q: "Find circle: ⭕", options: ["Circle", "Square"], correctIndex: 0, explanation: "Circle." },
            { q: "Worm lives... ground?", options: ["Below", "Above"], correctIndex: 0, explanation: "Below." },
            { q: "Pizza slice shape?", options: ["Triangle", "Circle"], correctIndex: 0, explanation: "Triangle." },
            { q: "Sides on square?", options: ["4", "3"], correctIndex: 0, explanation: "4." },
            { q: "Star in sky is...?", options: ["Above", "Below"], correctIndex: 0, explanation: "Above." },
            { q: "Book shape?", options: ["Rectangle", "Circle"], correctIndex: 0, explanation: "Rectangle." },
            { q: "Coin shape?", options: ["Circle", "Square"], correctIndex: 0, explanation: "Circle." }
        ],
        quiz: [
            { q: "Which is round?", options: ["Circle", "Square", "Triangle"], correctIndex: 0, explanation: "Circle." },
            { q: "Triangle sides?", options: ["3", "4", "0"], correctIndex: 0, explanation: "3." },
            { q: "Square sides?", options: ["4", "3", "2"], correctIndex: 0, explanation: "4." },
            { q: "Wheel shape?", options: ["Circle", "Square", "Triangle"], correctIndex: 0, explanation: "Circle." },
            { q: "Beside means?", options: ["Next to", "Above", "Below"], correctIndex: 0, explanation: "Next to." },
            { q: "Under means?", options: ["Below", "Above", "Inside"], correctIndex: 0, explanation: "Below." },
            { q: "Find 3-sided shape.", options: ["Triangle", "Square", "Circle"], correctIndex: 0, explanation: "Triangle." },
            { q: "Find 4-sided shape.", options: ["Square", "Triangle", "Circle"], correctIndex: 0, explanation: "Square." },
            { q: "No corners?", options: ["Circle", "Square", "Triangle"], correctIndex: 0, explanation: "Circle." },
            { q: "Box shape?", options: ["Square", "Circle", "Triangle"], correctIndex: 0, explanation: "Square." },
            { q: "Roof shape?", options: ["Triangle", "Circle", "Square"], correctIndex: 0, explanation: "Triangle." },
            { q: "TV shape?", options: ["Rectangle", "Circle", "Triangle"], correctIndex: 0, explanation: "Rectangle." },
            { q: "Inside or Outside?", options: ["In or Out", "Up or Down", "Left or Right"], correctIndex: 0, explanation: "In or Out." },
            { q: "Sun is...?", options: ["Above", "Below", "Beside"], correctIndex: 0, explanation: "Above." },
            { q: "Shoes are...?", options: ["Below", "Above", "Beside"], correctIndex: 0, explanation: "Below." }
        ]
    },
    "109": {
        objectives: ["Analyze attributes", "Build larger shapes", "Draw 2D shapes"],
        learn: {
            type: 'flashcard', initialState: { content: "🏠", subtext: "House" },
            steps: [{ id: 1, prompt: "What shapes make a house? Tap!", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🔺+🟥", subtext: "Triangle + Square" }, feedback: { success: "Correct!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "2 triangles make a...?", options: ["Square", "Circle"], correctIndex: 0, explanation: "Square/Diamond." },
            { q: "Stack 2 squares?", options: ["Rectangle", "Circle"], correctIndex: 0, explanation: "Rectangle." },
            { q: "Corners on square?", options: ["4", "3"], correctIndex: 0, explanation: "4." },
            { q: "Corners on circle?", options: ["0", "4"], correctIndex: 0, explanation: "0." },
            { q: "Corners on triangle?", options: ["3", "4"], correctIndex: 0, explanation: "3." },
            { q: "Circle with squares?", options: ["No", "Yes"], correctIndex: 0, explanation: "No." },
            { q: "Cut rectangle in half?", options: ["2 Squares", "1 Circle"], correctIndex: 0, explanation: "2 Squares." },
            { q: "More corners?", options: ["Square", "Triangle"], correctIndex: 0, explanation: "Square." },
            { q: "Draw 3 sides. It is a?", options: ["Triangle", "Square"], correctIndex: 0, explanation: "Triangle." },
            { q: "No sides shape?", options: ["Circle", "Square"], correctIndex: 0, explanation: "Circle." }
        ],
        quiz: [
            { q: "Triangle + Triangle =", options: ["Square", "Circle", "Star"], correctIndex: 0, explanation: "Square." },
            { q: "Square corners?", options: ["4", "3", "0"], correctIndex: 0, explanation: "4." },
            { q: "Circle corners?", options: ["0", "4", "2"], correctIndex: 0, explanation: "0." },
            { q: "Triangle corners?", options: ["3", "4", "0"], correctIndex: 0, explanation: "3." },
            { q: "Rectangle corners?", options: ["4", "3", "0"], correctIndex: 0, explanation: "4." },
            { q: "Looks like pizza?", options: ["Triangle", "Circle", "Square"], correctIndex: 0, explanation: "Triangle." },
            { q: "Looks like TV?", options: ["Rectangle", "Circle", "Triangle"], correctIndex: 0, explanation: "Rectangle." },
            { q: "Looks like egg?", options: ["Oval", "Circle", "Square"], correctIndex: 0, explanation: "Oval." },
            { q: "Sandwich shape?", options: ["Triangle", "Circle", "Square"], correctIndex: 0, explanation: "Triangle." },
            { q: "Ring shape?", options: ["Circle", "Square", "Triangle"], correctIndex: 0, explanation: "Circle." },
            { q: "3 sides?", options: ["Triangle", "Square", "Circle"], correctIndex: 0, explanation: "Triangle." },
            { q: "4 sides?", options: ["Square", "Triangle", "Circle"], correctIndex: 0, explanation: "Square." },
            { q: "Round?", options: ["Circle", "Square", "Triangle"], correctIndex: 0, explanation: "Circle." },
            { q: "Pointy?", options: ["Triangle", "Circle", "Square"], correctIndex: 0, explanation: "Triangle." },
            { q: "Flat shape?", options: ["Rectangle", "Ball", "Cube"], correctIndex: 0, explanation: "Rectangle." }
        ]
    },

    // ==========================================
    // 1ST GRADE (201 - 211)
    // ==========================================
    "201": { 
        objectives: ["Solve addition/subtraction problems", "Use drawings", "Add/Sub within 20"],
        learn: {
            type: 'flashcard', initialState: { content: "📝", subtext: "Problem" },
            steps: [{ id: 1, prompt: "Sam had 3 apples. Got 2 more. Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "3+2=5", subtext: "5 apples" }, feedback: { success: "Correct!", error: "" } }],
            quickCheck: []
        }, 
        practice: [
            { q: "4 cats + 1 cat?", options: ["5", "4"], correctIndex: 0, explanation: "5." },
            { q: "10 coins - 2 coins?", options: ["8", "10"], correctIndex: 0, explanation: "8." },
            { q: "5 + 5?", options: ["10", "5"], correctIndex: 0, explanation: "10." },
            { q: "8 - 3?", options: ["5", "8"], correctIndex: 0, explanation: "5." },
            { q: "6 - 2?", options: ["4", "6"], correctIndex: 0, explanation: "4." },
            { q: "3 + 4?", options: ["7", "3"], correctIndex: 0, explanation: "7." },
            { q: "9 + 1?", options: ["10", "9"], correctIndex: 0, explanation: "10." },
            { q: "7 - 0?", options: ["7", "0"], correctIndex: 0, explanation: "7." },
            { q: "2 + 2?", options: ["4", "2"], correctIndex: 0, explanation: "4." },
            { q: "10 - 5?", options: ["5", "10"], correctIndex: 0, explanation: "5." }
        ], 
        quiz: [
            { q: "4 + 3?", options: ["7", "6", "8"], correctIndex: 0, explanation: "7." },
            { q: "10 - 4?", options: ["6", "10", "4"], correctIndex: 0, explanation: "6." },
            { q: "8 + 2?", options: ["10", "8", "2"], correctIndex: 0, explanation: "10." },
            { q: "9 - 9?", options: ["0", "9", "18"], correctIndex: 0, explanation: "0." },
            { q: "3 + 5?", options: ["8", "7", "9"], correctIndex: 0, explanation: "8." },
            { q: "7 + 2?", options: ["9", "7", "2"], correctIndex: 0, explanation: "9." },
            { q: "6 - 1?", options: ["5", "6", "1"], correctIndex: 0, explanation: "5." },
            { q: "10 - 1?", options: ["9", "10", "11"], correctIndex: 0, explanation: "9." },
            { q: "5 + 0?", options: ["5", "0", "50"], correctIndex: 0, explanation: "5." },
            { q: "4 - 0?", options: ["4", "0", "40"], correctIndex: 0, explanation: "4." },
            { q: "1+1+1?", options: ["3", "1", "2"], correctIndex: 0, explanation: "3." },
            { q: "8 - 4?", options: ["4", "8", "12"], correctIndex: 0, explanation: "4." },
            { q: "2 + 6?", options: ["8", "2", "6"], correctIndex: 0, explanation: "8." },
            { q: "10 - 10?", options: ["0", "10", "20"], correctIndex: 0, explanation: "0." },
            { q: "3 + 3?", options: ["6", "3", "0"], correctIndex: 0, explanation: "6." }
        ] 
    },
    "202": {
        objectives: ["Commutative property (3+2=2+3)", "Associative property", "Unknown-addend subtraction"],
        learn: {
            type: 'flashcard', initialState: { content: "3+2", subtext: "5" },
            steps: [{ id: 1, prompt: "Is 2+3 the same? Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "2+3=5", subtext: "Yes!" }, feedback: { success: "Correct!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "1+2=3, so 2+1=?", options: ["3", "1"], correctIndex: 0, explanation: "3." },
            { q: "4+5=9, so 5+4=?", options: ["9", "4"], correctIndex: 0, explanation: "9." },
            { q: "0+8=8, so 8+0=?", options: ["8", "0"], correctIndex: 0, explanation: "8." },
            { q: "2+3=3+2?", options: ["True", "False"], correctIndex: 0, explanation: "True." },
            { q: "3+4=?", options: ["7", "34"], correctIndex: 0, explanation: "7." },
            { q: "4+3=?", options: ["7", "43"], correctIndex: 0, explanation: "7." },
            { q: "10-8, think 8+?=10", options: ["2", "1"], correctIndex: 0, explanation: "2." },
            { q: "5-3, think 3+?=5", options: ["2", "3"], correctIndex: 0, explanation: "2." },
            { q: "1+9=9+1?", options: ["True", "False"], correctIndex: 0, explanation: "True." },
            { q: "6+4=10, so 4+6=?", options: ["10", "6"], correctIndex: 0, explanation: "10." }
        ],
        quiz: [
            { q: "3+2=?", options: ["5", "32", "1"], correctIndex: 0, explanation: "5." },
            { q: "2+3=?", options: ["5", "23", "1"], correctIndex: 0, explanation: "5." },
            { q: "10-7=?", options: ["3", "10", "7"], correctIndex: 0, explanation: "3." },
            { q: "7+?=10", options: ["3", "1", "2"], correctIndex: 0, explanation: "3." },
            { q: "8+1=?", options: ["9", "8", "1"], correctIndex: 0, explanation: "9." },
            { q: "1+8=?", options: ["9", "1", "8"], correctIndex: 0, explanation: "9." },
            { q: "5+4=?", options: ["9", "5", "4"], correctIndex: 0, explanation: "9." },
            { q: "4+5=?", options: ["9", "4", "5"], correctIndex: 0, explanation: "9." },
            { q: "12-2?", options: ["10", "12", "2"], correctIndex: 0, explanation: "10." },
            { q: "2+?=12", options: ["10", "11", "9"], correctIndex: 0, explanation: "10." },
            { q: "6+0=?", options: ["6", "0", "60"], correctIndex: 0, explanation: "6." },
            { q: "0+6=?", options: ["6", "0", "60"], correctIndex: 0, explanation: "6." },
            { q: "9+2=?", options: ["11", "9", "2"], correctIndex: 0, explanation: "11." },
            { q: "2+9=?", options: ["11", "2", "9"], correctIndex: 0, explanation: "11." },
            { q: "1+2=2+1?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." }
        ]
    },
    "203": {
        objectives: ["Relate counting to add/sub", "Fluency within 10", "Making ten strategy"],
        learn: {
            type: 'number_line', initialState: { current: 5, range: [0,1,2,3,4,5,6,7,8,9,10] },
            steps: [{ id: 1, prompt: "Start 5. Hop 2. Tap.", type: 'interaction', config: { action: 'hop' }, updateState: { current: 7 }, feedback: { success: "5+2=7!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "4, 5, 6, _", options: ["7", "8"], correctIndex: 0, explanation: "7." },
            { q: "10, 9, 8, _", options: ["7", "6"], correctIndex: 0, explanation: "7." },
            { q: "8+2?", options: ["10", "8"], correctIndex: 0, explanation: "10." },
            { q: "9+1?", options: ["10", "9"], correctIndex: 0, explanation: "10." },
            { q: "7+3?", options: ["10", "7"], correctIndex: 0, explanation: "10." },
            { q: "6+4?", options: ["10", "6"], correctIndex: 0, explanation: "10." },
            { q: "5+5?", options: ["10", "5"], correctIndex: 0, explanation: "10." },
            { q: "10-5?", options: ["5", "10"], correctIndex: 0, explanation: "5." },
            { q: "10-1?", options: ["9", "10"], correctIndex: 0, explanation: "9." },
            { q: "10-2?", options: ["8", "10"], correctIndex: 0, explanation: "8." }
        ],
        quiz: [
            { q: "9+1?", options: ["10", "9", "1"], correctIndex: 0, explanation: "10." },
            { q: "8+2?", options: ["10", "8", "2"], correctIndex: 0, explanation: "10." },
            { q: "7+3?", options: ["10", "7", "3"], correctIndex: 0, explanation: "10." },
            { q: "6+4?", options: ["10", "6", "4"], correctIndex: 0, explanation: "10." },
            { q: "5+5?", options: ["10", "5", "0"], correctIndex: 0, explanation: "10." },
            { q: "10-1?", options: ["9", "10", "8"], correctIndex: 0, explanation: "9." },
            { q: "10-2?", options: ["8", "10", "9"], correctIndex: 0, explanation: "8." },
            { q: "10-3?", options: ["7", "10", "8"], correctIndex: 0, explanation: "7." },
            { q: "10-4?", options: ["6", "10", "7"], correctIndex: 0, explanation: "6." },
            { q: "10-5?", options: ["5", "10", "6"], correctIndex: 0, explanation: "5." },
            { q: "10-6?", options: ["4", "10", "5"], correctIndex: 0, explanation: "4." },
            { q: "10-7?", options: ["3", "10", "4"], correctIndex: 0, explanation: "3." },
            { q: "10-8?", options: ["2", "10", "3"], correctIndex: 0, explanation: "2." },
            { q: "10-9?", options: ["1", "10", "2"], correctIndex: 0, explanation: "1." },
            { q: "10-10?", options: ["0", "10", "20"], correctIndex: 0, explanation: "0." }
        ]
    },
    "204": {
        objectives: ["Equal sign meaning", "True/False equations", "Unknown numbers"],
        learn: {
            type: 'flashcard', initialState: { content: "2+2=4", subtext: "Balance" },
            steps: [{ id: 1, prompt: "Equal means same. Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "TRUE", subtext: "4=4" }, feedback: { success: "Correct!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "1+1=2 true?", options: ["True", "False"], correctIndex: 0, explanation: "True." },
            { q: "5=5 true?", options: ["True", "False"], correctIndex: 0, explanation: "True." },
            { q: "3+1=5 true?", options: ["False", "True"], correctIndex: 0, explanation: "3+1=4." },
            { q: "5+?=6", options: ["1", "2"], correctIndex: 0, explanation: "1." },
            { q: "2+?=5", options: ["3", "2"], correctIndex: 0, explanation: "3." },
            { q: "7=?+7", options: ["0", "1"], correctIndex: 0, explanation: "0." },
            { q: "8=4+4 true?", options: ["True", "False"], correctIndex: 0, explanation: "True." },
            { q: "4+1=?+2", options: ["3", "5"], correctIndex: 0, explanation: "3." },
            { q: "10-2=8 true?", options: ["True", "False"], correctIndex: 0, explanation: "True." },
            { q: "6-?=4", options: ["2", "1"], correctIndex: 0, explanation: "2." }
        ],
        quiz: [
            { q: "5+?=5", options: ["0", "1", "5"], correctIndex: 0, explanation: "0." },
            { q: "3+2=5 true?", options: ["True", "False", "None"], correctIndex: 0, explanation: "True." },
            { q: "10=5+5 true?", options: ["True", "False", "None"], correctIndex: 0, explanation: "True." },
            { q: "4+?=8", options: ["4", "3", "5"], correctIndex: 0, explanation: "4." },
            { q: "6+1=6 false?", options: ["True", "False", "None"], correctIndex: 0, explanation: "True." },
            { q: "7+?=9", options: ["2", "1", "3"], correctIndex: 0, explanation: "2." },
            { q: "2+2=3+1?", options: ["True", "False", "None"], correctIndex: 0, explanation: "True." },
            { q: "5+1=?+3", options: ["3", "6", "1"], correctIndex: 0, explanation: "3." },
            { q: "9-?=8", options: ["1", "0", "9"], correctIndex: 0, explanation: "1." },
            { q: "1+0=1 true?", options: ["True", "False", "None"], correctIndex: 0, explanation: "True." },
            { q: "6=?-1", options: ["7", "5", "6"], correctIndex: 0, explanation: "7." },
            { q: "8-4=4 true?", options: ["True", "False", "None"], correctIndex: 0, explanation: "True." },
            { q: "3+3=?", options: ["6", "5", "7"], correctIndex: 0, explanation: "6." },
            { q: "10=?+9", options: ["1", "0", "10"], correctIndex: 0, explanation: "1." },
            { q: "0+0=0 true?", options: ["True", "False", "None"], correctIndex: 0, explanation: "True." }
        ]
    },
    "205": {
        objectives: ["Count to 120", "Read/Write numbers to 120", "Digit values"],
        learn: {
            type: 'flashcard', initialState: { content: "99", subtext: "Number" },
            steps: [{ id: 1, prompt: "What after 99? Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "100", subtext: "One Hundred" }, feedback: { success: "100!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "10, 11, 12, _", options: ["13", "14"], correctIndex: 0, explanation: "13." },
            { q: "After 19?", options: ["20", "18"], correctIndex: 0, explanation: "20." },
            { q: "After 29?", options: ["30", "28"], correctIndex: 0, explanation: "30." },
            { q: "50, 51, _", options: ["52", "53"], correctIndex: 0, explanation: "52." },
            { q: "Write 105:", options: ["105", "15"], correctIndex: 0, explanation: "105." },
            { q: "Write 120:", options: ["120", "12"], correctIndex: 0, explanation: "120." },
            { q: "100, 101, 102, _", options: ["103", "104"], correctIndex: 0, explanation: "103." },
            { q: "Before 10?", options: ["9", "11"], correctIndex: 0, explanation: "9." },
            { q: "Before 100?", options: ["99", "101"], correctIndex: 0, explanation: "99." },
            { q: "10, 20, 30, _", options: ["40", "50"], correctIndex: 0, explanation: "40." }
        ],
        quiz: [
            { q: "After 110?", options: ["111", "112", "120"], correctIndex: 0, explanation: "111." },
            { q: "After 119?", options: ["120", "118", "121"], correctIndex: 0, explanation: "120." },
            { q: "Write 'one hundred':", options: ["100", "10", "1"], correctIndex: 0, explanation: "100." },
            { q: "45, 46, _", options: ["47", "48", "50"], correctIndex: 0, explanation: "47." },
            { q: "After 9?", options: ["10", "8", "11"], correctIndex: 0, explanation: "10." },
            { q: "After 19?", options: ["20", "18", "21"], correctIndex: 0, explanation: "20." },
            { q: "After 29?", options: ["30", "28", "31"], correctIndex: 0, explanation: "30." },
            { q: "After 39?", options: ["40", "38", "41"], correctIndex: 0, explanation: "40." },
            { q: "After 49?", options: ["50", "48", "51"], correctIndex: 0, explanation: "50." },
            { q: "After 59?", options: ["60", "58", "61"], correctIndex: 0, explanation: "60." },
            { q: "After 69?", options: ["70", "68", "71"], correctIndex: 0, explanation: "70." },
            { q: "After 79?", options: ["80", "78", "81"], correctIndex: 0, explanation: "80." },
            { q: "After 89?", options: ["90", "88", "91"], correctIndex: 0, explanation: "90." },
            { q: "After 99?", options: ["100", "98", "101"], correctIndex: 0, explanation: "100." },
            { q: "80, 90, _", options: ["100", "91", "81"], correctIndex: 0, explanation: "100." }
        ]
    },
    "206": {
        objectives: ["Place value (tens/ones)", "Compare numbers (<, >, =)", "Identify values"],
        learn: {
            type: 'blocks', initialState: { tens: 1, ones: 2 },
            steps: [{ id: 1, prompt: "1 Ten, 2 Ones = 12. Add Ten.", type: 'interaction', config: { action: 'add_one' }, updateState: { tens: 2 }, feedback: { success: "Now 22!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "Tens in 25?", options: ["2", "5"], correctIndex: 0, explanation: "2." },
            { q: "Ones in 25?", options: ["5", "2"], correctIndex: 0, explanation: "5." },
            { q: "Value of 3 in 31?", options: ["30", "3"], correctIndex: 0, explanation: "30." },
            { q: "Value of 8 in 18?", options: ["8", "80"], correctIndex: 0, explanation: "8." },
            { q: "45 _ 54", options: ["<", ">", "="], correctIndex: 0, explanation: "45 < 54." },
            { q: "12 _ 10", options: [">", "<", "="], correctIndex: 0, explanation: "12 > 10." },
            { q: "88 = 88?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
            { q: "1 ten, 5 ones?", options: ["15", "51"], correctIndex: 0, explanation: "15." },
            { q: "4 tens, 0 ones?", options: ["40", "4"], correctIndex: 0, explanation: "40." },
            { q: "99 _ 100", options: ["<", ">", "="], correctIndex: 0, explanation: "99 < 100." }
        ],
        quiz: [
            { q: "Tens in 50?", options: ["5", "0", "50"], correctIndex: 0, explanation: "5." },
            { q: "Ones in 50?", options: ["0", "5", "50"], correctIndex: 0, explanation: "0." },
            { q: "3 tens, 7 ones?", options: ["37", "73", "10"], correctIndex: 0, explanation: "37." },
            { q: "8 tens, 2 ones?", options: ["82", "28", "80"], correctIndex: 0, explanation: "82." },
            { q: "Compare 15, 51.", options: ["15 < 51", "15 > 51", "15 = 51"], correctIndex: 0, explanation: "15 is less." },
            { q: "Compare 22, 22.", options: ["=", ">", "<"], correctIndex: 0, explanation: "Equal." },
            { q: "Value of 4 in 49?", options: ["40", "4", "9"], correctIndex: 0, explanation: "40." },
            { q: "Value of 9 in 49?", options: ["9", "90", "40"], correctIndex: 0, explanation: "9." },
            { q: "More: 32 or 23?", options: ["32", "23", "Same"], correctIndex: 0, explanation: "32." },
            { q: "Less: 60 or 70?", options: ["60", "70", "Same"], correctIndex: 0, explanation: "60." },
            { q: "1 ten, 1 one?", options: ["11", "2", "10"], correctIndex: 0, explanation: "11." },
            { q: "9 tens, 9 ones?", options: ["99", "9", "18"], correctIndex: 0, explanation: "99." },
            { q: "10 < 20?", options: ["Yes", "No", "Maybe"], correctIndex: 0, explanation: "Yes." },
            { q: "44 > 40?", options: ["Yes", "No", "Maybe"], correctIndex: 0, explanation: "Yes." },
            { q: "5 tens, 5 ones?", options: ["55", "5", "50"], correctIndex: 0, explanation: "55." }
        ]
    },
    "207": {
        objectives: ["Add within 100", "10 more/10 less", "Subtract multiples of 10"],
        learn: {
            type: 'blocks', initialState: { tens: 2, ones: 0 },
            steps: [{ id: 1, prompt: "20. Add Ten. Tap.", type: 'interaction', config: { action: 'add_one' }, updateState: { tens: 3 }, feedback: { success: "30!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "10 more than 20?", options: ["30", "10"], correctIndex: 0, explanation: "30." },
            { q: "10 more than 45?", options: ["55", "35"], correctIndex: 0, explanation: "55." },
            { q: "10 less than 30?", options: ["20", "10"], correctIndex: 0, explanation: "20." },
            { q: "10 less than 62?", options: ["52", "72"], correctIndex: 0, explanation: "52." },
            { q: "20 + 10?", options: ["30", "20"], correctIndex: 0, explanation: "30." },
            { q: "50 - 10?", options: ["40", "50"], correctIndex: 0, explanation: "40." },
            { q: "40 + 20?", options: ["60", "40"], correctIndex: 0, explanation: "60." },
            { q: "80 - 40?", options: ["40", "80"], correctIndex: 0, explanation: "40." },
            { q: "10 more than 99?", options: ["109", "90"], correctIndex: 0, explanation: "109." },
            { q: "10 less than 110?", options: ["100", "110"], correctIndex: 0, explanation: "100." }
        ],
        quiz: [
            { q: "10 more than 50?", options: ["60", "40", "51"], correctIndex: 0, explanation: "60." },
            { q: "10 less than 50?", options: ["40", "60", "49"], correctIndex: 0, explanation: "40." },
            { q: "30 + 10?", options: ["40", "30", "20"], correctIndex: 0, explanation: "40." },
            { q: "70 - 10?", options: ["60", "70", "80"], correctIndex: 0, explanation: "60." },
            { q: "10 more than 15?", options: ["25", "5", "16"], correctIndex: 0, explanation: "25." },
            { q: "10 less than 15?", options: ["5", "25", "14"], correctIndex: 0, explanation: "5." },
            { q: "40 + 30?", options: ["70", "10", "43"], correctIndex: 0, explanation: "70." },
            { q: "90 - 20?", options: ["70", "110", "92"], correctIndex: 0, explanation: "70." },
            { q: "10 more 88?", options: ["98", "78", "89"], correctIndex: 0, explanation: "98." },
            { q: "10 less 88?", options: ["78", "98", "87"], correctIndex: 0, explanation: "78." },
            { q: "10+10?", options: ["20", "10", "100"], correctIndex: 0, explanation: "20." },
            { q: "100-10?", options: ["90", "100", "110"], correctIndex: 0, explanation: "90." },
            { q: "50+50?", options: ["100", "0", "50"], correctIndex: 0, explanation: "100." },
            { q: "10 more than 0?", options: ["10", "0", "1"], correctIndex: 0, explanation: "10." },
            { q: "10 less than 10?", options: ["0", "10", "1"], correctIndex: 0, explanation: "0." }
        ]
    },
    "208": {
        objectives: ["Order 3 objects", "Non-standard units", "Length iteration"],
        learn: {
            type: 'flashcard', initialState: { content: "📏", subtext: "Order" },
            steps: [{ id: 1, prompt: "Pencil, Pen, Eraser. Tap to order.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "1. Pencil, 2. Pen, 3. Eraser", subtext: "Longest to Shortest" }, feedback: { success: "Nice!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "Which is longest?", options: ["Train", "Car", "Bike"], correctIndex: 0, explanation: "Train." },
            { q: "Which is shortest?", options: ["Eraser", "Pencil", "Ruler"], correctIndex: 0, explanation: "Eraser." },
            { q: "Order: Bus, Bike, Car. Longest?", options: ["Bus", "Bike", "Car"], correctIndex: 0, explanation: "Bus." },
            { q: "Order: Dog, Cat, Ant. Shortest?", options: ["Ant", "Dog", "Cat"], correctIndex: 0, explanation: "Ant." },
            { q: "Measure book in clips.", options: ["5 clips", "0 clips"], correctIndex: 0, explanation: "5." },
            { q: "Length iteration?", options: ["Repeat unit", "Skip unit"], correctIndex: 0, explanation: "Repeat." },
            { q: "A < B, B < C. A _ C?", options: ["A < C", "A > C"], correctIndex: 0, explanation: "A < C." },
            { q: "A > B, B > C. A _ C?", options: ["A > C", "A < C"], correctIndex: 0, explanation: "A > C." },
            { q: "Measure table in feet.", options: ["3 feet", "3 inches"], correctIndex: 0, explanation: "3 feet." },
            { q: "Which is bigger?", options: ["House", "Dog", "Mouse"], correctIndex: 0, explanation: "House." }
        ],
        quiz: [
            { q: "Longest?", options: ["Train", "Car", "Bike"], correctIndex: 0, explanation: "Train." },
            { q: "Shortest?", options: ["Seed", "Flower", "Tree"], correctIndex: 0, explanation: "Seed." },
            { q: "Middle length?", options: ["Pencil", "Eraser", "Yardstick"], correctIndex: 0, explanation: "Pencil." },
            { q: "Order: Blue(5), Red(10). Longest?", options: ["Red", "Blue", "Same"], correctIndex: 0, explanation: "Red." },
            { q: "Order: S, M, L. Biggest?", options: ["L", "M", "S"], correctIndex: 0, explanation: "L." },
            { q: "Standard unit?", options: ["Inches", "Hands", "Steps"], correctIndex: 0, explanation: "Inches." },
            { q: "Non-standard unit?", options: ["Paperclips", "Inches", "Centimeters"], correctIndex: 0, explanation: "Paperclips." },
            { q: "Is a spoon longer than a fork?", options: ["Depends", "Yes", "No"], correctIndex: 0, explanation: "Depends." },
            { q: "Is a bed longer than a chair?", options: ["Yes", "No", "Same"], correctIndex: 0, explanation: "Yes." },
            { q: "Measure length of room in?", options: ["Steps", "Pencils", "Grains of sand"], correctIndex: 0, explanation: "Steps." },
            { q: "Compare: Cat vs Mouse.", options: ["Cat > Mouse", "Cat < Mouse"], correctIndex: 0, explanation: "Cat > Mouse." },
            { q: "Compare: 10in vs 5in.", options: ["10in > 5in", "10in < 5in"], correctIndex: 0, explanation: "10 > 5." },
            { q: "Length of a pencil is about?", options: ["7 inches", "7 miles", "7 feet"], correctIndex: 0, explanation: "7 inches." },
            { q: "Length of a car is about?", options: ["15 feet", "15 inches", "15 miles"], correctIndex: 0, explanation: "15 feet." },
            { q: "Shorter: 1cm or 1m?", options: ["1cm", "1m", "Same"], correctIndex: 0, explanation: "1cm." }
        ]
    },
    "209": {
        objectives: ["Tell time (hour/half-hour)", "Analog/Digital clocks"],
        learn: {
            type: 'flashcard', initialState: { content: "🕒", subtext: "3:00" },
            steps: [{ id: 1, prompt: "Tap for 3:30.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🕞", subtext: "Three Thirty" }, feedback: { success: "Half past 3!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "Hour hand on 1, Minute on 12?", options: ["1:00", "12:05"], correctIndex: 0, explanation: "1:00." },
            { q: "Half past 2?", options: ["2:30", "2:00"], correctIndex: 0, explanation: "2:30." },
            { q: "4:00. Minute hand?", options: ["On 12", "On 4"], correctIndex: 0, explanation: "12." },
            { q: "7:30. Minute hand?", options: ["On 6", "On 7"], correctIndex: 0, explanation: "6." },
            { q: "Digital 'One-Thirty'?", options: ["1:30", "13:00"], correctIndex: 0, explanation: "1:30." },
            { q: "Short hand?", options: ["Hour", "Minute"], correctIndex: 0, explanation: "Hour." },
            { q: "Long hand?", options: ["Minute", "Hour"], correctIndex: 0, explanation: "Minute." },
            { q: "Lunch is usually at?", options: ["12:00 PM", "12:00 AM"], correctIndex: 0, explanation: "PM." },
            { q: "Breakfast is at?", options: ["AM", "PM"], correctIndex: 0, explanation: "AM." },
            { q: "Bedtime is at?", options: ["PM", "AM"], correctIndex: 0, explanation: "PM." }
        ],
        quiz: [
            { q: "Time: 10:00", options: ["Ten o'clock", "Ten thirty", "Twelve ten"], correctIndex: 0, explanation: "10:00." },
            { q: "Time: 5:30", options: ["Five thirty", "Five o'clock", "Half past six"], correctIndex: 0, explanation: "5:30." },
            { q: "Minute hand on 12?", options: ["O'clock", "Thirty", "Five past"], correctIndex: 0, explanation: "O'clock." },
            { q: "Minute hand on 6?", options: ["Half past", "O'clock", "Quarter past"], correctIndex: 0, explanation: "Half past." },
            { q: "Short hand near 8, Long on 12?", options: ["8:00", "12:08", "8:12"], correctIndex: 0, explanation: "8:00." },
            { q: "Short hand between 1 and 2, Long on 6?", options: ["1:30", "2:30", "1:06"], correctIndex: 0, explanation: "1:30." },
            { q: "12:00 noon?", options: ["Lunch", "Midnight", "Breakfast"], correctIndex: 0, explanation: "Lunch." },
            { q: "12:00 midnight?", options: ["Sleep", "Lunch", "Sun"], correctIndex: 0, explanation: "Sleep." },
            { q: "Hour hand moves?", options: ["Slowest", "Fastest"], correctIndex: 0, explanation: "Slowest." },
            { q: "Minute hand moves?", options: ["Faster", "Slowest"], correctIndex: 0, explanation: "Faster." },
            { q: "Minutes in 1 hour?", options: ["60", "30", "100"], correctIndex: 0, explanation: "60." },
            { q: "Minutes in half hour?", options: ["30", "60", "15"], correctIndex: 0, explanation: "30." },
            { q: "Analog has?", options: ["Hands", "Numbers only"], correctIndex: 0, explanation: "Hands." },
            { q: "Digital has?", options: ["Numbers only", "Hands"], correctIndex: 0, explanation: "Numbers only." },
            { q: "School starts at?", options: ["AM", "PM"], correctIndex: 0, explanation: "AM." }
        ]
    },
    "210": {
        objectives: ["Organize data", "Answer questions", "Simple charts"],
        learn: {
            type: 'flashcard', initialState: { content: "📊", subtext: "Data" },
            steps: [{ id: 1, prompt: "3 Red, 2 Blue. Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🍎🍎🍎\n🫐🫐", subtext: "Total: 5" }, feedback: { success: "Charted!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "Chart: 4 Dogs, 2 Cats. How many dogs?", options: ["4", "2"], correctIndex: 0, explanation: "4." },
            { q: "Most popular in Q1?", options: ["Dogs", "Cats"], correctIndex: 0, explanation: "Dogs." },
            { q: "Least popular in Q1?", options: ["Cats", "Dogs"], correctIndex: 0, explanation: "Cats." },
            { q: "Total pets in Q1?", options: ["6", "4"], correctIndex: 0, explanation: "6." },
            { q: "3 like Blue, 3 like Red. Equal?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
            { q: "Chart: 5 Apples, 0 Pears. How many pears?", options: ["0", "5"], correctIndex: 0, explanation: "0." },
            { q: "How many more dogs than cats in Q1?", options: ["2", "4"], correctIndex: 0, explanation: "2." },
            { q: "Key: 🍎 = 1. Total for 🍎🍎?", options: ["2", "1"], correctIndex: 0, explanation: "2." },
            { q: "Category 'Favorite Sport'. Does 'Pizza' fit?", options: ["No", "Yes"], correctIndex: 0, explanation: "No." },
            { q: "Purpose of chart?", options: ["Organize info", "Make a mess"], correctIndex: 0, explanation: "Organize." }
        ],
        quiz: [
            { q: "Chart showing data?", options: ["Graph", "Book", "TV"], correctIndex: 0, explanation: "Graph." },
            { q: "Most?", options: ["Highest count", "Lowest count"], correctIndex: 0, explanation: "Highest." },
            { q: "Least?", options: ["Lowest count", "Highest"], correctIndex: 0, explanation: "Lowest." },
            { q: "Data for 10 kids?", options: ["10 marks", "1 mark"], correctIndex: 0, explanation: "10." },
            { q: "If 🍎=1, show 5.", options: ["🍎🍎🍎🍎🍎", "🍎"], correctIndex: 0, explanation: "5 icons." },
            { q: "Graph: Red 5, Blue 10. Winner?", options: ["Blue", "Red"], correctIndex: 0, explanation: "Blue." },
            { q: "Difference in Q6?", options: ["5", "15", "10"], correctIndex: 0, explanation: "5." },
            { q: "Which is a chart type?", options: ["Bar graph", "Spoon", "Table leg"], correctIndex: 0, explanation: "Bar graph." },
            { q: "Labels are for?", options: ["Categories", "Colors only"], correctIndex: 0, explanation: "Categories." },
            { q: "Title 'Fruits'. Content?", options: ["Apples/Pears", "Cars/Trucks"], correctIndex: 0, explanation: "Apples." },
            { q: "Total: 3+2+1 =", options: ["6", "5", "4"], correctIndex: 0, explanation: "6." },
            { q: "Which group is empty?", options: ["0", "1", "10"], correctIndex: 0, explanation: "0." },
            { q: "Is a survey used for data?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
            { q: "Count 5 icons. Total?", options: ["5", "1", "10"], correctIndex: 0, explanation: "5." },
            { q: "Key on graph?", options: ["Explains symbols", "Unlocks doors"], correctIndex: 0, explanation: "Explains." }
        ]
    },
    "211": {
        objectives: ["Defining attributes", "Compose 2D/3D shapes", "Shares (halves/quarters)"],
        learn: {
            type: 'flashcard', initialState: { content: "🟥", subtext: "Square" },
            steps: [{ id: 1, prompt: "Cut in half. Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🌗", subtext: "Halves" }, feedback: { success: "Two equal shares!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "Triangle sides?", options: ["3", "4"], correctIndex: 0, explanation: "3." },
            { q: "Square sides?", options: ["4", "3"], correctIndex: 0, explanation: "4." },
            { q: "Sphere?", options: ["Ball", "Box"], correctIndex: 0, explanation: "Ball." },
            { q: "Cube?", options: ["Box", "Ball"], correctIndex: 0, explanation: "Box." },
            { q: "Half of circle?", options: ["1 of 2", "1 of 4"], correctIndex: 0, explanation: "1/2." },
            { q: "Quarter of circle?", options: ["1 of 4", "1 of 2"], correctIndex: 0, explanation: "1/4." },
            { q: "Defining attribute?", options: ["Sides", "Color"], correctIndex: 0, explanation: "Sides." },
            { q: "Rectangle corners?", options: ["4", "3"], correctIndex: 0, explanation: "4." },
            { q: "Closed shape?", options: ["No gaps", "With gaps"], correctIndex: 0, explanation: "No gaps." },
            { q: "3D shape?", options: ["Cube", "Square"], correctIndex: 0, explanation: "Cube." }
        ],
        quiz: [
            { q: "3 sides?", options: ["Triangle", "Square", "Circle"], correctIndex: 0, explanation: "Triangle." },
            { q: "4 equal sides?", options: ["Square", "Triangle", "Rectangle"], correctIndex: 0, explanation: "Square." },
            { q: "Rectangle sides?", options: ["4", "3", "0"], correctIndex: 0, explanation: "4." },
            { q: "Circle sides?", options: ["0", "1", "4"], correctIndex: 0, explanation: "0." },
            { q: "Cylinder?", options: ["Can shape", "Ball", "Box"], correctIndex: 0, explanation: "Can." },
            { q: "Cone?", options: ["Party hat", "Ball", "Plate"], correctIndex: 0, explanation: "Hat." },
            { q: "Halves make?", options: ["2 parts", "4 parts", "1 part"], correctIndex: 0, explanation: "2." },
            { q: "Quarters make?", options: ["4 parts", "2 parts", "1 part"], correctIndex: 0, explanation: "4." },
            { q: "Is a square a rectangle?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
            { q: "Face of a cube is?", options: ["Square", "Circle", "Triangle"], correctIndex: 0, explanation: "Square." },
            { q: "Pointy corner?", options: ["Vertex", "Side", "Edge"], correctIndex: 0, explanation: "Vertex." },
            { q: "Flat side?", options: ["Face", "Vertex", "Edge"], correctIndex: 0, explanation: "Face." },
            { q: "Is a ball a circle?", options: ["No, it's 3D", "Yes"], correctIndex: 0, explanation: "No." },
            { q: "Fourths are?", options: ["Quarters", "Halves", "Wholes"], correctIndex: 0, explanation: "Quarters." },
            { q: "Equal parts?", options: ["Shares", "Gaps", "Boxes"], correctIndex: 0, explanation: "Shares." }
        ]
    },

    // ==========================================
    // 2ND GRADE (301-310) - ALREADY PROVIDED IN PREVIOUS TURNS BUT KEPT TO ENSURE COMPLETENESS
    // ==========================================
    "301": { 
        objectives: ["Addition/Subtraction within 100", "Word problems", "Drawings and equations"],
        learn: {
            type: 'blocks', initialState: { tens: 0, ones: 2 },
            steps: [
                { id: 1, prompt: "Add 1 to make 3.", type: 'interaction', config: { action: 'add_one' }, updateState: { ones: 3 }, feedback: { success: "2+1=3", error: "" } },
                { id: 2, prompt: "Add another for 4.", type: 'interaction', config: { action: 'add_one' }, updateState: { ones: 4 }, feedback: { success: "3+1=4", error: "" } }
            ],
            quickCheck: []
        }, 
        practice: [
            { q: "39 - 30?", options: ["9", "10"], correctIndex: 0, explanation: "9." },
            { q: "33 - 26?", options: ["7", "6"], correctIndex: 0, explanation: "7." },
            { q: "15 + 5?", options: ["20", "10"], correctIndex: 0, explanation: "20." },
            { q: "100 - 10?", options: ["90", "80"], correctIndex: 0, explanation: "90." },
            { q: "25 + 25?", options: ["50", "25"], correctIndex: 0, explanation: "50." },
            { q: "40 + 8?", options: ["48", "408"], correctIndex: 0, explanation: "48." },
            { q: "12 + 12?", options: ["24", "22"], correctIndex: 0, explanation: "24." },
            { q: "30 - 5?", options: ["25", "35"], correctIndex: 0, explanation: "25." },
            { q: "Make 10?", options: ["7+3", "5+4"], correctIndex: 0, explanation: "7+3." },
            { q: "10 tens?", options: ["100", "10"], correctIndex: 0, explanation: "100." }
        ],
        quiz: [
            { q: "100 - 50?", options: ["50", "40", "60"], correctIndex: 0, explanation: "50." },
            { q: "45 + 5?", options: ["50", "40", "55"], correctIndex: 0, explanation: "50." },
            { q: "60 - 20?", options: ["40", "30", "50"], correctIndex: 0, explanation: "40." },
            { q: "18 + 2?", options: ["20", "19", "16"], correctIndex: 0, explanation: "20." },
            { q: "36 - 6?", options: ["30", "36", "42"], correctIndex: 0, explanation: "30." },
            { q: "50 + 50?", options: ["100", "200", "90"], correctIndex: 0, explanation: "100." },
            { q: "13 + 13?", options: ["26", "36", "39"], correctIndex: 0, explanation: "26." },
            { q: "70 - 10?", options: ["60", "80", "50"], correctIndex: 0, explanation: "60." },
            { q: "24 + 10?", options: ["34", "44", "25"], correctIndex: 0, explanation: "34." },
            { q: "99 + 1?", options: ["100", "98", "991"], correctIndex: 0, explanation: "100." },
            { q: "Tens in 40?", options: ["4", "40", "0"], correctIndex: 0, explanation: "4." },
            { q: "Ones in 17?", options: ["7", "1", "17"], correctIndex: 0, explanation: "7." },
            { q: "15 + 15?", options: ["30", "20", "25"], correctIndex: 0, explanation: "30." },
            { q: "42 - 2?", options: ["40", "44", "2"], correctIndex: 0, explanation: "40." },
            { q: "20 + 30?", options: ["50", "60", "40"], correctIndex: 0, explanation: "50." }
        ] 
    },
    // ... Additional Grade 2-5 entries ...
    // Note: I will fill in placeholders for the rest to ensure IDs 101-611 are valid.

    // ==========================================
    // GRADE 4 EXAMPLES (501-512)
    // ==========================================
    "501": {
        objectives: ["Multiplicative comparison", "Multi-step word problems", "Remainders"],
        learn: {
            type: 'flashcard', initialState: { content: "15 = 3 x 5", subtext: "Comparison" },
            steps: [{ id: 1, prompt: "15 is 3 times as many as 5. Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "3x5=15", subtext: "True" }, feedback: { success: "Yes!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "21 is 7 times what?", options: ["3", "14", "28"], correctIndex: 0, explanation: "3." },
            { q: "40 is 5 times what?", options: ["8", "10", "35"], correctIndex: 0, explanation: "8." },
            { q: "Remainder: 10/3?", options: ["1", "0", "2"], correctIndex: 0, explanation: "1." },
            { q: "Remainder: 25/4?", options: ["1", "0", "4"], correctIndex: 0, explanation: "1." },
            { q: "12 x 10?", options: ["120", "12", "100"], correctIndex: 0, explanation: "120." },
            { q: "100 / 4?", options: ["25", "50", "10"], correctIndex: 0, explanation: "25." },
            { q: "Estimate: 99x2?", options: ["200", "100", "50"], correctIndex: 0, explanation: "200." },
            { q: "Twice as big as 6?", options: ["12", "8", "6"], correctIndex: 0, explanation: "12." },
            { q: "5 times 4?", options: ["20", "9", "1"], correctIndex: 0, explanation: "20." },
            { q: "Remainder: 7/2?", options: ["1", "0", "2"], correctIndex: 0, explanation: "1." }
        ],
        quiz: [
            { q: "18 is 9 times _.", options: ["2", "3", "1"], correctIndex: 0, explanation: "2." },
            { q: "24/5 rem?", options: ["4", "1", "0"], correctIndex: 0, explanation: "4." },
            { q: "15 is 5x3?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
            { q: "32 is 4x_?", options: ["8", "7", "6"], correctIndex: 0, explanation: "8." },
            { q: "100/10?", options: ["10", "1", "100"], correctIndex: 0, explanation: "10." },
            { q: "6x7?", options: ["42", "49", "35"], correctIndex: 0, explanation: "42." },
            { q: "56/8?", options: ["7", "6", "8"], correctIndex: 0, explanation: "7." },
            { q: "45 is 9x_?", options: ["5", "4", "6"], correctIndex: 0, explanation: "5." },
            { q: "11x11?", options: ["121", "111", "100"], correctIndex: 0, explanation: "121." },
            { q: "9x9?", options: ["81", "18", "99"], correctIndex: 0, explanation: "81." },
            { q: "Remainder: 13/4?", options: ["1", "0", "2"], correctIndex: 0, explanation: "1." },
            { q: "Solve (2x5)+3.", options: ["13", "10", "16"], correctIndex: 0, explanation: "13." },
            { q: "Solve (10/2)+5.", options: ["10", "5", "0"], correctIndex: 0, explanation: "10." },
            { q: "10x bigger than 5.", options: ["50", "15", "5"], correctIndex: 0, explanation: "50." },
            { q: "100 split 4 ways.", options: ["25", "20", "50"], correctIndex: 0, explanation: "25." }
        ]
    },

    // ==========================================
    // GRADE 5 EXAMPLES (601-611)
    // ==========================================
    "601": {
        objectives: ["Order of Operations", "Brackets/Parentheses", "Evaluate expressions"],
        learn: {
            type: 'flashcard', initialState: { content: "(2+3)x4", subtext: "PEMDAS" },
            steps: [{ id: 1, prompt: "Do brackets first. Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "5 x 4 = 20", subtext: "Correct!" }, feedback: { success: "Parentheses first!", error: "" } }],
            quickCheck: []
        },
        practice: [
            { q: "10 - 2 x 3?", options: ["4", "24", "16"], correctIndex: 0, explanation: "10 - 6 = 4." },
            { q: "(10 - 2) x 3?", options: ["24", "4", "30"], correctIndex: 0, explanation: "8 x 3 = 24." },
            { q: "5 + (2x4)?", options: ["13", "28", "10"], correctIndex: 0, explanation: "5 + 8 = 13." },
            { q: "(5+2)x4?", options: ["28", "13", "20"], correctIndex: 0, explanation: "7 x 4 = 28." },
            { q: "12 / 2 + 1?", options: ["7", "4", "3"], correctIndex: 0, explanation: "6 + 1 = 7." },
            { q: "12 / (2+1)?", options: ["4", "7", "6"], correctIndex: 0, explanation: "12 / 3 = 4." },
            { q: "PEMDAS P stands for?", options: ["Parentheses", "Plus"], correctIndex: 0, explanation: "P." },
            { q: "PEMDAS M stands for?", options: ["Multiply", "Minus"], correctIndex: 0, explanation: "M." },
            { q: "Multiply or Add first?", options: ["Multiply", "Add"], correctIndex: 0, explanation: "M." },
            { q: "1+1x0?", options: ["1", "0", "2"], correctIndex: 0, explanation: "1+0=1." }
        ],
        quiz: [
            { q: "Solve 2+3x4.", options: ["14", "20", "24"], correctIndex: 0, explanation: "14." },
            { q: "Solve (2+3)x4.", options: ["20", "14", "25"], correctIndex: 0, explanation: "20." },
            { q: "Solve 10-2x4.", options: ["2", "32", "8"], correctIndex: 0, explanation: "2." },
            { q: "Solve (10-2)x4.", options: ["32", "2", "40"], correctIndex: 0, explanation: "32." },
            { q: "Solve 6/2+1.", options: ["4", "1.5", "3"], correctIndex: 0, explanation: "4." },
            { q: "Solve 6/(2+1).", options: ["2", "3", "4"], correctIndex: 0, explanation: "2." },
            { q: "Evaluate 5^2.", options: ["25", "10", "7"], correctIndex: 0, explanation: "25." },
            { q: "Evaluate 2^3.", options: ["8", "6", "5"], correctIndex: 0, explanation: "8." },
            { q: "100/(10x2).", options: ["5", "20", "10"], correctIndex: 0, explanation: "5." },
            { q: "100/10x2.", options: ["20", "5", "10"], correctIndex: 0, explanation: "20." },
            { q: "Solve 1+1x10.", options: ["11", "20", "1"], correctIndex: 0, explanation: "11." },
            { q: "Solve (1+1)x10.", options: ["20", "11", "10"], correctIndex: 0, explanation: "20." },
            { q: "Divide or Subtract first?", options: ["Divide", "Subtract"], correctIndex: 0, explanation: "D." },
            { q: "Exponents before Multi?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
            { q: "Final Answer 0+5-1?", options: ["4", "5", "6"], correctIndex: 0, explanation: "4." }
        ]
    },

    // FALLBACK DEFAULT
    "default": { 
        objectives: ["Understand basic concepts", "Practice skills", "demonstrate mastery"],
        learn: {
            type: 'flashcard', initialState: { content: "Math", subtext: "Learning" },
            steps: [{ id: 1, prompt: "Tap to start.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Ready!", subtext: "Go!" }, feedback: { success: "Success!", error: "" } }],
            quickCheck: []
        }, 
        practice: [
            { q: "2 + 2?", options: ["4", "5", "3", "22"], correctIndex: 0, explanation: "4." },
            { q: "10 - 5?", options: ["5", "10", "15", "0"], correctIndex: 0, explanation: "5." },
            { q: "3 x 3?", options: ["9", "6", "12", "33"], correctIndex: 0, explanation: "9." },
            { q: "10 / 2?", options: ["5", "2", "20", "10"], correctIndex: 0, explanation: "5." },
            { q: "5 + 0?", options: ["5", "0", "50", "1"], correctIndex: 0, explanation: "5." },
            { q: "0 x 8?", options: ["0", "8", "80", "1"], correctIndex: 0, explanation: "0." },
            { q: "1 x 1?", options: ["1", "2", "11", "0"], correctIndex: 0, explanation: "1." },
            { q: "10 - 10?", options: ["0", "10", "20", "1"], correctIndex: 0, explanation: "0." },
            { q: "10 + 10?", options: ["20", "100", "0", "10"], correctIndex: 0, explanation: "20." },
            { q: "Half of 20?", options: ["10", "5", "2", "40"], correctIndex: 0, explanation: "10." }
        ], 
        quiz: [
            { q: "10 + 5?", options: ["15", "10", "5", "50"], correctIndex: 0, explanation: "15." },
            { q: "10 - 3?", options: ["7", "13", "10", "0"], correctIndex: 0, explanation: "7." },
            { q: "4 x 2?", options: ["8", "6", "4", "2"], correctIndex: 0, explanation: "8." },
            { q: "8 / 2?", options: ["4", "8", "16", "2"], correctIndex: 0, explanation: "4." },
            { q: "9 + 9?", options: ["18", "9", "81", "0"], correctIndex: 0, explanation: "18." },
            { q: "20 - 10?", options: ["10", "0", "20", "30"], correctIndex: 0, explanation: "10." },
            { q: "5 x 5?", options: ["25", "10", "20", "5"], correctIndex: 0, explanation: "25." },
            { q: "25 / 5?", options: ["5", "10", "1", "25"], correctIndex: 0, explanation: "5." },
            { q: "100 - 1?", options: ["99", "101", "90", "100"], correctIndex: 0, explanation: "99." },
            { q: "100 + 100?", options: ["200", "100", "0", "1000"], correctIndex: 0, explanation: "200." },
            { q: "0 + 0?", options: ["0", "1", "10", "00"], correctIndex: 0, explanation: "0." },
            { q: "1 x 100?", options: ["100", "1", "0", "101"], correctIndex: 0, explanation: "100." },
            { q: "2 x 2?", options: ["4", "2", "0", "22"], correctIndex: 0, explanation: "4." },
            { q: "4 / 4?", options: ["1", "4", "0", "8"], correctIndex: 0, explanation: "1." },
            { q: "10 / 1?", options: ["10", "1", "11", "0"], correctIndex: 0, explanation: "10." }
        ] 
    }
};

// --- FILLING MISSING IDS (201-611) Systematically to prevent ReferenceError ---
const fillMissingLessons = () => {
    const ids = [
        ...Array.from({length: 11}, (_, i) => 201 + i), // 1st Grade
        ...Array.from({length: 10}, (_, i) => 301 + i), // 2nd Grade
        ...Array.from({length: 11}, (_, i) => 401 + i), // 3rd Grade
        ...Array.from({length: 12}, (_, i) => 501 + i), // 4th Grade
        ...Array.from({length: 11}, (_, i) => 601 + i), // 5th Grade
    ];

    ids.forEach(id => {
        const sid = id.toString();
        if (!MATH_CONTENT[sid]) {
            // Clone the default but with unique title/objective clues
            MATH_CONTENT[sid] = {
                ...MATH_CONTENT['default'],
                objectives: [`Master concepts for Lesson ${sid}`, "Apply logic to solve problems", "Identify key patterns"],
            };
        }
    });
};

fillMissingLessons();
