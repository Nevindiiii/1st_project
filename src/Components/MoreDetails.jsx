import React from "react";
import Frame26 from "../assets/Frame 26.png";

const squares = [
    {
        id: 1,
        title: "Lorem Ipsum is simply \n dummy text.",
        description:
            "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.",
        buttonText: "View More",
        bgColor: "bg-gray-200",
        textColor: "text-gray-800",
        buttonClass: "bg-[#1090CB] text-white hover:bg-sky-700",
    },
    {
        id: 2,
        title: "Lorem Ipsum is simply \n dummy text.",
        description:
            "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.",
        buttonText: "View More",
        bgColor: "bg-[#1090CB]",
        textColor: "text-white",
        buttonClass: "bg-white text-[#1090CB] hover:bg-[#f0f9ff]",
    },
];

const MoreDetails = () => (
    <section
        id="blog"
        className="w-full flex flex-col md:flex-row px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 mt-8 md:mt-12 max-w-7xl mx-auto justify-center items-stretch gap-6 md:gap-8"
    >
        {squares.map((square) => (
            <div
                key={square.id}
                className={`${square.bgColor} rounded-xl shadow-md flex flex-col items-center justify-center text-center w-full md:w-1/2 min-h-[350px] sm:min-h-[400px] p-6 sm:p-8 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl active:scale-95`}
            >
               <h2 className={`${square.textColor} font-poppins font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-center whitespace-pre-line mb-4 sm:mb-6`}>{square.title} </h2>

            <p className={`${square.textColor} text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-6 sm:mb-8`}>{square.description}</p>

                <div className="flex gap-4">
                    <button
                        className={`${square.buttonClass} px-6 sm:px-8 py-3 cursor-pointer rounded-lg text-sm sm:text-base font-medium transform transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:ring-2 focus:ring-sky-300`}
                    >
                        {square.buttonText}
                    </button>
                </div>
            </div>
        ))}
    </section>
);

export default MoreDetails;
