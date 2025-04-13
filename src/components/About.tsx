import  { Code, Scissors, Gamepad, Headphones } from 'lucide-react';

const About = () => {
  const services = [
    {
      id: 1,
      title: "Web Services",
      description: "Full stack web development solutions with modern frameworks and clean APIs.",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Clothes Services",
      description: "Custom clothing design and fashion consultation with attention to detail.",
      icon: <Scissors className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Game Services",
      description: "Game development and interactive experiences for web and mobile platforms.",
      icon: <Gamepad className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Customer Support",
      description: "24/7 customer service to address all your inquiries and concerns.",
      icon: <Headphones className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-500">
    
        <div className="max-w-3xl mx-auto mb-16 text-center">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-serif mb-6">My Vision</h3>
            <p className="text-gray-300 mb-4">
              As a developer, I aim to build smart, scalable applications that solve real problems. My passion for clean code and efficient systems drives me to create solutions that are both powerful and maintainable.
            </p>
            <p className="text-gray-300">
              From server-side logic to frontend experiences — I bring clarity, creativity, and consistency.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-6">My Approach</h3>
            <p className="text-gray-300 mb-4">
              In tech, I follow clean code principles and agile methodology. I believe in writing code that is not only functional but also readable and extendable. Quality is my constant focus in everything I build.
            </p>
            <p className="text-gray-300">
              My projects are thoughtfully built, responsive to user needs, and made to last through proper architecture and testing.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-serif mb-6 text-center">Digital Services</h3>
          <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(service => (
              <div key={service.id} className="bg-dark-400 p-6 border border-dark-300 hover:border-white/20 transition-colors duration-300">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-medium mb-2">{service.title}</h4>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxkYXJrJTIwbWluaW1hbGlzdCUyMGNvZGluZyUyMGJhY2tncm91bmQlMjBwcm9ncmFtbWVyfGVufDB8fHx8MTc0NDUxOTE2N3ww&ixlib=rb-4.0.3" 
              alt="Creative Process" 
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-serif mb-6">The Creative Process</h3>
            <p className="text-gray-300 mb-4">
              My dev process starts with user stories, flows into clean architecture and ends with pixel-perfect frontend. I've built applications from the ground up, focusing on scalability and maintainability.
            </p>
            <p className="text-gray-300">
              Whether it's a modern web app or a complex backend system — it's always built with passion and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
 