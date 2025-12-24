import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-mono font-semibold text-lg mb-2">Seer</h3>
            <p className="text-sm text-muted-foreground">
              Context & eval management for tool-use agents.
              <br />
              Built for skeptics · Open Source
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/comparisons"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              App Comparisons
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
