import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const experiences = [
    {
      title: "AI/ML Ops Intern",
      company: "HealthSathi",
      location: "Marietta, Georgia (Remote)",
      period: "Jun 2025 – Present",
      description: [
        "Developed AI-based TB detection system from cough audio using Google’s HeAR embeddings.",
        "Trained and tuned XGBoost & Random Forest models, achieving 98% accuracy on 5,000+ samples.",
        "Reduced model inference time by 30%, enabling real-time diagnosis deployment."
      ]
    },
    {
      title: "AI & Full-Stack Development Intern",
      company: "Spinabot",
      location: "Edison, New Jersey (Remote)",
      period: "Aug 2025 – Present",
      description: [
        "Developing AI-powered autonomous agents and CRMS to automate marketing, sales, and operational workflows.",
        "Using FastAPI, Streamlit and Python for business process automation."
      ]
    },
    {
      title: "Mentee – Micron #Master 2.0 Mentorship Program",
      company: "Micron Technology",
      location: "Hyderabad, India",
      period: "Apr 2025 – Jun 2025",
      description: [
        "Mentored by Micron Technology experts on full stack development best practices.",
        "Built Medicine Inventory Management System using Angular, ASP.NET Core, SQL Server.",
        "Reduced expiry-related wastage by 40% via streamlined stock tracking and expiry alerts."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="tech-text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-tech-purple mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="experience-card"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold tech-text-gradient">{exp.title}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <div className="flex items-center justify-end gap-2 text-tech-green">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center justify-end gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-gray-300">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="mr-2 mt-1 text-tech-purple">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
