import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services: React.FC = () => {
    return (
      <div id='services' className="bg-[#121212] pt-[9rem] md:pt-[8rem] pb-[5rem]">
        <p className="heading">
          MY <span className="text-yellow-400">SERVICES</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-stretch gap-[3rem] mt-[4rem] text-white">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-4 uppercase font-semibold text-center p-[2rem] flex flex-col">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-medium flex-grow">
              I specialize in creating responsive and user-friendly web
              applications with modern frameworks like React.js, focusing on
              seamless UI/UX implementation, cross-browser compatibility,
              performance optimization, API integration, and providing ongoing
              maintenance and updates to ensure scalable and dynamic solutions.
            </p>
          </div>

          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem] flex flex-col">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              WEB 3(Crypto)
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-medium flex-grow">
              I focus on guiding and educating newbies to navigate the
              blockchain ecosystem with confidence. I simplify complex concepts,
              introduce innovative crypto projects, and empower individuals to
              explore the transformative potential of decentralized
              technologies.
            </p>
          </div>

          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-4 uppercase font-semibold text-center p-[2rem] flex flex-col">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-medium flex-grow">
              I work with Firebase for now
            </p>
          </div>
        </div>
      </div>
    );
}

export default Services