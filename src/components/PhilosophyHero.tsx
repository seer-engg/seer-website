import { Scale, TrendingUp, TrendingDown } from "lucide-react";

const PhilosophyHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/50 mb-6">
              <Scale className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Core Philosophy
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance tracking-tight">
              Workflows First, Agents Later
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              After talking to 50+ teams building AI products, we learned: workflows come first. Start with reliable automations. Add AI where it adds value. Don't build agents on hope—build workflows on solid foundations.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border-l-2 border-error/30 bg-error/5">
                <TrendingDown className="w-5 h-5 text-error flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <div className="font-semibold text-foreground mb-1">Agents First</div>
                  <div className="text-sm text-muted-foreground">
                    Building complex agents before workflows exist. Shipping probabilistic code and hoping it works.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border-l-2 border-success/30 bg-success/5">
                <TrendingUp className="w-5 h-5 text-success flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <div className="font-semibold text-foreground mb-1">Workflows First</div>
                  <div className="text-sm text-muted-foreground">
                    Building reliable workflows first. Adding AI where it adds value. Immediate, actionable automation.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Balance Scale */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square relative flex items-center justify-center">
              {/* Background glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
              
              {/* SVG Balance Scale */}
              <svg 
                viewBox="0 0 200 200" 
                className="relative z-10 w-full h-full"
                style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.1))' }}
              >
                {/* Central pillar */}
                <line
                  x1="100"
                  y1="60"
                  x2="100"
                  y2="140"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-foreground/20"
                />
                
                {/* Balance beam - tilted to show asymmetry */}
                <line
                  x1="40"
                  y1="80"
                  x2="160"
                  y2="70"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-foreground"
                  style={{
                    animation: `balance-tilt 3s ease-in-out infinite`,
                  }}
                />

                {/* Left side - Dev without Evals (lower) */}
                <g>
                  <line x1="40" y1="80" x2="40" y2="100" stroke="currentColor" strokeWidth="1" className="text-foreground/40" />
                  <circle
                    cx="40"
                    cy="110"
                    r="15"
                    className="fill-error/20 stroke-error"
                    strokeWidth="1.5"
                    style={{
                      animation: `float-down 3s ease-in-out infinite`,
                    }}
                  />
                  <text
                    x="40"
                    y="115"
                    textAnchor="middle"
                    className="text-[8px] font-bold fill-error"
                  >
                    AI
                  </text>
                  <text
                    x="40"
                    y="135"
                    textAnchor="middle"
                    className="text-[6px] font-mono fill-muted-foreground"
                  >
                    Hope
                  </text>
                </g>

                {/* Right side - Workflows First (higher) */}
                <g>
                  <line x1="160" y1="70" x2="160" y2="85" stroke="currentColor" strokeWidth="1" className="text-foreground/40" />
                  <circle
                    cx="160"
                    cy="95"
                    r="15"
                    className="fill-success/20 stroke-success"
                    strokeWidth="1.5"
                    style={{
                      animation: `float-up 3s ease-in-out infinite`,
                    }}
                  />
                  <text
                    x="160"
                    y="100"
                    textAnchor="middle"
                    className="text-[8px] font-bold fill-success"
                  >
                    WF
                  </text>
                  <text
                    x="160"
                    y="120"
                    textAnchor="middle"
                    className="text-[6px] font-mono fill-muted-foreground"
                  >
                    Value
                  </text>
                </g>

                {/* Center pivot point */}
                <circle
                  cx="100"
                  cy="75"
                  r="4"
                  className="fill-primary"
                />
              </svg>

              {/* Decorative corner markers */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-border/30"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-border/30"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-border/30"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-border/30"></div>
            </div>

            {/* Scale label */}
            <div className="mt-6 text-center">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Workflows First Approach
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes balance-tilt {
          0%, 100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }

        @keyframes float-down {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
        }

        @keyframes float-up {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default PhilosophyHero;
