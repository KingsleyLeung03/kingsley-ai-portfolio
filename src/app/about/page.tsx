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
    title: "Software Developer | C#, Python & TypeScript | Passionate about AI-Driven Problem-Solving and DevOps",
    avatar: avatarImg.src,
    summary:
      "A high-achieving Computer Science graduate (GPA 7.1/9) who led a six-member team to develop an AI-powered web platform for wildlife conservation. Skilled in full-stack development, recognised for being collaborative and continuously learning new tech stacks like AWS as needed, demonstrated through an internship at Endace and multiple projects. Proficient in DevOps practices, including Git, Docker, CI/CD. Ready to leverage a strong foundation in C#, TypeScript and Python.",
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
    "JavaScript", "TypeScript", "React", "Angular", "Next.js", "HTML", "CSS", "Tailwind CSS", "Sass", "Bootstrap",
    // Backend
    "Python", "C#", "Java", "ASP.NET", "FastAPI", "Express.js", "Node.js", "Bun",
    // Databases & ORMs
    "SQL", "LINQ", "SQLite", "Entity Framework (EF Core)", "PostgreSQL", "MongoDB",
    // Testing
    "Pytest", "Vitest",
    // DevOps & Tools
    "Git", "Docker", "Linux", "Bash", "GitHub Actions", "Vercel", "Jira", "Confluence", "Visual Studio", "Object-Oriented Programming (OOP)", "CI/CD", "Cloudflare Workers", "JetBrains", "Terraform"
  ],
  workExperience: [
    {
      role: "Intern - Junior Developer",
      company: "Decoded",
      period: "Oct 2025 – Present",
      description:
        [
          "Contributed to full-stack application development with TypeScript, Next.js, React, Node.js, Express.js, Vitest, and MongoDB.",
          "Utilised Git for version control and operated within a Linux environment, using Bash for development and operational tasks.",
          "Leveraged modern tools like Cursor to accelerate debugging and feature implementation in a collaborative team setting."
        ],
        tags: ["TypeScript", "Next.js", "React", "Node.js", "Express.js", "Vitest", "MongoDB", "Git", "Linux", "Bash", "Cursor"]
    },
    {
      role: "Graduate Associate - Part Time",
      company: "Tribes Digital",
      period: "Sep 2025 – Oct 2025",
      description:
        [
          "Engaged in full-stack development using TypeScript, Python, Next.js, React, FastAPI, and PostgreSQL, contributing to the MVP roll-out.",
          "Gained hands-on experience with hosting services like Vercel, Render, and Neon, deploying and managing applications throughout the project lifecycle.",
          "Utilised Docker and implemented CI/CD pipelines with GitHub Actions to automate testing and deployment.",
          "Gained hands-on experience across multiple technological domains, including SaaS-based CRM systems.",
          "Assessed and experimented with emerging AI and generative tools, like GitHub Copilot, Gemini Code Assist, and Cursor."
        ],
        tags: ["TypeScript", "Python", "Next.js", "React", "FastAPI", "PostgreSQL", "Vercel", "Render", "Neon", "Docker", "CI/CD", "GitHub Actions", "SaaS", "CRM", "AI", "Generative AI"]
    },
    {
      role: "Engineering Intern",
      company: "Endace Technology",
      period: "Nov 2024 – Feb 2025",
      description:
        [
          "Architected and developed a modular profile system using Python, FastAPI, and Jinja2 to improve scalability and maintainability, assisting in the deployment and configuration on core network probe products.",
          "Engineered a dynamic, user-friendly UI with JavaScript and Bootstrap, earning commendations from senior engineers for its intuitive design and positive user experience.",
          "Enhanced system efficiency and maintainability, streamlining the configuration process for end-users and significantly reducing the potential for setup errors.",
          "Operated within an Agile framework using Jira, Confluence and Bitbucket, while collaborating with seniors to enhance features, resolve bugs, and debug issues, maximising team productivity."
        ],
        tags: ["Python", "FastAPI", "Jinja2", "JavaScript", "Bootstrap", "jQuery", "Agile", "Jira", "Confluence", "Debugging"]
    },
    {
      role: "Professional Notetaker",
      company: "The University of Auckland",
      period: "Aug 2024 – Dec 2024",
      description:
        [
          "Translated complex academic lectures into clear, accessible, and structured notes for students registered with Student Disability Services, directly supporting academic inclusivity.",
          "Demonstrated high attention to detail and adaptability by delivering quality notes across diverse and technical subjects, consistently meeting strict deadlines."
        ],
        tags: ["Academic Support", "Communication", "Attention to Detail"]
    },
    {
      role: "Information Technology Operator",
      company: "Triumen Group Zhuhai Branch",
      period: "Aug 2020 – Nov 2020",
      description:
        [
          "Provided critical front-line IT support for all hardware, software, and network issues, minimising downtime and ensuring smooth daily operations for the entire office.",
          "Investigated and resolved technical problems with printers, routers, and desktop applications to increase operational efficiency."
        ],
        tags: ["IT Support", "Hardware Troubleshooting", "Network Support", "Problem Solving"]
    },
  ],
  projects: [
    {
      name: "AI-Powered Personal Portfolio",
      description: [
        "Developed a responsive, single-page portfolio using Node.js, Bun, Next.js, TypeScript, and Tailwind CSS to showcase professional experience and projects.",
        "Integrated an interactive AI chatbot, powered by Google Gemini, capable of answering questions based on resume content.",
        "Established a CI/CD pipeline with GitHub Actions to automate linting, building, and Docker image creation across multiple operating systems.",
        "Containerised the application using Docker for consistent and simplified deployment."
      ],
      tags: ["Node.js", "Bun", "Next.js", "TypeScript", "Tailwind CSS", "Google Gemini", "GitHub Actions", "CI/CD", "Docker"],
      link: "https://kingsley-leung.vercel.app",
    },
    {
      name: "PowerGPT — Remote MCP Server for LLM Tool Augmentation",
      description: [
        "Built and deployed an MCP (Model Context Protocol) server on Cloudflare Workers using TypeScript, Bun, Wrangler, GitHub Actions, and optional Docker for reproducible local runs.",
        "Delivered secure, auditable numeric computation and web content extraction tools to extend LLM capabilities, especially in offline or restricted environments.",
        "Enhanced reliability and adoption by centralising computation/fetching, reducing hallucination risk, and providing clear documentation to connect the MCP to Cloudflare AI Playground and Claude Desktop."
      ],
      tags: ["TypeScript", "Bun", "Cloudflare Workers", "Wrangler", "GitHub Actions", "Docker"],
      link: "https://github.com/KingsleyLeung03/power-gpt",
    },
    {
      name: "CARE Web Platform: AI-Driven Wildlife Conservation",
      description: [
        "Led a 6-member team to design and implement an HTML, CSS, React web platform for AI image-based pest detection.",
        "Developed a full-stack solution, building the backend API with JavaScript, Node.js and Express.js. Collaborated closely with a PhD research group to integrate machine learning models.",
        "Managed the project using Agile methodologies, including sprint planning and task tracking, to ensure on-time delivery.",
        "Improved tracking of species like stoats, contributing to NZ biodiversity protection."
      ],
      tags: ["React", "Node.js", "Express.js", "JavaScript", "HTML", "CSS", "Machine Learning", "Agile"],
      link: "https://www.capitalise.space/projects/6736f7089df43e2d89de9401",
    },
    {
      name: "PhotoRecipe: AI-Powered Recipe Generator",
      description: [
        "Engineered a full-stack Next.js application with Node.js, leveraging Firebase Genkit to orchestrate Google Gemini AI models for a complete \"photo-to-recipe\" pipeline.", 
        "Implemented core features including AI-driven ingredient identification from photos, dynamic recipe generation with detailed instructions and nutritional information, and unique AI-generated dish images.", 
        "Developed a responsive UI using TypeScript, Tailwind CSS, and ShadCN, managing state with React Hooks and optimising performance with client-side image compression."
      ],
      tags: ["Node.js", "Next.js", "Firebase Genkit", "Google Gemini", "TypeScript", "Tailwind CSS", "ShadCN"],
      link: "https://photo-recipe-rho.vercel.app",
    },
    {
      name: "vCard Contact Generator",
      description: [
        "A sleek web app built with Node.js, React, Next.js, Tailwind CSS, Sass that generates random contact information with the ability to export as `.vcf` (vCard) files.", 
        "Containerised using Docker for consistent local development and deployment. Managed and monitored a CI/CD pipeline using GitHub Actions to automate testing and deployments to Vercel."
      ],
      tags: ["Node.js", "React", "Next.js", "Tailwind CSS", "Sass", "Docker", "GitHub Actions", "CI/CD", "Vercel"],
      link: "https://vcardcontactgenerator.vercel.app",
    },
    {
      name: "Concert Booking Service",
      description: [
        "Developed a full-featured C#/.NET concert booking web app using ASP.NET MVC, supporting event browsing and ticket management via RESTful APIs, implemented with Entity Framework (EF Core), LINQ and SQLite."
      ],
      tags: ["C#", "ASP.NET", "Entity Framework", "SQLite", "LINQ", ".NET"],
      link: "https://github.com/KingsleyLeung03/concert-booking-service-csharp",
    },
    {
      name: "Game Library Web App",
      description: [
        "Implemented a Flask-based app using Python, SQLAlchemy, Jinja2, and Repository Pattern, implemented unit and end-to-end (E2E) testing with Pytest.", 
        "Applied clean architecture principles and modular separation via Flask Blueprints."
      ],
      tags: ["Python", "Flask", "SQLAlchemy", "Jinja2", "Pytest", "Clean Architecture"],
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
        ],
      tags: ["Computer Science", "Software Engineering", "Full-Stack", "AI/ML", "Cybersecurity", "Operating Systems", "Networking", "Data Communication and Security", "Agile Development", "Database", "Object-Oriented Programming"]
    },
    {
      degree: "Certificate in Foundation Studies (Level 3)",
      institution: "The University of Auckland International College",
      period: "Jan 2021 – Dec 2021",
      description: [
          "Studied Accounting, Mathematics with Calculus, Physics, and Statistics.",
          "Gained experience in Microsoft Office from different coursework."
        ],
      tags: ["Foundation Studies", "Accounting", "Calculus", "Physics", "Statistics"]
    },
  ],
  awards: [
    {
      name: "Pixel Perfect Award - The Figured Internship Experience",
      issuer: "Figured, Web Development & Consulting Club (WDCC)",
      description: [
        "Awarded in a team hackathon for developing a financial reporting interface that most faithfully aligned with the product requirements and design specifications. Shows strong skills in collaborating, rapid learning and applying new tech stacks.", 
        "Developed within a Laravel Sail Docker environment, utilised PHP, Laravel for backend API, and Vue.js, Tailwind CSS for frontend to create a visually appealing Profit & Loss report featuring interactive graphs for data visualisation.", 
        "Went beyond the core requirements by integrating an LLM via the Laravel Prism to generate AI-powered financial commentary directly within the report."
      ],
      tags: ["Laravel", "Vue.js", "PHP", "TypeScript", "Tailwind CSS", "Docker", "AI Integration", "Hackathon"]
    },
    {
      name: "App Integration Workshop - Level 2",
      issuer: "IBM",
      description: ["Developed a deeper understanding of App Integration concepts by completing a hands-on lab focused on practical use cases."],
      tags: ["App Integration", "IBM"]
    },
    {
      name: "Cloudflare TechLabs Certificate",
      issuer: "Cloudflare",
      description: ["Participated in 'Diary of a Cyber Breach Investigator' workshop, gaining insight into real-world incident response, threat modelling, and breach mitigation strategies."],
      tags: ["Cybersecurity", "Incident Response", "Threat Modeling"]
    },
    {
      name: "Certificate of Outstanding Achievement (x2)",
      issuer: "School of Computer Science, University of Auckland",
      description: [
        "For achieving an A+ grade in COMPSCI 235 (Software Development Methodologies) in S2 2023.",
        "For achieving an A+ grade in COMPSCI 230 (Object Oriented Software Development) in S1 2023."
      ],
      tags: ["Academics", "High-Achievement", "Computer Science"]
    },
    {
      name: "Class Representative Certificate (x3)",
      issuer: "Auckland University Students’ Association",
      description: [
        "For representing COMPSCI 313 (Computer Architecture) in S2 2024.",
        "For representing COMPSCI 351 (Fundamentals of Database Systems) in S1 2024.",
        "For representing COMPSCI 335 (Web Programming and Distributed Services) in S2 2023."
      ],
      tags: ["Leadership", "Communication", "Student Advocacy"]
    },
  ],
  volunteering: [
    {
      role: "Class Representative (x3)",
      organization: "The University of Auckland",
      period: "2022 – 2024",
      description: [
        "Elected as class representative three times (COMPSCI 335, COMPSCI 351, COMPSCI 313).",
        "Served as a liaison between students, lecturers, tutors, and faculty to communicate feedback and advocate for student needs.",
        "Recognised with three Certificates of Appreciation from the Auckland University Students’ Association for effective representation and contribution."
      ]
    }
  ],
  interests: [
    "Chatting about emerging technologies", 
    "Attending workshops and tech meetups to expand network and boost development experiences", 
    "Developing personal projects", 
    "Enjoying Lo-Fi music", 
    "Solving IT issues for family and friends", 
    "Gaming, Travelling", 
    "Sharing my Cantonese culture"
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
          <p className="mt-2 text-xl md:text-2xl text-primary font-semibold">
            <span className="whitespace-nowrap">Software Developer</span> | <span className="whitespace-nowrap">C#, Python & TypeScript</span> | <span className="whitespace-nowrap">Passionate about AI-Driven Problem-Solving and DevOps</span>
          </p>
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
                    <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
                        {job.description.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
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
              <CardContent className="grow">
                 <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
                    {Array.isArray(project.description) ? project.description.map((item, i) => <li key={i}>{item}</li>) : <li>{project.description}</li>}
                </ul>
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
                            <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
                                {edu.description.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
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
                  <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
                    {Array.isArray(award.description) ? award.description.map((item, i) => <li key={i}>{item}</li>) : <li>{award.description}</li>}
                  </ul>
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
                <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground">
                    {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                </ul>
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
