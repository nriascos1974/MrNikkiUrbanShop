/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', "picsum.photos", "raw.githubusercontent.com", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
        pathname: '/image',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/id/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '3000',
        pathname: '/pactopf/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/CodeFusionPF/**',
      },
    ],
  },
}

module.exports = nextConfig
