#!/usr/bin/env node

/**
 * SEO Verification Script
 * Verifies that all SEO requirements are met
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

const log = (message, color = 'reset') => {
  console.log(`${colors[color]}${message}${colors.reset}`);
};

const checkFile = (filePath, description) => {
  if (fs.existsSync(filePath)) {
    log(`✓ ${description}`, 'green');
    return true;
  } else {
    log(`✗ ${description} - File not found: ${filePath}`, 'red');
    return false;
  }
};

const checkFileContent = (filePath, searchString, description) => {
  if (!fs.existsSync(filePath)) {
    log(`✗ ${description} - File not found: ${filePath}`, 'red');
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(searchString)) {
    log(`✓ ${description}`, 'green');
    return true;
  } else {
    log(`✗ ${description} - Content not found: ${searchString}`, 'red');
    return false;
  }
};

const main = () => {
  log('🔍 SEO Verification Report', 'blue');
  log('========================', 'blue');

  let passed = 0;
  let total = 0;

  // Check required files
  const checks = [
    () => checkFile('public/sitemap.xml', 'Sitemap.xml exists'),
    () => checkFile('public/robots.txt', 'Robots.txt exists'),
    () => checkFile('src/lib/seo.ts', 'SEO configuration exists'),
    () => checkFile('src/components/SEO.tsx', 'SEO component exists'),
    () => checkFile('src/lib/structured-data.ts', 'Structured data exists'),
    () => checkFile('src/components/OptimizedImage.tsx', 'Optimized image component exists'),
    () => checkFile('src/lib/performance.ts', 'Performance utilities exist'),
    
    // Check sitemap content
    () => checkFileContent('public/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>', 'Sitemap has valid XML declaration'),
    () => checkFileContent('public/sitemap.xml', 'https://www.hotelmehran.com/', 'Sitemap contains homepage URL'),
    () => checkFileContent('public/sitemap.xml', 'https://www.hotelmehran.com/about', 'Sitemap contains about page'),
    () => checkFileContent('public/sitemap.xml', 'https://www.hotelmehran.com/services', 'Sitemap contains services page'),
    () => checkFileContent('public/sitemap.xml', 'https://www.hotelmehran.com/contact', 'Sitemap contains contact page'),
    
    // Check robots.txt content
    () => checkFileContent('public/robots.txt', 'User-agent: *', 'Robots.txt has user-agent directive'),
    () => checkFileContent('public/robots.txt', 'Allow: /', 'Robots.txt allows crawling'),
    () => checkFileContent('public/robots.txt', 'Sitemap: https://www.hotelmehran.com/sitemap.xml', 'Robots.txt references sitemap'),
    
    // Check SEO configuration
    () => checkFileContent('src/lib/seo.ts', 'defaultSEO', 'SEO config has default settings'),
    () => checkFileContent('src/lib/seo.ts', 'pageSEO', 'SEO config has page-specific settings'),
    () => checkFileContent('src/lib/seo.ts', 'generatePageTitle', 'SEO config has title generation'),
    
    // Check structured data
    () => checkFileContent('src/lib/structured-data.ts', 'generateHotelSchema', 'Structured data has hotel schema'),
    () => checkFileContent('src/lib/structured-data.ts', 'generateBreadcrumbSchema', 'Structured data has breadcrumb schema'),
    () => checkFileContent('src/lib/structured-data.ts', 'generateFAQSchema', 'Structured data has FAQ schema'),
    
    // Check performance optimizations
    () => checkFileContent('src/lib/performance.ts', 'preloadImage', 'Performance utils have image preloading'),
    () => checkFileContent('src/lib/performance.ts', 'measureCoreWebVitals', 'Performance utils measure Core Web Vitals'),
    
    // Check HTML meta tags
    () => checkFileContent('index.html', '<meta name="description"', 'HTML has meta description'),
    () => checkFileContent('index.html', '<meta property="og:title"', 'HTML has Open Graph title'),
    () => checkFileContent('index.html', '<meta property="og:description"', 'HTML has Open Graph description'),
    () => checkFileContent('index.html', '<meta property="og:image"', 'HTML has Open Graph image'),
    () => checkFileContent('index.html', '<meta name="twitter:card"', 'HTML has Twitter card'),
    () => checkFileContent('index.html', '<link rel="canonical"', 'HTML has canonical URL'),
    () => checkFileContent('index.html', '<link rel="preconnect"', 'HTML has preconnect hints'),
  ];

  checks.forEach(check => {
    total++;
    if (check()) {
      passed++;
    }
  });

  log('\n📊 Summary', 'blue');
  log('==========', 'blue');
  log(`Passed: ${passed}/${total}`, passed === total ? 'green' : 'yellow');
  
  if (passed === total) {
    log('\n🎉 All SEO requirements met!', 'green');
    log('Your site is ready for search engines.', 'green');
  } else {
    log('\n⚠️  Some SEO requirements are missing.', 'yellow');
    log('Please review the failed checks above.', 'yellow');
  }

  // Additional recommendations
  log('\n💡 Additional Recommendations:', 'blue');
  log('1. Test your site with Google PageSpeed Insights', 'blue');
  log('2. Verify meta tags with Google Rich Results Test', 'blue');
  log('3. Submit your sitemap to Google Search Console', 'blue');
  log('4. Monitor Core Web Vitals in production', 'blue');
  log('5. Set up Google Analytics for tracking', 'blue');

  process.exit(passed === total ? 0 : 1);
};

main();
