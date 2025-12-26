import { Link } from "react-router-dom";
import { format } from "date-fns";

interface BlogTileProps {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishDate: string;
  readTime?: number;
  className?: string;
}

const BlogTile = ({
  slug,
  title,
  description,
  author,
  publishDate,
  readTime,
  className = "",
}: BlogTileProps) => {
  const formattedDate = format(new Date(publishDate), "MMM d, yyyy");

  return (
    <Link
      to={`/blogs/${slug}`}
      className={`block group hover:scale-[1.02] transition-transform duration-200 ${className}`}
    >
      <article className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col">
        {/* Visual Header */}
        <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
          <div className="text-4xl font-bold text-primary/20">📝</div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category Link */}
          <span className="text-sm text-primary mb-2 font-medium">
            Blog
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
          <div className="text-sm text-muted-foreground">
            <span>By {author}</span>
            <span> • </span>
            <span>{formattedDate}</span>
            {readTime && (
              <>
                <span> • </span>
                <span>{readTime} min read</span>
              </>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogTile;

