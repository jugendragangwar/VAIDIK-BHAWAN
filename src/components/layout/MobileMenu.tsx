import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; path: string }[];
}

const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-secondary/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-card shadow-elevated z-50 transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading text-lg font-bold">
              ॐ
            </div>
            <span className="font-heading font-bold text-secondary">
              Vaidik Bhavan
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-secondary transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-secondary hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-card">
          <Link
            to="/contact"
            onClick={onClose}
            className="block w-full py-3 bg-primary text-primary-foreground text-center rounded-lg font-medium shadow-soft hover:shadow-glow transition-all duration-300"
          >
            Book Puja
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
