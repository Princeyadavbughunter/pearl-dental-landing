import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // This project sits inside the Pearl Dental folder, which has its own
  // lockfile — pin the root so Turbopack does not infer the parent directory.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
