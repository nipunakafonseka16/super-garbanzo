import { Button } from "@/components/ui/button";

const technologies = [
  {
    title: "Networking",
    icon: "https://ext.same-assets.com/1364585098/326172334.svg",
    href: "#"
  },
  {
    title: "Security",
    icon: "https://ext.same-assets.com/1364585098/4057958998.svg",
    href: "#"
  },
  {
    title: "Observability",
    icon: "https://ext.same-assets.com/1364585098/2364498494.svg",
    href: "#"
  },
  {
    title: "Collaboration",
    icon: "https://ext.same-assets.com/1364585098/1950875659.svg",
    href: "#"
  },
  {
    title: "Computing",
    icon: "https://ext.same-assets.com/1364585098/3310568986.svg",
    href: "#"
  },
  {
    title: "AI",
    icon: "https://ext.same-assets.com/1364585098/2317475679.svg",
    href: "#"
  }
];

export default function TechnologySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
            Browse by technology
          </h2>
        </div>

        {/* Technology cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 p-8 text-center cursor-pointer"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={tech.icon}
                  alt={tech.title}
                  className="w-16 h-16 group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                {tech.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold"
          >
            View all products
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold"
          >
            Why Cisco for the AI era
          </Button>
        </div>
      </div>
    </section>
  );
}
