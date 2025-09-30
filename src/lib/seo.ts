export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const defaultSEO: SEOConfig = {
  title: "Mehran Hotel — 7-Star Luxury in Peshawar | Ultra-Premium Hospitality",
  description: "Experience unparalleled 7-star luxury at Mehran Hotel in Peshawar. Premium suites, fine dining, and world-class service in the heart of Pakistan. Book your exclusive stay today.",
  keywords: "luxury hotel Peshawar, 7-star hotel Pakistan, premium accommodation, fine dining, luxury suites, Mehran Hotel, ultra-luxury hospitality, Peshawar luxury stay",
  canonical: "https://www.hotelmehran.com",
  ogImage: "https://www.hotelmehran.com/og-image.jpg",
  ogType: "hotel",
  twitterCard: "summary_large_image",
};

export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title: "Mehran Hotel — 7-Star Luxury in Peshawar | Ultra-Premium Hospitality",
    description: "Experience unparalleled 7-star luxury at Mehran Hotel in Peshawar. Premium suites, fine dining, and world-class service in the heart of Pakistan. Book your exclusive stay today.",
    keywords: "luxury hotel Peshawar, 7-star hotel Pakistan, premium accommodation, fine dining, luxury suites, Mehran Hotel, ultra-luxury hospitality, Peshawar luxury stay",
    canonical: "https://www.hotelmehran.com/",
    ogType: "hotel",
  },
  about: {
    title: "About Mehran Hotel — Luxury Hospitality Excellence in Peshawar",
    description: "Discover the story behind Mehran Hotel's commitment to luxury hospitality in Peshawar. Learn about our heritage, values, and dedication to providing exceptional guest experiences.",
    keywords: "about Mehran Hotel, luxury hotel history, Peshawar hospitality, hotel heritage, luxury service, Mehran Hotel story",
    canonical: "https://www.hotelmehran.com/about",
    ogType: "website",
  },
  services: {
    title: "Luxury Services & Amenities — Mehran Hotel Peshawar",
    description: "Explore our comprehensive range of luxury services and amenities at Mehran Hotel. From fine dining to concierge services, experience world-class hospitality in Peshawar.",
    keywords: "hotel services Peshawar, luxury amenities, fine dining, concierge service, hotel facilities, Mehran Hotel services",
    canonical: "https://www.hotelmehran.com/services",
    ogType: "website",
  },
  contact: {
    title: "Contact Mehran Hotel — Book Your Luxury Stay in Peshawar",
    description: "Get in touch with Mehran Hotel for reservations, inquiries, or special requests. Located in the heart of Peshawar, we're here to make your luxury stay unforgettable.",
    keywords: "contact Mehran Hotel, hotel reservations Peshawar, luxury hotel booking, hotel contact information, Peshawar hotel phone",
    canonical: "https://www.hotelmehran.com/contact",
    ogType: "website",
  },
};

export const generatePageTitle = (title: string, siteName: string = "Mehran Hotel"): string => {
  return title.includes(siteName) ? title : `${title} | ${siteName}`;
};

export const generateCanonicalUrl = (path: string, baseUrl: string = "https://www.hotelmehran.com"): string => {
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};
