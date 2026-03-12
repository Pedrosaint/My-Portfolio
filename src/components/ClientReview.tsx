import React from "react";
import { StarIcon } from "@heroicons/react/16/solid";

interface Props {
  name: string;
  role: string;
  image: string;
  text: string;
}

const ClientReview: React.FC<Props> = ({ name, role, image, text }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-xl mx-auto px-4">
      <img
        src={image}
        alt={`${name}'s review`}
        className="w-16 h-16 rounded-full object-cover border-2 border-claude-border mb-4"
      />
      <div className="flex items-center gap-0.5 mb-4">
        {[...Array(4)].map((_, index) => (
          <StarIcon key={index} className="w-4 h-4 text-claude-accent" />
        ))}
      </div>
      <p className="text-claude-text-secondary text-sm leading-relaxed mb-4 italic">
        "{text}"
      </p>
      <h4 className="text-base font-semibold text-claude-text">{name}</h4>
      <p className="text-sm text-claude-text-muted">{role}</p>
    </div>
  );
};

export default ClientReview;
