export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const heroProfile = {
  title: "Hi, I'm SUFI.",
  subtitle: 'Full-Stack Developer focused on scalable web applications.',
  credibility:
    'Building production-ready systems with clean architecture, predictable APIs, and measurable performance improvements.',
  skillChips: ['Java', 'Spring Boot', 'MySQL', 'React', 'JavaScript'],
  quickInfo: [
    { label: 'Location', value: 'INDIA [UP, Kushinagar]' },
    { label: 'Email', value: 'muhammmadsufiyandev01@gmail.com' },
    { label: 'GitHub', value: 'github.com/Sufi111729' },
    { label: 'Status', value: 'Open to Work' }
  ]
};

export const highlights = [
  { label: 'Projects Delivered', value: '12+' },
  { label: 'APIs Built', value: '30+' },
  { label: 'Dashboards Implemented', value: '8+' },
  { label: 'Tools Used in Delivery', value: '15+' }
];

export const aboutSummary = [
  'I build backend services and frontend interfaces that are straightforward to maintain in production environments.',
  'My core backend stack is Java, Spring Boot, and MySQL, with API design focused on predictable contracts and safe schema evolution.',
  'On the frontend, I use React and JavaScript to deliver clear user flows, reliable data fetching, and consistent component behavior.',
  'I prioritize architecture decisions that improve testability, deployment confidence, and long-term readability across the codebase.',
  'Performance work usually includes query tuning, API response optimization, and reducing unnecessary rendering on the client.',
  'I value clean code standards, meaningful code reviews, and practical documentation that helps teams move faster without sacrificing quality.'
];

export const stackGroups = [
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'JPA/Hibernate', 'JUnit']
  },
  {
    title: 'Frontend',
    items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: 'Tools',
    items: ['Git', 'Postman', 'Docker', 'Maven', 'VS Code', 'IntelliJ IDEA']
  }
];

export const projects = [
  {
    name: 'PAN Card Services Portal',
    problem:
      'Applicants struggled with scattered requirements for PAN card services, including strict photo and signature size rules.',
    solution:
      'Built a guided web portal that validates inputs, formats files to standard dimensions, and streamlines form submissions.',
    outcome:
      'Reduced submission errors by enforcing size/format checks and providing clear, step-by-step guidance.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Photo and signature size validation with automatic resize guidance',
      'Form field validation aligned with PAN card requirements',
      'Service flow for new PAN, correction, and reprint requests',
      'Submission checklist with status-ready file previews'
    ],
    githubUrl: 'https://github.com/Sufi111729/indiagovservices.git',
    liveDemoUrl: 'https://indiagovservices.netlify.app'
  },
  {
    name: 'Golden Photo Studio Management System',
    problem:
      'Booking and payment tracking relied on manual logs, causing schedule conflicts and billing gaps.',
    solution:
      'Developed a studio operations system covering booking, customer history, package management, and billing status.',
    outcome:
      'Created a reliable workflow for booking visibility and faster follow-up on pending payments.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'JavaScript'],
    features: [
      'Session booking calendar with date-based conflict prevention',
      'Customer profile tracking with package history and invoice records',
      'Payment status updates with overdue reminders for pending balances',
      'Operational dashboard summarizing monthly bookings and revenue trends'
    ],
    githubUrl: 'https://github.com/Sufi111729',
    liveDemoUrl: 'https://goldenphotostudio.netlify.app/'
  }
];

export const experienceItems = [
  {
    role: 'Full-Stack Developer',
    period: '2023 - Present',
    highlights: [
      'Reduced average API response time by 38% by refactoring query logic and introducing selective indexing strategies.',
      'Improved deployment reliability by adding environment parity checks and integration tests to release pipelines.',
      'Cut repetitive support tickets by standardizing backend validation and exposing clear error messages in the frontend.',
      'Collaborated with stakeholders to break large requirements into incremental releases with measurable delivery milestones.'
    ]
  }
];

export const contact = {
  email: 'muhammadsufiyandev01@gmail.com',
  github: 'https://github.com/Sufi111729',
  linkedin: 'https://linkedin.com/in/sufiyan2k1'
};
