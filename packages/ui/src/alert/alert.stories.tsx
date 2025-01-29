import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components / Alert",
  args: {
    status: "info",
    size: "md",
    variant: "simple",
    isUnstyled: false,
  },
  argTypes: {
    status: {
      control: "select",
      options: ["error", "warning", "info", "success"],
    },
    variant: {
      control: "select",
      options: ["simple", "solid", "left-accent", "top-accent"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (props) => (
    <Alert {...props}>
      <AlertIcon />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  ),
};

export const WithAction: Story = {
  render: (props) => (
    <Alert {...props}>
      <AlertIcon />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
      <div className="flex-1" />
      <div className="dark:bg-secondary-900 rounded-md bg-white">
        <Button>Button</Button>
      </div>
    </Alert>
  ),
};
