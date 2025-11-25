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
            <a href="#philosophy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Philosophy
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
          
          <Button variant="outline" size="sm" className="hidden md:flex">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
