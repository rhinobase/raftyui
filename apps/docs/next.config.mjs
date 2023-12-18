import withMarkdoc from "@markdoc/next.js";
import { composePlugins, withNx } from "@nx/next";

import withSearch from "./markdoc/search.mjs";

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  pageExtensions: ["js", "jsx", "md", "ts", "tsx"],
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "api.producthunt.com" },
    ],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: ["@rafty/ui"],
  },
  poweredByHeader: false,
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withSearch,
  withMarkdoc({ schemaPath: "./markdoc" }),
  withNx,
];

export default composePlugins(...plugins)(nextConfig);
