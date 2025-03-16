import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`pt-24 pb-16 ${isDarkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-cyan-50 to-blue-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} sm:text-5xl md:text-6xl transition-colors duration-300`}>
            Sophia Taylor
          </h1>
          <p className={`mt-3 text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
            Statistics & Computer Science Student
          </p>
          <div className="mt-4 space-x-4">
            <a 
              href="mailto:sophietaylor1019@gmail.com" 
              className={`${isDarkMode ? 'text-dark-accent hover:text-blue-400' : 'text-light-accent hover:text-blue-600'} transition-colors duration-300`}
            >
              sophietaylor1019@gmail.com
            </a>
            <span className={`${isDarkMode ? 'text-gray-600' : 'text-gray-300'} transition-colors duration-300`}>|</span>
            <a 
              href="tel:5103014193" 
              className={`${isDarkMode ? 'text-dark-accent hover:text-blue-400' : 'text-light-accent hover:text-blue-600'} transition-colors duration-300`}
            >
              (510) 301-4193
            </a>
          </div>
          <div className="mt-2 space-x-4">
            <a 
              href="https://linkedin.com/in/sophiataylorlinked" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${isDarkMode ? 'text-dark-accent hover:text-blue-400' : 'text-light-accent hover:text-blue-600'} transition-colors duration-300`}
            >
              LinkedIn
            </a>
            <span className={`${isDarkMode ? 'text-gray-600' : 'text-gray-300'} transition-colors duration-300`}>|</span>
            <a 
              href="https://github.com/sophietaylor2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${isDarkMode ? 'text-dark-accent hover:text-blue-400' : 'text-light-accent hover:text-blue-600'} transition-colors duration-300`}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
