import { GitBranch, PlayCircle, CheckCircle2 } from "lucide-react";

const CIIntegration = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Treat Agents like Code</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop manual testing. Add Seer to your GitHub Actions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 border border-border rounded-lg bg-card text-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 mx-auto">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Push Code</h3>
              <p className="text-sm text-muted-foreground">Every PR triggers a full sandbox run</p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card text-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 mx-auto">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Seer Runs</h3>
              <p className="text-sm text-muted-foreground">Multi-turn evals in isolated containers</p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card text-center">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4 mx-auto">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Merge or Block</h3>
              <p className="text-sm text-muted-foreground">Only ship agents that pass evals</p>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary-foreground/20">
              <div className="w-3 h-3 rounded-full bg-error" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="ml-2 text-primary-foreground/60">.github/workflows/seer.yml</span>
            </div>
            
            <pre className="text-primary-foreground/90 leading-relaxed overflow-x-auto">
{`name: Seer Agent Evals
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Seer Sandbox
        run: |
          pip install seer-ai
          seer run --suite ./evals/github_sync --mutate=true
        env:
          OPENAI_API_KEY: \${{ secrets.OPENAI_KEY }}`}
            </pre>
          </div>

          <div className="mt-8 p-6 bg-secondary/30 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">CI/CD for Agents:</span> Just like you wouldn&apos;t 
              merge code without unit tests, don&apos;t deploy agents without Seer evals. Integrate once, sleep better forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CIIntegration;
