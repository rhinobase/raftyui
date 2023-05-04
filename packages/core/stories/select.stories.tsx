import { Meta, StoryObj } from "@storybook/react";
import { Select, Option } from "../src/select";

const meta: Meta<typeof Select> = {
  title: "Components / Select",
  decorators: [
    (Story) => (
      <div className="w-full flex flex-col items-center justify-center gap-2 mx-auto max-w-3xl h-[calc(100vh-40px)]">
        <Story />
      </div>
    ),
  ],
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
type Story = StoryObj<typeof Select>;

export const Variants: Story = {
  render: ({ sizes }) => (
    <div className="max-w-2xl w-full flex flex-col gap-4">
      <Select sizes={sizes}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
      <h4 className="font-bold">GHOST</h4>
      <Select className="" variant="ghost" sizes={sizes}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
      <h4 className="font-bold">Solid</h4>
      <Select className="" variant="solid" sizes={sizes}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
      <h4 className="font-bold">unStyled</h4>
      <Select className="" unstyled sizes={sizes}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </div>
  ),
};
