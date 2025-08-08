import { Chatbot } from '@/components/chatbot';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            Meet Your AI-Powered Portfolio Assistant
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            I've built an interactive AI chatbot to help you learn more about my skills, experience, and projects. Ask it anything, or explore my site to see my work.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href="/about">
                Learn More About Me <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">
                Read My Blog
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Chatbot />
        </div>
      </div>
    </div>
  );
}
