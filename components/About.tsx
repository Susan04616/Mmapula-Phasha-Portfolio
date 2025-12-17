
import React from 'react';
import { Target, Lightbulb, TrendingUp, Calendar, MapPin, Building2, Laptop, Code, Share2, Server, Database, Layout, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const experienceHighlights = [
    {
      title: "Full Stack Development",
      desc: "Expertise in Java (Spring Boot) and Angular.",
      icon: <Code size={16} />
    },
    {
      title: "Microservices & APIs",
      desc: "Developed and secured RESTful APIs and integrated microservices using Apache Kafka.",
      icon: <Share2 size={16} />
    },
    {
      title: "Containerization",
      desc: "Hands-on experience with Docker and containerized deployments.",
      icon: <Server size={16} />
    },
    {
      title: "Database Skills",
      desc: "Worked with SQL scripts for data operations and system functionality.",
      icon: <Database size={16} />
    },
    {
      title: "Specialized UI/UX",
      desc: "Used Temenos Infinity, JavaScript, and Kony Visualizer to build responsive interfaces.",
      icon: <Layout size={16} />
    },
    {
      title: "Methodology",
      desc: "Practiced Agile collaboration and delivered scalable and secure solutions.",
      icon: <ShieldCheck size={16} />
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-900/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Separate Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Who I Am */}
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 h-full flex flex-col shadow-xl dark:shadow-none">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Who I Am</h3>
               <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                 I completed my National Diploma in Software Development at Rosebank College, where I built a solid academic foundation in problem-solving, analytical thinking, and disciplined learning. Through my studies, I developed a strong interest in understanding how technology can be used to create practical and meaningful solutions. I am a committed and growth-oriented individual who values continuous learning, teamwork, and accountability, and I strive to apply these qualities in everything I do as I grow within the technology field.
               </p>
               <div className="space-y-4 mt-auto">
                 <div className="flex items-start gap-4 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mt-1">
                      <Target size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-semibold">Specialization</h4>
                      <p className="text-slate-500 text-sm">Full Stack Development</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400 mt-1">
                      <Lightbulb size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-semibold">Current Focus</h4>
                      <p className="text-slate-500 text-sm">AI & Responsible AI</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Card 2: Career Objectives */}
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 h-full flex flex-col shadow-xl dark:shadow-none">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Career Objectives</h3>
              <div className="space-y-4 mb-8 text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">
                <p>
                  A motivated and detail-oriented software professional with hands-on experience in Angular front-end development, digital banking solutions (Temenos Infinity), and backend systems using Java, Spring Boot and RESTful APIs.
                </p>
                <p>
                  Currently strengthening skills through the CAPACITI FNB Academy, with a strong foundation in system administration and networking. Seeking an opportunity to contribute to innovative, user-centric technology solutions while continuously growing as a full-stack and AI-aware developer.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200 dark:border-slate-800 text-center hover:bg-white dark:hover:bg-slate-800 transition-colors group/card shadow-sm">
                  <span className="block text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1 group-hover/card:scale-105 transition-transform">FinTech Systems</span>
                  <span className="text-slate-500 text-xs md:text-sm">Specialized in Banking & Backend APIs</span>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200 dark:border-slate-800 text-center hover:bg-white dark:hover:bg-slate-800 transition-colors group/card shadow-sm">
                  <span className="block text-xl md:text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1 group-hover/card:scale-105 transition-transform">AI-Aware Engineering</span>
                  <span className="text-slate-500 text-xs md:text-sm">Integrating AI into User-Centric Solutions</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Professional Experience Section */}
        <div>
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 dark:bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
                    <Building2 size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
            </div>

            <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 shadow-xl dark:shadow-none">
                <div className="grid md:grid-cols-12 gap-0">
                    
                    {/* Left: Company Sidebar */}
                    <div className="md:col-span-4 bg-slate-50 dark:bg-slate-950/50 p-8 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800/50 flex flex-col justify-between">
                        <div>
                            {/* Logo Placeholder */}
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 mb-5">
                                <span className="text-white font-bold text-xl tracking-tight">Mp</span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Software Developer Intern</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-6">Mpilo Technologies (Pty) Ltd</p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Java</span>
                                <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Angular</span>
                                <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">Kafka</span>
                            </div>
                        </div>

                        <div className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                                <Calendar size={14} className="text-slate-400 dark:text-slate-500" />
                                <span>Oct 2024 - Sep 2025 · 1 yr</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-slate-400 dark:text-slate-500" />
                                <span>South Africa · Hybrid</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Key Highlights Grid */}
                    <div className="md:col-span-8 p-8 bg-white dark:bg-slate-900/20">
                        <h4 className="text-slate-900 dark:text-white font-semibold mb-6 flex items-center gap-2">
                           <Laptop size={18} className="text-cyan-500 dark:text-cyan-400" />
                           Key Experience Highlights
                        </h4>
                        
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                            {experienceHighlights.map((item, index) => (
                                <div key={index} className="group">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                            {item.icon}
                                        </span>
                                        <h5 className="text-slate-800 dark:text-slate-200 font-medium text-sm">{item.title}</h5>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 text-xs pl-9 border-l border-slate-200 dark:border-slate-800 group-hover:border-blue-500/30 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
