import { PropsWithChildren } from "react";

export function CodeContainer({ children }: PropsWithChildren) {
  return <div className="my-2 rounded-lg">{children}</div>;
}
