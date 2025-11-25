const CodeExample = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Simple Python API</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Define multi-turn evals without the infrastructure headache
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-primary text-primary-foreground rounded-lg p-6 font-mono text-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary-foreground/20">
            <div className="w-3 h-3 rounded-full bg-error" />
            <div className="w-3 h-3 rounded-full bg-warning" />
            <div className="w-3 h-3 rounded-full bg-success" />
            <span className="ml-2 text-primary-foreground/60">test_eval.py</span>
          </div>
          
          <pre className="text-primary-foreground/90 leading-relaxed overflow-x-auto">
{`# Seer Eval Definition
from seer import Sandbox, Agent

def test_github_sync():
    # 1. The Hard Part (Automated)
    # Seer spins up a fresh container for this test block
    with Sandbox() as env:
        env.seed_github(repo="buggy-coder", pr_count=1)
        env.seed_asana(tasks=[{"id": "123", "status": "open"}])

        # 2. The Agent Run (Multi-turn)
        # The agent is injected with the mock API endpoints
        agent = Agent(env)
        agent.run("Sync PR #1 merge to Asana")

        # 3. The Assertion (State-based)
        # We check the DB state, not the chat logs
        assert env.asana.get_task("123").status == "closed"
        assert env.github.get_pr(1).merged is True`}
          </pre>
        </div>

        <div className="mt-8 max-w-3xl mx-auto p-6 bg-secondary/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Like a unit test, but for agents:</span> Assert on 
            environment state, not text outputs. If your agent modifies a database, check the database. 
            If it creates a file, verify the file exists.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
