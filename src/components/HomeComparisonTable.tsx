import { Check, X } from "lucide-react";

const HomeComparisonTable = () => {
  const comparisons = [
    {
      feature: "Scope",
      traditional: "Single-Shot Request/Response",
      seer: "Multi-Turn Conversations (10+ steps)",
      seerWins: true
    },
    {
      feature: "Verification",
      traditional: "Regex / LLM-as-a-Judge on Text",
      seer: "State Assertion on Environment",
      seerWins: true
    },
    {
      feature: "Context",
      traditional: "Stateless",
      seer: "Stateful (Memory, Files, DB)",
      seerWins: true
    },
    {
      feature: "Hard Part",
      traditional: "Writing the Prompt",
      seer: "Provisioning the Environment (Automated)",
      seerWins: true
    },
    {
      feature: "State Reset",
      traditional: "Manual (or ignored)",
      seer: "Automated (Docker/Containers)",
      seerWins: true
    },
    {
      feature: "Mocking",
      traditional: "Static HTTP responses",
      seer: "Dynamic Interactive Mocks",
      seerWins: true
    },
    {
      feature: "Memory",
      traditional: "None (Clean slate every time)",
      seer: "Persistent (Reflexion Graph)",
      seerWins: true
    },
    {
      feature: "Evolution",
      traditional: "Static Test Cases",
      seer: "Genetic Mutation (Fuzzing)",
      seerWins: true
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">The Comparison</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Why traditional eval tools fail for multi-turn agents
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left p-4 font-semibold text-lg">Feature</th>
                <th className="text-left p-4 font-semibold text-lg">Traditional Evals</th>
                <th className="text-left p-4 font-semibold text-lg bg-secondary/30">Seer Sandbox</th>
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

