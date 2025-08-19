"use client"

import { Button } from "@/components/ui/button";
import { useABTestVariant, AB_TEST_CONFIG, trackCTAView, trackCTAClick } from "@/lib/ab-testing";
import { useEffect } from "react";

export default function HeroSection() {
  const { variant, isLoading } = useABTestVariant();

  useEffect(() => {
    if (!isLoading) {
      trackCTAView(variant);
    }
  }, [variant, isLoading]);

  const handlePrimaryClick = () => {
    trackCTAClick(variant, 'primary');
    // Navigate to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 text-foreground pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Stop Fighting Outdated Software. Start Building Your Future.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-muted-foreground leading-relaxed">
            We build custom, end-to-end AI solutions for service industry leaders in landscaping, construction, and field services who are tired of clunky, overpriced systems that aren&apos;t innovating fast enough.
          </p>
          <div className="flex justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg px-8 py-4 h-auto shadow-lg"
              aria-label="Request a free demo of our custom AI solutions"
              onClick={handlePrimaryClick}
            >
              {isLoading ? "Request My Free Demo" : AB_TEST_CONFIG.variants[variant].primaryButton}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}