import { Toast } from "@rafty/ui";

export default function ToastPad() {
  return (
    <div className="flex gap-4">
      <Toast title="Success Banner" severity="error" />
      <Toast title="Success Banner" severity="success" />
      <Toast title="Success Banner" severity="info" />
      <Toast title="Success Banner" severity="warning" />
    </div>
  );
}
