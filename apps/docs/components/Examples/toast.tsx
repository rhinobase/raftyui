import { Toast } from "@rafty/ui";

export const toast_examples = {
  "toast:usage": <Toast title="Success Banner" severity="success" />,
  "toast:message": (
    <Toast
      title="Success Banner"
      message="Data uploaded to the server. Fire on!"
      severity="success"
    />
  ),
  "toast:severity": (
    <div>
      <Toast title="Success Banner" severity="success" />
      <Toast title="Success Banner" severity="warning" />
      <Toast title="Success Banner" severity="info" />
      <Toast title="Success Banner" severity="error" />
    </div>
  ),
  "toast:visible": <Toast title="Success Banner" severity="success" visible />,
  "toast:hot-toast": (
    <Toast
      title="Your request have been submitted, we will contact you shortly!"
      severity="success"
    />
  ),
};
