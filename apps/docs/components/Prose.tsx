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
        "prose-secondary prose max-w-none dark:prose-invert dark:text-secondary-400",
        // headings
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]",
        // lead
        "prose-lead:text-secondary-500 dark:prose-lead:text-secondary-400",
        // links
        "prose-a:font-semibold dark:prose-a:text-primary-400",
        // link underline
        "prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.primary.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.secondary.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.primary.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]",
        // pre
        "prose-pre:rounded-xl prose-pre:bg-secondary-950 prose-pre:shadow-lg dark:prose-pre:bg-secondary-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-secondary-300/10",
        // hr
        "dark:prose-hr:border-secondary-800",
      )}
      {...props}
    />
  );
}
