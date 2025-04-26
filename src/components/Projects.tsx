import React from 'react';

import { motion } from 'framer-motion';

interface Project {
  title: string;
  date: string;
  location: string;
  technologies: string;
  link?: string;
  points: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 border-gray-800 rounded-lg shadow-lg p-6 border mb-6 transition-colors duration-300 hover:shadow-xl"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="text-blue-400 mt-1">
            {project.technologies}
          </p>
        </div>
        <div className="text-right">
          <p className="text-gray-400">
            {project.date}
          </p>
          <p className="text-gray-400">
            {project.location}
          </p>
        </div>
      </div>
      {project.link && (
        <motion.a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="text-blue-400 hover:text-blue-300 mt-2 inline-block transition-colors duration-300"
        >
          View Project →
        </motion.a>
      )}
      <ul className="mt-4 space-y-2">
        {project.points.map((point, index) => (
          <li 
            key={index} 
            className="text-gray-300"
          >
            • {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Projects = () => {

  const projects: Project[] = [
    {
      title: "Financial Dashboard",
      date: "Feb 2025 - Mar 2025",
      location: "San Luis Obispo, CA",
      technologies: "Python, JavaScript, SQL, PostgreSQL, Supabase",
      points: [
        "Developed a full-stack Stock Market Dashboard using Supabase (PostgreSQL), featuring real-time market data visualization and interactive charts powered by Plotly.js",
        "Engineered advanced technical analysis features including moving averages, RSI, and volatility calculations",
        "Implemented a scalable data pipeline to process and analyze stock market data",
        "Developed RESTful APIs for real-time stock tracking",
        "Designed and implemented a robust database schema in PostgreSQL"
      ]
    },
    {
      title: "HealthNex.AI",
      date: "Dec 2023 - Jan 2024",
      location: "San Luis Obispo, CA",
      technologies: "JavaScript, TypeScript",
      link: "https://healthnex.vercel.app/",
      points: [
        "Designed, developed, and deployed a web application to digitize patient intake forms for the Noor Clinic",
        "Developed a responsive front-end with JavaScript and TypeScript",
        "Collaborated with backend developers to integrate API endpoints"
      ]
    },
    {
      title: "Data Analysis of CO2 Emissions and Population Growth",
      date: "Jan 2025 - Feb 2025",
      location: "San Luis Obispo, CA",
      technologies: "SAS",
      points: [
        "Designed and implemented an animated data visualization in SAS to analyze CO2 emissions and population trends",
        "Developed a reusable SAS macro to automate the generation of time-series GIF animations",
        "Optimized data visualization techniques for effective trend analysis"
      ]
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-16 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
