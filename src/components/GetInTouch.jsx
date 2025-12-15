import { useState } from "react";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";

const GetInTouch = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow">
        <h3 className="text-4xl font-bold text-center mb-4">
          Get In Touch
        </h3>
        <p className="text-gray-600 text-center mb-10">
          Have questions or want to know more? Reach out to us.
        </p>

        {submitted && (
          <div className="mb-6 text-green-600 text-center font-medium">
            ✅ Thank you! Your message has been submitted successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="relative">
            <FaUser className="absolute top-4 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border pl-10 pr-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border pl-10 pr-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="relative">
            <FaComment className="absolute top-4 left-3 text-gray-400" />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border pl-10 pr-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
