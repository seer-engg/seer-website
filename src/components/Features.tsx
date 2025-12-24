import { Brain, GitBranch, CheckCircle2, LayoutGrid } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Why Seer is Different</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Workflow builder designed for AI-first automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Visual Workflow Builder */}
          <div className="p-8 border border-border rounded-lg bg-card md:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold">Visual Workflow Builder</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Drag-and-drop interface for creating automation workflows. Node-based editor with custom blocks and integrations. Real-time workflow validation and execution.
            </p>
            <div className="font-mono text-sm text-muted-foreground bg-secondary/50 p-4 rounded">
              workflow.create_block("github", "get_pr")<br />
              workflow.connect("github", "asana")<br />
              workflow.execute()
            </div>
          </div>

          {/* AI-Assisted Development */}
          <div className="p-8 border border-border rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold">AI-Assisted Development</h3>
            </div>
            <p className="text-muted-foreground">
              Chat interface for workflow design and debugging. AI suggests workflow improvements and integration choices. Intelligent error handling and recovery.
            </p>
          </div>

          {/* Rich Integrations */}
          <div className="p-8 border border-border rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold">Rich Integrations</h3>
            </div>
            <p className="text-muted-foreground">
              Google Workspace: Gmail, Drive, Sheets with OAuth. GitHub: Repository management, issues, PRs. 10+ integrations with read-only scope first.
            </p>
          </div>

          {/* Advanced Execution Engine */}
          <div className="p-8 border border-border rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold">Advanced Execution Engine</h3>
            </div>
            <p className="text-muted-foreground">
              Streaming execution with real-time updates. Interrupt handling for human-in-the-loop workflows. Persistent state management. MLflow integration for observability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
