import Particles from "./Particles"
import bannerImage from "../assets/images/banner.jpg";
import TextEffects from "./TextEffects";
import Image from "../assets/images/img1.png"
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import cv from "../assets/files/MY CV.pdf"

const Hero: React.FC = () => {
  return (
    <>
      <div
        id="home"
        className="h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <Particles />
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
          <div>
            <h1 className="text-[35px] md:text-[50px] text-white font-bold">
              HI, I'M <span className="text-yellow-400">JUDE</span>
            </h1>
            <TextEffects />
            <p className="mt-[1.5rem] text-xl text-[#fff]">
              I’m passionate about building innovative and user-centric
              solutions that bring ideas to life. With expertise in front-end
              development, Transforming ideas into interactive and responsive
              digital experiences. 
            </p>
            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex-row items-center sm:space-x-6">
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
          </div>
          <div className="w-[500px] hidden bg-[#1e1e35] relative lg:flex items-center rounded-full h-[500px] overflow-hidden mt-[12vh]">
            <img src={Image} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero


















































{/* <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
          <div>
            <h1 className="text-5xl font-bold">Hi, I'm [Your Name]</h1>
            <p className="mt-4 text-xl">
              A Front-End Developer turning ideas into interactive experiences.
            </p>
            <a
              href="#projects"
              className="mt-6 inline-block px-8 py-3 bg-yellow-500 text-black rounded-full text-lg hover:bg-yellow-600 transition-all"
            >
              View My Work
            </a>
          </div>
        </section> */}