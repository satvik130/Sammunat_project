const steps = [
  {
    step: "01",
    title: "Register Your Business",
    desc: "Create an account and add your basic business details.",
  },
  {
    step: "02",
    title: "Submit Financial Data",
    desc: "Provide required financial information securely.",
  },
  {
    step: "03",
    title: "Get Funding Support",
    desc: "Receive fast and reliable financial assistance.",
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="py-20 px-8 bg-gray-50">

      <h3 className="text-4xl font-bold text-center mb-4">
        How It Works
      </h3>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
        A simple and transparent process designed for your convenience.
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <div className="text-blue-600 text-5xl font-bold mb-4">
              {item.step}
            </div>
            <h4 className="text-xl font-semibold mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
