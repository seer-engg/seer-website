import CompanyLogo from "./CompanyLogo";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ComparisonApp } from "@/content/comparisons-metadata";
import { getAppDomain } from "@/content/comparisons-metadata";

interface AppComparisonHeroProps {
  app1: ComparisonApp;
  app2: ComparisonApp;
  title: string;
  hashtags?: string[];
  className?: string;
}

const AppComparisonHero = ({
  app1,
  app2,
  title,
  hashtags,
  className = "",
}: AppComparisonHeroProps) => {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
          {hashtags && hashtags.length > 0 && (
            <div className="flex items-center justify-center gap-3 flex-wrap mt-4">
              {hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="text-lg text-muted-foreground font-medium"
                >
                  {tag.startsWith("#") ? tag : `#${tag}`}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* App Logos Side by Side */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
              {getAppDomain(app1) ? (
                <CompanyLogo
                  domain={getAppDomain(app1)!}
                  alt={app1.name}
                  size="lg"
                  className="w-32 h-32"
                />
              ) : (
                <div className="w-32 h-32 flex items-center justify-center bg-muted rounded-lg text-muted-foreground font-semibold">
                  {app1.name.charAt(0)}
                </div>
              )}
            </div>
            <h2 className="text-2xl font-semibold">{app1.name}</h2>
            {app1.description && (
              <p className="text-muted-foreground text-sm max-w-xs text-center">
                {app1.description}
              </p>
            )}
            <Button variant="outline" size="sm" asChild>
              <a
                href={app1.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="text-3xl font-bold text-muted-foreground">vs</div>

          <div className="flex flex-col items-center gap-4">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
              {getAppDomain(app2) ? (
                <CompanyLogo
                  domain={getAppDomain(app2)!}
                  alt={app2.name}
                  size="lg"
                  className="w-32 h-32"
                />
              ) : (
                <div className="w-32 h-32 flex items-center justify-center bg-muted rounded-lg text-muted-foreground font-semibold">
                  {app2.name.charAt(0)}
                </div>
              )}
            </div>
            <h2 className="text-2xl font-semibold">{app2.name}</h2>
            {app2.description && (
              <p className="text-muted-foreground text-sm max-w-xs text-center">
                {app2.description}
              </p>
            )}
            <Button variant="outline" size="sm" asChild>
              <a
                href={app2.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppComparisonHero;

