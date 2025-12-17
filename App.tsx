
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChatWidget from './components/AIChatWidget';
import StarryBackground from './components/StarryBackground';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen relative transition-colors duration-300">
      <StarryBackground isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <div className="relative z-10">
        <Contact />
      </div>
      <AIChatWidget />
    </div>
  );
}

export default App;
