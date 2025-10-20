import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: "SLA Breach Predictor",
      description:
        "A smart ML-powered tool that predicts potential SLA breaches for IT service tickets using classification algorithms and NLP on historical data, enabling proactive decision-making.",
      technologies: [
        "Python", "Scikit-learn", "NLP", "Streamlit", "Flask", "PostgreSQL"
      ],
      features: [
        "Data preprocessing & feature engineering for ticket timelines",
        "NLP on descriptions to boost prediction accuracy",
        "Trained classification models for breach probability",
        "Interactive dashboards to visualize SLA risks"
      ],
      github: "https://github.com/srithu-g/SLABreachPredictor",
      image: "/sla.png",
    },
    {
      title: "Medicine Inventory Management System",
      description:
        "A secure and efficient web app to manage medicine stocks, expiries, and operator access, designed for healthcare environments to optimize inventory tracking and reduce wastage.",
      technologies: [
        "Angular", "ASP.NET Core Web API", "SQL Server", "CSS"
      ],
      features: [
        "Add & update medicines with batch, expiry, quantity",
        "Smart search by ID, category, stock or expiry",
        "Token-based authentication for operators",
        "Real-time inventory updates & expiry alerts"
      ],
      github: "https://github.com/srithu-g/medicine-management-system",
      image: "/medicine.jpg",
    },
    {
      title: "Interactive Credit Card Fraud Detection System",
      description:
        "An intelligent ML-based system to detect and prevent fraudulent transactions in real time, featuring instant alerts, admin dashboards, and model feedback loops.",
      technologies: [
        "Python", "Machine Learning", "Node.js", "JavaScript", "HTML", "CSS", "MySQL"
      ],
      features: [
        "ML models trained on transaction patterns",
        "Twilio API for real-time SMS alerts",
        "Admin dashboard for fraud analysis",
        "Model feedback loop for continuous learning"
      ],
      github: "https://github.com/srithu-g/Credit-Card-Fraud-Detection",
      image: "creditcard.jpg",
    },
    {
      title: "Finance Dashboard",
      description:
        "A user-friendly financial dashboard that tracks income, expenses, and offers interactive analytics with an AI-powered assistant for insights.",
      technologies: [
        "HTML5", "CSS3", "JavaScript"
      ],
      features: [
        "Secure authentication for users",
        "Account overview with balances & loans",
        "Transaction tracking with categories",
        "Interactive income vs expense charts",
        "AI chatbot assistant for queries"
      ],
      github: "https://github.com/srithu-g/finance-dashboard",
      image: "finance.jpg",
    },
    {
      title: "Traveler Bag Security Device",
      description:
        "A smart security system using ESP8266 and sensorsto monitor unauthorized access and send real-time alerts for equipment protection.",
      technologies: [
        "Arduino IDE", "C++", "ESP8266", "GPS", "Accelerometer", "Twilio API"
      ],
      features: [
        "Fingerprint sensor for authentication",
        "ADXL345 accelerometer for motion detection",
        "NEO-6M GPS module for live tracking",
        "BC547 transistor-triggered security alerts",
        "SMS notifications for unauthorized access"
      ],
      github: "https://github.com/srithu-g/Traveler-Bag-Security-Device",
      image: "bag.png",
    },
    {
      title: "EcoPuzzle - Educational Game",
      description:
        "An innovative Unity-based puzzle game that integrates GLOBE Program protocols to raise environmental awareness through interactive gameplay.",
      technologies: [
        "Unity", "MongoDB"
      ],
      features: [
        "Progressive puzzle levels on environmental topics",
        "Integration with real-world GLOBE data",
        "Interactive and immersive learning experience",
        "Designed to enhance environmental literacy"
      ],
      github: "https://github.com/srithu-g/ecopuzzle",
      image: "puzzle.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="tech-text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-tech-purple mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="project-card flex flex-col h-full"
              >
                <div className="mb-4 overflow-hidden rounded-lg h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 tech-text-gradient">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-tech-blue">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-dark border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-tech-blue">Key Features</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-tech-purple hover:text-tech-blue transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span>View on GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
