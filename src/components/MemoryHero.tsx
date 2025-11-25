import { Brain } from "lucide-react";

const MemoryHero = () => {
  // Memory nodes for the graph visualization
  const nodes = [
    { id: 1, x: 50, y: 30, label: "ticket_lock", delay: 0 },
    { id: 2, x: 30, y: 60, label: "rate_limit", delay: 0.2 },
    { id: 3, x: 70, y: 65, label: "branch_protection", delay: 0.4 },
    { id: 4, x: 50, y: 85, label: "env_vars", delay: 0.6 },
    { id: 5, x: 20, y: 40, label: "api_retry", delay: 0.8 },
    { id: 6, x: 80, y: 45, label: "file_permissions", delay: 1.0 },
  ];

  // Connections between memories
  const edges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
    { from: 5, to: 4 },
    { from: 6, to: 4 },
  ];

  const getNodePosition = (id: number) => {
    const node = nodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-background to-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/50 mb-6">
              <Brain className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Reflexion Memory System
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance tracking-tight">
              Agents That Learn From Failure
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Seer's memory system transforms every failure into permanent knowledge. 
              Your agents don't just retry—they evolve, building a graph of learnings that 
              prevents the same mistakes across all future runs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-baseline gap-3">
                <div className="text-4xl font-bold">99%</div>
                <div className="text-sm text-muted-foreground">
                  Average memory<br/>activation rate
                </div>
              </div>
              <div className="hidden sm:block w-px bg-border"></div>
              <div className="flex items-baseline gap-3">
                <div className="text-4xl font-bold">Neo4j</div>
                <div className="text-sm text-muted-foreground">
                  Graph database<br/>for memory storage
                </div>
              </div>
            </div>
          </div>

          {/* Right: Animated Graph Visualization */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
              
              {/* SVG Graph */}
              <svg 
                viewBox="0 0 100 100" 
                className="relative z-10 w-full h-full"
                style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.1))' }}
              >
                {/* Draw edges first (behind nodes) */}
                {edges.map((edge, idx) => {
                  const from = getNodePosition(edge.from);
                  const to = getNodePosition(edge.to);
                  return (
                    <line
                      key={`edge-${idx}`}
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke="currentColor"
                      strokeWidth="0.2"
                      className="text-border opacity-40"
                      style={{
                        strokeDasharray: '2,2',
                        animation: `pulse 3s ease-in-out infinite`,
                        animationDelay: `${idx * 0.2}s`
                      }}
                    />
                  );
                })}

                {/* Draw nodes */}
                {nodes.map((node) => (
                  <g key={node.id}>
                    {/* Node circle with pulse animation */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="3"
                      className="fill-background stroke-primary"
                      strokeWidth="0.5"
                      style={{
                        animation: `scale-pulse 2s ease-in-out infinite`,
                        animationDelay: `${node.delay}s`,
                        transformOrigin: `${node.x}% ${node.y}%`
                      }}
                    />
                    
                    {/* Outer glow ring */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="3"
                      className="fill-none stroke-primary/30"
                      strokeWidth="0.3"
                      style={{
                        animation: `glow-pulse 2s ease-in-out infinite`,
                        animationDelay: `${node.delay}s`,
                        transformOrigin: `${node.x}% ${node.y}%`
                      }}
                    />

                    {/* Label */}
                    <text
                      x={node.x}
                      y={node.y - 5}
                      textAnchor="middle"
                      className="text-[3px] font-mono fill-muted-foreground"
                      style={{
                        opacity: 0.7,
                        animation: `fade-in 0.5s ease-out forwards`,
                        animationDelay: `${node.delay + 0.3}s`
                      }}
                    >
                      {node.label}
                    </text>
                  </g>
                ))}

                {/* Central memory hub */}
                <circle
                  cx="50"
                  cy="50"
                  r="1.5"
                  className="fill-primary"
                  style={{
                    animation: `pulse 2s ease-in-out infinite`,
                  }}
                />
              </svg>

              {/* Decorative corner markers */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-border/30"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-border/30"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-border/30"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-border/30"></div>
            </div>

            {/* Graph label */}
            <div className="mt-6 text-center">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Live Memory Graph • {nodes.length} Connected Learnings
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.8;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default MemoryHero;
