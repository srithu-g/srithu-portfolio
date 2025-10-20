import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
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

  const education = {
    degree: "Bachelor of Technology in Information Technology",
    institution: "G. Narayanamma Institute of Technology and Science",
    location: "Hyderabad, India",
    period: "2022 – 2026",
    cgpa: "9.10",
    courses: [
      "Artificial Intelligence",
      "Machine Learning",
      "DevOps",
      "Full Stack Web Development",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Cloud Computing",
      "Data Mining"
    ]
  };

  const awards = [
    {
      title: "Finalist – NASA Space Apps Challenge 2024 (National Level)",
      description: "Developed and presented an interactive puzzle game at a prestigious global hackathon."
    },
    {
      title: "Innovation and Incubation Cell Lead – G. Narayanamma Institute of Technology and Science",
      description: "Initiated 10+ innovation-driven programs including national-level hackathons, engaging over 300 students."
    },
    {
      title: "Mentorship & Leadership",
      description: "Guided multiple student teams to 3 award-winning projects through strategic mentorship and collaboration."
    }
  ];

  return (
    <section id="education" className="py-20 relative">
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
              Education & <span className="tech-text-gradient">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-tech-purple mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Card */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="tech-icon">
                  <BookOpen size={24} />
                </span>
                <h3 className="text-xl font-bold tech-text-gradient">Education</h3>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white">{education.degree}</h4>
                <p className="text-gray-300">{education.institution}</p>
                
                <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
                  <div className="flex items-center gap-2 text-tech-green">
                    <Calendar size={16} />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span>{education.location}</span>
                  </div>
                </div>

                <p className="mt-2 text-gray-300"><span className="font-semibold text-white">CGPA:</span> {education.cgpa}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-tech-blue">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-sm rounded-full bg-dark border border-gray-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Awards & Achievements */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="tech-icon">
                  <Award size={24} />
                </span>
                <h3 className="text-xl font-bold tech-text-gradient">Awards & Achievements</h3>
              </div>
              
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="border-l-2 border-tech-purple pl-4 py-1">
                    <h4 className="font-semibold text-white">{award.title}</h4>
                    <p className="text-gray-300 text-sm">{award.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
