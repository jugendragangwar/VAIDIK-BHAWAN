import { Link } from "react-router-dom";
import { Clock, Users, Phone, ArrowRight, Sparkles } from "lucide-react";

interface ServiceDetailSidebarProps {
  duration: string;
  participants: string;
  currentServiceId?: string;
  allServices: { key: string; title: string }[];
}

const ServiceDetailSidebar = ({
  duration,
  participants,
  currentServiceId,
  allServices,
}: ServiceDetailSidebarProps) => {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-32 space-y-6">
        {/* Quick Info Card */}
        <div className="bg-gradient-to-br from-card to-muted/30 rounded-2xl shadow-soft p-6 border border-border/50">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={20} className="text-primary" />
            <h4 className="text-lg font-heading font-bold text-secondary">
              Quick Information
            </h4>
          </div>
          <ul className="space-y-5">
            <li className="flex items-center gap-4 p-3 bg-background/60 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock size={22} className="text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground block">
                  Duration
                </span>
                <span className="text-secondary font-semibold">{duration}</span>
              </div>
            </li>
            <li className="flex items-center gap-4 p-3 bg-background/60 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users size={22} className="text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground block">
                  Participants
                </span>
                <span className="text-secondary font-semibold">
                  {participants}
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* CTA Card */}
        <div className="relative overflow-hidden bg-secondary text-secondary-foreground rounded-2xl p-6">
          {/* Decorative circles */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/20 blur-xl" />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-primary/10 blur-xl" />
          
          <div className="relative z-10">
            <h4 className="text-xl font-heading font-bold mb-3">
              Ready to Book?
            </h4>
            <p className="text-secondary-foreground/80 text-sm mb-6 leading-relaxed">
              Contact us to schedule this service or ask any questions about our sacred ceremonies.
            </p>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              <Phone size={18} />
              Contact Us Now
            </Link>
          </div>
        </div>

        {/* Other Services */}
        <div className="bg-card rounded-2xl shadow-soft p-6 border border-border/50">
          <h4 className="text-lg font-heading font-bold text-secondary mb-5">
            Explore Other Services
          </h4>
          <ul className="space-y-3">
            {allServices
              .filter((svc) => svc.key !== currentServiceId)
              .slice(0, 4)
              .map((svc) => (
                <li key={svc.key}>
                  <Link
                    to={`/services/${svc.key}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-3 rounded-xl hover:bg-muted/50 group"
                  >
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    <span className="font-medium">{svc.title}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailSidebar;
