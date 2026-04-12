import React from "react";
import TextEffects from "./TextEffects";
import Image from "../../../assets/images/img1.png";
import {
  ArrowDownTrayIcon,
  ChevronRightIcon,
} from "@heroicons/react/16/solid";
import cv from "../../../assets/files/JUDE CV.pdf";
import { projectsData } from "../../Projects/data/projectsData";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-claude-bg overflow-hidden"
    >
      {/* Subtle background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-claude-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-amber-100/40 dark:bg-amber-900/20 rounded-full blur-3xl" />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 max-w-xl">
            {/* Badge */}
            <div className="">
              <span className="text-xs font-medium text-green-700 dark:text-green-400 tracking-wide">
                Available for work
              </span>
              <div className="h-0.5 w-20 bg-claude-accent" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-claude-text">
                Hi, I'm <span className="text-claude-accent">Jude</span>
              </h1>

              <div className="h-12 sm:h-14 md:h-16">
                <TextEffects />
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-claude-text-secondary leading-relaxed">
              Frontend Engineer building production-ready web applications. I
              specialize in React, TypeScript, and modern UI frameworks to
              deliver scalable, high-performance digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = cv;
                  link.download = "NWAOLISA JUDE CHIDERA CV.pdf";
                  link.click();
                }}
                className="group px-6 py-3.5 bg-claude-accent text-white font-medium rounded-xl hover:bg-claude-accent-hover transition-all duration-300 shadow-soft hover:shadow-card"
              >
                <span className="flex items-center justify-center gap-2.5">
                  <span>Download CV</span>
                  <ArrowDownTrayIcon className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </span>
              </button>

              <a
                href="#projects"
                className="group px-6 py-3.5 bg-claude-surface text-claude-text font-medium rounded-xl border border-claude-border hover:border-claude-accent/30 hover:shadow-card transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>View Projects</span>
                  <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-claude-text">
                  4+
                </div>
                <div className="text-sm text-claude-text-muted">
                  Years Experience
                </div>
              </div>
              <div className="w-px h-10 bg-claude-border" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-claude-text">
                  {projectsData.length}+
                </div>
                <div className="text-sm text-claude-text-muted">
                  Projects Built
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Accent shape behind image */}
              <div className="absolute -inset-4 bg-claude-accent/5 rounded-3xl rotate-3" />
              <div className="absolute -inset-4 bg-claude-surface-alt rounded-3xl -rotate-2" />

              <div className="relative w-[350px] h-[400px] xl:w-[400px] xl:h-[450px] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={Image}
                  alt="Jude Nwaolisa - Frontend Engineer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-claude-dark/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
