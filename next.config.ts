import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@bangdb/web-sdk"],
  experimental: {
    turbopackAdditionalRoots: {
      bangdbWebSdk: {
        path: path.resolve(process.cwd(), "../../web-sdk"),
      },
    },
  },
};

export default nextConfig;
