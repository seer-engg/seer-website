import { Lightbulb, TrendingDown, Target } from "lucide-react";

const OriginStory = () => {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Born from Failure at Rimba</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Why we built Seer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 border border-border rounded-lg bg-background">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">The Dream</h3>
              <p className="text-sm text-muted-foreground">
                Build a Data Analysis agent that works great in demos
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background">
              <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-error" />
              </div>
              <h3 className="font-semibold text-lg mb-2">The Reality</h3>
              <p className="text-sm text-muted-foreground">
                Hallucinated in production. Months wasted on guesswork.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-background">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold text-lg mb-2">The Solution</h3>
              <p className="text-sm text-muted-foreground">
                Build the rigorous eval system we wished we had
              </p>
            </div>
          </div>

          <div className="p-8 border-2 border-border rounded-lg bg-card">
            <blockquote className="text-lg text-foreground leading-relaxed mb-4">
              &quot;We didn&apos;t build Seer to sell it. We built it because our last startup, Rimba, 
              failed at agents. We spent months building a Data Analysis agent that worked great in demo 
              but hallucinated in production.&quot;
            </blockquote>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We realized that without a rigorous, scientific way to <span className="font-semibold text-foreground">prove</span> agent 
              behavior, we were just guessing.
            </p>
            <p className="text-lg text-foreground font-semibold">
              Seer is the tool we wished we had.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground font-mono">
              Built by founders who learned the hard way: Hope is not a strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
