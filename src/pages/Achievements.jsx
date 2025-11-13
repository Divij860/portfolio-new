import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { achievements } from '../data/projects';

const Achievements = () => {
  const categoryColors = {
    award: 'from-yellow-400 to-orange-500',
    recognition: 'from-blue-400 to-cyan-500',
    certification: 'from-green-400 to-emerald-500',
    education: 'from-purple-400 to-pink-500'
  };

  const getIcon = (iconName) => {
    const iconMap = {
      'trophy': Icons.Trophy,
      'award': Icons.Award,
      'graduation-cap': Icons.GraduationCap,
      'book-open': Icons.BookOpen
    };
    const IconComponent = iconMap[iconName] || Icons.Award;
    return <IconComponent size={32} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Achievements &{' '}
            <span className="bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] bg-clip-text text-transparent">
              Recognition
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Milestones and accomplishments throughout my professional and academic journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#29AAE1]/20 to-[#BC3FE0]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${categoryColors[achievement.category]} text-white mb-4`}>
                  {getIcon(achievement.icon)}
                </div>

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white pr-4">
                    {achievement.title}
                  </h3>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium whitespace-nowrap">
                    {achievement.date}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {achievement.description}
                </p>

                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${categoryColors[achievement.category]} text-white capitalize`}>
                  {achievement.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <Icons.Trophy size={32} />,
              title: 'Awards Won',
              value: '2',
              description: 'Recognition for technical excellence'
            },
            {
              icon: <Icons.Award size={32} />,
              title: 'Certifications',
              value: '3+',
              description: 'Professional certifications earned'
            },
            {
              icon: <Icons.Star size={32} />,
              title: 'Exhibition',
              value: '1',
              description: 'Project selected for showcase'
            }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#29AAE1] to-[#BC3FE0] rounded-2xl p-8 text-white shadow-xl text-center"
            >
              <div className="inline-flex p-4 bg-white/20 rounded-xl mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-2">{stat.title}</div>
              <div className="text-white/80 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Sign Language Project Recognition',
                description: 'Secured 2nd prize at PRAKALPANA 1.0 for developing an innovative sign language animation system'
              },
              {
                title: 'TECHVISION 2024 Selection',
                description: 'Project selected for exhibition at TECHVISION 2024, showcasing technical innovation'
              },
              {
                title: 'Full-Stack Certification',
                description: 'Successfully completed comprehensive Full-Stack Web Development course with modern MERN practices'
              },
              {
                title: 'Academic Excellence',
                description: 'Graduated with 7.7 CGPA in AI & ML specialization from Sahyadri College of Engineering'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50"
              >
                <div className="flex-shrink-0 w-2 bg-gradient-to-b from-[#29AAE1] to-[#BC3FE0] rounded-full" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
