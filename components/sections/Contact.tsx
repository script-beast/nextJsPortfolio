"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Code2, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
      );
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/script-beast",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/aprajapati028/",
      color: "hover:text-blue-400",
    },
    {
      name: "LeetCode",
      icon: Code2,
      url: "https://leetcode.com/u/Ankitkp028/",
      color: "hover:text-orange-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:ankitkp028@gmail.com",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let&lsquo;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Ready to collaborate on your next project or discuss opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800/60 border-gray-700 p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 h-12"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 h-12"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 h-12"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-gray-800/60 border-gray-700 p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <Mail className="mr-3 text-blue-400" size={20} />
                  <span>ankitkp028@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <MapPin className="mr-3 text-purple-400" size={20} />
                  <span>Delhi, India</span>
                </div>
              </div>

              <h4 className="text-base sm:text-lg font-semibold text-white mb-4">
                Connect with me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center p-3 sm:p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 text-gray-400 transition-all duration-300 ${link.color} hover:border-gray-500`}
                  >
                    <link.icon className="mr-1 sm:mr-2" size={16} />
                    <span className="font-medium text-xs sm:text-sm">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3">
                Open to Opportunities
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                I&apos;m always interested in hearing about new opportunities,
                especially those involving cutting-edge technologies, AI
                integration, or challenging full-stack projects. Let&apos;s
                build something amazing together!
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
