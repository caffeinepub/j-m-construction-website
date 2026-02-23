import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'jm-construction';

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">J M Construction</h3>
              <p className="opacity-90 mb-4">
                Professional sanitary and plumbing contractors serving Kolkata with 8 years of experience 
                and 30+ years of family business heritage.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="opacity-90 hover:opacity-100 transition-opacity">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 opacity-90">
                <li>Sanitary Installation</li>
                <li>Plumbing Installation</li>
                <li>Repairs & Maintenance</li>
                <li>Residential Projects</li>
                <li>Commercial Projects</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-sm opacity-90">
                © {currentYear} J M Construction. All rights reserved.
              </p>

              {/* Attribution */}
              <p className="text-sm opacity-90 flex items-center gap-2">
                Built with <Heart className="w-4 h-4 fill-current" /> using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
