import type { MetadataRoute } from 'next';
import { getConfig } from '@/lib/config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const config = getConfig();
  return config.navigation.map((item) => ({
    url: new URL(item.href, config.site.url).href,
    lastModified: '2026-11-07',
    changeFrequency: 'monthly',
    priority: item.target === 'about' ? 1 : 0.8,
  }));
}
