import { NextRequest, NextResponse } from 'next/server';

// Dynamically import edge-config only when available
async function getEdgeConfig(key: string) {
  try {
    const { get } = await import('@vercel/edge-config');
    return await get(key);
  } catch (error) {
    // Edge config not available (e.g., in development)
    return null;
  }
}

export async function middleware(request: NextRequest) {
  // Only run A/B testing on the home page
  if (request.nextUrl.pathname !== '/') {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  
  // Check if user already has a variant assigned
  const existingVariant = request.cookies.get('cta-variant');
  
  if (existingVariant) {
    // User already has a variant, continue with existing assignment
    response.headers.set('x-cta-variant', existingVariant.value);
    return response;
  }

  try {
    // Get A/B testing configuration from Vercel Edge Config
    const abTestConfig = await getEdgeConfig('cta-ab-test');
    
    if (!abTestConfig || typeof abTestConfig !== 'object') {
      // Fallback to variant A if config is not available
      response.cookies.set('cta-variant', 'A', {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        httpOnly: false, // Allow client-side access for analytics
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      });
      response.headers.set('x-cta-variant', 'A');
      return response;
    }

    const config = abTestConfig as {
      enabled: boolean;
      variants: { [key: string]: { weight: number; text: string } };
    };

    if (!config.enabled) {
      // A/B testing is disabled, use variant A
      response.cookies.set('cta-variant', 'A', {
        maxAge: 30 * 24 * 60 * 60,
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      });
      response.headers.set('x-cta-variant', 'A');
      return response;
    }

    // Calculate which variant to assign based on weights
    const variants = Object.entries(config.variants);
    const totalWeight = variants.reduce((sum, [, variant]) => sum + variant.weight, 0);
    const random = Math.random() * totalWeight;
    
    let cumulativeWeight = 0;
    let selectedVariant = 'A'; // Default fallback
    
    for (const [variantKey, variant] of variants) {
      cumulativeWeight += variant.weight;
      if (random <= cumulativeWeight) {
        selectedVariant = variantKey;
        break;
      }
    }

    // Set the variant cookie and header
    response.cookies.set('cta-variant', selectedVariant, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      httpOnly: false, // Allow client-side access for analytics
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    response.headers.set('x-cta-variant', selectedVariant);
    
    return response;
  } catch (error) {
    console.error('A/B testing middleware error:', error);
    
    // Fallback to variant A on error
    response.cookies.set('cta-variant', 'A', {
      maxAge: 30 * 24 * 60 * 60,
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    response.headers.set('x-cta-variant', 'A');
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
