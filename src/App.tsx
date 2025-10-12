// import React, { useState } from "react";
// import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
// import { ToastContainer } from "react-toastify";

// import Nav from "./components/Nav";
// import MobileNav from "./components/MobileNav";

// import Contact from "./components/Contact";
// import AboutView from "./components/About/view/About.view";
// import ServicesView from "./components/Services/view/Services.view";
// import SkillsView from "./components/Skills/view/Skills.view";
// import TestimonalView from "./components/Testimonal/view/Testimonal.view";
// import ProjectView from "./components/Projects/view/Project.view";
// import HeroView from "./components/Hero/view/Hero.view";
// import Ecommerce from "./components/Projects/components/Ecommerce";

// const Home: React.FC = () => {
//   return (
//     <>
//       <HeroView />
//       <div className="relative z-[30]">
//         <AboutView />
//         <ServicesView />
//         <SkillsView />
//         <ProjectView />
//         <TestimonalView />
//         <Contact />
//       </div>
//     </>
//   );
// };

// const App: React.FC = () => {
//   const [nav, setNav] = useState(false);
//   const openNav = () => setNav(true);
//   const closeNav = () => setNav(false);

//     import { useLocation } from "react-router-dom";
//     const location = useLocation();
//     const hideNav = location.pathname.startsWith("/ecommerce");

//   return (
//     <Router>
//       <div className="overflow-x-hidden">
//         {!hideNav && <MobileNav nav={nav} closeNav={closeNav} />}
//         {!hideNav && <Nav openNav={openNav} />}
//         <MobileNav nav={nav} closeNav={closeNav} />
//         <Nav openNav={openNav} />

//         <div className="">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/ecommerce" element={<Ecommerce />} />
//           </Routes>
//         </div>
//       </div>
//       <ToastContainer />
//     </Router>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  Nav,
  MobileNav,
  Contact,
  AboutView,
  ServicesView,
  ProjectView,
  Ecommerce,
  ProjectDetail,
} from "./components";
import SkillsView from "./components/Skills/view/Skills.view";
import TestimonalView from "./components/Testimonal/view/Testimonal.view";
import HeroView from "./components/Hero/view/Hero.view";

const Home: React.FC = () => (
  <>
    <HeroView />
    <div className="relative z-[30]">
      <AboutView />
      <ServicesView />
      <SkillsView />
      <ProjectView />
      <TestimonalView />
      <Contact />
    </div>
  </>
);

import { useLocation } from "react-router-dom";
const AppContent: React.FC = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  const location = useLocation();

  // hide nav on any project detail route
  const hideNav =
    location.pathname.startsWith("/ecommerce") ||
    location.pathname.startsWith("/project/");

  return (
    <div className="overflow-x-hidden">
      {!hideNav && <MobileNav nav={nav} closeNav={closeNav} />}
      {!hideNav && <Nav openNav={openNav} />}

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
    <ToastContainer />
  </Router>
);

export default App;
