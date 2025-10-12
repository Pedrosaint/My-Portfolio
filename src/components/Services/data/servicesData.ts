export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  technologies: string[];
}

export const servicesData: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "I specialize in creating responsive and user-friendly web applications with modern frameworks like React.js, focusing on seamless UI/UX implementation, cross-browser compatibility, performance optimization, API integration, and providing ongoing maintenance and updates to ensure scalable and dynamic solutions.",
    icon: "CodeBracketSquareIcon",
    color: "bg-red-700",
    features: [
      "Responsive Design",
      "Modern UI/UX",
      "Performance Optimization",
      "API Integration",
      "Maintenance & Updates",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Vite",
      "JavaScript",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "I work with Firebase to provide robust backend solutions including authentication, database management and real-time features to support your frontend applications.",
    icon: "CommandLineIcon",
    color: "bg-blue-700",
    features: [
      "Firebase Authentication",
      "Firestore Database",
      "Real-time Features",
    ],
    technologies: [
      "Firebase",
      "Firestore",
      "Firebase Auth",
    ],
  },
];
