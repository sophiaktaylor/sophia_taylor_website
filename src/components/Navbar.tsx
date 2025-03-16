import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed w-full ${isDarkMode ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'} shadow-md z-50 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`text-xl font-bold ${isDarkMode ? 'text-dark-accent' : 'text-light-accent'}`}>ST</span>
          </motion.div>

          <div className="hidden sm:flex items-center space-x-8">
            {['education', 'projects', 'experience', 'skills'].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`${isDarkMode ? 'text-dark-text hover:text-dark-accent' : 'text-light-text hover:text-light-accent'} capitalize`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
              </motion.button>
            ))}

            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-dark-accent' : 'bg-light-accent'} transition-colors duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="w-5 h-5 text-white" />
              ) : (
                <MoonIcon className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
