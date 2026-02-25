
import { GoogleGenAI, Type } from "@google/genai";
import { BubbleColor, StrategicHint, DebugInfo } from "../../types/types_SP";

export interface TargetCandidate {
  id: string;
  color: BubbleColor;
  size: number;
  row: number;
  col: number;
  pointsPerBubble: number;
  description: string;
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
// Use a fast model for real-time game hints
const MODEL_NAME = 'gemini-2.5-flash-latest';

export const getStrategicHint = async (
  screenshotBase64: string,
  candidates: TargetCandidate[],
  dangerLevel: number,
  currentColor: BubbleColor
): Promise<{ hint: StrategicHint; debug: DebugInfo }> => {
  const startTime = performance.now();

  // Filter candidates to only those matching current color to simplify prompt
  // But AI might suggest a bank shot or future setup, so passing all is okay too.
  // For speed, let's pass relevant ones.
  const matchingCandidates = candidates.filter(c => c.color === currentColor);

  const prompt = `
    You are an expert player of a bubble shooter game.
    Current Ball Color: ${currentColor}.
    Danger Level (Rows from bottom): ${dangerLevel} (High is dangerous).
    
    Here are the reachable clusters for the CURRENT color (${currentColor}):
    ${JSON.stringify(matchingCandidates, null, 2)}

    Analyze the game board screenshot and the available targets.
    Choose the best target to maximize score or reduce danger.
    If no direct shot is available for the current color, suggest a safe discard location.
    
    Return JSON with:
    - targetRow (number)
    - targetCol (number)
    - message (short strategy tip, max 10 words)
    - rationale (brief explanation)
  `;

  try {
    const imagePart = {
      inlineData: {
        mimeType: "image/jpeg",
        data: screenshotBase64.split(',')[1] 
      }
    };

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: [
        { role: 'user', parts: [{ text: prompt }, imagePart] }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            targetRow: { type: Type.NUMBER },
            targetCol: { type: Type.NUMBER },
            message: { type: Type.STRING },
            rationale: { type: Type.STRING },
            recommendedColor: { type: Type.STRING }
          }
        }
      }
    });

    const json = JSON.parse(response.text || '{}');
    
    return {
        hint: {
            message: json.message || "Aim carefully!",
            rationale: json.rationale,
            targetRow: json.targetRow,
            targetCol: json.targetCol,
            recommendedColor: currentColor // For now, we assume we can't swap color
        },
        debug: {
            latency: performance.now() - startTime,
            timestamp: new Date().toISOString(),
            promptContext: "Analysis of bubble clusters",
            rawResponse: response.text || ""
        }
    };

  } catch (error) {
      console.error("Gemini Vision Error", error);
      return {
          hint: { message: "System Offline", targetRow: 0, targetCol: 0 },
          debug: { latency: 0, timestamp: "", promptContext: "", rawResponse: "", error: String(error) }
      };
  }
};
