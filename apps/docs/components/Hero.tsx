import Image from "next/image";
import { Button, Calendar, CardContent, Card } from "@rafty/ui";
import blurCyanImage from "../images/blur-cyan.png";
import blurIndigoImage from "../images/blur-indigo.png";
import {
  ChatBoxExample,
  CookieSettingsExample,
  TeamMembersExample,
} from "../app/themes/Examples";

export function Hero() {
  return (
    <div className="overflow-hidden bg-secondary-950 dark:-mb-32 dark:-mt-[82px] dark:pb-32 dark:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
              src={blurCyanImage}
              alt="Blurred Cyan Circle"
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div className="relative">
              <p className="inline bg-gradient-to-r from-indigo-200 via-primary-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Building Design System Made Easy.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-secondary-400">
                Explore our library of responsive and accessible UI components,
                meticulously crafted to align seamlessly with your app&apos;s
                design system.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <a href="#getting-started">
                  <Button colorScheme="primary" className="!rounded-full">
                    Get started
                  </Button>
                </a>
                <div className="rounded-full bg-white dark:bg-secondary-600 text-white">
                  <a
                    href="https://github.com/rhinobase/raftyui"
                    target="_blank"
                  >
                    <Button variant="ghost" className="!rounded-full">
                      View on GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10 lg:w-max">
            <Image
              className="absolute -right-64 -top-64"
              src={blurCyanImage}
              alt="Blurred Cyan Circle"
              width={530}
              height={530}
              unoptimized
              priority
            />
            <Image
              className="absolute -bottom-40 -right-44"
              src={blurIndigoImage}
              alt="Blurred Indigo Circle"
              width={567}
              height={567}
              unoptimized
              priority
            />
            <div className="w-full dark relative z-10 hidden md:block">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-[700px]">
                <Card>
                  <CardContent>
                    <CookieSettingsExample />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <ChatBoxExample />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <TeamMembersExample />
                  </CardContent>
                </Card>
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
