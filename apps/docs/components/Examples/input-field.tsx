import { InputField } from "@rafty/ui";

export const input_field_examples = {
  "input-field:usage": <InputField placeholder="Basic usage" />,
  "input-field:size": (
    <div className="space-y-4">
      <InputField size="sm" />
      <InputField size="md" />
      <InputField size="lg" />
    </div>
  ),
  "input-field:variant": (
    <div className="space-y-4">
      <InputField variant="solid" />
      <InputField variant="ghost" placeholder="Enter Value" />
      <InputField variant="outline" />
    </div>
  ),
  "input-field:required": <InputField isRequired />,
  "input-field:disabled": <InputField isDisabled />,
  "input-field: unstyled ": <InputField isUnstyled />,
};
