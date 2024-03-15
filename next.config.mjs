/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/github-actions-test',
  assetPrefix: '/github-actions-test/',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
