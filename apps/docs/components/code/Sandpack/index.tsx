"use client";
import dynamic from "next/dynamic";

const SandpackEmbed = dynamic(
  () => import("./SandpackEmbed").then((mod) => mod.SandpackEmbed),
  { ssr: false },
);

export type Sandpack = {
  name: string;
};

export function Sandpack({ name }: Sandpack) {
  return <SandpackEmbed name={name} />;
}
