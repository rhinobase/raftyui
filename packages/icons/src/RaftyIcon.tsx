import { type SVGProps, Suspense, forwardRef } from "react";
import { ICONS } from "./icons";

export type RaftyIconProps = {
  type: keyof typeof ICONS;
  title?: string;
} & Omit<SVGProps<SVGSVGElement>, "ref">;

export const RaftyIcon = forwardRef<SVGSVGElement, RaftyIconProps>(
  ({ type, ...props }, forwardedRef) => {
    const { icon: Icon, label } = ICONS[type];

    return (
      <Suspense>
        <Icon title={label} {...props} ref={forwardedRef} />
      </Suspense>
    );
  },
);

RaftyIcon.displayName = "RaftyIcon";
