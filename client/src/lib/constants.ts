export const personalInfo = {
  name: "Muhammad Sufiyan",
  title: "Full Stack Java Developer",
  email: "muhammadsufiyandev01@gmail.com",
  phone: "+91-8574774647",
  location: "Bangalore, India",
  linkedin: "https://linkedin.com/in/sufiyan2k1",
  github: "https://github.com/Sufi111729",
  portfolio: "https://sufiweb.netlify.app",
  
  objective: "Motivated Computer Science graduate with practical experience in full stack Java development including REST APIs, Spring Boot, and MySQL. Seeking to apply technical skills and passion for innovation in a Graduate Engineer Trainee role in telecom or network infrastructure projects.",
  
  availability: "Available for immediate joining and relocation",
  
  skills: {
    languages: [
      { name: "Java", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5/CSS3", level: 85 },
      { name: "SQL", level: 80 }
    ],
    frameworks: ["Spring Boot", "React", "Hibernate", "TypeScript"],
    databases: ["MySQL", "JPA/Hibernate ORM"],
    tools: ["Git/GitHub", "Maven", "Postman", "VS Code", "Eclipse"],
    networking: "Fundamentals of 2G, 3G, 4G and network deployment",
    softSkills: ["Communication", "Teamwork", "Problem-solving", "Adaptability"]
  },
  
  projects: [
    {
      name: "Employee Management System",
      type: "Full Stack",
      description: "A comprehensive CRUD application built with Spring Boot backend and React frontend, featuring RESTful APIs, MySQL database integration, and modern UI design principles.",
      technologies: ["Spring Boot", "React", "TypeScript", "MySQL", "Maven"],
      features: [
        "Full CRUD operations with RESTful API design",
        "Responsive React frontend with TypeScript",
        "JPA/Hibernate ORM for database management",
        "Comprehensive error handling and validation"
      ],
      liveDemo: "https://emsdb.netlify.app",
      backendCode: "https://github.com/Sufi111729/Ems-back-end",
      frontendCode: "https://github.com/Sufi111729/Ems-front-end",
      period: "Dec 2022 – Jan 2023"
    },
    {
      name: "Portfolio Website",
      type: "Frontend",
      description: "A responsive personal portfolio website showcasing projects and professional background, featuring GitHub API integration and modern design principles.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GitHub API", "Netlify"],
      features: [
        "Fully responsive design with cross-device compatibility",
        "Dynamic GitHub repository fetcher using REST API",
        "SEO optimized for better search visibility",
        "Continuous deployment via GitHub integration"
      ],
      liveDemo: "https://sufiweb.netlify.app",
      sourceCode: "https://github.com/Sufi111729/Portfolio",
      period: "Nov 2022 – Present"
    }
  ],
  
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Technocrats Institute of Technology, Bhopal",
      period: "2021 - 2024",
      description: "Comprehensive computer science education covering algorithms, data structures, software engineering, and modern development practices."
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "MSMT, Delhi",
      period: "2018 - 2021",
      description: "Foundation in computer engineering principles, programming fundamentals, and technical problem-solving skills."
    }
  ],
  
  certifications: [
    {
      name: "Full Stack Java Developer",
      issuer: "JSpiders, Bangalore",
      year: "2022",
      description: "Intensive full-stack development certification covering enterprise-level Java technologies and modern web development practices.",
      technologies: ["Core Java", "JDBC", "JSP", "Servlets", "Hibernate", "Spring Boot", "Git", "MySQL", "Postman"]
    }
  ],
  
  languages: [
    { name: "Hindi", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Urdu", level: "Basic Reading" }
  ]
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: personalInfo.linkedin,
    icon: "fab fa-linkedin",
    color: "text-blue-600"
  },
  {
    name: "GitHub",
    url: personalInfo.github,
    icon: "fab fa-github",
    color: "text-gray-800"
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "fas fa-envelope",
    color: "text-red-600"
  },
  {
    name: "Phone",
    url: `tel:${personalInfo.phone}`,
    icon: "fas fa-phone",
    color: "text-green-600"
  }
];
