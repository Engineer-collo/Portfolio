import React from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="text-gray-800 font-sans">
      {/* Navbar */}
      <header className="bg-gray-900 text-white shadow">
        <Navbar/>
      </header>

{/* Hero Section */}
<section
  className="min-h-screen flex justify-center items-center px-4 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"
>
  <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-10 bg-white/100 p-10 rounded-xl shadow-xl">
    
    {/* Text Side */}
    <div>
      <h2 className="text-5xl font-bold mb-4">Hi, I'm <span className='text-blue-500'>Collins Likhomba</span>. 👋</h2>
      <p className="text-xl text-gray-600 mb-6">
        A Fullstack Web Developer | React & Tailwind CSS Expert
      </p>
      <p>
        Want to know more about me?&nbsp;
        <a
          href="https://www.canva.com/design/DAGnrx6Us70/tJE03xC6C3poQ3thohi8EQ/view?utm_content=DAGnrx6Us70&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h09a36c8a0e"
          className="bg-blue-600 text-white px-4 py-0.5 rounded-full hover:bg-blue-700 transition"
        >
          Download my CV here...
        </a>
      </p>
    </div>

    {/* Image Side */}
    <div className="w-48 h-48 overflow-hidden rounded-full border-4 border-blue-600 shadow-lg">
      <img
        src="/picture.png"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <Footer/>
      </footer>
    </div>
  );
};

export default HomePage;
