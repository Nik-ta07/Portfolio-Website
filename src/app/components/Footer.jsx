'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    href: 'https://twitter.com/yourusername',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:your.email@example.com',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold heading-gradient">
              Portfolio
            </Link>
            <p className="text-gray-400 max-w-md">
              A passionate developer creating innovative solutions and building amazing web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-gray-400 hover:text-white transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nikita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}