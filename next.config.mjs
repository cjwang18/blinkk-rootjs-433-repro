/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    // By default, Next (and Webpack) will try to bundle all dependencies used inside Server
    // Components. However, certain dependencies use Node.js specific features, which Webpack will
    // not understand, causing compile time errors. This option tells Next (and Webpack) to not
    // bundle these dependencies, and instead use native Node.js' `require` to load them in.
    // https://github.com/blinkk/rootjs/issues/426
    serverComponentsExternalPackages: ['@blinkk/root', '@blinkk/root-cms'],
  },
};

export default nextConfig;
