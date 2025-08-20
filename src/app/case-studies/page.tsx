import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";

export const metadata: Metadata = {
  title: "Case Studies - Bedrock Innovations",
  description: "See real AI solutions that transformed real businesses. Discover how we've helped landscaping, construction, and field service companies cut costs, save time, and smooth operations.",
  metadataBase: new URL("https://bedrock-innovations.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bedrock-innovations.com/case-studies",
    siteName: "Bedrock Innovations",
    title: "Case Studies - Bedrock Innovations",
    description: "See real AI solutions that transformed real businesses. Discover how we've helped landscaping, construction, and field service companies cut costs, save time, and smooth operations.",
    images: [
      {
        url: "/og-image.png",
        width: 1280,
        height: 720,
        alt: "Bedrock Innovations Case Studies",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - Bedrock Innovations",
    description: "See real AI solutions that transformed real businesses. Discover how we've helped landscaping, construction, and field service companies cut costs, save time, and smooth operations.",
    images: ["/og-image.png"],
    creator: "@bedrockinnovations",
    site: "@bedrockinnovations",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <CaseStudiesSection />
      </main>
    </div>
  );
}
