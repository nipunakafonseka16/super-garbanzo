import { Button } from "@/components/ui/button";

export default function SMBSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://ext.same-assets.com/1364585098/2829105327.jpeg"
              alt="Office team collaboration"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Unlock your potential with SMB solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transform your business today and prepare for tomorrow.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold"
            >
              Explore SMB solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
