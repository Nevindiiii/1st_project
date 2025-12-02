import React from "react";
import "../App.css";
import vr from "../assets/vr.png";
import elipse3 from "../assets/Ellipse 3.png";
import happy from "../assets/happy 1.png";

const VRSection = () => (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 max-w-7xl mx-auto gap-8 md:gap-10 mt-8 md:mt-16">


        <div className="flex-1">

            <div className="flex gap-4 sm:gap-6 mt-8 md:mt-12">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#9208D3] rounded-full p-3 sm:p-4 flex-shrink-0">
                    <img src={happy} alt="image" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                    <h1 className="font-medium text-sm sm:text-base md:text-lg leading-relaxed">
                        Lorem ipsum is simply dummy text
                    </h1>


                    <p className="font-normal text-[#868686] text-xs sm:text-sm md:text-base leading-relaxed">
                        Lorem ipsum is simply dummy text
                    </p>
                </div>
            </div>



            <h1 className="font-semibold font-poppins text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center md:text-left my-6 md:my-10 leading-snug">
                <span className="text-[#1090CB]">Lorem Ipsum</span> is simply dummy <br />
                text of the printing.
            </h1>

            <p className="mt-4 sm:mt-6 md:mt-8 text-gray-500 font-normal font-poppins max-w-lg text-sm sm:text-base md:text-lg mx-auto md:mx-0 text-center md:text-left leading-relaxed">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
                applications and website builders with dozens of completed projects. We
                build and develop mobile applications for several top platforms,
                including Android & iOS.
            </p>
        </div>


        {/* Images */}
        <div className="flex-1 flex flex-col justify-center items-center relative mt-8 md:mt-0">

            {/* Decorative Ellipse */}
            <img
                src={elipse3}
                alt="Ellipse3"
                className="absolute top-12 sm:top-16 md:top-20 w-48 sm:w-64 md:w-80 lg:w-96 z-0 opacity-100"
            />

            {/* Main VR Image */}
            <img
                src={vr}
                alt="VR Illustration"
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto z-10 mt-6"
            />
        </div>
    </section>
);

export default VRSection;
