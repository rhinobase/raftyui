import { ErrorMessage, FieldControl, InputField, Label, Text } from "@rafty/ui";

export const field_control_examples = {
  "field-control:usage": (
    <FieldControl name="name">
      <Label>Name</Label>
      <InputField />
      <Text>Sample </Text>
    </FieldControl>
  ),
  "field-control:orientation": (
    <FieldControl name="name" orientation="col">
      <Label>Name</Label>
      <InputField />
      <Text>Sample </Text>
    </FieldControl>
  ),
  "field-control:required": (
    <FieldControl name="name" isRequired>
      <Label>Name</Label>
      <InputField />
      <Text>Sample </Text>
    </FieldControl>
  ),
  "field-control:disabled": (
    <FieldControl name="name" isDisabled>
      <Label>Name</Label>
      <InputField />
      <Text>Sample </Text>
    </FieldControl>
  ),
  "field-control:loading": (
    <FieldControl name="name" isLoading>
      <Label>Name</Label>
      <InputField />
      <Text>Sample </Text>
    </FieldControl>
  ),
  "field-control:invalid": (
    <FieldControl name="name" isInvalid>
      <Label>Name</Label>
      <InputField />
      <Text></Text>
    </FieldControl>
  ),
  "field-control:errormessage": (
    <FieldControl name="name">
      <Label>Name</Label>
      <InputField />
      <ErrorMessage>Sample error message</ErrorMessage>
    </FieldControl>
  ),
};
