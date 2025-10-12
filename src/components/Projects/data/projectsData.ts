export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "ecommerce",
    title: "E-Commerce App",
    description:
      "A fully functional e-commerce application with product categories, cart persistence, and a dynamic shopping experience with its dashboard for the Admin.",
    shortDescription: "A modern e-commerce platform with admin dashboard",
    image: "/src/assets/images/ecommerce.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "JavaScript",
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing my skills, projects, and experience with modern design principles.",
    shortDescription: "Personal portfolio with modern UI/UX",
    image: "/src/assets/images/image.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend",
    featured: true,
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    description:
      "A comprehensive task management application with user authentication, real-time updates, and collaborative features.",
    shortDescription: "Collaborative task management solution",
    image: "/src/assets/images/img1.png",
    technologies: ["React", "Firebase", "Firestore", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    featured: false,
  },
];
