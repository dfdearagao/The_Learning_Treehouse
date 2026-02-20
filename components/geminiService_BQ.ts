import { GoogleGenAI, Type } from "@google/genai";
import { Question, Subject, Boss } from '../types_BQ';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const MODEL_NAME = 'gemini-3-flash-preview';

export const generateLevelQuestions = async (subject: Subject, difficultyLevel: number): Promise<Question[]> => {
  if (!process.env.API_KEY) {
    // Fallback mock data if no key is present (for dev/testing without key)
    return getMockQuestions(subject);
  }

  const prompt = `
    Generate 5 educational questions for a child aged 7-9 about ${subject}.
    Difficulty level: ${difficultyLevel} (1=easy, 5=hard).
    Format: JSON array.
    Ensure questions are engaging, safe, and positive.
    For MATH, use numbers.
    For READING, short sentences or fill-in-the-blank.
    For SCIENCE, basic facts about nature, space, animals.
    For LOGIC, patterns or simple riddles.
    Ensure answers are short (1-2 words) so they fit on game targets.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              text: { type: Type.STRING },
              type: { type: Type.STRING, enum: ['multiple-choice'] },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              correctAnswer: { type: Type.STRING },
              hint: { type: Type.STRING },
              explanation: { type: Type.STRING }
            },
            required: ['id', 'text', 'type', 'options', 'correctAnswer', 'hint', 'explanation']
          }
        }
      }
    });

    const json = JSON.parse(response.text || '[]');
    return json;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return getMockQuestions(subject);
  }
};

export const generateBossDialogue = async (boss: Boss, playerAction: 'intro' | 'defeat' | 'damage'): Promise<string> => {
  if (!process.env.API_KEY) return "Grr! Let's learn!";

  const prompt = `
    You are a friendly educational game boss named ${boss.name} (${boss.subject}).
    The player is a child.
    Situation: ${playerAction}.
    Write a short, funny, non-violent line of dialogue (max 15 words).
    If 'damage', acknowledge the player got the answer right.
    If 'intro', challenge them playfully.
    If 'defeat', congratulate them on learning.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });
    return response.text || "...";
  } catch (e) {
    return "Ready for a challenge?";
  }
};

// Fallback data
const getMockQuestions = (subject: Subject): Question[] => {
  switch (subject) {
    case 'MATH':
      return [
        { id: 'm1', text: '5 + 3 = ?', type: 'multiple-choice', options: ['7', '8', '9', '10'], correctAnswer: '8', hint: 'Count on your fingers!', explanation: '5 plus 3 makes 8.' },
        { id: 'm2', text: 'Biggest number?', type: 'multiple-choice', options: ['12', '21', '9', '19'], correctAnswer: '21', hint: 'Look at the tens place.', explanation: '21 has 2 tens, which is the most.' },
        { id: 'm3', text: '10 - 4 = ?', type: 'multiple-choice', options: ['5', '6', '4', '7'], correctAnswer: '6', hint: 'Take 4 away from 10.', explanation: 'If you have 10 and take away 4, you have 6 left.' },
        { id: 'm4', text: '2 + 2 = ?', type: 'multiple-choice', options: ['3', '4', '5', '22'], correctAnswer: '4', hint: 'Two pairs.', explanation: '2 plus 2 is 4.' },
        { id: 'm5', text: '6 + 0 = ?', type: 'multiple-choice', options: ['0', '60', '6', '1'], correctAnswer: '6', hint: 'Adding zero changes nothing.', explanation: '6 plus nothing is still 6.' }
      ];
    case 'READING':
      return [
        { id: 'r1', text: 'Rhymes with "Cat"?', type: 'multiple-choice', options: ['Dog', 'Hat', 'Fish', 'Ball'], correctAnswer: 'Hat', hint: 'It sounds like "at".', explanation: 'Cat and Hat sound the same at the end.' },
        { id: 'r2', text: 'Opposite of "Hot"?', type: 'multiple-choice', options: ['Cold', 'Warm', 'Sun', 'Fire'], correctAnswer: 'Cold', hint: 'Like ice cream.', explanation: 'Cold is the opposite of hot.' },
        { id: 'r3', text: 'Spell: D_G', type: 'multiple-choice', options: ['O', 'A', 'I', 'E'], correctAnswer: 'O', hint: 'It barks.', explanation: 'D-O-G spells Dog.' },
        { id: 'r4', text: 'First letter of Apple?', type: 'multiple-choice', options: ['B', 'A', 'C', 'D'], correctAnswer: 'A', hint: 'Ah-ah-apple.', explanation: 'Apple starts with A.' },
        { id: 'r5', text: 'Rhymes with "Blue"?', type: 'multiple-choice', options: ['Red', 'Shoe', 'Green', 'Car'], correctAnswer: 'Shoe', hint: 'You wear it on your foot.', explanation: 'Blue and Shoe rhyme.' }
      ];
    case 'SCIENCE':
      return [
        { id: 's1', text: 'Plants need...?', type: 'multiple-choice', options: ['Candy', 'Sun', 'Toys', 'Sleep'], correctAnswer: 'Sun', hint: 'It comes from the sky.', explanation: 'Plants need sunlight and water.' },
        { id: 's2', text: 'Lives in water?', type: 'multiple-choice', options: ['Cat', 'Fish', 'Bird', 'Lion'], correctAnswer: 'Fish', hint: 'It swims.', explanation: 'Fish live underwater.' },
        { id: 's3', text: 'Our planet?', type: 'multiple-choice', options: ['Mars', 'Earth', 'Moon', 'Sun'], correctAnswer: 'Earth', hint: 'The blue and green one.', explanation: 'We live on Earth.' },
        { id: 's4', text: 'Which is hot?', type: 'multiple-choice', options: ['Ice', 'Fire', 'Snow', 'Rain'], correctAnswer: 'Fire', hint: 'Don\'t touch it!', explanation: 'Fire is very hot.' },
        { id: 's5', text: 'Cows make...?', type: 'multiple-choice', options: ['Juice', 'Milk', 'Soda', 'Water'], correctAnswer: 'Milk', hint: 'White drink.', explanation: 'Cows give us milk.' }
      ];
    case 'LOGIC':
      return [
        { id: 'l1', text: 'Red, Blue, Red, ...', type: 'multiple-choice', options: ['Green', 'Blue', 'Yellow', 'Circle'], correctAnswer: 'Blue', hint: 'It repeats.', explanation: 'The pattern alternates between Red and Blue.' },
        { id: 'l2', text: 'Not a fruit?', type: 'multiple-choice', options: ['Apple', 'Banana', 'Car', 'Orange'], correctAnswer: 'Car', hint: 'Which one can you NOT eat?', explanation: 'A car is not a fruit.' },
        { id: 'l3', text: 'After Monday is...', type: 'multiple-choice', options: ['Sunday', 'Tuesday', 'Wednesday', 'Friday'], correctAnswer: 'Tuesday', hint: 'The day after Monday.', explanation: 'Tuesday comes after Monday.' },
        { id: 'l4', text: '1, 2, 3, ...', type: 'multiple-choice', options: ['4', '5', 'A', '10'], correctAnswer: '4', hint: 'Counting up.', explanation: '4 comes after 3.' },
        { id: 'l5', text: 'Which is round?', type: 'multiple-choice', options: ['Box', 'Ball', 'Book', 'Table'], correctAnswer: 'Ball', hint: 'No corners.', explanation: 'A ball is a sphere (round).' }
      ];
    default:
      return [];
  }
};