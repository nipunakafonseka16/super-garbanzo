import Link from "next/link";

const quickLinks = [
  {
    title: "Downloads",
    icon: "https://ext.same-assets.com/1364585098/2777458936.svg",
    href: "#"
  },
  {
    title: "Certifications",
    icon: "https://ext.same-assets.com/1364585098/4274423773.svg",
    href: "#"
  },
  {
    title: "Cisco Validated",
    icon: "https://ext.same-assets.com/1364585098/2868847387.svg",
    href: "#"
  },
  {
    title: "Training",
    icon: "https://ext.same-assets.com/1364585098/3859398399.svg",
    href: "#"
  },
  {
    title: "Community",
    icon: "https://ext.same-assets.com/1364585098/3803245029.svg",
    href: "#"
  },
  {
    title: "Support",
    icon: "https://ext.same-assets.com/1364585098/2966471143.svg",
    href: "#"
  }
];

export default function QuickLinksSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <div className="mb-4">
                <img
                  src={link.icon}
                  alt={link.title}
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="text-sm font-medium text-gray-900 text-center group-hover:text-blue-600">
                {link.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
