import { Meta, StoryObj } from "@storybook/react";
import { ListItem, OrderedList } from "../src";

const meta: Meta<typeof OrderedList> = {
  title: "Components / OrderedList",
  decorators: [
    (Story) => (
      <div className="w-full flex flex-col items-center justify-center gap-2 mx-auto max-w-3xl h-[calc(100vh-40px)]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OrderedList>;

export const Variants: Story = {
  render: () => (
    <>
      <OrderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </OrderedList>
    </>
  ),
};
