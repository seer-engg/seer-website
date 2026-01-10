import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/images/logo.png";
import { ExternalLink, Github } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Seer logo" className="w-10 h-10" />
              <span className="text-xl font-mono font-semibold tracking-tight">Seer</span>
            </Link>
            <Link
              to="/blogs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <a
              href="https://docs.getseer.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Docs
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button size="sm" asChild>
              <Link to="/demo">Book a demo</Link>
            </Button>
            <Button variant="outline" size="sm" className="hidden md:inline-flex" asChild>
              <a href="https://github.com/seer-engg/seer" target="_blank" rel="noopener noreferrer">
                GitHub
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" className="hidden md:inline-flex" asChild>
              <a href="https://app.getseer.dev" target="_blank" rel="noopener noreferrer">
                Login
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
