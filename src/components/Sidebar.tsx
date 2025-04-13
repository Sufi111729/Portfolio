import  { Home, User, Image, Mail, ExternalLink, Github } from 'lucide-react';

const Sidebar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed top-0 left-0 w-20 h-screen bg-dark-500 flex flex-col items-center border-r border-dark-300 shadow-xl z-50">
      <div className="w-full py-6 flex justify-center">
        <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold">
          MS
        </div>
      </div>
      
      <nav className="flex-1 w-full">
        <ul className="w-full">
          <li>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('home')}
              aria-label="HOME"
            >
              <Home className="sidebar-icon" />
              <span>HOME</span>
            </button>
          </li>
          <li>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('about')}
              aria-label="ABOUT"
            >
              <User className="sidebar-icon" />
              <span>ABOUT</span>
            </button>
          </li>
          <li>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('portfolio')}
              aria-label="PORTFOLIO"
            >
              <Image className="sidebar-icon" />
              <span>PORTFOLIO</span>
            </button>
          </li>
          <li>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('contact')}
              aria-label="CONTACT"
            >
              <Mail className="sidebar-icon" />
              <span>CONTACT</span>
            </button>
          </li>
        </ul>
      </nav>
      
      <div className="mt-auto pb-6 w-full flex flex-col items-center space-y-6">
        <a 
          href="https://ecommerce.sufiyan.tech" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link"
          aria-label="Ecommerce"
        >
          <ExternalLink className="sidebar-icon" />
          <span>ECOMMERCE</span>
        </a>
        <a 
          href="https://github.com/Sufi111729" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link"
          aria-label="Github"
        >
          <Github className="sidebar-icon" />
          <span>GITHUB</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
 