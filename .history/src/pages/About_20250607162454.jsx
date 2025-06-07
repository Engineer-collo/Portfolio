import React from 'react';
import Navbar from '../components/Navbar';


const About = () => {
  return (
    <div>
        <Navbar/>
    <div className=" rounded-md mt-24 bg-gray-300 max-w-4xl mx-auto px-4 py-8">
      <h1 className="font-bold text-2xl mb-4 text-gray-800">About Me</h1>
      <p className="text-gray-700 leading-relaxed">
        Hello! I'm <span className="font-semibold">Engineer Collins Likhomba</span> — a Fullstack web developer and community builder passionate about creating meaningful, 
        user-focused digital experiences.

        <br /><br />
        My journey began with a curiosity for how things work and a deep desire to build. 
        Over time, that curiosity evolved into a full-stack development skill set, 
        working with tools like <span className='text-blue-500'> Python, Flask, SQLAlchemy, React, and Tailwind CSS</span>. 
        I enjoy crafting clean, responsive interfaces just as much as designing robust backend systems that power them.

        <br /><br />
        One of my proudest endeavors is developing platforms that deliver educational, 
        inspirational, and verified tech content — particularly for youth and learners who need guidance in today’s fast-paced digital world. 
        I strive to ensure that everything I build not only works efficiently but also adds real value to people's lives.

        <br /><br />
        Thank you for stopping by. If you're passionate about technology, learning, or building impactful solutions — let’s connect!
      </p>
    </div>
    </div>
  );
};

export default About;
