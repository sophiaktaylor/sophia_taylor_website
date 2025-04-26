import React from 'react';
import { motion } from 'framer-motion';


const Experience = () => {


  return (
    <section 
      id="experience" 
      className="py-16 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">
          Experience
        </h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 border-gray-800 rounded-lg shadow-lg p-6 border transition-colors duration-300 hover:shadow-xl"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Analytics Intern
              </h3>
              <p className="text-blue-400 mt-1">
                Slover Center for Sports Medicine
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-400">
                Sep 2022 - Nov 2023
              </p>
              <p className="text-gray-400">
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
              className="text-gray-300"
            >
              • Optimized inventory management for practice/game equipment, reducing setup time by 25% through data-driven allocation strategies
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-300"
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
