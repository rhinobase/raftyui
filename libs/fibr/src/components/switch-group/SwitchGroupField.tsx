import { useThread } from "@fibr/react";
import { Label, Switch } from "@rafty/ui";
import { useId } from "react";
import { FieldWrapper } from "../FieldWrapper";

export type SwitchGroupField = {
  name: string;
  label: string;
};

export function SwitchGroupField() {
  // Getting component config
  const config = useThread<SwitchGroupField>();

  const options = config;

  if (options)
    return (
      <FieldWrapper name={config.name} label={config.label}>
        {/* <div className="space-y-2.5">
          {options.map((option) => {
            const key = useId();
            return (
              <div className="flex gap-2" key={key}>
                <Switch id={option} />
                <Label htmlFor={option}>{option}</Label>
              </div>
            );
          })}
        </div> */}
      </FieldWrapper>
    );

  return <></>;
}
