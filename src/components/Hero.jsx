const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-28 px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Empowering MSMEs <br /> with Smart Financial Solutions
        </h2>

        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
          Satvik Solutions enables small and medium businesses to access fast,
          secure, and data-driven financial services for sustainable growth.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="#services"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
