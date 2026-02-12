import VideoCard from "@/components/VideoCard";
import { productDemoVideos } from "@/data/videoData";

const ProductDemos = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">See Seer in Action</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how marketing teams automate workflows without writing code
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {productDemoVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDemos;
