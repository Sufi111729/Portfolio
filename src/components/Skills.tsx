import  { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "Hibernate", "Spring Data JPA", "REST APIs", "Microservices"]
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "JSP", "React (Learning)"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "H2", "JPA", "JDBC"]
    },
    {
      title: "Tools & IDEs",
      skills: ["Git", "Postman", "IntelliJ IDEA", "VS Code", "Eclipse"]
    },
    {
      title: "Testing",
      skills: ["JUnit", "Mockito", "Integration Testing"]
    },
    {
      title: "DevOps",
      skills: ["Maven", "Gradle", "Heroku", "AWS", "CI/CD"]
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
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading inline-block">Technical Skills</h2>
          <p className="text-gray-400 text-lg">
            The technologies and tools I specialize in
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="glass-card rounded-lg p-6 md:p-8"
              variants={item}
            >
              <h3 className="text-xl font-semibold mb-4 gradient-text">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-dark/80 rounded-full text-sm text-gray-300 border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
 