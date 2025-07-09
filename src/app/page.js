'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaSun, FaMoon } from 'react-icons/fa';
import Image from 'next/image';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/Nik-ta07',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/nikita-agahire-494a7a332/',
    label: 'LinkedIn',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:aganikita07@gmail.com',
    label: 'Email',
  },
  {
    icon: FaPhone,
    href: 'tel:+250795530492',
    label: 'Phone',
  },
];

export default function Home() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <>
      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
      </motion.button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-background to-background opacity-50 dark:opacity-50" />
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="heading-gradient">AGAHIRE Nikita</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 dark:text-gray-300 mb-8">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    1000,
                    'UI/UX Designer',
                    1000,
                    'Software Engineer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
              <p className="text-gray-400 dark:text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                I am a passionate full-stack developer with expertise in creating scalable web applications and elegant user interfaces. 
              
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#projects"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="/cv.pdf"
                  download
                  className="btn-outline flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="w-5 h-5" />
                  Download CV
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="hidden sm:inline">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-accent bg-gray-900/30">
                <Image
                  src="/hero-image.png"
                  alt="AGAHIRE Nikita"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}