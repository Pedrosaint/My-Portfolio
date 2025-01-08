// src/components/Skills.tsx

import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";
import SkillsLanguageOne from "./SkillsLanguageOne";

const Skills: React.FC = () => {
  return (
    <>
      <div id="skill" className="pt-[9rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
        <h1 className="heading">
          Education & <span className="text-yellow-400">Skill</span>
        </h1>
        <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
          <div>
            <SkillsItem
              title="Developer"
              year="2019 - 2023"
              text="Utilized HTML and CSS to build responsive, user-friendly web pages. Focused on creating clean, semantic markup and styled components with modern design principles to ensure consistency across different devices."
            />

            <SkillsLanguageOne
              skill1="html"
              skill2="css"
              skill3="javascript"
              level1="w-[91%]"
              level2="w-[88%]"
              level3="w-[80%]"
            />
          </div>
          <div>
            <SkillsItem
              title="React Developer"
              year="2023 - present"
              text="Started using React.js to build dynamic, component-based web applications, and adopted Tailwind CSS for efficient, utility-first styling. Focused on improving UI responsiveness and development speed."
            />
            <SkillsLanguage
              skill1="React Js"
              skill2="tailwind"
              skill3="javascript"
              skill4="typescript"
              level1="w-[91%]"
              level2="w-[88%]"
              level3="w-[80%]"
              level4="w-[72%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;













































//  <section id="skills" className="py-20 px-6">
//       <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
//         <div className="text-center">
//           <h3 className="text-xl font-semibold">React</h3>
//         </div>
//         <div className="text-center">
//           <h3 className="text-xl font-semibold">TypeScript</h3>
//         </div>
//         <div className="text-center">
//           <h3 className="text-xl font-semibold">Tailwind CSS</h3>
//         </div>
//         <div className="text-center">
//           <h3 className="text-xl font-semibold">Firebase</h3>
//         </div>
//       </div>
//     </section>