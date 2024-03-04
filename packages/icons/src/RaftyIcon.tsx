import { type SVGProps, forwardRef } from "react";
import { ICONS } from "./icons";

export type RaftyIconProps = {
  type: keyof typeof ICONS;
} & Omit<SVGProps<SVGSVGElement>, "ref">;

export const RaftyIcon = forwardRef<SVGSVGElement, RaftyIconProps>(
  ({ type, ...props }, forwardedRef) => {
    const { icon: Icon, label } = ICONS[type];

    return <Icon title={label} {...props} ref={forwardedRef} />;
  },
);

RaftyIcon.displayName = "RaftyIcon";
