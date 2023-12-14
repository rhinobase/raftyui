import Image, { StaticImageData } from "next/image";
import { Fragment } from "react";
import NextjsIcon from "../../../public/frameworks/nextjs.svg";
import VitejsIcon from "../../../public/frameworks/vite.svg";
import Link from "next/link";

enum Language {
  JS = "js",
  TS = "ts",
}

type ExampleType = {
  title: string;
  icon: StaticImageData;
  examples: LinkComponent[];
};

const EXAMPLE_TEMPLATES: ExampleType[] = [
  {
    title: "Next.js App Router",
    icon: NextjsIcon,
    examples: [
      {
        language: Language.JS,
        href: "https://github.com/rhinobase/raftyui/tree/main/examples/rafty-nextjs",
      },
      {
        language: Language.TS,
        href: "https://github.com/rhinobase/raftyui/tree/main/examples/rafty-nextjs-ts",
      },
    ],
  },
  {
    title: "Next.js Pages Router",
    icon: NextjsIcon,
    examples: [
      {
        language: Language.JS,
        href: "https://github.com/rhinobase/raftyui/tree/main/examples/rafty-nextjs-pages-router",
      },
      {
        language: Language.TS,
        href: "https://github.com/rhinobase/raftyui/tree/main/examples/rafty-nextjs-pages-router-ts",
      },
    ],
  },
  {
    title: "Vite.js",
    icon: VitejsIcon,
    examples: [
      {
        language: Language.JS,
        href: "https://github.com/rhinobase/raftyui/tree/main/examples/rafty-vite",
      },
      {
        language: Language.TS,
        href: "https://github.com/rhinobase/raftyui/tree/main/examples/rafty-vite-ts",
      },
    ],
  },
];

export function ExampleCodeRepo() {
  return (
    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
      {EXAMPLE_TEMPLATES.map((example, index) => (
        <CardElement key={index} {...example} />
      ))}
    </div>
  );
}

function CardElement({ title, examples, icon }: ExampleType) {
  return (
    <div className="border-secondary-200 dark:border-secondary-800 flex w-full items-center gap-4 rounded-xl border px-4 py-5">
      <Image src={icon} alt={title} className="!m-0 h-10 w-10" />
      <div className="space-y-1.5">
        <h5 className="not-prose !text-xl !font-medium !leading-none tracking-tight">
          {title}
        </h5>
        <div className="flex flex-wrap items-center gap-1">
          {examples.map((example, index) => (
            <Fragment key={index}>
              {index !== 0 && (
                <span className="text-sm font-medium opacity-40">/</span>
              )}
              <LinkComponent {...example} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

type LinkComponent = {
  language: Language;
  href: string;
};

function LinkComponent({ href, language }: LinkComponent) {
  return (
    <Link
      href={href}
      className="not-prose !text-xs !font-medium !leading-none text-blue-600/90 transition-all ease-in-out hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      target="_blank"
    >
      View {language.toUpperCase()} example
    </Link>
  );
}
