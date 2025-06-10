import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaProjectDiagram, FaEnvelope, FaHome } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="mt-2 bg-white shadow-md relative z-50">
      <div className='flex'> <h1 className='text'>+254 743250838</h1>
X      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-950">
          <Link to="/" className="hover:text-blue-500 transition">
            <span className="text-blue-500">Engineer Collins</span>
          </Link>
        </h1>

        {/* Desktop nav */}
        <nav className="space-x-6 hidden md:flex text-gray-950">
          <Link to="/" className="flex items-center gap-1 hover:text-blue-500 transition text-orange-500"><FaHome /> Home</Link>
          <Link to="/about" className="flex items-center gap-1 hover:text-blue-500 transition"><FaUser /> About</Link>
          <Link to="/projects" className="flex items-center gap-1 hover:text-blue-500 transition"><FaProjectDiagram /> Projects</Link>
          <Link to="/contact" className="flex items-center gap-1 hover:text-blue-500 transition"><FaEnvelope /> Contact</Link>
          <Link to="/skills" className="flex items-center gap-1 hover:text-blue-500 transition"> skills</Link>

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
        <div className="fixed top-0 left-0 h-screen w-3/4 bg-white z-50 shadow-lg px-6 py-8 md:hidden">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-950">
            <FaTimes className="h-6 w-6" />
          </button>
          <nav className="space-y-6 mt-10 text-gray-950 text-lg">
            <Link to="/" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-500"><FaHome /> Home</Link>
            <Link to="/about" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-500"><FaUser /> About</Link>
            <Link to="/projects" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-500"><FaProjectDiagram /> Projects</Link>
            <Link to="/contact" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-500"><FaEnvelope /> Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
