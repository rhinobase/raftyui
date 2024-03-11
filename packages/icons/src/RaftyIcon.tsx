import * as Heroicons from "@heroicons/react/24/outline";
import { type SVGProps, forwardRef } from "react";
import { ICONS } from "./icons";

export type RaftyIconProps = {
  type: keyof typeof ICONS;
  title?: string;
} & Omit<SVGProps<SVGSVGElement>, "ref">;

export const RaftyIcon = forwardRef<SVGSVGElement, RaftyIconProps>(
  ({ type, ...props }, forwardedRef) => {
    const Icon = Heroicons[ICONS[type]];

    return <Icon {...props} ref={forwardedRef} />;
  },
);

RaftyIcon.displayName = "RaftyIcon";
