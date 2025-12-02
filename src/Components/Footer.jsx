import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    const aboutLinks = ["Lorem", "Portfolio", "Careers", "Contact us"];

    // Use React icon components instead of class strings
    const socialLinks = [
        { href: "#", icon: <FaFacebookF /> },
        { href: "#", icon: <FaInstagram /> },
        { href: "#", icon: <FaTwitter /> },
        { href: "#", icon: <FaLinkedinIn /> },
    ];

    return (
        <footer className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white animate-fade-in">
            <div className="max-w-7xl mx-auto py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {/* Logo & Description */}
                <div className="text-center sm:text-left">
                    <h2 className="text-sky-700 font-bold text-lg sm:text-xl mb-3">LOGO</h2>
                    <p className="text-sm sm:text-base mb-4 text-gray-600 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className="text-sm sm:text-base text-gray-500">@Lorem</p>
                </div>

                {/* About Us Links */}
                <div className="text-center sm:text-left">
                    <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-3">About us</h3>
                    <ul className="space-y-3 text-sm sm:text-base flex flex-col items-center sm:items-start">
                        {aboutLinks.map((link, index) => (
                            <li key={index} className="transform hover:translate-x-1 transition-transform duration-200">
                                <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="text-center sm:text-left">
                    <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-3">Contact us</h3>
                    <p className="text-sm sm:text-base mb-3 text-gray-600 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className="text-sm sm:text-base font-medium text-gray-700">+908 89097 890</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex flex-col items-center sm:items-end justify-start col-span-1 sm:col-span-2 lg:col-span-1">
                    <div className="flex flex-col items-center sm:items-end justify-between h-full">
                        <div className="flex space-x-3 sm:space-x-4 mt-6 sm:mt-auto">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 hover:scale-110 transition-all duration-200 bg-gray-50 cursor-pointer text-black text-base sm:text-lg"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
