import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "Our Team - Bedrock Innovations",
  description: "Meet the team behind Bedrock Innovations. Strategic insight meets relentless execution with experience from Bain & Company, Salesforce, Princeton, Wharton, Stanford, and Porsche.",
  metadataBase: new URL("https://bedrock-innovations.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bedrock-innovations.com/team",
    siteName: "Bedrock Innovations",
    title: "Our Team - Bedrock Innovations",
    description: "Meet the team behind Bedrock Innovations. Strategic insight meets relentless execution with experience from Bain & Company, Salesforce, Princeton, Wharton, Stanford, and Porsche.",
    images: [
      {
        url: "/og-image.png",
        width: 1280,
        height: 720,
        alt: "Bedrock Innovations Team",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team - Bedrock Innovations",
    description: "Meet the team behind Bedrock Innovations. Strategic insight meets relentless execution with experience from Bain & Company, Salesforce, Princeton, Wharton, Stanford, and Porsche.",
    images: ["/og-image.png"],
    creator: "@bedrockinnovations",
    site: "@bedrockinnovations",
  },
};

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <TeamSection />
      </main>
    </div>
  );
}
