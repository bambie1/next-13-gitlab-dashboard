/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["git.fullscript.io"],
  },
};

module.exports = nextConfig;
