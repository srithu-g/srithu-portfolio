import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { 
  Github, Linkedin, Mail, ExternalLink, 
  Code, Database, Server, Cpu, 
  Braces, BarChart, BookOpen, Award,
  Monitor, MousePointer, Keyboard, HardDrive,
  ChevronRight, Menu, X
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-darker text-light overflow-hidden">
      <ParticlesBackground />
      
      <div className="grid-background min-h-screen">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;