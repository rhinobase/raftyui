import Link from "next/link";
import type { PropsWithChildren } from "react";
import { Icon } from "../components/Icon";

export function QuickLinks({ children }: PropsWithChildren) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {children}
    </div>
  );
}

export function QuickLink({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentProps<typeof Icon>["icon"];
}) {
  return (
    <div className="border-secondary-200 dark:border-secondary-800 group relative rounded-xl border">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 transition-all duration-[400ms] ease-in-out [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.primary.50)),var(--quick-links-hover-bg,theme(colors.primary.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.violet.400),theme(colors.primary.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.secondary.900)]" />
      <div className="relative overflow-hidden rounded-xl p-6">
        <Icon icon={icon} className="size-8" />
        <h2 className="font-display text-secondary-900 mt-4 text-base dark:text-white">
          <Link href={href}>
            <span className="absolute -inset-px rounded-xl" />
            {title}
          </Link>
        </h2>
        <p className="text-secondary-700 dark:text-secondary-400 mt-1 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
