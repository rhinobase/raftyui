import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import NextjsIcon from "../../../public/frameworks/nextjs.svg";
import VitejsIcon from "../../../public/frameworks/vite.svg";

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
      {EXAMPLE_TEMPLATES.map((example) => (
        <CardElement key={example.title} {...example} />
      ))}
    </div>
  );
}

function CardElement({ title, examples, icon }: ExampleType) {
  return (
    <div className="border-secondary-200 dark:border-secondary-800 flex w-full items-center gap-4 rounded-xl border px-4 py-5">
      <Image src={icon} alt={title} className="m-0 size-10" />
      <div className="space-y-1.5">
        <h5 className="not-prose text-[1.25rem] font-medium leading-[2rem] leading-none tracking-tight">
          {title}
        </h5>
        <div className="flex flex-wrap items-center gap-1">
          {examples.map((example, index) => (
            <Fragment key={example.href}>
              {index !== 0 && (
                <span className="text-[0.875rem] font-medium leading-[1.5rem] opacity-40">
                  /
                </span>
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
      className="not-prose text-[0.75rem] font-medium leading-[1rem] leading-none text-blue-600/90 transition-all ease-in-out hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      target="_blank"
    >
      View {language.toUpperCase()} example
    </Link>
  );
}
