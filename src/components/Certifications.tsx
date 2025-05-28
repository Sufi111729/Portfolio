import  { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Java Developer",
      issuer: "JSpiders, Bangalore",
      date: "2022",
      topics: [
        "Core Java",
        "JDBC",
        "Servlets",
        "JSP",
        "Hibernate",
        "Spring MVC",
        "Spring Boot",
        "MySQL",
        "Gradle"
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading inline-block">Certifications</h2>
          <p className="text-gray-400 text-lg">
            Professional qualifications and training
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              className="mb-8"
            >
              <div className="glass-card rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/5 flex justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Award className="text-primary" size={28} />
                    </div>
                  </div>
                  <div className="md:w-4/5">
                    <h3 className="text-2xl font-bold mb-2 gradient-text">{cert.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <span className="text-gray-300">{cert.issuer}</span>
                      <span className="hidden sm:block text-gray-500">•</span>
                      <span className="text-gray-400">{cert.date}</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-200">Topics Covered:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {cert.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-2">
                          <CheckCircle className="text-secondary" size={16} />
                          <span className="text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
 