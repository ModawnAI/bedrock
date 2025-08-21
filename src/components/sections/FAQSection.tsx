"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/lib/i18n";

export default function FAQSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {t("faq.title")}
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
            <AccordionItem value="implementation-time" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                {t("faq.items.implementation.question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("faq.items.implementation.answer")}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="data-security" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                {t("faq.items.data.question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("faq.items.data.answer")}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="pricing" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                {t("faq.items.pricing.question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("faq.items.pricing.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="industries" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                {t("faq.items.industries.question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("faq.items.industries.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="team-expertise" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                {t("faq.items.team.question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("faq.items.team.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ai-technology" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                {t("faq.items.technology.question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("faq.items.technology.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="integration" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                {t("faq.items.integration.question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("faq.items.integration.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                {t("faq.items.support.question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("faq.items.support.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="demo-process" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                {t("faq.items.demo.question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("faq.items.demo.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="roi-timeline" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                {t("faq.items.roi.question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("faq.items.roi.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="maintenance" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                {t("faq.items.maintenance.question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("faq.items.maintenance.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="scalability" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                {t("faq.items.scalability.question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t("faq.items.scalability.answer")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}