import type { Meta, StoryObj } from "@storybook/react";
import { AnnotatedText } from "./AnnotatedText";

const meta: Meta<typeof AnnotatedText> = {
  title: "Components / AnnotatedText ",
};

export default meta;
type Story = StoryObj<typeof AnnotatedText>;

const content =
  "I live in San Francisco and my name is John. I have an isue with the order I placed two weeks ago with your company! I paid 300$ for this already! Please help out";

export const Default: Story = {
  render: () => <AnnotatedText content={content} />,
};
