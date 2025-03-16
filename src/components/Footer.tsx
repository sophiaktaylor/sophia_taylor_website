import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  const socialLinks = [
    { name: 'Email', href: 'mailto:sophietaylor1019@gmail.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/sophiataylorlinked' },
    { name: 'GitHub', href: 'https://github.com/sophietaylor2' }
  ];

  return (
    <footer 
      className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} 
        text-white py-8 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <h3 className="text-lg font-semibold">
              Sophia Taylor
            </h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-300'} transition-colors duration-300`}>
              Statistics & Computer Science Student
            </p>
          </motion.div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -3 }}
                className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-300 hover:text-white'} 
                  transition-all duration-300`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
