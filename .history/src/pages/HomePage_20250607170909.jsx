import React from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';

const skills = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://i.pinimg.com/736x/11/a7/b5/11a7b5fb70c24e5632f2baccce14603c.jpg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "SQLite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
];

const HomePage = () => {
  return (
    <div className="text-gray-800 font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-gray-900 text-white shadow">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section
        className=" pt-12 flex-grow flex justify-center items-center px-4 
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
                href="https://my-cv-henna-beta.vercel.app/"
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

      {/* Skills Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">My Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <p className="text-lg font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
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
