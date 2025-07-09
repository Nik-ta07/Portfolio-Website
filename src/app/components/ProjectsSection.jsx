"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const projects = [
    {
      title: 'Netflix Clone',
      description: 'A responsive web app that replicates Netflix’s core UI and experience, with category browsing, hover previews, and live movie data from TMDB.',
      image: '/images/Netfilx.png',
      tags: ['React', 'CSS/Tailwind', 'Axios', 'TMDB API'],
      github: 'https://github.com/Nik-ta07/react-movie-app',
      live: 'https://nik-ta07.github.io/react-movie-app/',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.',
      image: '/hero-image.png',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Nik-ta07/portfolio',
      live: 'https://nikita-agahire.vercel.app',
    },
    {
      title: 'Hotel Booking Management System (HBMS)',
      description: 'A robust, full-stack hotel booking management system built with Spring Boot and React, featuring secure authentication, role-based access control, and comprehensive booking management capabilities.',
      image: '/images/Booking.png',
      tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/Nik-ta07/Hotel_Booking_Management_System',
      live: '',
    },
    {
      title: 'Decentralized Todo List DApp',
      description: 'A blockchain-based Todo List DApp built with Truffle, React, and Ethereum smart contracts. Users can create, manage, and track tasks on the Ethereum blockchain.',
      image: '/images/Decentralized.png',
      tags: ['React.js', 'Solidity', 'Truffle', 'Ganache', 'Web3.js', 'MetaMask'],
      github: 'https://github.com/Nik-ta07/decentralized-todo-list',
      live: '',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="heading-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={ref}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-800 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;