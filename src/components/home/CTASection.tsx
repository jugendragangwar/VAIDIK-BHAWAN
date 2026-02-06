import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative py-24 md:py-32 overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <span className="text-primary text-5xl font-heading mb-6 block drop-shadow-lg">
          ॐ
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
          Begin Your Spiritual Journey Today
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Connect with our priests and spiritual guides to discover the
          transformative power of Vedic traditions. Your path to peace and
          enlightenment awaits.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg shadow-glow hover:scale-105 transition-all duration-300"
          >
            Contact Us Now
          </Link>
          <Link
            to="/events"
            className="px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 rounded-xl font-medium text-lg hover:bg-primary-foreground/20 transition-all duration-300"
          >
            View Upcoming Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
