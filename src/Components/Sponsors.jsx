import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";

const features = [image1, image2, image3, image4];


const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const Sponsors = () => {
  return (
    <motion.div
      className="relative w-full max-w-7xl mx-auto mt-8 sm:mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Title */}
      <motion.p
        className="text-black font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        You will be in good Company
      </motion.p>

      {/* Sponsor Logos */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
        {features.map((icon, i) => (
          <motion.div
            key={i}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex justify-center"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={logoVariants}
          >
            <img
              src={icon}
              alt={`Sponsor ${i + 1}`}
              className="w-full max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] object-contain hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sponsors;
