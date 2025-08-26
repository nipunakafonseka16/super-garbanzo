import { ChevronRight } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-light text-gray-900 mb-6">
            Latest products and innovations across Cisco
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge solutions that transform how you work, secure, and innovate
          </p>
        </div>

        {/* Product cards */}
        <div className="space-y-24">
          {/* Secure the AI-scale data center */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:pr-12">
              <div className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
                New
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                Secure the AI-scale data center
              </h3>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Segment your workloads, protect against vulnerabilities, and address your fundamental
                cybersecurity challenges with Cisco Hypershield, a groundbreaking, new AI-native architecture.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
              >
                Explore Cisco Hypershield
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://ext.same-assets.com/1364585098/1990482158.jpeg"
                alt="Cisco Hypershield"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="text-sm text-gray-600">AI-Powered</div>
                <div className="text-lg font-semibold text-gray-900">Security</div>
              </div>
            </div>
          </div>

          {/* Introducing Cisco AI Defense */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://ext.same-assets.com/1364585098/3506960965.jpeg"
                alt="Cisco AI Defense"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-4 text-white">
                <div className="text-sm opacity-90">Next-Gen</div>
                <div className="text-lg font-semibold">AI Defense</div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-12">
              <div className="inline-block bg-purple-50 text-purple-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
                Featured
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                Introducing Cisco AI Defense
              </h3>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Cisco AI Defense safeguards the development and usage of AI applications so that enterprises
                can advance their AI initiatives with confidence.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
              >
                Explore AI Defense
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Cisco Nexus Hyperfabric */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:pr-12">
              <div className="inline-block bg-green-50 text-green-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
                Innovation
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                Cisco Nexus Hyperfabric
              </h3>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Simply design, build, and manage network fabrics anywhere with our revolutionary
                hyperfabric technology.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
              >
                Explore Cisco Nexus Hyperfabric
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://ext.same-assets.com/1364585098/390500318.jpeg"
                alt="Cisco Nexus Hyperfabric"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="text-sm text-gray-600">Network</div>
                <div className="text-lg font-semibold text-gray-900">Fabric</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
