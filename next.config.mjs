/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'scontent.cdninstagram.com' },
      { protocol: 'https', hostname: 'instagram.f*' }
    ]
  }
};
export default nextConfig;
