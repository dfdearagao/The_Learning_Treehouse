import { LearnContent } from '../questionUtils';

// 1. Real Hand-Written Content
const REAL_LEARN: Record<string, LearnContent> = {
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
        }
    },
    "102": {
        objectives: ["Count objects in a line or circle", "Answer 'how many?' questions", "Understand the last number said is the total"],
        learn: {
            type: 'flashcard', initialState: { content: "🍎🍎", subtext: "Two Apples" },
            steps: [{ id: 1, prompt: "Tap to count the apples!", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "1, 2", subtext: "Total: 2" }, feedback: { success: "The last number is the total!", error: "" } }],
            quickCheck: []
        }
    },
    "103": {
        objectives: ["Identify groups with more or less items", "Compare written numbers (e.g. 5 > 3)", "Use matching strategies to compare"],
        learn: {
            type: 'flashcard', initialState: { content: "5 vs 2", subtext: "Which is more?" },
            steps: [{ id: 1, prompt: "Tap the side with more!", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "5 > 2", subtext: "5 is more" }, feedback: { success: "5 is bigger than 2!", error: "" } }],
            quickCheck: []
        }
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
        }
    },
    "105": {
        objectives: ["Compose numbers 11-19", "Decompose teen numbers", "Understand 10 as a bundle"],
        learn: {
            type: 'flashcard', initialState: { content: "10 + 1", subtext: "Makes 11" },
            steps: [{ id: 1, prompt: "Tap to see 11.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "11", subtext: "1 Ten, 1 One" }, feedback: { success: "Correct!", error: "" } }],
            quickCheck: []
        }
    },
    "106": {
        objectives: ["Describe objects by length or weight", "Compare two objects", "Use vocabulary (heavy/light)"],
        learn: {
            type: 'flashcard', initialState: { content: "📏", subtext: "Compare" },
            steps: [{ id: 1, prompt: "Tap to see which is longer!", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Train vs Car", subtext: "Train is longer" }, feedback: { success: "Correct!", error: "" } }],
            quickCheck: []
        }
    },
    "107": {
        objectives: ["Sort objects (color, shape)", "Count categories", "Identify the most"],
        learn: {
            type: 'flashcard', initialState: { content: "🔴🔵", subtext: "Sort" },
            steps: [{ id: 1, prompt: "Tap to group red items.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🔴🔴", subtext: "Red Group" }, feedback: { success: "Good job!", error: "" } }],
            quickCheck: []
        }
    },
    "108": {
        objectives: ["Name shapes", "Describe position", "Find shapes in world"],
        learn: {
            type: 'flashcard', initialState: { content: "🟦", subtext: "Square" },
            steps: [{ id: 1, prompt: "This is a Square. Tap!", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "⭕", subtext: "Circle" }, feedback: { success: "Circle is round!", error: "" } }],
            quickCheck: []
        }
    },
    "109": {
        objectives: ["Analyze attributes", "Build larger shapes", "Draw 2D shapes"],
        learn: {
            type: 'flashcard', initialState: { content: "🏠", subtext: "House" },
            steps: [{ id: 1, prompt: "What shapes make a house? Tap!", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🔺+🟥", subtext: "Triangle + Square" }, feedback: { success: "Correct!", error: "" } }],
            quickCheck: []
        }
    },
    "201": { 
        objectives: ["Solve addition/subtraction problems", "Use drawings", "Add/Sub within 20"],
        learn: {
            type: 'flashcard', initialState: { content: "📝", subtext: "Problem" },
            steps: [{ id: 1, prompt: "Sam had 3 apples. Got 2 more. Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "3+2=5", subtext: "5 apples" }, feedback: { success: "Correct!", error: "" } }],
            quickCheck: []
        }
    },
    "202": {
        objectives: ["Commutative property (3+2=2+3)", "Associative property", "Unknown-addend subtraction"],
        learn: {
            type: 'flashcard', initialState: { content: "3+2", subtext: "5" },
            steps: [{ id: 1, prompt: "Is 2+3 the same? Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "2+3=5", subtext: "Yes!" }, feedback: { success: "Correct!", error: "" } }],
            quickCheck: []
        }
    },
    "203": {
        objectives: ["Relate counting to add/sub", "Fluency within 10", "Making ten strategy"],
        learn: {
            type: 'number_line', initialState: { current: 5, range: [0,1,2,3,4,5,6,7,8,9,10] },
            steps: [{ id: 1, prompt: "Start 5. Hop 2. Tap.", type: 'interaction', config: { action: 'hop' }, updateState: { current: 7 }, feedback: { success: "5+2=7!", error: "" } }],
            quickCheck: []
        }
    },
    "204": {
        objectives: ["Equal sign meaning", "True/False equations", "Unknown numbers"],
        learn: {
            type: 'flashcard', initialState: { content: "2+2=4", subtext: "Balance" },
            steps: [{ id: 1, prompt: "Equal means same. Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "TRUE", subtext: "4=4" }, feedback: { success: "Correct!", error: "" } }],
            quickCheck: []
        }
    },
    "205": {
        objectives: ["Count to 120", "Read/Write numbers to 120", "Digit values"],
        learn: {
            type: 'flashcard', initialState: { content: "99", subtext: "Number" },
            steps: [{ id: 1, prompt: "What after 99? Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "100", subtext: "One Hundred" }, feedback: { success: "100!", error: "" } }],
            quickCheck: []
        }
    },
    "206": {
        objectives: ["Place value (tens/ones)", "Compare numbers (<, >, =)", "Identify values"],
        learn: {
            type: 'blocks', initialState: { tens: 1, ones: 2 },
            steps: [{ id: 1, prompt: "1 Ten, 2 Ones = 12. Add Ten.", type: 'interaction', config: { action: 'add_one' }, updateState: { tens: 2 }, feedback: { success: "Now 22!", error: "" } }],
            quickCheck: []
        }
    },
    "207": {
        objectives: ["Add within 100", "10 more/10 less", "Subtract multiples of 10"],
        learn: {
            type: 'blocks', initialState: { tens: 2, ones: 0 },
            steps: [{ id: 1, prompt: "20. Add Ten. Tap.", type: 'interaction', config: { action: 'add_one' }, updateState: { tens: 3 }, feedback: { success: "30!", error: "" } }],
            quickCheck: []
        }
    },
    "208": {
        objectives: ["Order 3 objects", "Non-standard units", "Length iteration"],
        learn: {
            type: 'flashcard', initialState: { content: "📏", subtext: "Order" },
            steps: [{ id: 1, prompt: "Pencil, Pen, Eraser. Tap to order.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "1. Pencil, 2. Pen, 3. Eraser", subtext: "Longest to Shortest" }, feedback: { success: "Nice!", error: "" } }],
            quickCheck: []
        }
    },
    "209": {
        objectives: ["Tell time (hour/half-hour)", "Analog/Digital clocks"],
        learn: {
            type: 'flashcard', initialState: { content: "🕒", subtext: "3:00" },
            steps: [{ id: 1, prompt: "Tap for 3:30.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🕞", subtext: "Three Thirty" }, feedback: { success: "Half past 3!", error: "" } }],
            quickCheck: []
        }
    },
    "210": {
        objectives: ["Organize data", "Answer questions", "Simple charts"],
        learn: {
            type: 'flashcard', initialState: { content: "📊", subtext: "Data" },
            steps: [{ id: 1, prompt: "3 Red, 2 Blue. Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🍎🍎🍎\n🫐🫐", subtext: "Total: 5" }, feedback: { success: "Charted!", error: "" } }],
            quickCheck: []
        }
    },
    "211": {
        objectives: ["Defining attributes", "Compose 2D/3D shapes", "Shares (halves/quarters)"],
        learn: {
            type: 'flashcard', initialState: { content: "🟥", subtext: "Square" },
            steps: [{ id: 1, prompt: "Cut in half. Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "🌗", subtext: "Halves" }, feedback: { success: "Two equal shares!", error: "" } }],
            quickCheck: []
        }
    },
    "301": { 
        objectives: ["Addition/Subtraction within 100", "Word problems", "Drawings and equations"],
        learn: {
            type: 'blocks', initialState: { tens: 0, ones: 2 },
            steps: [
                { id: 1, prompt: "Add 1 to make 3.", type: 'interaction', config: { action: 'add_one' }, updateState: { ones: 3 }, feedback: { success: "2+1=3", error: "" } },
                { id: 2, prompt: "Add another for 4.", type: 'interaction', config: { action: 'add_one' }, updateState: { ones: 4 }, feedback: { success: "3+1=4", error: "" } }
            ],
            quickCheck: []
        }
    },
    "302": {
        objectives: ["Add/Subtract within 20 (Mental)", "Properties", "Missing numbers"],
        learn: {
            type: 'number_line', initialState: { current: 15, range: [10,11,12,13,14,15,16,17,18,19,20] },
            steps: [{ id: 1, prompt: "15 + 5. Hop!", type: 'interaction', config: { action: 'hop' }, updateState: { current: 20 }, feedback: { success: "20!", error: "" } }],
            quickCheck: []
        }
    },
    "303": {
        objectives: ["Equal groups (Multiplication)", "Odd/Even", "Arrays"],
        learn: {
            type: 'blocks', initialState: { tens: 0, ones: 3 },
            steps: [{ id: 1, prompt: "Make another group of 3.", type: 'interaction', config: { action: 'add_one' }, updateState: { ones: 6 }, feedback: { success: "Two groups of 3 is 6!", error: "" } }],
            quickCheck: []
        }
    },
    "304": {
        objectives: ["Place Value (Hundreds)", "Read/Write to 1000", "Skip count"],
        learn: {
            type: 'blocks', initialState: { tens: 9, ones: 9 },
            steps: [{ id: 1, prompt: "Add 1 to 99.", type: 'interaction', config: { action: 'add_one' }, updateState: { tens: 10, ones: 0 }, feedback: { success: "100!", error: "" } }],
            quickCheck: []
        }
    },
    "305": {
        objectives: ["Add/Sub within 1000", "Regrouping", "Mental Math 10/100"],
        learn: {
            type: 'flashcard', initialState: { content: "350", subtext: "+100" },
            steps: [{ id: 1, prompt: "Add 100.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "450", subtext: "Correct" }, feedback: { success: "450!", error: "" } }],
            quickCheck: []
        }
    },
    
    "401": {
        objectives: ["Multiplication & Division", "Word Problems", "Arrays"],
        learn: {
            type: 'flashcard', initialState: { content: "3 x 4", subtext: "Groups" },
            steps: [{ id: 1, prompt: "Solve it.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "12", subtext: "Product" }, feedback: { success: "12!", error: "" } }],
            quickCheck: []
        }
    },
    "402": {
        objectives: ["Properties of Operations", "Commutative/Associative", "Division as unknown factor"],
        learn: {
            type: 'flashcard', initialState: { content: "5 x 2", subtext: "10" },
            steps: [{ id: 1, prompt: "Flip it.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "2 x 5", subtext: "Still 10" }, feedback: { success: "Order doesn't matter!", error: "" } }],
            quickCheck: []
        }
    },
    "403": {
        objectives: ["Fluency 0-100", "Unknown numbers", "Mental strategies"],
        learn: {
            type: 'number_line', initialState: { current: 0, range: [0,10,20,30,40,50] },
            steps: [{ id: 1, prompt: "Skip count by 10.", type: 'interaction', config: { action: 'hop' }, updateState: { current: 10 }, feedback: { success: "10!", error: "" } }],
            quickCheck: []
        }
    },
    
    "501": {
        objectives: ["Multiplicative comparison", "Multi-step word problems", "Remainders"],
        learn: {
            type: 'flashcard', initialState: { content: "15 = 3 x 5", subtext: "Comparison" },
            steps: [{ id: 1, prompt: "15 is 3 times as many as 5. Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "3x5=15", subtext: "True" }, feedback: { success: "Yes!", error: "" } }],
            quickCheck: []
        }
    },
    "502": {
        objectives: ["Factors and Multiples", "Prime/Composite", "Patterns"],
        learn: {
            type: 'flashcard', initialState: { content: "12", subtext: "Factors" },
            steps: [{ id: 1, prompt: "List factors.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "1,2,3,4,6,12", subtext: "Pairs" }, feedback: { success: "All pairs!", error: "" } }],
            quickCheck: []
        }
    },
    
    "601": {
        objectives: ["Order of Operations", "Brackets/Parentheses", "Evaluate expressions"],
        learn: {
            type: 'flashcard', initialState: { content: "(2+3)x4", subtext: "PEMDAS" },
            steps: [{ id: 1, prompt: "Do brackets first. Tap.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "5 x 4 = 20", subtext: "Correct!" }, feedback: { success: "Parentheses first!", error: "" } }],
            quickCheck: []
        }
    },
    "602": {
        objectives: ["Patterns and Relationships", "Graphing", "Rules"],
        learn: {
            type: 'flashcard', initialState: { content: "Input: 2", subtext: "Rule: +3" },
            steps: [{ id: 1, prompt: "What is output?", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "5", subtext: "Output" }, feedback: { success: "2+3=5!", error: "" } }],
            quickCheck: []
        }
    }
};

export const MATH_LEARN: Record<string, LearnContent> = {};

// 1. Define all Lesson IDs from the Curriculum (constants.ts)
const allIds = [
    ...Array.from({length: 9}, (_,i)=>101+i), // K: 101-109
    ...Array.from({length: 11}, (_,i)=>201+i), // 1st: 201-211
    ...Array.from({length: 10}, (_,i)=>301+i), // 2nd: 301-310
    ...Array.from({length: 11}, (_,i)=>401+i), // 3rd: 401-411
    ...Array.from({length: 12}, (_,i)=>501+i), // 4th: 501-512
    ...Array.from({length: 11}, (_,i)=>601+i)  // 5th: 601-611
];

// 2. Default Fallback Structure
const defaultLearn: LearnContent = {
    objectives: ["Understand the core concept", "Apply mathematical reasoning", "Solve problems efficiently"],
    learn: { 
        type: 'flashcard', 
        initialState: { content: "Math", subtext: "Concept" }, 
        steps: [
            { id: 1, prompt: "Ready to learn? Tap to start.", type: 'interaction', config: { action: 'tap_card' }, updateState: { content: "Go!", subtext: "Let's Math!" }, feedback: { success: "Let's begin!", error: "" } }
        ], 
        quickCheck: [] 
    }
};

// 3. Populate
allIds.forEach(id => {
    const key = id.toString();
    if (REAL_LEARN[key]) {
        MATH_LEARN[key] = REAL_LEARN[key];
    } else {
        MATH_LEARN[key] = {
            ...defaultLearn,
            objectives: [`Master Lesson ${id} concepts`, ...defaultLearn.objectives.slice(1)]
        };
    }
});