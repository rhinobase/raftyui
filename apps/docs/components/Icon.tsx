import { useId } from "react";
import { classNames } from "@rafty/ui";
import {
  InstallationIcon,
  LightbulbIcon,
  PluginsIcon,
  PresetsIcon,
  ThemingIcon,
  WarningIcon,
} from "./icons";

const icons = {
  installation: InstallationIcon,
  presets: PresetsIcon,
  plugins: PluginsIcon,
  theming: ThemingIcon,
  lightbulb: LightbulbIcon,
  warning: WarningIcon,
};

const iconStyles = {
  indigo:
    "[--icon-foreground:theme(colors.indigo.900)] [--icon-background:theme(colors.white)]",
  violet:
    "[--icon-foreground:theme(colors.violet.900)] [--icon-background:theme(colors.violet.100)]",
};

export function Icon({
  icon,
  color = "indigo",
  className,
  ...props
}: {
  color?: keyof typeof iconStyles;
  icon: keyof typeof icons;
} & Omit<React.ComponentPropsWithoutRef<"svg">, "color">) {
  const id = useId();
  const IconComponent = icons[icon];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className={classNames(className, iconStyles[color])}
      {...props}
    >
      <IconComponent id={id} color={color} />
    </svg>
  );
}
