/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/github-actions-test',
  assetPrefix: '/github-actions-test/',
  trailingSlash: true,
  // skipTrailingSlashRedirect: true,
  // reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
