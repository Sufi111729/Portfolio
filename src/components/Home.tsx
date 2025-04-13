import  { ArrowDown } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
    <div className="absolute inset-0 overflow-hidden">
      {/* Using the wooden board image which has a nice dark minimalist look */}
      <img 
        src="https://i.ibb.co/Mk2Zt98k/image.png" 
        alt="Dark Wooden Background" 
        className="w-full h-full object-cover opacity-40"
      />
      {/* Adding a gradient overlay to improve text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
    </div>
  
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-6">
          Muhammad Sufiyan
        </h1>
        <div className="w-20 h-0.5 bg-white mb-6"></div>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl">
          Java Full Stack Developer | Backend Architect | UI Enthusiast
        </p>
        
        <a 
          href="#portfolio"
          className="px-8 py-3 bg-transparent border border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm uppercase tracking-wider"
        >
          View Projects
        </a>
        
        <div className="absolute bottom-10 animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Home;
 