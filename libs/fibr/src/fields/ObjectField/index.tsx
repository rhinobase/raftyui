import type { FObjectFieldType } from "@fibr/core";
import { type FieldProps, RenderField } from "@fibr/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  classNames,
} from "@rafty/ui";
import { useId } from "react";
import { FieldWrapper } from "../FieldWrapper";

export function ObjectField({ name, field }: FieldProps<FObjectFieldType>) {
  // All the groups in the object field
  const groupings =
    field.fieldsets?.reduce<Record<string, string>>((prev, cur) => {
      prev[cur.value] = cur.title;
      return prev;
    }, {}) ?? {};

  // Grouped fields
  const groups: Record<string, string[]> = {};

  // Fields which are not part of any group or entry for the group doesn't exists
  const remaing_fields: string[] = [];

  // biome-ignore lint/complexity/noForEach: <explanation>
  Object.entries(field.fields).forEach(([field_name, field_props]) => {
    if (!field_props.fieldset || !groupings[field_props.fieldset])
      remaing_fields.push(field_name);
    else {
      const doesExist = groups[field_props.fieldset];

      if (doesExist) groups[field_props.fieldset].push(field_name);
      else groups[field_props.fieldset] = [field_name];
    }
  });

  return (
    <FieldWrapper
      name={name}
      label={field.label}
      description={field.description}
      required={field.required as boolean | undefined}
    >
      <div
        className={classNames(
          field.hidden ? "hidden" : "block",
          field.parent?.type === "array"
            ? "p-3"
            : "rounded-md border-2 border-dotted p-5",
          "h-full space-y-2.5",
        )}
      >
        {Object.entries(groups).map(([value, field_names]) => {
          const key = useId();
          return (
            <Accordion type="single" collapsible key={key} defaultValue={value}>
              <AccordionItem value={value}>
                <AccordionTrigger className="w-[400px] rounded-md !bg-transparent !px-0">
                  {groupings[value]}
                </AccordionTrigger>
                <AccordionContent className="border-secondary-200/80 dark:border-secondary-800 border-t !px-0 !pb-0 !pt-2">
                  <GroupedFieldsRender
                    name={name}
                    field={field}
                    field_names={field_names}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
        {remaing_fields.map((field_name) => {
          const key = useId();
          return (
            <RenderField
              key={key}
              name={`${name}.${field_name}`}
              field={field.fields[field_name]}
            />
          );
        })}
      </div>
    </FieldWrapper>
  );
}

function GroupedFieldsRender({
  name,
  field,
  field_names,
}: {
  name: string;
  field: FObjectFieldType;
  field_names: string[];
}) {
  return field_names.map((field_name, index) => {
    const key = useId();
    return (
      <RenderField
        key={key}
        name={`${name}.${field_name}`}
        field={field.fields[field_name]}
      />
    );
  });
}
