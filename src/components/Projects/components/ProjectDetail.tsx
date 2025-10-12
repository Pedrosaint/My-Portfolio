import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaLink, FaGithub, FaArrowLeft } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import { projectsData } from "../data/projectsData";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#02050a] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    "overview",
    "tech-stack",
    "features",
    "implementation",
    "challenges",
    "screenshots",
    "improvements",
    "demo",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              Project Overview
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Project Details
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <span className="font-medium">Category:</span>{" "}
                    {project.category}
                  </li>
                  <li>
                    <span className="font-medium">Status:</span> Completed
                  </li>
                  <li>
                    <span className="font-medium">Duration:</span> 2-3 months
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Responsive Design</li>
                  <li>• Modern UI/UX</li>
                  <li>• Performance Optimized</li>
                  <li>• Cross-browser Compatible</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "tech-stack":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg text-center"
                >
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "features":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Frontend Features
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Responsive Design</li>
                  <li>• Modern UI Components</li>
                  <li>• Smooth Animations</li>
                  <li>• Dark/Light Theme</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Backend Features
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• RESTful API</li>
                  <li>• Database Integration</li>
                  <li>• Authentication</li>
                  <li>• Real-time Updates</li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              {activeTab.charAt(0).toUpperCase() +
                activeTab.slice(1).replace("-", " ")}
            </h2>
            <p className="text-gray-300 text-lg">
              This section is under development. More details will be added
              soon.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#02050a]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1b1a2b] border-b border-gray-900 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 rounded-md transition-colors"
            >
              <FaArrowLeft /> Back to Portfolio
            </button>
            <h1 className="text-2xl font-bold text-white">{project.title}</h1>
          </div>
          <div className="flex items-center space-x-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-white text-gray-700 border rounded-md hover:bg-gray-50"
              >
                <FaLink /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-white text-gray-700 border rounded-md hover:bg-gray-50"
              >
                <FaGithub /> Source Code
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center mb-12 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-2xl mb-8 font-medium">
            {project.shortDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-md flex items-center justify-center"
              >
                <RiExternalLinkLine className="w-5 h-5 mr-2" />
                View Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-md flex items-center justify-center"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                View Source Code
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <main className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 p-1 bg-gray-100 rounded-lg mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-900 rounded-lg p-8 mb-8">
          {renderTabContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1b1a2b] border-t border-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-white mb-4">{project.shortDescription}</p>
          <div className="flex justify-center space-x-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 flex items-center space-x-2 text-sm font-medium bg-white text-gray-700 border rounded-md hover:bg-gray-50"
              >
                <FaLink /> <span>Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 flex items-center space-x-2 text-sm font-medium bg-white text-gray-700 border rounded-md hover:bg-gray-50"
              >
                <FaGithub /> <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
