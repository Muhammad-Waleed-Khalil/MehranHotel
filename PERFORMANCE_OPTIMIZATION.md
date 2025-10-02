# Performance Optimization Guide

This document outlines the image and static content optimizations implemented to improve website loading performance.

## 🚀 Optimizations Implemented

### 1. Enhanced OptimizedImage Component

**Location**: `src/components/OptimizedImage.tsx`

**Features**:
- **Modern Image Formats**: Automatic WebP and AVIF support with fallbacks
- **Responsive Images**: Multiple sizes (320px to 1920px) with proper `srcSet`
- **Lazy Loading**: Non-critical images load only when needed
- **Blur Placeholders**: Smooth loading experience with blur-to-sharp transition
- **Priority Loading**: Critical images (hero, logos) load immediately
- **Error Handling**: Graceful fallback for failed image loads

**Usage**:
```tsx
<OptimizedImage
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  width={600}
  height={400}
  priority={true} // For above-the-fold images
  loading="eager" // or "lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="blur"
  className="rounded-lg"
/>
```

### 2. Vercel Caching Configuration

**Location**: `vercel.json`

**Caching Headers**:
- **Images**: `Cache-Control: public, max-age=31536000, immutable` (1 year)
- **JS/CSS**: `Cache-Control: public, max-age=31536000, immutable` (1 year)
- **Fonts**: `Cache-Control: public, max-age=31536000, immutable` (1 year)
- **HTML**: `Cache-Control: public, max-age=0, must-revalidate` (always fresh)

**Benefits**:
- Faster repeat visits
- Reduced server load
- Better Core Web Vitals scores

### 3. Image Preloading

**Location**: `src/components/SEO.tsx`

**Implementation**:
- Critical images preloaded with `<link rel="preload">`
- WebP format prioritized for modern browsers
- Hero and background images get highest priority

**Usage**:
```tsx
<SEO 
  config={pageSEO.home}
  preloadImages={[heroImage, backgroundImage, logoImage]}
/>
```

### 4. Build Optimizations

**Location**: `vite.config.ts`

**Features**:
- **Code Splitting**: Manual chunks for vendor, router, animation, and UI libraries
- **Asset Optimization**: Inline assets smaller than 4KB
- **Modern Formats**: WebP and AVIF support
- **Source Maps**: Disabled in production for smaller bundles

**Chunk Strategy**:
- `vendor`: React, React DOM
- `router`: React Router
- `animation`: Framer Motion, GSAP
- `ui`: Lucide React icons
- `components`: Reusable components
- `pages`: Page-specific code

### 5. Image Optimization Script

**Location**: `scripts/optimize-images.js`

**Features**:
- Converts images to WebP format
- Generates responsive sizes (320px to 1920px)
- Creates optimized fallbacks (JPEG/PNG)
- Generates image manifest for easy reference

**Usage**:
```bash
npm run optimize-images
npm run build:optimized
```

## 📊 Performance Impact

### Before Optimization
- **Total Image Size**: ~12MB (unoptimized)
- **Largest Image**: 2.03MB (premium.jpg)
- **Bundle Size**: 601.87 kB (gzipped: 192.34 kB)
- **No caching headers**
- **No modern image formats**

### After Optimization
- **Total Image Size**: ~3-4MB (WebP optimized)
- **Largest Image**: ~400-500KB (WebP)
- **Bundle Size**: Optimized with code splitting
- **1-year caching for static assets**
- **WebP/AVIF support with fallbacks**

### Expected Improvements
- **Largest Contentful Paint (LCP)**: 40-60% improvement
- **First Input Delay (FID)**: 20-30% improvement
- **Cumulative Layout Shift (CLS)**: Reduced with proper dimensions
- **Page Load Speed**: 50-70% faster on repeat visits

## 🛠️ Implementation Steps

### 1. Install Dependencies
```bash
npm install sharp --save-dev
```

### 2. Optimize Images
```bash
npm run optimize-images
```

### 3. Build with Optimizations
```bash
npm run build:optimized
```

### 4. Deploy to Vercel
The `vercel.json` configuration will automatically apply caching headers.

## 🔧 Configuration Options

### OptimizedImage Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | - | Image source URL |
| `alt` | string | - | Alt text for accessibility |
| `width` | number | - | Image width in pixels |
| `height` | number | - | Image height in pixels |
| `priority` | boolean | false | Load with high priority |
| `loading` | 'lazy' \| 'eager' | 'lazy' | Loading strategy |
| `sizes` | string | '100vw' | Responsive sizes |
| `quality` | number | 75 | Image quality (1-100) |
| `placeholder` | 'blur' \| 'empty' | 'empty' | Placeholder type |
| `fill` | boolean | false | Fill container |
| `className` | string | '' | CSS classes |

### Vercel Configuration

The `vercel.json` file includes:
- Static asset caching (1 year)
- HTML revalidation (always fresh)
- SPA routing support
- Function runtime configuration

## 📈 Monitoring Performance

### Core Web Vitals
- **LCP**: Should be < 2.5s
- **FID**: Should be < 100ms
- **CLS**: Should be < 0.1

### Tools for Testing
- Google PageSpeed Insights
- WebPageTest.org
- Chrome DevTools Lighthouse
- Vercel Analytics

### Performance Budget
- **Total Bundle Size**: < 500KB gzipped
- **Image Sizes**: < 500KB per image
- **LCP**: < 2.5s
- **FID**: < 100ms

## 🚨 Best Practices

### Image Optimization
1. **Use WebP format** for modern browsers
2. **Provide fallbacks** for older browsers
3. **Set proper dimensions** to prevent layout shift
4. **Use appropriate quality** (75-85 for photos, 90+ for graphics)
5. **Lazy load** non-critical images

### Caching Strategy
1. **Static assets**: Long-term caching (1 year)
2. **HTML**: Always revalidate
3. **API responses**: Short-term caching (5-15 minutes)
4. **User-specific content**: No caching

### Bundle Optimization
1. **Code split** by route and feature
2. **Tree shake** unused code
3. **Minify** and compress assets
4. **Use dynamic imports** for heavy components

## 🔍 Troubleshooting

### Common Issues

**Images not loading**:
- Check file paths and extensions
- Verify WebP support in browser
- Check network tab for 404 errors

**Poor performance**:
- Run image optimization script
- Check bundle size with `npm run build`
- Verify caching headers in DevTools

**Layout shift**:
- Always specify width and height
- Use `fill` prop for responsive images
- Set proper `sizes` attribute

### Debug Commands
```bash
# Check bundle size
npm run build

# Optimize images
npm run optimize-images

# Verify SEO
npm run verify-seo

# Preview production build
npm run preview
```

## 📚 Additional Resources

- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Vercel Image Optimization](https://vercel.com/docs/concepts/image-optimization)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse Performance](https://developers.google.com/web/tools/lighthouse)

## 🎯 Next Steps

1. **Monitor performance** with real user metrics
2. **Implement service worker** for offline caching
3. **Add image CDN** for global distribution
4. **Optimize fonts** with font-display: swap
5. **Implement critical CSS** inlining

---

*Last updated: $(date)*
*Performance optimizations implemented for Mehran Hotel website*
