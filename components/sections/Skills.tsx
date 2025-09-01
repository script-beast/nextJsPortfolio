"use client";

import { motion } from "framer-motion";
import { Code2, Database, Server, Cloud, Wrench, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "blue",
      skills: ["C++", "Java", "JavaScript", "TypeScript", "Python"],
    },
    {
      title: "Frontend",
      icon: Globe,
      color: "purple",
      skills: ["ReactJS", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "green",
      skills: ["NodeJS", "NestJS", "Express", "REST APIs", "GraphQL"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "orange",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase"],
    },
    {
      title: "DevOps/Cloud",
      icon: Cloud,
      color: "cyan",
      skills: ["AWS", "Docker", "CI/CD", "DigitalOcean", "Vercel"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "pink",
      skills: ["Git", "VS Code", "Postman", "Figma", "Linux"],
    },
  ];

  const colorClasses = {
    blue: "border-blue-500/20 bg-blue-500/10 text-blue-400",
    purple: "border-purple-500/20 bg-purple-500/10 text-purple-400",
    green: "border-green-500/20 bg-green-500/10 text-green-400",
    orange: "border-orange-500/20 bg-orange-500/10 text-orange-400",
    cyan: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
    pink: "border-pink-500/20 bg-pink-500/10 text-pink-400",
  };

  return (
    <section id="skills" className="section-padding bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-gray-800/60 border-gray-700 p-4 sm:p-6 h-full backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      colorClasses[category.color as keyof typeof colorClasses]
                    } mr-4`}
                  >
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 sm:px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-600/50 hover:border-gray-500 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
