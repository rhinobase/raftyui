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
    isBarebone: false,
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
  render: ({ status, size, variant, isBarebone }) => (
    <Alert
      size={size}
      status={status}
      variant={variant}
      isBarebone={isBarebone}
    >
      <AlertIcon />
      <AlertTitle id="title">Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
    </Alert>
  ),
};

export const WithAction: Story = {
  render: ({ status, size, variant, isBarebone }) => (
    <Alert
      variant={variant}
      size={size}
      status={status}
      isBarebone={isBarebone}
    >
      <AlertIcon />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription>Description</AlertDescription>
      <div className="flex-1" />
      <Button>Action</Button>
    </Alert>
  ),
};
