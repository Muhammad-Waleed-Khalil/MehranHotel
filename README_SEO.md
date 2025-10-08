# Mehran Hotel - SEO Configuration Guide

## Google Search Console Setup

To verify your site with Google Search Console, you need to replace the placeholder verification token in `index.html`:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Choose the "HTML tag" verification method
4. Copy the `content` value from the meta tag provided by Google
5. Open `index.html` and replace `VERIFY_TOKEN_HERE` with your actual verification token:

```html
<meta name="google-site-verification" content="YOUR_ACTUAL_TOKEN" />
```

## SEO Features Implemented

### Meta Tags & Open Graph
- Comprehensive meta tags in `index.html`
- Open Graph tags for social media sharing
- Twitter Card tags for enhanced Twitter previews
- Canonical URLs for each page
- Proper title and description tags

### Structured Data (JSON-LD)
All pages include structured data for search engines:
- **Home**: Hotel schema with complete business information
- **All Pages**: BreadcrumbList schema for navigation hierarchy
- **Services**: FAQPage schema with common questions and answers

### Sitemap & Robots
- `public/sitemap.xml`: Complete sitemap listing all pages
- `public/robots.txt`: Configured to allow all crawlers with sitemap reference

### SEO Best Practices
- ✅ Semantic HTML5 structure
- ✅ Proper heading hierarchy (single H1 per page)
- ✅ Descriptive alt text for all images
- ✅ Mobile-responsive design
- ✅ Fast loading with optimized images
- ✅ Internal linking structure
- ✅ Clean, crawlable URLs
- ✅ Accessibility features (ARIA labels, focus states)

### Performance Optimizations
- Font preloading with preconnect
- Lazy loading for images
- Optimized bundle with Vite
- CSS variables for theming

## Updating Content

### To Update Sitemap
Edit `public/sitemap.xml` and update the `<lastmod>` dates when making significant content changes.

### To Update Open Graph Images
1. Add your custom OG images to `public/` directory
2. Update the `og:image` meta tag in `index.html`
3. Recommended size: 1200x630px

### To Update Structured Data
Each page has JSON-LD structured data. Update the relevant page component to modify:
- Business information (contact, address, pricing)
- Service descriptions
- FAQ content

## Contact Information

Make sure to verify and update the phone number in all locations:
- `index.html` meta tags
- Footer component
- Contact page
- Structured data schemas

Current phone (0300-5819858) 

## Social Media

Update social media URLs in:
- `src/components/SocialLinks.tsx`
- Structured data schemas (sameAs property)
- Footer component

Current URLs:
- Facebook: https://www.facebook.com/hotelmehran
- Instagram: https://www.instagram.com/hotelmehran
- Twitter: https://www.twitter.com/hotelmehran
