'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Ankit Prajapati</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 font-medium px-4">
              Full Stack Developer | MERN + TypeScript | AI Enthusiast
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              I build scalable web applications and AI-powered tools, specializing in MERN stack, 
              TypeScript, and cloud deployment. Passionate about creating solutions that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto"
            >
              <Download className="mr-2" size={20} />
              View Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProjects}
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Eye className="mr-2" size={20} />
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="animate-bounce"
          >
            <ArrowDown className="mx-auto text-gray-500" size={24} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;