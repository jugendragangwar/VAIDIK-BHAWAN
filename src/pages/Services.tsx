import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "puja-services",
    title: "Puja Services",
    description:
      "Experience authentic Vedic pujas performed by learned priests. From daily rituals to special ceremonies, we conduct pujas with complete devotion and adherence to sacred traditions.",
    fullDescription:
      "Our puja services cover a wide range of sacred rituals including Ganesh Puja, Lakshmi Puja, Satyanarayan Katha, Navgraha Shanti, and many more. Each puja is performed with proper mantras, offerings, and procedures as prescribed in the Vedic scriptures.",
    image:
      "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=800&q=80",
  },
  {
    id: "astrology",
    title: "Vedic Astrology",
    description:
      "Gain insights into your life path through the ancient science of Jyotish. Our expert astrologers provide accurate readings and remedies for a harmonious life.",
    fullDescription:
      "Our Vedic astrology services include birth chart analysis, compatibility matching, muhurat selection for auspicious occasions, and personalized remedies including gemstone recommendations and specific rituals.",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80",
  },
  {
    id: "spiritual-guidance",
    title: "Spiritual Guidance",
    description:
      "Receive personalized spiritual counseling from experienced gurus. Whether seeking answers or inner peace, our guidance illuminates your spiritual path.",
    fullDescription:
      "Our spiritual guidance sessions cover meditation techniques, mantra sadhana, understanding of scriptures, dealing with life challenges through dharmic principles, and developing a personal spiritual practice.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  },
  {
    id: "wedding-ceremonies",
    title: "Wedding Ceremonies",
    description:
      "Celebrate your sacred union with traditional Vedic wedding ceremonies. Every ritual is performed with precision to bless your new journey together.",
    fullDescription:
      "We conduct complete Vedic wedding ceremonies including engagement (Sagai), Haldi, Sangeet, and the main wedding rituals with Saptapadi. Our priests ensure every tradition is honored with devotion.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: "havan-yagna",
    title: "Havan & Yagna",
    description:
      "Participate in sacred fire ceremonies that purify the environment and invoke divine blessings. Our havans are conducted with proper Vedic procedures.",
    fullDescription:
      "From small household havans to large community yagnas, we organize fire ceremonies for various purposes including peace, prosperity, health, and spiritual advancement. All materials used are pure and sourced traditionally.",
    image:
      "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=800&q=80",
  },
  {
    id: "griha-pravesh",
    title: "Griha Pravesh",
    description:
      "Sanctify your new home with traditional Griha Pravesh ceremony. Invite positive energies and divine blessings into your new abode.",
    fullDescription:
      "Our Griha Pravesh ceremony includes Vastu Puja, Ganesh Puja, Navagraha Puja, and Havan to ensure your new home is filled with peace, prosperity, and positive vibrations.",
    image:
      "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=800&q=80",
  },
  {
    id: "shraddha-ceremony",
    title: "Shraddha Ceremony",
    description:
      "Honor your ancestors with proper Shraddha rituals. We guide you through these important ceremonies with sensitivity and devotion.",
    fullDescription:
      "We conduct annual Shraddha, Pitru Paksha rituals, and other ancestor-honoring ceremonies with complete adherence to traditional procedures. Our priests provide guidance and support throughout.",
    image:
      "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=800&q=80",
  },
  {
    id: "baby-ceremonies",
    title: "Baby Ceremonies",
    description:
      "Welcome your little one with sacred Vedic ceremonies including Namkaran, Mundan, and Annaprashan.",
    fullDescription:
      "From Namkaran (naming ceremony) to Vidyarambh (start of education), we conduct all childhood sanskaras with joy and proper Vedic procedures to bless your child's journey through life.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
];

const Services = () => {
  return (
    <Layout>
      <PageBanner
        title="Our Services"
        subtitle="Discover our complete range of sacred rituals and spiritual services"
        backgroundImage="https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=1920&q=80"
      />

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Introduction */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary text-3xl font-heading mb-4 block">ॐ</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Sacred Services for Every Occasion
            </h2>
            <p className="text-muted-foreground text-lg">
              From daily pujas to life's most important ceremonies, we offer
              authentic Vedic rituals conducted with devotion and precision.
            </p>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? We offer custom services
              tailored to your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:scale-105 hover:shadow-glow transition-all duration-300"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
