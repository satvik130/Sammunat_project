const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-blue-600">
        Satvik Solutions
      </h1>

      <div className="flex items-center space-x-10">
        <a
          href="#home"
          className="text-gray-700 font-medium hover:text-blue-600 transition"
        >
          Home
        </a>

        <a
          href="#services"
          className="text-gray-700 font-medium hover:text-blue-600 transition"
        >
          Services
        </a>

        <a
          href="#process"
          className="text-gray-700 font-medium hover:text-blue-600 transition"
        >
          About Us
        </a>

        <a
          href="#contact"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
