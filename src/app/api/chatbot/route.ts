import { NextRequest } from "next/server";
import { headers } from "next/headers";
import { cvQA } from "@/ai/flows/cv-qa-chatbot";

export async function POST(req: NextRequest) {
  const { question } = await req.json();
  const host = (await headers()).get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const domain = `${protocol}://${host}/public`;

  const answer = await cvQA(question, domain);
  return new Response(JSON.stringify({ answer }), { status: 200 });
}
