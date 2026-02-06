import { Flame, Users, BookOpen, Heart } from "lucide-react";
import OmIcon from "@/components/icons/OmIcon";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: BookOpen,
    step: "01",
    title: "Consultation",
    description:
      "Connect with our priests to discuss your spiritual needs and select the appropriate ritual or service.",
  },
  {
    icon: Users,
    step: "02",
    title: "Preparation",
    description:
      "We prepare all sacred materials and set the auspicious date according to Vedic traditions and your horoscope.",
  },
  {
    icon: Flame,
    step: "03",
    title: "Ceremony",
    description:
      "Experience the sacred ritual performed with complete devotion, proper mantras, and traditional procedures.",
  },
  {
    icon: Heart,
    step: "04",
    title: "Blessings",
    description:
      "Receive divine blessings and continue your spiritual journey with our ongoing guidance and support.",
  },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-secondary text-secondary-foreground transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <OmIcon className="text-primary mx-auto mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Our Simple Process
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
            Begin your spiritual journey with our streamlined and sacred
            approach
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative text-center group"
            >
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-primary/30">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-primary/30 rotate-45" />
                </div>
              )}

              {/* Icon Circle */}
              <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon
                  size={48}
                  className="text-primary"
                  strokeWidth={1.5}
                />
                {/* Step Number */}
                <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">
                {step.title}
              </h3>
              <p className="text-secondary-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
