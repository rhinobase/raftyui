import withMarkdoc from "@markdoc/next.js";
import withSearch from "./markdoc/search.mjs";

export default withSearch(
  withMarkdoc({ schemaPath: "./markdoc" })({
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
      optimizePackageImports: ["@rafty/ui", "@rafty/corp"],
    },
    poweredByHeader: false,
  }),
);
