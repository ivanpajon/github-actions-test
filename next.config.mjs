/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/github-actions-test',
  // assetPrefix: 'https://ivanpajon.github.io/github-actions-test/',
  // trailingSlash: true,
  // reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
