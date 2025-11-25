import { useEffect, useState } from "react";
import { Target, Zap, CheckSquare, Brain, RotateCw } from "lucide-react";

const SeerLoop = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Target,
      title: "Hypothesis",
      description: "Human defines the expected behavior (The Eval)",
    },
    {
      icon: Zap,
      title: "Act",
      description: "Agent attempts the task",
    },
    {
      icon: CheckSquare,
      title: "Evaluate",
      description: "Seer checks the output against the Hypothesis",
    },
    {
      icon: Brain,
      title: "Reflect",
      description: "If failed, the agent analyzes why and updates its memory",
    },
    {
      icon: RotateCw,
      title: "Iterate",
      description: "The loop repeats until success or max rounds",
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
          <h2 className="text-5xl font-bold mb-4">The Scientific Method</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Evals First. Code Second.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full -z-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--border))" />
                </marker>
              </defs>
              {steps.map((_, index) => {
                const nextIndex = (index + 1) % steps.length;
                const angle1 = (index * 360) / steps.length - 90;
                const angle2 = (nextIndex * 360) / steps.length - 90;
                const radius = 180;
                const centerX = 400;
                const centerY = 300;

                const x1 = centerX + radius * Math.cos((angle1 * Math.PI) / 180);
                const y1 = centerY + radius * Math.sin((angle1 * Math.PI) / 180);
                const x2 = centerX + radius * Math.cos((angle2 * Math.PI) / 180);
                const y2 = centerY + radius * Math.sin((angle2 * Math.PI) / 180);

                return (
                  <line
                    key={index}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                    className="hidden md:block"
                  />
                );
              })}
            </svg>

            <div className="grid md:grid-cols-5 gap-4 md:gap-0">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;

                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${
                        isActive
                          ? "bg-primary text-primary-foreground scale-110 shadow-lg"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <Icon className="w-10 h-10" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground max-w-[200px]">
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
