import { useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  fill?: boolean;
  style?: React.CSSProperties;
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  loading = 'lazy',
  sizes = '100vw',
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
  fill = false,
  style,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate responsive srcSet for different screen sizes with modern formats
  const generateSrcSet = (baseSrc: string) => {
    const sizes = [320, 640, 768, 1024, 1280, 1536, 1920];
    const formats = ['webp', 'avif'];
    
    // Generate srcSet for WebP and AVIF formats
    const modernSrcSet = formats.map(format => 
      sizes
        .map(size => `${baseSrc}?w=${size}&q=${quality}&f=${format} ${size}w`)
        .join(', ')
    ).join(', ');
    
    // Fallback to original format
    const fallbackSrcSet = sizes
      .map(size => `${baseSrc}?w=${size}&q=${quality} ${size}w`)
      .join(', ');
    
    return `${modernSrcSet}, ${fallbackSrcSet}`;
  };

  // Generate blur placeholder data URL
  const generateBlurDataURL = () => {
    if (blurDataURL) return blurDataURL;
    
    // Create a simple base64 blur placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 10;
    canvas.height = 10;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f3f4f6';
      ctx.fillRect(0, 0, 10, 10);
    }
    return canvas.toDataURL();
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image failed to load</span>
      </div>
    );
  }

  const containerStyle = fill ? {
    position: 'relative' as const,
    width: '100%',
    height: '100%',
    ...style
  } : {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
    ...style
  };

  const imageStyle = fill ? {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  } : {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={containerStyle}>
      {/* Blur placeholder */}
      {placeholder === 'blur' && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{
            backgroundImage: `url(${generateBlurDataURL()})`,
            ...(fill ? {} : { width, height }),
          }}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={fill ? {} : { width, height }}
        />
      )}

      {/* Optimized image */}
      <motion.img
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={imageStyle}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* SEO attributes */}
      <meta itemProp="image" content={src} />
    </div>
  );
};

export default OptimizedImage;
