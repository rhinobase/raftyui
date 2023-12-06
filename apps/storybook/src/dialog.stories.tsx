import { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
  Button,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from "@rafty/ui";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const meta: Meta<typeof Dialog> = {
  title: "Components / Dialog",
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: ({ size }) => (
    <Dialog size={size}>
      <DialogTrigger>open</DialogTrigger>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
        <DialogFooter>
          <Button>Save Change</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ImageDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogOverlay>
        <DialogClose asChild>
          <Button size="icon" variant="ghost" className="fixed right-4 top-4">
            <XMarkIcon className="h-5 w-5 " />
          </Button>
        </DialogClose>
      </DialogOverlay>
      <DialogContent
        isUnstyled
        className="fixed left-1/2 top-1/2 z-50 h-max w-full max-w-5xl -translate-x-1/2 -translate-y-1/2"
        showCloseButton={false}
      >
        <Button size="icon" className="fixed -right-60 top-1/2 ">
          <ChevronRightIcon className="h-7 w-7" />
        </Button>
        <Button size="icon" className="fixed -left-60 top-1/2 ">
          <ChevronLeftIcon className="h-7 w-7" />
        </Button>
        <img
          src="https://images.unsplash.com/photo-1682695795798-1b31ea040caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="h-full w-full object-contain"
          alt="Unsplash"
          width={1000}
          height={1000}
        />
      </DialogContent>
    </Dialog>
  ),
};
