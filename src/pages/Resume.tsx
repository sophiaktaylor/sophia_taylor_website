import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import EducationSection from '../components/EducationSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/documents/sophia_taylor_resume.pdf';
    link.download = 'sophia_taylor_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 relative overflow-hidden">
      {/* Decorative circles */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.5, x: -100, y: -100 }}
        animate={{ opacity: 1, scale: 1, x: -50, y: -50 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.5, x: 100, y: 100 }}
        animate={{ opacity: 1, scale: 1, x: 50, y: 50 }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl sm:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text inline-block py-2">RESUME</span>
          </h1>
          <motion.button
            onClick={handleDownload}
            className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume (PDF)
          </motion.button>
        </motion.div>

        <div className="space-y-16">
          <EducationSection />
          <ProjectsSection />
          <ExperienceSection />
        </div>
      </div>
    </div>
  );
};

export default Resume;
