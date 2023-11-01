/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fsw-store.s3.sa-east-1.amazonaws.com"],
  },
  experimental: {
    serverActions: true,
  },
  async rewrites() {
    return [
      {
        source: "/Catalog", // A rota com "C" maiúsculo
        destination: "/catalog", // A rota com "C" minúsculo
      },
    ];
  },
};

module.exports = nextConfig;
