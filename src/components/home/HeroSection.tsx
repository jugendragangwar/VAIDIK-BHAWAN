import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-temple.jpg";
import OmIcon from "@/components/icons/OmIcon";

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-primary/30 rounded-full animate-pulse" />
        <div
          className="absolute top-40 right-20 w-24 h-24 border border-primary-foreground/20 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-32 h-32 border border-primary/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-primary-foreground/20 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Om Symbol */}
        <div className="mb-8 animate-fade-in">
          <OmIcon className="text-primary drop-shadow-lg mx-auto" size={80} />
        </div>

        {/* Main Title */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Har Har{" "}
          <span className="text-primary drop-shadow-lg">Mahadev</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Experience the divine essence of Vedic traditions. Discover peace,
          prosperity, and spiritual enlightenment through sacred rituals and
          timeless wisdom.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            to="/services"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg shadow-glow hover:scale-105 transition-all duration-300"
          >
            Explore Our Services
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 rounded-xl font-medium text-lg hover:bg-primary-foreground/20 transition-all duration-300"
          >
            Book a Puja
          </Link>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="animate-bounce text-primary-foreground/60 hover:text-primary transition-colors"
          aria-label="Scroll to content"
        >
          <ArrowDown size={32} />
        </button>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
