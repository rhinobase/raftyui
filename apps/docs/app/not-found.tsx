import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@rafty/ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
        <p className="text-secondary-900 font-display font-semibold dark:text-white">
          404
        </p>
        <div>
          <h1 className="text-primary-600 font-display dark:text-primary-300 text-3xl tracking-tight">
            Page not found
          </h1>
          <p className="text-secondary-500 dark:text-secondary-400 text-sm">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        <Link href="/">
          <Button
            rightIcon={
              <ArrowRightIcon height={16} width={16} className="stroke-2" />
            }
            variant="ghost"
          >
            Go back home
          </Button>
        </Link>
      </div>
    </div>
  );
}
