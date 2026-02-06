import { useRef } from "react";
import { Star, Quote, Users, Heart, Award, Calendar } from "lucide-react";
import OmIcon from "@/components/icons/OmIcon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    review:
      "The Griha Pravesh puja conducted by Vaidik Bhavan was truly divine. Every ritual was performed with complete devotion and the pandit ji explained each step beautifully. Our home feels blessed.",
    service: "Griha Pravesh Puja",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    review:
      "I consulted for Vedic astrology and the insights were remarkably accurate. The remedies suggested have brought positive changes in my career and personal life. Highly recommended!",
    service: "Vedic Astrology",
  },
  {
    id: 3,
    name: "Anil Kumar",
    location: "Delhi NCR",
    rating: 5,
    review:
      "Our wedding ceremony was conducted with such precision and grace. The pandit ji made sure all traditions were honored while keeping the ceremony engaging for all guests. A truly memorable experience.",
    service: "Wedding Ceremony",
  },
  {
    id: 4,
    name: "Sunita Devi",
    location: "Jaipur, Rajasthan",
    rating: 5,
    review:
      "The spiritual guidance sessions have transformed my outlook on life. The teachings are rooted in ancient wisdom yet perfectly applicable to modern challenges. I feel more at peace now.",
    service: "Spiritual Guidance",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Lucknow, UP",
    rating: 5,
    review:
      "Satyanarayan Katha was performed at our home with complete Vedic rituals. The entire family felt a divine presence throughout. We will definitely book again for future ceremonies.",
    service: "Satyanarayan Katha",
  },
  {
    id: 6,
    name: "Meera Krishnan",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    review:
      "The online puja service was surprisingly immersive. Despite being virtual, the experience was deeply spiritual. Perfect for those living away from home but wanting authentic rituals.",
    service: "Online Puja",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Devotees" },
  { icon: Heart, value: "1000+", label: "Pujas Performed" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Calendar, value: "50+", label: "Sacred Rituals" },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-muted/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <OmIcon className="text-primary mx-auto mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-4">
            Devotee Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from our blessed devotees about their spiritual experiences with Vaidik Bhavan
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-2xl p-6 shadow-soft card-hover relative h-full">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-primary/20">
                    <Quote size={40} />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.review}"
                  </p>

                  {/* Service Badge */}
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
                    {testimonial.service}
                  </span>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-heading font-semibold text-secondary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-12 w-12 border-2 border-primary bg-transparent hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-12 w-12 border-2 border-primary bg-transparent hover:bg-primary hover:text-primary-foreground" />
          </div>
        </Carousel>

        {/* Trust Indicators */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-soft"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={28} className="text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
