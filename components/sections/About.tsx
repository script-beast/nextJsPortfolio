"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnkitPic from "@/assets/ankit-pic.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-800/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Passionate about creating innovative solutions and building the
            future of web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/80 border-gray-700 p-6 sm:p-8 backdrop-blur-sm">
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                    <Image
                      src={AnkitPic}
                      alt="Ankit Prajapati"
                      width={128}
                      height={128}
                      priority
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl "
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-400 mb-2 text-sm sm:text-base">
                    <MapPin size={16} />
                    <span>Delhi, India</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-sm sm:text-base">
                    <GraduationCap size={16} />
                    <span>Computer Science Graduate</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Building the Future, One Line of Code at a Time
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              As a Computer Science graduate and passionate Full Stack
              Developer, I specialize in creating scalable web applications
              using the MERN stack and TypeScript. My journey spans from
              developing complex HRMS systems to building AI-powered educational
              tools.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              With experience at innovative companies like Work Companion and
              Greenusys Technologies, I've contributed to projects that have
              improved business efficiency by up to 40%. I'm particularly
              passionate about integrating AI technologies and modern DevOps
              practices into web applications.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest in AI
              development, contributing to open-source projects, or solving
              algorithmic challenges on LeetCode. I believe in continuous
              learning and staying at the forefront of technology trends.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6">
              <Card className="bg-blue-500/10 border-blue-500/20 p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">
                  2+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Years Experience
                </div>
              </Card>
              <Card className="bg-purple-500/10 border-purple-500/20 p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-purple-400">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Projects Completed
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
