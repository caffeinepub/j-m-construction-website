import { Droplets, Wrench, Home, Building2, Settings, Zap, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function Services() {
  const services = [
    {
      icon: '/assets/generated/sanitary-icon.dim_128x128.png',
      title: 'Sanitary Installation',
      description: 'Complete bathroom and sanitary fixture installations with modern designs and quality fittings.',
      features: ['Bathroom Fittings', 'Drainage Systems', 'Sewage Lines', 'Water Closets']
    },
    {
      icon: '/assets/generated/plumbing-icon.dim_128x128.png',
      title: 'Plumbing Installation',
      description: 'Professional plumbing system setup for new constructions and renovations.',
      features: ['Water Supply Lines', 'Pipe Networks', 'Water Heaters', 'Pressure Systems']
    },
    {
      icon: Wrench,
      title: 'Repairs & Maintenance',
      description: 'Quick and reliable repair services for all plumbing and sanitary issues.',
      features: ['Leak Repairs', 'Pipe Replacement', 'Fixture Repairs', 'Emergency Service']
    },
    {
      icon: Home,
      title: 'Residential Projects',
      description: 'Comprehensive sanitary and plumbing solutions for homes and apartments.',
      features: ['New Homes', 'Renovations', 'Upgrades', 'Maintenance']
    },
    {
      icon: Building2,
      title: 'Commercial Projects',
      description: 'Large-scale plumbing and sanitary contracting for commercial buildings.',
      features: ['Office Buildings', 'Retail Spaces', 'Restaurants', 'Hotels']
    },
    {
      icon: Settings,
      title: 'System Upgrades',
      description: 'Modernize your existing plumbing and sanitary systems with latest technology.',
      features: ['System Overhaul', 'Efficiency Upgrades', 'Modern Fixtures', 'Smart Solutions']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive sanitary and plumbing solutions for residential and commercial clients
            </p>
          </div>

          {/* Service Scope Notice */}
          <Alert className="mb-12 border-primary/50 bg-primary/5">
            <AlertCircle className="h-5 w-5 text-primary" />
            <AlertDescription className="text-base ml-2">
              <strong className="font-semibold text-foreground">Important Notice:</strong> We specialize exclusively in <strong>new residential apartments</strong>. We do not provide small maintenance services. Please contact us only for new construction projects.
            </AlertDescription>
          </Alert>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                {/* Icon */}
                <div className="mb-6">
                  {typeof service.icon === 'string' ? (
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <service.icon className="w-16 h-16 text-primary group-hover:scale-110 transition-transform" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Why Choose J M Construction?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Droplets className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Quality Materials</h4>
                <p className="opacity-90">
                  We use only premium, ISI-certified materials for long-lasting results
                </p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Fast Service</h4>
                <p className="opacity-90">
                  Quick response times and efficient project completion
                </p>
              </div>
              <div className="text-center">
                <Settings className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
                <p className="opacity-90">
                  Skilled professionals with years of hands-on experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
