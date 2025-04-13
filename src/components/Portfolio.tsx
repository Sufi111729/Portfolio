const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">

        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">PORTFOLIO</h2>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>

        {/* Flex Container for Image + About */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

          {/* LEFT: Your Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
              <img
                src="src/img/photo_2025-04-13_11-26-28.jpg"
                alt="Muhammad Sufiyan"
                className="w-80 h-80 rounded-2xl object-cover border-4 border-black shadow-[0_0_40px_5px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black group-hover:ring-black transition duration-500"></div>
            </div>
          </div>



          {/* RIGHT: About Me */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-serif font-bold mb-4">ABOUT ME</h3>
            <div className="w-12 h-0.5 bg-white mb-6 mx-auto lg:mx-0"></div>
            <p className="text-gray-300 leading-relaxed">
              I'm <strong>Muhammad Sufiyan</strong> — a Java Full Stack Developer who blends technology with creativity to build seamless web experiences. Whether it's crafting clean backend APIs or designing intuitive interfaces, precision is at the core of everything I do.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
