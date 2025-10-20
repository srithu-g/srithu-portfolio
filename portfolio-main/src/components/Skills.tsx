import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code, Database, Server, Cpu,
  Braces, BarChart, Globe,
  GitBranch, Bot, FileCode, Cloud, Layers
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", icon: <i className="devicon-python-plain colored"></i> },
        { name: "Java", icon: <i className="devicon-java-plain colored"></i> },
        { name: "C", icon: <i className="devicon-c-plain colored"></i> },
        { name: "JavaScript", icon: <Braces size={16} /> },
        { name: "HTML5", icon: <Globe size={16} /> },
        { name: "CSS3", icon: <FileCode size={16} /> }
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers size={24} />,
      skills: [
        { name: "React.js", icon: <i className="devicon-react-original colored"></i> },
        { name: "Node.js", icon: <i className="devicon-nodejs-plain colored"></i> },
        { name: "Streamlit", icon: <i className="devicon-streamlit-plain colored"></i> },
        { name: "FastAPI", icon: <Server size={16} /> },
        { name: "Pandas", icon: <BarChart size={16} /> },
        { name: "NumPy", icon: <BarChart size={16} /> },
        { name: "Scikit-learn", icon: <Bot size={16} /> },
        { name: "Jenkins", icon: <Bot size={16} /> },
        { name: "Kubernetes", icon: <Bot size={16} /> },
        { name: "Docker", icon: <Bot size={16} /> },
        { name: "Selenium", icon: <Bot size={16} /> }
      ],
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "MySQL", icon: <i className="devicon-mysql-plain colored"></i> },
        { name: "PostgreSQL", icon: <i className="devicon-postgresql-plain colored"></i> },
        { name: "SQLite", icon: <Database size={16} /> }
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Cpu size={24} />,
      skills: [
        { name: "Git & GitHub", icon: <GitBranch size={16} /> },
        { name: "RESTful APIs", icon: <Server size={16} /> },
        { name: "AWS", icon: <i className="devicon-amazonwebservices-plain colored"></i> },
        { name: "Google Cloud", icon: <Cloud size={16} /> },
        { name: "Azure", icon: <Cloud size={16} /> },
        { name: "Artificial Intelligence", icon: <Bot size={16} /> },
        { name: "Machine Learning", icon: <Bot size={16} /> },
        { name: "Data Science", icon: <BarChart size={16} /> },
        { name: "DevOps", icon: <Bot size={16} /> },
      ],
    },
  ];

  const SkillPill = ({ skill }: { skill: { name: string, icon: React.ReactNode } }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      className="px-4 py-2 rounded-full bg-dark border border-gray-700 hover:border-tech-purple transition-colors duration-300 flex items-center gap-2"
    >
      <span className="text-tech-purple">{skill.icon}</span>
      {skill.name}
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative">
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
              Technical <span className="tech-text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-tech-purple mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold mb-4 tech-text-gradient flex items-center gap-2">
                  <span className="tech-icon-sm">{category.icon}</span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillPill key={skillIndex} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 glass-card p-6">
            <h3 className="text-xl font-bold mb-4 tech-text-gradient flex items-center gap-2">
              <span className="tech-icon-sm"><BarChart size={24} /></span>
              Proficiency
            </h3>
            <div className="space-y-4">
              {[
                { name: "Frontend Development", percentage: 90, icon: <Globe size={18} /> },
                { name: "Backend Development", percentage: 85, icon: <Server size={18} /> },
                { name: "Machine Learning", percentage: 80, icon: <Bot size={18} /> },
                { name: "Data Science", percentage: 85, icon: <BarChart size={18} /> },
                { name: "Database Management", percentage: 80, icon: <Database size={18} /> },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="text-tech-purple">{item.icon}</span>
                      {item.name}
                    </span>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-dark rounded-full h-2.5">
                    <motion.div
                      className="h-2.5 rounded-full bg-gradient-to-r from-tech-purple to-tech-blue"
                      initial={{ width: 0 }}
                      animate={{ width: inView ? `${item.percentage}%` : 0 }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
