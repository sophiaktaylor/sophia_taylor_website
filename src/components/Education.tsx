import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900">California Polytechnic State University, San Luis Obispo</h3>
          <p className="text-primary mt-1">Bachelor of Science in Statistics, Minor in Computer Science</p>
          <p className="text-gray-600 mt-1">Sep 2022 - Jun 2026 | GPA: 3.6</p>
          
          <div className="mt-4">
            <h4 className="font-medium text-gray-900">Relevant Coursework</h4>
            <p className="text-gray-600 mt-1">
              Data Structures, Introduction to Computing, Fundamentals of Computer Science, Statistical Computing with R, 
              Statistical Computing with SAS, Applied Experimental Design & Regression Models, Statistical Communication, 
              Calculus I, II, & III
            </p>
          </div>
          
          <div className="mt-4">
            <h4 className="font-medium text-gray-900">Activities and Societies</h4>
            <ul className="list-disc list-inside text-gray-600 mt-1">
              <li>Women Involved in Software and Hardware (WISH)</li>
              <li>Camp PolyHacks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
