import VideoCard from "@/components/VideoCard";
import { productDemoVideos } from "@/data/videoData";

const ProductDemos = () => {
  const [featured, ...rest] = productDemoVideos;

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">See Seer in Action</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real workflows. Real demos. No fluff.
          </p>
        </div>

        {/* Featured Video */}
        <div className="max-w-5xl mx-auto mb-10">
          <VideoCard video={featured} featured />
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {rest.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDemos;
