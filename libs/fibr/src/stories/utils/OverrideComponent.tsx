import { FieldProps } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "../../fields/FieldWrapper";

export function OverrideComponent(props: FieldProps) {
  const { name, field } = props;
  const { register, watch } = useFormContext();
  const value = watch(name, "");
  const characterCount = value.length;

  return (
    <FieldWrapper
      name={name}
      label={field.label}
      description={field.description}
    >
      <InputField {...register(name)} />
      <p>{characterCount > 0 && characterCount}</p>
    </FieldWrapper>
  );
}
