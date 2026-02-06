import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading text-xl font-bold shadow-glow transition-transform group-hover:scale-105">
              ॐ
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-secondary">
                Vaidik Bhavan
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Sacred Spiritual Services
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium text-sm transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-secondary"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Book Puja
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-secondary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
};

export default Header;
