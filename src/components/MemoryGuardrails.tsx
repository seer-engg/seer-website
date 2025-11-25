import { Shield, Lock, Key } from "lucide-react";

const MemoryGuardrails = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Memory as Guardrails</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reflexion isn&apos;t just about retrying—it&apos;s about creating permanent guardrails
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 border border-border rounded-lg bg-card">
              <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center mb-6">
                <Key className="w-6 h-6 text-error" />
              </div>
              <h3 className="text-xl font-semibold mb-3">The Mistake</h3>
              <p className="text-muted-foreground mb-4">
                Agent uses a hardcoded API key in the code
              </p>
              <div className="font-mono text-xs bg-secondary/50 p-3 rounded">
                api_key = &quot;sk-proj-...&quot;
              </div>
            </div>

            <div className="p-8 border border-border rounded-lg bg-card">
              <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-3">The Catch</h3>
              <p className="text-muted-foreground mb-4">
                Seer catches it, fails the run, injects memory
              </p>
              <div className="font-mono text-xs bg-secondary/50 p-3 rounded">
                MUST_USE_ENV_VARS
              </div>
            </div>

            <div className="p-8 border border-border rounded-lg bg-card">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">The Guardrail</h3>
              <p className="text-muted-foreground mb-4">
                Agent will never make that mistake again
              </p>
              <div className="font-mono text-xs bg-secondary/50 p-3 rounded">
                os.getenv(&quot;API_KEY&quot;)
              </div>
            </div>
          </div>

          <div className="p-8 border-2 border-border rounded-lg bg-card">
            <blockquote className="text-lg text-foreground leading-relaxed mb-4">
              &quot;If your agent tries to use a hardcoded API key, Seer catches it, fails the run, 
              and injects a <span className="font-mono text-sm">MUST_USE_ENV_VARS</span> memory.&quot;
            </blockquote>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The agent will <span className="font-semibold text-foreground">never make that mistake again</span>. 
              This isn&apos;t just error handling—it&apos;s architectural learning that persists across all future runs.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-secondary/30 rounded-lg border border-border">
              <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">Traditional Retry</h4>
              <p className="text-sm text-foreground">
                Agent fails → You manually fix it → Agent might fail again tomorrow
              </p>
            </div>
            <div className="p-6 bg-success/5 rounded-lg border border-success/20">
              <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-success">Seer Reflexion</h4>
              <p className="text-sm text-foreground">
                Agent fails → Memory injected → Agent learns permanently → Never fails that way again
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryGuardrails;
