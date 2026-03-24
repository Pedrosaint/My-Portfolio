import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./components/ThemeContext";

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

  const hideNav =
    location.pathname.startsWith("/ecommerce") ||
    location.pathname.startsWith("/project/");

  return (
    <div className="overflow-x-hidden min-h-screen bg-claude-bg text-claude-text font-sans">
      {!hideNav && <MobileNav nav={nav} closeNav={closeNav} />}
      {!hideNav && <Nav openNav={openNav} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <Router>
      <AppContent />
      <ToastContainer />
    </Router>
  </ThemeProvider>
);

export default App;
