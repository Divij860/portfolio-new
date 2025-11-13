import { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, Star, Code } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Folder size={18} /> },
    { id: 'featured', label: 'Featured', icon: <Star size={18} /> },
    { id: 'client', label: 'Client Work', icon: <Code size={18} /> },
    { id: 'technical', label: 'Technical', icon: <Code size={18} /> }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in fullstack development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              {filter.icon}
              {filter.label}
              {filter.id !== 'all' && (
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeFilter === filter.id
                    ? 'bg-white/20'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}>
                  {filter.id === 'featured'
                    ? projects.filter(p => p.featured).length
                    : projects.filter(p => p.category === filter.id).length
                  }
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-500 dark:text-gray-500">
              No projects found in this category
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
