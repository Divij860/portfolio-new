import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const SkillCard = ({ skill, index }) => {
  const IconComponent = Icons[skill.icon.split('-').map((word, i) =>
    i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1)
  ).join('')] || Icons.Code;

  const categoryColors = {
    frontend: 'from-blue-500 to-cyan-500',
    backend: 'from-green-500 to-emerald-500',
    language: 'from-yellow-500 to-orange-500',
    tools: 'from-purple-500 to-pink-500',
    design: 'from-pink-500 to-rose-500',
    security: 'from-red-500 to-orange-500',
    deployment: 'from-indigo-500 to-blue-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#29AAE1]/20 to-[#BC3FE0]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
        <div className={`w-12 h-12 mb-3 rounded-lg bg-gradient-to-r ${categoryColors[skill.category]} flex items-center justify-center`}>
          <IconComponent size={24} className="text-white" />
        </div>

        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
          {skill.name}
        </h3>

        <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
          {skill.category}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
