import { useState } from "react";
import { Play, Plus, Trash2, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { toast } from "sonner";

const workflowStepSchema = z.object({
  step: z.string().trim().min(1, "Step cannot be empty").max(200, "Step must be less than 200 characters"),
});

interface WorkflowStep {
  id: string;
  text: string;
}

interface SimulationResult {
  step: number;
  text: string;
  status: "success" | "fail";
  error?: string;
  time: number;
}

const InteractiveDemo = () => {
  const [steps, setSteps] = useState<WorkflowStep[]>([
    { id: "1", text: "Fetch open GitHub PRs" },
    { id: "2", text: "Check PR approval status" },
    { id: "3", text: "Sync approved PRs to Asana" },
  ]);
  const [currentStep, setCurrentStep] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<SimulationResult[]>([]);

  const addStep = () => {
    const trimmed = currentStep.trim();
    
    if (!trimmed) {
      toast.error("Please enter a workflow step");
      return;
    }

    try {
      workflowStepSchema.parse({ step: trimmed });
      
      if (steps.length >= 10) {
        toast.error("Maximum 10 steps allowed");
        return;
      }

      const newStep: WorkflowStep = {
        id: Date.now().toString(),
        text: trimmed,
      };
      setSteps([...steps, newStep]);
      setCurrentStep("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  const removeStep = (id: string) => {
    setSteps(steps.filter(step => step.id !== id));
  };

  const simulateAnalysis = async () => {
    if (steps.length === 0) {
      toast.error("Add at least one workflow step");
      return;
    }

    setIsRunning(true);
    setResults([]);

    // Simulate sandbox setup
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const simulatedResults: SimulationResult[] = [];
    
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate different failure scenarios based on keywords
      const stepText = steps[i].text.toLowerCase();
      let status: "success" | "fail" = "success";
      let error: string | undefined;

      // Simulate realistic agent failures
      if (stepText.includes("rate limit") || stepText.includes("api")) {
        status = "fail";
        error = "Rate limit exceeded. Agent didn't implement exponential backoff.";
      } else if (stepText.includes("lock") || stepText.includes("concurrent")) {
        status = "fail";
        error = "Resource locked by another process. Agent didn't check lock status.";
      } else if (stepText.includes("permission") || stepText.includes("auth")) {
        status = "fail";
        error = "Permission denied. Agent used hardcoded credentials instead of env vars.";
      } else if (stepText.includes("branch") || stepText.includes("merge")) {
        status = "fail";
        error = "Branch protection rules violated. Agent attempted direct push to main.";
      } else if (i > 5) {
        // Add some randomness for later steps
        status = Math.random() > 0.6 ? "fail" : "success";
        if (status === "fail") {
          error = "State assertion failed. Database record not created.";
        }
      }

      const result: SimulationResult = {
        step: i + 1,
        text: steps[i].text,
        status,
        error,
        time: Date.now(),
      };

      simulatedResults.push(result);
      setResults([...simulatedResults]);
    }

    setIsRunning(false);
    
    const failCount = simulatedResults.filter(r => r.status === "fail").length;
    if (failCount > 0) {
      toast.success(`Analysis complete! Found ${failCount} potential failure${failCount > 1 ? 's' : ''}`);
    } else {
      toast.success("Analysis complete! All steps passed");
    }
  };

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">See Seer in Action</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Define your agent workflow below, then watch Seer analyze it for potential failures
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: Input Panel */}
          <div>
            <div className="p-6 border border-border rounded-lg bg-background">
              <h3 className="text-xl font-semibold mb-4">Your Agent Workflow</h3>
              
              <div className="space-y-3 mb-4">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="flex items-center gap-3 p-3 bg-secondary/30 rounded group hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-xs font-mono text-muted-foreground w-6">
                      {index + 1}.
                    </span>
                    <span className="flex-1 text-sm">{step.text}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeStep(step.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4 text-error" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="e.g., Check rate limits on API"
                  value={currentStep}
                  onChange={(e) => setCurrentStep(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addStep()}
                  maxLength={200}
                  disabled={isRunning}
                />
                <Button
                  onClick={addStep}
                  size="sm"
                  variant="outline"
                  disabled={isRunning}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <Button
                onClick={simulateAnalysis}
                disabled={isRunning || steps.length === 0}
                className="w-full gap-2"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Running Analysis...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Run Seer Analysis
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground mt-3 text-center">
                Try keywords like "rate limit", "lock", "permission", or "branch"
              </p>
            </div>
          </div>

          {/* Right: Results Panel */}
          <div>
            <div className="p-6 border border-border rounded-lg bg-background min-h-[400px]">
              <h3 className="text-xl font-semibold mb-4">Seer Sandbox Results</h3>
              
              {results.length === 0 && !isRunning && (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-3 opacity-20" />
                    <p>Run an analysis to see results</p>
                  </div>
                </div>
              )}

              {isRunning && results.length === 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Provisioning Docker sandbox...</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Seeding mock environment...</span>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded border animate-fade-in ${
                      result.status === "success"
                        ? "border-success/20 bg-success/5"
                        : "border-error/20 bg-error/5"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      {result.status === "success" ? (
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-muted-foreground">
                            Step {result.step}
                          </span>
                          <span
                            className={`text-xs font-semibold ${
                              result.status === "success" ? "text-success" : "text-error"
                            }`}
                          >
                            {result.status === "success" ? "PASS" : "FAIL"}
                          </span>
                        </div>
                        <p className="text-sm text-foreground mb-1">{result.text}</p>
                        {result.error && (
                          <p className="text-xs text-error font-mono">{result.error}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {results.length > 0 && !isRunning && (
                <div className="mt-4 p-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {results.filter(r => r.status === "success").length} passed
                    </span>
                    <span className="text-muted-foreground">
                      {results.filter(r => r.status === "fail").length} failed
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            This is a simulation. Real Seer runs in isolated Docker containers with actual state verification.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
