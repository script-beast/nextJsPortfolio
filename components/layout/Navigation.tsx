'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="container-max px-4 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl font-bold gradient-text"
          >
            Ankit Prajapati
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm xl:text-base"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <motion.a
              href="https://github.com/script-beast"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aprajapati028/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="mailto:ankitkp028@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={18} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-800 border-t border-gray-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-700">
                <a href="https://github.com/script-beast" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="text-gray-400 hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/aprajapati028/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} className="text-gray-400 hover:text-white" />
                </a>
                <a href="mailto:ankitkp028@gmail.com">
                  <Mail size={20} className="text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;