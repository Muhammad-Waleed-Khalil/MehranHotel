import { Helmet } from 'react-helmet-async';
import { SEOConfig, defaultSEO, generatePageTitle, generateCanonicalUrl } from '@/lib/seo';

interface SEOProps {
  config?: Partial<SEOConfig>;
  structuredData?: Record<string, any>[];
}

const SEO = ({ config = {}, structuredData = [] }: SEOProps) => {
  const seoConfig = { ...defaultSEO, ...config };
  const title = generatePageTitle(seoConfig.title);
  const canonical = seoConfig.canonical || generateCanonicalUrl(window.location.pathname);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={seoConfig.description} />
      {seoConfig.keywords && <meta name="keywords" content={seoConfig.keywords} />}
      <link rel="canonical" href={canonical} />
      
      {/* Robots Meta */}
      {seoConfig.noindex && <meta name="robots" content="noindex" />}
      {seoConfig.nofollow && <meta name="robots" content="nofollow" />}
      {!seoConfig.noindex && !seoConfig.nofollow && (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={seoConfig.description} />
      <meta property="og:type" content={seoConfig.ogType || "website"} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Mehran Hotel" />
      <meta property="og:image" content={seoConfig.ogImage || defaultSEO.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={seoConfig.twitterCard || defaultSEO.twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={seoConfig.description} />
      <meta name="twitter:image" content={seoConfig.ogImage || defaultSEO.ogImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Mehran Hotel" />
      <meta name="theme-color" content="#0B0B0F" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

export default SEO;
