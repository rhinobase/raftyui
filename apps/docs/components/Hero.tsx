"use client";
import { Button, Skeleton } from "@rafty/ui";
import { useWindowSize } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import blurCyanImage from "../images/blur-cyan.png";
import blurIndigoImage from "../images/blur-indigo.png";

const HeroCard = dynamic(
  () => import("./HeroCard").then((mod) => mod.HeroCard),
  {
    loading: () => (
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-[359px] w-[342px] rounded-md" />
        <Skeleton className="h-[359px] w-[342px] rounded-md" />
        <Skeleton className="h-[260px] w-[342px] rounded-md" />
        <Skeleton className="h-[305px] w-[302px] rounded-md" />
      </div>
    ),
  },
);

export function Hero() {
  const { width } = useWindowSize();

  return (
    <div className="bg-secondary-950 overflow-hidden dark:-mb-32 dark:-mt-[85px] dark:pb-32 dark:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="lg:max-w-8xl mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute bottom-full right-full -mb-56 -mr-72 size-[530px] opacity-50"
              src={blurCyanImage}
              alt="Blurred Cyan Circle"
              priority
            />
            <div className="relative">
              <p className="via-primary-400 font-display inline bg-gradient-to-r from-indigo-200 to-indigo-200 bg-clip-text text-5xl tracking-tight text-transparent">
                Building Design System Made Easy.
              </p>
              <p className="text-secondary-400 mt-3 text-2xl tracking-tight">
                Explore our library of responsive and accessible UI components,
                meticulously crafted to align seamlessly with your app&apos;s
                design system.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Link href="/themes">
                  <Button colorScheme="primary">Explore Themes</Button>
                </Link>
                <div className="dark:bg-secondary-600 rounded-md bg-white text-white">
                  <Link
                    href="https://github.com/rhinobase/raftyui"
                    target="_blank"
                  >
                    <Button variant="ghost">View on GitHub</Button>
                  </Link>
                </div>
              </div>
              <div className="mt-4 flex md:justify-center lg:justify-start">
                <Link
                  href="https://www.producthunt.com/products/rafty-ui?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-rafty&#0045;ui"
                  target="_blank"
                >
                  <Image
                    src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=556315&theme=dark"
                    alt="Rafty&#0032;UI - Radix&#0032;UI&#0032;&#0043;&#0032;Tailwind&#0032;CSS&#0032;&#0045;&#0032;React&#0032;Component&#0032;Lib | Product Hunt"
                    width={250}
                    height={54}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative lg:static lg:w-max xl:pl-10">
            <Image
              className="absolute -right-64 -top-64 size-[530px]"
              src={blurCyanImage}
              alt="Blurred Cyan Circle"
              priority
            />
            <Image
              className="absolute -bottom-40 -right-44 size-[567px]"
              src={blurIndigoImage}
              alt="Blurred Indigo Circle"
              priority
            />
            <div className="relative hidden h-[680px] w-[700px] md:block">
              {width && width >= 768 && <HeroCard />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
