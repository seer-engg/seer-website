import { Brain, Zap, GitBranch } from "lucide-react";

interface Memory {
  memory_id: string;
  context: string;
  entities: string[];
  observation: string;
  activation: number;
}

const MemoryBank = () => {
  const memories: Memory[] = [
    {
      memory_id: "mem_1",
      context: "tool_use.github",
      entities: ["pr_create", "branch_protection"],
      observation: "Cannot push directly to 'main'. Must create feature branch first.",
      activation: 0.98,
    },
    {
      memory_id: "mem_2",
      context: "api.rate_limit",
      entities: ["asana_api", "retry_logic"],
      observation: "Asana API returns 429 on burst. Implement exponential backoff.",
      activation: 0.85,
    },
    {
      memory_id: "mem_3",
      context: "workflow.deploy",
      entities: ["docker", "env_vars"],
      observation: "Restart container after setting ENV variables for them to take effect.",
      activation: 0.72,
    },
  ];

  const getContextIcon = (context: string) => {
    if (context.includes("tool")) return Brain;
    if (context.includes("api")) return Zap;
    return GitBranch;
  };

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">The Memory Bank</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most agents have a context window. Seer has a hippocampus.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {memories.map((memory) => {
            const Icon = getContextIcon(memory.context);
            return (
              <div
                key={memory.memory_id}
                className="bg-background p-6 rounded-lg border border-border hover:border-foreground/20 transition-all"
                style={{
                  animation: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                  animationDelay: `${memory.activation * 500}ms`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <Icon className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
                  <div className="flex items-center gap-1">
                    <div className="w-16 h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-success transition-all"
                        style={{ width: `${memory.activation * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      {(memory.activation * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {memory.context}
                  </span>
                </div>

                <p className="text-sm text-foreground leading-relaxed mb-3">
                  {memory.observation}
                </p>

                <div className="flex flex-wrap gap-1">
                  {memory.entities.map((entity, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {entity}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm font-mono text-muted-foreground">
            class Memory(BaseModel): time: datetime | context: str | observation: str | activation: float
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemoryBank;
