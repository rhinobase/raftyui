import { classNames } from "@rafty/ui";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";

import "../styles/globals.css";
import { CookieConcent } from "./CookieConcent";
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
    template: "%s - rafty/ui Docs",
    default: "rafty/ui - Building Design System Made Easy",
  },
  description:
    "Explore the components, and start building on top of it, SSR Ready, and dark mode-compatible interfaces.",
  themeColor: "#09090b",
  category: "technology",
  twitter: {
    card: "summary_large_image",
    title: "rafty/ui",
    description: "React + Accessible + Tailwind CSS Dynamic Component Library",
    creator: "@rhinobaseio",
    images: ["https://rafty.rhinobase.io/logo.png"],
  },
  openGraph: {
    title: "@rafty/ui",
    description: "React + Accessible + Tailwind CSS Dynamic Component Library",
    url: "https://rafty.rhinobase.io",
    siteName: "@rafty/ui Docs",
    images: [
      {
        url: "https://rafty.rhinobase.io/logo.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://rafty.rhinobase.io/logo.png",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
      <body className="dark:bg-secondary-950 flex min-h-full bg-white selection:bg-[#79ffe1] selection:text-secondary-700 dark:selection:bg-[#f81ce5] dark:selection:text-white">
        <Providers>
          <Wrapper>{children}</Wrapper>
        </Providers>
        <CookieConcent />
      </body>
    </html>
  );
}
