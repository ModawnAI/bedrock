"use client"

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#solutions", label: "Solutions" },
    { href: "#why-us", label: "Why Us" },
    { href: "#our-team", label: "Our Team" },
    { href: "#contact", label: "Contact" },
  ];

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
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Bedrock Innovations - Go to top"
            >
              <Image
                src="/logo.svg"
                alt="Bedrock Innovations"
                width={240}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 font-semibold"
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
              </a>
            ))}
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
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-4 py-2 rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-semibold"
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}