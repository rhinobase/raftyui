import { Meta, StoryObj } from "@storybook/react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
} from "@rafty/ui";

const meta: Meta<typeof Alert> = {
  title: "Components / Alert",
  args: {
    status: "info",
    size: "md",
    variant: "simple",
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

export const Variants: Story = {
  render: ({ status, size, variant }) => (
    <Alert size={size} status={status} variant={variant}>
      <AlertIcon />
      <AlertTitle id="title">Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  ),
};

export const AlertWithAction: Story = {
  render: ({ status, size, variant }) => (
    <div className="flex w-full max-w-3xl flex-col gap-4">
      <Alert variant={variant} size={size} status={status}>
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
        <div className="flex-1" />
        <Button>Action</Button>
      </Alert>
    </div>
  ),
};
