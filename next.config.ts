import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.sanity.io", "anytxn.com"], // Allow images from Sanity
  },
};

export default nextConfig;
