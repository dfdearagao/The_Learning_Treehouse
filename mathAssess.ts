import { QuestionTemplate } from './questionUtils';

const REAL_ASSESS: Record<string, QuestionTemplate[]> = {
    // ==========================================
    // KINDERGARTEN (100s)
    // ==========================================
    "101": [
        { q: "Identify 7.", options: ["7", "1", "9", "4"], correctIndex: 0, explanation: "This is seven." },
        { q: "Count: 8, 9, _", options: ["10", "11", "7", "8"], correctIndex: 0, explanation: "10 follows 9." },
        { q: "Count the dots: ● ● ●", options: ["3", "2", "1", "4"], correctIndex: 0, explanation: "Three dots." },
        { q: "Which number is 5?", options: ["5", "2", "3", "S"], correctIndex: 0, explanation: "5 is the number five." },
        { q: "What comes next? 1, 2, 3, _", options: ["4", "5", "2", "0"], correctIndex: 0, explanation: "4 comes after 3." }
    ],
    "102": [
        { q: "How many apples? 🍎 🍎", options: ["2", "3", "1", "4"], correctIndex: 0, explanation: "Count 1, 2." },
        { q: "Count the stars: ★ ★ ★ ★ ★", options: ["5", "4", "6", "10"], correctIndex: 0, explanation: "There are 5 stars." },
        { q: "How many fingers? 🖐️", options: ["5", "4", "1", "10"], correctIndex: 0, explanation: "5 fingers." },
        { q: "Count the cars: 🚗 🚗 🚗", options: ["3", "2", "4", "1"], correctIndex: 0, explanation: "3 cars." },
        { q: "Which group has 4?", options: ["●●●●", "●●", "●", "●●●"], correctIndex: 0, explanation: "The group with 4 dots." }
    ],
    "103": [
        { q: "Which number is bigger?", options: ["10", "5", "2", "1"], correctIndex: 0, explanation: "10 is the biggest." },
        { q: "Which is less?", options: ["1", "5", "3", "8"], correctIndex: 0, explanation: "1 is the smallest." },
        { q: "Is 5 more than 3?", options: ["Yes", "No"], correctIndex: 0, explanation: "5 is bigger than 3." },
        { q: "Compare: 4 _ 4", options: ["=", ">", "<", "None"], correctIndex: 0, explanation: "4 equals 4." },
        { q: "Which group has more? 🍎 vs 🍎🍎🍎", options: ["3 Apples", "1 Apple"], correctIndex: 0, explanation: "3 is more than 1." }
    ],
    "104": [
        { q: "1 + 1 = ?", options: ["2", "1", "3", "0"], correctIndex: 0, explanation: "1 plus 1 is 2." },
        { q: "2 + 2 = ?", options: ["4", "2", "3", "5"], correctIndex: 0, explanation: "2 plus 2 is 4." },
        { q: "3 - 1 = ?", options: ["2", "3", "1", "0"], correctIndex: 0, explanation: "3 take away 1 is 2." },
        { q: "If you have 2 cookies and eat 1, how many left?", options: ["1", "2", "0", "3"], correctIndex: 0, explanation: "2 minus 1 is 1." },
        { q: "5 + 0 = ?", options: ["5", "0", "50", "1"], correctIndex: 0, explanation: "Adding zero changes nothing." }
    ],
    "105": [
        { q: "10 + 1 = ?", options: ["11", "10", "1", "12"], correctIndex: 0, explanation: "10 and 1 make 11." },
        { q: "What number is one ten and five ones?", options: ["15", "51", "5", "10"], correctIndex: 0, explanation: "15." },
        { q: "10 + 3 = ?", options: ["13", "30", "31", "10"], correctIndex: 0, explanation: "13." },
        { q: "How many tens in 19?", options: ["1", "9", "19", "0"], correctIndex: 0, explanation: "One ten." },
        { q: "18 is 10 + ?", options: ["8", "1", "10", "0"], correctIndex: 0, explanation: "10 + 8 = 18." }
    ],
    "106": [
        { q: "Which is heavier?", options: ["Elephant", "Mouse", "Feather", "Ant"], correctIndex: 0, explanation: "An elephant is very heavy." },
        { q: "Which is lighter?", options: ["Feather", "Rock", "Car", "House"], correctIndex: 0, explanation: "A feather is very light." },
        { q: "Which is taller?", options: ["Giraffe", "Dog", "Cat", "Mouse"], correctIndex: 0, explanation: "Giraffes are tall." },
        { q: "Compare lengths: ✏️ vs ✏️✏️", options: ["2 pencils are longer", "1 pencil is longer"], correctIndex: 0, explanation: "More is longer." },
        { q: "Which holds more water?", options: ["Bathtub", "Cup", "Spoon", "Thimble"], correctIndex: 0, explanation: "Bathtub is biggest." }
    ],
    "107": [
        { q: "Sort by color: Which is red?", options: ["Apple", "Banana", "Blueberry", "Grass"], correctIndex: 0, explanation: "Apples are red." },
        { q: "Which shape is round?", options: ["Circle", "Square", "Triangle", "Star"], correctIndex: 0, explanation: "Circles are round." },
        { q: "Which belongs in the 'Animals' group?", options: ["Cat", "Car", "Chair", "Cup"], correctIndex: 0, explanation: "Cat is an animal." },
        { q: "Count the blue items: 🔵 🔵 🔴", options: ["2", "1", "3", "0"], correctIndex: 0, explanation: "There are 2 blue dots." },
        { q: "Which does NOT belong? 🍎 🍌 🚗", options: ["Car", "Apple", "Banana"], correctIndex: 0, explanation: "Car is not a fruit." }
    ],
    "108": [
        { q: "What shape has 3 sides?", options: ["Triangle", "Square", "Circle", "Box"], correctIndex: 0, explanation: "Triangle." },
        { q: "What shape has 4 equal sides?", options: ["Square", "Rectangle", "Triangle", "Circle"], correctIndex: 0, explanation: "Square." },
        { q: "Which shape is like a ball?", options: ["Sphere", "Cube", "Cone", "Box"], correctIndex: 0, explanation: "Sphere." },
        { q: "Where is the star? ★ (Above the line)", options: ["Above", "Below", "Next to"], correctIndex: 0, explanation: "Above." },
        { q: "Find the circle.", options: ["⭕", "🟥", "🔺", "⭐"], correctIndex: 0, explanation: "The round one." }
    ],
    "109": [
        { q: "Put two triangles together to make a...", options: ["Square/Rhombus", "Circle", "Line"], correctIndex: 0, explanation: "They form a square or diamond." },
        { q: "Does a circle have corners?", options: ["No", "Yes"], correctIndex: 0, explanation: "Circles are round." },
        { q: "Which is 3D?", options: ["Cube", "Square", "Triangle", "Circle"], correctIndex: 0, explanation: "Cube is solid." },
        { q: "How many corners on a square?", options: ["4", "3", "2", "1"], correctIndex: 0, explanation: "4 corners." },
        { q: "Can you stack spheres?", options: ["No, they roll", "Yes"], correctIndex: 0, explanation: "They roll away." }
    ],

    // ==========================================
    // 1ST GRADE (200s)
    // ==========================================
    "201": [
        { q: "3 + 2 = ?", options: ["5", "6", "4", "32"], correctIndex: 0, explanation: "3 plus 2 is 5." },
        { q: "10 - 5 = ?", options: ["5", "10", "0", "15"], correctIndex: 0, explanation: "10 minus 5 is 5." },
        { q: "Sam has 4 cats. He gets 1 more. How many?", options: ["5", "4", "3", "6"], correctIndex: 0, explanation: "4 + 1 = 5." },
        { q: "8 + 0 = ?", options: ["8", "0", "80", "1"], correctIndex: 0, explanation: "Adding zero keeps it the same." },
        { q: "Which equation shows 5?", options: ["2+3", "2+2", "1+1", "5+1"], correctIndex: 0, explanation: "2+3=5." }
    ],
    "202": [
        { q: "3 + 2 = 5. What is 2 + 3?", options: ["5", "6", "4", "23"], correctIndex: 0, explanation: "Order doesn't matter (Commutative)." },
        { q: "10 - 8 = 2. What is 2 + 8?", options: ["10", "8", "12", "6"], correctIndex: 0, explanation: "Fact families." },
        { q: "Is 4 + 1 the same as 1 + 4?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
        { q: "5 + 5 + 1 = ?", options: ["11", "10", "15", "12"], correctIndex: 0, explanation: "10 + 1 = 11." },
        { q: "Which helps solve 6 - 4?", options: ["4 + ? = 6", "6 + 4", "4 - 6"], correctIndex: 0, explanation: "Think addition." }
    ],
    "203": [
        { q: "What is 10 + 5?", options: ["15", "105", "50", "51"], correctIndex: 0, explanation: "15." },
        { q: "8 + 8 = ?", options: ["16", "18", "88", "15"], correctIndex: 0, explanation: "Double 8 is 16." },
        { q: "12 - 2 = ?", options: ["10", "12", "2", "0"], correctIndex: 0, explanation: "10." },
        { q: "Start at 5. Count up 3.", options: ["8", "7", "6", "9"], correctIndex: 0, explanation: "5, 6, 7, 8." },
        { q: "7 + 3 = ?", options: ["10", "73", "11", "9"], correctIndex: 0, explanation: "Makes a ten." }
    ],
    "204": [
        { q: "5 = 5. True or False?", options: ["True", "False"], correctIndex: 0, explanation: "5 is the same as 5." },
        { q: "3 + 1 = 4 + 0. True or False?", options: ["True", "False"], correctIndex: 0, explanation: "Both equal 4." },
        { q: "Find the missing number: 5 + ? = 7", options: ["2", "1", "3", "5"], correctIndex: 0, explanation: "5 + 2 = 7." },
        { q: "Is 2 + 2 = 5?", options: ["No", "Yes"], correctIndex: 0, explanation: "2+2=4." },
        { q: "10 - ? = 5", options: ["5", "4", "6", "10"], correctIndex: 0, explanation: "10 - 5 = 5." }
    ],
    "205": [
        { q: "What comes after 29?", options: ["30", "28", "39", "20"], correctIndex: 0, explanation: "30." },
        { q: "Count: 50, 51, 52, _", options: ["53", "54", "55", "50"], correctIndex: 0, explanation: "53." },
        { q: "What is 100 + 1?", options: ["101", "200", "110", "1001"], correctIndex: 0, explanation: "101." },
        { q: "Read this number: 115", options: ["One hundred fifteen", "One one five", "Fifty"], correctIndex: 0, explanation: "One hundred fifteen." },
        { q: "Which number is larger?", options: ["110", "99", "80", "10"], correctIndex: 0, explanation: "110." }
    ],
    "206": [
        { q: "In the number 25, which digit is the tens?", options: ["2", "5", "25", "None"], correctIndex: 0, explanation: "2 tens." },
        { q: "What is 3 tens and 4 ones?", options: ["34", "43", "7", "304"], correctIndex: 0, explanation: "34." },
        { q: "Compare: 50 _ 15", options: [">", "<", "="], correctIndex: 0, explanation: "50 is greater." },
        { q: "Value of the 6 in 60?", options: ["60", "6", "0", "600"], correctIndex: 0, explanation: "60." },
        { q: "10 ones make...", options: ["1 Ten", "1 Hundred", "1 One", "0"], correctIndex: 0, explanation: "1 Ten." }
    ],
    "207": [
        { q: "20 + 10 = ?", options: ["30", "2010", "10", "40"], correctIndex: 0, explanation: "30." },
        { q: "50 - 10 = ?", options: ["40", "60", "50", "30"], correctIndex: 0, explanation: "40." },
        { q: "What is 10 more than 65?", options: ["75", "55", "66", "85"], correctIndex: 0, explanation: "75." },
        { q: "What is 10 less than 42?", options: ["32", "52", "41", "22"], correctIndex: 0, explanation: "32." },
        { q: "30 + 30 = ?", options: ["60", "33", "0", "90"], correctIndex: 0, explanation: "60." }
    ],
    "208": [
        { q: "Which is longest?", options: ["School Bus", "Bike", "Skateboard", "Shoe"], correctIndex: 0, explanation: "Bus is huge." },
        { q: "Measure the pencil with paperclips. It is 4 clips long.", options: ["4", "10", "1", "100"], correctIndex: 0, explanation: "4 clips." },
        { q: "Order from short to long: Ant, Cat, Giraffe", options: ["Ant, Cat, Giraffe", "Giraffe, Cat, Ant"], correctIndex: 0, explanation: "Smallest to biggest." },
        { q: "If A is longer than B, and B is longer than C...", options: ["A is longest", "C is longest"], correctIndex: 0, explanation: "A is longest." },
        { q: "What tool measures length?", options: ["Ruler", "Scale", "Clock", "Thermometer"], correctIndex: 0, explanation: "Ruler." }
    ],
    "209": [
        { q: "Big hand on 12, Little hand on 3. What time?", options: ["3:00", "12:03", "3:12", "12:00"], correctIndex: 0, explanation: "3 O'clock." },
        { q: "Big hand on 6 means?", options: ["Half past (:30)", "O'clock (:00)", "Quarter past"], correctIndex: 0, explanation: "Half past." },
        { q: "Show 5:30 on digital.", options: ["5:30", "5:00", "6:30", "3:50"], correctIndex: 0, explanation: "5:30." },
        { q: "How many minutes in an hour?", options: ["60", "100", "24", "12"], correctIndex: 0, explanation: "60 minutes." },
        { q: "Is 12:00 PM lunch or sleep?", options: ["Lunch", "Sleep"], correctIndex: 0, explanation: "Lunch (Noon)." }
    ],
    "210": [
        { q: "If 3 kids like Red and 2 like Blue, how many total?", options: ["5", "3", "2", "6"], correctIndex: 0, explanation: "3+2=5." },
        { q: "Which has more votes? 🍎(5) or 🍌(2)?", options: ["Apple", "Banana"], correctIndex: 0, explanation: "Apple has 5." },
        { q: "What is a Tally Mark for 5?", options: ["|||| with slash", "|||||", "V", "5"], correctIndex: 0, explanation: "4 lines with a slash." },
        { q: "How many more is 6 than 4?", options: ["2", "6", "4", "10"], correctIndex: 0, explanation: "6 - 4 = 2." },
        { q: "Look at the graph. Which bar is tallest?", options: ["The one with most votes", "The one with least"], correctIndex: 0, explanation: "Tallest = Most." }
    ],
    "211": [
        { q: "How many corners does a triangle have?", options: ["3", "4", "0", "5"], correctIndex: 0, explanation: "3 corners." },
        { q: "Is a square a rectangle?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes, special rectangle." },
        { q: "Shape with 0 sides?", options: ["Circle", "Square", "Triangle", "Hexagon"], correctIndex: 0, explanation: "Circle." },
        { q: "Combine two squares to make a...", options: ["Rectangle", "Circle", "Triangle"], correctIndex: 0, explanation: "Rectangle." },
        { q: "What is a 3D square called?", options: ["Cube", "Box", "Dice", "All of these"], correctIndex: 3, explanation: "Cube." }
    ],

    // ==========================================
    // 2ND GRADE (300s)
    // ==========================================
    "301": [
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
    ],
    "302": [
        { q: "9 + 9?", options: ["18", "19", "17"], correctIndex: 0, explanation: "18." },
        { q: "20 - 10?", options: ["10", "0", "20"], correctIndex: 0, explanation: "10." },
        { q: "8 + 5?", options: ["13", "12", "14"], correctIndex: 0, explanation: "13." },
        { q: "16 - 8?", options: ["8", "7", "9"], correctIndex: 0, explanation: "8." },
        { q: "10 + 7?", options: ["17", "70", "107"], correctIndex: 0, explanation: "17." },
        { q: "6 + 6?", options: ["12", "13", "11"], correctIndex: 0, explanation: "12." },
        { q: "14 - 7?", options: ["7", "6", "8"], correctIndex: 0, explanation: "7." },
        { q: "15 + 0?", options: ["15", "0", "150"], correctIndex: 0, explanation: "15." },
        { q: "11 - 1?", options: ["10", "1", "11"], correctIndex: 0, explanation: "10." },
        { q: "3 + 9?", options: ["12", "11", "13"], correctIndex: 0, explanation: "12." },
        { q: "18 - 9?", options: ["9", "8", "10"], correctIndex: 0, explanation: "9." },
        { q: "5 + 7?", options: ["12", "13", "11"], correctIndex: 0, explanation: "12." },
        { q: "13 - 3?", options: ["10", "3", "13"], correctIndex: 0, explanation: "10." },
        { q: "4 + 8?", options: ["12", "13", "11"], correctIndex: 0, explanation: "12." },
        { q: "19 - 1?", options: ["18", "19", "20"], correctIndex: 0, explanation: "18." }
    ],
    "303": [
        { q: "Is 6 odd or even?", options: ["Even", "Odd"], correctIndex: 0, explanation: "Even." },
        { q: "Is 11 odd or even?", options: ["Odd", "Even"], correctIndex: 0, explanation: "Odd." },
        { q: "3 groups of 2?", options: ["6", "5", "4"], correctIndex: 0, explanation: "6." },
        { q: "4 + 4 + 4 = ?", options: ["12", "16", "8"], correctIndex: 0, explanation: "12." },
        { q: "Array: 5 rows of 2?", options: ["10", "7", "12"], correctIndex: 0, explanation: "10." },
        { q: "Which sum is even?", options: ["2+2", "2+1", "3+2"], correctIndex: 0, explanation: "4." },
        { q: "Which sum is odd?", options: ["2+1", "2+2", "4+4"], correctIndex: 0, explanation: "3." },
        { q: "Equation for 3 threes?", options: ["3+3+3", "3+3", "3+1"], correctIndex: 0, explanation: "3+3+3." },
        { q: "Total: 🔴🔴 🔴🔴", options: ["4", "2", "6"], correctIndex: 0, explanation: "4." },
        { q: "100 is?", options: ["Even", "Odd"], correctIndex: 0, explanation: "Even." },
        { q: "101 is?", options: ["Odd", "Even"], correctIndex: 0, explanation: "Odd." },
        { q: "5 groups of 1?", options: ["5", "1", "6"], correctIndex: 0, explanation: "5." },
        { q: "2 rows of 5?", options: ["10", "7", "5"], correctIndex: 0, explanation: "10." },
        { q: "Is 0 even?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
        { q: "Pair 9 items. Leftover?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." }
    ],

    // --- 4TH GRADE (500s) ---
    "501": [
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
    ],
    "502": [
        { q: "Factors of 12?", options: ["1, 2, 3, 4, 6, 12", "1, 12", "2, 6"], correctIndex: 0, explanation: "All pairs." },
        { q: "Is 11 prime?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
        { q: "Is 15 composite?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
        { q: "Multiple of 4?", options: ["16", "15", "18"], correctIndex: 0, explanation: "16." },
        { q: "Prime number?", options: ["17", "16", "18"], correctIndex: 0, explanation: "17." },
        { q: "Composite number?", options: ["20", "19", "13"], correctIndex: 0, explanation: "20." },
        { q: "Factor of 20?", options: ["5", "3", "7"], correctIndex: 0, explanation: "5." },
        { q: "Multiple of 10?", options: ["100", "105", "11"], correctIndex: 0, explanation: "100." },
        { q: "Is 1 prime?", options: ["No", "Yes"], correctIndex: 0, explanation: "No, neither." },
        { q: "List factors of 5.", options: ["1, 5", "1, 2, 5"], correctIndex: 0, explanation: "1, 5." },
        { q: "Is 27 prime?", options: ["No", "Yes"], correctIndex: 0, explanation: "No (3x9)." },
        { q: "Multiple of 9?", options: ["81", "80", "82"], correctIndex: 0, explanation: "81." },
        { q: "Common factor of 6 & 9?", options: ["3", "2", "6"], correctIndex: 0, explanation: "3." },
        { q: "Greatest Factor of 10?", options: ["10", "5", "1"], correctIndex: 0, explanation: "10." },
        { q: "Is 2 the only even prime?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." }
    ],
    "503": [
        { q: "Pattern: 5, 10, 15, _", options: ["20", "25", "16"], correctIndex: 0, explanation: "20." },
        { q: "Rule: Start 1, x2.", options: ["1, 2, 4, 8", "1, 3, 5"], correctIndex: 0, explanation: "Doubling." },
        { q: "Shape: ⭕ 🔺 ⭕ 🔺 _", options: ["⭕", "🔺"], correctIndex: 0, explanation: "Circle." },
        { q: "Pattern: 100, 95, 90, _", options: ["85", "80"], correctIndex: 0, explanation: "85." },
        { q: "Rule: +3. Start 2.", options: ["2, 5, 8", "2, 6, 9"], correctIndex: 0, explanation: "2, 5, 8." },
        { q: "Find error: 2, 4, 5, 8", options: ["5 should be 6", "8 should be 9"], correctIndex: 0, explanation: "5." },
        { q: "Pattern: A, A, B, A, A, _", options: ["B", "A"], correctIndex: 0, explanation: "B." },
        { q: "1, 4, 9, 16, _ (Squares)", options: ["25", "20"], correctIndex: 0, explanation: "25." },
        { q: "Rule: x10.", options: ["10, 100, 1000", "10, 20, 30"], correctIndex: 0, explanation: "Powers of 10." },
        { q: "Fibonacci: 1, 1, 2, 3, 5, _", options: ["8", "7", "6"], correctIndex: 0, explanation: "8." },
        { q: "Odd numbers: 1, 3, 5, _", options: ["7", "6", "8"], correctIndex: 0, explanation: "7." },
        { q: "Even numbers: 2, 4, 6, _", options: ["8", "7", "9"], correctIndex: 0, explanation: "8." },
        { q: "Pattern: 50, 40, 30, _", options: ["20", "10"], correctIndex: 0, explanation: "20." },
        { q: "Input 2 -> Output 4. Rule?", options: ["+2 or x2", "+1"], correctIndex: 0, explanation: "+2 or x2." },
        { q: "Pattern: Mon, Tue, Wed, _", options: ["Thu", "Fri"], correctIndex: 0, explanation: "Thu." }
    ],

    // --- 5TH GRADE (600s) ---
    "601": [
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
    ],
    "602": [
        { q: "Origin point?", options: ["(0,0)", "(1,1)"], correctIndex: 0, explanation: "(0,0)." },
        { q: "X coordinate in (3, 5)?", options: ["3", "5"], correctIndex: 0, explanation: "3." },
        { q: "Y coordinate in (3, 5)?", options: ["5", "3"], correctIndex: 0, explanation: "5." },
        { q: "Plot (0, 5).", options: ["On Y Axis", "On X Axis"], correctIndex: 0, explanation: "Y Axis." },
        { q: "Move Right 2, Up 2.", options: ["(2,2)", "(2,0)"], correctIndex: 0, explanation: "(2,2)." },
        { q: "Pattern: (1,1), (2,2), (3, _)", options: ["3", "4"], correctIndex: 0, explanation: "3." },
        { q: "Rule y = x. If x=10?", options: ["y=10", "y=1"], correctIndex: 0, explanation: "10." },
        { q: "Rule y = x + 2. If x=1?", options: ["3", "2", "1"], correctIndex: 0, explanation: "3." },
        { q: "First quadrant?", options: ["Positive X, Positive Y", "Negative X"], correctIndex: 0, explanation: "+, +." },
        { q: "Point (4, 0).", options: ["On X Axis", "On Y Axis"], correctIndex: 0, explanation: "X Axis." },
        { q: "Graph title?", options: ["Describes data", "Random words"], correctIndex: 0, explanation: "Describes data." },
        { q: "Horizontal axis?", options: ["X", "Y"], correctIndex: 0, explanation: "X." },
        { q: "Vertical axis?", options: ["Y", "X"], correctIndex: 0, explanation: "Y." },
        { q: "Intersection of axes?", options: ["Origin", "Middle"], correctIndex: 0, explanation: "Origin." },
        { q: "Coordinate format?", options: ["(x, y)", "(y, x)"], correctIndex: 0, explanation: "(x, y)." }
    ],
    "603": [
        { q: "0.1 is?", options: ["One Tenth", "One Hundredth"], correctIndex: 0, explanation: "Tenth." },
        { q: "0.01 is?", options: ["One Hundredth", "One Tenth"], correctIndex: 0, explanation: "Hundredth." },
        { q: "0.001 is?", options: ["One Thousandth", "One Tenth"], correctIndex: 0, explanation: "Thousandth." },
        { q: "10 x 0.1?", options: ["1", "0.01"], correctIndex: 0, explanation: "1." },
        { q: "1/10 of 1?", options: ["0.1", "10"], correctIndex: 0, explanation: "0.1." },
        { q: "Place value of 5 in 0.5?", options: ["Tenths", "Ones"], correctIndex: 0, explanation: "Tenths." },
        { q: "Round 0.99 to whole?", options: ["1", "0", "0.9"], correctIndex: 0, explanation: "1." },
        { q: "3.45 > 3.54?", options: ["No", "Yes"], correctIndex: 0, explanation: "No." },
        { q: "Expanded: 4.5?", options: ["4 + 0.5", "4 + 5"], correctIndex: 0, explanation: "4 + 0.5." },
        { q: "100 x 0.01?", options: ["1", "10"], correctIndex: 0, explanation: "1." },
        { q: "Divide 1 by 10?", options: ["0.1", "10"], correctIndex: 0, explanation: "0.1." },
        { q: "Value of 2 in 4.12?", options: ["Hundredths", "Tenths"], correctIndex: 0, explanation: "Hundredths." },
        { q: "0.5 = 0.50?", options: ["Yes", "No"], correctIndex: 0, explanation: "Yes." },
        { q: "Which is biggest?", options: ["0.1", "0.01", "0.001"], correctIndex: 0, explanation: "0.1." },
        { q: "Write 'Five Tenths'", options: ["0.5", "5.0", "0.05"], correctIndex: 0, explanation: "0.5." }
    ]
};

export const MATH_ASSESS: Record<string, QuestionTemplate[]> = {};

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
const generateQuizSet = (id: string, startIdx: number = 0): QuestionTemplate[] => {
    return Array.from({length: 15}, (_, i) => ({
        q: `Assessment Q${startIdx + i + 1} (Lesson ${id}): Select the best answer.`,
        options: ["Correct Answer", "Distractor 1", "Distractor 2", "Distractor 3"],
        correctIndex: 0,
        explanation: `Demonstrating mastery for lesson ${id}.`
    }));
};

// 3. Populate
allIds.forEach(id => {
    const key = id.toString();
    const realQuestions = REAL_ASSESS[key] || [];
    
    if (realQuestions.length >= 15) {
        MATH_ASSESS[key] = realQuestions.slice(0, 15);
    } else {
        const needed = 15 - realQuestions.length;
        const generated = generateQuizSet(key, realQuestions.length).slice(0, needed);
        MATH_ASSESS[key] = [...realQuestions, ...generated];
    }
});

MATH_ASSESS['default'] = generateQuizSet('General');