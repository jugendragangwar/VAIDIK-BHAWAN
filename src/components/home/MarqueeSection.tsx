import { Flame, Heart, Sparkles, Sun, Moon, Star } from "lucide-react";
import OmIcon from "@/components/icons/OmIcon";

const MarqueeSection = () => {
  const items = [
    { icon: OmIcon, text: "ॐ नमः शिवाय" },
    { icon: Flame, text: "Har Har Mahadev" },
    { icon: Sun, text: "ॐ गं गणपतये नमः" },
    { icon: Heart, text: "Divine Blessings" },
    { icon: Star, text: "ॐ नमो भगवते वासुदेवाय" },
    { icon: Moon, text: "Peace & Prosperity" },
    { icon: Sparkles, text: "ॐ श्री महालक्ष्म्यै नमः" },
    { icon: OmIcon, text: "Spiritual Awakening" },
  ];

  return (
    <section className="py-6 bg-primary overflow-hidden">
      <div className="marquee whitespace-nowrap flex">
        {/* Duplicate the content for seamless loop */}
        {[...items, ...items].map((item, index) => {
          const IconComponent = item.icon;
          return (
            <span
              key={index}
              className="inline-flex items-center gap-3 px-8 text-primary-foreground font-medium text-lg md:text-xl"
            >
              <IconComponent className="w-5 h-5 flex-shrink-0" />
              {item.text}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default MarqueeSection;
