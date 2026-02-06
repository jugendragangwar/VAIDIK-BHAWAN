import { Check } from "lucide-react";
import OmIcon from "@/components/icons/OmIcon";

interface ServiceDetailContentProps {
  fullContent: string[];
  benefits: string[];
  process: string[];
}

const ServiceDetailContent = ({
  fullContent,
  benefits,
  process,
}: ServiceDetailContentProps) => {
  return (
    <div className="lg:col-span-2 space-y-12">
      {/* Description */}
      <div>
        <OmIcon className="text-primary mb-4" size={40} />
        <h2 className="text-3xl font-heading font-bold text-secondary mb-6">
          About This Service
        </h2>
        <div className="space-y-4">
          {fullContent.map((paragraph, index) => (
            <p
              key={index}
              className="text-muted-foreground leading-relaxed text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-3xl p-8">
        <h3 className="text-2xl font-heading font-bold text-secondary mb-6">
          Benefits & Blessings
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-xl"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Check size={16} className="text-primary" />
              </span>
              <span className="text-secondary font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div>
        <h3 className="text-2xl font-heading font-bold text-secondary mb-6">
          Our Sacred Process
        </h3>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden sm:block" />
          
          <div className="space-y-4">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 group"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm relative z-10 group-hover:scale-110 transition-transform shadow-lg">
                  {index + 1}
                </span>
                <div className="flex-1 bg-card rounded-xl p-5 shadow-soft group-hover:shadow-md transition-shadow">
                  <span className="text-secondary font-medium">{step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailContent;
