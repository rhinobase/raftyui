import { Toast } from "@rafty/ui";

export default function ToastExample() {
  return (
    <div className="flex gap-4 flex-col">
      {(["info", "success", "warning", "error"] as const).map((s) => (
        <Toast key={s} title={`${s} banner`} severity={s} />
      ))}
    </div>
  );
}
