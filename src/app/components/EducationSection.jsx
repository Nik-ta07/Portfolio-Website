"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCertificate, FaCode, FaDatabase, FaCloud } from 'react-icons/fa';

const education = [
  {
    title: "Rwanda Coding Academy",
    degree: "Software Engineering and Embedded Systems",
    period: "2022 - 2024",
    description: "Intensive training in full-stack development, focusing on modern web technologies and best practices.",
    icon: FaGraduationCap,
  },
  {
    title: "Youth Code Camp",
    degree: "Web Development Bootcamp",
    period: "2021",
    description: "Comprehensive training in web development fundamentals, including HTML, CSS, JavaScript, and basic backend development.",
    icon: FaCode,
  },
];

const certifications = [
  {
    title: "Cyberium Certification",
    issuer: "Cyberium Academy",
    date: "2023",
    description: "Advanced cybersecurity and ethical hacking certification.",
    icon: FaCertificate,
  },
  {
    title: "Database Management",
    issuer: "Rwanda Coding Academy",
    date: "2023",
    description: "Comprehensive training in database design, implementation, and management.",
    icon: FaDatabase,
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "Rwanda Coding Academy",
    date: "2023",
    description: "Introduction to cloud computing concepts and AWS services.",
    icon: FaCloud,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="section-padding bg-gray-900/50">
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
            Education & <span className="heading-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <edu.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{edu.title}</h4>
                    <p className="text-accent mb-2">{edu.degree}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <cert.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{cert.title}</h4>
                    <p className="text-accent mb-2">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
                    <p className="text-gray-300">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 