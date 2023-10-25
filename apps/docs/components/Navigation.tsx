"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "@rafty/ui";
import { navigation } from "../lib/navigation";

export function Navigation({
  className,
  onLinkClick,
}: {
  className?: string;
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  const pathname = usePathname();

  return (
    <nav className={classNames("text-base lg:text-sm", className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display text-secondary-900 font-medium dark:text-white">
              {section.title}
            </h2>
            <ul
              role="list"
              className="border-secondary-100 dark:border-secondary-800 lg:border-secondary-200 mt-2 space-y-2 border-l-2 lg:mt-4 lg:space-y-4"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    onClick={onLinkClick}
                    className={classNames(
                      "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
                      link.href === pathname
                        ? "text-primary-500 before:bg-primary-500 dark:text-primary-400  dark:before:bg-primary-400 font-semibold"
                        : "text-secondary-500 before:bg-secondary-300 hover:text-secondary-600 dark:text-secondary-400 dark:before:bg-secondary-700 dark:hover:text-secondary-300 before:hidden hover:before:block",
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
