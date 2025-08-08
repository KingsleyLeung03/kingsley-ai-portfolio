'use server';

/**
 * @fileOverview Implements a chatbot flow for answering questions about Kingsley's CV and other text files.
 *
 * - `cvQA`: An async function that takes a question as input and returns an answer from the chatbot.
 * - `CvQAInput`: The input type for the `cvQA` function, which is a string representing the question.
 * - `CvQAOutput`: The output type for the `cvQA` function, which is a string representing the answer.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CvQAInputSchema = z.string().describe('The question to ask the chatbot about Kingsley.');
export type CvQAInput = z.infer<typeof CvQAInputSchema>;

const CvQAOutputSchema = z.string().describe('The answer from the chatbot.');
export type CvQAOutput = z.infer<typeof CvQAOutputSchema>;

export async function cvQA(input: CvQAInput): Promise<CvQAOutput> {
  return cvQAFlow(input);
}

const cvQAPrompt = ai.definePrompt({
  name: 'cvQAPrompt',
  input: {schema: CvQAInputSchema},
  output: {schema: CvQAOutputSchema},
  prompt: `You are a chatbot answering questions about Kingsley based on his CV and other text files. Use reasoning to incorporate details from the files to answer the question. Be concise.

Question: {{{$input}}}`,
});

const cvQAFlow = ai.defineFlow(
  {
    name: 'cvQAFlow',
    inputSchema: CvQAInputSchema,
    outputSchema: CvQAOutputSchema,
  },
  async input => {
    const {output} = await cvQAPrompt(input);
    return output || "I'm sorry, I don't have an answer for that.";
  }
);
