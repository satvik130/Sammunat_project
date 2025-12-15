const features = [
  {
    title: "Fast Loan Processing",
    desc: "Quick approvals with minimal documentation to save your time.",
    icon: "⚡",
  },
  {
    title: "Secure Platform",
    desc: "Enterprise-grade security to keep your financial data safe.",
    icon: "🔒",
  },
  {
    title: "Data-Driven Decisions",
    desc: "Smart analytics to offer better credit decisions.",
    icon: "📊",
  },
  {
    title: "MSME Focused",
    desc: "Tailored solutions designed specifically for MSMEs.",
    icon: "🤝",
  },
];

const Features = () => {
  return (
   <section id="services" className="py-20 px-8 bg-white">

      <h3 className="text-4xl font-bold text-center mb-4">
        Our Key Features
      </h3>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
        Everything you need to manage and grow your business finances
        efficiently.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h4 className="text-xl font-semibold mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
