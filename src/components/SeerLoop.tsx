import { useEffect, useState } from "react";
import { Brain, Zap, CheckSquare } from "lucide-react";

const SeerLoop = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Brain,
      title: "Reflect",
      description: "Analyze failures and store learnings in memory graph",
    },
    {
      icon: Zap,
      title: "Act",
      description: "Execute agent actions within isolated sandbox",
    },
    {
      icon: CheckSquare,
      title: "Evaluate",
      description: "Assert environment state, not just text output",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Why Seer's Different</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open-source, sandboxed, evals first.
          </p>
        </div>

        {/* Mobile: Simple vertical layout */}
        <div className="sm:hidden max-w-md mx-auto space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            
            return (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 transition-all duration-700 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-background text-foreground border-border"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-700 ${
                    isActive ? "bg-primary-foreground text-primary" : "bg-muted text-muted-foreground"
                  }`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-sm opacity-90">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: Circular layout */}
        <div className="hidden sm:block max-w-3xl mx-auto">
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Circular container for steps */}
            <div className="relative w-[400px] h-[400px]">
              {/* Connecting circle */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                
                {/* Animated dot moving along the circle */}
                <circle
                  cx={200 + 140 * Math.cos((activeStep * 360 / steps.length - 90) * Math.PI / 180)}
                  cy={200 + 140 * Math.sin((activeStep * 360 / steps.length - 90) * Math.PI / 180)}
                  r="8"
                  fill="hsl(var(--primary))"
                  className="transition-all duration-700 ease-in-out"
                >
                  <animate
                    attributeName="r"
                    values="8;12;8"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="1;0.6;1"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Arrow indicators showing direction */}
                {steps.map((_, index) => {
                  const angle = (index * 360) / steps.length - 90;
                  const nextAngle = ((index + 1) * 360) / steps.length - 90;
                  const midAngle = (angle + nextAngle) / 2;
                  const radius = 140;
                  const arrowX = 200 + radius * Math.cos((midAngle * Math.PI) / 180);
                  const arrowY = 200 + radius * Math.sin((midAngle * Math.PI) / 180);
                  
                  return (
                    <g key={`arrow-${index}`}>
                      <path
                        d={`M ${arrowX - 4} ${arrowY - 6} L ${arrowX + 4} ${arrowY} L ${arrowX - 4} ${arrowY + 6}`}
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="1.5"
                        opacity="0.4"
                        transform={`rotate(${midAngle + 90} ${arrowX} ${arrowY})`}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Steps positioned in a circle */}
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const angle = (index * 360) / steps.length - 90; // Start at top
                const radius = 140;
                const x = 200 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 200 + radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    key={index}
                    className="absolute flex flex-col items-center text-center"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: "translate(-50%, -50%)",
                      width: "160px",
                    }}
                  >
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-all duration-700 ${
                        isActive
                          ? "bg-primary text-primary-foreground scale-110 shadow-xl shadow-primary/20"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-10 h-10" strokeWidth={1.5} />
                    </div>
                    <h3 className={`font-semibold text-base mb-2 transition-all duration-700 ${
                      isActive ? "text-foreground scale-105" : "text-muted-foreground"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
             </div>
          </div>

          {/* Key differentiator text */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              How do you ensure your agent's not hallucinating? 
              <br />
              How's your agent learning from failures?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeerLoop;
