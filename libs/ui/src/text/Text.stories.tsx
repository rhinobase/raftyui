import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components / Text",
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: () => (
    <Text>
      Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur
      porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi
      velit odio nam nulla unde amet odit pariatur at!
    </Text>
  ),
};
