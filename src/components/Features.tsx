import { Brain, GitBranch, CheckCircle2, Database } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Reflexion Memory",
      description:
        "An agent that actually learns. Using our Reflexion engine, agents store observations in a Neo4j graph database. They recall past API errors, project constraints, and user preferences instantly.",
      color: "bg-beige",
    },
    {
      icon: GitBranch,
      title: "Smart Tool Selection",
      description:
        "Agents shouldn't guess which tools to use. Seer's Tool Hub uses a 'Hub & Spoke' architecture to pull in dependencies automatically.",
      color: "bg-cream",
    },
    {
      icon: CheckCircle2,
      title: "Falsifiable Evals",
      description:
        "Binary pass/fail metrics. No 'vibes based' evaluation. If it can't be measured, it can't be trusted.",
      color: "bg-cream",
    },
    {
      icon: Database,
      title: "Graph-Based State",
      description:
        "Built on LangGraph. Visualize the reasoning path, not just the output. Every decision is traceable and auditable.",
      color: "bg-beige",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Built for Rigor</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every component designed to eliminate uncertainty and prove reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`${feature.color} p-8 rounded-lg border border-border hover:border-foreground/20 transition-all hover:scale-[1.02]`}
              >
                <Icon className="w-10 h-10 mb-4 text-foreground/80" strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
