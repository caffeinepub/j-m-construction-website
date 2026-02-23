import ContactForm from './ContactForm';
import { MapPin, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your project? Contact us today for a free consultation and quote
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Contact Information
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're here to help with all your sanitary and plumbing needs. Reach out to us 
                for quotes, consultations, or emergency services.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Location</h4>
                    <p className="text-muted-foreground">Kolkata, West Bengal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Email</h4>
                    <a 
                      href="mailto:jmconstruction.sp@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      jmconstruction.sp@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Saturday: 8:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Emergency Services Only</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 p-6 bg-accent/30 rounded-xl">
                <h4 className="font-semibold text-lg mb-4 text-foreground">Why Clients Trust Us</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    8 years of professional experience
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Family business with 30+ years heritage
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Quality workmanship guaranteed
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Competitive pricing
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
