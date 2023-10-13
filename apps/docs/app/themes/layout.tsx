import { ReactNode } from "react";
import ThemeBuilderWrapper from "./ThemeWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theme Generator",
  description: "Hand-picked themes that you can copy and paste into your apps.",
  twitter: {
    title: "Themes",
    images: { url: "https://rafty.rhinobase.io/api/og?title=Themes" },
  },
  openGraph: {
    title: "Themes",
    images: { url: "https://rafty.rhinobase.io/api/og?title=Themes" },
  },
};

export default function ThemeBuilderLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ThemeBuilderWrapper>{children}</ThemeBuilderWrapper>;
}
