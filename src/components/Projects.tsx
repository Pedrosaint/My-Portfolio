import React from "react";
import Image from "../assets/images/image.jpg";

const Projects: React.FC = () => {
  return (
    <>
      <div
        id="projects"
        className="bg-[#02050a] pt-[9rem] md:pt-[8rem] pb-[15rem]"
      >
        <h1 className="heading text-center text-4xl font-bold text-white">
          PRO<span className="text-yellow-400">JECTS</span>
        </h1>
        <div className="w-[90%] mx-auto pt-[3rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
          {/* Example Project Card */}
          <div className="bg-gray-800 rounded-lg shadow-lg transform hover:-translate-y-3 transition-all duration-300 overflow-hidden">
            <img
              src={Image}
              alt="E-Commerce App"
              className="object-cover w-full h-180px] sm:h-[2500px] md:h-[200px] p-2 rounded-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white text-center mb-3">
                E-Commerce App
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                A fully functional e-commerce application with product
                categories, cart persistence, and a dynamic shopping experience with its dashboard for the Admin.
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
