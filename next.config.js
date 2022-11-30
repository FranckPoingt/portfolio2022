/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    XATA_API_KEY: process.env.XATA_API_KEY,
  },
};

module.exports = nextConfig;
