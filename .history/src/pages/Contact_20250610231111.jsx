import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { showErrorToast, showSuccessToast, ToastContainerWrapper } from './Toast';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    emailjs.init('TnhB9lzlZl1ZJjJ8n'); // 👈 Initialize here
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_jsqgmop',
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
      {/* ... your existing JSX code remains the same ... */}
    </>
  );
};

export default Contact;
