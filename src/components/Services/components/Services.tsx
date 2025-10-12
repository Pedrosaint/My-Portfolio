import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../data/servicesData";
import { Sparkles } from "lucide-react";

const Services: React.FC = () => {
  return (
    <div
      id="services"
      className="bg-[#121212] pt-[9rem] md:pt-[8rem] pb-[5rem]"
    >
      <div className="text-center mb-12 sm:mb-16">
        {" "}
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles className="text-yellow-400 animate-pulse w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Services
            </span>
          </h1>
          <Sparkles className="text-yellow-400 animate-pulse w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] sm:w-[85%] lg:w-[80%] mx-auto items-stretch gap-6 sm:gap-8 lg:gap-[3rem] mt-8 sm:mt-12 lg:mt-[4rem] text-white">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
