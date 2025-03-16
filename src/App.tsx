import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
