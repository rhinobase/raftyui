import { Meta, StoryObj } from "@storybook/react";
import { FieldControl, InputGroup, Prefix, Suffix, InputField } from "../src";
import {
  CheckIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { LeftAddon } from "../src/input-field/LeftAddon";
import { RightAddon } from "../src/input-field/RightAddon";

const meta: Meta<typeof InputField> = {
  title: "Components / InputGroup",
  args: {
    sizes: "md",
  },
  argTypes: {
    sizes: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Variants: Story = {
  render: ({ sizes }) => (
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
            <InputField className="!px-10" sizes={sizes} />
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
            <InputField className="relative z-[1] rounded-none" sizes={sizes} />
            <RightAddon>
              <MagnifyingGlassIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
            </RightAddon>
          </InputGroup>
        </FieldControl>
      </div>
    </>
  ),
};
