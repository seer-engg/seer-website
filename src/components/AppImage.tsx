import { useState } from "react";

interface AppImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-40 h-40",
};

export const AppImage = ({
  src,
  alt,
  className = "",
  fallback = "/placeholder.svg",
  size = "md",
}: AppImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallback);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`${sizeClasses[size]} object-contain ${className}`}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default AppImage;

