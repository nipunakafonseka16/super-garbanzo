import { Button } from "@/components/ui/button";

const technologies = [
  {
    title: "Networking",
    icon: "https://ext.same-assets.com/1364585098/326172334.svg",
    href: "#",
    description: "Connect and scale your infrastructure"
  },
  {
    title: "Security",
    icon: "https://ext.same-assets.com/1364585098/4057958998.svg",
    href: "#",
    description: "Protect your digital assets"
  },
  {
    title: "Observability",
    icon: "https://ext.same-assets.com/1364585098/2364498494.svg",
    href: "#",
    description: "Monitor and optimize performance"
  },
  {
    title: "Collaboration",
    icon: "https://ext.same-assets.com/1364585098/1950875659.svg",
    href: "#",
    description: "Enable seamless teamwork"
  },
  {
    title: "Computing",
    icon: "https://ext.same-assets.com/1364585098/3310568986.svg",
    href: "#",
    description: "Power your applications"
  },
  {
    title: "AI",
    icon: "https://ext.same-assets.com/1364585098/2317475679.svg",
    href: "#",
    description: "Intelligent automation"
  }
];

export default function TechnologySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Browse by technology
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive portfolio of solutions across all technology domains
          </p>
        </div>

        {/* Technology cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 p-8 text-center cursor-pointer transform hover:-translate-y-2"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.title}
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-3 transition-colors duration-300">
                {tech.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {tech.description}
              </p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            View all products
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Why Cisco for the AI era
          </Button>
        </div>
      </div>
    </section>
  );
}
