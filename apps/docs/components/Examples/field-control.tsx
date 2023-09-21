import { ErrorMessage, FieldControl, InputField, Label } from "@rafty/ui";

export const field_control_examples = {
  "field-control:usage": (
    <FieldControl name="name">
      <Label>Label</Label>
      <InputField />
      <ErrorMessage>Error message will be displayed here</ErrorMessage>
    </FieldControl>
  ),
  "field-control:orientation": (
    <FieldControl name="name" orientation="row">
      <Label>Name</Label>
      <InputField />
    </FieldControl>
  ),
  "field-control:required": (
    <FieldControl name="name" isRequired>
      <Label>Name</Label>
      <InputField />
    </FieldControl>
  ),
  "field-control:disabled": (
    <FieldControl name="name" isDisabled>
      <Label>Name</Label>
      <InputField />
    </FieldControl>
  ),
  "field-control:readonly": (
    <FieldControl name="name" isReadOnly>
      <Label>Name</Label>
      <InputField defaultValue="This is a sample default text" />
    </FieldControl>
  ),
  "field-control:loading": (
    <FieldControl name="name" isLoading>
      <Label>Name</Label>
      <InputField />
    </FieldControl>
  ),
  "field-control:invalid": (
    <FieldControl name="name" isInvalid>
      <Label>Name</Label>
      <InputField />
    </FieldControl>
  ),
  "field-control:errormessage": (
    <FieldControl name="name">
      <Label>Name</Label>
      <InputField />
      <ErrorMessage>Error message will be displayed here</ErrorMessage>
    </FieldControl>
  ),
};
