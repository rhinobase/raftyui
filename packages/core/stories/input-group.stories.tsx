import { Meta, StoryObj } from "@storybook/react";
import {
  FieldControl,
  InputGroup,
  Prefix,
  Suffix,
  InputField,
  LeftAddon,
  RightAddon,
} from "../src";
import {
  CheckIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const meta: Meta<typeof InputField> = {
  title: "Form / InputGroup",
  args: {
    size: "md",
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

export const Variants: Story = {
  render: ({ size }) => (
    <>
      <div className="flex w-full max-w-2xl flex-col gap-4">
        <h4 className="text-center font-bold dark:text-white">
          Input Group With Prefix and Suffix And Size
        </h4>
        <FieldControl name="input_group">
          <InputGroup>
            <Prefix>
              <PhoneIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
            </Prefix>
            <InputField size={size} />
            <Suffix>
              <CheckIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
            </Suffix>
          </InputGroup>
        </FieldControl>

        <h4 className="text-center font-bold dark:text-white">
          Input Group With Left and Right Addon
        </h4>
        <FieldControl name="input_group">
          <InputGroup>
            <LeftAddon>+234</LeftAddon>
            <InputField size={size} />
            <RightAddon>
              <MagnifyingGlassIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
            </RightAddon>
          </InputGroup>
        </FieldControl>
      </div>
    </>
  ),
};
