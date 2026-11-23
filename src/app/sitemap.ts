import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { divisions } from '@/content/divisions';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/about', ...divisions.map((d) => `/divisions/${d.slug}`), '/collection', '/the-branch', '/contact'];
  return paths.map((p) => ({ url: `${site.url}${p === '/' ? '' : p}`, changeFrequency: 'monthly', priority: p === '/' ? 1 : 0.7 }));
}
