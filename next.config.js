/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    images:{
      domains: ['occ-0-3933-116.1.nflxso.net', 'images.unsplash.com','m.media-amazon.com'],
    }
  }
  
  module.exports = nextConfig




