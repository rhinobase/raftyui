import { MetadataRoute } from "next";
import path from "path";
import glob from "fast-glob";

export default function sitemap(): MetadataRoute.Sitemap {
  const pagesDir = path.resolve("./app");

  const files = glob.sync("**/page.md", { cwd: pagesDir });

  return files.map((file) => ({
    url: file === "page.md" ? "/" : `/${file.replace(/\/page\.md$/, "")}`,
  }));
}
