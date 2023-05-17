import { Meta, StoryObj } from "@storybook/react";
import {
  InputGroup,
  Prefix,
  Suffix,
  InputField,
  LeftAddon,
  RightAddon,
} from "@rhino/ui";
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

export const Default: Story = {
  render: ({ size }) => (
    <>
      <div className="flex w-full max-w-2xl flex-col gap-4">
        <h4 className="text-center font-bold dark:text-white">
          Input Group With Prefix and Suffix And Size
        </h4>
        <InputGroup>
          <Prefix>
            <PhoneIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
          </Prefix>
          <InputField size={size} />
          <Suffix>
            <CheckIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
          </Suffix>
        </InputGroup>
        <InputGroup>
          <Prefix>
            <PhoneIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
          </Prefix>
          <InputField size={size} />
        </InputGroup>
        <InputGroup>
          <InputField size={size} />
          <Suffix>
            <CheckIcon className="dark:text-secondary-200 h-4 w-4 text-black" />
          </Suffix>
        </InputGroup>

        <h4 className="text-center font-bold dark:text-white">
          Input Group With Left and Right Addon
        </h4>
        <InputGroup>
          <LeftAddon>+234</LeftAddon>
          <InputField size={size} />
          <RightAddon>
            <MagnifyingGlassIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
          </RightAddon>
        </InputGroup>
        <InputGroup>
          <LeftAddon>+234</LeftAddon>
          <InputField size={size} />
        </InputGroup>
        <InputGroup>
          <InputField size={size} />
          <RightAddon>
            <MagnifyingGlassIcon className="dark:text-secondary-200 h-5 w-5 text-black" />
          </RightAddon>
        </InputGroup>
      </div>
    </>
  ),
};
