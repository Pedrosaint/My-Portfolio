import { useState } from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

import EcommerceOverview from "./Ecommerce-overview";
import EcommerceTechStack from "./ecommerce-techstack";
import EcommerceFeatures from "./ecommerce-features";
import EcommerceImplementation from "./ecommerce-implementation";
import EcommerceChallenges from "./ecommerece-challenges";
import EcommerceScreenshots from "./ecommerce-screenshot";
import EcommerceImprovements from "./ecommerce-improvements";
import EcommerceDemo from "./ecommerce-demo";
import EcommerceImage from "../../../assets/images/ecommerce.jpg";

const Ecommerce = () => {
  const [activeTab, setActiveTab] = useState("overview");

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

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1b1a2b] border-b border-gray-900 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">E-Commerce App</h1>
          <div className="flex items-center space-x-4">
            <a
              href="#demo"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-white text-gray-700 border rounded-md hover:bg-gray-50"
            >
              <FaLink /> Live Demo
            </a>
            <a
              href="#source"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-white text-gray-700 border rounded-md hover:bg-gray-50"
            >
              <FaGithub /> Source Code
            </a>
          </div>
        </div>
      </header>

      <section className="relative w-full h-[80vh] flex items-center justify-center mb-12  overflow-hidden">
        {/* Background image */}
        <img
          src={EcommerceImage}
          alt="Ecommerce App"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 bg-opacity-60"></div>

        {/* Content on top */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">E-Commerce WebApp</h1>
          <p className="text-2xl mb-8 font-medium">
            A modern shopping experience built with React, Tailwind CSS,
            Firebase, and JavaScript
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-md flex items-center">
              <RiExternalLinkLine className="w-5 h-5 mr-2" />
              View Live Demo
            </button>
            <button className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-md flex items-center">
              <FaGithub className="w-5 h-5 mr-2" />
              View Source Code
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <main className="container mx-auto">
        <div className="flex justify-between gap-2 p-1 bg-gray-100 rounded-lg mb-8">
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

        {/* Conditional Rendering */}
        {activeTab === "overview" && <EcommerceOverview />}
        {activeTab === "tech-stack" && <EcommerceTechStack />}
        {activeTab === "features" && <EcommerceFeatures />}
        {activeTab === "implementation" && <EcommerceImplementation />}
        {activeTab === "challenges" && <EcommerceChallenges />}
        {activeTab === "screenshots" && <EcommerceScreenshots />}
        {activeTab === "improvements" && <EcommerceImprovements />}
        {activeTab === "demo" && <EcommerceDemo />}
      </main>

      {/* Footer */}
      <footer className="bg-[#1b1a2b] border-t border-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <h3 className="text-lg font-semibold text-white">E-Commerce App</h3>
          <p className="text-white mb-4">
            A modern shopping experience showcasing full-stack development
            skills
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 flex items-center space-x-2 text-sm font-medium bg-white text-gray-700 border rounded-md hover:bg-gray-50"
            >
              <FaLink /> <span>Live Demo</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 flex items-center space-x-2 text-sm font-medium bg-white text-gray-700 border rounded-md hover:bg-gray-50"
            >
              <FaGithub /> <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Ecommerce;
