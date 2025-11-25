import { Brain, GitBranch, CheckCircle2, Database } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Why Seer is Different</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Multi-turn, stateful, sandboxed evaluation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Sandboxed Environments */}
          <div className="p-8 border border-border rounded-lg bg-card md:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold">Automated Sandbox Provisioning</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              The hard part isn't writing evals—it's spinning up Docker containers, 
              seeding databases, and mocking APIs. Seer handles all of it.
            </p>
            <div className="font-mono text-sm text-muted-foreground bg-secondary/50 p-4 rounded">
              with Sandbox() as env:<br />
              &nbsp;&nbsp;env.seed_github(repo="buggy-coder")<br />
              &nbsp;&nbsp;env.seed_asana(tasks=[...])<br />
              &nbsp;&nbsp;agent.run("Sync PR to Asana")<br />
              &nbsp;&nbsp;assert env.asana.get_task("123").status == "closed"
            </div>
          </div>

          {/* State Assertions */}
          <div className="p-8 border border-border rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold">State Assertions</h3>
            </div>
            <p className="text-muted-foreground">
              Verify database records, file modifications, and API states—not just 
              text outputs. Real environment checks.
            </p>
          </div>

          {/* Multi-Turn Verification */}
          <div className="p-8 border border-border rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold">Multi-Turn Verification</h3>
            </div>
            <p className="text-muted-foreground">
              Agents run for 10+ turns. Seer tracks every action and validates 
              the final state—not just the last message.
            </p>
          </div>

          {/* Reflexion Memory */}
          <div className="p-8 border border-border rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold">Reflexion Memory</h3>
            </div>
            <p className="text-muted-foreground">
              Stop making the same mistake twice. Failed runs are stored in 
              Neo4j and recalled on future attempts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
