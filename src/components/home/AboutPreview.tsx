import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import OmIcon from "@/components/icons/OmIcon";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import aboutImage from "@/assets/about-temple.jpg";

const features = [
  "Authentic Vedic rituals by learned priests",
  "Personalized spiritual guidance",
  "Sacred ceremonies for all occasions",
  "Ancient wisdom for modern life",
];

const AboutPreview = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Temple interior"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-glow max-w-[200px]">
              <span className="text-4xl font-heading font-bold block mb-1">25+</span>
              <span className="text-sm opacity-90">Years of Spiritual Service</span>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/30 rounded-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div>
            <OmIcon className="text-primary mb-4" size={40} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-6">
              About Vaidik Bhavan
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Vaidik Bhavan is a sacred sanctuary dedicated to preserving and
              sharing the timeless wisdom of Vedic traditions. Founded with a
              vision to bring authentic spiritual practices to seekers worldwide,
              we serve as a bridge between ancient wisdom and modern seekers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of learned priests, scholars, and spiritual guides are
              committed to conducting every ritual with the utmost devotion and
              adherence to scriptural guidelines.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </span>
                  <span className="text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:scale-105 hover:shadow-glow transition-all duration-300"
            >
              Learn Our Story <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
