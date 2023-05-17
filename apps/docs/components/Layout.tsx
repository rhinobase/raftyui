import { ReactNode, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { Hero } from "./Hero";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Prose } from "./Prose";

const navigation = [
  {
    title: "Introduction",
    links: [
      { title: "Getting started", href: "/" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Core concepts",
    links: [
      { title: "Understanding caching", href: "/docs/understanding-caching" },
      {
        title: "Predicting user behavior",
        href: "/docs/predicting-user-behavior",
      },
      { title: "Basics of time-travel", href: "/docs/basics-of-time-travel" },
      {
        title: "Introduction to string theory",
        href: "/docs/introduction-to-string-theory",
      },
      { title: "The butterfly effect", href: "/docs/the-butterfly-effect" },
    ],
  },
  {
    title: "Advanced guides",
    links: [
      { title: "Writing plugins", href: "/docs/writing-plugins" },
      { title: "Neuralink integration", href: "/docs/neuralink-integration" },
      { title: "Temporal paradoxes", href: "/docs/temporal-paradoxes" },
      { title: "Testing", href: "/docs/testing" },
      { title: "Compile-time caching", href: "/docs/compile-time-caching" },
      {
        title: "Predictive data generation",
        href: "/docs/predictive-data-generation",
      },
    ],
  },
  {
    title: "API reference",
    links: [
      { title: "CacheAdvance.predict()", href: "/docs/cacheadvance-predict" },
      { title: "CacheAdvance.flush()", href: "/docs/cacheadvance-flush" },
      { title: "CacheAdvance.revert()", href: "/docs/cacheadvance-revert" },
      { title: "CacheAdvance.regret()", href: "/docs/cacheadvance-regret" },
    ],
  },
  {
    title: "Contributing",
    links: [
      { title: "How to contribute", href: "/docs/how-to-contribute" },
      { title: "Architecture guide", href: "/docs/architecture-guide" },
      { title: "Design principles", href: "/docs/design-principles" },
    ],
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
  const isHomePage = router.pathname === "/";
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

      {isHomePage && <Hero />}

      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-secondary-50 dark:hidden" />
          <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-secondary-800 dark:block" />
          <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-secondary-800 dark:block" />
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
                  <p className="font-display text-sm font-medium text-primary-500 dark:text-primary-300">
                    {section.title}
                  </p>
                )}
                {title && (
                  <h1 className="font-display text-3xl tracking-tight text-secondary-900 dark:text-white">
                    {title}
                  </h1>
                )}
              </header>
            )}
            <Prose>{children}</Prose>
          </article>
          <dl className="mt-12 flex border-t border-secondary-200 pt-6 dark:border-secondary-800">
            {previousPage && (
              <div>
                <dt className="font-display text-sm font-medium text-secondary-900 dark:text-white">
                  Previous
                </dt>
                <dd className="mt-1">
                  <Link
                    href={previousPage.href}
                    className="text-base font-semibold flex items-center gap-1 text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300"
                  >
                    <ArrowSmallLeftIcon className="h-4 w-4 stroke-2" />
                    {previousPage.title}
                  </Link>
                </dd>
              </div>
            )}
            {nextPage && (
              <div className="ml-auto text-right">
                <dt className="font-display text-sm font-medium text-secondary-900 dark:text-white">
                  Next
                </dt>
                <dd className="mt-1">
                  <Link
                    href={nextPage.href}
                    className="text-base flex items-center gap-1 font-semibold text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300"
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
                  className="font-display text-sm font-medium text-secondary-900 dark:text-white"
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
                              : "font-normal text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300"
                          )}
                        >
                          {section.title}
                        </Link>
                      </h3>
                      {section.children.length > 0 && (
                        <ol
                          role="list"
                          className="mt-2 space-y-3 pl-5 text-secondary-500 dark:text-secondary-400"
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
