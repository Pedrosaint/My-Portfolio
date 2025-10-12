import React, { useState } from "react";
import { Sparkles, FolderOpen } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
}

// const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="group relative"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both`,
//       }}
//     >
//       <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:-translate-y-2">
//         {/* Image Container */}
//         <div className="relative h-56 overflow-hidden">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
//           />
//           {/* Overlay Gradient */}
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80" />

//           {/* Category Badge */}
//           <div className="absolute top-4 right-4">
//             <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full shadow-lg">
//               {project.category}
//             </span>
//           </div>

//           {/* Action Buttons - Appear on Hover */}
//           <div
//             className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${
//               isHovered ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             {project.github && (
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-white"
//               >
//                 <Github size={24} className="text-gray-900" />
//               </a>
//             )}
//             {project.live && (
//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110"
//               >
//                 <ExternalLink size={24} className="text-white" />
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
//             {project.title}
//           </h3>

//           <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
//             {project.description}
//           </p>

//           {/* Technologies */}
//           <div className="flex flex-wrap gap-2">
//             {project.technologies.map((tech, techIndex) => (
//               <span
//                 key={techIndex}
//                 className="text-xs font-medium bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full border border-gray-600 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
//                 style={{
//                   animation: `slideInUp 0.3s ease-out ${
//                     techIndex * 0.05
//                   }s both`,
//                 }}
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Glow Effect */}
//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
//       </div>
//     </div>
//   );
// };

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  // Demo data
  const projectsData: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with shopping cart, payment integration, and admin dashboard.",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "Real-time weather application with 5-day forecast and geolocation features.",
      category: "frontend",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800",
      technologies: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 3,
      title: "Task Management API",
      description:
        "RESTful API for task management with authentication and real-time updates.",
      category: "backend",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      technologies: ["Node.js", "Express", "PostgreSQL"],
      github: "https://github.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Modern portfolio website with smooth animations and responsive design.",
      category: "frontend",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
      technologies: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization.",
      category: "fullstack",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      technologies: ["React", "Node.js", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 6,
      title: "Chat Application",
      description:
        "Real-time chat app with WebSocket support and message encryption.",
      category: "fullstack",
      image:
        "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800",
      technologies: ["React", "Socket.io", "Firebase"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  const categories = [
    "all",
    ...Array.from(new Set(projectsData.map((project) => project.category))),
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <div
      id="projects"
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4">
            <FolderOpen className="text-yellow-400 animate-bounce w-8 h-8 sm:w-10 sm:h-10" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white">MY </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 animate-gradient">
                PROJECTS
              </span>
            </h1>
            <Sparkles className="text-orange-500 animate-pulse w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Showcasing my journey through code, creativity, and innovation
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="inline-flex flex-wrap gap-2 sm:gap-3 bg-gray-800/50 backdrop-blur-sm p-2 rounded-2xl border border-gray-700">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  filter === category
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-500/50"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
                {filter === category && (
                  <span className="ml-1 sm:ml-2 inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Count */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">
            Showing{" "}
            <span className="text-yellow-400 font-bold">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 sm:py-20">
            <FolderOpen
              size={60}
              className="text-gray-600 mx-auto mb-4 sm:w-20 sm:h-20"
            />
            <p className="text-gray-400 text-lg sm:text-xl">
              No projects found in this category
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 8s ease-in-out infinite 4s;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Projects;
