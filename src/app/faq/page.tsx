import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "FAQ - Bedrock Innovations",
  description: "Frequently asked questions about our custom AI solutions for landscaping, construction, and field services. Learn about implementation, pricing, support, and more.",
  metadataBase: new URL("https://bedrock-innovations.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bedrock-innovations.com/faq",
    siteName: "Bedrock Innovations",
    title: "FAQ - Bedrock Innovations",
    description: "Frequently asked questions about our custom AI solutions for landscaping, construction, and field services. Learn about implementation, pricing, support, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1280,
        height: 720,
        alt: "Bedrock Innovations FAQ",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Bedrock Innovations",
    description: "Frequently asked questions about our custom AI solutions for landscaping, construction, and field services. Learn about implementation, pricing, support, and more.",
    images: ["/og-image.png"],
    creator: "@bedrockinnovations",
    site: "@bedrockinnovations",
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <FAQSection />
      </main>
    </div>
  );
}
