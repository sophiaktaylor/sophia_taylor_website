import React from 'react';

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
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mb-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <p className="text-primary mt-1">{project.technologies}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">{project.date}</p>
          <p className="text-gray-600">{project.location}</p>
        </div>
      </div>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" 
           className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
          View Project →
        </a>
      )}
      <ul className="mt-4 space-y-2">
        {project.points.map((point, index) => (
          <li key={index} className="text-gray-600">• {point}</li>
        ))}
      </ul>
    </div>
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
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
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
