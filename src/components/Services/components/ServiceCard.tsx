import React, { useState } from "react";
import { Code, Terminal, Sparkles } from "lucide-react";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  color: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    const iconProps = {
      size: 48,
      className:
        "mx-auto text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 sm:w-16 sm:h-16",
    };

    switch (service.icon) {
      case "CodeBracketSquareIcon":
        return <Code {...iconProps} />;
      case "CommandLineIcon":
        return <Terminal {...iconProps} />;
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  const gradientMap: Record<string, string> = {
    "bg-blue-700": "from-blue-600 to-blue-800",
    "bg-orange-700": "from-orange-600 to-orange-800",
    "bg-green-700": "from-green-600 to-green-800",
    "bg-red-700": "from-red-600 to-red-800",
    "bg-purple-700": "from-purple-600 to-purple-800",
  };

  const gradient = gradientMap[service.color] || "from-blue-600 to-blue-800";

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div
        className={`h-full bg-gradient-to-br ${gradient} rounded-2xl p-6 sm:p-8 shadow-2xl 
        transform transition-all duration-500 ease-out
        hover:scale-105 hover:shadow-3xl
        ${service.id === "frontend" ? "hover:-rotate-2" : "hover:rotate-2"}
        relative overflow-hidden backdrop-blur-sm`}
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse delay-150"></div>
        </div>

        {/* Shimmer Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
          transform -translate-x-full transition-transform duration-1000 ease-out
          ${isHovered ? "translate-x-full" : ""}`}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div className="mb-4 sm:mb-6 transform transition-transform duration-500 group-hover:scale-110">
            {getIcon()}
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 text-center uppercase tracking-wide">
            {service.title}
          </h2>

          {/* Description */}
          <p className="text-gray-100 text-center mb-4 sm:mb-6 leading-relaxed opacity-90 text-sm sm:text-base">
            {service.description}
          </p>

          {/* Divider */}
          <div className="w-12 sm:w-16 h-1 bg-white/30 mx-auto mb-4 sm:mb-6 rounded-full"></div>

          {/* Key Features */}
          <div className="mb-4 sm:mb-6 flex-grow">
            <h3 className="text-xs sm:text-sm font-bold text-white/90 mb-2 sm:mb-3 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></span>
              KEY FEATURES
            </h3>
            <div className="space-y-1 sm:space-y-2">
              {service.features.slice(0, 4).map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-xs sm:text-sm text-gray-100 opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mt-1 sm:mt-1.5 flex-shrink-0"></span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-auto pt-3 sm:pt-4 border-t border-white/20">
            <h3 className="text-xs font-bold text-white/90 mb-2 sm:mb-3 text-center tracking-wider">
              TECH STACK
            </h3>
            <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
              {service.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="text-xs font-medium bg-white/20 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full
                  transform transition-all duration-300 hover:scale-110 hover:bg-white/30
                  border border-white/30"
                >
                  {tech}
                </span>
              ))}
              {service.technologies.length > 3 && (
                <span className="text-xs font-medium text-white/80 px-1 py-1 sm:px-2 sm:py-1.5 flex items-center">
                  +{service.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full transform transition-transform duration-500 group-hover:scale-150"></div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
