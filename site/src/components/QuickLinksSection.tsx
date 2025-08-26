const quickLinks = [
  {
    title: "Downloads",
    icon: "https://ext.same-assets.com/1364585098/2777458936.svg",
    href: "#",
    description: "Software and firmware"
  },
  {
    title: "Certifications",
    icon: "https://ext.same-assets.com/1364585098/4274423773.svg",
    href: "#",
    description: "Training and certification"
  },
  {
    title: "Cisco Validated",
    icon: "https://ext.same-assets.com/1364585098/2868847387.svg",
    href: "#",
    description: "Design guides and solutions"
  },
  {
    title: "Training",
    icon: "https://ext.same-assets.com/1364585098/3859398399.svg",
    href: "#",
    description: "Learning and development"
  },
  {
    title: "Community",
    icon: "https://ext.same-assets.com/1364585098/3803245029.svg",
    href: "#",
    description: "Connect with experts"
  },
  {
    title: "Support",
    icon: "https://ext.same-assets.com/1364585098/2966471143.svg",
    href: "#",
    description: "Technical assistance"
  }
];

export default function QuickLinksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Quick access to resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to get started, learn, and succeed with Cisco solutions
          </p>
        </div>

        {/* Quick links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 p-8 text-center cursor-pointer transform hover:-translate-y-1"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <img
                    src={link.icon}
                    alt={link.title}
                    className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-3 transition-colors duration-300">
                {link.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {link.description}
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-0.5 bg-blue-600 mx-auto rounded-full"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
