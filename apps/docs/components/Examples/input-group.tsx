import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { InputGroup, LeftAddon, InputField, RightAddon } from "@rafty/ui";

export const input_group_examples = {
  "input-group": (
    <InputGroup>
      <LeftAddon>+234</LeftAddon>
      <InputField />
      <RightAddon>
        <MagnifyingGlassIcon />
      </RightAddon>
    </InputGroup>
  ),
};
