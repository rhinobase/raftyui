import { createThread, useThread } from "@fibr/react";
import { FieldWrapper } from "../FieldWrapper";

export type DividerField = {
  name: string;
};

export function DividerField() {
  const config = useThread<DividerField>();

  return (
    <FieldWrapper name={config.name}>
      <div className="bg-secondary-300 dark:bg-secondary-700 h-px w-full" />
    </FieldWrapper>
  );
}

export const divider = createThread<DividerField>("divider");
