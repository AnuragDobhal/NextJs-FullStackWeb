/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    serverComponents: true, // changed 'appDir' to 'serverComponents'
    serverComponentsExternalPackages: ["mongoose"],
  },
  images:{
    domains: ['occ-0-3933-116.1.nflxso.net', 'images.unsplash.com', 'm.media-amazon.com','images.remotePatterns'],
  }
}

module.exports = nextConfig;
