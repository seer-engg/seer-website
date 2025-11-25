import { Github, Twitter, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-mono font-semibold text-lg mb-4">Seer</h3>
            <p className="text-sm text-muted-foreground">
              The Scientific Method for AI Agent Development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/seer-engg/seer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            Built for the skeptics at Seer Engineering. MIT License · Open Source
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
