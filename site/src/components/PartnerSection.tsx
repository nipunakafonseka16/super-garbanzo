import { Button } from "@/components/ui/button";

export default function PartnerSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Cisco 360 Partner Program
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Designed with and for you to drive unique outcomes and expand your reach.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold"
            >
              Learn more
            </Button>
          </div>

          {/* Partner logo/image */}
          <div className="relative">
            <div className="bg-slate-900 rounded-lg p-16 flex items-center justify-center">
              <div className="text-center">
                <div className="text-white text-4xl font-light mb-2">cisco</div>
                <div className="text-white text-6xl font-bold">360</div>
                <div className="text-sm text-blue-400 mt-2">Partner Program</div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 mx-auto mt-4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
