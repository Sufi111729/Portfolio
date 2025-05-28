import  { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <span className="text-neon text-lg">Hello, I'm</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Muhammad <span className="gradient-text">Sufiyan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Java Full Stack Developer
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Building secure and scalable web applications with Spring Boot, Hibernate, and modern frontend technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all flex items-center group"
              >
                Hire Me
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a 
                href="#" 
                className="px-6 py-3 bg-transparent border border-neon text-white rounded-full hover:bg-neon/10 transition-all flex items-center"
              >
                <Download className="mr-2" size={18} />
                Resume
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <a href="https://github.com/Sufi111729" className="text-gray-400 hover:text-neon transition-colors" target="_blank" rel="noopener noreferrer">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/sufiyan2k1/" className="text-gray-400 hover:text-neon transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={22} />
              </a>
              <a href="mailto:sufi11729@gmail.com" className="text-gray-400 hover:text-neon transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-secondary p-1 shadow-lg shadow-primary/30">
                <img 
                  src="src/photo_2025-05-28_21-14-02.jpg" 
                  alt="Muhammad Sufiyan" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <div className="absolute -bottom-2 -right-2 bg-dark-light px-4 py-2 rounded-full glass-card">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium">Available for hire</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
 