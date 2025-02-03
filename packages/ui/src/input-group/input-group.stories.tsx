import {
  CheckIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../input-field/index.js";
import { InputGroup } from "./InputGroup.js";
import { LeftAddon } from "./LeftAddon.js";
import { Prefix } from "./Perfix.js";
import { RightAddon } from "./RightAddon.js";
import { Suffix } from "./Suffix.js";

const meta: Meta<typeof InputField> = {
  title: "Form / InputGroup",
  args: {
    size: "md",
    isRequired: false,
    isDisabled: false,
    isReadOnly: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  render: ({ size, isDisabled, isReadOnly, isRequired }) => (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <h4 className="text-center font-bold dark:text-white">
        Input Group With Prefix and Suffix And Size
      </h4>
      <InputGroup size={size}>
        <Prefix>
          <PhoneIcon className="text-secondary-500 size-4 stroke-2" />
        </Prefix>
        <InputField
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
        <Suffix>
          <CheckIcon className="size-4 stroke-2 text-green-500" />
        </Suffix>
      </InputGroup>
      <InputGroup size={size}>
        <Prefix>
          <PhoneIcon className="text-secondary-500 size-4 stroke-2" />
        </Prefix>
        <InputField
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
      </InputGroup>
      <InputGroup size={size}>
        <InputField
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
        <Suffix>
          <CheckIcon className="size-4 stroke-2 text-green-500" />
        </Suffix>
      </InputGroup>

      <h4 className="text-center font-bold dark:text-white">
        Input Group With Left and Right Addon
      </h4>
      <InputGroup size={size}>
        <LeftAddon className="text-secondary-500 text-sm font-medium">
          +234
        </LeftAddon>
        <InputField
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
        <RightAddon>
          <MagnifyingGlassIcon className="text-secondary-500 size-4 stroke-2" />
        </RightAddon>
      </InputGroup>
      <InputGroup size={size}>
        <LeftAddon className="text-secondary-500 text-sm font-medium">
          +234
        </LeftAddon>
        <InputField
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
      </InputGroup>
      <InputGroup size={size}>
        <InputField
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
        <RightAddon>
          <MagnifyingGlassIcon className="text-secondary-500 size-4 stroke-2" />
        </RightAddon>
      </InputGroup>
      <InputGroup size={size}>
        <LeftAddon className="text-secondary-500 text-sm font-medium">
          +234
        </LeftAddon>
        <Prefix>
          <PhoneIcon className="text-secondary-500 size-4" />
        </Prefix>
        <InputField />
        <Suffix>
          <CheckIcon className="size-4 stroke-2 text-green-500" />
        </Suffix>
        <RightAddon>
          <MagnifyingGlassIcon className="text-secondary-500 size-4 stroke-2" />
        </RightAddon>
      </InputGroup>
    </div>
  ),
};
