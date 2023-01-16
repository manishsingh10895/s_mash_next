const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined,
  },
  images: {
    domains: ['s3-us-west-2.amazonaws.com', 's3.us-west-2.amazonaws.com', 'images.unsplash.com'],
  },
  experimental: {
    outputStandalone: true
  }
});

module.exports = nextConfig