import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Sophia Taylor</h3>
            <p className="text-gray-400">Statistics & Computer Science Student</p>
          </div>
          <div className="flex space-x-6">
            <a href="mailto:sophietaylor1019@gmail.com" className="text-gray-400 hover:text-white">
              Email
            </a>
            <a href="https://linkedin.com/in/sophiataylorlinked" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com/sophietaylor2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
