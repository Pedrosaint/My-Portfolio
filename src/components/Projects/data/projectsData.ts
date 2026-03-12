import mockup_image_3 from "../../../assets/images/mockup_hcf_3.png";
import Vreg from "../../../assets/images/vreg.jpeg";
import Idec from "../../../assets/images/idec.jpeg";
import Cbtas from "../../../assets/images/cbtas.jpeg";
import C4h from "../../../assets/images/c4h.jpeg";

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
  achievements?: string[];
}

export const projectsData: Project[] = [
  {
    id: "vreg",
    title: "VREG – Vehicle Registration System",
    shortDescription:
      "A vehicle registration platform serving public users and administrative agencies.",
    description:
      "Contributed to the development of a vehicle registration platform serving public users and administrative agencies. Built dynamic multi-step registration workflows with validation and document upload handling. Integrated secure APIs for vehicle verification, payment processing, and registration status tracking. Implemented role-based dashboards for administrative monitoring and reporting.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "API Integration"],
    category: "Web App",
    image: Vreg,
    imageMobile: Vreg,
    liveUrl: "https://vreg.gov.ng/",
    githubUrl: undefined,
    featured: true,
    achievements: [
      "Optimized UI performance for high-volume public usage",
      "Improved responsiveness and load times by 30%",
    ],
  },
  {
    id: "idec",
    title: "IDEC – Import Duty Exemption Certificate System",
    shortDescription:
      "Managing import duty exemption applications with dashboards and approval workflows.",
    description:
      "Developed responsive user interfaces for managing import duty exemption applications. Built dashboards for submission tracking, document review, and approval workflows. Integrated backend APIs for application processing, verification, and certificate generation. Implemented secure authentication and role-based access control.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "API Integration"],
    category: "Web App",
    image: Idec,
    imageMobile: Idec,
    liveUrl: "https://www.idec.gov.ng/",
    githubUrl: undefined,
    featured: true,
    achievements: [
      "Enhanced system usability and performance for enterprise-level stakeholders",
    ],
  },
  {
    id: "cbtas",
    title: "CBTAS – Central Billing and Tax Administration System",
    shortDescription:
      "A centralized billing and tax administration platform with interactive dashboards.",
    description:
      "Contributed to a centralized billing and tax administration platform. Built interactive dashboards for billing records, tax processing, and payment reconciliation. Integrated APIs for transaction management, invoice generation, and reporting. Implemented secure session handling and data validation.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "API Integration"],
    category: "Web App",
    image: Cbtas,
    imageMobile: Cbtas,
    liveUrl: "https://cbtas.com/",
    githubUrl: undefined,
    featured: true,
    achievements: [
      "Optimized state management and UI performance for handling complex datasets",
    ],
  },
  {
    id: "changeforhumanity",
    title: "Change for Humanity – Digital Platform",
    shortDescription:
      "A platform for donor engagement, volunteer registration, and outreach.",
    description:
      "Developed responsive and accessible UI components for donor engagement and outreach. Built volunteer registration and donation management interfaces. Integrated backend services for data synchronization and user management. Implemented reusable component structures for design consistency.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "API Integration"],
    category: "Web App",
    image: C4h,
    imageMobile: C4h,
    liveUrl: "https://changeforhumanity.org/",
    githubUrl: undefined,
    featured: false,
    achievements: [
      "Enhanced performance and mobile responsiveness across devices",
    ],
  },
  {
    id: "hcf",
    title: "Hospital & Doctor Rating Application",
    shortDescription:
      "A progressive web app for discovering and rating medical professionals.",
    description:
      "A user-friendly platform designed to help patients discover hospitals and doctors, read reviews, and share experiences. It promotes transparency, quality improvement, and trust.",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    category: "Web App",
    image: mockup_image_3,
    imageMobile: mockup_image_3,
    liveUrl: "#",
    notLive: true,
    githubUrl: "https://github.com/tijjvni/perch_frontend",
    featured: false,
  },
];
