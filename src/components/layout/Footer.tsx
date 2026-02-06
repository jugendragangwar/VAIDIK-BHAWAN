import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading text-xl font-bold shadow-glow">
                ॐ
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Vaidik Bhavan</h3>
                <p className="text-xs text-secondary-foreground/70">
                  Sacred Spiritual Services
                </p>
              </div>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Dedicated to preserving and sharing the sacred traditions of Vedic
              spirituality. We offer authentic pujas, rituals, and spiritual
              guidance for your journey towards enlightenment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-primary">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  123 Temple Street, Spiritual District
                  <br />
                  Varanasi, Uttar Pradesh 221001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@vaidikbhavan.com"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  info@vaidikbhavan.com
                </a>
              </li>
            </ul>
          </div>

          {/* Temple Hours */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-primary">
              Temple Hours
            </h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex justify-between">
                <span>Morning Aarti</span>
                <span>5:00 AM - 6:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Darshan</span>
                <span>6:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Evening Aarti</span>
                <span>7:00 PM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Night Darshan</span>
                <span>8:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
            © {currentYear} Vaidik Bhavan. All rights reserved. | Har Har Mahadev
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
