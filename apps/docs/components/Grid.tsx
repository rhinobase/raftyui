import React, { ReactNode } from "react";

export function Grid({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-2 bg-white p-40 dark:bg-zinc-900"
      style={{ minHeight: "100vh" }}
    >
      {children}
    </div>
  );
}
