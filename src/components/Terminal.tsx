import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, RefreshCw, Info } from "lucide-react";

interface LogEntry {
  timestamp: string;
  agent: string;
  level: "INFO" | "ERROR" | "WARN" | "SUCCESS";
  message: string;
}

const Terminal = () => {
  const [visibleLogs, setVisibleLogs] = useState<number>(0);

  const logs: LogEntry[] = [
    { timestamp: "10:42:01.152", agent: "EVAL_AGENT", level: "INFO", message: "Generating hypothesis for feature: 'Asana Sync'" },
    { timestamp: "10:42:02.304", agent: "CODEX", level: "INFO", message: "Drafting implementation plan..." },
    { timestamp: "10:42:05.881", agent: "CODEX", level: "ERROR", message: "AssertionError: Task not created in Asana." },
    { timestamp: "10:42:06.102", agent: "REFLECTOR", level: "WARN", message: "Observation: API token was missing in headers." },
    { timestamp: "10:42:07.445", agent: "CODEX", level: "INFO", message: "Patching 'sync_service.py' with auth headers..." },
    { timestamp: "10:42:09.001", agent: "EVAL_AGENT", level: "SUCCESS", message: "Test Passed: Asana task verified." },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLogs((prev) => (prev < logs.length ? prev + 1 : 0));
    }, 1500);
    return () => clearInterval(timer);
  }, [logs.length]);

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "ERROR": return <XCircle className="w-3 h-3 text-error flex-shrink-0" />;
      case "WARN": return <RefreshCw className="w-3 h-3 text-warning flex-shrink-0" />;
      case "SUCCESS": return <CheckCircle2 className="w-3 h-3 text-success flex-shrink-0" />;
      default: return <Info className="w-3 h-3 text-primary-foreground/60 flex-shrink-0" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "ERROR": return "text-error";
      case "WARN": return "text-warning";
      case "SUCCESS": return "text-success";
      default: return "text-primary-foreground/80";
    }
  };

  return (
    <div className="bg-primary text-primary-foreground rounded-lg p-6 font-mono text-xs h-[400px] flex flex-col">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary-foreground/20">
        <div className="w-3 h-3 rounded-full bg-error" />
        <div className="w-3 h-3 rounded-full bg-warning" />
        <div className="w-3 h-3 rounded-full bg-success" />
        <span className="ml-2 text-primary-foreground/60 text-xs">seer_trace.log</span>
      </div>
      
      <div className="flex-1 space-y-2 overflow-hidden">
        {logs.slice(0, visibleLogs).map((log, index) => (
          <div key={index} className="animate-fade-in flex items-start gap-2">
            {getLevelIcon(log.level)}
            <div className="flex-1 min-w-0">
              <span className="text-primary-foreground/40">[{log.timestamp}]</span>
              {" "}
              <span className="text-primary-foreground/60">{log.agent}</span>
              {" "}
              <span className={getLevelColor(log.level)}>{log.message}</span>
            </div>
          </div>
        ))}
        {visibleLogs > 0 && visibleLogs < logs.length && (
          <div className="animate-terminal-blink text-primary-foreground/60">▊</div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
