import { Callout } from "../components/Callout";
import { Examples } from "../components/Examples";
import { ExternalCodeLinks } from "../components/ExternalCodeLinks";
import { QuickLink, QuickLinks } from "../components/QuickLinks";

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: "note",
        matches: ["note", "warning"],
        errorLevel: "critical",
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = "", caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  example: {
    render: Examples,
    attributes: {
      name: { type: String },
      children: { type: String, default: "" },
    },
  },
  "quick-links": {
    render: QuickLinks,
  },
  "quick-link": {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  "external-code-links": {
    render: ExternalCodeLinks,
  },
};

export default tags;
