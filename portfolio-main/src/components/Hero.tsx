import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, MousePointer, Keyboard, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        setTimeout(() => {
          cursorRef.current!.style.left = `${e.clientX}px`;
          cursorRef.current!.style.top = `${e.clientY}px`;
        }, 50);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20">
      {/* Glowing Cursor */}
      <div 
        ref={cursorRef}
        className="cursor-glow fixed w-6 h-6 rounded-full border-2 border-tech-purple pointer-events-none z-50 hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Floating Icons */}
      <motion.div 
        className="absolute top-1/4 right-10 text-tech-purple opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Keyboard size={80} />
      </motion.div>

      <motion.div 
        className="absolute bottom-1/4 left-10 text-tech-blue opacity-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <MousePointer size={60} />
      </motion.div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left md:flex-1"
          >
            <h2 className="text-xl md:text-2xl font-mono mb-2 text-tech-green">
              Hello World, I'm
            </h2>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="tech-text-gradient">Srithu Gaddolla</span>
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl font-mono mb-8 h-12">
              <TypeAnimation
                sequence={[
                  'Information Technology Student',
                  2000,
                  'AI & Data Science Enthusiast',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Innovator & Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gray-300"
              />
            </div>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
              Passionate about building impactful, scalable solutions by blending AI, Data Science, and Web Technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                href="https://github.com/srithu-g"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-dark border border-tech-purple text-white hover:bg-tech-purple transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/srithu-gaddolla-009919282"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-dark border border-tech-blue text-white hover:bg-tech-blue transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                href="mailto:srithu.gaddolla@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-dark border border-tech-green text-white hover:bg-tech-green transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>Contact</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:flex-1 flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-tech-purple shadow-[0_0_25px_rgba(139,92,246,0.5)]">
              <img 
                src="/srithu1.jpg" 
                alt="Srithu Gaddolla" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
