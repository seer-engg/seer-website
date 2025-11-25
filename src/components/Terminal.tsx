import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, RefreshCw } from "lucide-react";

const Terminal = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < 3 ? prev + 1 : 0));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-primary text-primary-foreground rounded-lg p-6 font-mono text-sm h-[400px] flex flex-col">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary-foreground/20">
        <div className="w-3 h-3 rounded-full bg-error" />
        <div className="w-3 h-3 rounded-full bg-warning" />
        <div className="w-3 h-3 rounded-full bg-success" />
        <span className="ml-2 text-primary-foreground/60">agent_terminal</span>
      </div>
      
      <div className="flex-1 space-y-3 overflow-hidden">
        <div className="opacity-60">$ seer run experiment</div>
        <div className="opacity-80">→ Initializing agent...</div>
        
        {step >= 1 && (
          <div className="animate-fade-in space-y-2">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-error" />
              <span className="text-error">FAIL: Agent attempted to query undefined API</span>
            </div>
            <div className="ml-6 text-primary-foreground/60 text-xs">
              Expected: Valid response from /api/data
              <br />
              Actual: TypeError: Cannot read property 'data' of undefined
            </div>
          </div>
        )}
        
        {step >= 2 && (
          <div className="animate-fade-in space-y-2">
            <div className="flex items-center gap-2 text-warning">
              <RefreshCw className="w-4 h-4" />
              <span>REFLECT: Analyzing failure...</span>
            </div>
            <div className="ml-6 text-primary-foreground/70 text-xs">
              → Hypothesis: Missing environment variable API_KEY
              <br />
              → Action: Check config and retry with fallback
            </div>
          </div>
        )}
        
        {step >= 3 && (
          <div className="animate-fade-in space-y-2">
            <div className="opacity-80">→ Retrying with updated strategy...</div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span className="text-success">PASS: API query successful</span>
            </div>
            <div className="ml-6 text-primary-foreground/60 text-xs">
              ✓ Response validated
              <br />
              ✓ Data stored in Neo4j memory
            </div>
          </div>
        )}
        
        {step >= 3 && (
          <div className="mt-4 pt-4 border-t border-primary-foreground/20">
            <div className="text-success">✓ Experiment complete. Agent self-corrected in 1 iteration.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
