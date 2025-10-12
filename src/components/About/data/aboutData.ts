export interface AboutSection {
  id: string;
  title: string;
  content: string;
  icon?: string;
}

export interface Skill {
  category: string;
  technologies: string[];
  description: string;
}

export const aboutSections: AboutSection[] = [
  {
    id: "intro",
    title: "Transforming Visions",
    content:
      "I'm a passionate front-end developer with experience in React, Next.js JavaScript, TypeScript, and modern UI design principles. I love creating intuitive and responsive web applications.",
  },
  {
    id: "state-management",
    title: "State Management",
    content:
      "For state management, I use Redux Toolkit and ContextAPI. They help me manage data across different parts of the app efficiently. With them, I ensure users get a smooth and consistent experience, even as they move between pages or interact with features.",
  },
  {
    id: "data-fetching",
    title: "Data Fetching",
    content:
      "For Data fetching, I use React Query and Axios. They help me get and manage data from APIs quickly and efficiently. With React Query, I also handle caching, loading states, and background updates with ease.",
  },
];

export const skillsData: Skill[] = [
  {
    category: "Frontend Technologies",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Vite",
      "HTML5",
      "CSS3",
    ],
    description:
      "Modern frontend development with focus on performance and user experience",
  },
  {
    category: "Styling & UI",
    technologies: [
      "Tailwind CSS",
      "Styled Components",
      "CSS Modules",
      "SASS"
    ],
    description: "Creating beautiful and responsive user interfaces",
  },
  {
    category: "State Management",
    technologies: [
      "Redux Toolkit",
      "Context API",
      "React Query"
    ],
    description: "Efficient state management and data fetching solutions",
  },
  {
    category: "Backend & Database",
    technologies: [
      "Firebase",
      "Firestore",
      "Firebase Auth"
    ],
    description: "Backend development using Firebase ecosystem",
  },
  {
    category: "Tools & Deployment",
    technologies: ["Git", "GitHub", "Vercel", "Netlify"],
    description: "Development tools and deployment platforms",
  },
];
