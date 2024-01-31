import { classNames } from "@rafty/ui";

export function Prose<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: React.ComponentPropsWithoutRef<T> & {
  as?: T;
}) {
  const Component = as ?? "div";

  return (
    <Component
      className={classNames(
        className,
        "prose-secondary prose dark:prose-invert dark:text-secondary-400 max-w-none",
        // headings
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]",
        // lead
        "prose-lead:text-secondary-500 dark:prose-lead:text-secondary-400",
        // links
        "prose-a:font-medium prose-a:text-primary-500 dark:prose-a:text-primary-400 hover:prose-a:text-primary-600 dark:hover:prose-a:text-primary-300 prose-a:transition-all prose-a:ease-in-out",
        // link underline
        "prose-a:no-underline hover:prose-a:underline",
        // pre
        "prose-pre:rounded-lg prose-pre:bg-secondary-950 prose-pre:shadow-lg dark:prose-pre:bg-secondary-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-secondary-300/10",
        // hr
        "dark:prose-hr:border-secondary-800",
      )}
      {...props}
    />
  );
}
