import { Github, Linkedin, Mail } from "lucide-react";
// import Link from "next/link";
import { Button } from "./ui/button";

const socialLinks = [
    {
      href: "https://linkedin.com/in/kingsley",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/kingsley",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "mailto:kingsley@example.com",
      icon: Mail,
      label: "Email",
    },
  ];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-6 md:px-8 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground text-center md:text-left">
           © {currentYear} Kingsley&apos;s AI Portfolio. All rights reserved.
        </p>
        
        <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
                <Button key={link.label} variant="ghost" size="icon" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                       <link.icon className="h-5 w-5" />
                    </a>
                </Button>
            ))}
        </div>
      </div>
    </footer>
  );
}
