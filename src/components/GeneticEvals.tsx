import { Dna, Zap, AlertTriangle } from "lucide-react";

const GeneticEvals = () => {
  const mutations = [
    { id: "TC1", generation: "Gen 0", status: "pass", difficulty: "Normal" },
    { id: "TC2", generation: "Gen 1", status: "pass", difficulty: "+Network Lag" },
    { id: "TC3", generation: "Gen 2", status: "fail", difficulty: "+Locked Files" },
    { id: "TC4", generation: "Gen 3", status: "fail", difficulty: "+Malformed API" },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Dna className="w-12 h-12 text-foreground" strokeWidth={1.5} />
            <h2 className="text-5xl font-bold">Genetic Evals</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tests that Mutate
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-8 border border-border rounded-lg bg-card">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Writing test cases by hand is tedious. Seer&apos;s Eval Agent uses genetic algorithms to 
              &apos;mutate&apos; your initial test case into 100 variants.
            </p>
            <p className="text-lg text-foreground font-semibold leading-relaxed">
              It dials up the difficulty—introducing network lag, locked files, and malformed API responses—until 
              your agent breaks. Then it tells you why.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* DNA Helix Visual */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-6">
              {mutations.map((mutation, index) => (
                <div
                  key={mutation.id}
                  className={`flex items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 p-6 border border-border rounded-lg bg-card hover:border-foreground/20 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-muted-foreground">{mutation.generation}</span>
                      {mutation.status === "pass" ? (
                        <Zap className="w-5 h-5 text-success" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-error" />
                      )}
                    </div>
                    <h4 className="font-semibold text-lg mb-1">{mutation.id}</h4>
                    <p className="text-sm text-muted-foreground">{mutation.difficulty}</p>
                    <div className="mt-3 text-xs font-mono">
                      <span className={mutation.status === "pass" ? "text-success" : "text-error"}>
                        {mutation.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full border-2 border-border bg-card flex items-center justify-center font-mono text-sm font-semibold hidden md:flex">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm font-mono text-muted-foreground">
              💡 Genetic fuzzing finds the edge cases you didn&apos;t think to test. 
              Start with 1 test case, end with 100 hardened variants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneticEvals;
