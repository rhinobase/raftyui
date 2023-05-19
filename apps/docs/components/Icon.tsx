import { useId } from "react";
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

export function Icon({
  icon,
  className,
  ...props
}: {
  icon: keyof typeof icons;
  className?: string;
}) {
  const id = useId();
  const IconComponent = icons[icon];

  return (
    <IconComponent
      className="text-primary-500 dark:text-primary-300 h-8 w-8"
      id={id}
    />
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
      {gradients[color].map((stop: object, stopIndex: number) => (
        <stop key={stopIndex} {...stop} />
      ))}
    </radialGradient>
  );
}
