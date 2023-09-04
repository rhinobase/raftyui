import { Toast } from "@rafty/ui";

export default function ToastExample() {
  return (
    <div className="flex gap-4 ">
      <Toast title="Success Banner" severity="error" />
    </div>
  );
}
