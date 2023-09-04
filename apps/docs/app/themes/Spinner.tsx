import { Spinner } from "@rafty/ui";

export default function Spinne() {
  return (
    <div className="flex justify-center items-center gap-6">
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
    </div>
  );
}
