import React from 'react';
import { motion } from 'framer-motion';

// Define your experiences with relevant details
const experiences = [
  {
    id: 1,
    title: 'Research Assistant',
    organization: 'Your University Name',
    logo: '/path-to-your-university-logo.png',
    skills: 'Computer Vision, Image Processing, Machine Learning',
    description: 'Worked on a drone-based solution for automated rice disease detection.',
    date: 'March 2024 - Present',
  },
  {
    id: 2,
    title: 'Unity Game Developer Intern',
    organization: 'FRAG',
    logo: '/path-to-frag-logo.png',
    skills: 'Game Development, Unity, C# Programming',
    description: 'Developed interactive gameplay features and mechanics for mobile games.',
    date: 'June 2023 - August 2023',
  },
  // Add more experiences as needed
];

function Experience() {
  return (
    <section id="experience" className="min-h-screen">
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 bg-gray-300 h-full w-1 transform -translate-x-1/2"></div>
          {/* Experiences */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex py-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Left side (or right side based on index) */}
              <div className="flex-shrink-0 w-1/2 pr-8 pl-4">
                <div className="flex items-center mb-4">
                  <img src={exp.logo} alt={`${exp.organization} logo`} className="w-12 h-12 mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">{exp.title}</h3>
                    <p className="text-gray-500">{exp.organization}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-2"><strong>Skills:</strong> {exp.skills}</p>
                <p className="text-gray-700">{exp.description}</p>
                <p className="text-gray-500 mt-2">{exp.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
