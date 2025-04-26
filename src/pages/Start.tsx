import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface StackCategory {
  title: string;
  items: string[];
}

const Start = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const stack: StackCategory[] = [
    {
      title: 'Technologies',
      items: ['Python', 'SQL', 'HTML', 'R', 'Tableau', 'JMP']
    },
    {
      title: 'Frameworks',
      items: ['React.js','Vercel']
    },
    {
      title: 'Tools',
      items: ['Git / GitHub', 'VSCode', 'Figma', 'Tableau', 'JMP', 'Supabase', 'PyCharm']
    },
    {
      title: 'Database & AI',
      items: ['PostgreSQL', 'OpenAI', 'Claude', 'Pandas', 'NumPy', 'JupyterNotebook']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Decorative circles */}
      <motion.div
        className="fixed w-64 h-64 rounded-full bg-orange-500/20 blur-xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ top: '20%', left: '10%' }}
      />
      <motion.div
        className="fixed w-48 h-48 rounded-full bg-blue-500/20 blur-xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{ top: '40%', right: '15%' }}
      />
      <motion.div
        className="fixed w-56 h-56 rounded-full bg-purple-500/20 blur-xl"
        animate={{
          x: [0, 70, 0],
          y: [0, 70, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{ bottom: '20%', left: '20%' }}
      />
      <motion.div
        className="fixed w-40 h-40 rounded-full bg-pink-500/20 blur-xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ top: '30%', left: '30%' }}
      />
      <motion.div
        className="fixed w-32 h-32 rounded-full bg-orange-400/20 blur-xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        style={{ top: '25%', right: '25%' }}
      />
      <motion.div
        className="fixed w-36 h-36 rounded-full bg-blue-400/20 blur-xl"
        animate={{
          x: [0, -60, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        style={{ bottom: '30%', right: '20%' }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            Hello! My name is<br />
            <span className="text-orange-500">Sophia Taylor</span>
          </h1>
          <p className="text-xl text-gray-400">
            I'm a data engineer. I like to code. Here's my website.
          </p>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-64 h-64 mx-auto mb-16 relative group"
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 p-1"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-black p-1">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/images/profile.png"
                  alt="Sophia Taylor"
                  className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-500"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stack Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-center mb-12 text-white">My Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stack.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + categoryIndex * 0.1 }}
                className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-orange-500">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex justify-center space-x-6"
        >
          {[
            { to: '/about', label: 'About Me' },
            { to: '/resume', label: 'Resume' },
            { to: '/contact', label: 'Contact' }
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {link.label}
              </motion.span>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Start;
