import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Timeline = ({ experiences }) => {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#29AAE1] to-[#BC3FE0]" />

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative pl-20 pb-12 last:pb-0"
        >
          <div className="absolute left-5 top-0 w-7 h-7 rounded-full bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] flex items-center justify-center text-white font-bold text-sm border-4 border-white dark:border-gray-900">
            {exp.logo}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                  <Briefcase size={16} />
                  <span className="font-medium">{exp.company}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                  <span className="text-[#29AAE1] mt-1.5">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-[#29AAE1]/10 to-[#BC3FE0]/10 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-[#29AAE1]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
