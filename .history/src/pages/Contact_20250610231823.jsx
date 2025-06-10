import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { showErrorToast, showSuccessToast, ToastContainerWrapper } from './Toast';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    emailjs.init('TnhB9lzlZl1ZJjJ8n'); // Initialize EmailJS
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_',
        'template_gg3nb59',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        }
      )
      .then(() => {
        showSuccessToast('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Email send error:', error);
        showErrorToast('Oops! Something went wrong. Please try again later.');
      });
  };

  return (
    <>
      <Navbar />
      <ToastContainerWrapper />

      <div className="min-h-screen bg-blue-50 pt-20 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Let's Connect!</h3>
              <p className="text-gray-700 mb-6">
                Whether you're reaching out for collaboration, questions, feedback, or just to say hi —
                I’m always happy to hear from fellow creators, clients, and dreamers!
              </p>

              <div className="space-y-4 text-gray-800">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-500" />
                  <a href="tel:+254743250838" className="hover:underline">+254 743 250 838</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-500" />
                  <a href="mailto:collinslikhomba@gmail.com" className="hover:underline">collinslikhomba@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Send Message 💌
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
