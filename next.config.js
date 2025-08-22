/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: `default-src 'self'; base-uri 'self'; img-src 'self' data: blob:; media-src 'self' data: blob:; connect-src 'self' https:; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self' data:; frame-ancestors 'self'; ` },
        ],
      },
    ]
  },
}
module.exports = nextConfig;
