import React from 'react';
import { motion } from 'framer-motion';

// Define your projects with relevant details
const projects = [
  {
    id: 1,
    title: 'Project 1',
    skills: 'React, Tailwind CSS, Framer Motion',
    description: 'Built a responsive portfolio website using React with Tailwind CSS for styling and Framer Motion for animations.',
    image: '/path-to-image1.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    skills: 'Python, Django, PostgreSQL',
    description: 'Developed a task management web application using Python and Django framework with PostgreSQL database.',
    image: '/path-to-image2.jpg',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen">
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              <img src={project.image} alt={project.title} className="w-1/2 rounded-md shadow-md" />
              <div className="w-1/2 p-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-500 mb-2"><strong>Skills Used:</strong> {project.skills}</p>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
