"use server";

import OpenAI from "openai";
import { readdirSync, readFileSync } from "fs";
import path from "path";

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

export async function cvQA(input: CvQAInput): Promise<CvQAOutput> {
  if (!process.env.GEMINI_API_KEY) {
    return "The GEMINI_API_KEY environment variable is not set. Please add it to your .env file.";
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "system",
          content: `You are a helpful chatbot providing information about Kingsley (Zihong). Your responses should be based *solely* on the provided context from his CV and other text files, but avoid mentioning that the information is from that context. 
Use careful reasoning to synthesise information and provide detailed yet concise answers. Format your responses using markdown, employing bullet points to avoid too much information in a single line. Bold some words and sentences if needed. Maintain a professional tone and use British English.
If the user is asking about skills not explicitly mentioned in the context, respond enthusiastically, highlighting Kingsley's exceptional learning ability. Back this up by referencing his adaptability, communication skills, and empathetic leadership style mentioned in the context.

If the user asks for Kingsley's resume (CV), answer yes, and attach this link in markdown: [Download CV](/resume/Zihong_Liang_CV.pdf)
If the user asks for Kingsley's academic transcript, answer yes, and attach this link in markdown: [Download Transcript](/transcript/Zihong_Liang_Auckland_Transcript.pdf)

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
