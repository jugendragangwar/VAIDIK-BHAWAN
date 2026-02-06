import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OmIcon from "@/components/icons/OmIcon";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import servicePuja from "@/assets/service-puja.jpg";
import serviceAstrology from "@/assets/service-astrology.jpg";
import serviceGuidance from "@/assets/service-guidance.jpg";
import serviceWedding from "@/assets/service-wedding.jpg";

const services = [
  {
    id: "puja-services",
    title: "Puja Services",
    description:
      "Experience authentic Vedic pujas performed by learned priests. From daily rituals to special ceremonies, we conduct pujas with complete devotion and adherence to sacred traditions.",
    image: servicePuja,
  },
  {
    id: "astrology",
    title: "Vedic Astrology",
    description:
      "Gain insights into your life path through the ancient science of Jyotish. Our expert astrologers provide accurate readings and remedies for a harmonious life journey.",
    image: serviceAstrology,
  },
  {
    id: "spiritual-guidance",
    title: "Spiritual Guidance",
    description:
      "Receive personalized spiritual counseling from experienced gurus. Whether seeking answers or inner peace, our guidance helps illuminate your spiritual path.",
    image: serviceGuidance,
  },
  {
    id: "wedding-ceremonies",
    title: "Wedding Ceremonies",
    description:
      "Celebrate your sacred union with traditional Vedic wedding ceremonies. Every ritual is performed with precision to bless your new journey together.",
    image: serviceWedding,
  },
];

const ServicesPreview = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <OmIcon className="text-primary mx-auto mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-4">
            Our Sacred Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover the divine offerings that bring peace, prosperity, and
            spiritual growth to your life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-heading font-bold text-primary-foreground">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Services <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
