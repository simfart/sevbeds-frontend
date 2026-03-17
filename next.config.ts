import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  // опционально: если бэкенд на другом порту
  // async rewrites() {
  //   return [{ source: '/api/:path*', destination: 'http://localhost:3001/api/:path*' }];
  // },
};

export default nextConfig;
