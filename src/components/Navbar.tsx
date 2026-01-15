import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/images/logo.png";
import { Github } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const DiscordIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892a.072.072 0 0 1-.007-.12a10.15 10.15 0 0 0 .372-.294a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.195.373.294a.072.072 0 0 1-.006.12a12.296 12.296 0 0 1-1.873.892a.077.077 0 0 0-.041.098c.36.698.772 1.362 1.294 2.1a.076.076 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-3.03a.079.079 0 0 0 .033-.057c.5-4.761-.838-8.898-3.549-12.562a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156c0-1.193.946-2.157 2.157-2.157c1.211 0 2.176.964 2.157 2.157c0 1.19-.946 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156c0-1.193.946-2.157 2.157-2.157c1.211 0 2.176.964 2.157 2.157c0 1.19-.946 2.156-2.157 2.156z"/>
  </svg>
);


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
              to="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/blogs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/changelog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Changelog
            </Link>
            <a
              href="https://docs.getseer.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="hidden md:inline-flex" asChild>
              <a href="https://github.com/seer-engg/seer" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" className="hidden md:inline-flex" asChild>
              <a href="https://discord.gg/sBh9Rsxf" target="_blank" rel="noopener noreferrer">
                <DiscordIcon />
              </a>
            </Button>
            <Button variant="outline" size="sm" className="hidden md:inline-flex" asChild>
              <a href="https://app.getseer.dev" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
