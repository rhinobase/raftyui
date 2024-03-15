import type { Metadata } from "next";
import { DocsLayout } from "../../../components/DocsLayout";
import { ExampleCodeRepo } from "./ExampleCodeRepo";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "A collection of example, boilerplates, and scaffolds to jumpstart your next Rafty UI project.",
  twitter: {
    title: "Examples",
    images: { url: "https://rafty.rhinobase.io/api/og?title=Examples" },
  },
  openGraph: {
    title: "Examples",
    images: { url: "https://rafty.rhinobase.io/api/og?title=Examples" },
  },
};

export default function ExamplesPage() {
  return (
    <DocsLayout frontmatter={{ title: "Examples" }} nodes={[]}>
      <p>
        A collection of example, boilerplates, and scaffolds to jumpstart your
        next Rafty UI project.
      </p>
      <ExampleCodeRepo />
    </DocsLayout>
  );
}
