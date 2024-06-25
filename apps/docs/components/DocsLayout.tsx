import type { Node } from "@markdoc/markdoc";
import { collectSections } from "../lib/sections";
import { DocsHeader } from "./DocsHeader";
import { PrevNextLinks } from "./PrevNextLinks";
import { Prose } from "./Prose";
import { TableOfContents } from "./TableOfContents";

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
      <div className="mx-auto min-w-0 max-w-2xl flex-auto px-4 py-4 md:py-16 lg:max-w-4xl lg:pl-8 lg:pr-0 xl:px-16">
        <article>
          <DocsHeader title={title} />
          <Prose>{children}</Prose>
        </article>
        <PrevNextLinks />
        <p className="text-secondary-500 mt-5 text-center text-[0.75rem] leading-5 leading-[1rem]">
          &copy; {new Date().getFullYear()} rhinobase, Inc. All rights reserved.
        </p>
      </div>
      <TableOfContents tableOfContents={tableOfContents} />
    </>
  );
}
