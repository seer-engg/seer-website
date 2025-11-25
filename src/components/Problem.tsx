import { AlertCircle, TrendingDown, FileX } from "lucide-react";

const Problem = () => {
  return (
    <section id="philosophy" className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Single-Shot vs. Reality</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Why LangSmith isn't enough for Agents.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-8 border border-border rounded-lg bg-background">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tools like Braintrust or Arize are great for optimizing a single prompt. 
              But your agent isn't a single prompt. It's a 20-step loop that reads files, 
              makes API calls, and changes state.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Checking the <span className="font-mono text-foreground">text output</span> of step 20 tells you nothing about 
              whether the database was actually updated in step 15. <span className="font-semibold text-foreground">You need a Sandbox.</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-border rounded-lg bg-background">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Single-Shot Scope</h3>
            <p className="text-muted-foreground">
              Traditional evals check one request/response pair. Real agents run 
              for 10+ turns across multiple tools and state changes.
            </p>
          </div>

          <div className="p-8 border border-border rounded-lg bg-background">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Text Verification</h3>
            <p className="text-muted-foreground">
              Regex matching or LLM-as-Judge on text output doesn't tell you if 
              the database record was created or the file was actually modified.
            </p>
          </div>

          <div className="p-8 border border-border rounded-lg bg-background">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6">
              <FileX className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Missing Context</h3>
            <p className="text-muted-foreground">
              The hard part isn't writing prompts—it's provisioning Docker containers, 
              seeding databases, and mocking APIs. That's what Seer automates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
