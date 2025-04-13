import  { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">CONTACT</h2>
          <div className="w-16 h-0.5 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300">
            Have questions or want to collaborate? Get in touch with me. I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-serif mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                  <a href="mailto:sufi111729@gmail.com" className="hover:text-gray-300 transition-colors">
                    sufi111729@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4">
                  <Phone className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                  <a href="tel:+918574774647" className="hover:text-gray-300 transition-colors">
                    +91 8574774647
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                  <p>Kasia, Kushinagar, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-serif mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Sufi111729" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-sufiyan-30a41a241/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/sufiyan2k1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-8">Send Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-dark-400 border border-dark-300 px-4 py-3 focus:outline-none focus:border-white" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-dark-400 border border-dark-300 px-4 py-3 focus:outline-none focus:border-white" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  className="w-full bg-dark-400 border border-dark-300 px-4 py-3 focus:outline-none focus:border-white"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors flex items-center"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Muhammad Sufiyan. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
 