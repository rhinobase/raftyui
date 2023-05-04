import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button } from "../src";

const meta: Meta<typeof Alert> = {
  title: "Components / Alert",
  decorators: [
    (Story) => (
      <div className="w-full flex flex-col items-center justify-center gap-2 mx-auto max-w-3xl h-[calc(100vh-40px)]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-10 max-w-6xl w-full">
      <div className="flex flex-col gap-4">
        <p>Simple Variant</p>
        <Alert size="md" status="error">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert size="md" status="info">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert size="md" status="success">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert size="md" status="warning">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      </div>
      <div className="flex flex-col gap-4">
        <p>Solid Variant</p>
        <Alert variant="solid" size="md" status="error">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert variant="solid" size="md" status="info">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert variant="solid" size="md" status="success">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert variant="solid" size="md" status="warning">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      </div>
      <div className="flex flex-col gap-4">
        <p>left-accent Variant</p>
        <Alert variant="left-accent" size="md" status="error">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert variant="left-accent" size="md" status="info">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert variant="left-accent" size="md" status="success">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert variant="left-accent" size="md" status="warning">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      </div>
      <div className="flex flex-col gap-4">
        <p>top-accent Variant</p>
        <Alert variant="top-accent" size="md" status="error">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert variant="top-accent" size="md" status="info">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert variant="top-accent" size="md" status="success">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
        <Alert variant="top-accent" size="md" status="warning">
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      </div>
    </div>
  ),
};
export const AlertWithAction: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-3xl w-full">
      <Alert variant="solid" size="sm" status="error">
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
        <div className="flex-1" />
        <Button colorScheme="error">Action</Button>
      </Alert>
      <Alert variant="simple" size="md" status="error">
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
        <div className="flex-1" />
        <Button colorScheme="error" variant="outline">
          Action
        </Button>
      </Alert>
    </div>
  ),
};
