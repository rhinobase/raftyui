import { ReactNode, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Prose } from "./Prose";

const navigation = [
  {
    title: "Introduction",
    links: [
      { title: "Getting started", href: "/getting-started" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Components",
    links: [{ title: "Accordion", href: "/components/accordion" }],
  },
];

type TableOfContents = {
  id: string;
  title: string;
  children: { id: string; title: string }[];
}[];

function useTableOfContents(tableOfContents: TableOfContents) {
  const [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id);

  const getHeadings = useCallback((tableOfContents: TableOfContents) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const style = window.getComputedStyle(el);
        const scrollMt = parseFloat(style.scrollMarginTop);

        const top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
        return { id, top };
      });
  }, []);

  useEffect(() => {
    if (tableOfContents.length === 0) return;
    const headings = getHeadings(tableOfContents);
    function onScroll() {
      const top = window.scrollY;
      let current = headings[0]!.id;
      for (const heading of headings) {
        if (top >= heading!.top) {
          current = heading!.id;
        } else {
          break;
        }
      }
      setCurrentSection(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [getHeadings, tableOfContents]);

  return currentSection;
}

export function Layout({
  children,
  title,
  tableOfContents,
}: {
  children: ReactNode;
  title: string;
  tableOfContents: TableOfContents;
}) {
  const router = useRouter();
  const allLinks = navigation.flatMap((section) => section.links);
  const linkIndex = allLinks.findIndex((link) => link.href === router.pathname);
  const previousPage = allLinks[linkIndex - 1];
  const nextPage = allLinks[linkIndex + 1];
  const section = navigation.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  );
  const currentSection = useTableOfContents(tableOfContents);

  function isActive(section: any) {
    if (section.id === currentSection) {
      return true;
    }
    if (!section.children) {
      return false;
    }
    return section.children.findIndex(isActive) > -1;
  }

  return (
    <>
      <Header navigation={navigation} />
      <div className="max-w-8xl relative mx-auto flex justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="bg-secondary-50 absolute inset-y-0 right-0 w-[50vw] dark:hidden" />
          <div className="from-secondary-800 absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t dark:block" />
          <div className="bg-secondary-800 absolute bottom-0 right-0 top-28 hidden w-px dark:block" />
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5">
            <Navigation
              navigation={navigation}
              className="w-64 pr-8 xl:w-72 xl:pr-16"
            />
          </div>
        </div>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
          <article>
            {(title || section) && (
              <header className="mb-9 space-y-1">
                {section && (
                  <p className="font-display text-primary-500 dark:text-primary-300 text-sm font-medium">
                    {section.title}
                  </p>
                )}
                {title && (
                  <h1 className="font-display text-3xl tracking-tight">
                    {title}
                  </h1>
                )}
              </header>
            )}
            <Prose>{children}</Prose>
          </article>
          <dl className="border-secondary-200 dark:border-secondary-800 mt-12 flex border-t pt-6">
            {previousPage && (
              <div>
                <dt className="font-display text-sm font-medium">Previous</dt>
                <dd className="mt-1">
                  <Link
                    href={previousPage.href}
                    className="text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300 flex items-center gap-1 text-base font-semibold"
                  >
                    <ArrowSmallLeftIcon className="h-4 w-4 stroke-2" />
                    {previousPage.title}
                  </Link>
                </dd>
              </div>
            )}
            {nextPage && (
              <div className="ml-auto text-right">
                <dt className="font-display text-sm font-medium">Next</dt>
                <dd className="mt-1">
                  <Link
                    href={nextPage.href}
                    className="text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300 flex items-center gap-1 text-base font-semibold"
                  >
                    {nextPage.title}{" "}
                    <ArrowSmallRightIcon className="h-4 w-4 stroke-2" />
                  </Link>
                </dd>
              </div>
            )}
          </dl>
        </div>
        <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
          <nav aria-labelledby="on-this-page-title" className="w-56">
            {tableOfContents.length > 0 && (
              <>
                <h2
                  id="on-this-page-title"
                  className="font-display text-sm font-medium"
                >
                  On this page
                </h2>
                <ol role="list" className="mt-4 space-y-3 text-sm">
                  {tableOfContents.map((section) => (
                    <li key={section.id}>
                      <h3>
                        <Link
                          href={`#${section.id}`}
                          className={clsx(
                            isActive(section)
                              ? "text-primary-500 dark:text-primary-300"
                              : "text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300 font-normal"
                          )}
                        >
                          {section.title}
                        </Link>
                      </h3>
                      {section.children.length > 0 && (
                        <ol
                          role="list"
                          className="text-secondary-500 dark:text-secondary-400 mt-2 space-y-3 pl-5"
                        >
                          {section.children.map((subSection) => (
                            <li key={subSection.id}>
                              <Link
                                href={`#${subSection.id}`}
                                className={
                                  isActive(subSection)
                                    ? "text-primary-500 dark:text-primary-300"
                                    : "hover:text-secondary-600 dark:hover:text-secondary-300"
                                }
                              >
                                {subSection.title}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ol>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
