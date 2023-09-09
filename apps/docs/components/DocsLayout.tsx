"use client";
import { type Node } from "@markdoc/markdoc";
import { DocsHeader } from "../components/DocsHeader";
import { PrevNextLinks } from "../components/PrevNextLinks";
import { Prose } from "../components/Prose";
import { TableOfContents } from "../components/TableOfContents";
import { collectSections } from "../lib/sections";

export function DocsLayout({
  children,
  frontmatter: { title },
  nodes,
}: {
  children: React.ReactNode;
  frontmatter: { title?: string };
  nodes: Array<Node>;
}) {
  const tableOfContents = collectSections(nodes);

  return (
    <>
      <div className="min-w-0 max-w-2xl flex-auto px-4 py-4 md:py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
        <article>
          <DocsHeader title={title} />
          <Prose>{children}</Prose>
        </article>
        <PrevNextLinks />
        <p className="text-center text-xs leading-5 text-gray-500 mt-5">
          &copy; {new Date().getFullYear()} rhinobase, Inc. All rights reserved.
        </p>
      </div>
      <TableOfContents tableOfContents={tableOfContents} />
    </>
  );
}
