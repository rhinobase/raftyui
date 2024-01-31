import { Metadata } from "next";
import { PropsWithChildren } from "react";
import ThemeBuilderWrapper from "./ThemeWrapper";

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

export default function ThemeBuilderLayout({ children }: PropsWithChildren) {
  return <ThemeBuilderWrapper>{children}</ThemeBuilderWrapper>;
}
