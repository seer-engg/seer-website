import { useEffect, useState } from "react";
import { Target, Zap, CheckSquare, Brain, RotateCw } from "lucide-react";

const SeerLoop = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Target,
      title: "Provision",
      description: "Seer spins up Docker containers & mock API environments",
    },
    {
      icon: Zap,
      title: "Execute",
      description: "Your Agent runs freely (multi-turn) within the sandbox",
    },
    {
      icon: CheckSquare,
      title: "Assert",
      description: "Seer checks Environment State—not just chat logs",
    },
    {
      icon: Brain,
      title: "Reflect",
      description: "Failures are stored in long-term memory for next run",
    },
    {
      icon: RotateCw,
      title: "Teardown",
      description: "The sandbox is wiped clean for the next eval",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Seer's Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The Sandboxed Approach
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Circular container for steps */}
            <div className="relative w-[500px] h-[500px]">
              {/* Connecting circle */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="250"
                  cy="250"
                  r="180"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                {/* Animated dot moving along the circle */}
                <circle
                  cx={250 + 180 * Math.cos((activeStep * 360 / steps.length - 90) * Math.PI / 180)}
                  cy={250 + 180 * Math.sin((activeStep * 360 / steps.length - 90) * Math.PI / 180)}
                  r="6"
                  fill="hsl(var(--primary))"
                  className="transition-all duration-500"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0.5;1"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>

              {/* Steps positioned in a circle */}
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const angle = (index * 360) / steps.length - 90; // Start at top
                const radius = 180;
                const x = 250 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 250 + radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    key={index}
                    className="absolute flex flex-col items-center text-center"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: "translate(-50%, -50%)",
                      width: "140px",
                    }}
                  >
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center mb-3 transition-all duration-500 ${
                        isActive
                          ? "bg-primary text-primary-foreground scale-110 shadow-lg"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeerLoop;
