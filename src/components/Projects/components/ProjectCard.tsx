import { ExternalLink, Github, ArrowRight } from "lucide-react";
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

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleViewProject = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="group card-base p-0 overflow-hidden hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-claude-dark/0 group-hover:bg-claude-dark/40 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-claude-surface rounded-lg shadow-card hover:scale-105 transition-transform"
            >
              <Github size={18} className="text-claude-text" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-claude-accent rounded-lg shadow-card hover:scale-105 transition-transform"
            >
              <ExternalLink size={18} className="text-white" />
            </a>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 bg-claude-accent text-white text-xs font-medium rounded-md shadow-soft">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-base font-semibold text-claude-text mb-2 group-hover:text-claude-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-claude-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs font-medium bg-claude-surface-alt text-claude-text-secondary px-2 py-0.5 rounded border border-claude-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details */}
        <button
          onClick={handleViewProject}
          className="group/btn flex items-center gap-1.5 text-sm font-medium text-claude-accent hover:text-claude-accent-hover transition-colors cursor-pointer"
        >
          <span>View Details</span>
          <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
