import About from "./components/About";
import Hero from "./components/Hero"
import MobileNav from "./components/MobileNav";
import Nav from "./components/Nav"

import React, {useState} from "react";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonal";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)
  return (
    <>
      <div className="overflow-x-hidden">
        <div>
          {/* Navbar Section */}
          <MobileNav nav={nav} closeNav={closeNav} />
          <Nav openNav={openNav} />
          {/* Hero section */}
          <Hero />
          <div className="relative z-[30]">
            <About />
            <Services />
            <Skills />
            <Projects />
            <Testimonial />
            <Contact />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App