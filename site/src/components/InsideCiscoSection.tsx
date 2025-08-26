import { ChevronRight } from "lucide-react";

const reports = [
  {
    category: "On-demand sessions",
    title: "Stay inspired with our featured sessions from Cisco Live",
    link: "View all featured sessions",
    href: "#",
    type: "sessions"
  },
  {
    category: "Event",
    title: "Experience the future of AI with Cisco at Ai4 in Las Vegas, August 11-13",
    link: "Register now",
    href: "#",
    type: "event"
  },
  {
    category: "Special offer",
    title: "Future-proof your network with limited-time discounts on select switching, routing, wireless, and software products across the full networking stack",
    link: "Get the special offer",
    href: "#",
    type: "offer"
  },
  {
    category: "Podcast",
    title: "Explore Cisco AI PODs: Scalable, secure designs for training, hybrid workloads, and AI deployment",
    link: "Learn about Cisco's top AI innovations",
    href: "#",
    type: "podcast"
  },
  {
    category: "Article",
    title: "Cisco takes bold steps toward a quantum network",
    link: "Read article",
    href: "#",
    type: "article"
  },
  {
    category: "Press release",
    title: "Cisco announces Q4FY25 earnings",
    link: "Read press release",
    href: "#",
    type: "press"
  }
];

export default function InsideCiscoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900">
            Inside Cisco
          </h2>
          <div className="flex gap-4">
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              More news
              <ChevronRight size={16} className="ml-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              More events
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>

        {/* Reports grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reports.map((report, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  report.type === 'sessions' ? 'bg-blue-50 text-blue-700' :
                  report.type === 'event' ? 'bg-green-50 text-green-700' :
                  report.type === 'offer' ? 'bg-orange-50 text-orange-700' :
                  report.type === 'podcast' ? 'bg-purple-50 text-purple-700' :
                  report.type === 'article' ? 'bg-indigo-50 text-indigo-700' :
                  'bg-gray-50 text-gray-700'
                }`}>
                  {report.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
                {report.title}
              </h3>
              <a
                href={report.href}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group"
              >
                {report.link}
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-light text-gray-900 text-center">
            Browse by technology
          </h3>
        </div>
      </div>
    </section>
  );
}
