import dynamic from "next/dynamic";

const SandpackEmbed = dynamic(() =>
  import("./SandpackEmbed").then((mod) => mod.SandpackEmbed),
);

export function Sandpack() {
  return <SandpackEmbed files={{}} />;
}
