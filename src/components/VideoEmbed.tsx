import { AspectRatio } from "@/components/ui/aspect-ratio";

const VideoEmbed = () => {
  return (
    <div className="h-[400px] flex items-center">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/cmQvmla8sl0"
          title="Seer Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default VideoEmbed;
