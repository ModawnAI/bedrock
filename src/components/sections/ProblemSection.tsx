"use client"

import { Workflow, TrendingDown, PackageX, Hourglass } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ProblemSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {t("problems.title")}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 rounded-lg hover:bg-muted/20 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-secondary/20 transition-colors">
              <Workflow className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">{t("problems.items.workflows.title")}</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {t("problems.items.workflows.description")}
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg hover:bg-muted/20 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-secondary/20 transition-colors">
              <TrendingDown className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">{t("problems.items.costs.title")}</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {t("problems.items.costs.description")}
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg hover:bg-muted/20 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-secondary/20 transition-colors">
              <PackageX className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">{t("problems.items.innovation.title")}</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {t("problems.items.innovation.description")}
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg hover:bg-muted/20 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-secondary/20 transition-colors">
              <Hourglass className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">{t("problems.items.time.title")}</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {t("problems.items.time.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}