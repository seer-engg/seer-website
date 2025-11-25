import { Brain, Zap, GitBranch } from "lucide-react";

interface Memory {
  memory_id: string;
  context: string;
  entities: string[];
  observation: string;
  activation: number;
  source: string;
}

const MemoryBank = () => {
  const memories: Memory[] = [
    {
      memory_id: "mem_lock_1",
      context: "asana.tickets",
      entities: ["ticket_lock", "write_permission"],
      observation: "Tickets may be locked. Always call 'check_lock_status' before 'update_ticket'.",
      activation: 0.99,
      source: "Run #442 (Failure)",
    },
    {
      memory_id: "mem_2",
      context: "api.rate_limit",
      entities: ["asana_api", "retry_logic"],
      observation: "Asana API returns 429 on burst. Implement exponential backoff.",
      activation: 0.85,
      source: "Run #387 (Failure)",
    },
    {
      memory_id: "mem_3",
      context: "github.branches",
      entities: ["pr_create", "branch_protection"],
      observation: "Cannot push directly to 'main'. Must create feature branch first.",
      activation: 0.78,
      source: "Run #501 (Failure)",
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
          <h2 className="text-5xl font-bold mb-6">Stop Making the Same Mistake Twice</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            When Seer catches your agent failing in the sandbox (e.g., trying to write to a locked file), 
            it doesn't just log it. It injects that failure into the agent's long-term memory stored in Neo4j. 
            On the next run, the agent <span className="font-semibold text-foreground">'remembers'</span> to 
            check file permissions first.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="space-y-1">
            {memories.map((memory, index) => {
              const Icon = getContextIcon(memory.context);
              return (
                <div
                  key={memory.memory_id}
                  className="group py-6 px-4 hover:bg-background/50 transition-all border-b border-border/50 last:border-b-0"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 pt-1">
                      <Icon className="w-5 h-5 text-foreground/40 group-hover:text-foreground/70 transition-colors" strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                          {memory.context}
                        </span>
                        <div className="flex items-center gap-2 ml-auto">
                          <div className="w-20 h-1 bg-border rounded-full overflow-hidden">
                            <div
                              className="h-full bg-success transition-all"
                              style={{ width: `${memory.activation * 100}%` }}
                            />
                          </div>
                          <span className="text-xs font-mono text-muted-foreground tabular-nums">
                            {(memory.activation * 100).toFixed(0)}%
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-base text-foreground leading-relaxed mb-3">
                        {memory.observation}
                      </p>
                      
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-muted-foreground">Entities:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {memory.entities.map((entity, idx) => (
                            <span
                              key={idx}
                              className="font-mono text-muted-foreground/70"
                            >
                              {entity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border-l-2 border-primary/30 pl-6">
            <div className="mb-3">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                memory_query.cypher
              </span>
            </div>
            <pre className="font-mono text-sm text-foreground/80 leading-relaxed overflow-x-auto mb-4">
{`MATCH (m:Memory)
WHERE m.context STARTS WITH 'tool_correction.'
RETURN m.time, m.context, m.observation
ORDER BY m.time DESC LIMIT 1`}
            </pre>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Real graph technology. Query memories with Cypher, just like any other Neo4j database.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryBank;
