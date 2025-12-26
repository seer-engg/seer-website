import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogBySlug } from "@/content/blogs-metadata";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? getBlogBySlug(slug) : undefined;

  useEffect(() => {
    if (blog) {
      // Update document title for SEO
      document.title = blog.seo.title;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", blog.seo.description);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = blog.seo.description;
        document.head.appendChild(meta);
      }
    }
  }, [blog]);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const { title, author, publishDate, readTime, content, seo } = blog;
  const formattedDate = format(new Date(publishDate), "MMMM d, yyyy");

  // Shared markdown components - minimal customization to let prose plugin handle styling
  const markdownComponents = {
    a: ({ node, ...props }: any) => (
      <a 
        {...props} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    ),
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Blog Header */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="text-sm text-primary font-medium">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span>By {author}</span>
              <span>•</span>
              <span>{formattedDate}</span>
              {readTime && (
                <>
                  <span>•</span>
                  <span>{readTime} min read</span>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Markdown Content */}
        {content && (
          <section className="py-12 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none text-foreground leading-relaxed">
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {content}
                </Markdown>
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;

