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
          <div className="relative mb-16">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border/30" style={{ transform: 'translateY(-50%)' }} />
            
            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-error/10 mb-6">
                  <Key className="w-7 h-7 text-error" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide text-xs text-muted-foreground">The Mistake</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Agent uses a hardcoded API key in the code
                </p>
                <div className="inline-block font-mono text-xs text-foreground/70 px-3 py-1.5 bg-secondary/30">
                  api_key = &quot;sk-proj-...&quot;
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warning/10 mb-6">
                  <Shield className="w-7 h-7 text-warning" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide text-xs text-muted-foreground">The Catch</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Seer catches it, fails the run, injects memory
                </p>
                <div className="inline-block font-mono text-xs text-foreground/70 px-3 py-1.5 bg-secondary/30">
                  MUST_USE_ENV_VARS
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-6">
                  <Lock className="w-7 h-7 text-success" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide text-xs text-muted-foreground">The Guardrail</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Agent will never make that mistake again
                </p>
                <div className="inline-block font-mono text-xs text-foreground/70 px-3 py-1.5 bg-secondary/30">
                  os.getenv(&quot;API_KEY&quot;)
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-16 border-l-4 border-primary/20 pl-8 py-2">
            <p className="text-xl text-foreground leading-relaxed mb-4">
              If your agent tries to use a hardcoded API key, Seer catches it, fails the run, 
              and injects a <span className="font-mono text-base px-1.5 py-0.5 bg-secondary/50">MUST_USE_ENV_VARS</span> memory.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The agent will <span className="font-semibold text-foreground">never make that mistake again</span>. 
              This isn&apos;t just error handling—it&apos;s architectural learning that persists across all future runs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Traditional Retry</h4>
                <p className="text-base text-foreground/70 leading-relaxed">
                  Agent fails → You manually fix it → Agent might fail again tomorrow
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-success">Seer Reflexion</h4>
                <p className="text-base text-foreground leading-relaxed">
                  Agent fails → Memory injected → Agent learns permanently → Never fails that way again
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryGuardrails;
