"use client"

import { Button } from "@/components/ui/button";
import { useABTestVariant, AB_TEST_CONFIG, trackCTAView, trackCTAClick } from "@/lib/ab-testing";
import { useEffect } from "react";
import { Trees, HardHat, Wrench } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function HeroSection() {
  const { variant, isLoading } = useABTestVariant();
  const { t } = useLanguage();

  useEffect(() => {
    if (!isLoading) {
      trackCTAView(variant);
    }
  }, [variant, isLoading]);

  const handlePrimaryClick = () => {
    trackCTAClick(variant, 'primary');
    // Navigate to contact page
    window.location.href = '/contact';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 text-foreground pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Service Industry Icons */}
          <div className="flex justify-center items-center gap-8 mb-8" aria-label="Service industries we serve">
            <div className="flex flex-col items-center gap-2">
              <Trees className="w-12 h-12 text-primary" aria-hidden="true" />
              <span className="text-sm text-muted-foreground font-medium">{t("hero.industries.landscaping")}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <HardHat className="w-12 h-12 text-primary" aria-hidden="true" />
              <span className="text-sm text-muted-foreground font-medium">{t("hero.industries.construction")}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Wrench className="w-12 h-12 text-primary" aria-hidden="true" />
              <span className="text-sm text-muted-foreground font-medium">{t("hero.industries.fieldServices")}</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            {t("hero.title")}
          </h1>
                            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-muted-foreground leading-relaxed">
                    {t("hero.subtitle")}
                  </p>
          <div className="flex justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg px-8 py-4 h-auto shadow-lg"
              aria-label="Request a free demo of our custom AI solutions"
              onClick={handlePrimaryClick}
            >
              {t("hero.ctaButton")}
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