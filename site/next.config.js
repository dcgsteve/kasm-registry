/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'DevCloudGuru Kasm Registry',
    description: 'A public repo for my specific Kasm use cases',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/dcgsteve/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
