import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope
} from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  return (
    <aside className="fixed top-0 left-0 h-screen w-50 bg-black text-white flex flex-col items-center py-8 space-y-8 shadow-lg z-50">
      {/* Profile */}
      <div className="flex flex-col items-center space-y-2">
        <img
          src="picture.png"
          alt="Profile"
          className="h-16 w-16 rounded-full object-cover transition-transform duration-300 transform hover:scale-110"
        />
        <h2 className="text-lg font-bold text-blue-400">Engineer Collins</h2>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col space-y-4 w-full px-6 text-base">
        <Link
          to="/"
          className={`flex items-center gap-3 p-2 rounded hover:bg-gray-800 transition ${
            location.pathname === '/' ? 'bg-gray-800' : ''
          }`}
        >
          <FaHome /> Home
        </Link>
        <Link
          to="/about"
          className={`flex items-center gap-3 p-2 rounded hover:bg-gray-800 transition ${
            location.pathname === '/about' ? 'bg-gray-800' : ''
          }`}
        >
          <FaUser /> About
        </Link>
        <Link
          to="/projects"
          className={`flex items-center gap-3 p-2 rounded hover:bg-gray-800 transition ${
            location.pathname === '/projects' ? 'bg-gray-800' : ''
          }`}
        >
          <FaProjectDiagram /> Projects
        </Link>
        <Link
          to="/contact"
          className={`flex items-center gap-3 p-2 rounded hover:bg-gray-800 transition ${
            location.pathname === '/contact' ? 'bg-gray-800' : ''
          }`}
        >
          <FaEnvelope /> Contact
        </Link>
      </nav>
    </aside>
  );
};

export default Navbar;
