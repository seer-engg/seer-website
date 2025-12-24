import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppComparisonHero from "@/components/AppComparisonHero";
import ComparisonTable from "@/components/ComparisonTable";
import { getComparisonBySlug } from "@/content/comparisons-metadata";

const ComparisonDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const comparison = slug ? getComparisonBySlug(slug) : undefined;

  useEffect(() => {
    if (comparison) {
      // Update document title for SEO
      document.title = comparison.seo.title;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", comparison.seo.description);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = comparison.seo.description;
        document.head.appendChild(meta);
      }
    }
  }, [comparison]);

  if (!comparison) {
    return <Navigate to="/comparisons" replace />;
  }

  const { app1, app2, comparisonRows, researchContent, seo, hashtags } = comparison;

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
        <AppComparisonHero
          app1={app1}
          app2={app2}
          title={seo.title.replace(" | Seer", "")}
          hashtags={hashtags}
        />

        {/* Comparison Table - positioned at top */}
        {comparisonRows.length > 0 && (
          <ComparisonTable
            app1={app1}
            app2={app2}
            rows={comparisonRows}
            title={`${app1.name} vs ${app2.name}: Feature Comparison`}
            subtitle="Compare key features and capabilities side-by-side"
          />
        )}

        {/* Markdown Content */}
        {researchContent && (
          <section className="py-20 px-6 bg-muted/30">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <div className="text-foreground leading-relaxed">
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {researchContent}
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

export default ComparisonDetail;

