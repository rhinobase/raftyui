import { ReactNode } from "react";
import ThemeBuilderWrapper from "./ThemeWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theme Generator",
};

export default function ThemeBuilderLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ThemeBuilderWrapper>{children}</ThemeBuilderWrapper>;
}
