import type { MetadataRoute } from 'next';

// Pre-launch: block all crawlers. At launch, allow crawling and point to the sitemap:
//   return { rules: [{ userAgent: '*', allow: '/', disallow: '/admin/' }], sitemap: 'https://likoudisventures.com/sitemap.xml' };
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: '*', disallow: '/' }] };
}
