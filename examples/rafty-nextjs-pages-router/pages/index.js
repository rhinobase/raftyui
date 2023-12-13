import { Card, CardContent, CardHeader } from "@rafty/ui";
import Image from "next/image";
import Logo from "../public/rhinobase.png";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Button } from "@rafty/ui";

export default function Home() {
  const [isDark, setDarkMode] = useState(false);

  return (
    <div className={isDark ? "dark" : undefined}>
      <main className="from-primary-50/80 flex h-full min-h-screen flex-col items-center justify-between space-y-4 bg-gradient-to-b to-white p-4 text-black dark:from-black dark:to-black dark:text-white md:p-24 ">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex ">
          <Button
            size="icon"
            variant="ghost"
            aria-label="Theme"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            <SunIcon className="h-5 w-5 stroke-2 dark:hidden" />
            <MoonIcon className="hidden h-5 w-5 stroke-2 dark:block" />
          </Button>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="flex place-items-center gap-2 p-8 lg:p-0"
              href="https://rhinobase.io?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                className="rounded-md "
                src={Logo}
                alt="rhinobase"
                width={30}
                height={30}
                priority
              />
              <p className="text-lg font-bold">rhinobase</p>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 py-10">
          <svg
            aria-hidden="true"
            viewBox="0 0 36 36"
            fill="none"
            className="fill-secondary-700 dark:fill-primary-100 h-12 w-auto"
          >
            <g
              fill="none"
              strokeLinejoin="round"
              strokeWidth={3}
              className="stroke-indigo-500 dark:stroke-indigo-300"
            >
              <path d="M10.308 5L18 17.5 10.308 30 2.615 17.5 10.308 5z" />
              <path d="M18 17.5L10.308 5h15.144l7.933 12.5M18 17.5h15.385L25.452 30H10.308L18 17.5z" />
            </g>
          </svg>
          <h1 className="dark:via-primary-300 font-display via-primary-500 inline bg-gradient-to-r from-indigo-500 to-indigo-500 bg-clip-text text-5xl leading-normal tracking-tight text-transparent dark:from-indigo-300 dark:to-indigo-300">
            rafty
          </h1>
        </div>
        <div className="grid h-full max-w-5xl grid-cols-1  gap-6 md:grid-cols-2 lg:grid-cols-4">
          <a
            href="https://rafty.rhinobase.io?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="dark:hover:bg-secondary-950 group !h-full transition-all ease-in-out hover:bg-white">
              <CardHeader className="!text-xl">
                Docs{" "}
                <p className="inline-block transition-transform group-hover:translate-x-1 ">
                  &gt;
                </p>
              </CardHeader>
              <CardContent className="!text-secondary-400">
                Find in-depth information about @rafty/ui features and API.
              </CardContent>
            </Card>
          </a>

          <a
            href="https://rafty.rhinobase.io/themes?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="dark:hover:bg-secondary-950 group !h-full transition-all ease-in-out hover:bg-white">
              <CardHeader className="!text-xl">
                Themes{" "}
                <p className="inline-block transition-transform group-hover:translate-x-1 ">
                  &gt;
                </p>
              </CardHeader>
              <CardContent className="!text-secondary-400">
                Check out components across different themes.
              </CardContent>
            </Card>
          </a>

          <a
            href="https://rafty.rhinobase.io/docs/examples?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="md:mb-20 lg:mb-0"
          >
            <Card className="dark:hover:bg-secondary-950 group !h-full transition-all ease-in-out hover:bg-white">
              <CardHeader className="!text-xl">
                Templates{" "}
                <p className="inline-block transition-transform group-hover:translate-x-1 ">
                  &gt;
                </p>
              </CardHeader>
              <CardContent className="!text-secondary-400">
                A collection of example, boilerplates, and scaffolds.
              </CardContent>
            </Card>
          </a>

          <a
            href="https://rafty.rhinobase.io/docs/components/accordion?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-40 md:mb-20 lg:mb-0"
          >
            <Card className="dark:hover:bg-secondary-950 group !h-full transition-all ease-in-out hover:bg-white ">
              <CardHeader className="!text-xl">
                Components{" "}
                <p className="inline-block transition-transform group-hover:translate-x-1 ">
                  &gt;
                </p>
              </CardHeader>
              <CardContent className="!text-secondary-400">
                Prebuilt components to help you build your projects faster.
              </CardContent>
            </Card>
          </a>
        </div>
      </main>
    </div>
  );
}
