import React from "react";
import asset23 from "../assets/Group 23.png";
import asset24 from "../assets/Group 24.png";
import asset25 from "../assets/Group 25.png";
import asset26 from "../assets/Group 26.png";

const features = [
    { icon: asset23, alt: "Feature 1", bgColor: "#EFEAFF", text: "Web Application", description: "Lorem Ipsum is simply" },
    { icon: asset24, alt: "Feature 2", bgColor: "#ECFFDA", text: "SEO", description: "Lorem Ipsum is simply" },
    { icon: asset25, alt: "Feature 3", bgColor: "#DAE6FF", text: "AR/VR Solutions", description: "Lorem Ipsum is simply" },
    { icon: asset26, alt: "Feature 4", bgColor: "#FFE5DA", text: "Mobile Applications", description: "Lorem Ipsum is simply" },
];

const FeaturesSection = () => {

  return (

    <section
        id="about"
        className="w-full flex flex-col items-center text-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-40 py-12 max-w-screen-2xl mx-auto">
        {/* Features Grid */}
        <div className="w-full grid gap-6 sm:gap-8 md:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((f, i) => (
                <div
                    key={i}
                    className="flex items-start sm:items-center p-4 sm:p-5 md:p-6 bg-white w-full "
                >
                    <div
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: f.bgColor }}
                    >
                        <img src={f.icon} alt={f.alt} className="w-10 h-auto" />
                    </div>
                    <div className="ml-4 flex-1 text-left">
                        <p className="text-[16px] sm:text-[18px] md:text-[18px] font-medium text-black mb-1 truncate">
                            {f.text}
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base md:text-[16px] leading-relaxed truncate">
                            {f.description}
                        </p>
                    </div>

                </div>
            ))}
        </div>

        {/* Divider */}
       <hr className="border-t border-gray-300 my-8 w-full max-w-7xl" />



        {/* Heading */}
        <p className="text-[18px] sm:text-[20px] md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug mb-4 sm:mb-5 md:mb-6">
            Lorem Ipsum is simply dummy text of the printing.
        </p>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
            Lorem Ipsum has been the industry's standard dummy text.
        </p>
    </section>
  );
};

export default FeaturesSection;
