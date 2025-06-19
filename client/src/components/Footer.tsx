import { personalInfo, socialLinks } from "@/lib/constants";

export default function Footer() {
  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MS</span>
              </div>
              <span className="font-semibold text-xl">{personalInfo.name}</span>
            </div>
            <p className="text-gray-400 mb-4">
              Full Stack Java Developer passionate about creating innovative solutions with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name === 'LinkedIn' || link.name === 'GitHub' ? '_blank' : undefined}
                  rel={link.name === 'LinkedIn' || link.name === 'GitHub' ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <i className="fas fa-envelope mr-2"></i>
                {personalInfo.email}
              </p>
              <p>
                <i className="fas fa-phone mr-2"></i>
                {personalInfo.phone}
              </p>
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i>
                {personalInfo.location}
              </p>
              <p>
                <i className="fas fa-clock mr-2"></i>
                Available for immediate joining
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 {personalInfo.name}. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
