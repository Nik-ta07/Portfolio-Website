'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaUserCircle } from 'react-icons/fa';

const testimonials = [
  {
    name: "Sarah    Mukashema",
    role: "Senior Product Manager",
    content: "Nikita is an exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding. They were instrumental in developing our e-commerce platform, implementing complex features with clean, maintainable code.",
    avatar: FaUserCircle,
  },
  {
    name: "Uwera Claudette",
    role: "Tech Lead",
    content: "Working with Nikita has been a pleasure. Their expertise in both frontend and backend development, combined with their strong UI/UX skills, makes them a valuable asset to any team. They're always willing to help others and share their knowledge.",
    avatar: FaUserCircle,
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    content: "Nikita's ability to translate design concepts into functional, beautiful interfaces is impressive. They have a great eye for detail and always ensure the user experience is smooth and intuitive. Their collaboration skills make them a joy to work with.",
    avatar: FaUserCircle,
  },
  {
    name: "David Kim",
    role: "Project Manager",
    content: "I had the pleasure of working with Nikita on a software project, and I was truly impressed by her skills and professionalism. As a software engineer and UI/UX designer, she brings both technical knowledge and a strong eye for design. She writes clean, efficient code and always makes sure the user experience is smooth and intuitive. Nikita is organized, reliable, and quick to learn new concepts. .",
    avatar: FaUserCircle,
  },
];

const stats = [
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "15+" },
  { label: "Years Experience", value: "3+" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="section-padding bg-gray-900/50">
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
            Client <span className="heading-gradient">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              ref={ref}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <testimonial.avatar className="w-12 h-12 text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaQuoteLeft className="text-accent/50 w-4 h-4" />
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  </div>
                  <p className="text-accent text-sm mb-4">{testimonial.role}</p>
                  <p className="text-gray-300">{testimonial.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-accent mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 