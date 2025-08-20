export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bedrock Innovations",
    "description": "We design custom, easy-to-use AI tools for leaders in landscaping, construction, and field services that help them cut costs, save time, and smooth operations.",
    "url": "https://bedrock-innovations.com",
    "logo": "https://bedrock-innovations.com/og-image.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "team@bedrock-innovations.com"
    },
    "sameAs": [
      "https://twitter.com/bedrockinnovations",
      "https://linkedin.com/company/bedrock-innovations"
    ],
    "foundingDate": "2024",
    "industry": "Software Development",
    "serviceArea": {
      "@type": "Place",
      "name": "United States"
    },
    "services": [
      {
        "@type": "Service",
        "name": "Custom AI Solutions",
        "description": "End-to-end AI solutions for service industries"
      },
      {
        "@type": "Service", 
        "name": "Business Process Automation",
        "description": "Automated workflows and operational efficiency tools"
      },
      {
        "@type": "Service",
        "name": "Software Development",
        "description": "Custom software solutions for landscaping, construction, and field services"
      }
    ],
    "offers": {
      "@type": "Offer",
      "name": "Free Demo",
      "description": "Free custom demo of AI solutions tailored to your business needs",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
