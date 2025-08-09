"use server";

import OpenAI from "openai";
import { readdirSync, readFileSync } from "fs";
import path from "path";
import { headers } from 'next/headers';

const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

// Load all markdown files in the contexts folder once at server start
const contextsDir = path.join(process.cwd(), "src/ai/flows/contexts");
let allMarkdown = "";
try {
  const files = readdirSync(contextsDir).filter((f) => f.endsWith(".md"));
  allMarkdown = files
    .map((f) => {
      const filePath = path.join(contextsDir, f);
      return `---\nFile: ${f}\n` + readFileSync(filePath, "utf-8");
    })
    .join("\n\n");
} catch (e) {
  console.error("Failed to load context markdown files:", e);
  allMarkdown = "[Context files unavailable]";
}

export type CvQAInput = string;
export type CvQAOutput = string;

export async function cvQA(input: CvQAInput, domain: string): Promise<CvQAOutput> {
  if (!process.env.GEMINI_API_KEY) {
    return "The GEMINI_API_KEY environment variable is not set. Please add it to your .env file.";
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "system",
          content: `You are a chatbot answering questions about Kingsley (Zihong) based on his CV and other text files. Use reasoning to incorporate details from the files to answer the question. Be concise, and answer with plain text instead of markdown.

If the user asks for Kingsley's resume (CV), provide this direct link: ${domain}/resume/Zihong_Liang_CV.pdf
If the user asks for Kingsley's academic transcript, provide this direct link: ${domain}/transcript/Zihong_Liang_Auckland_Transcript.pdf

Here are the context files in markdown format:
${allMarkdown}`,
        },
        {
          role: "user",
          content: input,
        },
      ],
    });

    return (
      response.choices[0].message.content ??
      "I'm sorry, I don't have an answer for that."
    );
  } catch (error) {
    console.error("Error calling AI model:", error);
    return "I'm sorry, something went wrong while getting an answer. Please check the server logs.";
  }
}
