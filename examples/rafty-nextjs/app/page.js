"use client";
import { Card, CardContent, CardHeader } from "@rafty/ui";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 space-y-4 h-full ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
        <Card className="dark:!bg-secondary-900 ">
          <CardContent>
            Get started by editing&nbsp;<code>app/page.tsx</code>
          </CardContent>
        </Card>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://rhinobase.io?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              className="rounded-md "
              src="/rhinobase.png"
              alt="rhinobase"
              width={30}
              height={30}
              priority
            />
            <p className="text-lg font-bold">rhinobase</p>
          </a>
        </div>
      </div>
      <div className="flex gap-2 py-10">
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
        <h1 className="dark:via-primary-300 font-display inline bg-gradient-to-r from-indigo-500 via-primary-500 to-indigo-500 dark:from-indigo-300 dark:to-indigo-300 bg-clip-text text-5xl leading-none tracking-tight text-transparent">
          rafty
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-6 max-w-5xl h-full">
        <a
          href="https://rafty.rhinobase.io?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="group dark:hover:bg-secondary-950 hover:bg-secondary-50 !h-full transition-all ease-in-out">
            <CardHeader className="!text-xl font-extrabold">
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
          <Card className="group dark:hover:bg-secondary-950 hover:bg-secondary-50 !h-full transition-all ease-in-out">
            <CardHeader className="!text-xl font-extrabold">
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
          className="lg:mb-0 md:mb-20"
        >
          <Card className="group dark:hover:bg-secondary-950 hover:bg-secondary-50 !h-full transition-all ease-in-out">
            <CardHeader className="!text-xl font-extrabold">
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
          className="mb-40 lg:mb-0 md:mb-20"
        >
          <Card className="group dark:hover:bg-secondary-950 hover:bg-secondary-50 !h-full transition-all ease-in-out ">
            <CardHeader className="!text-xl font-extrabold">
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
  );
}
