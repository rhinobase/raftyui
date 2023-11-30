"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "@rafty/ui";
import { navigation } from "../lib/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

function PageLink({
  title,
  href,
  dir = "next",
  ...props
}: Omit<React.ComponentPropsWithoutRef<"div">, "dir" | "title"> & {
  title: string;
  href: string;
  dir?: "next" | "previous";
}) {
  return (
    <div {...props}>
      <dt className="font-display text-secondary-900 text-sm font-medium dark:text-white">
        {dir === "next" ? "Next" : "Previous"}
      </dt>
      <dd className="mt-1">
        <Link
          href={href}
          className={classNames(
            "text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300 flex items-center gap-x-1 text-base font-semibold",
            dir === "previous" && "flex-row-reverse",
          )}
        >
          {title}
          {dir === "next" ? (
            <ArrowRightIcon height={15} width={15} />
          ) : (
            <ArrowLeftIcon height={15} width={15} />
          )}
        </Link>
      </dd>
    </div>
  );
}

export function PrevNextLinks() {
  const pathname = usePathname();
  const allLinks = navigation.flatMap((section) => section.links);
  const linkIndex = allLinks.findIndex((link) => link.href === pathname);
  const previousPage = linkIndex > -1 ? allLinks[linkIndex - 1] : null;
  const nextPage = linkIndex > -1 ? allLinks[linkIndex + 1] : null;

  if (!nextPage && !previousPage) {
    return null;
  }

  return (
    <dl className="border-secondary-200 dark:border-secondary-800 mt-12 flex flex-col border-t">
      <EditOnGithub pathname={pathname} />
      <div className="flex mt-6">
        {previousPage && <PageLink dir="previous" {...previousPage} />}
        {nextPage && <PageLink className="ml-auto text-right" {...nextPage} />}
      </div>
    </dl>
  );
}

function EditOnGithub({ pathname }: { pathname: string }) {
  // Link to .md file
  const href = [
    "https://github.com/rhinobase/raftyui/blob/main/apps/docs/app",
    pathname,
    "/page.md",
  ].join("");

  return (
    <a
      href={href}
      className="py-4 md:py-6 w-max flex gap-2 items-center text-secondary-500 dark:text-secondary-400 hover:text-blue-500 dark:hover:text-blue-300 transition-all ease-in-out"
      target="_blank"
      referrerPolicy="no-referrer"
    >
      <PencilIcon height={15} width={15} className="stroke-2" />
      <p className="text-sm">Edit this page on GitHub</p>
    </a>
  );
}
