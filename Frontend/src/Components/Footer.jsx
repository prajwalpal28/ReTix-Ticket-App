import React from 'react';
import Logo from '../assets/Logo.png'; // Make sure the path to your logo is correct
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-900 py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-center gap-10 items-center border-t border-gray-300 pt-6">

                {/* Left Section (Logo and Title) */}
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <img src={Logo} alt="ReTix Logo" className="w-10" />
                    <h1 className="text-2xl font-bold text-[#3A5A40]">ReTix</h1>
                </div>

                {/* Divider */}
                <h1 className="hidden md:block">||</h1>

                {/* Social Icons Section */}
                <div className="flex space-x-6">
                    <FaFacebookF className="text-gray-400 hover:text-black cursor-pointer" size={20} />
                    <FaTwitter className="text-gray-400 hover:text-black cursor-pointer" size={20} />
                    <FaInstagram className="text-gray-400 hover:text-black cursor-pointer" size={20} />
                    <FaYoutube className="text-gray-400 hover:text-black cursor-pointer" size={20} />
                    <FaPinterest className="text-gray-400 hover:text-black cursor-pointer" size={20} />
                    <FaLinkedin className="text-gray-400 hover:text-black cursor-pointer" size={20} />
                </div>

            </div>

            {/* Bottom Section */}
            <div className="container mx-auto text-center text-sm text-gray-500 mt-6">
                <p>© Copyright 2031. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
