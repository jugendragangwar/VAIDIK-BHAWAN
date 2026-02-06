import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import ServiceDetailSidebar from "@/components/services/ServiceDetailSidebar";
import ServiceGalleryPreview from "@/components/services/ServiceGalleryPreview";
import CTASection from "@/components/home/CTASection";

// Import service images
import pujaImage from "@/assets/service-detail-puja.jpg";
import astrologyImage from "@/assets/service-detail-astrology.jpg";
import guidanceImage from "@/assets/service-detail-guidance.jpg";
import weddingImage from "@/assets/service-detail-wedding.jpg";

interface ServiceData {
  title: string;
  description: string;
  fullContent: string[];
  benefits: string[];
  process: string[];
  duration: string;
  participants: string;
  image: string;
  galleryImages: string[];
}

const servicesData: Record<string, ServiceData> = {
  "puja-services": {
    title: "Puja Services",
    description:
      "Experience authentic Vedic pujas performed by learned priests with complete devotion.",
    fullContent: [
      "Our puja services are conducted by highly learned Brahmin priests who have undergone years of training in Vedic rituals. Each puja is performed with the correct pronunciation of mantras, proper offerings (samagri), and adherence to the procedures outlined in our sacred scriptures.",
      "We offer a wide range of pujas including Ganesh Puja for removing obstacles, Lakshmi Puja for prosperity, Saraswati Puja for knowledge, Navgraha Shanti for planetary peace, and many more specialized rituals for specific purposes.",
      "Whether you need a simple daily puja or an elaborate ritual spanning multiple days, our team ensures that every ceremony is conducted with the highest standards of spiritual integrity and devotion.",
    ],
    benefits: [
      "Blessings from the divine for your specific needs",
      "Removal of obstacles and negative influences",
      "Peace of mind and spiritual upliftment",
      "Authentic rituals performed by qualified priests",
      "Complete materials (samagri) provided",
      "Guidance on proper vrat and procedures",
    ],
    process: [
      "Consultation to understand your needs and select appropriate puja",
      "Muhurat selection for the most auspicious timing",
      "Preparation of all necessary materials and setup",
      "Performance of the puja with proper mantras and procedures",
      "Completion with aarti and prasad distribution",
    ],
    duration: "2-4 hours (varies by puja)",
    participants: "Any number welcome",
    image: pujaImage,
    galleryImages: [pujaImage],
  },
  astrology: {
    title: "Vedic Astrology",
    description:
      "Gain insights into your life path through the ancient science of Jyotish.",
    fullContent: [
      "Vedic Astrology, or Jyotish Shastra, is one of the six Vedangas (limbs of Vedas) and provides profound insights into the cosmic influences on our lives. Our expert astrologers analyze your birth chart (kundli) to reveal patterns, challenges, and opportunities.",
      "We use traditional calculation methods combined with years of experience to provide accurate readings. Our consultations cover all aspects of life including career, relationships, health, finances, and spiritual growth.",
      "Beyond predictions, we offer practical remedies including gemstone recommendations, specific pujas, mantra recitation, and lifestyle adjustments aligned with cosmic rhythms. Our goal is to empower you with knowledge to navigate life with greater awareness.",
    ],
    benefits: [
      "Deep insights into your personality and life patterns",
      "Understanding of current planetary periods (dasha)",
      "Guidance for important life decisions",
      "Personalized remedies for challenges",
      "Compatibility analysis for relationships",
      "Career and financial guidance",
    ],
    process: [
      "Share your birth details (date, time, place)",
      "Chart preparation and initial analysis",
      "Detailed consultation session (in-person or video)",
      "Written report with findings and recommendations",
      "Follow-up guidance as needed",
    ],
    duration: "1-2 hours consultation",
    participants: "Individual sessions",
    image: astrologyImage,
    galleryImages: [astrologyImage],
  },
  "spiritual-guidance": {
    title: "Spiritual Guidance",
    description:
      "Receive personalized spiritual counseling from experienced gurus.",
    fullContent: [
      "Our spiritual guidance sessions offer a safe, sacred space for you to explore your inner world and receive wisdom from experienced teachers. Whether you're new to spirituality or a seasoned practitioner, our guides meet you where you are.",
      "Sessions may include discussion of scriptures, meditation techniques, mantra practice, understanding of dharma, and practical application of spiritual principles to everyday challenges. We draw from the vast treasure of Vedic wisdom to address your specific concerns.",
      "Our approach is non-judgmental and supportive. We believe everyone has their unique path to the divine, and our role is to help illuminate your journey, not impose a rigid framework. Transformation happens naturally when we connect with our true nature.",
    ],
    benefits: [
      "Clarity on life purpose and direction",
      "Techniques for managing stress and anxiety",
      "Deeper understanding of spiritual texts",
      "Personal meditation and mantra practice",
      "Resolution of inner conflicts",
      "Connection with higher consciousness",
    ],
    process: [
      "Initial meeting to understand your spiritual background",
      "Assessment of current challenges and goals",
      "Customized guidance plan development",
      "Regular sessions for learning and practice",
      "Ongoing support and adjustments",
    ],
    duration: "1 hour sessions",
    participants: "Individual or small groups",
    image: guidanceImage,
    galleryImages: [guidanceImage],
  },
  "wedding-ceremonies": {
    title: "Wedding Ceremonies",
    description:
      "Celebrate your sacred union with traditional Vedic wedding ceremonies.",
    fullContent: [
      "A Vedic wedding is not just a social ceremony but a sacred union blessed by divine forces. Every ritual, from the lighting of the sacred fire to the Saptapadi (seven steps), carries deep spiritual significance and establishes a dharmic foundation for married life.",
      "Our priests conduct the complete wedding ceremony including all traditional elements: Ganesh Puja, Mandap Puja, Kanyadan, Mangal Phera, Saptapadi, and blessings from elders. We explain each ritual to ensure the couple and families understand the beautiful symbolism.",
      "We work closely with families to honor regional customs and family traditions while maintaining the essential Vedic elements. Our goal is to make your wedding day not just beautiful, but spiritually meaningful and blessed.",
    ],
    benefits: [
      "Complete traditional Vedic ceremony",
      "Experienced priests with clear pronunciation",
      "Explanation of rituals in Hindi and English",
      "Incorporation of family traditions",
      "Auspicious muhurat selection",
      "Divine blessings for lasting union",
    ],
    process: [
      "Initial consultation with the families",
      "Muhurat selection based on horoscopes",
      "Pre-wedding rituals planning",
      "Main wedding ceremony",
      "Post-wedding blessings and rituals",
    ],
    duration: "Full day ceremony",
    participants: "All family and guests",
    image: weddingImage,
    galleryImages: [weddingImage],
  },
};

// Default fallback for services not in detailed data
const defaultService: ServiceData = {
  title: "Service Details",
  description: "Learn more about this sacred service.",
  fullContent: [
    "This service is performed with complete devotion and adherence to Vedic traditions.",
    "Our learned priests ensure every ritual is conducted with proper procedures and mantras.",
    "Contact us to learn more about this service and how it can benefit your spiritual journey.",
  ],
  benefits: [
    "Authentic Vedic rituals",
    "Experienced priests",
    "Complete materials provided",
    "Spiritual guidance included",
  ],
  process: [
    "Initial consultation",
    "Date and time selection",
    "Ceremony preparation",
    "Ritual performance",
    "Blessings and completion",
  ],
  duration: "Varies by service",
  participants: "Varies",
  image: pujaImage,
  galleryImages: [],
};

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const service = id && servicesData[id] ? servicesData[id] : defaultService;

  const allServices = Object.entries(servicesData).map(([key, svc]) => ({
    key,
    title: svc.title,
  }));

  return (
    <Layout>
      {/* Hero Section */}
      <ServiceDetailHero
        title={service.title}
        description={service.description}
        image={service.image}
      />

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <ServiceDetailContent
              fullContent={service.fullContent}
              benefits={service.benefits}
              process={service.process}
            />
            <ServiceDetailSidebar
              duration={service.duration}
              participants={service.participants}
              currentServiceId={id}
              allServices={allServices}
            />
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      {service.galleryImages.length > 0 && (
        <ServiceGalleryPreview
          images={service.galleryImages}
          title={service.title}
        />
      )}

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default ServiceDetails;
