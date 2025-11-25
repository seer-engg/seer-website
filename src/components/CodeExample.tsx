const CodeExample = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Drop-in Scientific Rigor</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Python-native. Type-safe. Developer friendly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-primary text-primary-foreground rounded-lg p-6 font-mono text-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary-foreground/20">
            <div className="w-3 h-3 rounded-full bg-error" />
            <div className="w-3 h-3 rounded-full bg-warning" />
            <div className="w-3 h-3 rounded-full bg-success" />
            <span className="ml-2 text-primary-foreground/60">quickstart.sh</span>
          </div>
          
          <pre className="text-primary-foreground/90 leading-relaxed">
{`# 1. Install Seer
pip install seer-ai

# 2. Define your objective
seer run --goal "Fix the bug in auth_service.py"

# 3. Watch the Science happen
# [Eval Agent] Generating test case...
# [Codex] Implementing fix...
# [Reflector] Test failed. Adjusting strategy...
# [Codex] Retrying...
# [Success] Test Passed. PR Created.`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
