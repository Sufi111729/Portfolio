import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Github, ChevronRight, Database, Users, FileText } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      title: "News Portal Application",
      description: "A comprehensive news portal with role-based access control, allowing different user types to manage content and access specific features.",
      technologies: ["Spring Boot", "JSP", "H2 Database", "REST APIs", "DAO Layer"],
      features: [
        "Role-based access: Admin, Editor, Publisher, User",
        "Complete content management system",
        "User authentication and authorization",
        "Responsive frontend with JSP"
      ],
      icon: <FileText className="text-primary" size={36} />
    },
    {
      title: "Student Management System",
      description: "A robust system for educational institutions to manage student records, courses, grades, and administrative tasks.",
      technologies: ["Spring Boot", "MySQL", "JSP", "CRUD Operations", "JPA"],
      features: [
        "Admin panel with dashboard",
        "Student and course management",
        "Pagination and advanced filtering",
        "Data export and reporting features"
      ],
      icon: <Users className="text-secondary" size={36} />
    },
    {
      title: "Blog Application",
      description: "A secure blogging platform with JWT authentication, enabling users to create, manage, and interact with blog posts.",
      technologies: ["Spring Boot", "JWT", "PostgreSQL", "REST APIs", "Hibernate"],
      features: [
        "Token-based authentication",
        "Post and comment management",
        "User profile customization",
        "Category and tag filtering"
      ],
      icon: <Database className="text-neon" size={36} />
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-dark-light/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading inline-block">Featured Projects</h2>
          <p className="text-gray-400 text-lg">
            Showcasing my work and technical capabilities
          </p>
        </motion.div>

        <div className="flex overflow-x-auto mb-8 pb-2 scrollbar-hide justify-center">
          <div className="flex space-x-2">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeTab === index
                    ? 'bg-primary text-white'
                    : 'bg-dark-light text-gray-400 hover:text-white'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="gradient-border">
            <div className="glass-card rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/4 flex justify-center">
                  {projects[activeTab].icon}
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-2 gradient-text">{projects[activeTab].title}</h3>
                  <p className="text-gray-300 mb-4">{projects[activeTab].description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 text-gray-200">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeTab].technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-dark rounded-full text-sm text-neon">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-gray-200">Key Features:</h4>
                    <ul className="space-y-2">
                      {projects[activeTab].features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="text-primary mr-2 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4">
                    <a href="#" className="px-4 py-2 bg-dark flex items-center gap-2 rounded-lg hover:bg-dark/80 transition-colors">
                      <Github size={18} />
                      <span>Source Code</span>
                    </a>
                    <a href="#" className="px-4 py-2 bg-primary/10 flex items-center gap-2 rounded-lg hover:bg-primary/20 transition-colors text-primary">
                      <Globe size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
 