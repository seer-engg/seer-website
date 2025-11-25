import { AlertCircle, TrendingDown, FileX } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "The Guesswork",
      description: "Prompt engineering is often just poking the black box. No proof, just hope it works.",
    },
    {
      icon: TrendingDown,
      title: "The Drift",
      description: "Agents work today but fail tomorrow. Without evals, you can't track regression.",
    },
    {
      icon: FileX,
      title: "The Noise",
      description: "Logs are unreadable. Reasoning is opaque. Debugging becomes archaeology.",
    },
  ];

  return (
    <section id="philosophy" className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">The Confidence Gap</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dev without evals = Anxiety.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg border border-border hover:border-foreground/20 transition-colors"
            >
              <problem.icon className="w-12 h-12 mb-4 text-foreground/60" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
