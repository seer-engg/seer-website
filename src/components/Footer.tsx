import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-mono font-semibold text-lg mb-2">Seer</h3>
            <p className="text-sm text-muted-foreground">
              The Scientific Method for AI Agent Development.
            </p>
          </div>

          <a
            href="https://github.com/seer-engg/seer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            Built by skeptics at Seer Engineering. MIT License · Open Source
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
