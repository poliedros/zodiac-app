/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['ramoss.czar.dev'],
  },
}

module.exports = nextConfig
