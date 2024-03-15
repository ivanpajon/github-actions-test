/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/github-actions-test',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
