import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata('contact');

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
