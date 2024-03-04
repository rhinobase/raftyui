import RaftyIcon from "@rafty/icons";
import { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../input-field";
import { InputGroup } from "./InputGroup";
import { LeftAddon } from "./LeftAddon";
import { Prefix } from "./Perfix";
import { RightAddon } from "./RightAddon";
import { Suffix } from "./Suffix";

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
          <RaftyIcon
            type="phone"
            className="text-secondary-500 size-4 stroke-2"
          />
        </Prefix>
        <InputField
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
        <Suffix>
          <RaftyIcon type="check" className="size-4 stroke-2 text-green-500" />
        </Suffix>
      </InputGroup>
      <InputGroup size={size}>
        <Prefix>
          <RaftyIcon
            type="phone"
            className="text-secondary-500 size-4 stroke-2"
          />
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
          <RaftyIcon type="check" className="size-4 stroke-2 text-green-500" />
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
          <RaftyIcon
            type="magnifying-glass"
            className="text-secondary-500 size-4 stroke-2"
          />
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
          <RaftyIcon
            type="magnifying-glass"
            className="text-secondary-500 size-4 stroke-2"
          />
        </RightAddon>
      </InputGroup>
      <InputGroup size={size}>
        <LeftAddon className="text-secondary-500 text-sm font-medium">
          +234
        </LeftAddon>
        <Prefix>
          <RaftyIcon type="phone" className="text-secondary-500 size-4" />
        </Prefix>
        <InputField />
        <Suffix>
          <RaftyIcon type="check" className="size-4 stroke-2 text-green-500" />
        </Suffix>
        <RightAddon>
          <RaftyIcon
            type="magnifying-glass"
            className="text-secondary-500 size-4 stroke-2"
          />
        </RightAddon>
      </InputGroup>
    </div>
  ),
};
