// Accounts live in the app (see lib/links.ts). This site used to have its own
// sign-in and waitlist pages; their addresses now lead to the app's.
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.use-evo.com"

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/signin", destination: `${APP_URL}/sign-in`, permanent: false },
      { source: "/signup", destination: `${APP_URL}/sign-up`, permanent: false },
    ]
  },
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