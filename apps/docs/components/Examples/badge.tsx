import { Badge } from "@rafty/ui";

export const badge_examples = {
  "badge:size": (
    <div className="flex items-center gap-1">
      <Badge size="sm" />
      <Badge size="md" />
      <Badge size="lg" />
    </div>
  ),
  "badge:status": (
    <div className="flex flex-wrap items-center gap-1">
      <Badge status="error" />
      <Badge status="info" />
      <Badge status="secondary" />
      <Badge status="success" />
      <Badge status="warning" />
    </div>
  ),
};
