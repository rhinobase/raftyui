import { Tab, TabTrigger, TabList, TabContent } from "@rafty/tab";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tab> = {
  title: "Components / Tab",
  args: {
    size: "md",
    orientation: "horizontal",
  },
  argTypes: {
    size: {
      control: "select",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Variants: Story = {
  render: ({ size, orientation }) => (
    <>
      <div
        data-cy="tab-1"
        className="w-[640px] rounded-md border py-2 dark:border-zinc-700"
      >
        <Tab defaultValue="tab1" size={size} orientation={orientation}>
          <TabList>
            <TabTrigger value="tab1">Tab1</TabTrigger>
            <TabTrigger value="tab2" disabled>
              Tab2
            </TabTrigger>
            <TabTrigger value="tab3">Tab2</TabTrigger>
          </TabList>
          <TabContent value="tab1" className="p-4">
            1 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
          <TabContent value="tab3" className="p-4">
            2 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
        </Tab>
      </div>
      <div className="font-medium">variant=enclosed</div>
      <div className="w-[640px] rounded-md">
        <Tab
          defaultValue="tab1"
          size={size}
          orientation={orientation}
          variant="enclosed"
        >
          <TabList>
            <TabTrigger value="tab1">Tab1</TabTrigger>
            <TabTrigger value="tab2">Tab2</TabTrigger>
          </TabList>
          <TabContent value="tab1" className="p-4">
            1 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
          <TabContent value="tab2" className="p-4">
            2 large-scale networks, high-radix switches reduce hop and switch
            count, which decreases latency and power
          </TabContent>
        </Tab>
      </div>
    </>
  ),
};
