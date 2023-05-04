/** @type {import('next').NextConfig} */
const withMarkdoc = require("@markdoc/next.js");

const nextConfig = withMarkdoc()({
  reactStrictMode: true,
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
});

module.exports = nextConfig;
