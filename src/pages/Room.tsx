import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import {
  Wifi,
  Car,
  UtensilsCrossed,
  AirVent,
  Users,
  Phone,
  ArrowRight,
  Check,
  Star,
  Bed,
  Bath,
  Maximize,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const rooms = [
  {
    id: 1,
    name: "Dharma Suite",
    description:
      "A peaceful sanctuary designed for pilgrims and devotees seeking a spiritual retreat. Features traditional décor with modern comforts.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    price: "₹1,500",
    priceNote: "per night",
    beds: 1,
    baths: 1,
    size: "250 sq ft",
    capacity: 2,
    amenities: ["AC", "WiFi", "TV", "Hot Water", "Room Service"],
    popular: false,
  },
  {
    id: 2,
    name: "Seva Family Room",
    description:
      "Spacious accommodations perfect for families on pilgrimage. Includes a sitting area and two comfortable beds.",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80",
    price: "₹2,500",
    priceNote: "per night",
    beds: 2,
    baths: 1,
    size: "400 sq ft",
    capacity: 4,
    amenities: ["AC", "WiFi", "TV", "Hot Water", "Room Service", "Mini Fridge"],
    popular: true,
  },
  {
    id: 3,
    name: "Ashram Dormitory",
    description:
      "Economical shared accommodation for solo travelers and devotees. Clean, safe, and community-oriented.",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
    price: "₹500",
    priceNote: "per bed/night",
    beds: 6,
    baths: 2,
    size: "600 sq ft",
    capacity: 6,
    amenities: ["Fan", "Shared Bath", "Locker", "Common Area"],
    popular: false,
  },
  {
    id: 4,
    name: "Moksha Premium Suite",
    description:
      "Luxurious accommodation with panoramic temple views. Ideal for extended stays and VIP guests seeking ultimate comfort.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
    price: "₹4,000",
    priceNote: "per night",
    beds: 1,
    baths: 1,
    size: "500 sq ft",
    capacity: 2,
    amenities: [
      "AC",
      "WiFi",
      "Smart TV",
      "Hot Water",
      "Room Service",
      "Temple View",
      "Balcony",
    ],
    popular: true,
  },
];

const amenitiesList = [
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "High-speed internet throughout",
  },
  { icon: Car, title: "Free Parking", description: "Secure parking available" },
  {
    icon: UtensilsCrossed,
    title: "Satvik Meals",
    description: "Pure vegetarian cuisine",
  },
  { icon: AirVent, title: "Climate Control", description: "AC in all rooms" },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock assistance",
  },
  {
    icon: Phone,
    title: "Temple Guides",
    description: "Guided darshan available",
  },
];

const Room = () => {
  const { ref: roomsRef, isVisible: roomsVisible } = useScrollAnimation();
  const { ref: amenitiesRef, isVisible: amenitiesVisible } =
    useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <Layout>
      <PageBanner
        title="Accommodation"
        subtitle="Comfortable stays for pilgrims and spiritual seekers"
        backgroundImage="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=80"
      />

      {/* Rooms Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container-custom">
          <div
            ref={roomsRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ${
              roomsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Bed className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  Our Accommodations
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
                Find Your <span className="text-primary">Perfect Stay</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                From budget-friendly dormitories to premium suites, we offer
                comfortable stays for every pilgrim
              </p>
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rooms.map((room, index) => (
                <div
                  key={room.id}
                  className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Popular Badge */}
                  {room.popular && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/20 lg:bg-gradient-to-t" />
                    </div>

                    {/* Content */}
                    <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-2xl font-heading font-bold text-secondary group-hover:text-primary transition-colors mb-2">
                          {room.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {room.description}
                        </p>
                      </div>

                      {/* Room Specs */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Bed className="w-4 h-4 text-primary" />
                          <span>{room.beds} Bed(s)</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Bath className="w-4 h-4 text-primary" />
                          <span>{room.baths} Bath(s)</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Maximize className="w-4 h-4 text-primary" />
                          <span>{room.size}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Users className="w-4 h-4 text-primary" />
                          <span>Up to {room.capacity}</span>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {room.amenities.slice(0, 4).map((amenity) => (
                          <span
                            key={amenity}
                            className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                        {room.amenities.length > 4 && (
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                            +{room.amenities.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Price & CTA */}
                      <div className="mt-auto flex items-center justify-between">
                        <div>
                          <span className="text-3xl font-bold text-primary">
                            {room.price}
                          </span>
                          <span className="text-muted-foreground text-sm ml-1">
                            {room.priceNote}
                          </span>
                        </div>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 hover:shadow-glow transition-all duration-300"
                        >
                          Book Now
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div
            ref={amenitiesRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ${
              amenitiesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                Guest <span className="text-primary">Amenities</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Everything you need for a comfortable and spiritual stay
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {amenitiesList.map((amenity, index) => (
                <div
                  key={amenity.title}
                  className="group text-center p-6 bg-card rounded-2xl shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <amenity.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-secondary mb-1">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Guidelines */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div
            ref={ctaRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ${
              ctaVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Guidelines */}
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
                  Booking <span className="text-primary">Guidelines</span>
                </h2>

                <div className="space-y-4">
                  {[
                    "Check-in time: 12:00 PM | Check-out time: 11:00 AM",
                    "Valid ID proof required at the time of check-in",
                    "Advance booking recommended during festival seasons",
                    "Cancellation policy: Free cancellation up to 24 hours before check-in",
                    "Children below 5 years stay free with parents",
                    "Pets are not allowed in the premises",
                  ].map((guideline, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl"
                    >
                      <div className="shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{guideline}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="relative bg-gradient-to-br from-primary/10 via-accent to-primary/5 p-8 md:p-10 rounded-3xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-1/2 translate-y-1/2" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
                    Need Help Booking?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our team is here to assist you with reservations, special
                    requests, or any questions about your stay.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">
                        +91 98765 43210
                      </span>
                    </div>
                  </div>

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
        </div>
      </section>
    </Layout>
  );
};

export default Room;
