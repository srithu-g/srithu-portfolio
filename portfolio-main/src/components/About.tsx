import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const personalImages = [
    "/srithu1.jpg",
    "/srithu2.jpg",
    "/srithu3.jpg",
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="tech-text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-tech-purple mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WHO I AM */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 tech-text-gradient">Who I Am</h3>
              <p className="text-gray-300 mb-4">
                I'm <span className="font-semibold text-white">Srithu Gaddolla</span>, a passionate 
                <span className="text-tech-purple"> AI/ML & Full-Stack Developer</span> currently pursuing my 
                <span className="text-tech-purple"> B.Tech in Information Technology</span> at G. Narayanamma Institute of Technology and Science (2022–2026), with a CGPA of 9.10.
              </p>
              <p className="text-gray-300 mb-4">
                I specialize in building intelligent systems, scalable web applications, and data-driven solutions. 
                I’ve gained hands-on experience through internships, working on CRM systems, AI agents, cough detection models, and AI call agent solutions, contributing to both backend and full-stack development.
                Outside tech, I enjoy learning emerging technologies, solving puzzles, and collaborating on innovative projects.
              </p>
              
              <div className="mt-6 grid grid-cols-3 gap-2">
                {personalImages.map((img, index) => (
                  <motion.div 
                    key={index}
                    className="rounded-lg overflow-hidden h-32 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={img} 
                      alt={`Srithu Gaddolla ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* WHAT I DO */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 tech-text-gradient">What I Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 tech-icon mr-3">
                    <Code size={24} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">Full-Stack Development</h4>
                    <p className="text-gray-300">
                      Building scalable and responsive web apps using React, Node.js, Streamlit, and REST APIs.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="flex-shrink-0 tech-icon mr-3">
                    <Database size={24} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">Data Science & Analytics</h4>
                    <p className="text-gray-300">
                      Analyzing complex datasets and extracting insights using Python, SQL, and visualization tools.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="flex-shrink-0 tech-icon mr-3">
                    <Server size={24} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">Backend Engineering</h4>
                    <p className="text-gray-300">
                      Creating secure and efficient backend services, RESTful APIs, and database systems.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="flex-shrink-0 tech-icon mr-3">
                    <Cpu size={24} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">AI & Machine Learning</h4>
                    <p className="text-gray-300">
                      Developing predictive models, GenAI solutions, and deploying ML pipelines for real-world problems.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
