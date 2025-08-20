import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import TeamSection from "@/components/sections/TeamSection";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata('team');

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
