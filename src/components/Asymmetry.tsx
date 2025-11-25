import { Code, TestTube } from "lucide-react";

const Asymmetry = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">The Asymmetry</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe in a fundamental asymmetry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Dev without Evals */}
          <div className="p-8 border-2 border-error/50 rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center">
                <Code className="w-6 h-6 text-error" />
              </div>
              <h3 className="text-2xl font-semibold">Dev without Evals = Hope</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              You build a cool feature. You manually test it once. You merge it. 
              Two weeks later, it breaks because an edge case in step 7 changed.
            </p>
            <p className="text-foreground font-semibold text-lg">
              You are shipping probabilistic code and praying it converges on the right answer.
            </p>
          </div>

          {/* Evals without Dev */}
          <div className="p-8 border-2 border-success/50 rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <TestTube className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-2xl font-semibold">Evals without Dev = Value</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              You write zero code. You just run Seer on your existing agent. 
              It finds 4 bugs in your handling of rate limits.
            </p>
            <p className="text-foreground font-semibold text-lg">
              You have created immense value without writing a single line of feature code.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto p-8 border-2 border-border rounded-lg bg-card">
          <h4 className="text-2xl font-semibold mb-6">The Core Belief</h4>
          <div className="space-y-4 text-lg">
            <p className="text-muted-foreground leading-relaxed">
              We spoke to 50+ YC startups. Most are skeptical that an &quot;Evals Product&quot; can exist. 
              They are right—if you think of evals as &quot;checking if the LLM output contains a specific word.&quot;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But for Agents, that doesn&apos;t matter. What matters is <span className="font-semibold text-foreground text-xl">State Change</span>.
            </p>
            <div className="pl-6 border-l-4 border-primary/30 my-6">
              <p className="text-foreground font-semibold leading-relaxed mb-2">
                Here is our fundamental belief:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><span className="font-semibold text-foreground">Dev without Evals = Hope.</span> You are shipping probabilistic code and praying it converges on the right answer.</li>
                <li><span className="font-semibold text-foreground">Evals without Dev = Value.</span> Even if you never write another line of agent code, knowing exactly where your current agent fails (in a 10-step workflow) provides immediate architectural insight.</li>
              </ol>
            </div>
            <p className="text-foreground font-semibold leading-relaxed">
              Seer is built for the skeptics. We don&apos;t just check your prompt. We spin up a <span className="text-primary">Sandbox</span>, 
              let your agent run for 20 turns, and verify the <span className="text-primary">outcome</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Asymmetry;
