import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/index.js";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "./Dialog.js";

const meta: Meta<typeof Dialog> = {
  title: "Components / Dialog",
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (props) => (
    <Dialog {...props}>
      <DialogTrigger>open</DialogTrigger>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ex
          pariatur veritatis, officia quos commodi facilis, labore sed omnis,
          voluptate ipsa inventore vel sunt maxime eveniet ipsam nulla iure
          accusamus?
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
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
            <XMarkIcon className="size-5 " />
          </Button>
        </DialogClose>
      </DialogOverlay>
      <DialogContent
        isUnstyled
        className="fixed left-1/2 top-1/2 z-50 h-max w-full max-w-5xl -translate-x-1/2 -translate-y-1/2"
        showCloseButton={false}
      >
        <Button size="icon" className="fixed -right-60 top-1/2 ">
          <ChevronRightIcon className="size-7" />
        </Button>
        <Button size="icon" className="fixed -left-60 top-1/2 ">
          <ChevronLeftIcon className="size-7" />
        </Button>
        <img
          src="https://images.unsplash.com/photo-1682695795798-1b31ea040caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="size-full object-contain"
          alt="Unsplash"
          width={1000}
          height={1000}
        />
      </DialogContent>
    </Dialog>
  ),
};
