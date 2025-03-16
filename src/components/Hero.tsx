import React from 'react';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-r from-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Sophia Taylor
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Statistics & Computer Science Student
          </p>
          <div className="mt-4 space-x-4">
            <a href="mailto:sophietaylor1019@gmail.com" className="text-primary hover:text-secondary">
              sophietaylor1019@gmail.com
            </a>
            <span className="text-gray-300">|</span>
            <a href="tel:5103014193" className="text-primary hover:text-secondary">
              (510) 301-4193
            </a>
          </div>
          <div className="mt-2 space-x-4">
            <a href="https://linkedin.com/in/sophiataylorlinked" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
              LinkedIn
            </a>
            <span className="text-gray-300">|</span>
            <a href="https://github.com/sophietaylor2" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
