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
    <div className="flex flex-col text-center justify-center">
      <img
        src={image}
        alt={`${name}'s review`}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <div className="flex items-center justify-center mb-4">
        {[...Array(4)].map((_, index) => (
          <StarIcon key={index} className="w-6 h-6 text-yellow-400" />
        ))}
      </div>
      <h1 className="text-2xl text-white mt-2">{name}</h1>
      <p className="text-lg text-white opacity-75 mt-1 mb-2">{role}</p>
      <p className="text-sm text-white opacity-50 w-[90%] md:w-[50%] mx-auto">
        {text}
      </p>
    </div>
  );
};

export default ClientReview;
