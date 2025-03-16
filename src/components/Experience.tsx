import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Analytics Intern</h3>
              <p className="text-primary mt-1">Slover Center for Sports Medicine</p>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Sep 2022 - Nov 2023</p>
              <p className="text-gray-600">San Luis Obispo, CA</p>
            </div>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-600">• Optimized inventory management for practice/game equipment, reducing setup time by 25% through data-driven allocation strategies</li>
            <li className="text-gray-600">• Utilized a comprehensive data collection process to monitor and assess the team's health status during pre-participation physicals for 120+ athletes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
