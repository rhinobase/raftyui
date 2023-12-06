import { Tab, TabTrigger, TabList, TabContent } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tab> = {
  title: "Components / Tab",
  args: {
    size: "md",
    orientation: "horizontal",
    variant: "line",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["enclosed", "line"] },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Variants: Story = {
  render: ({ size, orientation, variant }) => (
    <>
      <Tab
        defaultValue="tab1"
        size={size}
        orientation={orientation}
        variant={variant}
      >
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
