import { Tag, nodes as defaultNodes } from "@markdoc/markdoc";
import { Kbd } from "@rafty/ui";
import { slugifyWithCounter } from "@sindresorhus/slugify";
import yaml from "js-yaml";
import { DocsLayout } from "../components/DocsLayout";
import { Fence } from "../components/code";

const documentSlugifyMap = new Map();

const nodes = {
  document: {
    ...defaultNodes.document,
    render: DocsLayout,
    transform(node, config) {
      documentSlugifyMap.set(config, slugifyWithCounter());

      return new Tag(
        this.render,
        {
          frontmatter: yaml.load(node.attributes.frontmatter),
          nodes: node.children,
        },
        node.transformChildren(config),
      );
    },
  },
  heading: {
    ...defaultNodes.heading,
    transform(node, config) {
      const slugify = documentSlugifyMap.get(config);
      const attributes = node.transformAttributes(config);
      const children = node.transformChildren(config);
      const text = children
        .filter((child) => typeof child === "string")
        .join(" ");
      const id = attributes.id ?? slugify(text);

      return new Tag(
        `h${node.attributes.level}`,
        { ...attributes, id },
        children,
      );
    },
  },
  th: {
    ...defaultNodes.th,
    attributes: {
      ...defaultNodes.th.attributes,
      scope: {
        type: String,
        default: "col",
      },
    },
  },
  fence: {
    render: Fence,
    attributes: {
      language: {
        type: String,
      },
    },
  },
  code: {
    render: ({ content }) => <Kbd>{content}</Kbd>,
    attributes: {
      content: {
        type: String,
      },
    },
  },
};

export default nodes;
