import { Check, X } from "lucide-react";

const HomeComparisonTable = () => {
  const comparisons = [
    {
      feature: "Set up without coding",
      traditional: "Templates only — customization requires code",
      seer: "AI helps you build exactly what you need, no code",
      seerWins: true
    },
    {
      feature: "Know what it's doing",
      traditional: "Runs in a black box, basic logs",
      seer: "See every step as it runs, full activity history",
      seerWins: true
    },
    {
      feature: "Review before it acts",
      traditional: "Runs to completion, no way to pause",
      seer: "Review and approve before any action is taken",
      seerWins: true
    },
    {
      feature: "Connect your existing tools",
      traditional: "Generic connectors, limited context",
      seer: "Deep integrations with Gmail, Sheets, Slack, and more",
      seerWins: true
    },
    {
      feature: "Control your costs",
      traditional: "No spending limits — surprise bills happen",
      seer: "Set a budget cap. Seer stops before you overspend.",
      seerWins: true
    },
    {
      feature: "Try it safely",
      traditional: "Needs write access to your accounts upfront",
      seer: "Starts read-only. You grant write access when ready.",
      seerWins: true
    },
    {
      feature: "Handle errors gracefully",
      traditional: "Fails silently or crashes",
      seer: "Pauses, tells you what went wrong, lets you fix and resume",
      seerWins: true
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Why Teams Switch to Seer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Seer stacks up against the tools you've tried before.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left p-4 font-semibold text-lg">What You Need</th>
                <th className="text-left p-4 font-semibold text-lg">Most Automation Tools</th>
                <th className="text-left p-4 font-semibold text-lg bg-foreground/5">Seer</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr key={index} className="border-b border-border hover:bg-foreground/[0.03] transition-colors">
                  <td className="p-4 font-semibold">{row.feature}</td>
                  <td className="p-4 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-error mt-1 flex-shrink-0" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 bg-foreground/[0.02]">
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

