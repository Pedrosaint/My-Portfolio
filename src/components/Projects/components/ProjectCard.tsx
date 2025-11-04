import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const handleViewProject = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both`,
      }}
    >
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-10" />

          {/* Category Badge */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
              {project.category}
            </span>
          </div>

          {/* Action Buttons - Appear on Hover */}
          <div
            className={`absolute inset-0 flex items-center justify-center gap-2 sm:gap-4 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-white"
              >
                <Github size={20} className="text-gray-900 sm:w-6 sm:h-6" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110"
              >
                <ExternalLink size={20} className="text-white sm:w-6 sm:h-6" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs font-medium bg-gray-700/50 text-gray-300 px-2 py-1 sm:px-3 sm:py-1 rounded-full border border-gray-600 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
                  style={{
                    animation: `slideInUp 0.3s ease-out ${
                      techIndex * 0.05
                    }s both`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleViewProject}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-yellow-400 text-black text-xs font-semibold rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </div>
  );
};

export default ProjectCard;
