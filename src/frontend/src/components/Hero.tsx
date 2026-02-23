import { Wrench, MapPin, Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x800.png"
          alt="Construction work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/assets/generated/logo.dim_300x300.png"
              alt="J M Construction Logo"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl border-4 border-primary-foreground/20"
            />
          </div>

          {/* Company Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            J M Construction
          </h1>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-6 h-6" />
            <p className="text-2xl md:text-3xl font-semibold">Kolkata</p>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-12 font-medium opacity-95">
            Professional Sanitary & Plumbing Contractors
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Award className="w-10 h-10 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">8 Years</div>
              <div className="text-sm font-medium opacity-90">Professional Experience</div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Users className="w-10 h-10 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">3 Decades</div>
              <div className="text-sm font-medium opacity-90">Family Business Heritage</div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Wrench className="w-10 h-10 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">Expert</div>
              <div className="text-sm font-medium opacity-90">Quality Workmanship</div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="#contact"
              className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
