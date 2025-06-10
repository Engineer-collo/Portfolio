import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaProjectDiagram, FaEnvelope, FaHome } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md relative z-50">
      {/* Top Contact Info */}
      <div className=" bg-green-500  text-sm md:text-base py-3 px-4 flex flex-wrap items-center gap-4 md:gap-10 border-b border-gray-200">
        <div className=" flex items-center gap-2">
          <img className="h-5" src="/call.png" alt="Call Icon" />
          <a target="_blank" rel="noopener noreferrer" href="tel:+254743250838" className="text-white hover:underline">
            +254 743 250 838
          </a>
        </div>
        <div className="flex items-center gap-2">
          <img className="h-5" src="/email.png" alt="Email Icon" />
          <a target="_blank" rel="noopener noreferrer" href="mailto:collinslikhomba@gmail.com" className="text-black hover:underline">
            collinslikhomba@gmail.com
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-950">
          <Link to="/" className="hover:text-blue-500 transition">
            <span className="text-blue-500">Engineer Collins</span>
          </Link>
        </h1>

        {/* Desktop nav */}
        <nav className="space-x-6 hidden md:flex text-gray-950 font-medium">
          <Link to="/" className="flex items-center gap-1 hover:text-blue-500 transition text-orange-500"><FaHome /> Home</Link>
          <Link to="/about" className="flex items-center gap-1 hover:text-blue-500 transition"><FaUser /> About</Link>
          <Link to="/projects" className="flex items-center gap-1 hover:text-blue-500 transition"><FaProjectDiagram /> Projects</Link>
          <Link to="/contact" className="flex items-center gap-1 hover:text-blue-500 transition"><FaEnvelope /> Contact</Link>
          <Link to="/skills" className="flex items-center gap-1 hover:text-blue-500 transition">Skills</Link>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-950 focus:outline-none">
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav links */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-3/4 bg-white z-50 shadow-lg px-6 py-8 md:hidden transition-all">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-950">
            <FaTimes className="h-6 w-6" />
          </button>
          <nav className="space-y-6 mt-10 text-gray-950 text-lg">
            <Link to="/" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-500"><FaHome /> Home</Link>
            <Link to="/about" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-500"><FaUser /> About</Link>
            <Link to="/projects" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-500"><FaProjectDiagram /> Projects</Link>
            <Link to="/contact" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-500"><FaEnvelope /> Contact</Link>
            <Link to="/skills" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-500">Skills</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
