import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-8 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <motion.h2 
                className="text-2xl font-bold font-mono tech-text-gradient"
                whileHover={{ scale: 1.05 }}
              >
                &lt;Srithu/&gt;
              </motion.h2>
              <p className="text-gray-400 mt-2">
                Full-Stack Developer & AI/ML Enthusiast
              </p>
            </div>
            
            <div className="flex space-x-6">
              <motion.a
                href="https://github.com/srithu-g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-tech-purple transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/srithu-gaddolla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-tech-blue transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                href="mailto:srithu.gaddolla@gmail.com"
                className="text-gray-400 hover:text-tech-green transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Srithu Gaddolla. All rights reserved.
            </p>
            
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#home" className="hover:text-tech-purple transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-tech-purple transition-colors duration-300">About</a>
              <a href="#projects" className="hover:text-tech-purple transition-colors duration-300">Projects</a>
              <a href="#contact" className="hover:text-tech-purple transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
