import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server build, used by the Dockerfile.
  output: "standalone",
};

export default nextConfig;
