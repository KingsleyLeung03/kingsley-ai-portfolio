"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Bot, Loader2, Send, User } from "lucide-react";
import { FormEvent, useRef, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function Chatbot() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "Hello! I'm an AI assistant. Feel free to ask me anything about Kingsley's profile.",
        },
      ]);
    }
  }, [messages.length]);

  useEffect(() => {
    const viewport = scrollAreaRef.current?.querySelector(
      "div[data-radix-scroll-area-viewport]",
    );
    if (viewport) {
      viewport.scrollTo({
        top: viewport.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.answer,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get a response. Please try again.",
      });
      setMessages((prev) => prev.slice(0, prev.length - 1));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md h-[60vh] overflow-hidden rounded-lg border bg-card shadow-xl">
      <div className="flex h-full flex-col">
        <header className="flex items-center justify-between p-4 border-b">
          <h3 className="font-headline text-lg">AI Assistant</h3>
        </header>
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-3",
                  message.role === "user" ? "justify-end" : "",
                )}
              >
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8 border">
                    <AvatarFallback>
                      <Bot size={20} />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "max-w-[75%] rounded-lg px-3 py-2 text-sm",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted",
                  )}
                >
                  <div className="prose prose-sm text-foreground max-w-none [&_a]:text-primary [&_a]:hover:underline [&_p]:m-0">
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>
                </div>
                {message.role === "user" && (
                  <Avatar className="h-8 w-8 border">
                    <AvatarFallback>
                      <User size={20} />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 border">
                  <AvatarFallback>
                    <Bot size={20} />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg px-3 py-2 text-sm flex items-center">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="border-t p-4 bg-card">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Kingsley..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
