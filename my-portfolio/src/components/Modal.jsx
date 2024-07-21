import { motion } from "framer-motion";
import React from "react";

const Modal = ({ image, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" 
      onClick={onClose}
    >
      <motion.img 
        src={image} 
        alt="Full size"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        width = {1500}
        height = {1500}
        className="max-w-full max-h-full object-contain rounded"
      />
    </div>
  );
};

export default Modal;
