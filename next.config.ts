import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["gsap"],
  webpack(config, { webpack }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        __NEXT_PRIVATE_MINIMIZE_MACRO_FALSE: JSON.stringify(false),
      })
    );
    return config;
  },
};

export default nextConfig;
