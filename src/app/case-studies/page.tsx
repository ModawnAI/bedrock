import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata('caseStudies', 'en', '/case-studies');

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
