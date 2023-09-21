import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <p className="text-secondary-900 font-display text-sm font-medium dark:text-white">
          404
        </p>
        <h1 className="text-secondary-900 font-display mt-3 text-3xl tracking-tight dark:text-white">
          Page not found
        </h1>
        <p className="text-secondary-500 dark:text-secondary-400 mt-2 text-sm">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="text-secondary-900 mt-8 text-sm font-medium dark:text-white"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
