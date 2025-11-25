import { Code, TestTube, Lightbulb } from "lucide-react";

const Asymmetry = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* The Developer Journey */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">The Developer's Dilemma</h2>
          
          {/* Timeline-style narrative */}
          <div className="space-y-12">
            {/* Week 1: Building */}
            <div className="relative pl-8 border-l-2 border-error/30">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-error border-2 border-background"></div>
              <div className="mb-2">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Week 1</span>
                <h3 className="text-2xl font-semibold mt-1">You Build a Cool Feature</h3>
              </div>
              <div className="bg-secondary/30 p-4 rounded font-mono text-sm mb-3">
                <div className="text-muted-foreground">// Your agent can now sync GitHub PRs to Asana!</div>
                <div className="text-foreground">agent.run("Sync PR #42 to Asana")</div>
                <div className="text-success">✓ Worked perfectly in your test</div>
              </div>
              <p className="text-muted-foreground">
                You manually test it once. It works. You merge it. You feel good.
              </p>
            </div>

            {/* Week 2: The Cracks */}
            <div className="relative pl-8 border-l-2 border-warning/30">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-warning border-2 border-background"></div>
              <div className="mb-2">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Week 2</span>
                <h3 className="text-2xl font-semibold mt-1">Edge Case Appears</h3>
              </div>
              <div className="bg-secondary/30 p-4 rounded font-mono text-sm mb-3">
                <div className="text-foreground">agent.run("Sync PR #103 to Asana")</div>
                <div className="text-error">✗ Error: Ticket #456 is locked</div>
                <div className="text-muted-foreground">// Step 7 changed. Your agent never checked locks.</div>
              </div>
              <p className="text-muted-foreground">
                The workflow broke because an edge case in step 7 changed. You find out from a user.
              </p>
            </div>

            {/* Week 3: The Realization */}
            <div className="relative pl-8 border-l-2 border-error/30">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-error border-2 border-background"></div>
              <div className="mb-2">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Week 3</span>
                <h3 className="text-2xl font-semibold mt-1">You're Shipping Hope</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed mb-3">
                You are shipping <span className="font-mono text-error">probabilistic code</span> and praying it converges on the right answer.
              </p>
              <div className="p-4 bg-error/5 border border-error/20 rounded">
                <p className="text-sm text-foreground/80 font-semibold">
                  This is "Dev without Evals" → Pure Hope
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Alternative Path */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Divider */}
            <div className="flex items-center gap-4 mb-12">
              <div className="flex-1 h-px bg-border"></div>
              <Lightbulb className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <div className="flex-1 h-px bg-border"></div>
            </div>

            <h2 className="text-4xl font-bold mb-8 text-center">The Alternative: Evals First</h2>
            
            {/* Single timeline for evals path */}
            <div className="space-y-12">
              {/* Day 1: Just Run Seer */}
              <div className="relative pl-8 border-l-2 border-success/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-success border-2 border-background"></div>
                <div className="mb-2">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Day 1</span>
                  <h3 className="text-2xl font-semibold mt-1">You Write Zero Code</h3>
                </div>
                <div className="bg-secondary/30 p-4 rounded font-mono text-sm mb-3">
                  <div className="text-foreground">$ seer run --agent=github-sync</div>
                  <div className="text-muted-foreground">Spinning up sandbox...</div>
                  <div className="text-muted-foreground">Running 10-step workflow...</div>
                </div>
                <p className="text-muted-foreground">
                  You just run Seer on your existing agent. No changes. No new features.
                </p>
              </div>

              {/* Day 1: Results */}
              <div className="relative pl-8 border-l-2 border-success/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-success border-2 border-background"></div>
                <div className="mb-2">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">5 Minutes Later</span>
                  <h3 className="text-2xl font-semibold mt-1">Seer Finds 4 Bugs</h3>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="bg-secondary/30 p-3 rounded text-sm">
                    <div className="font-mono text-error text-xs mb-1">FAIL: Step 7</div>
                    <div className="text-foreground">Agent doesn't check rate limits on Asana API</div>
                  </div>
                  <div className="bg-secondary/30 p-3 rounded text-sm">
                    <div className="font-mono text-error text-xs mb-1">FAIL: Step 3</div>
                    <div className="text-foreground">Ticket lock status not verified before write</div>
                  </div>
                  <div className="bg-secondary/30 p-3 rounded text-sm">
                    <div className="font-mono text-error text-xs mb-1">FAIL: Step 12</div>
                    <div className="text-foreground">Branch protection rules not respected</div>
                  </div>
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  You have created <span className="font-semibold text-success">immense value</span> without writing a single line of feature code.
                </p>
              </div>

              {/* The Insight */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary border-2 border-background"></div>
                <div className="p-6 bg-success/5 border border-success/20 rounded">
                  <p className="text-lg text-foreground font-semibold mb-2">
                    This is "Evals without Dev" → Immediate Value
                  </p>
                  <p className="text-muted-foreground">
                    Even if you never write another line of agent code, knowing <span className="font-semibold text-foreground">exactly</span> where 
                    your current agent fails (in a 10-step workflow) provides immediate architectural insight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Core Belief */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 border-2 border-primary/20 rounded-lg bg-primary/5">
            <div className="flex items-start gap-4 mb-6">
              <TestTube className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Built for the Skeptics</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We spoke to 50+ YC startups. Most are skeptical that an "Evals Product" can exist. 
                  They are right—if you think of evals as "checking if the LLM output contains a specific word."
                </p>
              </div>
            </div>

            <div className="border-l-4 border-primary/30 pl-6 py-2 mb-6">
              <p className="text-lg text-foreground leading-relaxed">
                But for Agents, that doesn't matter. What matters is <span className="font-semibold text-xl text-primary">State Change</span>.
              </p>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              Seer is built for the skeptics. We don't just check your prompt. We spin up a <span className="font-semibold">Sandbox</span>, 
              let your agent run for 20 turns, and verify the <span className="font-semibold">outcome</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Asymmetry;
