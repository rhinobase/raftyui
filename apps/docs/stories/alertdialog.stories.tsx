import { Button } from "@rhino/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@rhino/alertdialog";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AlertDialog> = {
  title: "Components / Alert Dialog",
  args: {
    size: "md",
    barebone: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    barebone: {},
  },
};
export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: ({ size, barebone }) => (
    <>
      <AlertDialog size={size} barebone={barebone}>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogOverlay />
        <AlertDialogContent data-cy="dialogcontent">
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogBody>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogBody>
          <div className="mt-4 flex justify-end gap-6">
            <AlertDialogCancel asChild>
              <Button variant="outline">Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button colorScheme="error">Yes, delete account</Button>
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  ),
};
