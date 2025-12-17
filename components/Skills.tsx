
import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Server, Layout, Database, Terminal, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes("Languages")) return <Code2 className="text-blue-500 dark:text-blue-400 h-6 w-6" />;
    if (category.includes("Backend")) return <Server className="text-cyan-500 dark:text-cyan-400 h-6 w-6" />;
    if (category.includes("Frontend")) return <Layout className="text-sky-500 dark:text-sky-400 h-6 w-6" />;
    if (category.includes("Data")) return <Database className="text-indigo-500 dark:text-indigo-400 h-6 w-6" />;
    if (category.includes("DevOps")) return <Terminal className="text-orange-500 dark:text-orange-400 h-6 w-6" />;
    return <Cpu className="text-slate-500 dark:text-slate-400 h-6 w-6" />;
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden scroll-mt-20">
       {/* Ambient Background - Dark mode only */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none hidden dark:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Tech Stack</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md text-right md:text-left">
            A comprehensive toolkit refined through rigorous training and enterprise application development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {SKILLS.map((skillGroup, index) => (
            <div key={index} className="relative pl-6 border-l border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors duration-300 group">
              {/* Glowing Dot on Hover */}
              <div className="absolute -left-[5px] top-0 h-[9px] w-[9px] rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-blue-400 transition-colors duration-300"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white dark:bg-slate-900/80 rounded-lg group-hover:bg-slate-100 dark:group-hover:bg-slate-800 transition-colors backdrop-blur-sm border border-slate-100 dark:border-transparent">
                    {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-white">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="relative overflow-hidden group/item"
                  >
                     <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 translate-y-full group-hover/item:translate-y-0 transition-transform duration-300 rounded-lg"></div>
                     <span className="relative block px-3 py-2 bg-white dark:bg-slate-900/80 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-medium border border-slate-200 dark:border-slate-800 group-hover/item:text-blue-600 dark:group-hover/item:text-white group-hover/item:border-slate-300 dark:group-hover/item:border-slate-700 transition-colors cursor-default backdrop-blur-sm">
                        {skill}
                     </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
