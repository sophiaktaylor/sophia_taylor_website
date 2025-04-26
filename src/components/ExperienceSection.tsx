import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experience = {
    title: "Analytics Intern",
    company: "Slover Center for Sports Medicine",
    date: "Sep 2022 - Nov 2023",
    location: "San Luis Obispo, CA",
    points: [
      "Optimized inventory management for practice/game equipment, reducing setup time by 25% through data-driven allocation strategies",
      "Utilized a comprehensive data collection process to monitor and assess the team's health status during pre-participation physicals for 120+ athletes"
    ]
  };

  const skills = {
    technologies: ["Python", "SQL", "HTML", "R", "Tableau", "JMP"],
    frameworks: ["React.js", "Vercel"],
    tools: ["Git / GitHub", "VSCode", "Figma", "Tableau", "JMP", "Supabase", "PyCharm"],
    database_ai: ["PostgreSQL", "OpenAI", "Claude", "Pandas", "NumPy", "JupyterNotebook"],
    microsoft: ["Excel", "Word", "PowerPoint", "Outlook"]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-4xl font-bold mb-8">Experience</h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12 space-y-4"
      >
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-semibold">{experience.title}</h3>
              <p className="text-xl text-orange-500">{experience.company}</p>
            </div>
            <div className="text-right text-gray-400">
              <p>{experience.location}</p>
              <p>{experience.date}</p>
            </div>
          </div>
        </div>

        <ul className="list-disc list-inside space-y-2 text-gray-400">
          {experience.points.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold mb-8">Technical Skills</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.technologies.map((tech: string, index: number) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 bg-gray-900/50 rounded-full text-orange-400"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frameworks.map((framework: string, index: number) => (
                <motion.span
                  key={framework}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 bg-gray-900/50 rounded-full text-pink-400"
                >
                  {framework}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool: string, index: number) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 bg-gray-900/50 rounded-full text-blue-400"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Database & AI</h3>
            <div className="flex flex-wrap gap-3">
              {skills.database_ai.map((item: string, index: number) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="px-4 py-2 bg-gray-900/50 rounded-full text-purple-400"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Microsoft Office</h3>
            <div className="flex flex-wrap gap-3">
              {skills.microsoft.map((app: string, index: number) => (
                <motion.span
                  key={app}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-gray-900/50 rounded-full text-gray-400"
                >
                  {app}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceSection;
