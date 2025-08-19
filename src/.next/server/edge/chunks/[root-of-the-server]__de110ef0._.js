(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__de110ef0._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "config": ()=>config,
    "middleware": ()=>middleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
// Dynamically import edge-config only when available
async function getEdgeConfig(key) {
    try {
        const { get } = await Promise.resolve().then(()=>__turbopack_context__.i("[project]/node_modules/@vercel/edge-config/dist/index.js [middleware-edge] (ecmascript)"));
        return await get(key);
    } catch (error) {
        // Edge config not available (e.g., in development)
        return null;
    }
}
async function middleware(request) {
    // Only run A/B testing on the home page
    if (request.nextUrl.pathname !== '/') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
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
                maxAge: 30 * 24 * 60 * 60,
                httpOnly: false,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'lax'
            });
            response.headers.set('x-cta-variant', 'A');
            return response;
        }
        const config = abTestConfig;
        if (!config.enabled) {
            // A/B testing is disabled, use variant A
            response.cookies.set('cta-variant', 'A', {
                maxAge: 30 * 24 * 60 * 60,
                httpOnly: false,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'lax'
            });
            response.headers.set('x-cta-variant', 'A');
            return response;
        }
        // Calculate which variant to assign based on weights
        const variants = Object.entries(config.variants);
        const totalWeight = variants.reduce((sum, [, variant])=>sum + variant.weight, 0);
        const random = Math.random() * totalWeight;
        let cumulativeWeight = 0;
        let selectedVariant = 'A'; // Default fallback
        for (const [variantKey, variant] of variants){
            cumulativeWeight += variant.weight;
            if (random <= cumulativeWeight) {
                selectedVariant = variantKey;
                break;
            }
        }
        // Set the variant cookie and header
        response.cookies.set('cta-variant', selectedVariant, {
            maxAge: 30 * 24 * 60 * 60,
            httpOnly: false,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
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
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            sameSite: 'lax'
        });
        response.headers.set('x-cta-variant', 'A');
        return response;
    }
}
const config = {
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */ '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)'
    ]
};
}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__de110ef0._.js.map