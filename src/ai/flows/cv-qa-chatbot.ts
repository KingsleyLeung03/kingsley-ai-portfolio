'use server';

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export type CvQAInput = string;
export type CvQAOutput = string;

export async function cvQA(input: CvQAInput): Promise<CvQAOutput> {
  if (!process.env.GEMINI_API_KEY) {
    return "The GEMINI_API_KEY environment variable is not set. Please add it to your .env file.";
  }

  try {
    const response = await openai.chat.completions.create({
        model: "gemini-1.5-flash-latest",
        messages: [
            { 
              role: "system", 
              content: "You are a chatbot answering questions about Kingsley based on his CV and other text files. Use reasoning to incorporate details from the files to answer the question. Be concise." 
            },
            {
                role: "user",
                content: input,
            },
        ],
    });

    return response.choices[0].message.content ?? "I'm sorry, I don't have an answer for that.";
  } catch (error) {
    console.error("Error calling AI model:", error);
    return "I'm sorry, something went wrong while getting an answer. Please check the server logs.";
  }
}
