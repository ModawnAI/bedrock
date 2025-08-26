"use client"

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, Language, languageCodes, languageNames } from "@/lib/i18n";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { href: "/", label: t("navigation.home") },
    { href: "/team", label: t("navigation.team") },
    // { href: "/case-studies", label: t("navigation.caseStudies") }, // Hidden until we have real case studies
    { href: "/faq", label: t("navigation.faq") },
    { href: "/contact", label: t("navigation.contact") },
  ];

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-background/80 backdrop-blur-sm border-b border-border/50"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Bedrock Innovations - Go to homepage"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src="/logo.svg"
                alt="Bedrock Innovations"
                width={240}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 font-semibold ${
                  pathname === link.href 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label={`Navigate to ${link.label} page`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-expanded={isLanguageDropdownOpen}
                aria-label="Select language"
              >
                <span className="text-lg">{languageFlags[language]}</span>
                <span className="text-sm font-medium">{languageNames[language]}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50">
                  {(Object.keys(languageCodes) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-muted transition-colors ${
                        language === lang ? "bg-muted text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <span className="text-xs font-bold bg-muted px-2 py-1 rounded">{languageCodes[lang]}</span>
                      <span className="text-sm font-medium">{languageNames[lang]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-200 px-4 py-2 rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-semibold ${
                    pathname === link.href 
                      ? "text-foreground bg-muted" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={`Navigate to ${link.label} page`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="px-4 py-2 border-t border-border/50 mt-2 pt-4">
                <div className="text-sm font-medium text-muted-foreground mb-2">Language</div>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.keys(languageCodes) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        handleLanguageChange(lang);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex flex-col items-center space-y-1 p-2 rounded-md transition-colors ${
                        language === lang 
                          ? "bg-muted text-foreground border-2 border-primary" 
                          : "hover:bg-muted text-muted-foreground"
                      }`}
                    >
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        language === lang 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-foreground"
                      }`}>{languageCodes[lang]}</span>
                      <span className="text-xs font-medium">{languageNames[lang]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
