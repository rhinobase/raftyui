import {
  Bars3Icon,
  BellIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../button";
import { classNames } from "../utils";
import { type StepType, Stepper } from "./Stepper";

const meta: Meta<typeof Stepper> = {
  title: "Components / Stepper",
  args: {
    size: "md",
    direction: "horizontal",
    isDisabled: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const STEPS: StepType[] = [
  {
    title: "Home",
    subTitle: "Aliquam",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Menu",
    description: "Donec et lectus a risus",
  },
  {
    title: "Article",
    description: "Donec et lectus a risus",
  },
];

export const Default: Story = {
  render: ({ size, direction, isDisabled }) => (
    <Stepper
      size={size}
      direction={direction}
      isDisabled={isDisabled}
      steps={STEPS}
    />
  ),
};

export const ValueWithState: Story = {
  render: ({ size, direction, isDisabled }) => {
    const [current, setCurrent] = useState(0);

    const next = () => {
      setCurrent((prev) => (prev < 3 ? prev + 1 : prev));
    };

    const prev = () => {
      setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
    };

    return (
      <>
        <Stepper
          value={current}
          direction={direction}
          isDisabled={isDisabled}
          size={size}
          steps={STEPS}
        />
        <div className="mt-4 flex w-full justify-between">
          <Button onClick={prev} isDisabled={current <= 0}>
            Previous
          </Button>
          <Button onClick={next} isDisabled={current >= 3}>
            Next
          </Button>
        </div>
      </>
    );
  },
};

export const Controlled: Story = {
  render: ({ size, direction, isDisabled }) => {
    const initial = 2;
    const [current, setCurrent] = useState(initial);

    return (
      <Stepper
        size={size}
        value={current}
        initial={initial}
        direction={direction}
        isDisabled={isDisabled}
        onValueChange={setCurrent}
        steps={STEPS}
      />
    );
  },
};

const STEPS_WITH_ICONS = [
  {
    title: "Home",
    icon: (
      <Bars3Icon height={40} width={40} className="stroke-2 text-blue-500" />
    ),
  },
  {
    title: "Menu",
    description: "Donec et lectus a risus",
    icon: (
      <FaceSmileIcon
        height={40}
        width={40}
        className="stroke-2 text-blue-500"
      />
    ),
  },
  {
    title: "Article",
    icon: (
      <BellIcon height={40} width={40} className="stroke-2 text-blue-500" />
    ),
  },
];

export const WithIcon: Story = {
  render: ({ size, direction, isDisabled }) => {
    return (
      <Stepper
        size={size}
        direction={direction}
        isDisabled={isDisabled}
        steps={STEPS_WITH_ICONS}
      />
    );
  },
};

export const CustomConnector: Story = {
  render: ({ size, direction, isDisabled }) => (
    <Stepper
      size={size}
      direction={direction}
      value={1}
      connector={({ active }) => (
        <div
          className={classNames(
            direction === "horizontal"
              ? "h-px w-full border-t-2"
              : "ml-5 h-full w-px border-r-2",
            active ? "border-blue-500" : "border-secondary-400 border-dotted",
          )}
        />
      )}
      isDisabled={isDisabled}
      steps={STEPS}
    />
  ),
};
