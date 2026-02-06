import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import gallery images
import ceremonyAarti from "@/assets/gallery/ceremony-aarti.jpg";
import ceremonyPuja from "@/assets/gallery/ceremony-puja.jpg";
import ceremonyHavan from "@/assets/gallery/ceremony-havan.jpg";
import templeInterior from "@/assets/gallery/temple-interior.jpg";
import templeExterior from "@/assets/gallery/temple-exterior.jpg";
import templeDeity from "@/assets/gallery/temple-deity.jpg";
import templeEntrance from "@/assets/gallery/temple-entrance.jpg";
import spiritualMeditation from "@/assets/gallery/spiritual-meditation.jpg";
import spiritualScriptures from "@/assets/gallery/spiritual-scriptures.jpg";
import spiritualYoga from "@/assets/gallery/spiritual-yoga.jpg";
import weddingCeremony from "@/assets/gallery/wedding-ceremony.jpg";
import weddingRituals from "@/assets/gallery/wedding-rituals.jpg";

const galleryImages = [
  {
    id: 1,
    src: ceremonyAarti,
    alt: "Evening Aarti Ceremony",
    category: "Ceremonies",
    size: "tall", // tall, wide, or normal
  },
  {
    id: 2,
    src: templeInterior,
    alt: "Temple Interior",
    category: "Temple",
    size: "wide",
  },
  {
    id: 3,
    src: spiritualMeditation,
    alt: "Meditation Session",
    category: "Spiritual",
    size: "normal",
  },
  {
    id: 4,
    src: weddingCeremony,
    alt: "Hindu Wedding Ceremony",
    category: "Weddings",
    size: "tall",
  },
  {
    id: 5,
    src: spiritualScriptures,
    alt: "Sacred Vedic Scriptures",
    category: "Spiritual",
    size: "normal",
  },
  {
    id: 6,
    src: ceremonyPuja,
    alt: "Traditional Puja Setup",
    category: "Ceremonies",
    size: "wide",
  },
  {
    id: 7,
    src: templeExterior,
    alt: "Temple Gopuram Architecture",
    category: "Temple",
    size: "tall",
  },
  {
    id: 8,
    src: ceremonyHavan,
    alt: "Havan Fire Ritual",
    category: "Ceremonies",
    size: "normal",
  },
  {
    id: 9,
    src: spiritualYoga,
    alt: "Yoga & Pranayama Session",
    category: "Spiritual",
    size: "wide",
  },
  {
    id: 10,
    src: templeDeity,
    alt: "Divine Deity Darshan",
    category: "Temple",
    size: "normal",
  },
  {
    id: 11,
    src: weddingRituals,
    alt: "Wedding Sacred Rituals",
    category: "Weddings",
    size: "tall",
  },
  {
    id: 12,
    src: templeEntrance,
    alt: "Temple Sacred Entrance",
    category: "Temple",
    size: "wide",
  },
];

const categories = ["All", "Ceremonies", "Temple", "Spiritual", "Weddings"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleImages, setVisibleImages] = useState(galleryImages);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  // Handle smooth filter transition
  useEffect(() => {
    setIsAnimating(true);

    const fadeOutTimer = setTimeout(() => {
      setVisibleImages(filteredImages);

      const fadeInTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 50);

      return () => clearTimeout(fadeInTimer);
    }, 200);

    return () => clearTimeout(fadeOutTimer);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? visibleImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === visibleImages.length - 1 ? 0 : prev + 1
    );
  };

  // Get size classes for Pinterest layout
  const getSizeClasses = (size: string) => {
    switch (size) {
      case "tall":
        return "row-span-2";
      case "wide":
        return "col-span-2";
      default:
        return "";
    }
  };

  return (
    <Layout>
      <PageBanner
        title="Gallery"
        subtitle="Glimpses of divine moments and sacred ceremonies"
        backgroundImage={templeInterior}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-glow scale-105"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:scale-102"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Pinterest Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {visibleImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => openLightbox(index)}
                className={`group relative w-full break-inside-avoid overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-500 ${
                  isAnimating
                    ? "opacity-0 scale-95 translate-y-4"
                    : "opacity-100 scale-100 translate-y-0"
                }`}
                style={{
                  transitionDelay: isAnimating ? "0ms" : `${index * 60}ms`,
                }}
              >
                <div
                  className={`relative ${
                    image.size === "tall"
                      ? "aspect-[3/4]"
                      : image.size === "wide"
                      ? "aspect-[4/3]"
                      : "aspect-square"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <svg
                        className="w-5 h-5 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                    </div>
                    <span className="text-primary-foreground font-medium text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      {image.alt}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                    {image.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-secondary/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 text-secondary-foreground/70 hover:text-primary hover:bg-primary/10 rounded-full transition-all z-50"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 p-3 text-secondary-foreground/70 hover:text-primary hover:bg-primary/10 rounded-full transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[80vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={visibleImages[currentImageIndex]?.src}
              alt={visibleImages[currentImageIndex]?.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl transition-opacity duration-300"
            />
            <div className="text-center mt-6">
              <p className="text-primary-foreground text-lg font-medium">
                {visibleImages[currentImageIndex]?.alt}
              </p>
              <span className="inline-block mt-2 px-4 py-1 bg-primary/20 text-primary rounded-full text-sm">
                {visibleImages[currentImageIndex]?.category}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 p-3 text-secondary-foreground/70 hover:text-primary hover:bg-primary/10 rounded-full transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full text-secondary-foreground/80 text-sm font-medium">
            {currentImageIndex + 1} / {visibleImages.length}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
