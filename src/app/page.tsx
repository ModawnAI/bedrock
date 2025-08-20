import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import CredibilityBar from "@/components/sections/CredibilityBar";
import StrategicInsightSection from "@/components/sections/StrategicInsightSection";
import ProblemSection from "@/components/sections/ProblemSection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Bedrock Innovations - Custom AI Solutions for Service Industries",
  description: "We design custom, easy-to-use AI tools for leaders in landscaping, construction, and field services that help them cut costs, save time, and smooth operations.",
  keywords: [
    "AI solutions",
    "custom software",
    "landscaping software",
    "construction software", 
    "field services",
    "business automation",
    "AI development",
    "service industry technology",
    "custom AI tools",
    "operational efficiency"
  ],
  authors: [{ name: "Bedrock Innovations Team" }],
  creator: "Bedrock Innovations",
  publisher: "Bedrock Innovations",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bedrock-innovations.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bedrock-innovations.com",
    siteName: "Bedrock Innovations",
    title: "Bedrock Innovations - Custom AI Solutions for Service Industries",
    description: "We build custom, end-to-end AI solutions for service industry leaders in landscaping, construction, and field services who are tired of clunky, overpriced systems that aren't innovating fast enough.",
    images: [
      {
        url: "/og-image.png",
        width: 1280,
        height: 720,
        alt: "Bedrock Innovations - Custom AI Solutions for Service Industries",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedrock Innovations - Custom AI Solutions for Service Industries",
    description: "We build custom, end-to-end AI solutions for service industry leaders in landscaping, construction, and field services who are tired of clunky, overpriced systems that aren't innovating fast enough.",
    images: ["/og-image.png"],
    creator: "@bedrockinnovations",
    site: "@bedrockinnovations",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    yandex: "your-yandex-verification-code", // Replace with actual verification code
    yahoo: "your-yahoo-verification-code", // Replace with actual verification code
  },
  category: "technology",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <Navigation />
      
      <main>
        <HeroSection />
        <CredibilityBar />
        <StrategicInsightSection />
        <ProblemSection />
      </main>
    </div>
  );
}
