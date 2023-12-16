import path from "path";
import glob from "fast-glob";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pagesDir = path.resolve("./app");

  const files = glob.sync("**/page.md", { cwd: pagesDir });

  return files.map((file) => ({
    url: `https://rafty.rhinobase.io${
      file === "page.md" ? "/" : `/${file.replace(/\/page\.md$/, "")}`
    }`,
  }));
}
