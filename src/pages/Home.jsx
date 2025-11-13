import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Sparkles,
} from "lucide-react";
import { FaReact, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiFirebase, SiExpress } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";

const Home = () => {
  const techIcons = [
    <FaReact key="react" color="#61DBFB" />,
    <TbBrandMongodb key="mongodb" color="#4DB33D" />,
    <SiExpress key="express" color="#444" />,
    <FaCss3Alt key="css" color="#2965f1" />,
    <SiJavascript key="js" color="#f7df1e" />,
    <SiFirebase key="firebase" color="#FFCA28" />,
    <FaNodeJs key="node" color="#68A063" />,
    <FaGitAlt key="git" color="#F05033" />,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-16">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [20, -30, 10],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="text-[#29AAE1]" size={20} />
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] bg-clip-text text-transparent">
                Divij P
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <Code2 className="text-[#29AAE1]" size={24} />
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                MERN Fullstack Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              Passionate about building scalable and high-performance web
              applications with modern technologies. Specialized in the MERN
              stack with professional experience at Pendagon Technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                >
                  View My Work
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200 dark:border-gray-700"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Connect:
              </span>

              {[
                {
                  icon: <Github size={20} />,
                  href: "https://github.com/Divij860",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin size={20} />,
                  href: "https://linkedin.com/in/divijp860",
                  label: "LinkedIn",
                },
                {
                  icon: <Mail size={20} />,
                  href: "mailto:divijp2002@gmail.com",
                  label: "Email",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-[#29AAE1] hover:to-[#BC3FE0] hover:text-white transition-all shadow-md hover:shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}

              {/* Animated Download CV Button */}
              <motion.a
                href="/Divij Resume.pdf"
                download
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="relative flex items-center overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-all"
              >
                <motion.div
                  variants={{
                    rest: { width: 44 },
                    hover: { width: 140 },
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex items-center justify-center p-3"
                >
                  <Download size={20} className="min-w-[20px]" />
                  <motion.span
                    variants={{
                      rest: { opacity: 0, x: -10 },
                      hover: { opacity: 1, x: 6 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-sm font-medium whitespace-nowrap overflow-hidden"
                  >
                    Download CV
                  </motion.span>
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] rounded-3xl blur-3xl opacity-20" />

              <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/50 shadow-2xl">
                <div className="space-y-4">
                  {[
                    { label: "Experience", value: "2+ Year" },
                    { label: "Projects", value: "15+ Completed" },
                    { label: "Technologies", value: "MERN Stack" },
                    { label: "Location", value: "Kerala, India" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl backdrop-blur-sm"
                    >
                      <span className="text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
                      </span>
                      <span className="text-xl font-bold bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link to="/about">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 cursor-pointer hover:text-[#29AAE1] dark:hover:text-[#BC3FE0] transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowRight size={20} className="rotate-90" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
