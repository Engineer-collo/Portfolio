import React from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="text-gray-800 font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-gray-900 text-white shadow">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section
        className="flex-grow flex justify-center items-center px-4 
                   bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="flex flex-col md:flex-row items-center 
                        text-center md:text-left gap-10 
                        bg-white bg-opacity-90 p-6 md:p-10 rounded-xl shadow-xl 
                        max-w-6xl w-full">
          {/* Text Side */}
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-blue-500">Collins Likhomba</span>. 👋
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              A Fullstack Web Developer | React & Tailwind CSS Expert
            </p>
            <p>
              Want to know more about me?&nbsp;
              <a
                href=""
                className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my CV here...
              </a>
            </p>
          </div>

          {/* Image Side */}
          <div className="flex-shrink-0 w-36 h-36 sm:w-48 sm:h-48 rounded-full border-4 border-blue-600 shadow-lg overflow-hidden">
            <img
              src="/picture.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
