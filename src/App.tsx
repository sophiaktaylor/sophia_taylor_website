import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Start from './pages/Start';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const AppContent = () => {
  const location = useLocation();
  const isStartPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {!isStartPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      {!isStartPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
