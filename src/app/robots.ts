import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider', 'YandexBot'],
        allow: '/',
      },
      {
        userAgent: ['AhrefsBot', 'MJ12bot', 'DotBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://bedrockinnov.com/api/sitemap',
  }
}
