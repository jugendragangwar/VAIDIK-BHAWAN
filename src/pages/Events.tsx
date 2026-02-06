import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
  Star,
  Flame,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const events = [
  {
    id: 1,
    title: "Maha Shivaratri Celebration",
    date: "2025-02-26",
    time: "6:00 PM - 6:00 AM",
    location: "Main Temple Hall",
    description:
      "Join us for an all-night celebration of Lord Shiva with continuous abhishekam, bhajans, and meditation. Prasad will be served throughout the night.",
    image:
      "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=600&q=80",
    featured: true,
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
  {
    id: 2,
    title: "Ram Navami",
    date: "2025-04-06",
    time: "5:00 AM - 9:00 PM",
    location: "Temple Complex",
    description:
      "Celebrate the birth of Lord Rama with special pujas, Ram Katha recitation, and community feast. Children's activities included.",
    image:
      "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=600&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Weekly Satyanarayan Katha",
    date: "Every Saturday",
    time: "10:00 AM - 12:00 PM",
    location: "Prayer Hall",
    description:
      "Join our weekly Satyanarayan Katha for blessings of truth and prosperity. All are welcome to participate and receive prasad.",
    image:
      "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=600&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Hanuman Jayanti",
    date: "2025-04-12",
    time: "5:00 AM - 8:00 PM",
    location: "Hanuman Temple",
    description:
      "Celebrate the birth anniversary of Lord Hanuman with Sunderkand path, special abhishekam, and prasad distribution.",
    image:
      "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=600&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Navratri Festival",
    date: "2025-03-30 to 2025-04-07",
    time: "6:00 PM - 10:00 PM",
    location: "Temple Grounds",
    description:
      "Nine nights of divine celebration with Durga Puja, Garba, cultural programs, and special aartis. Join us for this auspicious festival.",
    image:
      "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=600&q=80",
    featured: true,
    gradient: "from-purple-500 via-pink-500 to-red-500",
  },
  {
    id: 6,
    title: "Monthly Purnima Puja",
    date: "Every Full Moon",
    time: "7:00 PM - 9:00 PM",
    location: "Main Temple",
    description:
      "Special prayers and puja on every full moon night. Experience the divine energy and receive blessings for the month ahead.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    featured: false,
  },
];

const formatDate = (dateString: string) => {
  if (dateString.includes("Every")) return dateString;
  if (dateString.includes("to")) return dateString;

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Events = () => {
  const featuredEvents = events.filter((e) => e.featured);
  const regularEvents = events.filter((e) => !e.featured);

  const { ref: featuredRef, isVisible: featuredVisible } = useScrollAnimation();
  const { ref: regularRef, isVisible: regularVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <PageBanner
        title="Events & Rituals"
        subtitle="Join us for sacred ceremonies and spiritual gatherings"
        backgroundImage="https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=1920&q=80"
      />

      {/* Featured Events Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
        <div className="container-custom">
          {featuredEvents.length > 0 && (
            <div
              ref={featuredRef as React.RefObject<HTMLDivElement>}
              className={`mb-20 transition-all duration-1000 ${
                featuredVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Section Header */}
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-primary font-medium text-sm">
                    Featured Celebrations
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
                  Major <span className="text-primary">Sacred Events</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Experience the grandeur of our most significant spiritual
                  celebrations
                </p>
              </div>

              {/* Featured Events Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className="group relative bg-card rounded-3xl overflow-hidden shadow-elevated hover:shadow-2xl transition-all duration-500"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Decorative Gradient Border */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-3xl`}
                    >
                      <div className="absolute inset-[2px] bg-card rounded-[22px]" />
                    </div>

                    <div className="relative">
                      {/* Image Section */}
                      <div className="relative h-72 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-60`}
                        />

                        {/* Floating Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-semibold rounded-full flex items-center gap-2">
                            <Star className="w-4 h-4 fill-current" />
                            Featured
                          </span>
                        </div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-3xl font-heading font-bold text-white drop-shadow-lg">
                            {event.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 relative z-10">
                        {/* Event Details */}
                        <div className="flex flex-wrap gap-4 mb-5">
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                            <Calendar size={14} className="text-primary" />
                            <span className="text-sm font-medium text-foreground">
                              {formatDate(event.date)}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                            <Clock size={14} className="text-primary" />
                            <span className="text-sm font-medium text-foreground">
                              {event.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                            <MapPin size={14} className="text-primary" />
                            <span className="text-sm font-medium text-foreground">
                              {event.location}
                            </span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {event.description}
                        </p>

                        <Link
                          to="/contact"
                          className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${event.gradient} text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}
                        >
                          Register Interest
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Events Section */}
          <div
            ref={regularRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ${
              regularVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full mb-6">
                <Flame className="w-4 h-4 text-primary" />
                <span className="text-foreground font-medium text-sm">
                  Regular Programs
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
                Upcoming <span className="text-primary">Events</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Join us for these sacred gatherings and ceremonies
              </p>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="group bg-card rounded-2xl shadow-soft overflow-hidden hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/20 to-transparent" />

                    {/* Date Badge */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2 text-white/90 text-xs">
                        <Calendar size={12} />
                        <span>{formatDate(event.date)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {event.title}
                    </h3>

                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-primary shrink-0" />
                        <span className="truncate">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {event.description}
                    </p>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                    >
                      Learn More
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            ref={ctaRef as React.RefObject<HTMLDivElement>}
            className={`text-center mt-20 relative overflow-hidden transition-all duration-1000 ${
              ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative bg-gradient-to-r from-primary/10 via-accent to-primary/10 p-10 md:p-16 rounded-3xl">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full translate-x-1/2 translate-y-1/2" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                  Want to Host a <span className="text-primary">Private Event</span>?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
                  We can arrange special pujas and ceremonies for your family or
                  organization. Contact us to discuss your requirements.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 hover:shadow-glow transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
