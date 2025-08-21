import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://highqualitydecor.com';
  return [
    { url: `${base}/`, changefreq: 'weekly', priority: 1.0 },
    { url: `${base}/services`, changefreq: 'weekly', priority: 0.9 },
    { url: `${base}/portfolio`, changefreq: 'weekly', priority: 0.8 },
    { url: `${base}/about`, changefreq: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, changefreq: 'monthly', priority: 0.8 },
  ];
}
