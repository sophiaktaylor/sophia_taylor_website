import React from 'react';
import { motion } from 'framer-motion';


interface SkillCategory {
  title: string;
  skills: string[];
}

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 border-gray-800 
        rounded-lg shadow-lg p-6 border transition-colors duration-300 hover:shadow-xl"
    >
      <h3 className="text-xl font-semibold text-white mb-4">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <motion.span
            key={skillIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 bg-gray-800 text-blue-400 hover:bg-gray-700 rounded-full text-sm transition-colors duration-300 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {

  const skillCategories: SkillCategory[] = [
    {
      title: "Technologies",
      skills: ["Python", "SQL", "HTML", "R", "Tableau", "JMP"]
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Vercel"]
    },
    {
      title: "Tools",
      skills: ["Git / GitHub", "VSCode", "Figma", "Tableau", "JMP", "Supabase", "PyCharm"]
    },
    {
      title: "Database & AI",
      skills: ["PostgreSQL", "OpenAI", "Claude", "Pandas", "NumPy", "JupyterNotebook"]
    },
    {
      title: "Microsoft Office",
      skills: ["Excel", "Word", "PowerPoint", "Outlook"]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-16 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-8"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
