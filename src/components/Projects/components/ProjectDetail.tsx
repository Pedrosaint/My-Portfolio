import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaLink, FaGithub, FaArrowLeft } from "react-icons/fa";
import { projectsData } from "../data/projectsData";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const project = projectsData.find((p) => p.id === projectId);
  const progressPercentage = 65;

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
            className="px-6 py-3 bg-yellow-500 text-black rounded-md hover:bg-yellow-100 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const tabs = ["overview", "tech-stack", "progress", "future-plans"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              Project Overview
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              The goal of this project is to create a transparent and
              user-friendly healthcare feedback platform. Patients can rate
              medical professionals and institutions, read reviews, and access
              verified performance data — improving trust and quality in
              healthcare.
            </p>
          </div>
        );
      case "tech-stack":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg text-center text-white"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        );
      case "progress":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4 flex gap-2 items-center">
              Current Progress
              <span>
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-gray-800"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="transparent"
                      r="30"
                      cx="40"
                      cy="40"
                    />
                    <circle
                      className="text-yellow-500 transition-all duration-500"
                      strokeWidth="4"
                      strokeDasharray="188" 
                      strokeDashoffset={188 - (188 * progressPercentage) / 100}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="30"
                      cx="40"
                      cy="40"
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-200">
                      {progressPercentage}%
                    </span>
                  </div>
                </div>
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              The project is currently in active development. The user interface
              is being refined, API endpoints are being integrated, and
              authentication layers are being built to ensure secure and smooth
              user experiences.
            </p>

            {/* 🔹 Progress Bar Section */}
            <div className="mt-6 flex flex-col items-center justify-center">
              <span className="text-gray-300 text-sm mb-3">
                Development Progress
              </span>

              {/* Circular progress bar */}
            </div>
          </div>
        );
      case "future-plans":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              Future Enhancements
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Integration of AI-based doctor recommendation system.</li>
              <li>Implementation of location-based hospital discovery.</li>
              <li>Adding patient appointment booking and reminders.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center self-start gap-2 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 rounded-md transition-colors"
            >
              <FaArrowLeft /> Back
            </button>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-white">
                {project.title}
              </h1>
              <p className="text-sm text-gray-400">
                {project.shortDescription}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-2">
              {project.notLive ? (
                <span className="inline-block whitespace-nowrap px-3 py-2 text-xs sm:text-sm font-medium bg-yellow-500 text-black rounded-md">
                  In Development
                </span>
              ) : (
                project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-white text-gray-800 border rounded-md hover:bg-gray-50"
                  >
                    <FaLink /> Live
                  </a>
                )
              )}
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-white text-gray-800 border rounded-md hover:bg-gray-50"
              >
                <FaGithub /> Code
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Tabs */}
        <aside className="md:col-span-3">
          <nav className="bg-gray-900/60 border border-gray-800 rounded-lg p-2">
            <ul className="space-y-1">
              {tabs.map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeTab === tab
                        ? "bg-white text-gray-900"
                        : "text-gray-300 hover:bg-gray-800"
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

        {/* Details + Mockup */}
        <section className="md:col-span-9 space-y-6">
          <img
            src={project.image}
            alt={`${project.title} mockup`}
            className="w-full h-[600px] object-cover hidden md:block"
          />
          <img
            src={project.imageMobile}
            alt={`${project.title} mockup`}
            className="w-full h-[500px] object-cover md:hidden"
          />
          <p className="text-xs text-gray-400">Project mockup preview</p>
          <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6">
            {renderTabContent()}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
