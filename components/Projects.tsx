
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, FolderGit2, Code2 } from 'lucide-react';

const CATEGORIES = ['All', 'AI/ML', 'Full-Stack', 'Backend', 'Mobile'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Selected Works</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              A curated selection of projects demonstrating expertise in robust backend architecture, mobile solutions, and next-gen AI integration.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border backdrop-blur-sm ${
                  activeCategory === category
                    ? 'bg-blue-600 dark:bg-white text-white dark:text-slate-900 border-blue-600 dark:border-white'
                    : 'bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Standard Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            return (
              <div 
                key={project.id} 
                className="group flex flex-col rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 backdrop-blur-sm hover:border-blue-400/50 dark:hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/800x600/1e293b/64748b?text=${project.title}`;
                    }}
                  />
                  {project.category && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800/50 text-xs text-slate-600 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Footer */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {project.githubLink ? (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-white text-sm font-medium transition-colors group/btn active:scale-95"
                      >
                        <Github size={16} className="text-slate-500 dark:text-slate-400 group-hover/btn:text-slate-900 dark:group-hover/btn:text-white transition-colors" />
                        <span>View Code</span>
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 text-sm font-medium cursor-not-allowed">
                        <Github size={16} />
                        <span>Private</span>
                      </div>
                    )}
                    
                    {project.liveLink ? (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors shadow-lg shadow-blue-900/20 hover:shadow-blue-600/30 active:scale-95"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                       /* Empty placeholder to keep alignment if needed, or allow code button to stretch */
                       <div className="hidden"></div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
            <a 
              href="https://github.com/Susan04616" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group active:scale-95"
            >
              <FolderGit2 size={18} className="group-hover:text-blue-400" />
              <span>Explore full archive on GitHub</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
