import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/lib/constants";
import { Mail, Code, ExternalLink, Phone } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 gradient-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-white mb-8 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Full Stack <span className="text-accent">Java Developer</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100 leading-relaxed">
              Building scalable web applications with Spring Boot, React, and modern technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-primary px-8 py-3 hover:bg-gray-100 transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-primary transition-colors"
              >
                <Code className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name === 'LinkedIn' || link.name === 'GitHub' ? '_blank' : undefined}
                  rel={link.name === 'LinkedIn' || link.name === 'GitHub' ? 'noopener noreferrer' : undefined}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  <i className={`${link.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center animate-slide-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                alt="Professional developer headshot"
                className="w-80 h-80 rounded-full shadow-2xl border-8 border-white/20 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-400 w-16 h-16 rounded-full flex items-center justify-center shadow-lg animate-bounce-gentle">
                <i className="fas fa-check text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
