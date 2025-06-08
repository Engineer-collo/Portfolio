import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className=" mt-2 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">        <Link to="/" className="hover:text-blue-500 text-gray-700 transition"><span className='text-blue-500'>Engineer Collins</span></Link>
        </h1>

        {/* Desktop nav */}
        <nav className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:text-blue-500 text-gray-700 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-500 text-gray-700 transition">About</Link>
          <Link to="/projects" className="hover:text-blue-500 text-gray-700 transition">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500 text-gray-700 transition">Contact</Link>
        </nav>

        
    </header>
  );
};

export default Navbar;
