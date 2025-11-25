import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="w-6 h-6" />
            <span className="text-xl font-mono font-semibold tracking-tight">Seer</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="/philosophy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Philosophy
            </a>
            <a href="/memory" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Memory
            </a>
            <a href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="https://github.com/seer-engg/seer" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" />
              Seer
            </a>
            <a href="https://github.com/seer-engg/reflexion" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" />
              Reflexion
            </a>
          </div>
          
          <Button variant="outline" size="sm" className="hidden md:flex" asChild>
            <a href="https://github.com/seer-engg/seer" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
