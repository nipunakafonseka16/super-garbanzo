import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Latest products and innovations across Cisco
          </h2>
        </div>

        {/* Product cards */}
        <div className="space-y-16">
          {/* Secure the AI-scale data center */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="lg:pr-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Secure the AI-scale data center
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Segment your workloads, protect against vulnerabilities, and address your fundamental
                cybersecurity challenges with Cisco Hypershield, a groundbreaking, new AI-native architecture.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Explore Cisco Hypershield
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://ext.same-assets.com/1364585098/1990482158.jpeg"
                alt="Cisco Hypershield"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Introducing Cisco AI Defense */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://ext.same-assets.com/1364585098/3506960965.jpeg"
                alt="Cisco AI Defense"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Introducing Cisco AI Defense
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Cisco AI Defense safeguards the development and usage of AI applications so that enterprises
                can advance their AI initiatives with confidence.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Explore AI Defense
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Cisco Nexus Hyperfabric */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="lg:pr-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Cisco Nexus Hyperfabric
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Simply design, build, and manage network fabrics anywhere.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Explore Cisco Nexus Hyperfabric
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://ext.same-assets.com/1364585098/390500318.jpeg"
                alt="Cisco Nexus Hyperfabric"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
