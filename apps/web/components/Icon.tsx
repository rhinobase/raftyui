import { useId } from "react";
import clsx from "clsx";
import {
  ExclamationCircleIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  Square3Stack3DIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

export const icons = {
  installation: RocketLaunchIcon,
  presets: Square3Stack3DIcon,
  plugins: PuzzlePieceIcon,
  theming: SwatchIcon,
  lightbulb: LightBulbIcon,
  warning: ExclamationCircleIcon,
};

const iconStyles = {
  blue: "[--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]",
  amber:
    "[--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]",
};

export function Icon({
  color = "blue",
  icon,
  className,
  ...props
}: {
  color?: keyof typeof iconStyles;
  icon: keyof typeof icons;
  className?: string;
}) {
  let id = useId();
  let IconComponent = icons[icon];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className={clsx(className, iconStyles[color])}
      {...props}
    >
      <IconComponent id={id} color={color} />
    </svg>
  );
}

const gradients: any = {
  blue: [
    { stopColor: "#0EA5E9" },
    { stopColor: "#22D3EE", offset: ".527" },
    { stopColor: "#818CF8", offset: 1 },
  ],
  amber: [
    { stopColor: "#FDE68A", offset: ".08" },
    { stopColor: "#F59E0B", offset: ".837" },
  ],
};

export function Gradient({ color = "blue", ...props }) {
  return (
    <radialGradient
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      {...props}
    >
      {gradients[color].map((stop: any, stopIndex: number) => (
        <stop key={stopIndex} {...stop} />
      ))}
    </radialGradient>
  );
}

export function LightMode({ className, ...props }: { className: string }) {
  return <g className={clsx("dark:hidden", className)} {...props} />;
}

export function DarkMode({ className, ...props }: { className: string }) {
  return <g className={clsx("hidden dark:inline", className)} {...props} />;
}
