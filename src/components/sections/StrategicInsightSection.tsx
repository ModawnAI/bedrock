"use client"

import { Brain, Zap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function StrategicInsightSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Brain className="text-primary w-8 h-8" />
            </div>
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Zap className="text-secondary w-8 h-8" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {t("strategicInsight.title")}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t("strategicInsight.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Strategic Insight */}
          <div className="text-center md:text-left">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-6">
              <Brain className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{t("strategicInsight.insight.title")}</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              {t("strategicInsight.insight.description")}
            </p>
            <ul className="text-muted-foreground text-sm sm:text-base space-y-2 text-left">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>{t("strategicInsight.insight.points.0")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>{t("strategicInsight.insight.points.1")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>{t("strategicInsight.insight.points.2")}</span>
              </li>
            </ul>
          </div>

          {/* Relentless Execution */}
          <div className="text-center md:text-left">
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-6">
              <Zap className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{t("strategicInsight.execution.title")}</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              {t("strategicInsight.execution.description")}
            </p>
            <ul className="text-muted-foreground text-sm sm:text-base space-y-2 text-left">
              <li className="flex items-start">
                <span className="text-secondary mr-2 mt-1">•</span>
                <span>{t("strategicInsight.execution.points.0")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 mt-1">•</span>
                <span>{t("strategicInsight.execution.points.1")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 mt-1">•</span>
                <span>{t("strategicInsight.execution.points.2")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="text-primary w-6 h-6 mr-2" />
            <span className="text-sm sm:text-base font-semibold text-primary">{t("strategicInsight.result.label")}</span>
          </div>
          <p className="text-lg sm:text-xl font-medium text-foreground max-w-3xl mx-auto">
            {t("strategicInsight.result.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
