import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ServiceDetailHeroProps {
  title: string;
  description: string;
  image: string;
}

const ServiceDetailHero = ({
  title,
  description,
  image,
}: ServiceDetailHeroProps) => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container-custom pb-12 pt-32">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList className="text-primary-foreground/70">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-primary-foreground/50" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-primary-foreground/50" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary">{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
          {description}
        </p>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 60 1440 40V80H0V40Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
