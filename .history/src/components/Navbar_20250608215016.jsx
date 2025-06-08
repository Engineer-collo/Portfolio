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

        {/* Mobile menu toggle */}
<div className="md:hidden">
  <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
      />
    </svg>
  </button>
</div>

{/* Mobile nav links */}
{isOpen && (
  <div className="fixed top-0 left-0 h-screen w-3/4 bg-white z-50 shadow-md p-6 md:hidden">
    <nav className="space-y-4 mt-10">
      <Link to="/about" className="block text-gray-700 text-lg hover:text-blue-500">About</Link>
      <Link to="/projects" className="block text-gray-700 text-lg hover:text-blue-500">Projects</Link>
      <Link to="/contact" className="block text-gray-700 text-lg hover:text-blue-500">Contact</Link>
    </nav>
  </div>
)}

    </header>
  );
};

export default Navbar;
