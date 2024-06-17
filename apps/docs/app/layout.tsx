import { GoogleAnalytics } from "@next/third-parties/google";
import { classNames } from "@rafty/ui";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type { PropsWithChildren } from "react";
import "../styles/globals.css";
import { Wrapper } from "./Wrapper";
import { Providers } from "./providers";

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
    template: "%s - rafty/ui Docs",
    default: "rafty/ui - Tailwind + React Component Library",
  },
  description:
    "Explore the components, and start building on top of it, SSR Ready, and dark mode-compatible interfaces.",
  keywords: [
    "rhinobase",
    "react",
    "rafty",
    "tailwind",
    "css",
    "components",
    "library",
  ],
  authors: [
    {
      name: "Rhinobase Team",
      url: "https://github.com/rhinobase",
    },
  ],
  category: "technology",
  metadataBase: new URL("https://rafty.rhinobase.io"),
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s - rafty/ui Docs",
      default: "rafty/ui Docs",
    },
    description: "React + Accessible + Tailwind CSS Dynamic Component Library",
    creator: "@rhinobaseio",
    images: {
      width: 1200,
      height: 630,
      url: "/api/og",
    },
  },
  openGraph: {
    title: {
      template: "%s - rafty/ui Docs",
      default: "rafty/ui Docs",
    },
    description: "React + Accessible + Tailwind CSS Dynamic Component Library",
    url: "/",
    siteName: "@rafty/ui Docs",
    images: {
      width: 1200,
      height: 630,
      url: "/api/og",
    },
    locale: "en_US",
    type: "website",
  },
};

// Google Analytics ID
const GMT_ID = "G-K1YEVWQFHZ";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={classNames(
        "h-full antialiased",
        inter.variable,
        lexend.variable,
      )}
    >
      <head>
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="dark:bg-secondary-950 selection:text-secondary-700 flex min-h-full bg-white selection:bg-[#79ffe1] dark:selection:bg-[#f81ce5] dark:selection:text-white">
        <Providers>
          <Wrapper>{children}</Wrapper>
        </Providers>
        <GoogleAnalytics gaId={GMT_ID} />
      </body>
    </html>
  );
}
