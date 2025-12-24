import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonTile from "@/components/ComparisonTile";
import { comparisons } from "@/content/comparisons/data";

const ComparisonsIndex = () => {
  useEffect(() => {
    document.title = "App Comparisons | Seer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Compare automation and workflow tools side-by-side. Find the best solution for your needs with detailed comparisons of pricing, features, and capabilities.";
    
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
              App Comparisons
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compare automation and workflow tools side-by-side. Find the best
              solution for your needs with detailed comparisons of pricing,
              features, and capabilities.
            </p>
          </div>
        </section>

        {/* Comparisons Grid */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            {comparisons.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-semibold mb-4">
                  No comparisons available yet
                </h2>
                <p className="text-muted-foreground">
                  Check back soon for detailed app comparisons.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comparisons.map((comparison) => (
                  <ComparisonTile
                    key={comparison.slug}
                    app1={comparison.app1}
                    app2={comparison.app2}
                    slug={comparison.slug}
                    title={comparison.seo.title.replace(" | Seer", "")}
                    description={comparison.seo.description}
                    author={comparison.author}
                    readTime={comparison.readTime}
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

export default ComparisonsIndex;

