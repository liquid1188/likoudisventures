import type { MetadataRoute } from 'next';

// Pre-launch: block all crawlers. Remove when the site is ready to be indexed.
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: '*', disallow: '/' }] };
}
