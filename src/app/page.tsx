import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, GraduationCap, Award, Heart, Mail, Phone, Linkedin, Github, MapPin, User, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const portfolioData = {
  profile: {
    name: "Kingsley",
    title: "AI & Full-Stack Developer",
    avatar: "https://placehold.co/200x200.png",
    summary: "Innovative and driven AI developer with a passion for creating intelligent solutions and seamless user experiences. Proficient in both front-end and back-end technologies, with a strong focus on leveraging generative AI to build next-generation applications.",
  },
  contact: {
    email: "kingsley@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/kingsley",
    github: "https://github.com/kingsley",
  },
  skills: [
    "Python", "TypeScript", "React", "Next.js", "Node.js", "GenKit", "Firebase",
    "Tailwind CSS", "Machine Learning", "Natural Language Processing", "Prompt Engineering", "Cloud Functions"
  ],
  workExperience: [
    {
      role: "Senior AI Engineer",
      company: "Innovate AI Corp",
      period: "2021 - Present",
      description: "Led the development of a large-scale language model for customer service automation. Integrated AI-powered features into existing products, improving user engagement by 40%.",
    },
    {
      role: "Full-Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2018 - 2021",
      description: "Developed and maintained web applications for various clients using the MERN stack. Collaborated with cross-functional teams to deliver high-quality software on schedule.",
    },
  ],
  projects: [
    {
      name: "AI Portfolio Chatbot",
      description: "Developed a personal portfolio website with an integrated AI chatbot that can answer questions about my skills and experience based on my CV.",
      tags: ["Next.js", "GenKit", "AI", "TypeScript"],
    },
    {
      name: "E-commerce Recommendation Engine",
      description: "Built a machine learning model to provide personalized product recommendations, increasing average order value by 15%.",
      tags: ["Python", "Scikit-learn", "Flask"],
    },
  ],
  education: [
    {
      degree: "M.S. in Computer Science",
      institution: "Stanford University",
      period: "2016 - 2018",
    },
    {
      degree: "B.S. in Software Engineering",
      institution: "University of California, Berkeley",
      period: "2012 - 2016",
    },
  ],
  awards: [
    { name: "Innovate AI Hackathon Winner", year: "2022" },
    { name: "Google Cloud Certified - Professional Machine Learning Engineer", year: "2021" },
  ],
  volunteering: [
    {
      role: "Mentor",
      organization: "Code for America",
      period: "2019 - Present",
      description: "Mentoring aspiring developers and contributing to open-source projects for social good."
    }
  ],
  interests: ["Hiking", "Photography", "Playing the Guitar", "Competitive Programming"],
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

export default function Home() {
  const { profile, contact, skills, workExperience, projects, education, awards, volunteering, interests } = portfolioData;

  return (
    <div className="container max-w-5xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-16 text-center md:text-left">
        <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary shadow-lg">
          <AvatarImage src={profile.avatar} alt={profile.name} data-ai-hint="man portrait"/>
          <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-headline text-5xl md:text-6xl font-bold">{profile.name}</h1>
          <p className="mt-2 text-xl md:text-2xl text-primary font-semibold">{profile.title}</p>
          <p className="mt-4 text-lg text-muted-foreground">{profile.summary}</p>
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
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:opacity-50">
          {workExperience.map((job, index) => (
            <Card key={index} className="pl-12 relative">
                <div className="absolute -left-1.5 top-5 h-8 w-8 rounded-full bg-background flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{job.role}</CardTitle>
                <p className="text-muted-foreground">{job.company} | {job.period}</p>
              </CardHeader>
              <CardContent>
                <p>{job.description}</p>
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
            <Card key={index}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Separator />

      <div className="grid md:grid-cols-2 gap-x-12">
        {/* Education */}
        <Section>
          <SectionTitle icon={GraduationCap}>Education</SectionTitle>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Awards */}
        <Section>
          <SectionTitle icon={Award}>Awards & Certs</SectionTitle>
          <ul className="space-y-4 list-disc list-inside">
            {awards.map((award, index) => <li key={index}>{award.name} - {award.year}</li>)}
          </ul>
        </Section>
      </div>

      <Separator />

      <div className="grid md:grid-cols-2 gap-x-12">
        {/* Volunteering */}
        <Section>
          <SectionTitle icon={Heart}>Volunteering</SectionTitle>
           {volunteering.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold">{item.role} at {item.organization}</h3>
                <p className="text-sm text-muted-foreground">{item.period}</p>
                <p className="mt-2">{item.description}</p>
              </div>
            ))}
        </Section>

        {/* Interests */}
        <Section>
          <SectionTitle icon={Heart}>Interests</SectionTitle>
          <ul className="space-y-2 list-disc list-inside">
            {interests.map((interest, index) => <li key={index}>{interest}</li>)}
          </ul>
        </Section>
      </div>
    </div>
  );
}
