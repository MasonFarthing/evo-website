/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeholder.svg'],
    // Disable on-the-fly image optimization while developing to save CPU
    unoptimized: process.env.NODE_ENV === "development",
  },
  // Reduce filesystem watcher load on Windows
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      ...(config.watchOptions ?? {}),
      // Ignore heavy or unnecessary paths
      ignored: ["**/node_modules/**", "**/.git/**", "**/.next/**"],
    };
    return config;
  },
}

module.exports = nextConfig 