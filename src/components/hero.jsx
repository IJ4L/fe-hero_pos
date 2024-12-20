import React from "react";
import CanvasParticles from "./canvas";

const Hero = () => {
  return (
    <section id="hero" className="bg-primary h-[700px] w-full relative overflow-hidden">
      <CanvasParticles />
      <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-b from-transparent via-white/20 to-white"></div>
      <div className="relative w-full z-10 flex flex-col md:flex-row items-center justify-center md:space-x-36 h-5/6 mt-8 md:mt-10 xl:mt-14">
        <div className="flex flex-col items-start space-y-4">
          <h1 className="w-full md:w-auto text-center xl:text-start text-4xl md:text-5xl xl:text-7xl font-bold text-white text-shadow-follow">
            Manage your store
          </h1>
          <h2 className="w-full md:w-auto text-center xl:text-start text-4xl md:text-5xl xl:text-7xl font-bold text-secondary text-shadow-follow">
            in one app
          </h2>
          <div className="-z-50 w-full">
            <h3 className="animate-slide-up md:w-auto text-center md:text-start text-lg md:text-xl xl:text-2xl font-regular text-white">
              Pay roll, inventory, and more.
            </h3>
            <h3 className="animate-slide-up w-full md:w-auto text-center md:text-start md:text-xl text-lg xl:text-2xl font-regular text-white">
              Don't let your business suffer.
            </h3>
          </div>
          <div className="w-screen px-8 md:px-0 md:w-auto flex flex-col xl:flex-row space-y-2 xl:space-y-0 xl:space-x-4">
            <button
              aria-label="Download from Playstore"
              className="xl:flex xl:items-center bg-white text-secondary font-semibold px-10 py-3 space-x-3 text-md rounded-3xl hover:px-14 transition-all duration-300"
            >
              <img className="h-4" src="src\assets\icons\playstore.png" alt="playstore.png" />
              <p>Playstore</p>
            </button>
            <button
              aria-label="Download from App Store"
              className="xl:flex xl:items-center bg-secondary text-white font-semibold px-10 py-3 text-md rounded-3xl hover:px-14 transition-all duration-300"
            >
              App Store
            </button>
          </div>
          <p className="animate-slide-up w-full md:flex xl:items-start font-semibold text-white text-center">
            We Don't Store or Access Your Data
          </p>
        </div>
        <img
          className="hidden md:flex mt-8 size-80 hover:rotate-0 rotate-12 transition-transform duration-300"
          src="src/assets/images/report.svg"
          alt="Report"
        />
      </div>
    </section>
  );
};

export default Hero;
