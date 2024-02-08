import { Toast } from "@rafty/ui";

export function ToastExample() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Toast title="Success Banner" severity="success" />
      <Toast title="Success Banner" severity="warning" />
      <Toast title="Success Banner" severity="info" />
      <Toast title="Success Banner" severity="error" />
    </div>
  );
}
