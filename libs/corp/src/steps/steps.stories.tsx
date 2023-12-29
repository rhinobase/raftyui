import {
  Bars3Icon,
  BellIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Button } from "../../../ui/src";
import { Steps } from "./Steps";

const meta: Meta<typeof Steps> = {
  title: "Corp / Steps",
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
type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  render: ({ size, direction, isDisabled }) => (
    <Steps
      size={size}
      direction={direction}
      isDisabled={isDisabled}
      items={[
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
      ]}
    />
  ),
};

export const Controled: Story = {
  render: function Render({ size, direction, isDisabled }) {
    const [current, setCurrent] = useState(0);

    const next = () => {
      setCurrent(current + 1);
    };

    const prev = () => {
      setCurrent(current - 1);
    };

    return (
      <>
        <Steps
          current={current}
          direction={direction}
          isDisabled={isDisabled}
          size={size}
          items={[
            {
              title: "Home",
              subTitle: "Aliquam",
              // description: "Lorem ipsum dolor sit amet",
            },
            {
              title: "Menu",
              description: "Donec et lectus a risus",
            },
            {
              title: "Article",
            },
          ]}
        />
        <div className="flex gap-4">
          <Button onClick={prev}>prev</Button>
          <Button onClick={next}>Next</Button>
        </div>
      </>
    );
  },
};

export const Clickable: Story = {
  render: function Render({ size, direction, isDisabled }) {
    const initial = 2;
    const [current, setCurrent] = useState(initial);

    return (
      <Steps
        size={size}
        current={current}
        initial={initial}
        direction={direction}
        isDisabled={isDisabled}
        onClick={setCurrent}
        items={[
          {
            title: "Home",
          },
          {
            title: "Menu",
            description: "Donec et lectus a risus",
          },
          {
            title: "Article",
          },
        ]}
      />
    );
  },
};

export const WithIcon: Story = {
  render: function Render({ size, direction, isDisabled }) {
    return (
      <Steps
        size={size}
        direction="vertical"
        isDisabled={isDisabled}
        items={[
          {
            title: "Home",
            icon: (
              <Bars3Icon
                height={40}
                width={40}
                className="stroke-2 text-blue-500"
              />
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
              <BellIcon
                height={40}
                width={40}
                className="stroke-2 text-blue-500"
              />
            ),
          },
        ]}
      />
    );
  },
};