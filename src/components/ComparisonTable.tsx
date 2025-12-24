import { Check, X } from "lucide-react";
import type { ComparisonRow, ComparisonApp } from "@/content/comparisons-metadata";

interface ComparisonTableProps {
  app1: ComparisonApp;
  app2: ComparisonApp;
  rows: ComparisonRow[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const ComparisonTable = ({
  app1,
  app2,
  rows,
  title = "The Comparison",
  subtitle,
  className = "",
}: ComparisonTableProps) => {
  // Validate required props
  if (!app1 || !app2 || !rows) {
    console.error("ComparisonTable: Missing required props (app1, app2, or rows)");
    return (
      <section className={`py-20 px-6 ${className}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">Comparison data is missing. Please check the component props.</p>
        </div>
      </section>
    );
  }

  if (!rows.length) {
    return (
      <section className={`py-20 px-6 ${className}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">No comparison data available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-5xl font-bold mb-4">{title}</h2>}
            {subtitle && (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left p-4 font-semibold text-lg">Feature</th>
                <th className="text-left p-4 font-semibold text-lg">{app1.name}</th>
                <th className="text-left p-4 font-semibold text-lg bg-secondary/30">{app2.name}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-border hover:bg-secondary/10 transition-colors">
                  <td className="p-4 font-semibold">{row.feature}</td>
                  <td className={`p-4 ${row.app1Wins ? "bg-secondary/10" : "text-muted-foreground"}`}>
                    <div className="flex items-start gap-2">
                      {row.app1Wins ? (
                        <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      ) : row.app2Wins ? (
                        <X className="w-4 h-4 text-error mt-1 flex-shrink-0" />
                      ) : null}
                      <span className={row.app1Wins ? "font-medium" : ""}>{row.app1Value}</span>
                    </div>
                  </td>
                  <td className={`p-4 ${row.app2Wins ? "bg-secondary/10" : "text-muted-foreground"}`}>
                    <div className="flex items-start gap-2">
                      {row.app2Wins ? (
                        <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      ) : row.app1Wins ? (
                        <X className="w-4 h-4 text-error mt-1 flex-shrink-0" />
                      ) : null}
                      <span className={row.app2Wins ? "font-medium" : ""}>{row.app2Value}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;