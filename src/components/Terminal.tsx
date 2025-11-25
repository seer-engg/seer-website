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
    { timestamp: "00:01", agent: "ORCHESTRATOR", level: "INFO", message: "Spinning up Sandbox [Docker: Postgres + Redis]..." },
    { timestamp: "00:04", agent: "EVAL_AGENT", level: "INFO", message: "Seeding Asana Mock State: 3 tickets, 1 user." },
    { timestamp: "00:05", agent: "TARGET_AGENT", level: "INFO", message: "Action 1: Searching for 'sync bug' tickets..." },
    { timestamp: "00:12", agent: "TARGET_AGENT", level: "INFO", message: "Action 5: Attempting to close Asana ticket #123..." },
    { timestamp: "00:15", agent: "SANDBOX", level: "ERROR", message: "Error: Ticket #123 is locked by another user." },
    { timestamp: "00:16", agent: "REFLECTOR", level: "WARN", message: "Analysis: Agent failed to check lock status before write." },
    { timestamp: "00:18", agent: "TARGET_AGENT", level: "INFO", message: "Action 6 (Retry): Unlocking ticket #123..." },
    { timestamp: "00:20", agent: "TARGET_AGENT", level: "INFO", message: "Action 7: Closing ticket #123..." },
    { timestamp: "00:22", agent: "EVAL_AGENT", level: "SUCCESS", message: "Assertion: Check Asana State... SUCCESS. Ticket is 'closed'." },
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
