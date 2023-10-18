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
    <div className="bg-secondary-950 overflow-hidden dark:-mb-32 dark:-mt-[82px] dark:pb-32 dark:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="lg:max-w-8xl mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
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
              <p className="via-primary-400 font-display inline bg-gradient-to-r from-indigo-200 to-indigo-200 bg-clip-text text-5xl tracking-tight text-transparent">
                Building Design System Made Easy.
              </p>
              <p className="text-secondary-400 mt-3 text-2xl tracking-tight">
                Explore our library of responsive and accessible UI components,
                meticulously crafted to align seamlessly with your app&apos;s
                design system.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <a href="/themes">
                  <Button colorScheme="primary">Explore Themes</Button>
                </a>
                <div className="dark:bg-secondary-600 rounded-md bg-white text-white">
                  <a
                    href="https://github.com/rhinobase/raftyui"
                    target="_blank"
                  >
                    <Button variant="ghost">View on GitHub</Button>
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="https://www.producthunt.com/products/rafty-ui?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-rafty&#0045;ui"
                  target="_blank"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=556315&theme=dark"
                    alt="Rafty&#0032;UI - Radix&#0032;UI&#0032;&#0043;&#0032;Tailwind&#0032;CSS&#0032;&#0045;&#0032;React&#0032;Component&#0032;Lib | Product Hunt"
                    style={{ width: 250, height: 54 }}
                    width="250"
                    height="54"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:static lg:w-max xl:pl-10">
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
            <div className="dark relative z-10 hidden w-full md:block">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:w-[700px]">
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
