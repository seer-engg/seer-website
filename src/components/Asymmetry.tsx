import { Code, TestTube, Lightbulb } from "lucide-react";

const Asymmetry = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* The Workflow-First Journey */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">The Workflow-First Approach</h2>
          
          {/* Timeline-style narrative */}
          <div className="space-y-12">
            {/* Week 1: Build a Workflow */}
            <div className="relative pl-8 border-l-2 border-success/30">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-success border-2 border-background"></div>
              <div className="mb-2">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Week 1</span>
                <h3 className="text-2xl font-semibold mt-1">You Build a Reliable Workflow</h3>
              </div>
              <div className="bg-secondary/30 p-4 rounded font-mono text-sm mb-3">
                <div className="text-muted-foreground">// Your workflow routes support tickets</div>
                <div className="text-foreground">workflow.run("Route ticket to correct team")</div>
                <div className="text-success">✓ Works perfectly every time</div>
              </div>
              <p className="text-muted-foreground">
                You build a workflow that reliably routes support tickets to the correct team. It works consistently. You feel confident.
              </p>
            </div>

            {/* Week 2: Test and Iterate */}
            <div className="relative pl-8 border-l-2 border-success/30">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-success border-2 border-background"></div>
              <div className="mb-2">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Week 2</span>
                <h3 className="text-2xl font-semibold mt-1">Add Edge Case Handling</h3>
              </div>
              <div className="bg-secondary/30 p-4 rounded font-mono text-sm mb-3">
                <div className="text-foreground">workflow.run("Route ticket #103")</div>
                <div className="text-success">✓ Handles edge cases gracefully</div>
                <div className="text-success">✓ Retries on API errors</div>
              </div>
              <p className="text-muted-foreground">
                You test edge cases and add error handling. The workflow becomes more robust.
              </p>
            </div>

            {/* Week 3: Add AI Where Needed */}
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary border-2 border-background"></div>
              <div className="mb-2">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Week 3</span>
                <h3 className="text-2xl font-semibold mt-1">Enhance with AI</h3>
              </div>
              <div className="bg-secondary/30 p-4 rounded font-mono text-sm mb-3">
                <div className="text-foreground">workflow.run("Auto-categorize tickets with AI")</div>
                <div className="text-success">✓ AI suggests ticket categories</div>
                <div className="text-success">✓ Workflow routes to correct team</div>
              </div>
              <p className="text-muted-foreground">
                You add AI to categorize tickets automatically. The workflow is now intelligent, but built on a solid foundation.
              </p>
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

            <h2 className="text-4xl font-bold mb-8 text-center">The Alternative: Starting with AI</h2>
            
            {/* Single timeline for AI-first path */}
            <div className="space-y-12">
              {/* Day 1: Start with AI */}
              <div className="relative pl-8 border-l-2 border-error/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-error border-2 border-background"></div>
                <div className="mb-2">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Day 1</span>
                  <h3 className="text-2xl font-semibold mt-1">You Build an AI Agent</h3>
                </div>
                <div className="bg-secondary/30 p-4 rounded font-mono text-sm mb-3">
                  <div className="text-foreground">agent.run("Route support tickets")</div>
                  <div className="text-muted-foreground">// Works sometimes, costs spiral</div>
                </div>
                <p className="text-muted-foreground">
                  You start by building a complex AI agent to route tickets. It works sometimes, costs spiral unpredictably.
                </p>
              </div>

              {/* Day 2: Struggle with Reliability */}
              <div className="relative pl-8 border-l-2 border-error/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-error border-2 border-background"></div>
                <div className="mb-2">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Day 2</span>
                  <h3 className="text-2xl font-semibold mt-1">Reliability Issues</h3>
                </div>
                <p className="text-lg text-foreground leading-relaxed mb-3">
                  The agent fails on edge cases. Costs overrun your budget. You realize you need a workflow foundation with controls.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Core Belief */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 border-2 border-primary/20 rounded-lg bg-primary/5">
            <div className="flex items-start gap-4 mb-6">
              <Lightbulb className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Workflows Provide the Foundation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We spoke to 50+ consultants and technical specialists. The successful ones started with workflows, then added AI where it added value. They didn't automate on hope—they built workflows on solid foundations, then enhanced them with intelligence.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-primary/30 pl-6 py-2 mb-6">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-semibold text-xl text-primary">Workflows provide the foundation. AI enhances them.</span>
              </p>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              Seer is built for this approach. Build reliable workflows first. Add AI where it makes sense. Test, iterate, and deploy with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Asymmetry;
