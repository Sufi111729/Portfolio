import  { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="text-neon mr-2" size={20} />
            <span className="text-white font-semibold">Muhammad Sufiyan</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved. Built with <Heart className="inline-block text-red-500" size={14} />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 