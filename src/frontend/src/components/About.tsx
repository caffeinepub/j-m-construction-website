import { CheckCircle, Shield, Clock, ThumbsUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About J M Construction
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A trusted name in sanitary and plumbing contracting services across Kolkata
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Three Decades of Excellence
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                J M Construction is a family-owned business with over 30 years of heritage in the construction industry. 
                With 8 years of specialized experience in sanitary and plumbing contracting, we bring professional 
                expertise and reliability to every project we undertake.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our commitment to quality workmanship, attention to detail, and customer satisfaction has made us 
                one of Kolkata's most trusted contractors for both residential and commercial projects.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that proper sanitary and plumbing systems are the backbone of any building. That's why 
                we use only the best materials and employ skilled professionals to ensure lasting results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-card-foreground">Reliable</h4>
                <p className="text-muted-foreground">
                  Trusted by hundreds of satisfied clients across Kolkata
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-card-foreground">Professional</h4>
                <p className="text-muted-foreground">
                  Skilled team with years of hands-on experience
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-card-foreground">Timely</h4>
                <p className="text-muted-foreground">
                  Projects completed on schedule without compromise
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <ThumbsUp className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-card-foreground">Quality</h4>
                <p className="text-muted-foreground">
                  Premium materials and superior workmanship guaranteed
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="bg-accent/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
              Our Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Sanitary Contracting
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Complete sanitary solutions including bathroom fittings, drainage systems, sewage lines, 
                  and modern fixture installations. We ensure proper water flow, drainage, and hygiene standards 
                  for residential and commercial properties.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Plumbing Contracting
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Expert plumbing services covering water supply systems, pipe installations, leak repairs, 
                  water heater setups, and maintenance. Our team handles everything from new installations 
                  to emergency repairs with precision and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
