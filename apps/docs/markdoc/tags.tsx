import { Callout } from "../components/Callout";
import { QuickLink, QuickLinks } from "../components/QuickLinks";

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      status: {
        type: String,
        default: "info",
        matches: ["info", "warning"],
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
    render: ({
      src,
      alt = "",
      caption,
    }: {
      src: string;
      alt?: string;
      caption?: string;
    }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
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
};

export default tags;
