import {
  Button,
  AlertDialog,
  AlertDialogAction,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AlertDialog> = {
  title: "Components / Alert Dialog",
  args: {
    size: "md",
    isBarebone: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    isBarebone: {},
  },
};
export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: ({ size, isBarebone }) => (
    <AlertDialog size={size} isBarebone={isBarebone}>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogOverlay />
      <AlertDialogContent data-cy="dialogcontent">
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
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
  ),
};
