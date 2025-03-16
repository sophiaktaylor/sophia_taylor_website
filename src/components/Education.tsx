import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Education = () => {
  const { isDarkMode } = useTheme();

  return (
    <section 
      id="education" 
      className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8 transition-colors duration-300`}
        >
          Education
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} 
            rounded-lg shadow-lg p-6 border transition-colors duration-300 hover:shadow-xl`}
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}
          >
            California Polytechnic State University, San Luis Obispo
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`${isDarkMode ? 'text-dark-accent' : 'text-light-accent'} mt-1 transition-colors duration-300`}
          >
            Bachelor of Science in Statistics, Minor in Computer Science
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1 transition-colors duration-300`}
          >
            Sep 2022 - Jun 2026 | GPA: 3.6
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4"
          >
            <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              Relevant Coursework
            </h4>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-1 transition-colors duration-300`}>
              Data Structures, Introduction to Computing, Fundamentals of Computer Science, Statistical Computing with R, 
              Statistical Computing with SAS, Applied Experimental Design & Regression Models, Statistical Communication, 
              Calculus I, II, & III
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4"
          >
            <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              Activities and Societies
            </h4>
            <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-1 transition-colors duration-300`}>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                Women Involved in Software and Hardware (WISH)
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                Camp PolyHacks
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
