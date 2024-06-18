"use client";
import { usePathname } from "next/navigation";
import { navigation } from "../lib/navigation";

export function DocsHeader({ title }: { title?: string }) {
  const pathname = usePathname();
  const section = navigation.find((section) =>
    section.links.find((link) => link.href === pathname),
  );

  if (!title && !section) {
    return null;
  }

  return (
    <header className="mb-9 scroll-m-20 space-y-1" id="getting-started">
      {section && (
        <p className="font-display text-primary-500 dark:text-primary-400 text-[0.875rem] font-medium leading-[1.5rem]">
          {section.title}
        </p>
      )}
      {title && (
        <h1 className="font-display text-secondary-900 text-[2rem] leading-[2.5rem] tracking-tight dark:text-white">
          {title}
        </h1>
      )}
    </header>
  );
}
