import { Worksheet } from './types';

export const getMathWorksheets = (grade: string, lessonId: number, lessonTitle: string): Worksheet[] => {
    const worksheets: Worksheet[] = [];
    const lowerTitle = lessonTitle.toLowerCase();

    // --- GENERATORS ---

    const generateAddition = (difficulty: string) => {
        const limit = difficulty === 'Easy' ? 10 : difficulty === 'Medium' ? 20 : 100;
        const n1 = Math.floor(Math.random() * limit);
        const n2 = Math.floor(Math.random() * limit);
        
        // Mix of formats
        const type = Math.random();
        if (type < 0.3) return { q: `Solve: ${n1} + ${n2} = ?`, a: (n1 + n2).toString() };
        if (type < 0.6) return { q: `Find the sum: ${n1} + ${n2}`, a: (n1 + n2).toString() };
        return { q: `${n1} plus ${n2} equals...`, a: (n1 + n2).toString() };
    };

    const generateSubtraction = (difficulty: string) => {
        const limit = difficulty === 'Easy' ? 10 : difficulty === 'Medium' ? 20 : 100;
        const n1 = Math.floor(Math.random() * limit) + 5;
        const n2 = Math.floor(Math.random() * n1); // Ensure positive result
        return { q: `Solve: ${n1} - ${n2} = ?`, a: (n1 - n2).toString() };
    };

    const generatePlaceValue = (difficulty: string) => {
        const n = Math.floor(Math.random() * 90) + 10; // 10-99
        if (Math.random() > 0.5) {
            return { q: `How many TENS are in the number ${n}?`, a: Math.floor(n / 10).toString() };
        } else {
            return { q: `What is the value of the digit ${n % 10} in ${n}?`, a: (n % 10).toString() };
        }
    };

    const generateMeasurement = () => {
        const items = ["Pencil", "Book", "Shoe", "Desk"];
        const units = ["inches", "cm", "feet"];
        const item = items[Math.floor(Math.random() * items.length)];
        const val = Math.floor(Math.random() * 10) + 2;
        const unit = units[Math.floor(Math.random() * units.length)];
        return { q: `If a ${item} is ${val} ${unit} long, and you add another ${item}, how long is it?`, a: `${val * 2} ${unit}` };
    };

    const generateGeometry = () => {
        const shapes = [
            { n: "Triangle", s: "3" }, { n: "Square", s: "4" }, { n: "Pentagon", s: "5" }, 
            { n: "Hexagon", s: "6" }, { n: "Octagon", s: "8" }
        ];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        return { q: `How many sides does a ${shape.n} have?`, a: shape.s };
    };

    const generateMultiplication = (difficulty: string) => {
        const limit = difficulty === 'Easy' ? 5 : difficulty === 'Medium' ? 9 : 12;
        const n1 = Math.floor(Math.random() * limit) + 1;
        const n2 = Math.floor(Math.random() * 10);
        return { q: `${n1} x ${n2} = ?`, a: (n1 * n2).toString() };
    };

    const generateFractions = () => {
        const den = Math.floor(Math.random() * 8) + 2;
        return { q: `Draw a circle and shade 1/${den}.`, a: `1/${den}` };
    };

    const generateCounting = () => {
        const start = Math.floor(Math.random() * 20);
        return { q: `What comes next? ${start}, ${start+1}, ${start+2}, ...`, a: (start+3).toString() };
    };

    // --- MAIN GENERATION LOOP ---

    for (let i = 1; i <= 10; i++) {
        let difficulty: 'Easy' | 'Medium' | 'Hard' = 'Medium';
        if (i <= 3) difficulty = 'Easy';
        else if (i >= 8) difficulty = 'Hard';

        const questions = [];
        
        for (let q = 1; q <= 10; q++) {
            let item;

            // Strict Keyword Matching based on Curriculum Titles
            if (lowerTitle.includes("add") || lowerTitle.includes("sum") || lowerTitle.includes("plus")) {
                item = generateAddition(difficulty);
            } 
            else if (lowerTitle.includes("subtr") || lowerTitle.includes("minus") || lowerTitle.includes("difference")) {
                item = generateSubtraction(difficulty);
            } 
            else if (lowerTitle.includes("place value") || lowerTitle.includes("base ten") || lowerTitle.includes("tens")) {
                item = generatePlaceValue(difficulty);
            }
            else if (lowerTitle.includes("measure") || lowerTitle.includes("time") || lowerTitle.includes("money") || lowerTitle.includes("length")) {
                item = generateMeasurement();
            }
            else if (lowerTitle.includes("shape") || lowerTitle.includes("geometry")) {
                item = generateGeometry();
            }
            else if (lowerTitle.includes("multipl") || lowerTitle.includes("factor") || lowerTitle.includes("equal group")) {
                item = generateMultiplication(difficulty);
            }
            else if (lowerTitle.includes("fraction")) {
                item = generateFractions();
            }
            else if (lowerTitle.includes("count")) {
                item = generateCounting();
            }
            // Fallback for "Operations" generic titles that implies mixed math
            else if (lowerTitle.includes("operation")) {
                // Mix Add/Sub
                if (Math.random() > 0.5) item = generateAddition(difficulty);
                else item = generateSubtraction(difficulty);
            }
            else {
                // Absolute fallback
                item = generateCounting();
            }

            questions.push({
                id: `ws-${lessonId}-${i}-q${q}`,
                question: item.q,
                type: 'text',
                answer: item.a
            });
        }

        worksheets.push({
            id: `math-${lessonId}-${i}`,
            title: `Worksheet ${i}: ${difficulty} Practice`,
            difficulty: difficulty,
            questions: questions
        });
    }

    return worksheets;
};