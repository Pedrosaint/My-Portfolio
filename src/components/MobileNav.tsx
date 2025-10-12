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
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-6 sm:gap-8">
        <a
          href="#home"
          className="nav-link-mobile text-lg sm:text-xl"
          onClick={closeNav}
        >
          HOME
        </a>
        <a
          href="#about"
          className="nav-link-mobile text-lg sm:text-xl"
          onClick={closeNav}
        >
          ABOUT
        </a>
        <a
          href="#services"
          className="nav-link-mobile text-lg sm:text-xl"
          onClick={closeNav}
        >
          SERVICES
        </a>
        <a
          href="#skill"
          className="nav-link-mobile text-lg sm:text-xl"
          onClick={closeNav}
        >
          SKILLS
        </a>
        <a
          href="#projects"
          className="nav-link-mobile text-lg sm:text-xl"
          onClick={closeNav}
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className="nav-link-mobile text-lg sm:text-xl"
          onClick={closeNav}
        >
          CONTACT
        </a>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[1000000] cursor-pointer top-4 right-4 sm:top-8 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 text-yellow-400"
      >
        <XMarkIcon className="w-full h-full" />
      </div>
    </div>
  );
};

export default MobileNav;
