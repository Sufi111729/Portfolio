import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function Portfolio() {
  useEffect(() => {
    const backToTopBtn = document.getElementById('back-to-top');
    
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        backToTopBtn?.classList.remove('opacity-0', 'invisible');
      } else {
        backToTopBtn?.classList.add('opacity-0', 'invisible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      
      {/* Back to Top Button */}
      <Button
        id="back-to-top"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 gradient-primary text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 invisible z-50"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
