import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FinalCTASection from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Contact Us - Bedrock Innovations",
  description: "Get in touch with Bedrock Innovations. Request a free demo of our custom AI solutions for landscaping, construction, and field services.",
  metadataBase: new URL("https://bedrock-innovations.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bedrock-innovations.com/contact",
    siteName: "Bedrock Innovations",
    title: "Contact Us - Bedrock Innovations",
    description: "Get in touch with Bedrock Innovations. Request a free demo of our custom AI solutions for landscaping, construction, and field services.",
    images: [
      {
        url: "/og-image.png",
        width: 1280,
        height: 720,
        alt: "Contact Bedrock Innovations",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Bedrock Innovations",
    description: "Get in touch with Bedrock Innovations. Request a free demo of our custom AI solutions for landscaping, construction, and field services.",
    images: ["/og-image.png"],
    creator: "@bedrockinnovations",
    site: "@bedrockinnovations",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <FinalCTASection />
      </main>
    </div>
  );
}
