interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageBanner = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=1920&q=80",
}: PageBannerProps) => {
  return (
    <section
      className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary-foreground/30 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary-foreground/20 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="inline-block mb-4">
          <span className="text-primary text-4xl font-heading">ॐ</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 50C360 100 720 0 1080 50C1260 75 1380 100 1440 100V100H0V50Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageBanner;
