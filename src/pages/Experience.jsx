import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Timeline from '../components/Timeline';
import { experience } from '../data/projects';

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0]">
              <Briefcase className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey through the tech industry, building scalable solutions and growing as a developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Timeline experiences={experience} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] rounded-3xl p-8 text-white shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-4">Professional Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Years of Experience', value: '1+' },
              { label: 'Companies Worked', value: '2' },
              { label: 'Projects Delivered', value: '15+' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Full-stack web development with MERN stack',
              'RESTful API design and implementation',
              'Database design and optimization',
              'Authentication and authorization systems',
              'Payment gateway integration',
              'Admin dashboard development',
              'Responsive UI/UX implementation',
              'Git version control and collaboration',
              'Agile development methodology',
              'Performance optimization',
              'Security best practices',
              'Cloud deployment and hosting'
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.05 }}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
              >
                <span className="text-[#29AAE1]">✓</span>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
