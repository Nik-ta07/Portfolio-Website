"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaJava,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Rwanda Coding Academy</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Youth Code Camp</li>
        <li>Cyberium</li>
      </ul>
    ),
  },
];

const skills = [
  { name: 'React', icon: FaReact, level: 90 },
  { name: 'Next.js', icon: SiNextdotjs, level: 85 },
  { name: 'TypeScript', icon: SiTypescript, level: 80 },
  { name: 'Node.js', icon: FaNodeJs, level: 85 },
  { name: 'Python', icon: FaPython, level: 80 },
  { name: 'Java', icon: FaJava, level: 75 },
  { name: 'Database', icon: FaDatabase, level: 75 },
  { name: 'Git', icon: FaGitAlt, level: 90 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="section-padding bg-gray-900/50">
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
            About <span className="heading-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Full Stack Developer & UI/UX Enthusiast
            </h3>
            <p className="text-gray-300">
              I am a passionate full-stack developer with a strong foundation in web technologies
              and a keen eye for creating beautiful, user-friendly interfaces. With several years
              of experience in the industry, I've worked on various projects ranging from small
              business websites to complex web applications.
            </p>
            <p className="text-gray-300">
              My approach combines technical expertise with creative problem-solving to deliver
              efficient and scalable solutions. I'm constantly learning and adapting to new
              technologies to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="card p-4">
                <h4 className="font-semibold text-accent">Experience</h4>
                <p className="text-gray-300">5+ Years</p>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-accent">Projects</h4>
                <p className="text-gray-300">20+ Completed</p>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-accent">Clients</h4>
                <p className="text-gray-300">15+ Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-4"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <skill.icon className="w-6 h-6 text-accent" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2 bg-accent rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;