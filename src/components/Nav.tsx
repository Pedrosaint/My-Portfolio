// import { Bars3Icon } from "@heroicons/react/16/solid";

// interface Props {
//     openNav: () => void;
// }
// const Nav: React.FC<Props> = ({openNav}) => {
//   return (
//     <>
//       <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
//         <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
//           <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
//             WEB
//             <span className="text-yellow-600">DEV</span>
//           </h1>
//           <div className="nav-link">HOME</div>
//           <div className="nav-link">SERVICES</div>
//           <div className="nav-link">ABOUT</div>
//           <div className="nav-link">PROJECT</div>
//           <div className="nav-link">BLOG</div>
//           <div className="nav-link">CONTACT</div>
//           <div onClick={openNav}>
//             <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-200" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;






import { Bars3Icon } from "@heroicons/react/24/solid";

interface Props {
  openNav: () => void;
}

const Nav: React.FC<Props> = ({ openNav }) => {
  return (
    <>
      <div className="w-[100%] fixed z-[1000] top-0 h-[12vh] bg-[#141c27] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
          <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
            WEB
            <span className="text-yellow-600">DEV</span>
          </h1>
          <a href="#home" className="nav-link">
            HOME
          </a>
          <a href="#about" className="nav-link">
            ABOUT
          </a>
          <a href="#services" className="nav-link">
            SERVICES
          </a>
          <a href="#skill" className="nav-link">
            SKILLS
          </a>
          <a href="#projects" className="nav-link">
            PROJECTS
          </a>
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
          <div onClick={openNav}>
            <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-200" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
