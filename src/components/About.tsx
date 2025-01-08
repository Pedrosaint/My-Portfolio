// src/components/About.tsx

import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import React from "react";
import Image from "../assets/images/img2.jpg"
import cv from "../assets/files/MY CV.pdf";

const About: React.FC = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[9rem] md:pt-[8rem]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[30px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              I'm a passionate front-end developer with experience in React,
              JavaScript, TypeScript, and modern UI design principles. I love
              creating intuitive and responsive web applications.
            </p>
          </div>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              I focus on guiding and educating newbies to navigate the
              blockchain ecosystem with confidence. I simplify complex concepts,
              introduce innovative crypto projects, and empower individuals to
              explore the transformative potential of decentralized
              technologies."
            </p>
          </div>
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = cv;
              link.download = "My_CV.pdf";
              link.click();
            }}
            className="px-[1rem] hover:bg-yellow-400 transition-all duration-200 py-[0.8rem] text-[16px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 rounded-md"
          >
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.4rem] h-[1.5rem] text-black" />
          </button>
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <img
            src={Image}
            alt=""
            className="relative z-[11] w-full h-full object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;