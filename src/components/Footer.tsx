import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import AskAI from "@/components/AskAI";

const SOCIAL_LINKS = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@get_seer",
    path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/getseer.dev/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/get_seer",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/get-seer",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@get-seer",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Branding */}
          <div>
            <h3 className="font-mono font-semibold text-lg mb-2">Seer</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Automate the busywork. Keep the control.
            </p>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-mono font-medium text-sm mb-3">Product</h4>
              <div className="space-y-2">
                <Link
                  to="/pricing"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  to="/comparisons"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Comparisons
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-mono font-medium text-sm mb-3">Resources</h4>
              <div className="space-y-2">
                <a
                  href="https://deepwiki.com/seer-engg/seer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Docs
                  <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  to="/changelog"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Changelog
                </Link>
                <Link
                  to="/blogs"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-mono font-medium text-sm mb-3">Community</h4>
              <div className="space-y-2">
                <a
                  href="https://discord.gg/sBh9Rsxf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Discord
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://forum.getseer.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Forum
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://github.com/seer-engg/seer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  GitHub
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

        {/* Ask AI Section */}
        <AskAI />

        {/* Bottom Bar */}
        <div className="mt-4 flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} X26, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
