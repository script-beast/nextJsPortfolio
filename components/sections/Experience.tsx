"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Work Companion",
      role: "Associate Software Developer",
      period: "May 2024 – Present",
      location: "Remote",
      type: "Full-time",
      description:
        "Leading development of HRMS modules and system optimizations",
      achievements: [
        "Built comprehensive HRMS modules including Offboarding, Document Directory, and Loan & Expense management using React and Node.js",
        "Enhanced onboarding system with TypeScript integration and Google Maps API for location services",
        "Established CI/CD pipeline and successfully deployed applications on DigitalOcean cloud infrastructure",
        "Collaborated with cross-functional teams to deliver scalable solutions for HR management",
      ],
      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "DigitalOcean",
        "CI/CD",
      ],
    },
    {
      company: "Greenusys Technologies",
      role: "Full Stack Developer",
      period: "Jun 2023 – Apr 2024",
      location: "Delhi, India",
      type: "Full-time",
      description: "Delivered high-impact client projects using MERN stack",
      achievements: [
        "Successfully delivered multiple client projects including banking and food ordering applications",
        "Implemented complex features like automated EMI calculations and real-time order tracking",
        "Achieved 40% improvement in application efficiency through optimized database queries and caching",
        "Mentored junior developers and established coding best practices within the team",
      ],
      tech: ["MERN Stack", "JavaScript", "MongoDB", "Express", "AWS"],
    },
    {
      company: "BITCS",
      role: "SDE Intern",
      period: "May 2022 – May 2023",
      location: "Remote",
      type: "Internship",
      description: "Focused on backend development and API architecture",
      achievements: [
        "Developed 40+ robust APIs using NodeJS and NestJS with comprehensive documentation",
        "Architected and launched a matrimonial application serving thousands of users",
        "Implemented secure authentication systems and optimized database performance",
        "Gained expertise in scalable backend architecture and microservices design",
      ],
      tech: ["NodeJS", "NestJS", "MongoDB", "REST APIs", "JWT"],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gray-800/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Building innovative solutions and driving technological excellence
          </p>
        </motion.div>

        <div className="space-y-6 lg:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/60 border-gray-700 p-4 sm:p-6 lg:p-8 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/3">
                    <div className="flex items-center mb-2">
                      <Building2 className="text-blue-400 mr-2" size={20} />
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.company}
                      </h3>
                    </div>
                    <h4 className="text-base sm:text-lg text-blue-400 font-semibold mb-3">
                      {exp.role}
                    </h4>

                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="mr-2" size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2" size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <span className="inline-block px-2 py-1 bg-gray-700/50 rounded text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <p className="text-sm sm:text-base text-gray-300 mb-4 font-medium">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-xs sm:text-sm flex items-start"
                        >
                          <span className="text-blue-400 mr-2 mt-1.5 block w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
