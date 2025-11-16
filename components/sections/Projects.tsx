"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  Server,
  AppWindowIcon,
  Brain,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import StudySyncPic from "@/assets/study-sync.png";
import cinemaCratePic from "@/assets/cinema-crate.png";
import windowPayloadPic from "@/assets/window-payload.png";
import aivoraPic from "@/assets/aivora.png";

const Projects = () => {
  const projects = [
    {
      title: "Aivora",
      description:
        "Aivora is an AI-powered goal planner that generates roadmaps, analyzes progress, provides insights, and exports visual reports. Built with Next.js, Tailwind, and LangChain, it features a polished dual-theme UI with smooth animations and modern SaaS design.",
      image: aivoraPic,
      tech: ["Langchain", "Next.js", "TypeScript", "Node.js", "MongoDB"],
      icon: Brain,
      color: "orange",
      links: {
        demo: "https://myaivora.vercel.app/",
        frontend: "https://github.com/script-beast/aivora-frontend",
        backend: "https://github.com/script-beast/aivora-backend",
      },
    },
    {
      title: "Study Sync",
      description:
        "AI-powered flashcard & quiz generator built with MERN + TypeScript. Features file upload (PDF/DOCX/TXT), quiz tracking, flashcard export, and integrated Groq SDK + OpenAI for intelligent content generation.",
      image: StudySyncPic,
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "OpenAI", "Groq SDK"],
      icon: Sparkles,
      color: "blue",
      links: {
        demo: "https://myaistudysync.netlify.app/app",
        frontend: "https://github.com/script-beast/studySyncFrontend",
        backend: "https://github.com/script-beast/studySyncBackend",
      },
    },
    {
      title: "Cinema Crate API",
      description:
        "Built a scalable backend using Node.js, Express, TypeScript, and MongoDB, integrating Stripe for secure payments, ApiDog for comprehensive API testing, and additional libraries for email services and data validation, ensuring a reliable, efficient, and production-ready system for real-world applications.",
      image: cinemaCratePic,
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Stripe", "TypeScript"],
      icon: Server,
      color: "green",
      links: {
        demo: "https://pfk4h0lowy.apidog.io",
        github: "https://github.com/script-beast/CinemaCrateBackend",
      },
    },
    {
      title: "Windows Payload Project",
      description:
        "Created a Python client-server system demonstrating remote command execution concepts, focusing on networking, request handling, and secure communication between systems for educational and research purposes.",
      image: windowPayloadPic,
      tech: ["Python", "Socket Programming", "Networking"],
      icon: AppWindowIcon,
      color: "pink",
      links: { github: "https://github.com/script-beast/py_windows_payload" },
    },
  ];

  const colorClasses = {
    blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
    green: "from-green-500/20 to-green-600/20 border-green-500/30",
    orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30",
    pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30",
  };

  return (
    <section id="projects" className="section-padding bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Showcasing my expertise in full-stack development and AI integration
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gray-800/60 border-gray-700 overflow-hidden backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      colorClasses[project.color as keyof typeof colorClasses]
                    } opacity-80`}
                  />
                  <div className="absolute top-4 left-4">
                    <project.icon className="text-white" size={20} />
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-row gap-2">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="flex-1 text-xs sm:text-sm"
                        target="_blank"
                      >
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                        >
                          <ExternalLink className="mr-2" size={16} />
                          Demo
                        </Button>
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="flex-1 text-xs sm:text-sm"
                        target="_blank"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700 w-full"
                        >
                          <Github className="mr-2" size={16} />
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                  {(project.links.frontend || project.links.backend) && (
                    <div className="flex flex-row gap-2 mt-2">
                      {project.links.frontend && (
                        <a
                          href={project.links.frontend}
                          className="flex-1 text-xs sm:text-sm"
                          target="_blank"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-700 w-full"
                          >
                            <Github className="mr-2" size={14} />
                            Frontend
                          </Button>
                        </a>
                      )}
                      {project.links.backend && (
                        <a
                          href={project.links.backend}
                          className="flex-1 text-xs sm:text-sm"
                          target="_blank"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-700 w-full"
                          >
                            <Github className="mr-2" size={14} />
                            Backend
                          </Button>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
