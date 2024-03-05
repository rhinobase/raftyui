import { type SVGProps, Suspense, forwardRef, lazy } from "react";
import { ICONS } from "./icons";

export type RaftyIconProps = {
  type: keyof typeof ICONS;
  title?: string;
} & Omit<SVGProps<SVGSVGElement>, "ref">;

export const RaftyIcon = forwardRef<SVGSVGElement, RaftyIconProps>(
  ({ type, ...props }, forwardedRef) => {
    const Icon = lazy(() =>
      import("@heroicons/react/24/outline").then((mod) => ({
        // @ts-ignore
        default: mod[ICONS[type]],
      })),
    );

    return (
      <Suspense>
        <Icon {...props} ref={forwardedRef} />
      </Suspense>
    );
  },
);

RaftyIcon.displayName = "RaftyIcon";
