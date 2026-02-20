import { QuestionTemplate } from './questionUtils';

const REAL_PRACTICE: Record<string, QuestionTemplate[]> = {
    "101": [
        { q: "What number is this: 5?", options: ["5", "2", "3", "1"], correctIndex: 0, explanation: "This is five." },
        { q: "Count 1, 2, _", options: ["3", "4", "5", "0"], correctIndex: 0, explanation: "3 comes next." },
        { q: "How many suns in the sky?", options: ["1", "2", "0", "5"], correctIndex: 0, explanation: "Just one sun!" }
    ],
    "102": [
        { q: "Count: ●●", options: ["2", "1", "3"], correctIndex: 0, explanation: "2 dots." },
        { q: "Count: 🍎🍎🍎", options: ["3", "2", "4"], correctIndex: 0, explanation: "3 apples." },
        { q: "How many fingers on 1 hand?", options: ["5", "10"], correctIndex: 0, explanation: "5." }
    ],
    "103": [
        { q: "Which is more: 5 or 2?", options: ["5", "2"], correctIndex: 0, explanation: "5." },
        { q: "Which is less: 1 or 10?", options: ["1", "10"], correctIndex: 0, explanation: "1." },
        { q: "Equal to 3?", options: ["3", "2", "4"], correctIndex: 0, explanation: "3." }
    ],
    "104": [
        { q: "1+1?", options: ["2", "1", "3"], correctIndex: 0, explanation: "2." },
        { q: "2-1?", options: ["1", "2", "0"], correctIndex: 0, explanation: "1." },
        { q: "3+0?", options: ["3", "0"], correctIndex: 0, explanation: "3." }
    ],
    "105": [
        { q: "10 and 1 make?", options: ["11", "10", "1"], correctIndex: 0, explanation: "11." },
        { q: "10 and 5 make?", options: ["15", "51"], correctIndex: 0, explanation: "15." },
        { q: "10 + 9?", options: ["19", "91"], correctIndex: 0, explanation: "19." }
    ],
    "106": [
        { q: "Which is heavy?", options: ["Rock", "Feather"], correctIndex: 0, explanation: "Rock." },
        { q: "Which is long?", options: ["Snake", "Ant"], correctIndex: 0, explanation: "Snake." },
        { q: "Which holds more?", options: ["Bucket", "Cup"], correctIndex: 0, explanation: "Bucket." }
    ],
    "107": [
        { q: "Sort by?", options: ["Color", "Taste"], correctIndex: 0, explanation: "Color." },
        { q: "Red apple goes in?", options: ["Red bin", "Blue bin"], correctIndex: 0, explanation: "Red bin." },
        { q: "Count blue items.", options: ["Depends", "1"], correctIndex: 1, explanation: "Count them." }
    ],
    "108": [
        { q: "Circle shape?", options: ["Round", "Square"], correctIndex: 0, explanation: "Round." },
        { q: "Triangle sides?", options: ["3", "4"], correctIndex: 0, explanation: "3." },
        { q: "Square corners?", options: ["4", "3"], correctIndex: 0, explanation: "4." }
    ],
    "109": [
        { q: "2 Triangles make?", options: ["Square/Diamond", "Circle"], correctIndex: 0, explanation: "Square." },
        { q: "Stack cubes?", options: ["Tower", "Ball"], correctIndex: 0, explanation: "Tower." },
        { q: "Flat shape?", options: ["2D", "3D"], correctIndex: 0, explanation: "2D." }
    ],

    "201": [
        { q: "5+5?", options: ["10", "5"], correctIndex: 0, explanation: "10." },
        { q: "10-2?", options: ["8", "7"], correctIndex: 0, explanation: "8." },
        { q: "3+4?", options: ["7", "8"], correctIndex: 0, explanation: "7." }
    ],
    "202": [
        { q: "2+3=?", options: ["5", "6"], correctIndex: 0, explanation: "5." },
        { q: "3+2=?", options: ["5", "6"], correctIndex: 0, explanation: "5." },
        { q: "Same answer?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." }
    ],
    "203": [
        { q: "8+2?", options: ["10", "11"], correctIndex: 0, explanation: "10." },
        { q: "10-5?", options: ["5", "4"], correctIndex: 0, explanation: "5." },
        { q: "1+9?", options: ["10", "9"], correctIndex: 0, explanation: "10." }
    ],
    "204": [
        { q: "5=5?", options: ["True", "False"], correctIndex: 0, explanation: "True." },
        { q: "4+1=5?", options: ["True", "False"], correctIndex: 0, explanation: "True." },
        { q: "5+ ? = 7", options: ["2", "1"], correctIndex: 0, explanation: "2." }
    ],
    "205": [
        { q: "Count: 99, 100, _", options: ["101", "200"], correctIndex: 0, explanation: "101." },
        { q: "110, 111, _", options: ["112", "113"], correctIndex: 0, explanation: "112." },
        { q: "Write 105", options: ["105", "15"], correctIndex: 0, explanation: "105." }
    ],
    "206": [
        { q: "Tens in 34?", options: ["3", "4"], correctIndex: 0, explanation: "3." },
        { q: "Ones in 34?", options: ["4", "3"], correctIndex: 0, explanation: "4." },
        { q: "50 > 40?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." }
    ],
    "207": [
        { q: "10+10?", options: ["20", "30"], correctIndex: 0, explanation: "20." },
        { q: "50-10?", options: ["40", "60"], correctIndex: 0, explanation: "40." },
        { q: "20+30?", options: ["50", "60"], correctIndex: 0, explanation: "50." }
    ],
    "208": [
        { q: "Order: S, M, L", options: ["Small, Med, Large", "Large, Med, Small"], correctIndex: 0, explanation: "Order." },
        { q: "Longest?", options: ["Pencil", "Eraser"], correctIndex: 0, explanation: "Pencil." },
        { q: "Measure with?", options: ["Ruler", "Spoon"], correctIndex: 0, explanation: "Ruler." }
    ],
    "209": [
        { q: "Long hand is?", options: ["Minute", "Hour"], correctIndex: 0, explanation: "Minute." },
        { q: "Short hand is?", options: ["Hour", "Minute"], correctIndex: 0, explanation: "Hour." },
        { q: "12:00 is?", options: ["Noon/Midnight", "Morning"], correctIndex: 0, explanation: "Noon/Midnight." }
    ],
    "210": [
        { q: "Data?", options: ["Info", "Food"], correctIndex: 0, explanation: "Info." },
        { q: "Tally 5?", options: ["||||/", "||||"], correctIndex: 0, explanation: "Slash." },
        { q: "Graph shows?", options: ["Data", "Pictures"], correctIndex: 0, explanation: "Data." }
    ],
    "211": [
        { q: "Half?", options: ["2 parts", "3 parts"], correctIndex: 0, explanation: "2." },
        { q: "Quarter?", options: ["4 parts", "2 parts"], correctIndex: 0, explanation: "4." },
        { q: "Circle has corners?", options: ["No", "Yes"], correctIndex: 0, explanation: "No." }
    ],

    "301": [
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
    "302": [
        { q: "9 + 4 = ?", options: ["13", "12", "14"], correctIndex: 0, explanation: "13." },
        { q: "15 - 6 = ?", options: ["9", "8", "7"], correctIndex: 0, explanation: "9." },
        { q: "8 + 8 = ?", options: ["16", "18", "14"], correctIndex: 0, explanation: "16." },
        { q: "11 - 2 = ?", options: ["9", "10", "8"], correctIndex: 0, explanation: "9." },
        { q: "6 + 7 = ?", options: ["13", "12", "14"], correctIndex: 0, explanation: "13." },
        { q: "20 - 5 = ?", options: ["15", "10", "25"], correctIndex: 0, explanation: "15." },
        { q: "13 + 0 = ?", options: ["13", "0", "130"], correctIndex: 0, explanation: "13." },
        { q: "17 - 17 = ?", options: ["0", "17", "1"], correctIndex: 0, explanation: "0." },
        { q: "5 + 5 + 5 = ?", options: ["15", "10", "20"], correctIndex: 0, explanation: "15." },
        { q: "12 + 8 = ?", options: ["20", "18", "22"], correctIndex: 0, explanation: "20." }
    ],
    "303": [
        { q: "Is 5 odd or even?", options: ["Odd", "Even"], correctIndex: 0, explanation: "Odd." },
        { q: "Is 10 odd or even?", options: ["Even", "Odd"], correctIndex: 0, explanation: "Even." },
        { q: "2 + 2 = 4. Even?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
        { q: "3 + 3 = ?", options: ["6", "5", "7"], correctIndex: 0, explanation: "6." },
        { q: "Array: 2 rows of 3?", options: ["6", "5", "8"], correctIndex: 0, explanation: "6." },
        { q: "Odd number?", options: ["7", "4", "2"], correctIndex: 0, explanation: "7." },
        { q: "Even number?", options: ["8", "3", "5"], correctIndex: 0, explanation: "8." },
        { q: "5 + 5 = ?", options: ["10", "11"], correctIndex: 0, explanation: "10." },
        { q: "Pair up 7 socks. One left?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
        { q: "Array: 3 rows of 3?", options: ["9", "6", "12"], correctIndex: 0, explanation: "9." }
    ],
    "304": [
        { q: "100 is?", options: ["One Hundred", "Ten"], correctIndex: 0, explanation: "One Hundred." },
        { q: "300 + 50 + 2?", options: ["352", "3502"], correctIndex: 0, explanation: "352." },
        { q: "Count by 10s: 10, 20, _", options: ["30", "40"], correctIndex: 0, explanation: "30." }
    ],
    "305": [
        { q: "150 + 10?", options: ["160", "151"], correctIndex: 0, explanation: "160." },
        { q: "150 - 10?", options: ["140", "160"], correctIndex: 0, explanation: "140." },
        { q: "123 + 100?", options: ["223", "133"], correctIndex: 0, explanation: "223." }
    ],

    // --- 4TH GRADE (500s) ---
    "501": [
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
    "502": [
        { q: "Factors of 6?", options: ["1, 2, 3, 6", "1, 6", "2, 3"], correctIndex: 0, explanation: "1, 2, 3, 6." },
        { q: "Is 7 prime?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
        { q: "Is 9 composite?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes (3x3)." },
        { q: "Multiple of 5?", options: ["25", "23", "21"], correctIndex: 0, explanation: "25." },
        { q: "Factors of 10?", options: ["1, 2, 5, 10", "1, 10"], correctIndex: 0, explanation: "1, 2, 5, 10." },
        { q: "Prime number?", options: ["13", "12", "14"], correctIndex: 0, explanation: "13." },
        { q: "Composite number?", options: ["15", "11", "2"], correctIndex: 0, explanation: "15." },
        { q: "Multiple of 3?", options: ["12", "10", "13"], correctIndex: 0, explanation: "12." },
        { q: "Factor pair of 8?", options: ["2, 4", "3, 5"], correctIndex: 0, explanation: "2, 4." },
        { q: "Is 2 prime?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." }
    ],
    "503": [
        { q: "Pattern: 2, 4, 6, _", options: ["8", "7", "9"], correctIndex: 0, explanation: "8 (+2)." },
        { q: "Rule: Add 5. Start 0.", options: ["0, 5, 10", "0, 1, 2"], correctIndex: 0, explanation: "0, 5, 10." },
        { q: "Pattern: 10, 20, 30, _", options: ["40", "50"], correctIndex: 0, explanation: "40." },
        { q: "Shape pattern: 🟥, 🔵, 🟥, _", options: ["🔵", "🟥"], correctIndex: 0, explanation: "Blue circle." },
        { q: "Rule: Subtract 2. Start 10.", options: ["8, 6, 4", "9, 8, 7"], correctIndex: 0, explanation: "8, 6, 4." },
        { q: "Pattern: 1, 3, 5, _", options: ["7", "6", "8"], correctIndex: 0, explanation: "7." },
        { q: "Next: A, B, A, B, _", options: ["A", "B"], correctIndex: 0, explanation: "A." },
        { q: "Doubling: 2, 4, 8, _", options: ["16", "10", "12"], correctIndex: 0, explanation: "16." },
        { q: "Rule: Multiply by 2.", options: ["3, 6, 12", "3, 5, 7"], correctIndex: 0, explanation: "3, 6, 12." },
        { q: "Pattern: 100, 90, 80, _", options: ["70", "60"], correctIndex: 0, explanation: "70." }
    ],

    // --- 5TH GRADE (600s) ---
    "601": [
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
    "602": [
        { q: "Point (2, 3): X is?", options: ["2", "3"], correctIndex: 0, explanation: "X is first." },
        { q: "Origin coordinates?", options: ["(0,0)", "(1,1)"], correctIndex: 0, explanation: "(0,0)." },
        { q: "Move right 4, up 1.", options: ["(4,1)", "(1,4)"], correctIndex: 0, explanation: "(4,1)." },
        { q: "Y-axis is?", options: ["Vertical", "Horizontal"], correctIndex: 0, explanation: "Vertical." },
        { q: "X-axis is?", options: ["Horizontal", "Vertical"], correctIndex: 0, explanation: "Horizontal." },
        { q: "Plot (5, 0).", options: ["On X axis", "On Y axis"], correctIndex: 0, explanation: "On X axis." },
        { q: "Coordinate pair?", options: ["(x, y)", "(y, x)"], correctIndex: 0, explanation: "(x, y)." },
        { q: "Rule: y = x + 1. If x=2?", options: ["3", "1", "4"], correctIndex: 0, explanation: "3." },
        { q: "Rule: y = 2x. If x=3?", options: ["6", "5", "9"], correctIndex: 0, explanation: "6." },
        { q: "Grid quadrant 1?", options: ["Top Right", "Bottom Left"], correctIndex: 0, explanation: "Top Right." }
    ],
    "603": [
        { q: "Value of 1 in 0.1?", options: ["Tenth", "Hundredth"], correctIndex: 0, explanation: "Tenth." },
        { q: "0.5 as a fraction?", options: ["1/2", "1/5", "5/100"], correctIndex: 0, explanation: "5/10." },
        { q: "0.01 is?", options: ["One Hundredth", "One Tenth"], correctIndex: 0, explanation: "Hundredth." },
        { q: "Compare 0.5 and 0.50.", options: ["Equal", "0.50 is bigger"], correctIndex: 0, explanation: "Equal." },
        { q: "10 times 0.1?", options: ["1", "0.01"], correctIndex: 0, explanation: "1." },
        { q: "1/10 of 100?", options: ["10", "1"], correctIndex: 0, explanation: "10." },
        { q: "Write 3 tenths.", options: ["0.3", "0.03", "3.0"], correctIndex: 0, explanation: "0.3." },
        { q: "Round 0.56 to tenths.", options: ["0.6", "0.5", "1.0"], correctIndex: 0, explanation: "0.6." },
        { q: "4.567 - digit 7 is?", options: ["Thousandths", "Hundredths"], correctIndex: 0, explanation: "Thousandths." },
        { q: "Power of 10: 10^2?", options: ["100", "20"], correctIndex: 0, explanation: "100." }
    ]
};

export const MATH_PRACTICE: Record<string, QuestionTemplate[]> = {};

// 1. IDs
const allIds = [
    ...Array.from({length: 9}, (_,i)=>101+i),
    ...Array.from({length: 11}, (_,i)=>201+i),
    ...Array.from({length: 10}, (_,i)=>301+i),
    ...Array.from({length: 11}, (_,i)=>401+i),
    ...Array.from({length: 12}, (_,i)=>501+i),
    ...Array.from({length: 11}, (_,i)=>601+i)
];

// 2. Generator
const generatePracticeSet = (id: string, startIdx: number = 0): QuestionTemplate[] => {
    return Array.from({length: 10}, (_, i) => ({
        q: `Practice Q${startIdx + i + 1} (Lesson ${id}): Solve the problem.`,
        options: ["Correct Answer", "Option B", "Option C", "Option D"],
        correctIndex: 0,
        explanation: `This is a generated practice question to ensure 10 items.`
    }));
};

// 3. Populate
allIds.forEach(id => {
    const key = id.toString();
    const realQuestions = REAL_PRACTICE[key] || [];
    
    if (realQuestions.length >= 10) {
        MATH_PRACTICE[key] = realQuestions.slice(0, 10);
    } else {
        const needed = 10 - realQuestions.length;
        const generated = generatePracticeSet(key, realQuestions.length).slice(0, needed);
        MATH_PRACTICE[key] = [...realQuestions, ...generated];
    }
});

MATH_PRACTICE['default'] = generatePracticeSet('General');