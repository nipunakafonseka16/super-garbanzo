import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-[700px] overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900"></div>
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/1364585098/4075962667.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
          }}
        />
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          {/* Event info and Cisco Live logo */}
          <div className="flex items-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white/90 text-sm font-medium mr-6 border border-white/20">
              Melbourne, Australia | 10-13 November
            </div>
            <div className="flex items-center">
              <span className="text-white text-3xl font-light">cisco</span>
              <span className="text-white text-3xl font-bold ml-2">Live!</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
            Learn, connect, and<br />
            <span className="font-semibold">get inspired</span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
            Join us to experience the future of technology, build community, and celebrate one another.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Register now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-full text-lg backdrop-blur-sm"
            >
              Learn more
            </Button>
          </div>

          {/* Stats or additional info */}
          <div className="mt-12 flex items-center space-x-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-semibold text-white">10,000+</div>
              <div className="text-sm">Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-white">200+</div>
              <div className="text-sm">Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-white">4</div>
              <div className="text-sm">Days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
