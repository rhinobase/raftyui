const { composePlugins, withNx } = require("@nx/next");
const withMarkdoc = require("@markdoc/next.js");

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = withMarkdoc()({
  reactStrictMode: true,
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
});

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
