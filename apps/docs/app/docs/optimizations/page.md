---
title: Optimizations
nextjs:
  metadata:
    title: Optimizations
    description: This guide will cover the optimizations you can leverage to enhance your application experience.
    twitter:
      title: Optimizations
      images:
        url: https://rafty.rhinobase.io/api/og?title=Optimizations
    openGraph:
      title: Optimizations
      images:
        url: https://rafty.rhinobase.io/api/og?title=Optimizations
---

This guide delves into optimization strategies designed to elevate your application's performance and user experience.

## Next.js

In Next.js, optimizing the library usage is crucial for enhancing performance. One effective way is through the `optimizePackageImports` feature within the `experimental` configuration. By specifying particular packages like `@rafty/ui` in the optimizePackageImports array, Next.js optimizes these imports during the build process. This optimization involves _tree shaking_ and _code splitting_, ensuring only necessary components are loaded, reducing bundle size, and improving overall page loading times.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@rafty/ui"],
  },
};

module.exports = nextConfig;
```
