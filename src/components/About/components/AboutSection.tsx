import React from "react";
import { AboutSection as AboutSectionType } from "../data/aboutData";

interface AboutSectionProps {
  section: AboutSectionType;
  index: number;
}

const AboutSection: React.FC<AboutSectionProps> = ({ section }) => {
  return (
    <div className="mb-[3rem] flex items-center md:space-x-10">
      <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-yellow-400 mb-2">
          {section.title}
        </h3>
        <p className="text-[19px] text-justify text-slate-300 md:w-[80%]">{section.content}</p>
      </div>
    </div>
  );
};

export default AboutSection;
