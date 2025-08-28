'use client';

import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  link: string;
  category: string[];
  image: string;
}

interface PortfolioGalleryProps {
  projects: Project[];
  categories?: string[];
}

const Portfolio: React.FC<PortfolioGalleryProps> = ({
  projects,
  categories = ['all', 'branding', 'web', 'print'],
}) => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-mono uppercase tracking-wide text-sm transition-all duration-300 border border-[#00ffcc] hover:bg-[#00ffcc] hover:text-black ${
              filter === category ? 'bg-[#00ffcc] text-black' : 'text-[#00ffcc]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="break-inside-avoid group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative overflow-hidden rounded-2xl bg-[#111] shadow-[0_0_15px_#00ffcc22] transition-all duration-300 hover:shadow-[0_0_25px_#00ffcc88] hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ height: `${200 + (index % 3) * 100}px` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-[#00ffcc] rounded-full flex items-center justify-center">
                      <Eye className="w-5 h-5 text-black" />
                    </div>
                    <div className="w-10 h-10 bg-[#00ffcc] rounded-full flex items-center justify-center">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 text-black" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 text-[#00ffcc] font-mono">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-[#00ffccbb]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#00ffcc22] text-[#00ffcc] text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
<AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedProject(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-[#111] text-[#00ffcc] font-mono rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#00ffcc55]"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Модалка */}
        <div className="relative">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-64 object-cover rounded-t-3xl"
          />
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-[#00ffcc] rounded-full flex items-center justify-center text-black text-xl hover:bg-[#00ffaa] transition-colors"
          >
            ×
          </button>
        </div>

        <div className="p-8">
          <div className="inline-block px-4 py-2 bg-[#00ffcc22] text-[#00ffcc] font-medium rounded-full mb-4 capitalize">
            {selectedProject.category.join(', ')}
          </div>
          <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
          <p className="text-lg text-[#00ffccbb] leading-relaxed mb-6">
            {selectedProject.description}
          </p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-3">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#00ffcc22] text-[#00ffcc] font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00ffcc] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#00ffaa]"
          >
            View Live Project
          </a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};

export default Portfolio;
