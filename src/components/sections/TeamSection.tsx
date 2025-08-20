"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export default function TeamSection() {
  const { t } = useLanguage();
  
  return (
    <section id="our-team" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            {t("team.title")}
          </h2>
          
          <p className="text-base sm:text-lg text-center text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t("team.subtitle")}
          </p>
        </div>
        
        <div className="space-y-12 max-w-6xl mx-auto">
          {/* Chris Peeler */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 relative">
                    <Image
                      src="/aboutus/Chris.jpeg"
                      alt="Chris Peeler"
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 1024px) 160px, 192px"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-3">{t("team.members.chris.name")}</h3>
                  <p className="text-base lg:text-lg text-muted-foreground mb-6 font-medium">
                    {t("team.members.chris.experience")}
                  </p>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                    {t("team.members.chris.description")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Paul Mewes */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 relative">
                    <Image
                      src="/aboutus/Paul.jpg"
                      alt="Paul Mewes"
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 1024px) 160px, 192px"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-3">{t("team.members.paul.name")}</h3>
                  <p className="text-base lg:text-lg text-muted-foreground mb-6 font-medium">
                    {t("team.members.paul.experience")}
                  </p>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                    {t("team.members.paul.description")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* KJ Yoo */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 relative">
                    <Image
                      src="/aboutus/KJ.jpg"
                      alt="KJ Yoo"
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 1024px) 160px, 192px"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-3">{t("team.members.kj.name")}</h3>
                  <p className="text-base lg:text-lg text-muted-foreground mb-6 font-medium">
                    {t("team.members.kj.experience")}
                  </p>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                    {t("team.members.kj.description")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}