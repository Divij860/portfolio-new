import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase, Target } from 'lucide-react';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/projects';

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering',
      institution: 'Sahyadri College of Engineering and Management',
      specialization: 'Artificial Intelligence and Machine Learning',
      period: '2020 - 2024',
      grade: '7.7 CGPA'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'HHSIBSHSS, Edneer',
      specialization: 'PCMB',
      period: '2020',
      grade: '92%'
    }
  ];

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
            About{' '}
            <span className="bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer dedicated to creating exceptional web experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0]">
                    <User className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Journey</h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    Hello! I'm Divij P, a passionate <strong className="text-gray-800 dark:text-white">MERN Fullstack Developer</strong> from
                    Kasaragod, Kerala. My journey in tech began during my Bachelor's in Engineering, where I specialized in
                    Artificial Intelligence and Machine Learning.
                  </p>
                  <p>
                    What started as curiosity about how websites work evolved into a deep passion for building scalable,
                    high-performance web applications. I love the challenge of turning complex problems into elegant solutions.
                  </p>
                  <p>
                    Currently working at <strong className="text-gray-800 dark:text-white">Pendagon Technologies</strong>,
                    I've had the opportunity to work on diverse projects ranging from e-commerce platforms to innovative
                    technical solutions like sign language animation systems.
                  </p>
                  <p>
                    When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or working
                    on personal projects that push the boundaries of what's possible with web technologies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0]">
                  <Target className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">What I Do</h2>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                {[
                  'Build responsive and performant web applications',
                  'Design and implement RESTful APIs',
                  'Create intuitive user interfaces with modern frameworks',
                  'Implement secure authentication and authorization',
                  'Optimize application performance and scalability',
                  'Collaborate with teams using Git workflows'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-[#29AAE1] mt-1">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] rounded-3xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={24} />
                <h3 className="text-xl font-bold">Current Role</h3>
              </div>
              <p className="text-lg font-semibold mb-1">MERN Fullstack Developer</p>
              <p className="text-white/90">Pendagon Technologies</p>
              <p className="text-white/80 text-sm mt-2">Sep 2024 - Present</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0]">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{edu.specialization}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-500">{edu.period}</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] text-white rounded-full text-sm font-semibold">
                    {edu.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <SkillCard key={i} skill={skill} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
