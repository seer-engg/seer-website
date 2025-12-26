import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogTile from "@/components/BlogTile";
import { blogs } from "@/content/blogs/data";

const BlogsIndex = () => {
  useEffect(() => {
    document.title = "Blog | Seer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Read the latest articles about workflow automation, AI-assisted development, and building powerful automations with Seer.";
    
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Read the latest articles about workflow automation, AI-assisted development, 
              and building powerful automations with Seer.
            </p>
          </div>
        </section>

        {/* Blogs Grid */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            {blogs.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-semibold mb-4">
                  No blog posts available yet
                </h2>
                <p className="text-muted-foreground">
                  Check back soon for new articles.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                  <BlogTile
                    key={blog.slug}
                    slug={blog.slug}
                    title={blog.title}
                    description={blog.description}
                    author={blog.author}
                    publishDate={blog.publishDate}
                    readTime={blog.readTime}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BlogsIndex;

