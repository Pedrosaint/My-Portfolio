import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import { ExternalLink, ArrowRight } from "lucide-react";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(projectsData.map((project) => project.category))),
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-claude-surface">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="section-title mb-4">My Projects</h2>
          <p className="section-subtitle">
            Real-world applications built with modern technologies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-2 p-1.5 bg-claude-surface-alt rounded-xl border border-claude-border">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  filter === category
                    ? "bg-claude-accent text-white shadow-soft"
                    : "text-claude-text-secondary hover:text-claude-text hover:bg-claude-surface"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Count */}
        <div className="text-center mb-8">
          <p className="text-claude-text-muted text-sm">
            Showing{" "}
            <span className="text-claude-accent font-semibold">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group card-base p-0 overflow-hidden hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-claude-surface-alt">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-claude-dark/0 group-hover:bg-claude-dark/40 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                  {project.liveUrl && !project.notLive && (
                    <a
                      href={project.liveUrl}
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
                  <span className="px-2.5 py-1 bg-claude-surface/90 backdrop-blur-sm text-claude-text text-xs font-medium rounded-md shadow-soft">
                    {project.category}
                  </span>
                </div>

                {/* Status Badge */}
                {project.notLive && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-amber-50/90 dark:bg-amber-900/50 backdrop-blur-sm text-amber-700 dark:text-amber-300 text-xs font-medium rounded-md shadow-soft">
                      In Development
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-base font-semibold text-claude-text mb-2 group-hover:text-claude-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-claude-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium bg-claude-surface-alt text-claude-text-secondary px-2 py-0.5 rounded border border-claude-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-claude-text-muted px-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  {project.liveUrl && !project.notLive ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-1.5 text-sm font-medium text-claude-accent hover:text-claude-accent-hover transition-colors"
                    >
                      <span>Visit Site</span>
                      <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <a
                      href={`/project/${project.id}`}
                      className="group/btn flex items-center gap-1.5 text-sm font-medium text-claude-accent hover:text-claude-accent-hover transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  )}

                  {project.achievements && project.achievements.length > 0 && (
                    <span className="text-xs text-claude-text-muted">
                      {project.achievements.length} achievement{project.achievements.length > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-claude-text-muted text-lg">
              No projects found in this category
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
