import type { IconBaseProps } from "react-icons/lib";
import { ICONS } from "./icons";

export type RaftyIconProps = { type: keyof typeof ICONS } & IconBaseProps;

export function RaftyIcon({ type, ...props }: RaftyIconProps) {
  const { icon: Icon, label } = ICONS[type];

  return <Icon title={label} {...props} />;
}
