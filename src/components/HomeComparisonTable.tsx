import { Check, X } from "lucide-react";

const HomeComparisonTable = () => {
  const comparisons = [
    {
      feature: "AI Assistance",
      traditional: "Manual block selection",
      seer: "AI suggests blocks and connections",
      seerWins: true
    },
    {
      feature: "Control & Oversight",
      traditional: "Template-based, limited customization",
      seer: "Control & oversight over every step",
      seerWins: true
    },
    {
      feature: "Integrations",
      traditional: "Generic API connectors",
      seer: "Context-aware integrations (GitHub, Asana, Gmail)",
      seerWins: true
    },
    {
      feature: "Reliability",
      traditional: "Stateless or manual",
      seer: "Built-in persistence and resumability",
      seerWins: true
    },
    {
      feature: "Execution Transparency",
      traditional: "Basic logs",
      seer: "Detailed tracing & execution history",
      seerWins: true
    },
    {
      feature: "Self-Hostable",
      traditional: "Cloud-only",
      seer: "Self-hostable or cloud",
      seerWins: true
    },
    {
      feature: "Read-Only First",
      traditional: "Write permissions required",
      seer: "Read-only scope first, safe testing",
      seerWins: true
    },
    {
      feature: "Human Oversight",
      traditional: "Run to completion only",
      seer: "Human-in-the-loop, interrupt and resume",
      seerWins: true
    },
    {
      feature: "Cost Governance",
      traditional: "No built-in spend caps",
      seer: "Built-in cost controls and budget limits",
      seerWins: true
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Seer vs. Other Workflow Platforms</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for AI workflows with oversight and cost governance
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left p-4 font-semibold text-lg">Feature</th>
                <th className="text-left p-4 font-semibold text-lg">Traditional Platforms</th>
                <th className="text-left p-4 font-semibold text-lg bg-secondary/30">Seer</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr key={index} className="border-b border-border hover:bg-secondary/10 transition-colors">
                  <td className="p-4 font-semibold">{row.feature}</td>
                  <td className="p-4 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-error mt-1 flex-shrink-0" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 bg-secondary/10">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span className="font-medium">{row.seer}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>
  );
};

export default HomeComparisonTable;

