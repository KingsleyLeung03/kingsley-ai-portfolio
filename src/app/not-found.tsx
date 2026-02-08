import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-full flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md">
        <h1 className="font-headline text-8xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
