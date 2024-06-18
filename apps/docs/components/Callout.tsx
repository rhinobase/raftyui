import { classNames } from "@rafty/ui";
import { Icon } from "./Icon";

const STYLES = {
  note: {
    container:
      "bg-primary-50 dark:bg-secondary-800/60 dark:ring-1 dark:ring-secondary-300/10",
    title: "text-primary-900 dark:text-primary-400",
    body: "text-primary-800 [--tw-prose-background:theme(colors.primary.50)] prose-a:text-primary-900 prose-code:text-primary-900 dark:text-secondary-300 dark:prose-code:text-secondary-300",
  },
  warning: {
    container:
      "bg-amber-50 dark:bg-secondary-800/60 dark:ring-1 dark:ring-secondary-300/10",
    title: "text-amber-900 dark:text-amber-500",
    body: "text-amber-800 [--tw-prose-underline:theme(colors.amber.400)] [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-secondary-300 dark:[--tw-prose-underline:theme(colors.primary.700)] dark:prose-code:text-secondary-300",
  },
};

const icons = {
  note: (props: { className?: string }) => <Icon icon="lightbulb" {...props} />,
  warning: (props: { className?: string }) => (
    <Icon icon="warning" color="violet" {...props} />
  ),
};

export function Callout({
  title,
  children,
  type = "note",
}: {
  title: string;
  children: React.ReactNode;
  type?: keyof typeof STYLES;
}) {
  const IconComponent = icons[type];

  return (
    <div
      className={classNames(
        "my-8 flex rounded-3xl p-6",
        STYLES[type].container,
      )}
    >
      <IconComponent className="size-8 flex-none" />
      <div className="ml-4 flex-auto">
        <p
          className={classNames(
            "font-display m-0 text-[1.25rem] leading-[2rem]",
            STYLES[type].title,
          )}
        >
          {title}
        </p>
        <div className={classNames("prose mt-2.5", STYLES[type].body)}>
          {children}
        </div>
      </div>
    </div>
  );
}
