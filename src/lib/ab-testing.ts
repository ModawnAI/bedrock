import { useEffect, useState } from 'react';

// A/B Test Configuration
export const AB_TEST_CONFIG = {
  variants: {
    A: {
      primaryButton: "Request My Free Demo",
      secondaryButton: "Watch Demo Video"
    },
    B: {
      primaryButton: "Get Your Custom AI Demo",
      secondaryButton: "See How It Works"
    }
  }
};

// Hook to get the current A/B test variant
export function useABTestVariant() {
  const [variant, setVariant] = useState<'A' | 'B'>('A');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get variant from cookie (set by middleware)
    const getCookie = (name: string): string | null => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop()?.split(';').shift() || null;
      }
      return null;
    };

    const variantFromCookie = getCookie('cta-variant') as 'A' | 'B' | null;
    
    if (variantFromCookie && (variantFromCookie === 'A' || variantFromCookie === 'B')) {
      setVariant(variantFromCookie);
    } else {
      // Fallback to variant A if no cookie is found
      setVariant('A');
    }
    
    setIsLoading(false);
  }, []);

  return { variant, isLoading };
}

// Analytics tracking functions
export function trackCTAView(variant: 'A' | 'B') {
  // Track when a user sees a CTA variant
  if (typeof window !== 'undefined') {
    // Send to analytics service (e.g., Google Analytics, Mixpanel, etc.)
    console.log(`CTA View - Variant ${variant}`);
    
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cta_view', {
        variant: variant,
        event_category: 'ab_test',
        event_label: `cta_variant_${variant}`
      });
    }
    
    // Example: Custom analytics endpoint (optional)
    // Only attempt to track if the endpoint exists
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'cta_view',
          variant: variant,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(error => {
        // Silently fail in production, log in development
        if (process.env.NODE_ENV === 'development') {
          console.warn('Analytics endpoint not available:', error);
        }
      });
    }
  }
}

export function trackCTAClick(variant: 'A' | 'B', buttonType: 'primary' | 'secondary') {
  // Track when a user clicks on a CTA button
  if (typeof window !== 'undefined') {
    console.log(`CTA Click - Variant ${variant}, Button: ${buttonType}`);
    
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cta_click', {
        variant: variant,
        button_type: buttonType,
        event_category: 'ab_test',
        event_label: `cta_variant_${variant}_${buttonType}`
      });
    }
    
    // Example: Custom analytics endpoint (optional)
    // Only attempt to track if the endpoint exists
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'cta_click',
          variant: variant,
          buttonType: buttonType,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(error => {
        // Silently fail in production, log in development
        if (process.env.NODE_ENV === 'development') {
          console.warn('Analytics endpoint not available:', error);
        }
      });
    }
  }
}

export function trackConversion(variant: 'A' | 'B', conversionType: 'form_submit' | 'demo_request') {
  // Track when a user converts (submits form, requests demo, etc.)
  if (typeof window !== 'undefined') {
    console.log(`Conversion - Variant ${variant}, Type: ${conversionType}`);
    
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        variant: variant,
        conversion_type: conversionType,
        event_category: 'ab_test',
        event_label: `conversion_variant_${variant}_${conversionType}`,
        value: 1
      });
    }
    
    // Example: Custom analytics endpoint (optional)
    // Only attempt to track if the endpoint exists
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'conversion',
          variant: variant,
          conversionType: conversionType,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(error => {
        // Silently fail in production, log in development
        if (process.env.NODE_ENV === 'development') {
          console.warn('Analytics endpoint not available:', error);
        }
      });
    }
  }
}

// Declare gtag for TypeScript
declare global {
  function gtag(...args: any[]): void;
}
