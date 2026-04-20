import mockup_image_3 from "../../../assets/images/mockup_hcf_3.png";
import Vreg from "../../../assets/images/vreg_2.png";
import Idec from "../../../assets/images/idec_2.png";
import C4h from "../../../assets/images/c4h_2.png";
import AbujaRecruiters from "../../../assets/images/abuja_recruiters.png";
import HRIS from "../../../assets/images/hris.png";
import NasarawaCBTAS from "../../../assets/images/nasarawa_state.png";
import NigerIGR from "../../../assets/images/niger_state.png";

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
    id: "nasarawa-cbtas",
    title: "Nasarawa CBTAS – Central Billing and Tax System",
    shortDescription:
      "A centralized billing and tax administration platform for Nasarawa State.",
    description:
      "Engineered a digital tax administration platform to automate revenue collection and billing for Nasarawa State. The system features multi-channel payment integrations (Gateways, POS, Banks), automated invoice generation, and specialized self-service portals for Individuals, Corporates, and Government Agencies. Integrated real-time tracking for PAYE, Land Use Charge, and Vehicle Registration taxes.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "API Integration", "Redux Toolkit"],
    category: "Web App",
    image: NasarawaCBTAS,
    imageMobile: NasarawaCBTAS,
    liveUrl: "https://nasarawa.cbtas.com/",
    githubUrl: undefined,
    featured: true,
    achievements: [
      "Digitized over 15+ tax types for automated collection",
      "Integrated seamless multi-bank payment reconciliation systems",
    ],
  },
  {
    id: "niger-igr",
    title: "Niger State IGR – Revenue Management System",
    shortDescription:
      "An advanced Internally Generated Revenue platform for Niger State.",
    description:
      "Developed a high-transparency revenue management system for the Niger State Internal Revenue Service (NGSIRS). The platform secures and tracks payments for Business Premises, Capital Gain Tax, and Waste Management. Built a real-time administrative reporting dashboard for state officials to monitor revenue trends and taxpayer compliance.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "API Integration", "Chart.js"],
    category: "Web App",
    image: NigerIGR,
    imageMobile: NigerIGR,
    liveUrl: "https://nigerigr.ngsirs.gov.ng/",
    githubUrl: undefined,
    featured: true,
    achievements: [
      "Built a secure real-time revenue reporting engine for state administrators",
      "Enhanced taxpayer experience with a centralized payment interface",
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
  {
    id: "abuja-recruiters",
    title: "Abuja Recruiters – Job Application System",
    shortDescription:
      "A digital platform where job seekers search and apply for opportunities.",
    description:
      "Developed a robust job application portal tailored for the Abuja recruitment market. The platform features an intuitive search interface, multi-step application forms, and real-time notifications for applicants. Integrated backend services to handle resume uploads and profile management, ensuring a seamless experience for thousands of job seekers.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "API Integration"],
    category: "Web App",
    image: AbujaRecruiters,
    imageMobile: AbujaRecruiters,
    liveUrl: "https://abujarecruiters.com/",
    featured: true,
    achievements: [
      "Streamlined the job application process for thousands of users",
      "Integrated real-time job listing updates via backend APIs",
    ],
  },
  {
    id: "hris",
    title: "HRIS – Recruiter Management Portal",
    shortDescription:
      "A centralized dashboard for managing recruitment and applicant tracking.",
    description:
      "Built a comprehensive Human Resource Information System (HRIS) dashboard for managing the end-to-end recruitment lifecycle. Recruiter-side features include applicant status tracking, automated scheduling, and centralized candidate data management. Implemented data-rich visualizations for recruitment analytics and team performance monitoring.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "API Integration", "Chart.js"],
    category: "Web App",
    image: HRIS,
    imageMobile: HRIS,
    liveUrl: "https://hris.4coretech.com/",
    featured: true,
    achievements: [
      "Designed an intuitive dashboard for recruiter productivity",
      "Implemented complex data sorting and filtering for large applicant pools",
    ],
  },
];
