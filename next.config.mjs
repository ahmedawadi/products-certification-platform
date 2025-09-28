/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_DOMAIN: process.env.API_DOMAIN || 'https://api.example.com',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
