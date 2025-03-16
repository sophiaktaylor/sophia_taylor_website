import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { isDarkMode } = useTheme();

  return (
    <section 
      id="experience" 
      className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8 transition-colors duration-300`}>
          Experience
        </h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} 
            rounded-lg shadow-lg p-6 border transition-colors duration-300 hover:shadow-xl`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                Analytics Intern
              </h3>
              <p className={`${isDarkMode ? 'text-dark-accent' : 'text-light-accent'} mt-1 transition-colors duration-300`}>
                Slover Center for Sports Medicine
              </p>
            </div>
            <div className="text-right">
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
                Sep 2022 - Nov 2023
              </p>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
                San Luis Obispo, CA
              </p>
            </div>
          </div>
          <ul className="mt-4 space-y-2">
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}
            >
              • Optimized inventory management for practice/game equipment, reducing setup time by 25% through data-driven allocation strategies
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}
            >
              • Utilized a comprehensive data collection process to monitor and assess the team's health status during pre-participation physicals for 120+ athletes
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
