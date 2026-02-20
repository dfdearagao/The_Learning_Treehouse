import React, { useState, useMemo } from 'react';
import { ArrowLeft, Filter, BookOpen, Target, Download, Printer, Brain, Pencil, Trophy, MousePointer2, CheckCircle2 } from 'lucide-react';
import { MATH_CURRICULUM, READING_CURRICULUM, SCIENCE_CURRICULUM, SOCIAL_STUDIES_CURRICULUM } from '../constants';

interface GradeSummaryDetailProps {
  grade: string;
  onBack: () => void;
}

// --- HELPER FOR SPECIFIC SUMMARY GENERATION ---
// This function needs to be robust enough to generate unique content for similarly named lessons
const getLessonContentSummary = (subject: string, grade: string, title: string) => {
    const lowerTitle = title.toLowerCase();
    
    // Default placeholders
    let learnDesc = "Students interact with visual models to understand the core concept.";
    let interactiveSteps = [
        "Concept introduction with voice-over",
        "Tap-to-explore visual elements",
        "Self-check micro-interactions"
    ];
    let practiceQs: string[] = ["Practice Problem 1", "Practice Problem 2", "Practice Problem 3"];
    let assessQs: string[] = ["Mastery Quest Q1", "Mastery Quest Q2", "Mastery Quest Q3", "Mastery Quest Q4", "Mastery Quest Q5"];

    // --- MATH LOGIC ---
    if (subject === 'Math') {
        if (lowerTitle.includes("count sequence") || lowerTitle.includes("know number names")) {
            learnDesc = "Interactive counting chart and number line frog-hop game.";
            interactiveSteps = ["Count on from a start number (e.g., 5, 6, 7...)", "Identify patterns (+1, +2)", "Locate numbers on a timeline"];
            practiceQs = ["What comes after 19?", "Fill blank: 10, 20, _, 40", "Place 7 on the number line"];
            assessQs = ["Count to 100 by tens", "Pattern: 5, 10, 15, __", "Greater: 12 or 21?", "Subtract 2 using frog-hop", "Value of 10 + 10"];
        } 
        else if (lowerTitle.includes("count to tell") || lowerTitle.includes("number of objects")) {
            learnDesc = "Drag-and-drop objects into boxes to visualize quantity.";
            interactiveSteps = ["Group items into sets of 5", "Match number cards to object groups", "Compare pile sizes"];
            practiceQs = ["Count the red apples", "Is 5 more than 3?", "Draw 4 circles"];
            assessQs = ["How many stars in the picture?", "Circle the group with 10", "Match '8' to 8 dots", "Which has more: 5 or 7?", "Count backwards from 10"];
        }
        else if (lowerTitle.includes("compare numbers")) {
             learnDesc = "Balance scale simulator to weigh numbers against each other.";
             interactiveSteps = ["Place weights on scale", "Use <, >, = symbols", "Find the heavier number"];
             practiceQs = ["Is 5 > 3?", "Which is less: 2 or 8?", "Make the scale balanced: 4 = ?"];
             assessQs = ["Compare 12 and 21", "Symbol for 'Greater Than'", "True/False: 5 < 9", "Order: 1, 5, 3", "Select the largest number"];
        }
        else if (lowerTitle.includes("understand addition") || lowerTitle.includes("subtraction")) {
             learnDesc = "Story problem builder with animated characters.";
             interactiveSteps = ["Combine two groups of friends", "Take away items from a basket", "Write the equation"];
             practiceQs = ["3 birds + 2 birds =", "You have 5, give away 2", "Draw 4 + 1"];
             assessQs = ["Solve: 2 + 2", "Solve: 5 - 1", "Word Problem: Apples", "Symbol for Plus", "Symbol for Minus"];
        }
        else if (lowerTitle.includes("place value") || lowerTitle.includes("11-19")) {
            learnDesc = "Base-ten block manipulator for Tens and Ones.";
            interactiveSteps = ["Trade 10 ones for 1 ten", "Build numbers using blocks", "Identify values in columns"];
            practiceQs = ["Show 14 using blocks", "Value of 1 in 12?", "Combine 1 ten and 5 ones"];
            assessQs = ["15 in expanded form", "Tens count in 19", "Add 10 to 2", "1 ten vs 10 ones", "10 + 4 = ?"];
        } 
        else if (lowerTitle.includes("measure") || lowerTitle.includes("length")) {
            learnDesc = "Virtual ruler and object alignment tool.";
            interactiveSteps = ["Align object to 0", "Read the endpoint", "Compare two lengths"];
            practiceQs = ["How long is the pencil?", "Which is longer?", "Measure in paperclips"];
            assessQs = ["Length of book", "Shorter: Pen or Eraser?", "Units of measure", "Estimate length", "Compare heights"];
        }
        else if (lowerTitle.includes("classify") || lowerTitle.includes("categories")) {
            learnDesc = "Sorting bins for shapes, colors, and sizes.";
            interactiveSteps = ["Sort by Color", "Sort by Shape", "Count items in each bin"];
            practiceQs = ["Put red items here", "How many blue shapes?", "Find the odd one out"];
            assessQs = ["Count the circles", "Sort: Big vs Small", "Category name", "Most items group", "Least items group"];
        }
        else if (lowerTitle.includes("shapes") || lowerTitle.includes("geometry")) {
            learnDesc = "Shape detective tool to find sides and corners.";
            interactiveSteps = ["Tap the corners", "Trace the sides", "Rotate the shape"];
            practiceQs = ["How many sides on a triangle?", "Is this a square?", "Find the circle"];
            assessQs = ["Identify a Hexagon", "Corners on a square", "Round vs Straight sides", "Shape matching", "Draw a rectangle"];
        }
        // Fallback for generic Math
        else {
             learnDesc = "Guided math operation steps using physical counters.";
             interactiveSteps = ["Model the problem", "Solve with tools", "Check your logic"];
             practiceQs = ["Solve for the unknown", "Match the word problem", "Draw the solution"];
             assessQs = ["Mixed Operation Q1", "Logic Challenge Q2", "Vocabulary Q3", "Word Problem Q4", "Speed Round Q5"];
        }
    } 
    // --- READING LOGIC ---
    else if (subject === 'Reading') {
        if (lowerTitle.includes("alphabet") || lowerTitle.includes("sounds")) {
            learnDesc = "Letter-sound association flashcards with audio examples.";
            interactiveSteps = ["Trace the letter", "Listen to the phoneme", "Find words with the sound"];
            practiceQs = ["Match 'A' to 'Apple'", "Identify the vowel sound", "Circle capital letters"];
            assessQs = ["Sound of 'B'", "Starts with 'S'?", "Letter after 'D'", "Sound out 'C-A-T'", "Find the long 'A' sound"];
        } else if (lowerTitle.includes("rhym")) {
            learnDesc = "Rhyme matcher puzzle with rhythmic feedback.";
            interactiveSteps = ["Listen to word pairs", "Identify matching endings", "Complete the rhyme"];
            practiceQs = ["'Dog' rhymes with 'Log'?", "Rhyme for 'Sun'", "Odd one out test"];
            assessQs = ["Rhyme for 'Tree'", "Pair Check: Cat/Bat", "Triple rhyme hunt", "Rhyme completion", "Non-rhyme identifier"];
        } else if (lowerTitle.includes("comprehension") || lowerTitle.includes("question") || lowerTitle.includes("retell")) {
            learnDesc = "Interactive storybook with pause-and-predict moments.";
            interactiveSteps = ["Read/Listen to the passage", "Identify the hero", "Predict the ending"];
            practiceQs = ["Who is the main character?", "Identify the setting", "Sequence the events"];
            assessQs = ["Identify main conflict", "Character motivation", "Event causality", "Story summary check", "Supporting detail hunt"];
        } else {
             learnDesc = "Word sorting game for vocabulary building.";
             interactiveSteps = ["Identify the word", "Match to picture", "Use in a sentence"];
             practiceQs = ["What is this?", "Fill in the blank", "Spell the word"];
             assessQs = ["Vocab definition", "Picture match", "Spelling check", "Sentence usage", "Antonym find"];
        }
    }
    // --- SCIENCE LOGIC ---
    else if (subject === 'Science') {
        if (lowerTitle.includes("plant") || lowerTitle.includes("animal")) {
            learnDesc = "Virtual garden and zoo observation deck.";
            interactiveSteps = ["Water the seed", "Observe growth stages", "Feed the animal"];
            practiceQs = ["What do plants need?", "Identify the root", "Is it a mammal?"];
            assessQs = ["Lifecycle stage 1", "Photosynthesis basic", "Animal habitat", "Living vs Non-living", "Food chain start"];
        } else if (lowerTitle.includes("weather") || lowerTitle.includes("season")) {
            learnDesc = "Weather station dashboard to control the sky.";
            interactiveSteps = ["Make it rain", "Change temperature", "Dress the character"];
            practiceQs = ["Clothes for winter?", "What is a cloud?", "Temperature check"];
            assessQs = ["Season identification", "Rain cycle", "Thermometer reading", "Wind direction", "Storm safety"];
        } else {
            learnDesc = "Virtual lab bench for simple experiments.";
            interactiveSteps = ["Mix ingredients", "Observe reaction", "Record results"];
            practiceQs = ["Hypothesis check", "Observation log", "Safety first"];
            assessQs = ["Lab tool ID", "Experiment outcome", "Scientific method step", "Matter state", "Energy source"];
        }
    }
    // --- SOCIAL STUDIES LOGIC ---
    else if (subject === 'Social Studies') {
         if (lowerTitle.includes("citizen") || lowerTitle.includes("community")) {
            learnDesc = "Town helper simulation game.";
            interactiveSteps = ["Visit the fire station", "Help a neighbor", "Follow the rules"];
            practiceQs = ["Who puts out fires?", "Why do we have rules?", "Sharing is caring"];
            assessQs = ["Community helper ID", "Good citizen trait", "Rule purpose", "Voting concept", "Emergency number"];
         } else if (lowerTitle.includes("map") || lowerTitle.includes("globe")) {
            learnDesc = "Interactive 3D globe explorer.";
            interactiveSteps = ["Spin the globe", "Find your continent", "Zoom into a city"];
            practiceQs = ["Where is the ocean?", "North vs South", "Map symbol ID"];
            assessQs = ["Continent name", "Compass rose direction", "Map key usage", "Land vs Water", "My country"];
         } else {
            learnDesc = "Time travel capsule to visit the past.";
            interactiveSteps = ["Turn the dial to 'Past'", "Observe clothing", "Compare to 'Now'"];
            practiceQs = ["Old vs New", "Past transportation", "History hero"];
            assessQs = ["Then vs Now", "Historical figure", "Timeline placement", "Artifact ID", "Tradition check"];
         }
    }

    return { learnDesc, interactiveSteps, practiceQs, assessQs };
};

const GradeSummaryDetail: React.FC<GradeSummaryDetailProps> = ({ grade, onBack }) => {
  const [selectedSubject, setSelectedSubject] = useState('Math');
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);

  const currentCurriculum = useMemo(() => {
    if (selectedSubject === 'Math') return MATH_CURRICULUM[grade] || [];
    if (selectedSubject === 'Reading') return READING_CURRICULUM[grade] || [];
    if (selectedSubject === 'Science') return SCIENCE_CURRICULUM[grade] || [];
    if (selectedSubject === 'Social Studies') return SOCIAL_STUDIES_CURRICULUM[grade] || [];
    return [];
  }, [selectedSubject, grade]);

  const units = currentCurriculum;
  
  React.useEffect(() => {
    if (units.length > 0) {
        setSelectedUnitId(units[0].id);
    } else {
        setSelectedUnitId(null);
    }
  }, [selectedSubject, grade, units]);

  const currentUnit = units.find(u => u.id === selectedUnitId);
  const lessons = currentUnit ? currentUnit.lessons : [];

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 pb-20">
      <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors w-fit mb-8"
      >
          <ArrowLeft size={20} />
          Back to Grades
      </button>

      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-800 mb-2 flex items-center gap-3">
            <span className="bg-blue-600 text-white p-2 rounded-xl shadow-lg"><BookOpen size={32} /></span>
            {grade} Explorer
        </h1>
        <p className="text-slate-500 font-bold text-lg">Detailed Curriculum Roadmap & Content Preview</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-6 rounded-[2rem] shadow-sm border-b-8 border-stone-100 mb-8 sticky top-24 z-30 flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-[200px] space-y-2">
              <label className="flex items-center gap-1 text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                  <Filter size={12} /> Subject
              </label>
              <select 
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full p-3 bg-stone-50 border-2 border-stone-100 rounded-xl font-bold text-slate-700 outline-none focus:border-blue-400 transition-colors"
              >
                  {['Math', 'Reading', 'Science', 'Social Studies'].map(s => <option key={s} value={s}>{s}</option>)}
              </select>
          </div>

          <div className="flex-1 min-w-[200px] space-y-2">
              <label className="flex items-center gap-1 text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
                  Unit
              </label>
              <select 
                value={selectedUnitId || ''}
                onChange={(e) => setSelectedUnitId(Number(e.target.value))}
                className="w-full p-3 bg-stone-50 border-2 border-stone-100 rounded-xl font-bold text-slate-700 outline-none focus:border-blue-400 transition-colors"
              >
                  {units.map(u => <option key={u.id} value={u.id}>Unit {u.id}: {u.title}</option>)}
              </select>
          </div>
      </div>

      {/* List of Lessons */}
      <div className="space-y-12">
          {lessons.length > 0 ? (
              lessons.map(lesson => {
                  const summaryData = getLessonContentSummary(selectedSubject, grade, lesson.title);

                  return (
                      <div key={lesson.id} className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border-b-8 border-stone-100 relative overflow-hidden animate-in slide-in-from-bottom-8">
                          {/* Lesson Header Area */}
                          <div className="flex flex-col md:flex-row gap-8 mb-8 border-b-2 border-stone-100 pb-8">
                              <div className="flex-1">
                                  <div className="flex items-center gap-3 text-blue-600 font-black text-sm uppercase tracking-[0.2em] mb-2">
                                      <Target size={18} /> Lesson {lesson.id}
                                  </div>
                                  <h2 className="text-3xl font-black text-slate-800 mb-2 leading-tight">
                                      {lesson.title}
                                  </h2>
                                  <div className="flex items-center gap-4 text-slate-500 font-bold">
                                      <span className="flex items-center gap-1"><Brain size={16} /> Learning Focus</span>
                                      <span className="w-1.5 h-1.5 bg-stone-300 rounded-full"></span>
                                      <span>{lesson.duration}</span>
                                  </div>
                                  <p className="mt-4 text-slate-600 font-medium leading-relaxed max-w-2xl">
                                      Students will explore the foundations of {lesson.title.toLowerCase()}. Through interactive exercises and guided practice, they will master critical thinking skills and build confidence in {selectedSubject.toLowerCase()}.
                                  </p>
                              </div>
                              
                              {/* Teacher Actions */}
                              <div className="flex flex-col justify-center gap-4 min-w-[250px]">
                                  <div className="flex gap-2">
                                       <button className="flex-1 py-3 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl font-bold transition-colors text-sm flex items-center justify-center gap-2">
                                          <Download size={16} /> Pack
                                      </button>
                                      <button className="flex-1 py-3 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl font-bold transition-colors text-sm flex items-center justify-center gap-2">
                                          <Printer size={16} /> Print
                                      </button>
                                  </div>
                              </div>
                          </div>

                          {/* The 3 Boxes */}
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                              {/* Learn It */}
                              <div className="bg-blue-50/50 p-6 rounded-[2rem] border-2 border-blue-100 flex flex-col group hover:-translate-y-1 transition-transform h-full">
                                  <div className="flex items-center gap-3 mb-4">
                                      <div className="bg-blue-500 text-white p-2 rounded-xl shadow-sm group-hover:rotate-6 transition-transform">
                                          <MousePointer2 size={20} />
                                      </div>
                                      <div>
                                          <h3 className="text-xl font-black text-slate-800">Learn It</h3>
                                          <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest">Interactive</p>
                                      </div>
                                  </div>
                                  <div className="flex-1 flex flex-col gap-4">
                                      <p className="text-sm font-bold text-slate-600 leading-snug bg-white/60 p-3 rounded-xl border border-blue-100">{summaryData.learnDesc}</p>
                                      <div className="space-y-2 pt-2 border-t border-blue-200/50 mt-auto">
                                          {summaryData.interactiveSteps.map((step, i) => (
                                              <div key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-500">
                                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0"></div>
                                                  {step}
                                              </div>
                                          ))}
                                      </div>
                                  </div>
                              </div>

                              {/* Practice It */}
                              <div className="bg-emerald-50/50 p-6 rounded-[2rem] border-2 border-emerald-100 flex flex-col group hover:-translate-y-1 transition-transform h-full">
                                  <div className="flex items-center gap-3 mb-4">
                                      <div className="bg-emerald-500 text-white p-2 rounded-xl shadow-sm group-hover:rotate-6 transition-transform">
                                          <Pencil size={20} />
                                      </div>
                                      <div>
                                          <h3 className="text-xl font-black text-slate-800">Practice It</h3>
                                          <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">Exercises</p>
                                      </div>
                                  </div>
                                  <div className="flex-1 space-y-2">
                                      {summaryData.practiceQs.map((q, i) => (
                                          <div key={i} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-emerald-100/50 shadow-sm">
                                              <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                                              <span className="text-xs font-bold text-slate-600">{q}</span>
                                          </div>
                                      ))}
                                  </div>
                              </div>

                              {/* Assess It */}
                              <div className="bg-amber-50/50 p-6 rounded-[2rem] border-2 border-amber-100 flex flex-col group hover:-translate-y-1 transition-transform h-full">
                                  <div className="flex items-center gap-3 mb-4">
                                      <div className="bg-amber-500 text-white p-2 rounded-xl shadow-sm group-hover:rotate-6 transition-transform">
                                          <Trophy size={20} />
                                      </div>
                                      <div>
                                          <h3 className="text-xl font-black text-slate-800">Assess It</h3>
                                          <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest">Quiz</p>
                                      </div>
                                  </div>
                                  <div className="flex-1 space-y-2">
                                      {summaryData.assessQs.slice(0, 3).map((q, i) => (
                                          <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-500 pb-2 border-b border-amber-200/30 last:border-0">
                                              <span className="w-5 h-5 bg-amber-200 text-amber-800 flex items-center justify-center rounded text-[10px] shrink-0 font-black">{i+1}</span>
                                              <span className="truncate">{q}</span>
                                          </div>
                                      ))}
                                      {summaryData.assessQs.length > 3 && (
                                          <div className="text-center text-[10px] font-bold text-amber-400 uppercase mt-2 pt-1">
                                              + {summaryData.assessQs.length - 3} more questions
                                          </div>
                                      )}
                                  </div>
                              </div>
                          </div>
                      </div>
                  )
              })
          ) : (
              <div className="text-center py-20 bg-white rounded-[2.5rem] shadow-sm border-b-8 border-stone-100">
                  <p className="text-slate-400 font-bold text-xl italic">No lessons found for this unit.</p>
              </div>
          )}
      </div>
    </div>
  );
};

export default GradeSummaryDetail;