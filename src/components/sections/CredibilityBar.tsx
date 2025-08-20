"use client"

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export default function CredibilityBar() {
  const { t } = useLanguage();
  return (
    <section className="py-12 sm:py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-muted-foreground">
          {t("credibility.title")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 items-center" role="list" aria-label="Companies where our team has experience">
          {/* Individual company logos - larger size without borders */}
          <div className="flex items-center justify-center" role="listitem" aria-label="Bain & Company logo">
            <Image
              src="/logo/bain.svg"
              alt="Bain & Company"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
          </div>
          <div className="flex items-center justify-center" role="listitem" aria-label="Salesforce logo">
            <Image
              src="/logo/salesforce.svg"
              alt="Salesforce"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
          </div>
          <div className="flex items-center justify-center" role="listitem" aria-label="Princeton logo">
            <Image
              src="/logo/princeton.svg"
              alt="Princeton"
              width={650}
              height={260}
              className="h-44 w-auto"
            />
          </div>
          <div className="flex items-center justify-center" role="listitem" aria-label="Wharton logo">
            <Image
              src="/logo/wharton.svg"
              alt="Wharton"
              width={600}
              height={240}
              className="h-42 w-auto"
            />
          </div>
          <div className="flex items-center justify-center" role="listitem" aria-label="Stanford logo">
            <Image
              src="/logo/stanford.svg"
              alt="Stanford"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
          </div>
          <div className="flex items-center justify-center" role="listitem" aria-label="Porsche logo">
            <Image
              src="/logo/porsche.svg"
              alt="Porsche"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}