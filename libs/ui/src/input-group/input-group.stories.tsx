import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  CheckIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { InputField } from "../input-field";
import { InputGroup } from "./InputGroup";
import { Prefix } from "./Perfix";
import { Suffix } from "./Suffix";
import { LeftAddon } from "./LeftAddon";
import { RightAddon } from "./RightAddon";

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
      <InputGroup>
        <Prefix>
          <PhoneIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
        </Prefix>
        <InputField
          size={size}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
        <Suffix>
          <CheckIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
        </Suffix>
      </InputGroup>
      <InputGroup>
        <Prefix>
          <PhoneIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
        </Prefix>
        <InputField
          size={size}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
      </InputGroup>
      <InputGroup>
        <InputField
          size={size}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
        <Suffix>
          <CheckIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
        </Suffix>
      </InputGroup>

      <h4 className="text-center font-bold dark:text-white">
        Input Group With Left and Right Addon
      </h4>
      <InputGroup>
        <LeftAddon>+234</LeftAddon>
        <InputField
          size={size}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
        <RightAddon>
          <MagnifyingGlassIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
        </RightAddon>
      </InputGroup>
      <InputGroup>
        <LeftAddon>+234</LeftAddon>
        <InputField
          size={size}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
      </InputGroup>
      <InputGroup>
        <InputField
          size={size}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
        <RightAddon>
          <MagnifyingGlassIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
        </RightAddon>
      </InputGroup>
    </div>
  ),
};
