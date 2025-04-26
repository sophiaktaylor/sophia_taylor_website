import React from 'react';
import { motion } from 'framer-motion';

const EducationSection = () => {
  const courses = [
    "Data Structures",
    "Introduction to Computing",
    "Fundamentals of Computer Science",
    "Statistical Computing with R",
    "Statistical Computing with SAS",
    "Applied Experimental Design & Regression Models",
    "Statistical Communication",
    "Calculus I, II, & III"
  ];

  const activities = [
    "Women Involved in Software and Hardware (WISH)",
    "Camp PolyHacks"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-4xl font-bold mb-8">Education</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">California Polytechnic State University, San Luis Obispo</h3>
          <p className="text-xl mb-2">Bachelor of Science in Statistics, Minor in Computer Science</p>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-400">San Luis Obispo, CA</p>
            <p className="text-gray-400">Sep 2022 - Jun 2026</p>
          </div>
          <p className="text-orange-500 mb-4">GPA: 3.6</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Relevant Coursework</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {courses.map((course, index) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-400"
              >
                {course}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Activities and Societies</h4>
          <div className="space-y-2">
            {activities.map((activity, index) => (
              <motion.div
                key={activity}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-400"
              >
                {activity}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationSection;
