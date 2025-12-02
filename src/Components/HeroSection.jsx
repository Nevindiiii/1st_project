import React, { useEffect, useState } from "react";
import "../App.css";
import bgimg from "../assets/bgimg.png";
import elipse1 from "../assets/Ellipse 1.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full relative bg-[#1090CB1A]  flex items-center justify-center"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* LEFT CONTENT */}
        <div
          className={`w-full md:w-1/2 text-center md:text-left mt-6 sm:mt-10 md:mt-0 relative z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Radial Gradient Background */}
          <div className="absolute inset-0 mt-2 ml-2 z-0 bg-[radial-gradient(50.77%_50.77%_at_40%_50%,_#DED9FF_0%,_rgba(255,255,255,0)_100%)] pointer-events-none"></div>

          <h1
            className={`relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold leading-[100%] mb-6 sm:mb-8 md:mb-10 break-words transition-all duration-1200 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Experienced <span className="text-[#1090CB]">mobile and web</span>{" "}
            applications and website <br className="hidden sm:block" />
            builders measuring.
          </h1>

          <p
            className={`relative z-10 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0 transition-all duration-1200 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders with dozens of completed projects.
            We build and develop mobile applications for several top platforms,
            including Android & iOS.
          </p>

          <div
            className={`relative z-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-1200 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <button className="bg-[#1090CB] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-md text-sm sm:text-base md:text-lg shadow-md hover:bg-[#0d7fb0] hover:scale-105 hover:shadow-xl hover:-translate-y-1 active:scale-95 active:bg-[#0c6e96] focus:ring-2 focus:ring-sky-300 transition-all duration-300 group">
              Contact us
            </button>

            <button className="border border-[#1090CB] text-[#1090CB] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-md text-sm sm:text-base md:text-lg bg-white shadow-sm hover:bg-[#f0f9ff] hover:text-[#0d7fb0] hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-95 active:bg-[#e0f2fe] focus:ring-2 focus:ring-sky-200 transition-all duration-300">
              View more
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`w-full md:w-1/2 flex justify-center md:justify-end relative mt-6 sm:mt-10 md:mt-0 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          {/* Decorative Ellipse */}
          <img
            src={elipse1}
            alt="Ellipse1"
            className="absolute top-8 sm:top-12 md:top-16 lg:top-20 left-1/2 md:left-1/3 transform -translate-x-1/2 md:-translate-x-0 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 z-0 opacity-80 animate-pulse"
            style={{
              animation: "float 6s ease-in-out infinite",
            }}
          />

          {/* Main Hero Illustration */}
          <img
            src={bgimg}
            alt="Hero Illustration"
            className="relative w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] max-w-full z-10 hover:scale-105 transition-transform duration-500"
            style={{
              animation: "float 4s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
