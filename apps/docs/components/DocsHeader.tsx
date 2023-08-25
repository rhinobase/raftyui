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
        <p className="font-display text-sm font-medium text-primary-500 dark:text-primary-400">
          {section.title}
        </p>
      )}
      {title && (
        <h1 className="font-display text-3xl tracking-tight text-secondary-900 dark:text-white">
          {title}
        </h1>
      )}
    </header>
  );
}
