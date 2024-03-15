/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  basePath: '/github-actions-test',
  assetPrefix: '/github-actions-test/', // assetPrefix requires the trailing slash
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
