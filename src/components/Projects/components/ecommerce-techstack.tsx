import React from "react";

const EcommerceTechstack: React.FC = () => {
  const techStack = [
    {
      name: "React",
      description:
        "For building a modular, component-based UI with hooks for state management",
      icon: "💻",
      color: "bg-blue-500",
    },
    {
      name: "Tailwind CSS",
      description:
        "For fast and responsive styling with utility-first approach",
      icon: "⚡",
      color: "bg-cyan-500",
    },
    {
      name: "Firebase",
      description:
        "For authentication, real-time database, and hosting infrastructure",
      icon: "🔥",
      color: "bg-orange-500",
    },
    {
      name: "JavaScript (ES6)",
      description:
        "Core logic and interactivity with modern syntax and features",
      icon: "🌐",
      color: "bg-yellow-500",
    },
  ];
  return (
    <div>
      <div className="space-y-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 flex items-center">
              💻 Technology Stack
            </h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 border border-gray-700 rounded-lg"
                >
                  <div
                    className={`p-2 rounded-lg ${tech.color} text-white text-xl`}
                  >
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{tech.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceTechstack;
