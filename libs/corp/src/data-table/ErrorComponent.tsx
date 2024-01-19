import { ErrorMessage } from "@rafty/ui";
import { FallbackProps } from "react-error-boundary";

export function ErrorComponent({ error }: FallbackProps) {
  return (
    <div className="flex h-[500px] w-full flex-col items-center justify-center gap-3">
      <ErrorMessage className="!text-3xl font-semibold">
        {error.name}
      </ErrorMessage>
      <ErrorMessage className="text-lg">{error?.message}</ErrorMessage>
    </div>
  );
}
