import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FAQSection from "@/components/sections/FAQSection";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata('faq');

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
