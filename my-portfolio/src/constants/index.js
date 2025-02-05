import portfolio from "../assets/projects/portfolio.png";
import cloudresumeproject from "../assets/projects/cloudresumeproject.png";
import invoiceproject from "../assets/projects/invoiceproject.png";
import posproject from "../assets/projects/possystemproject.png";
import seleniumproject from "../assets/projects/seleniumproject.png";
import bakeryproject from "../assets/projects/bakeryproject.png";
import datasynth from "../assets/projects/datasynth.png";

import udemy from "../assets/certifications/udemy.jpg";
import deeplearningai from "../assets/certifications/deeplearningai.png";
import coursera from "../assets/certifications/coursera.png";

import fastlogo from "../assets/fastlogo.png";
import fraglogo from "../assets/fraglogo.jpg";
import xavorlogo from "../assets/xavorlogo.jpg";

import { SiTensorflow, SiPytorch, SiOpencv, SiNumpy, SiPandas, SiScikitlearn} from "react-icons/si";
import {SiAmazonaws, SiPython, SiJavascript, SiGit, SiSelenium, SiTerraform} from "react-icons/si";
import { SiMysql, SiSpring, SiJenkins, SiApachemaven} from "react-icons/si";

import {FaJava} from "react-icons/fa";

import {SiRedux, SiFirebase, SiFramer, SiHtml5, SiCss3, SiReact, SiExpress, SiMongodb, SiTailwindcss} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";


export const HERO_CONTENT = `I am a passionate software engineer with a bachelors degree from FAST NUCES. My expertise lies in machine learning, computer vision, and natural language processing (NLP). I specialize in using technologies like TensorFlow, PyTorch, and OpenCV to develop intelligent solutions. Additionally, I have a strong background in cloud computing with AWS services such as S3, Lambda, and EC2, and I use Terraform for infrastructure as code. My goal is to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const TECHNOLOGIES = [
  { icon: SiTensorflow, color: "text-yellow-400", duration: 2.5 },
  { icon: SiPytorch, color: "text-red-600", duration: 2 },
  { icon: SiOpencv, color: "text-green-600", duration: 1.5 },
  { icon: SiNumpy, color: "text-blue-500", duration: 3 },
  { icon: SiPandas, color: "text-blue-400", duration: 3.5 },
  { icon: SiScikitlearn, color: "text-orange-500", duration: 3 },
 
  { icon: SiAmazonaws, color: "text-orange-400", duration: 3.5 },
  { icon: SiTerraform, color: "text-blue-600", duration: 2.5 },
  { icon: SiPython, color: "text-blue-500", duration: 2 },
  { icon: SiJavascript, color: "text-yellow-300", duration: 1.5 },
  { icon: SiGit, color: "text-orange-700", duration: 2 },

  { icon: SiSelenium, color: "text-blue-600", duration: 2.5 },
  { icon: FaJava, color: "text-red-500", duration: 3 },
  { icon: SiMysql, color: "text-blue-600", duration: 4 },
  { icon: SiJenkins, color: "text-red-600", duration: 3 },
  { icon: SiApachemaven, color: "text-orange-500", duration: 2.5 },
  { icon: SiTailwindcss, color: "text-teal-500", duration: 3.5 },

  { icon: SiRedux, color: "text-purple-600", duration: 3.5 },
  { icon: SiFirebase, color: "text-yellow-600", duration: 2.5 },
  { icon: SiFramer, color: "text-black", duration: 2 },
  { icon: SiHtml5, color: "text-orange-500", duration: 2.5 },
  { icon: SiCss3, color: "text-blue-500", duration: 3 },
  { icon: SiReact, color: "text-cyan-400", duration: 3.5 },
  { icon: SiExpress, color: "text-gray-500", duration: 2 },
  { icon: SiMongodb, color: "text-green-500", duration: 1.5 },
  { icon: FaNodeJs, color:"", duration: 3 },
];

export const EXPERIENCES = [
  {
    year: "December 2024 - Present",
    role: "AI Intern",
    image: xavorlogo,
    company: "Xavor Corporation",
    description: "Engineered production-ready AI pipelines for computer vision and natural language processing tasks on NVIDIA Jetson devices (Xavier and Orin) by researching model suitability, optimizing implementations, and ensuring compatibility with healthcare robots. Implemented a computer vision pipeline using MoveNet for skeletal detection and CNN for pose classification, using image processing techniques to enable accurate pose analysis for healthcare assistance. Developed a multimodal emotion classification pipeline for audio and text data by implementing advanced processing techniques (audio cleaning, noise reduction, and transcription) and utilizing specialized models.",
    technologies: ["Python", "PyTorch", "Azure", "OpenCV", "ROS", "NVIDIA Jetson", "ByteTracker"],
    companyLink: "https://www.xavor.com",
  },
  {
    year: "March 2024 - Present",
    role: "Research Assistant",
    image: fastlogo,
    company: "FAST NUCES",
    description: "Developed a custom segmentation pipeline which enhanced dataset quality and improved model accuracy by up to 20% across various transfer learning models for rice disease detection. Utilized Super Resolution techniques such as image up-scaling and GAN-based algorithms to enhance the resolution of satellite imagery to contribute to research involving satellite data.",
    technologies: ["TensorFlow", "PyTorch", "OpenCV", "NumPy", "Pandas", "scikit-learn"],
    companyLink: "https://www.nu.edu.pk/",
  },
  {
    year: "July 2024 - August 2024",
    role: "Intern Unity Engineer",
    image: fraglogo,
    company: "FRAG Games",
    description: "Delivered over 8 game features ahead of deadlines, by writing modular and efficient C# scripts within Unity.",
    technologies: ["Unity", "C#", "Visual Studio", "Git"],
    companyLink: "https://www.frag-games.com",
  },
];



export const PROJECTS = [
  {
    title: "Cloud Resume Challenge",
    image: cloudresumeproject,
    link: "https://jawadify.xyz",
    description: 
      "Developed a serverless resume website using AWS services. Implemented SAM for Infrastructure as Code (IaC) and conducted various tests to ensure reliability.",
    technologies: ["AWS", "S3", "Lambda", "DynamoDB", "CloudFront", "Python", "JavaScript", "Git", "Terraform"],
  },
  {
    title: "Smart Invoice Extraction System",
    image: invoiceproject,
    link: "https://github.com/jawadshahid07/Invoice-Data-Extraction-System",
    description: 
      "Trained a YOLOv8 model to detect key fields on annotated invoice images and used Tesseract OCR to convert detected labels into text. Automated text transfer into Excel sheets.",
    technologies: ["Python", "PyTorch", "YOLOv8", "Tesseract", "OpenCV", "Docker"],
  },
  {
    title: "Multi-Agent Synthetic Dataset Generator",
    image: datasynth, 
    link: "https://datasynth.site",
    description: 
      "Developed a multi-agent synthetic dataset generator as part of the final-year project. The project focuses on generating synthetic data for training AI models. It uses an Agentic AI approach to automatically generate, execute, validate, regenerate, and organize code into synthetic datasets.",
    technologies: ["Python", "React", "FastAPI", "Meta", "LangChain", "HuggingFace", "MySQL"],
  },
  {
    title: "Selenium Automation Project for OrangeHRM",
    image: seleniumproject,
    link: "https://github.com/jawadshahid07/OrangeHRM-Automation",
    description: 
      "Developed a Selenium-based automation framework for end-to-end UI testing on the OrangeHRM website. Utilized TestNG for test management and Extent Reports for detailed reporting. Automated CI/CD using Jenkins and Maven.",
    technologies: ["Java", "Selenium WebDriver", "TestNG", "Extent Reports", "Maven", "Jenkins"],
  },
  {
    title: "Bakery Web App",
    image: bakeryproject,
    link: "https://github.com/jawadshahid07/A-Fresh-Tart",
    description: 
      "Developed a user-friendly MERN stack application for a bakery, including user authentication, order placing, and payments. Utilized Tailwind CSS for design and React Redux for state management.",
    technologies: ["MongoDB", "Express", "React", "Node", "Redux", "Firebase", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    link: "https://github.com/jawadshahid07/portfolio-website",
    description: 
      "Developed a personal portfolio website showcasing projects, skills, and contact information. Utilized React, Tailwind CSS, and Framer Motion for animations.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Pharmacy POS System",
    image: posproject,
    link: "https://github.com/jawadshahid07/POS-system",
    description: 
      "Built a Java POS system using Swing and JDBC with SQL. Applied design patterns and OOP principles for scalability, developing interfaces for Sales Assistant and Staff Manager.",
    technologies: ["Java", "Swing", "JDBC", "SQL"],
  },
];


export const CERTIFICATIONS = [
  {
    title: "Machine Learning Specialization",
    link: "https://coursera.org/share/c291a898a1a23c1563a74b5f164370c0",
    provider: "Coursera",
    image: coursera,
  },
  {
    title: "LangChain for LLM Development",
    link: "https://learn.deeplearning.ai/accomplishments/ef40ac07-5efa-4bf9-91e7-8304a67b8f55?usp=sharing",
    provider: "DeepLearning.AI",
    image: deeplearningai,
  },
  {
    title: "Selenium WebDriver with Java",
    link: "https://www.udemy.com/certificate/UC-2c22dc20-50b5-4496-9cdb-bb63fbe52bde/",
    provider: "Udemy",
    image: udemy,
  },
];

export const CONTACT = {
  phoneNo: "+92 320 8433967 ",
  email: "jawad.shahid70@outlook.com",
};
