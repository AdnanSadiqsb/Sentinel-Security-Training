import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    unoptimized: true
  }
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
