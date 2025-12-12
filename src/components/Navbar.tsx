import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/images/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Seer logo" className="w-10 h-10" />
            <span className="text-xl font-mono font-semibold tracking-tight">Seer</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/philosophy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Philosophy
            </Link>
            <Link to="/memory" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Memory
            </Link>
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <a href="https://github.com/seer-engg/seer" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" />
              Seer
            </a>
            <a href="https://github.com/seer-engg/reflexion" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" />
              Reflexion
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Button size="sm" asChild>
              <Link to="/demo">Book a demo</Link>
            </Button>
            <Button variant="outline" size="sm" className="hidden md:inline-flex" asChild>
              <a href="https://github.com/seer-engg/seer" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
