import { classNames } from "@rafty/ui";

export function LogomarkPaths() {
  return (
    <g
      fill="none"
      strokeLinejoin="round"
      strokeWidth={3}
      className="stroke-indigo-500 dark:stroke-indigo-300"
    >
      <path d="M10.308 5L18 17.5 10.308 30 2.615 17.5 10.308 5z" />
      <path d="M18 17.5L10.308 5h15.144l7.933 12.5M18 17.5h15.385L25.452 30H10.308L18 17.5z" />
    </g>
  );
}

export function Logomark(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" {...props}>
      <LogomarkPaths />
    </svg>
  );
}

export function Logo({
  className,
  svgClassName,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & { svgClassName?: string }) {
  return (
    <div className={classNames("flex gap-2", className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 36 36"
        fill="none"
        {...props}
        className={svgClassName}
      >
        <LogomarkPaths />
      </svg>
      <h1 className="dark:via-primary-300 font-display via-primary-500 inline bg-gradient-to-r from-indigo-500 to-indigo-500 bg-clip-text text-3xl leading-none tracking-tight text-transparent dark:from-indigo-300 dark:to-indigo-300">
        rafty
      </h1>
    </div>
  );
}
