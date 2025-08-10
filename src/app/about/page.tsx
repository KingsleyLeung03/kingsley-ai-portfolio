import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, GraduationCap, Award, Heart, Mail, Phone, Linkedin, Github, MapPin, User, BookOpen, ExternalLink, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import avatarImg from "./avatar.jpg";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Kingsley's AI Portfolio",
  description: "Learn more about Kingsley, the AI & Full-Stack Developer.",
};

const portfolioData = {
  profile: {
    name: "Zihong Liang",
    title: "Software Developer | C#, Python & TypeScript",
    avatar: avatarImg.src,
    summary:
      "A high-achieving Computer Science graduate (GPA 7.1/9) who successfully led a six-member team to develop an AI-powered web platform for wildlife conservation. Combines hands-on internship experience in core system development at Endace with a proven ability to build complete, AI-driven applications using technologies like Next.js, Copilot and Gemini. Ready to leverage a strong foundation in Python, C#, and modern JavaScript frameworks to contribute to impactful, real-world software solutions.",
    resumeUrl: "/resume/Zihong_Liang_CV.pdf",
    transcriptUrl: "/transcript/Zihong_Liang_Auckland_Transcript.pdf",
  },
  contact: {
    email: "kingsleyleung2003@outlook.com",
    phone: "+64 22 324 8990",
    location: "Auckland, New Zealand",
    linkedin: "https://linkedin.com/in/zihong-l-258824257",
    github: "https://github.com/KingsleyLeung03",
  },
  skills: [
    // Frontend
    "TypeScript", "React", "Angular", "Next.js", "HTML", "CSS", "Tailwind", "Bootstrap",
    // Backend
    "Python", "C#", "Java", "ASP.NET", "FastAPI", "Express.js", "Node.js", "Bun",
    // Databases & ORMs
    "SQL", "LINQ", "Entity Framework (EF Core)", "SQLite", "PostgreSQL", "MongoDB",
    // Testing
    "Pytest",
    // DevOps & Tools
    "Git", "Docker", "Kubernetes", "Linux", "GitHub Actions", "Vercel", "Jira", "Confluence", "Visual Studio"
  ],
  workExperience: [
    {
      role: "Engineering Intern",
      company: "Endace Technology",
      period: "Nov 2024 – Feb 2025",
      description:
        [
          "Architected and developed a modular profile system using Python, FastAPI, and Jinja2 to solve challenges with scalability and maintainability in core network probe products.",
          "Engineered a dynamic, user-friendly UI with JavaScript and Bootstrap, earning commendations from senior engineers for its intuitive design and positive user experience.",
          "Enhanced system efficiency and maintainability, streamlining the configuration process for end-users and significantly reducing the potential for setup errors.",
          "Operated within an Agile framework using Jira, Confluence and Bitbucket, which maximised team productivity and ensured project milestones were met consistently."
        ].join("\n"),
        tags: ["Python", "FastAPI", "Jinja2", "JavaScript", "Bootstrap", "Agile", "Jira", "Confluence"]
    },
    {
      role: "Professional Notetaker",
      company: "The University of Auckland",
      period: "Aug 2024 – Dec 2024",
      description:
        [
          "Translated complex academic lectures into clear, accessible, and structured notes for students registered with Student Disability Services, directly supporting academic inclusivity.",
          "Demonstrated high attention to detail and adaptability by delivering quality notes across diverse and technical subjects, consistently meeting strict deadlines."
        ].join("\n"),
        tags: ["Academic Support", "Communication", "Attention to Detail"]
    },
    {
      role: "Information Technology Operator",
      company: "Triumen Group Zhuhai Branch",
      period: "Aug 2020 – Nov 2020",
      description:
        [
          "Provided critical front-line IT support for all hardware, software, and network issues, minimising downtime and ensuring smooth daily operations for the entire office.",
          "Increased operational efficiency by rapidly diagnosing and resolving technical problems with printers, routers, and desktop applications."
        ].join("\n"),
        tags: ["IT Support", "Hardware Troubleshooting", "Network Support", "Problem Solving"]
    },
  ],
  projects: [
    {
      name: "CARE Web Platform: AI-Driven Wildlife Conservation",
      description:
        [
          "Led a 6-member team in developing a React/Express.js web platform for AI image-based pest detection.",
          "Backend built with JavaScript and Sequelize, integrated machine learning with support from a PhD group.",
          "Improved tracking of species like stoats, contributing to NZ biodiversity protection."
        ].join("\n"),
      tags: ["React", "Express.js", "JavaScript", "Sequelize", "Machine Learning"],
      link: "https://www.capitalise.space/projects/6736f7089df43e2d89de9401",
    },
    {
      name: "PhotoRecipe: AI-Powered Recipe Generator",
      description:
        [
          "Engineered a full-stack Next.js application leveraging Firebase Genkit to orchestrate Google Gemini AI models for a complete 'photo-to-recipe' pipeline.",
          "Implemented core features including AI-driven ingredient identification from photos, dynamic recipe generation with detailed instructions and nutritional information, and unique AI-generated dish images.",
          "Developed a responsive UI using TypeScript, Tailwind CSS, and ShadCN, managing state with React Hooks and optimising performance with client-side image compression."
        ].join("\n"),
      tags: ["Next.js", "Firebase Genkit", "Google Gemini", "TypeScript", "Tailwind CSS", "ShadCN"],
      link: "https://photo-recipe-rho.vercel.app",
    },
    {
      name: "vCard Contact Generator",
      description:
        [
          "React, Next.js, Tailwind CSS app deployed on Vercel.",
          "Automated CI with GitHub Actions."
        ].join("\n"),
      tags: ["React", "Next.js", "Tailwind CSS", "Vercel", "GitHub Actions"],
      link: "https://vcardcontactgenerator.vercel.app",
    },
    {
      name: "Concert Booking Service",
      description:
        [
          "C# and ASP.NET MVC web app supporting event browsing and ticket management via RESTful APIs.",
          "Implemented with Entity Framework, SQLite."
        ].join("\n"),
      tags: ["C#", "ASP.NET", "Entity Framework", "SQLite", "LINQ"],
      link: "https://github.com/KingsleyLeung03/concert-booking-service-csharp",
    },
    {
      name: "Game Library Web App",
      description:
        [
          "Flask-based app using Python, SQLAlchemy, Jinja2, and Repository Pattern.",
          "Implemented unit and end-to-end (E2E) testing with Pytest.",
          "Applied clean architecture principles and modular separation via Flask Blueprints."
        ].join("\n"),
      tags: ["Python", "Flask", "SQLAlchemy", "Jinja2", "Pytest"],
      link: "https://github.com/KingsleyLeung03/cs235-2023-gameswebapp-assignment-zlia403_glo501_skat149",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science, Computer Science",
      institution: "The University of Auckland",
      period: "Jan 2022 – May 2025",
      description: [
          "Major in Computer Science, GPA: 7.1/9 with two Certificates of Outstanding Achievement from the faculty.",
          "Coursework and Projects: Full-Stack Development, RESTful APIs (Java, C#, Python), SQL, AI/ML, Cybersecurity, Computer Architecture, Data Communications and Security, Operating Systems.",
          "Class Representative for three courses, recognised for leadership with multiple certificates from the student association."
        ].join("\n"),
      tags: ["Computer Science", "Software Engineering", "Full-Stack", "AI/ML", "Cybersecurity", "Operating Systems", "Networking", "Data Communication and Security", "Agile Development", "Database", "Object-Oriented Programming"]
    },
    {
      degree: "Certificate in Foundation Studies",
      institution: "The University of Auckland International College",
      period: "Jan 2021 – Dec 2021",
      description: [
          "Studied Accounting, Mathematics with Calculus, Physics, and Statistics.",
          "Gained experience in Microsoft Office from different coursework."
        ].join("\n"),
      tags: ["Foundation Studies", "Accounting", "Calculus", "Physics", "Statistics"]
    },
  ],
  awards: [
    {
      name: "Cloudflare TechLabs Certificate",
      issuer: "Cloudflare",
      description: "Gained insight into real-world incident response, threat modelling, and breach mitigation strategies from the 'Diary of a Cyber Breach Investigator' workshop.",
      tags: ["Cybersecurity", "Incident Response", "Threat Modeling"]
    },
    {
      name: "Certificate of Outstanding Achievement (x2)",
      issuer: "School of Computer Science, University of Auckland",
      description: "Awarded twice for exceptional academic performance in Computer Science courses, placing among the top students in the cohort.",
      tags: ["Academics", "High-Achievement", "Computer Science"]
    },
    {
      name: "Class Representative Certificate (x3)",
      issuer: "Auckland University Students’ Association",
      description: "Recognised three times for leadership and effective communication as a liaison between students, faculty, and lecturers.",
      tags: ["Leadership", "Communication", "Student Advocacy"]
    },
  ],
  volunteering: [
    {
      role: "Class Representative (x3)",
      organization: "The University of Auckland",
      period: "2022 – 2024",
      description:
        [
          "Elected as class representative three times (COMPSCI 335, COMPSCI 351, COMPSCI 313).",
          "Served as a liaison between students, lecturers, tutors, and faculty to communicate feedback and advocate for student needs.",
          "Recognised with three Certificates of Appreciation from the Auckland University Students’ Association for effective representation and contribution."
        ].join("\n"),
    }
  ],
  interests: [
    "Chatting about emerging technologies",
    "Attending workshops and tech meetups",
    "Developing personal projects",
    "Enjoying Lo-Fi music",
    "Solving IT issues for family and friends",
    "Gaming",
    "Traveling",
    "Sharing my Cantonese cultures"
  ],
};

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <section className={cn("py-12 md:py-16", className)}>{children}</section>
);

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode, icon: React.ElementType }) => (
  <div className="flex items-center gap-3 mb-8">
    <Icon className="w-8 h-8 text-primary" />
    <h2 className="text-3xl font-headline text-primary">{children}</h2>
  </div>
);

export default function AboutPage() {
  const { profile, contact, skills, workExperience, projects, education, awards, volunteering, interests } = portfolioData;

  return (
    <div className="container max-w-5xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-16 text-center md:text-left">
        <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary shadow-lg">
          <AvatarImage src={profile.avatar} alt={profile.name} data-ai-hint="man portrait" className="object-cover" />
          <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-headline text-5xl md:text-6xl font-bold">{profile.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">Preferred name: Kingsley Leung (He/Him)</p>
          <p className="mt-2 text-xl md:text-2xl text-primary font-semibold">{profile.title}</p>
          <p className="mt-4 text-lg text-muted-foreground">{profile.summary}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg">
              <a href={profile.resumeUrl} download="Kingsley_Leung_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
               <a href={profile.transcriptUrl} download="Kingsley_Leung_Academic_Transcript.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Transcript
              </a>
            </Button>
          </div>
        </div>
      </header>

      <Separator />

      {/* Contact Section */}
      <Section>
         <SectionTitle icon={Mail}>Contact Me</SectionTitle>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-muted-foreground" /><a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a></div>
            <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-muted-foreground" /><span>{contact.phone}</span></div>
            <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-muted-foreground" /><span>{contact.location}</span></div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild><a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a></Button>
              <Button variant="ghost" size="sm" asChild><a href={contact.github} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a></Button>
            </div>
         </div>
      </Section>
      
      <Separator />

      {/* Skills Section */}
      <Section>
        <SectionTitle icon={User}>Skills</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => <Badge key={skill} variant="secondary" className="text-md px-4 py-2">{skill}</Badge>)}
        </div>
      </Section>

      <Separator />

      {/* Work Experience */}
      <Section>
        <SectionTitle icon={Briefcase}>Work Experience</SectionTitle>
        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-0 before:h-full before:w-0.5 before:bg-border before:opacity-50">
          {workExperience.map((job, index) => (
             <Card key={index} className="pl-8 relative before:absolute before:left-[-2px] before:top-9 before:h-0.5 before:w-4 before:bg-primary">
               <CardHeader>
                 <div className="flex items-center gap-4">
                   <div>
                     <CardTitle className="font-headline text-2xl">{job.role}</CardTitle>
                     <p className="text-muted-foreground">{job.company} | {job.period}</p>
                   </div>
                 </div>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 whitespace-pre-line text-muted-foreground">
                        {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {job.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                    </div>
                </CardContent>
             </Card>
          ))}
        </div>
      </Section>

      <Separator />

       {/* Projects Experience */}
      <Section>
        <SectionTitle icon={BookOpen}>Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4 whitespace-pre-line text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                </div>
              </CardContent>
              <CardFooter className="justify-end pt-4">
                <Button asChild variant="outline" size="sm">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      <Separator />

        {/* Education */}
        <Section>
            <SectionTitle icon={GraduationCap}>Education</SectionTitle>
            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-0 before:h-full before:w-0.5 before:bg-border before:opacity-50">
                {education.map((edu, index) => (
                    <Card key={index} className="pl-8 relative before:absolute before:left-[-2px] before:top-9 before:h-0.5 before:w-4 before:bg-primary">
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
                            <p className="text-muted-foreground">{edu.institution} | {edu.period}</p>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 whitespace-pre-line text-muted-foreground">{edu.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {edu.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
        
        <Separator />

        {/* Awards */}
        <Section>
          <SectionTitle icon={Award}>Awards & Certifications</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card key={index}>
                 <CardHeader>
                  <CardTitle className="font-headline text-xl">{award.name}</CardTitle>
                  <p className="text-muted-foreground">{award.issuer}</p>
                </CardHeader>
                 <CardContent>
                  <p className="mb-4 text-muted-foreground">{award.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {award.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

      <Separator />

      <div className="grid md:grid-cols-2 gap-x-12">
        {/* Volunteering */}
        <Section>
          <SectionTitle icon={Heart}>Volunteering</SectionTitle>
           {volunteering.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold">{item.role} at {item.organization}</h3>
                <p className="text-sm text-muted-foreground">{item.period}</p>
                <p className="mt-2 whitespace-pre-line text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
        </Section>

        {/* Interests */}
        <Section>
          <SectionTitle icon={Heart}>Interests</SectionTitle>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            {interests.map((interest, index) => <li key={index}>{interest}</li>)}
          </ul>
        </Section>
      </div>
    </div>
  );
}
