import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";
import type { ComparisonApp } from "@/content/comparisons-metadata";
import { getAppDomain } from "@/content/comparisons-metadata";

interface ComparisonTileProps {
  app1: ComparisonApp;
  app2: ComparisonApp;
  slug: string;
  title: string;
  description: string;
  author?: string;
  readTime?: number;
  className?: string;
}

const ComparisonTile = ({
  app1,
  app2,
  slug,
  title,
  description,
  author,
  readTime,
  className = "",
}: ComparisonTileProps) => {
  return (
    <Link
      to={`/comparisons/${slug}`}
      className={`block group hover:scale-[1.02] transition-transform duration-200 ${className}`}
    >
      <article className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col">
        {/* Visual Header: Two squares with logos */}
        <div className="flex h-32">
          {/* App 1 Square */}
          <div className="flex-1 flex items-center justify-center p-4 bg-muted">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              {getAppDomain(app1) ? (
                <CompanyLogo
                  domain={getAppDomain(app1)!}
                  alt={app1.name}
                  size="md"
                  className="w-16 h-16"
                />
              ) : (
                <div className="w-16 h-16 flex items-center justify-center bg-muted rounded-lg text-muted-foreground font-semibold text-sm">
                  {app1.name.charAt(0)}
                </div>
              )}
            </div>
          </div>
          {/* App 2 Square */}
          <div className="flex-1 flex items-center justify-center p-4 bg-muted">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              {getAppDomain(app2) ? (
                <CompanyLogo
                  domain={getAppDomain(app2)!}
                  alt={app2.name}
                  size="md"
                  className="w-16 h-16"
                />
              ) : (
                <div className="w-16 h-16 flex items-center justify-center bg-muted rounded-lg text-muted-foreground font-semibold text-sm">
                  {app2.name.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category Link */}
          <span className="text-sm text-primary mb-2 font-medium">
            App comparisons
          </span>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
            {description}
          </p>

          {/* Metadata */}
          {(author || readTime) && (
            <div className="text-sm text-muted-foreground">
              {author && <span>By {author}</span>}
              {author && readTime && <span> • </span>}
              {readTime && <span>{readTime} min read</span>}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default ComparisonTile;

