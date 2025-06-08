import {
    FaPython,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaDatabase,
  } from "react-icons/fa";
  import {
    SiDjango,
    SiPostgresql,
    SiMysql,
    
  } from "react-icons/si";
  
  export default function TechStackToolbox() {
    return (
      <div className="bg-gray-950 text-white py-10 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-teal-400">
          🧰 Explore My Tech Toolbox
        </h2>
        <p className="text-center mb-10 text-gray-300 max-w-2xl mx-auto">
          A curated collection of tools, languages, and platforms I use to design,
          develop, and deliver.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
  
          {/* Languages & Frameworks */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-teal-500/30 transition">
            <h3 className="text-xl font-semibold mb-4 text-teal-300">
              Languages & Frameworks
            </h3>
            <div className="flex justify-center gap-6 text-teal-200">
              <div className="flex flex-col items-center text-sm">
                <FaPython className="text-4xl mb-1" />
                <span>Python</span>
              </div>
              <div className="flex flex-col items-center text-sm">
                <FaJs className="text-4xl mb-1" />
                <span>JavaScript</span>
              </div>
              <div className="flex flex-col items-center text-sm">
                <FaReact className="text-4xl mb-1" />
                <span>React</span>
              </div>
              <div className="flex flex-col items-center text-sm">
                <SiDjango className="text-4xl mb-1" />
                <span>Django</span>
              </div>
            </div>
          </div>
  
          {/* Databases */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Databases</h3>
            <div className="flex justify-center gap-6 text-blue-200">
              <div className="flex flex-col items-center text-sm">
                <SiPostgresql className="text-4xl mb-1" />
                <span>PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center text-sm">
                <SiMysql className="text-4xl mb-1" />
                <span>MySQL</span>
              </div>
              <div className="flex flex-col items-center text-sm">
                <FaDatabase className="text-4xl mb-1" />
                <span>Databases</span>
              </div>
            </div>
          </div>
  
          {/* Version Control */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">
              Version Control
            </h3>
            <div className="flex justify-center gap-6 text-purple-200">
              <div className="flex flex-col items-center text-sm">
                <FaGitAlt className="text-4xl mb-1" />
                <span>Git</span>
              </div>
              <div className="flex flex-col items-center text-sm">
                <FaGithub className="text-4xl mb-1" />
                <span>GitHub</span>
              </div>
            </div>
          </div>
  
          {/* Development Tools */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-yellow-500/30 transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">
              Development Tools
            </h3>
            <div className="flex justify-center gap-6 text-yellow-200">
              <div className="flex flex-col items-center text-sm">
                <img class src="/vscode.png" alt="Vscode icon" />
                <span>VS Code</span>
              </div>
            </div>
          </div>
  
          {/* Bonus Tool */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/30 transition">
            <h3 className="text-xl font-semibold mb-4 text-pink-300">Bonus Tool</h3>
            <div className="flex justify-center gap-6 text-pink-200">
              <div className="flex flex-col items-center text-sm">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="picture.png"
                  alt="Profile"
                />
                <span>Me</span>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  