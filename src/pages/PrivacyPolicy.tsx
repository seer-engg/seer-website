import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLegalContent } from "@/content/legal/content-loader";

const PrivacyPolicy = () => {
  const content = getLegalContent("privacy-policy");

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

export default PrivacyPolicy;
