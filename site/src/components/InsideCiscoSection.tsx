import Link from "next/link";
import { ChevronRight } from "lucide-react";

const reports = [
  {
    category: "Report",
    title: "Uncover AI readiness: Cisco's report on urgency and strategic impact for enterprises worldwide",
    link: "Get the report",
    href: "#"
  },
  {
    category: "Annual report",
    title: "Our first-ever State of AI Security report shares key developments, trends, and predictions for AI security",
    link: "Read the report",
    href: "#"
  },
  {
    category: "Research study",
    title: "How IT can help unleash industrial security and better protect critical infrastructure",
    link: "Get IDC InfoBrief",
    href: "#"
  }
];

export default function InsideCiscoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900">
            Inside Cisco
          </h2>
          <div className="flex gap-4">
            <Link
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              More news
              <ChevronRight size={16} className="ml-1" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              More events
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>

        {/* Reports grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-900 uppercase">
                  {report.category}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 leading-tight">
                {report.title}
              </h3>
              <Link
                href={report.href}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                {report.link}
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
