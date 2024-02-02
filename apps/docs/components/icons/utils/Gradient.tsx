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
      {gradients[color].map((stop) => (
        <stop key={stop.stopColor} {...stop} />
      ))}
    </radialGradient>
  );
}
