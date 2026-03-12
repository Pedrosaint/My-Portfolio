import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, CheckCircle } from "lucide-react";
import { projectsData } from "../data/projectsData";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-claude-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-claude-text mb-4">
            Project Not Found
          </h1>
          <p className="text-claude-text-secondary mb-8">
            The project you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-claude-accent text-white font-medium rounded-xl hover:bg-claude-accent-hover transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const tabs = ["overview", "tech-stack", "achievements"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-claude-text">
              Project Overview
            </h2>
            <p className="text-claude-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>
        );
      case "tech-stack":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-claude-text">
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-claude-surface-alt border border-claude-border text-center text-sm font-medium text-claude-text"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        );
      case "achievements":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-claude-text">
              Key Achievements
            </h2>
            {project.achievements && project.achievements.length > 0 ? (
              <ul className="space-y-3">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-claude-accent shrink-0 mt-0.5" />
                    <span className="text-claude-text-secondary">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-claude-text-muted">
                Achievements details coming soon.
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-claude-bg">
      {/* Header */}
      <header className="border-b border-claude-border bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-claude-text-secondary hover:text-claude-text hover:bg-claude-surface-alt rounded-lg transition-colors"
              >
                <ArrowLeft size={16} /> Back
              </button>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold text-claude-text">
                  {project.title}
                </h1>
                <p className="text-sm text-claude-text-muted">
                  {project.shortDescription}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {project.notLive ? (
                <span className="px-3 py-1.5 text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-lg">
                  In Development
                </span>
              ) : (
                project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-claude-accent text-white rounded-lg hover:bg-claude-accent-hover transition-colors"
                  >
                    <ExternalLink size={14} /> Visit Site
                  </a>
                )
              )}

              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-white text-claude-text border border-claude-border rounded-lg hover:bg-claude-surface-alt transition-colors"
                >
                  <Github size={14} /> Code
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sidebar Tabs */}
          <aside className="md:col-span-3">
            <nav className="bg-white border border-claude-border rounded-xl p-2">
              <ul className="space-y-1">
                {tabs.map((tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === tab
                          ? "bg-claude-accent text-white"
                          : "text-claude-text-secondary hover:bg-claude-surface-alt hover:text-claude-text"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() +
                        tab.slice(1).replace("-", " ")}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <section className="md:col-span-9 space-y-6">
            {/* Mockup Image */}
            <div className="rounded-2xl overflow-hidden border border-claude-border shadow-card">
              <img
                src={project.image}
                alt={`${project.title} mockup`}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover hidden md:block"
              />
              <img
                src={project.imageMobile || project.image}
                alt={`${project.title} mockup`}
                className="w-full h-[300px] object-cover md:hidden"
              />
            </div>
            <p className="text-xs text-claude-text-muted">
              Project mockup preview
            </p>

            {/* Tab Content */}
            <div className="bg-white border border-claude-border rounded-2xl p-6 sm:p-8">
              {renderTabContent()}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
