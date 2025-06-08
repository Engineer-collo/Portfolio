import React from 'react';

export default function AboutMeSummary() {
  return (
    <section className="bg-gray-950 text-white py-12 px-6 md:px-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
          👋 A Quick Glance at Me
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m <span className="text-white font-semibold">Engineer Collins</span>, a passionate 
          <span className="text-teal-300 font-medium"> Full-Stack Developer</span> blending creativity, 
          clean code, and powerful tools like 
          <span className="text-white font-medium"> React, Django, and PostgreSQL</span> to build 
          meaningful digital experiences. I love building platforms that empower communities, inspire users, 
          and solve real-world problems.
        </p>
      </div>
    </section>
  );
}
