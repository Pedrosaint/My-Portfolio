import { XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav: React.FC<Props> = ({ nav, closeNav }) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <a href="#home" className="nav-link-mobile" onClick={closeNav}>
          HOME
        </a>
        <a href="#about" className="nav-link-mobile" onClick={closeNav}>
          ABOUT
        </a>
        <a href="#services" className="nav-link-mobile" onClick={closeNav}>
          SERVICES
        </a>
        <a href="#skill" className="nav-link-mobile" onClick={closeNav}>
          SKILLS
        </a>
        <a href="#projects" className="nav-link-mobile" onClick={closeNav}>
          PROJECTS
        </a>
        <a href="#contact" className="nav-link-mobile" onClick={closeNav}>
          CONTACT
        </a>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
