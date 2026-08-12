import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.11.2'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },

};


export default nextConfig;