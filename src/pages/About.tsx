import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { Check, Heart, BookOpen, Users, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Devotion",
    description:
      "Every ritual is performed with complete devotion and surrender to the divine.",
  },
  {
    icon: BookOpen,
    title: "Authenticity",
    description:
      "We follow traditional Vedic scriptures and methods passed down through generations.",
  },
  {
    icon: Users,
    title: "Service",
    description:
      "Serving devotees and seekers is our sacred duty and highest purpose.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for perfection in every mantra, every ritual, every blessing.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageBanner
        title="About Us"
        subtitle="Discover our mission to preserve and share the sacred wisdom of Vedic traditions"
        backgroundImage="https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=1920&q=80"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-3xl font-heading mb-4 block">ॐ</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
                Welcome to Vaidik Bhavan
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Vaidik Bhavan stands as a beacon of Vedic wisdom in the modern
                world. Established over 25 years ago, we have been dedicated to
                preserving and propagating the sacred traditions of our ancient
                culture.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our name, "Vaidik Bhavan," translates to "House of Vedic Wisdom"
                — and that is exactly what we strive to be. A place where seekers
                from all walks of life can come to experience the transformative
                power of authentic Vedic rituals and spiritual practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you seek blessings for a new beginning, guidance through
                challenging times, or simply wish to connect with the divine, our
                doors are always open to welcome you on your spiritual journey.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=800&q=80"
                  alt="Temple ceremony"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-primary/30 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-soft">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-2xl font-heading">ॐ</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To preserve and propagate the authentic Vedic traditions by
                conducting sacred rituals with complete devotion, providing
                spiritual guidance to seekers, and creating a community of
                individuals committed to dharmic living. We strive to make the
                profound wisdom of our ancient scriptures accessible and
                relevant to contemporary life.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-soft">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-2xl font-heading">🙏</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a globally recognized center of Vedic learning and
                spiritual practice, touching millions of lives through the
                transformative power of dharma. We envision a world where the
                eternal values of truth, compassion, and spiritual awareness
                guide humanity towards peace, harmony, and enlightenment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary text-3xl font-heading mb-4 block">ॐ</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
              The principles that guide every aspect of our spiritual service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <value.icon size={36} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-3xl font-heading mb-4 block">ॐ</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-8">
              Our Spiritual Philosophy
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We believe that the essence of Vedic spirituality lies not in mere
              ritual performance, but in the transformation of consciousness
              that these sacred practices facilitate. Every mantra we chant,
              every offering we make, is an invitation for the divine to
              manifest in our lives.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our approach combines strict adherence to scriptural guidelines
              with compassionate understanding of each devotee's unique journey.
              We recognize that spirituality is not one-size-fits-all, and we
              tailor our guidance to meet you exactly where you are.
            </p>

            <div className="bg-muted p-8 md:p-10 rounded-2xl">
              <blockquote className="text-xl md:text-2xl font-heading text-secondary italic mb-4">
                "तमसो मा ज्योतिर्गमय"
              </blockquote>
              <p className="text-primary font-medium">
                "Lead me from darkness to light"
              </p>
              <p className="text-muted-foreground mt-2">
                — Brihadaranyaka Upanishad
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
