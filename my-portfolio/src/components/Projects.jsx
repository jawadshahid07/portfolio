import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal"; // Adjust the path as needed

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{opacity: 1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration: 2}}
              className="w-full lg:w-1/4 cursor-pointer"
            >
              <img 
                src={project.image} 
                width={150} 
                height={150} 
                alt={project.title} 
                className="mb-6 rounded" 
                onClick={() => openModal(project.image)}
              />
            </motion.div>
            <motion.div 
              whileInView={{opacity: 1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration: 2}}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-300">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default Projects;
