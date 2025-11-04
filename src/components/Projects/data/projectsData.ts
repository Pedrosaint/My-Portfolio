import mockup_image_1 from "../../../assets/images/mockup_hcf.png";
import mockup_image_3 from "../../../assets/images/mockup_hcf_3.png";

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
  notLive?: boolean;
  imageMobile?: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Hospital & Doctor Rating Application",
    shortDescription:
      "A progressive web app for discovering and rating healthcare professionals and hospitals.",
    description:
      "A user-friendly platform designed to help patients discover hospitals and doctors, read reviews, and share experiences. It promotes transparency, quality improvement, and trust in healthcare.",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    category: "Web Application",
    image: mockup_image_1,
    imageMobile: mockup_image_3,
    liveUrl: "#",
    notLive: true,
    githubUrl: "https://github.com/tijjvni/perch_frontend",
    featured: true,
  },
  {
    id: "2",
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
    id: "3",
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
