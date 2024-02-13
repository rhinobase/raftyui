import type { IconBaseProps } from "react-icons/lib";
import { ICONS } from "./icons";

export type RaftyIcon = { type: string } & IconBaseProps;

export function RaftyIcon({ type, ...props }: RaftyIcon) {
  const { icon: Icon, label } = ICONS[type] ?? {};

  if (Icon) return <Icon title={label} {...props} />;
}
