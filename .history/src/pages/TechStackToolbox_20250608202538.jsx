import {
    FaPython,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaDatabase,
    FaUserCog,
  } from "react-icons/fa";
  import {
    SiDjango,
    SiPostgresql,
    SiVisualstudiocode,
    SiMysql,
  } from "react-icons/si";
  
  export default function TechStackToolbox() {
    return (
      <div className="bg-gray-950 text-white py-10 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-teal-400">
          🧰 Explore My Tech Stack Toolbox
        </h2>
        <p className="text-center mb-10 text-gray-300 max-w-2xl mx-auto">
          A curated collection of tools, languages, and platforms I use to design, develop, and deliver.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
  
          {/* Languages & Frameworks */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-teal-500/30 transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-300">Languages & Frameworks</h3>
            <div className="flex justify-center gap-6 text-4xl text-teal-200">
              <FaPython title="Python" />
              <FaJs title="JavaScript" />
              <FaReact title="React" />
              <SiDjango title="Django" />
            </div>
          </div>
  
          {/* Databases */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Databases</h3>
            <div className="flex justify-center gap-6 text-4xl text-blue-200">
              <SiPostgresql title="PostgreSQL" />
              <SiMysql title="MySQL" />
              <FaDatabase title="General DB Knowledge" />
            </div>
          </div>
  
          {/* Version Control */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Version Control</h3>
            <div className="flex justify-center gap-6 text-4xl text-purple-200">
              <FaGitAlt title="Git" />
              <FaGithub title="GitHub" />
            </div>
          </div>
  
          {/* Development Tools */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-yellow-500/30 transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">Development Tools</h3>
            <div className="flex justify-center gap-6 text-4xl text-yellow-200">
              <SiVisualstudiocode title="VS Code" />
            </div>
          </div>
  
          {/* Bonus Tool */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/30 transition">
            <h3 className="text-xl font-semibold mb-4 text-pink-300">Bonus Tool</h3>
            <div className="flex justify-center gap-6 text-4xl text-pink-200">
              <FaUserCog title="Myself" />
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  