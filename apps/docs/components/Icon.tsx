"use client";
import { useId } from "react";
import { classNames } from "@rafty/ui";
import { InstallationIcon } from "./icons/InstallationIcon";
import { LightbulbIcon } from "./icons/LightbulbIcon";
import { PluginsIcon } from "./icons/PluginsIcon";
import { PresetsIcon } from "./icons/PresetsIcon";
import { ThemingIcon } from "./icons/ThemingIcon";
import { WarningIcon } from "./icons/WarningIcon";

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

const gradients = {
  indigo: [
    { stopColor: "#818cf8" },
    { stopColor: "#c4b5fd", offset: ".527" },
    { stopColor: "#a5b4fc", offset: 1 },
  ],
  violet: [
    { stopColor: "#FDE68A", offset: ".08" },
    { stopColor: "#F59E0B", offset: ".837" },
  ],
};

export function Gradient({
  color = "indigo",
  ...props
}: {
  color?: keyof typeof gradients;
} & Omit<React.ComponentPropsWithoutRef<"radialGradient">, "color">) {
  return (
    <radialGradient
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      {...props}
    >
      {gradients[color].map((stop, stopIndex) => (
        <stop key={stopIndex} {...stop} />
      ))}
    </radialGradient>
  );
}

export function LightMode({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"g">) {
  return <g className={classNames("dark:hidden", className)} {...props} />;
}

export function DarkMode({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"g">) {
  return (
    <g className={classNames("hidden dark:inline", className)} {...props} />
  );
}
