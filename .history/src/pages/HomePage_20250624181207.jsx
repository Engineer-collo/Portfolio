import React from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import TechStackToolbox from './TechStackToolbox';
import Testimonials from './Testimonials';
import AboutMeSummary from './AboutMeSummary';

const HomePage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 dark:text-gray-200 font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-gray-900 text-white shadow">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section
        className="pt-12 pb-12 flex-grow flex justify-center items-center px-4 
                   bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="flex flex-col md:flex-row items-center 
                        text-center md:text-left gap-10 
                        bg-gray-950 bg-opacity-90 p-6 md:p-10 rounded-xl shadow-xl 
                        max-w-6xl w-full text-white">
          {/* Text Side */}
          <div className="flex-1">
          <h1 className="text-xl md:text-4xl font-bold leading-relaxed text-center text-white px-4">
  Hey there! 👋 Bring the aroma of tech to life with{" "}
  <span className="text-orange-500 font-bold">Engineer Collins Likhomba</span> — a{" "}
  <span className="text-blue-400 font-bold">Software Engineer</span> and{" "}
  <span className="text-purple-400 font-bold">Full Stack Web Developer</span>{" "}
  ready to turn your ideas into scalable, stunning solutions.
</h1>

            <p className="text-lg pt-6 text-gray-300 text-center md:text-left">
              Want to know more about me?&nbsp;
              <a
                href="https://my-cv-henna-beta.vercel.app/"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my CV here...
              </a>
            </p>
          </div>

          {/* Image Side */}
          <div className="flex-shrink-0 w-52 h-52 sm:w-72 sm:h-72 rounded-full border-4 border-blue-600 shadow-lg overflow-hidden">
            <img
              src="/picture.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Me Summary */}
      <AboutMeSummary />

      {/* Tech Stack Toolbox */}
      <TechStackToolbox />

      {/* Why Choose Me Section */}
      <section className="bg-gray-950 py-20 px-6 md:px-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Why Choose Me?</h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-10">
          In a world full of developers, I stand out by blending{' '}
          <strong>technical precision</strong>, <strong>creative intuition</strong>, and a{' '}
          <strong>relentless drive to deliver</strong>. I don’t just build apps—I craft{' '}
          intuitive user experiences, scalable architectures, and seamless API integrations.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-gray-800">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Fullstack Power</h3>
            <p>
              From frontend interfaces to backend APIs, I build robust, responsive, and secure applications
              with modern tools and best practices.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-gray-800">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Real-World Experience</h3>
            <p>
              I’ve built platforms like Pixify and Moringa Community Hub—real applications with user authentication, 
              subscriptions, content management, and file uploads.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-gray-800">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Communication & Growth</h3>
            <p>
              I’m not just technical—I’m collaborative, a fast learner, and deeply passionate about tech mentorship 
              and community-building.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
