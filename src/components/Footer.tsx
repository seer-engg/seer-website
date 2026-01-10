import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import bugsnagLogo from "@/images/bugsnag-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Branding */}
          <div>
            <h3 className="font-mono font-semibold text-lg mb-2">Seer</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Context management and workflow generation solution for enterprise.
              <br />
              Built for skeptics · Open Source
            </p>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono font-medium text-sm mb-3">Product</h4>
              <div className="space-y-2">
                <Link
                  to="/comparisons"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  App Comparisons
                </Link>
                <a
                  href="https://docs.getseer.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Documentation
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-mono font-medium text-sm mb-3">Legal</h4>
              <div className="space-y-2">
                <Link
                  to="/privacy"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsor Section */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col items-center gap-3">
          <a
            href="https://www.bugsnag.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
          >
            <span className="text-xs text-muted-foreground">Error tracking by</span>
            <img src={bugsnagLogo} alt="Bugsnag" className="h-6 object-contain" />
          </a>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-4">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} X26, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
