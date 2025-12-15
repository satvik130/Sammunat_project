import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Small Business Owner",
    message:
      "Satvik Solutions helped us access funding quickly with a very smooth process. The platform is simple and reliable.",
  },
  {
    name: "Anita Sharma",
    role: "MSME Founder",
    message:
      "The data-driven approach really sets Satvik Solutions apart. It made financial decisions much easier for our business.",
  },
  {
    name: "Vikas Gupta",
    role: "Startup Consultant",
    message:
      "A clean interface and transparent process. Highly recommended for growing businesses.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-8 bg-white">
      <h3 className="text-4xl font-bold text-center mb-4">
        What Our Clients Say
      </h3>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
        Trusted by business owners and professionals across industries.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
            <p className="text-gray-700 mb-6 italic">
              "{item.message}"
            </p>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-lg">{item.name}</h4>
              <p className="text-gray-500 text-sm">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
