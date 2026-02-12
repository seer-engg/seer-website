import { useState } from "react";
import { Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Video } from "@/data/videoData";

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1`;

  // Color mapping for categories
  const categoryColors: Record<string, { bg: string; text: string }> = {
    "Getting Started": { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400" },
    "Email Automation": { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400" },
    "Content Creation": { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400" },
    "Lead Management": { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400" }
  };

  const colors = categoryColors[video.category] || { bg: "bg-gray-500/10", text: "text-gray-600 dark:text-gray-400" };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsPlaying(true);
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-200">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-2xl">{video.title}</CardTitle>
          <Badge className={`${colors.bg} ${colors.text} border-transparent shrink-0`}>
            {video.category}
          </Badge>
        </div>
        <CardDescription>{video.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden relative">
          {!isPlaying ? (
            <>
              <img
                src={thumbnailUrl}
                alt={`${video.title} video thumbnail`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Play button overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer group"
                onClick={handlePlayClick}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
                aria-label={`Play ${video.title} video`}
              >
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              {/* Duration badge */}
              <div className="absolute top-3 right-3">
                <Badge className="bg-black/80 text-white border-transparent">
                  {video.duration}
                </Badge>
              </div>
            </>
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
      </CardContent>
    </Card>
  );
};

export default VideoCard;
