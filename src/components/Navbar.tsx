import React from 'react';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">ST</span>
          </div>
          <div className="hidden sm:flex items-center space-x-8">
            <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-primary">Education</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-primary">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-primary">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-primary">Skills</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
