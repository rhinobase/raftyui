import type { PropsWithChildren } from "react";

export function DataNotFound({
  children = "No Data Found",
}: PropsWithChildren) {
  return (
    <div className="dark:border-secondary-700 h-[440px] w-full rounded-b-lg border border-t-0">
      <div className="text-secondary-500 flex size-full select-none items-center justify-center text-lg font-medium">
        {children}
      </div>
    </div>
  );
}
