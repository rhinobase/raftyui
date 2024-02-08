import { Card, CardContent } from "@rafty/ui";
import { PropsWithChildren } from "react";

export function CardWrapper(props: PropsWithChildren<CardContent>) {
  return (
    <Card>
      <CardContent {...props} />
    </Card>
  );
}
