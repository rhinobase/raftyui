import { Button } from "../src/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../src/alertdailog/AlertDialog";
import {
  within,
  userEvent,
  screen,
  fireEvent,
} from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { DialogOverlay } from "../src/dialog";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.getByRole("button");

    //Test For Dialog Open
    await userEvent.click(button);
    await expect(screen.getByRole("alertdialog")).toBeInTheDocument();
    await expect(screen.getByRole("alertdialog")).toBeVisible();

    //Test for Close Button Working
    const closebtn = await screen.getByText("Cancel").closest("button");
    await fireEvent.click(closebtn as HTMLButtonElement);

    //Test For Dialog Open
    await userEvent.click(button);
    await expect(screen.getByRole("alertdialog")).toBeInTheDocument();
    await expect(screen.getByRole("alertdialog")).toBeVisible();

    //Test for Close Button Working
    const confirmbtn = await screen
      .getByText("Yes, delete account")
      .closest("button");
    await fireEvent.click(confirmbtn as HTMLButtonElement);
    
  },

  render: ({ size, barebone }) => (
    <>
      <AlertDialog size={size} barebone={barebone}>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogOverlay />
        <AlertDialogContent>
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
