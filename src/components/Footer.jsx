import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { HiDocumentDownload } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/Divij860', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/divijp860', label: 'LinkedIn' },
    { icon: <FaEnvelope size={20} />, href: 'mailto:divijp2002@gmail.com', label: 'Email' },
    { icon: <FaWhatsapp size={20} />, href: 'https://wa.me/+916282472416', label: 'WhatsApp' },
    { icon: <HiDocumentDownload size={20} />, href: '/src/assets/Divij Resume.pdf', label: 'Resume', download: true }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#29AAE1] to-[#BC3FE0] bg-clip-text text-transparent mb-4">
              Divij P
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              MERN Fullstack Developer specializing in building scalable and high-performance web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.download ? '_self' : '_blank'}
                  rel={link.download ? '' : 'noopener noreferrer'}
                  download={link.download}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-[#29AAE1] hover:to-[#BC3FE0] hover:text-white transition-all shadow-sm"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-[#29AAE1] dark:hover:text-[#BC3FE0] transition-colors inline-block"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Kasaragod, Kerala</li>
              <li>
                <a href="mailto:divijp2002@gmail.com" className="hover:text-[#29AAE1] dark:hover:text-[#BC3FE0] transition-colors">
                  divijp2002@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+916282472416" className="hover:text-[#29AAE1] dark:hover:text-[#BC3FE0] transition-colors">
                  +91 6282472416
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Divij P. All rights reserved. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
