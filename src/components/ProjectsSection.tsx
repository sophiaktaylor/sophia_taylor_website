import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Financial Dashboard",
      technologies: "Python, JavaScript, SQL, PostgreSQL, Supabase",
      date: "Feb 2025 - Mar 2025",
      location: "San Luis Obispo, CA",
      points: [
        "Developed a full-stack Stock Market Dashboard using Supabase (PostgreSQL), featuring real-time market data visualization and interactive charts powered by Plotly.js",
        "Engineered advanced technical analysis features including moving averages, RSI (Relative Strength Index), and volatility calculations, providing users with comprehensive market insights",
        "Implemented a scalable data pipeline to process and analyze stock market data, including automated daily price updates and volume analysis for multiple securities",
        "Developed RESTful APIs for real-time stock tracking, enabling dynamic market insights",
        "Designed and implemented a robust database schema in PostgreSQL with optimized views for performance metrics, including daily returns and moving averages"
      ]
    },
    {
      title: "HealthNex.AI",
      link: "https://healthnex.vercel.app/",
      date: "Dec 2023 - Jan 2024",
      location: "San Luis Obispo, CA",
      points: [
        "Designed, developed, and deployed a web application to digitize patient intake forms for the Noor Clinic in San Luis Obispo, streamlining the check-in process for enhanced efficiency, aimed at supporting underrepresented individuals in accessing healthcare",
        "Developed a responsive front-end with JavaScript and TypeScript, ensuring seamless user experience across devices",
        "Collaborated with backend developers to integrate API endpoints, achieving end-to-end system functionality"
      ]
    },
    {
      title: "Data Analysis of CO2 Emissions and Population Growth",
      technologies: "SAS",
      date: "Jan 2025 - Feb 2025",
      location: "San Luis Obispo, CA",
      points: [
        "Designed and implemented an animated data visualization in SAS to analyze the relationship between CO2 emissions and population trends across 50+ years, leveraging the Gapminder dataset",
        "Developed a reusable SAS macro to automate the generation of time-series GIF animations, iterating through annual data using PROC SGPLOT and ODS GRAPHICS to enhance visualization clarity",
        "Optimized data visualization techniques, selecting appropriate axis scaling, marker attributes, and animation settings to effectively convey trends in industrialization, sustainability, and population growth"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      
      <div className="space-y-12">
        {projects.map((project, projectIndex) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: projectIndex * 0.1 }}
            className="space-y-4"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                  {project.technologies && (
                    <span className="text-orange-500 text-lg ml-2">
                      ({project.technologies})
                    </span>
                  )}
                </h3>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  {project.link}
                </a>
              )}
              <div className="flex justify-between text-gray-400 mt-1">
                <span>{project.location}</span>
                <span>{project.date}</span>
              </div>
            </div>

            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {project.points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: projectIndex * 0.1 + index * 0.05 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
