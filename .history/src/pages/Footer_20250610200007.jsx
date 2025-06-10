import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Logo or Name */}
        <div className="text-white text-2xl font-bold tracking-wide">
          <strong><i></i></strong>
        </div>


        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-400">
          <a
            href="https://github.com/Engineer-collo?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/collins-likhomba-7b364730a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/CollinsLikhomba"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:collinslikhomba@gmail.com"
            aria-label="Email"
            className="hover:text-red-500 transition"
            target='_blank'
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-gray-600 text-sm mt-8">
        &copy; {new Date().getFullYear()} Collins Likhomba. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
