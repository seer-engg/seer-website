import { useState } from "react";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Video } from "@/data/videoData";

interface VideoCardProps {
  video: Video;
  featured?: boolean;
}

const categoryColors: Record<string, string> = {
  Slack: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
  Email: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  Integrations: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  Security: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
};

const VideoCard = ({ video, featured = false }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
  const colorClass = categoryColors[video.category] || "bg-gray-500/15 text-gray-600 dark:text-gray-400";

  const handlePlay = () => setIsPlaying(true);
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsPlaying(true);
    }
  };

  if (featured) {
    return (
      <div className="rounded-2xl overflow-hidden border bg-card shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Video — takes 3/5 on desktop */}
          <div className="md:col-span-3">
            <AspectRatio ratio={16 / 9} className="bg-muted">
              {!isPlaying ? (
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={handlePlay}
                  onKeyDown={handleKeyDown}
                  role="button"
                  tabIndex={0}
                  aria-label={`Play ${video.title}`}
                >
                  <img
                    src={thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                      <Play className="w-9 h-9 text-gray-900 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-black/70 text-white border-transparent text-xs">
                    {video.duration}
                  </Badge>
                </div>
              ) : (
                <iframe
                  src={embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </AspectRatio>
          </div>

          {/* Info — takes 2/5 on desktop */}
          <div className="md:col-span-2 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="text-[10px] font-semibold uppercase tracking-widest border-primary/40 text-primary">
                Latest
              </Badge>
              <Badge className={`${colorClass} border-transparent text-xs`}>
                {video.category}
              </Badge>
            </div>
            <h3 className="text-2xl font-bold mb-3 leading-tight">{video.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{video.description}</p>
          </div>
        </div>
      </div>
    );
  }

  // Compact card for grid
  return (
    <div className="group rounded-xl overflow-hidden border bg-card shadow-sm hover:shadow-md transition-all duration-200">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        {!isPlaying ? (
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={handlePlay}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label={`Play ${video.title}`}
          >
            <img
              src={thumbnailUrl}
              alt={video.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md">
                <Play className="w-6 h-6 text-gray-900 ml-0.5" fill="currentColor" />
              </div>
            </div>
            <Badge className="absolute top-2 right-2 bg-black/70 text-white border-transparent text-[10px]">
              {video.duration}
            </Badge>
          </div>
        ) : (
          <iframe
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </AspectRatio>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge className={`${colorClass} border-transparent text-[10px]`}>
            {video.category}
          </Badge>
        </div>
        <h3 className="font-semibold text-sm leading-snug">{video.title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
