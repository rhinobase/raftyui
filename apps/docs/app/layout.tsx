import { type Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { classNames } from "@rafty/ui";
import { Providers } from "./providers";

import "../styles/globals.css";
import { Wrapper } from "./Wrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: "../fonts/lexend.woff2",
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Docs",
    default: "@rafty/ui - Building Design System Made Easy",
  },
  description:
    "Explore the components, and witness the magic of accessible, stylish, SSR Ready, and dark mode-compatible interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        "h-full antialiased",
        inter.variable,
        lexend.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white selection:bg-[#79ffe1] dark:bg-secondary-950 dark:selection:bg-[#f81ce5] dark:selection:text-white">
        <Providers>
          <Wrapper>{children}</Wrapper>
        </Providers>
      </body>
    </html>
  );
}
