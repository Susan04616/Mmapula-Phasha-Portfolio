
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, User, Code, Database, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const TITLES = [
  "Full Stack Developer",
  "Temenos Infinity Dev",
  "Data Engineer",
  "Java Specialist"
];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const [imgSrc, setImgSrc] = useState(`https://github.com/Susan04616.png?t=${new Date().getTime()}`);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (imgSrc.includes("github.com")) {
       setImgSrc("/profile.jpg");
    } else {
       setHasError(true);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % TITLES.length;
      const fullText = TITLES[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 scroll-mt-20">
      
      {/* Abstract Background Elements - Adapted for Day Mode */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-[120px]"></div>
         <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[100px]"></div>
         {/* Giant Decorative Text */}
         <div className="absolute bottom-10 right-0 font-bold text-[20vw] leading-none text-slate-900/5 dark:text-white/5 select-none pointer-events-none">
            DEV
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Text Content - Spans 7 cols */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Welcome to my Portfolio
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Mmapula <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400">
                Phasha
              </span>
            </h1>
            
            <div className="h-12 md:h-16 flex items-center mb-6">
              <span className="text-2xl md:text-3xl text-slate-500 dark:text-slate-400 mr-3">My Expertise</span>
              <span className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800/50 px-4 py-1 rounded-lg border border-slate-200 dark:border-slate-700/50">
                {text}<span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-10 leading-relaxed">
              {PERSONAL_INFO.tagline} specializing in robust Backend Systems and Generative AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, '#projects')}
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
              >
                View Selected Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-8 py-4 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-800 dark:text-white font-semibold rounded-2xl transition-all border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:col-span-5 relative mt-12 md:mt-0 flex justify-center md:justify-end">
            <div className="relative w-72 h-80 md:w-[400px] md:h-[480px]">
              
              {/* Floating Tech Badges */}
              <div className="absolute -left-8 top-10 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <Code className="text-blue-500 dark:text-blue-400" size={24} />
              </div>
              <div className="absolute -right-4 bottom-20 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <Database className="text-cyan-500 dark:text-cyan-400" size={24} />
              </div>
              <div className="absolute left-10 -bottom-6 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <Globe className="text-emerald-500 dark:text-emerald-400" size={24} />
              </div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[3rem] rounded-tl-none md:rounded-tr-[5rem] md:rounded-bl-[5rem] overflow-hidden border-2 border-slate-200 dark:border-slate-700/30 shadow-2xl bg-slate-100 dark:bg-slate-800 z-10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
                {!hasError ? (
                  <img 
                    src={imgSrc}
                    alt="Mmapula Phasha" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-400 dark:text-slate-600">
                     <User size={64} />
                  </div>
                )}
                
                {/* Floating Info Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 p-4 rounded-xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-slate-200 dark:text-slate-300 uppercase tracking-wider font-semibold">Software Development</p>
                      <p className="text-white font-medium">GenAI & Backend Engineering</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
                      AI
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Back Drop Decor */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-600 rounded-[3rem] opacity-20 blur-2xl -z-10"></div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-500 hidden md:block">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
