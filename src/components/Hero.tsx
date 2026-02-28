import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { featuredVideo } from "@/data/videoData";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://i.ytimg.com/vi/${featuredVideo.id}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${featuredVideo.id}?autoplay=1`;

  return (
    <section className="relative overflow-hidden pt-32 pb-16 px-6">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dot-grid" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 mt-8 tracking-tight opacity-0 animate-blur-in">
            Stop doing tasks your computer should handle.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance mb-8 opacity-0 animate-blur-in delay-100">
            Seer automates your repetitive marketing, sales, and support work.
            Set it up in minutes. Save hours every week.
          </p>
          <div className="flex items-center justify-center gap-4 mb-3 opacity-0 animate-blur-in delay-200">
            <Button variant="brand" size="lg" asChild>
              <a href="https://app.getseer.dev" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-12 opacity-0 animate-blur-in delay-200">
            No code required. 14-day free trial.
          </p>
        </div>

        {/* Featured video */}
        <div className="max-w-4xl mx-auto opacity-0 animate-blur-in delay-300">
          <div className="gradient-border rounded-xl shadow-glow-lg">
            <div className="bg-background rounded-xl overflow-hidden">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                {!isPlaying ? (
                  <>
                    <img
                      src={thumbnailUrl}
                      alt={`${featuredVideo.title} video thumbnail`}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer group"
                      onClick={() => setIsPlaying(true)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsPlaying(true);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Play ${featuredVideo.title} video`}
                    >
                      <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                        <Play className="w-10 h-10 text-black ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-black/80 text-white border-transparent">
                        {featuredVideo.duration}
                      </Badge>
                    </div>
                  </>
                ) : (
                  <iframe
                    src={embedUrl}
                    title={featuredVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                )}
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
