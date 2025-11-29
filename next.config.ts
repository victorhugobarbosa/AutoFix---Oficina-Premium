import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/AutoFix---Oficina-Premium",
  reactCompiler: true,
};

export default nextConfig;
