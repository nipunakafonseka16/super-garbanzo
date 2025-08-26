import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900"></div>
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/1364585098/4075962667.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Event info and Cisco Live logo */}
          <div className="flex items-center mb-6">
            <div className="text-white/90 text-sm font-medium mr-6">
              Melbourne, Australia | 10-13 November
            </div>
            <div className="flex items-center">
              <span className="text-white text-2xl font-light">cisco</span>
              <span className="text-white text-2xl font-bold ml-2">Live!</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl lg:text-6xl font-light text-white mb-6 leading-tight">
            Learn, connect, and<br />get inspired
          </h1>

          {/* Description */}
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join us to experience the future of technology, build community,<br />and celebrate one another.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg"
          >
            Register now
          </Button>
        </div>
      </div>
    </section>
  );
}
