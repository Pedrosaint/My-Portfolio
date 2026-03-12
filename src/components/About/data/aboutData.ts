import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiVite,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiSass,
  SiRedux,
  SiReactquery,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { IconType } from "react-icons";
import { TbTopologyStar } from "react-icons/tb";

export interface Technology {
  name: string;
  icon: IconType;
}

export interface Skill {
  category: string;
  technologies: Technology[];
  description: string;
}

export interface AboutSection {
  id: string;
  title: string;
  content: string;
  icon?: string;
}

export const aboutSections = [
  {
    id: "intro",
    title: "Who I Am",
    content:
      "I'm a Frontend Engineer who specializes in React, TypeScript, and Tailwind CSS to deliver scalable, user-centric web experiences.",
  },
  {
    id: "architecture",
    title: "Clean & Scalable Architecture",
    content:
      "I build component-driven systems with maintainable folder structures, reusable logic, and modern state management patterns. My focus is on scalability, reusability, and developer experience.",
  },
  {
    id: "enterprise",
    title: "Production-Ready Projects",
    content:
      "I've contributed to large-scale platforms — building multi-step workflows, role-based dashboards, and secure API integrations with clean architecture and efficient state management.",
  },
  {
    id: "data-fetching",
    title: "API Integration & Data Handling",
    content:
      "I integrate data with Redux Toolkit, React Query, Axios, and REST APIs, implementing caching and synchronization to deliver consistent real-time experiences across complex enterprise applications.",
  },
];


export const skillsData: Skill[] = [
  {
    category: "Frontend Technologies",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vite", icon: SiVite },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ],
    description:
      "Modern frontend development with focus on performance and user experience",
  },
  {
    category: "Styling & UI",
    technologies: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Styled Components", icon: SiStyledcomponents },
      { name: "SASS", icon: SiSass },
    ],
    description: "Creating beautiful and responsive user interfaces",
  },
  {
    category: "State Management",
    technologies: [
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "React Query", icon: SiReactquery },
      { name: "Context API", icon: TbTopologyStar },
    ],
    description: "Efficient state management and data fetching solutions",
  },
  {
    category: "Backend & Database",
    technologies: [{ name: "Firebase", icon: SiFirebase }],
    description: "Backend development using Firebase ecosystem",
  },
  {
    category: "Tools & Deployment",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
    description: "Development tools and deployment platforms",
  },
];

