import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-20 mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
            About Me
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            👋 Hey there! I'm <span className="font-semibold text-blue-600">Engineer Collins Likhomba</span>, a passionate and curious <span className="font-bold">Fullstack Web Developer</span> with a vision to build impactful digital experiences and empower communities through technology.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                My journey began with a fascination for how software can change lives. Today, I use that passion to craft intuitive user interfaces with <span className="font-semibold text-blue-500">React</span> and <span className="font-semibold text-blue-500">Tailwind CSS</span>, and build secure, efficient APIs using <span className="font-semibold text-green-700">Python, Flask, Django</span>, and <span className="font-semibold text-yellow-600">SQLAlchemy</span>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                I specialize in building responsive web apps, authentication systems, content platforms, and tools that support learning, community, and creativity. I believe in clean code, lifelong learning, and inclusive innovation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I’m not coding, I’m mentoring others, engaging in tech communities, or working on passion projects like <span className="italic">Pixify</span> and the <span className="italic">Moringa Community Hub</span> — platforms aimed at inspiring the next generation of tech thinkers.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-4">🧠 Quick Facts</h2>
              <ul className="space-y-3 text-gray-700 text-base list-disc list-inside">
                <li>💻 Fullstack: React, Flask, Django, PostgreSQL</li>
                <li>🎨 UI/UX Focus: Clean, accessible, responsive design</li>
                <li>🚀 Built real-world platforms from scratch</li>
                <li>🌍 Advocate for tech inclusion & youth empowerment</li>
                <li>📚 Constant learner with a curious mind</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">✨ Let’s Build the Future Together</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Whether you’re hiring, collaborating, or just exploring — I’d love to hear from you.
              Let’s turn ideas into powerful, meaningful, and beautiful realities.
            </p>
            <a
              href="mailto:collinslikhomba@gmail.com"
              target='_blank'
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
            >
              Connect With Me 💬
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
