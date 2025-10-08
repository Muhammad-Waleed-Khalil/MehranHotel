export const generateHotelSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Mehran Hotel",
  "description": "Experience unparalleled 7-star luxury at Mehran Hotel in Peshawar. Ultra-premium suites, world-class fine dining, and exceptional personalized service in the heart of Pakistan.",
  "image": [
    "https://www.hotelmehran.com/og-image.jpg",
    "https://www.hotelmehran.com/assets/mainlobby.jpg",
    "https://www.hotelmehran.com/assets/premium.jpg"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cinema Road, Kabley Bazar",
    "addressLocality": "Peshawar",
    "addressRegion": "Khyber Pakhtunkhwa",
    "postalCode": "25000",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.0151",
    "longitude": "71.5805"
  },
  "telephone": "0300-5819858",
  "email": "info@hotelmehran.com",
  "url": "https://www.hotelmehran.com",
  "priceRange": "Rs 1,600-5,000",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "7",
    "bestRating": "7"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Luxury Suites",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification", 
      "name": "Fine Dining Restaurant",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "24/7 Concierge Service",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Luxury Airport Transfer",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free WiFi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Air Conditioning",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Room Service",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Parking",
      "value": true
    }
  ],
  "checkinTime": "14:00",
  "checkoutTime": "12:00",
  "petsAllowed": false,
  "smokingAllowed": false,
  "sameAs": [
    "https://www.facebook.com/hotelmehran",
    "https://www.instagram.com/hotelmehran",
    "https://www.twitter.com/hotelmehran"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Room Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "HotelRoom",
          "name": "Single Bed Room",
          "description": "Comfortable single occupancy room with modern amenities and city view",
          "occupancy": {
            "@type": "QuantitativeValue",
            "maxValue": 1
          },
          "amenityFeature": [
            "Free WiFi",
            "Air Conditioning", 
            "Room Service",
            "Daily Housekeeping"
          ]
        },
        "price": "1500",
        "priceCurrency": "PKR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "HotelRoom",
          "name": "Double Bed Room",
          "description": "Spacious double bed room with elegant furnishings and premium amenities",
          "occupancy": {
            "@type": "QuantitativeValue",
            "maxValue": 2
          },
          "amenityFeature": [
            "Free WiFi",
            "Room Service",
            "Daily Housekeeping",
            "City View"
          ]
        },
        "price": "2500",
        "priceCurrency": "PKR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "HotelRoom",
          "name": "AC Room Deluxe",
          "description": "Premium AC room with luxury amenities and panoramic views",
          "occupancy": {
            "@type": "QuantitativeValue",
            "maxValue": 3
          },
          "amenityFeature": [
            "Free WiFi",
         
            "Room Service",
            "Daily Housekeeping",
            "City View",
            "Balcony"
          ]
        },
        "price": "3500",
        "priceCurrency": "PKR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "HotelRoom",
          "name": "Family Suite",
          "description": "Luxurious family suite with multiple bedrooms and premium amenities",
          "occupancy": {
            "@type": "QuantitativeValue",
            "maxValue": 6
          },
          "amenityFeature": [
            "Free WiFi",
            "Air Conditioning",
           
            "Room Service",
            "Daily Housekeeping",
            "City View",
            "Balcony",
          
          ]
        },
        "price": "5000",
        "priceCurrency": "PKR"
      }
    ]
  }
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.hotelmehran.com/#business",
  "name": "Mehran Hotel",
  "description": "7-star luxury hotel in Peshawar offering premium accommodations and world-class service",
  "url": "https://www.hotelmehran.com",
  "telephone": "0300-5819858",
  "email": "info@hotelmehran.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cinema Road, Kabley Bazar",
    "addressLocality": "Peshawar",
    "addressRegion": "Khyber Pakhtunkhwa",
    "postalCode": "25000",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.0151",
    "longitude": "71.5805"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "Rs 1,600-5,000",
  "image": "https://www.hotelmehran.com/og-image.jpg",
  "logo": "https://www.hotelmehran.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/hotelmehran",
    "https://www.instagram.com/hotelmehran",
    "https://www.twitter.com/hotelmehran"
  ]
});

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mehran Hotel",
  "url": "https://www.hotelmehran.com",
  "logo": "https://www.hotelmehran.com/logo.png",
  "description": "7-star luxury hotel in Peshawar, Pakistan, offering premium accommodations and world-class hospitality services",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cinema Road, Kabley Bazar",
    "addressLocality": "Peshawar",
    "addressRegion": "Khyber Pakhtunkhwa",
    "postalCode": "25000",
    "addressCountry": "PK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "0300-5819858",
    "contactType": "customer service",
    "email": "info@hotelmehran.com",
    "availableLanguage": ["English", "Urdu", "Pashto"]
  },
  "sameAs": [
    "https://www.facebook.com/hotelmehran",
    "https://www.instagram.com/hotelmehran",
    "https://www.twitter.com/hotelmehran"
  ]
});

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mehran Hotel",
  "url": "https://www.hotelmehran.com",
  "description": "Official website of Mehran Hotel - 7-star luxury accommodation in Peshawar, Pakistan",
  "publisher": {
    "@type": "Organization",
    "name": "Mehran Hotel",
    "logo": "https://www.hotelmehran.com/logo.png"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.hotelmehran.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});
