import  { motion } from 'framer-motion';
import { Code, Server, Database, Layers } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-dark-light/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading inline-block">About Me</h2>
          <p className="text-gray-400 text-lg">
            A passionate and detail-oriented developer dedicated to creating efficient solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Who I Am</h3>
              <p className="text-gray-300 mb-4">
                I'm Muhammad Sufiyan, an experienced Java Full Stack Developer with a passion for building secure,
                scalable, and user-friendly web applications.
              </p>
              <p className="text-gray-300 mb-4">
                With expertise in Spring Boot, Hibernate, and modern frontend technologies, I specialize in creating
                end-to-end solutions that are both robust and elegant.
              </p>
              <p className="text-gray-300">
                I'm constantly learning and exploring new technologies to stay at the forefront of web development and
                deliver exceptional results for every project I undertake.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="skill-card">
              <Server className="text-primary mb-3" size={28} />
              <h3 className="font-semibold text-lg mb-2">Backend</h3>
              <p className="text-gray-400 text-sm">Java, Spring Boot, Hibernate, REST APIs</p>
            </div>
            
            <div className="skill-card">
              <Code className="text-secondary mb-3" size={28} />
              <h3 className="font-semibold text-lg mb-2">Frontend</h3>
              <p className="text-gray-400 text-sm">HTML, CSS, JavaScript, Bootstrap, JSP</p>
            </div>
            
            <div className="skill-card">
              <Database className="text-neon mb-3" size={28} />
              <h3 className="font-semibold text-lg mb-2">Databases</h3>
              <p className="text-gray-400 text-sm">MySQL, PostgreSQL, H2</p>
            </div>
            
            <div className="skill-card">
              <Layers className="text-purple-500 mb-3" size={28} />
              <h3 className="font-semibold text-lg mb-2">DevOps</h3>
              <p className="text-gray-400 text-sm">Maven, Gradle, Heroku, AWS</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
 