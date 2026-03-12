import React from "react";
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
  const getIcon = () => {
    const iconProps = {
      size: 24,
      className: "text-claude-accent",
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

  return (
    <div className="card-base group hover:-translate-y-1">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-claude-accent/10 flex items-center justify-center mb-5 group-hover:bg-claude-accent/15 transition-colors duration-300">
        {getIcon()}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-claude-text mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-claude-text-secondary text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Features */}
      <div className="mb-5">
        <h4 className="text-xs font-semibold text-claude-text-muted uppercase tracking-wider mb-3">
          Key Features
        </h4>
        <div className="space-y-2">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-claude-text-secondary"
            >
              <span className="w-1 h-1 bg-claude-accent rounded-full shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="pt-4 border-t border-claude-border">
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium bg-claude-surface-alt text-claude-text-secondary px-2.5 py-1 rounded-md border border-claude-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
