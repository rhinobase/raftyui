import Image, { StaticImageData } from "next/image";
import { HiChevronRight } from "react-icons/hi";
import NextjsIcon from "../public/frameworks/nextjs.svg";
import VitejsIcon from "../public/frameworks/vite.svg";

export function ExternalCodeLinks() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
      <CardElement
        title="Next.js App Router"
        icon={NextjsIcon}
        href={{
          js: "https://github.com/rhinobase/raftyui/tree/main/examples/rafty-nextjs",
          ts: "https://github.com/rhinobase/raftyui/tree/main/examples/rafty-nextjs-ts",
        }}
      />
      <CardElement
        title="Next.js Page Router"
        icon={NextjsIcon}
        href={{
          js: "https://github.com/rhinobase/raftyui/tree/main/examples/rafty-nextjs-pages-router",
          ts: "https://github.com/rhinobase/raftyui/tree/main/examples/rafty-nextjs-pages-router-ts",
        }}
      />
      <CardElement
        title="Vite.js"
        icon={VitejsIcon}
        href={{
          js: "https://github.com/rhinobase/raftyui/tree/main/examples/rafty-vite",
          ts: "https://github.com/rhinobase/raftyui/tree/main/examples/rafty-vite-ts",
        }}
      />
    </div>
  );
}

function CardElement({
  title,
  href,
  icon,
}: {
  title: string;
  href: { ts?: string; js?: string };
  icon: StaticImageData;
}) {
  return (
    <div className="w-full px-4 py-5 rounded-xl border border-secondary-200 dark:border-secondary-800 flex items-center gap-4">
      <Image src={icon} alt={title} className="!m-0 w-10 h-10" />
      <div className="space-y-1.5">
        <h5 className="not-prose !text-xl !font-medium !leading-none tracking-tight">
          {title}
        </h5>
        <div className="flex flex-wrap gap-1">
          {href.js && <LinkComponent href={href.js} language="js" />}
          {href.js && href.ts && (
            <span className="text-sm font-medium opacity-40">/</span>
          )}
          {href.ts && <LinkComponent href={href.ts} language="ts" />}
        </div>
      </div>
    </div>
  );
}

function LinkComponent({
  href,
  language,
}: {
  href: string;
  language: "js" | "ts";
}) {
  const lang = language == "js" ? "JS" : "TS";
  return (
    <a
      href={href}
      className="not-prose flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 !text-xs !font-medium !leading-none"
      target="_blank"
    >
      View {lang} example <HiChevronRight />
    </a>
  );
}
