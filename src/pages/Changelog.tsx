import { useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getChangelogContent } from "@/content/changelog/changelog-loader";

const Changelog = () => {
  const content = getChangelogContent();

  useEffect(() => {
    document.title = "Changelog | Seer";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Track the latest updates, features, and improvements to Seer - the workflow automation platform.";

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, []);

  const markdownComponents = {
    a: ({ node, ...props }: any) => (
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        {props.children}
      </a>
    ),
    h2: ({ node, ...props }: any) => (
      <h2
        {...props}
        className="text-2xl font-bold mt-8 mb-4 pb-2 border-b border-border"
      >
        {props.children}
      </h2>
    ),
    h3: ({ node, ...props }: any) => (
      <h3
        {...props}
        className="text-lg font-semibold mt-6 mb-2 text-primary"
      >
        {props.children}
      </h3>
    ),
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Changelog
            </h1>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            {content ? (
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {content}
                </Markdown>
              </div>
            ) : (
              <div className="text-center py-20">
                <h2 className="text-2xl font-semibold mb-4">
                  Changelog not available
                </h2>
                <p className="text-muted-foreground">
                  Check back soon for updates.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Changelog;
