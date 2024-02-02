import { Meta, StoryObj } from "@storybook/react";
import { Tab, TabContent, TabList, TabTrigger } from "./Tab";

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
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Variants: Story = {
  render: ({ size, orientation, variant }) => (
    <Tab
      defaultValue="tab1"
      size={size}
      orientation={orientation}
      variant={variant}
    >
      <TabList>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
        <TabTrigger value="tab3">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
        laboriosam eos aliquam quae rerum. Doloribus aperiam perferendis natus.
        Laborum magni unde reiciendis fuga officiis aperiam quidem doloremque
        libero, eius cupiditate?
      </TabContent>
      <TabContent value="tab2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non deleniti
        aut quod facilis magni aliquam maxime, placeat esse ducimus ipsum
        perspiciatis ad corrupti, dolor distinctio voluptatem architecto cum
        voluptates at?
      </TabContent>
      <TabContent value="tab3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
        repellendus dolorem ipsam minus laudantium illum laboriosam harum, ipsa
        tempore accusantium officiis cum consequuntur doloribus iste quibusdam
        ea deleniti odio. Quidem.
      </TabContent>
    </Tab>
  ),
};
