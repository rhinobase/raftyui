import { Badge } from "@rafty/ui";

export function BadgeExample() {
  return (
    <div className="flex flex-wrap items-center gap-1">
      <Badge size="lg" status="error" />
      <Badge size="lg" status="info" />
      <Badge size="lg" status="secondary" />
      <Badge size="lg" status="success" />
      <Badge size="lg" status="warning" />
    </div>
  );
}
