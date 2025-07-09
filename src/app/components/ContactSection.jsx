'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      await emailjs.send(
        'service_vopvpdh',
        'template_bglmcid',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'KqaF14GeLGBVmGPF9'
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'aganikita07@gmail.com',
      href: 'mailto:aganikita07@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+250 795 530 492',
      href: 'tel:+250795530492',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Nikita Agahire',
      href: 'https://www.linkedin.com/in/nikita-agahire-494a7a332/',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: '@Nik-ta07',
      href: 'https://github.com/Nik-ta07',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="heading-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out to me for any questions or opportunities. I'm always
                open to discussing new projects, creative ideas, or opportunities to be part
                of your vision.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[var(--text)] hover:text-[var(--primary-dark)] dark:text-gray-300 dark:hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className="w-6 h-6 text-accent group-hover:text-[var(--primary-dark)] dark:group-hover:text-white transition-colors" />
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    <p className="text-gray-400 group-hover:text-[var(--primary-dark)] dark:group-hover:text-white transition-colors">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-500/20 text-green-300'
                      : status.type === 'error'
                      ? 'bg-red-500/20 text-red-300'
                      : 'bg-blue-500/20 text-blue-300'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <motion.button
                type="submit"
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 