
import { GoogleGenAI } from "@google/genai";

export const getLaptopRecommendation = async (userInput: string) => {
  // Always use the API key from process.env.API_KEY directly as per guidelines.
  // The named parameter apiKey must be used with the value from process.env.API_KEY.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  // Use ai.models.generateContent with the model name and contents.
  // The model 'gemini-3-flash-preview' is appropriate for basic text Q&A tasks.
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `User asks: ${userInput}. Please recommend a laptop type (Student, Creator, Hacker, or Gamer) and explain why in English. Be concise and professional.`,
    config: {
      systemInstruction: "You are a laptop expert. You help users choose the most suitable laptop for their needs. Respond in English only.",
      temperature: 0.7,
    },
  });

  // Directly access the .text property from GenerateContentResponse as per guidelines.
  return response.text;
};
