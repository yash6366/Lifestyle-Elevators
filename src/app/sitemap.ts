import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const routes = [
    '',
    '/about',
    '/products',
    '/services',
    '/brochure',
    '/contact',
    '/quote',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1.0
        : route === '/products' || route === '/quote'
          ? 0.9
          : route === '/privacy' || route === '/terms'
            ? 0.5
            : 0.8,
  }));
}
