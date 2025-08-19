import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import CredibilityBar from "@/components/sections/CredibilityBar";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Bedrock Innovations - Custom AI Solutions for Service Industries",
  description: "We build custom, end-to-end AI solutions for service industry leaders in landscaping, construction, and field services who are tired of clunky, overpriced systems that aren't innovating fast enough.",
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
  metadataBase: new URL("https://bedrocklanding.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bedrocklanding.vercel.app",
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
    creator: "@bedrockinnov",
    site: "@bedrockinnov",
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
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <CaseStudiesSection />
        <TeamSection />
        <TestimonialSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </div>
  );
}
