import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold">Engineer Collins</h2>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
