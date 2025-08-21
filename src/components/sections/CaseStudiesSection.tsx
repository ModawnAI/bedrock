"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mic, Package, Users, Search, Zap, TrendingUp, AlertTriangle, Lightbulb, Target } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function CaseStudiesSection() {
  const { t } = useLanguage();
  
  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Zap className="text-primary w-8 h-8" />
            </div>
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-secondary w-8 h-8" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {t("caseStudies.title")}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("caseStudies.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Case Study 1: Voice-to-Proposal */}
          <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Mic className="text-primary w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg sm:text-xl">{t("caseStudies.items.landscaping.title")}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">{t("caseStudies.items.landscaping.industry")}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="text-destructive w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">{t("caseStudies.items.landscaping.challenge.title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("caseStudies.items.landscaping.challenge.description")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">{t("caseStudies.items.landscaping.solution.title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("caseStudies.items.landscaping.solution.description")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="text-secondary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">{t("caseStudies.items.landscaping.result.title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("caseStudies.items.landscaping.result.description")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Case Study 2: Automated Materials Tracking */}
          <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <Package className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg sm:text-xl">{t("caseStudies.items.construction.title")}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">{t("caseStudies.items.construction.industry")}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="text-destructive w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">{t("caseStudies.items.construction.challenge.title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("caseStudies.items.construction.challenge.description")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">{t("caseStudies.items.construction.solution.title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("caseStudies.items.construction.solution.description")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="text-secondary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">{t("caseStudies.items.construction.result.title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("caseStudies.items.construction.result.description")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 3: AI Sales Development Rep */}
          <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Users className="text-primary w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg sm:text-xl">{t("caseStudies.items.hvac.title")}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">{t("caseStudies.items.hvac.industry")}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="text-destructive w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">{t("caseStudies.items.hvac.challenge.title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("caseStudies.items.hvac.challenge.description")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">{t("caseStudies.items.hvac.solution.title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("caseStudies.items.hvac.solution.description")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="text-secondary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">{t("caseStudies.items.hvac.result.title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("caseStudies.items.hvac.result.description")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 4: Customized Client Discovery Tools */}
          <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <Search className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg sm:text-xl">{t("caseStudies.items.cleaning.title")}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">{t("caseStudies.items.cleaning.industry")}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="text-destructive w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">{t("caseStudies.items.cleaning.challenge.title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("caseStudies.items.cleaning.challenge.description")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">{t("caseStudies.items.cleaning.solution.title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("caseStudies.items.cleaning.solution.description")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="text-secondary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">{t("caseStudies.items.cleaning.result.title")}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {t("caseStudies.items.cleaning.result.description")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}