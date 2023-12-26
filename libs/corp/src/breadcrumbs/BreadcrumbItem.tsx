import { PropsWithChildren } from "react";

export type BreadcrumbItem = {
  link?: string;
};

export function BreadcrumbItem({
  link,
  children,
}: PropsWithChildren<BreadcrumbItem>) {
  if (link) {
    return (
      <a href={link} className="px-1">
        {children}
      </a>
    );
  }
  return <>{children}</>;
}
