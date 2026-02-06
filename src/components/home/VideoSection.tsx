import { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import OmIcon from "@/components/icons/OmIcon";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    const video = document.getElementById("temple-video") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    const video = document.getElementById("temple-video") as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-secondary transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <OmIcon className="w-8 h-8 text-primary" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Sacred Moments
            </span>
            <OmIcon className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience Divine <span className="text-primary">Ceremonies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Witness the beauty of our sacred rituals and spiritual events that bring peace and blessings to all devotees.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          {/* Video Placeholder with Gradient Overlay */}
          <div className="aspect-video bg-gradient-to-br from-secondary via-muted to-secondary relative">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlayPause}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-glow"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
                ) : (
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground ml-2" />
                )}
              </button>
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-secondary/90 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                    Sacred Temple Ceremonies
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Evening Aarti & Havan Rituals
                  </p>
                </div>
                <button
                  onClick={handleMuteToggle}
                  className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-foreground" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-foreground" />
                  )}
                </button>
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
            <div className="absolute bottom-20 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
            <div className="absolute bottom-20 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
          </div>

          {/* Hidden Video Element (for future video integration) */}
          <video
            id="temple-video"
            className="hidden"
            muted={isMuted}
            loop
            playsInline
          >
            {/* Video source would be added here */}
          </video>
        </div>

        {/* Video Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              icon: "🕉️",
              title: "Daily Aarti",
              description: "Morning & evening divine prayers",
            },
            {
              icon: "🔥",
              title: "Havan Rituals",
              description: "Sacred fire ceremonies",
            },
            {
              icon: "🪔",
              title: "Festival Celebrations",
              description: "Grand spiritual celebrations",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="text-3xl">{feature.icon}</div>
              <div>
                <h4 className="font-semibold text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
