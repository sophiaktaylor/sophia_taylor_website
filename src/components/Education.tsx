import React from 'react';
import { motion } from 'framer-motion';


const Education = () => {


  return (
    <section 
      id="education" 
      className="py-16 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-8"
        >
          Education
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 border-gray-800 rounded-lg shadow-lg p-6 border transition-colors duration-300 hover:shadow-xl"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-semibold text-white"
          >
            California Polytechnic State University, San Luis Obispo
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-400 mt-1"
          >
            Bachelor of Science in Statistics, Minor in Computer Science
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mt-1"
          >
            Sep 2022 - Jun 2026 | GPA: 3.6
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4"
          >
            <h4 className="font-medium text-white transition-colors duration-300">
              Relevant Coursework
            </h4>
            <p className="text-gray-300 mt-1">
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
            <h4 className="font-medium text-white transition-colors duration-300">
              Activities and Societies
            </h4>
            <ul className="list-disc list-inside text-gray-300 mt-1">
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
