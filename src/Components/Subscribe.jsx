import React, { useState } from "react";
import "../App.css";
import star from "../assets/star 1.png";
import pai from "../assets/pai chart 1.png";

const Subscribe = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // adjust tilt strength
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setOffset({ x, y });
    };

    const handleMouseLeave = () => {
        setOffset({ x: 0, y: 0 });
    };

    return (
        <section
            id="contact"
            className="relative w-full flex flex-col items-center justify-center bg-[#1090CB1A] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 text-center max-w-7xl mx-auto"
        >
            {/* Decorative Images */}
            <img
                src={star}
                alt="Star"
                className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-8 md:left-16 lg:left-24 w-8 sm:w-10 md:w-12 lg:w-14 h-auto animate-bounce-slow"
            />

            <img
                src={pai}
                alt="Pie Chart"
                className="absolute top-8 sm:top-10 md:top-12 right-4 sm:right-8 md:right-16 lg:right-24 w-6 sm:w-8 md:w-10 lg:w-12 h-auto animate-spin-slow"
            />

            {/* Interactive Heading */}
            <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-black leading-snug text-interactive"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `rotateX(${-offset.y}deg) rotateY(${offset.x}deg)`,
                    transition: "transform 0.2s ease",
                }}
            >
                Lorem Ipsum is simply dummy <br /> text of the printing.
            </h2>

            {/* Subscription Form */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-full sm:max-w-2xl mx-auto">
  {/* Email Input */}
  <input
    type="email"
    placeholder="Enter your email address here..."
    className="flex-1 w-full sm:w-[550px] bg-white px-4 sm:px-5 py-3 rounded-lg border border-gray-300 
               focus:outline-none focus:ring-2 focus:ring-[#555656] focus:border-[#1090CB] 
               placeholder-gray-400 shadow-sm transition-all duration-300 hover:shadow-md 
               text-sm sm:text-base"
  />

  {/* Subscribe Button */}
  <button
    className="bg-[#000000] text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-[#343434] 
               hover:scale-105 active:scale-95 transition-transform duration-300 text-sm sm:text-base 
               font-semibold shadow-md hover:shadow-lg whitespace-nowrap mt-2 sm:mt-0"
  >
    Subscribe
  </button>
</div>


        </section>
    );
};

export default Subscribe;
