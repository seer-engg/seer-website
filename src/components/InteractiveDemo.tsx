import { useState } from "react";
import { Play, Plus, Trash2, CheckCircle2, Loader2 } from "lucide-react";
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

interface WorkflowPreview {
  step: number;
  text: string;
  status: "processing" | "complete";
  message?: string;
  time: number;
}

const InteractiveDemo = () => {
  const [steps, setSteps] = useState<WorkflowStep[]>([
    { id: "1", text: "Fetch GitHub PRs" },
    { id: "2", text: "Filter by status: merged" },
    { id: "3", text: "Create Asana task for each PR" },
  ]);
  const [currentStep, setCurrentStep] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [preview, setPreview] = useState<WorkflowPreview[]>([]);

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

  const generateWorkflow = async () => {
    if (steps.length === 0) {
      toast.error("Add at least one workflow step");
      return;
    }

    setIsRunning(true);
    setPreview([]);

    // Simulate workflow generation process
    const previewSteps: WorkflowPreview[] = [];
    
    // Step 1: Analyzing requirements
    await new Promise(resolve => setTimeout(resolve, 800));
    previewSteps.push({
      step: 0,
      text: "Analyzing requirements...",
      status: "processing",
      time: Date.now(),
    });
    setPreview([...previewSteps]);

    // Step 2: Finding integrations
    await new Promise(resolve => setTimeout(resolve, 1000));
    previewSteps[0].status = "complete";
    previewSteps.push({
      step: 1,
      text: "Finding integrations...",
      status: "processing",
      time: Date.now(),
    });
    setPreview([...previewSteps]);

    // Step 3: Connecting blocks
    await new Promise(resolve => setTimeout(resolve, 1000));
    previewSteps[1].status = "complete";
    previewSteps.push({
      step: 2,
      text: "Connecting blocks...",
      status: "processing",
      time: Date.now(),
    });
    setPreview([...previewSteps]);

    // Step 4: Workflow ready
    await new Promise(resolve => setTimeout(resolve, 1000));
    previewSteps[2].status = "complete";
    previewSteps.push({
      step: 3,
      text: "Workflow ready!",
      status: "complete",
      message: `Created workflow with ${steps.length} steps`,
      time: Date.now(),
    });
    setPreview([...previewSteps]);

    setIsRunning(false);
    toast.success("Workflow generated successfully!");
  };

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Build Your First Workflow</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create a workflow step-by-step and see it come to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: Input Panel */}
          <div>
            <div className="p-6 border border-border rounded-lg bg-background">
              <h3 className="text-xl font-semibold mb-4">Workflow Steps</h3>
              
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
                  placeholder="e.g., Send email notification"
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
                onClick={generateWorkflow}
                disabled={isRunning || steps.length === 0}
                className="w-full gap-2"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Generating Workflow...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Generate Workflow
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Right: Preview Panel */}
          <div>
            <div className="p-6 border border-border rounded-lg bg-background min-h-[400px]">
              <h3 className="text-xl font-semibold mb-4">Workflow Preview</h3>
              
              {preview.length === 0 && !isRunning && (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-3 opacity-20" />
                    <p>Add steps to preview your workflow</p>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                {preview.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded border animate-fade-in ${
                      item.status === "complete"
                        ? "border-success/20 bg-success/5"
                        : "border-primary/20 bg-primary/5"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      {item.status === "complete" ? (
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      ) : (
                        <Loader2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 animate-spin" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground mb-1">{item.text}</p>
                        {item.message && (
                          <p className="text-xs text-muted-foreground">{item.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
