import { useState } from "react";

interface CompanyLogoProps {
  domain: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-40 h-40",
};

const LOGO_DEV_PUBLIC_KEY = import.meta.env.VITE_LOGO_DEV_KEY || "pk_IolkZ8EjTIqzsR4P5_R4aQ";

export const CompanyLogo = ({
  domain,
  alt,
  className = "",
  size = "md",
}: CompanyLogoProps) => {
  const [hasError, setHasError] = useState(false);
  const logoUrl = `https://img.logo.dev/${domain}?token=${LOGO_DEV_PUBLIC_KEY}`;

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
    }
  };

  if (hasError) {
    // Fallback: show a placeholder or company initial
    const initial = domain.charAt(0).toUpperCase();
    return (
      <div
        className={`${sizeClasses[size]} ${className} flex items-center justify-center bg-muted rounded-lg text-muted-foreground font-semibold`}
      >
        {initial}
      </div>
    );
  }

  return (
    <img
      src={logoUrl}
      alt={alt}
      className={`${sizeClasses[size]} object-contain ${className}`}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default CompanyLogo;

