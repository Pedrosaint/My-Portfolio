import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./components/ThemeContext";

import {
  Nav,
  MobileNav,
  Contact,
  Footer,
  AboutView,
  ServicesView,
  ProjectView,
  Ecommerce,
  ProjectDetail,
} from "./components";
import SkillsView from "./components/Skills/view/Skills.view";
import TestimonalView from "./components/Testimonal/view/Testimonal.view";
import HeroView from "./components/Hero/view/Hero.view";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  const location = useLocation();

  const hideNav =
    location.pathname.startsWith("/ecommerce") ||
    location.pathname.startsWith("/project/");

  const showFooter =
    location.pathname !== "/" && !hideNav;

  return (
    <div className="overflow-x-clip min-h-screen bg-claude-bg text-claude-text font-sans">
      <ScrollToTop />
      {!hideNav && <MobileNav nav={nav} closeNav={closeNav} />}
      {!hideNav && <Nav openNav={openNav} />}

      <Routes>
        <Route path="/" element={<HeroView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/services" element={<ServicesView />} />
        <Route path="/skills" element={<SkillsView />} />
        <Route path="/projects" element={<ProjectView />} />
        <Route path="/testimonials" element={<TestimonalView />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>

      {showFooter && <Footer />}
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
