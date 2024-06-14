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
  render: (props) => (
    <div
      className={classNames(
        props.direction === "vertical" ? "h-[500px]" : "h-max",
      )}
    >
      <Stepper {...props} steps={STEPS} />
    </div>
  ),
};

export const ValueWithState: Story = {
  render: (props) => {
    const [current, setCurrent] = useState(1);

    const next = () => {
      setCurrent((prev) => (prev < 3 ? prev + 1 : prev));
    };

    const prev = () => {
      setCurrent((prev) => (prev > 1 ? prev - 1 : prev));
    };

    return (
      <div
        className={classNames(
          props.direction === "vertical" ? "h-[500px]" : "h-max",
        )}
      >
        <Stepper {...props} value={current} steps={STEPS} />
        <div className="mt-4 flex w-full justify-between">
          <Button onClick={prev} isDisabled={current <= 1}>
            Previous
          </Button>
          <Button onClick={next} isDisabled={current >= 3}>
            Next
          </Button>
        </div>
      </div>
    );
  },
};

export const Controlled: Story = {
  render: (props) => {
    const [current, setCurrent] = useState(1);

    return (
      <div
        className={classNames(
          props.direction === "vertical" ? "h-[500px]" : "h-max",
        )}
      >
        <Stepper
          {...props}
          value={current}
          onValueChange={setCurrent}
          steps={STEPS}
        />
      </div>
    );
  },
};

const iconClasses =
  "group-data-[active=true]/stepper-item:stroke-primary-500 dark:group-data-[active=true]/stepper-item:stroke-primary-300 stroke-secondary-500 stroke-2";

const STEPS_WITH_ICONS = [
  {
    title: "Home",
    icon: <Bars3Icon height={40} width={40} className={iconClasses} />,
  },
  {
    title: "Menu",
    description: "Donec et lectus a risus",
    icon: <FaceSmileIcon height={40} width={40} className={iconClasses} />,
  },
  {
    title: "Article",
    icon: <BellIcon height={40} width={40} className={iconClasses} />,
  },
];

export const WithIcon: Story = {
  render: (props) => {
    return (
      <div
        className={classNames(
          props.direction === "vertical" ? "h-[500px]" : "h-max",
        )}
      >
        <Stepper {...props} steps={STEPS_WITH_ICONS} />
      </div>
    );
  },
};

export const CustomConnector: Story = {
  render: (props) => (
    <div
      className={classNames(
        props.direction === "vertical" ? "h-[500px]" : "h-max",
      )}
    >
      <Stepper
        {...props}
        value={1}
        connector={({ active }) => (
          <hr
            className={classNames(
              props.direction === "horizontal"
                ? "h-px w-full border-t-2"
                : "ml-5 h-full w-px border-r-2",
              active ? "border-blue-500" : "border-secondary-400 border-dotted",
            )}
          />
        )}
        steps={STEPS}
      />
    </div>
  ),
};
