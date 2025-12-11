/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {}, // enable turbopack explicitly

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
