"use client";

import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800/80 border-t border-gray-700">
      <div className="container-max">
        <div className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Code className="text-blue-400 mr-2" size={20} />
              <span className="text-gray-300 text-sm sm:text-base">
                Built with Next.js & Tailwind CSS
              </span>
            </div>

            <div className="flex items-center justify-center text-gray-400 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="mx-2 text-red-400" size={16} />
              <span>by Ankit Prajapati © 2025</span>
            </div>

            <div className="mt-4 text-xs text-gray-500 px-4 text-center">
              Designed for recruiters and tech enthusiasts
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
