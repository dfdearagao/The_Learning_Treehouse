import { GoogleGenAI, Type } from "@google/genai";
import { Grid } from "../../types/types_WS";

const apiKey = process.env.API_KEY || ''; // Will be injected or handled via UI in real app, but complying to rules, we use process.env

// Helper to initialize AI
const getAI = () => new GoogleGenAI({ apiKey });

export const getThemeConfig = async (themeName: string) => {
  try {
    const ai = getAI();
    const prompt = `
      Generate a letter frequency distribution for a puzzle game with the theme "${themeName}".
      Return a JSON object where keys are uppercase letters A-Z and values are integer weights (1-20).
      Higher weight means the letter appears more often to form words related to ${themeName}.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
             // We can't list all A-Z here easily in the schema builder without verbose code,
             // so we'll trust the model to return a map or use a simpler array schema.
             // Let's use an array of objects to be safe and robust.
             weights: {
                 type: Type.ARRAY,
                 items: {
                     type: Type.OBJECT,
                     properties: {
                         letter: { type: Type.STRING },
                         weight: { type: Type.INTEGER }
                     }
                 }
             }
          }
        }
      }
    });

    const data = JSON.parse(response.text || '{}');
    const weightMap: Record<string, number> = {};
    if (data.weights) {
        data.weights.forEach((item: any) => {
            if (item.letter && item.weight) {
                weightMap[item.letter.toUpperCase()] = item.weight;
            }
        });
    }
    return weightMap;
  } catch (error) {
    console.error("Gemini Theme Error:", error);
    return null; // Fallback to standard
  }
};

export const getAIHint = async (grid: Grid, nextLetters: string[]) => {
  try {
    const ai = getAI();
    // Convert grid to text representation
    let gridText = "Grid (Top to Bottom):\n";
    grid.forEach((row, idx) => {
        gridText += `${idx}: ` + row.map(c => c ? c.letter : '.').join(' ') + '\n';
    });

    const prompt = `
      You are a Tetris-Word game expert.
      Here is the current board state ('.' is empty, letters are filled).
      
      ${gridText}

      The next falling piece has these letters: [${nextLetters.join(', ')}].
      
      Analyze the board. Find the best column (0-9) to place this piece to potentially form a word horizontally or vertically.
      Give a short 1-sentence strategy hint.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
          maxOutputTokens: 60,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Hint Error:", error);
    return "Try stacking letters to form common prefixes or suffixes!";
  }
};

export const checkWordWithAI = async (word: string): Promise<boolean> => {
    try {
        const ai = getAI();
        const prompt = `Is "${word}" a valid English word? Answer boolean JSON only.`;
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        isValid: { type: Type.BOOLEAN }
                    }
                }
            }
        });
        const json = JSON.parse(response.text || '{}');
        return !!json.isValid;
    } catch (e) {
        return false;
    }
}
