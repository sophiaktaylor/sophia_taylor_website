import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const links = [
    { href: 'mailto:sophietaylor1019@gmail.com', text: 'sophietaylor1019@gmail.com' },
    { href: 'https://www.linkedin.com/in/sophiataylorlinked/', text: 'linkedin.com/in/sophiataylorlinked' },
    { href: 'https://github.com/sophietaylor2', text: 'github.com/sophietaylor2' }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Decorative circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', delay: 0.75 }}
      />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-8xl font-bold tracking-wider mb-20">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">CONTACT</span>
          </h1>
          
          <div className="space-y-8">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-orange-400 transition-all duration-300 hover:tracking-wide"
                >
                  {link.text}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
