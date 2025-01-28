import withMarkdoc from "@markdoc/next.js";
import withSearch from "./markdoc/search.mjs";

export default withSearch(
  withMarkdoc({ schemaPath: "./markdoc" })({
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
  }),
);
