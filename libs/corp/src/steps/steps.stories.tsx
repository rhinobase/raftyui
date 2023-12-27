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
          subTitle: "dkddk dkd",
          description: "hello how r u",
        },
        {
          title: "Menu",
          description: "hello how r u",
        },
        {
          title: "Article",
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
              subTitle: "dkddk dkd",
              description: "hello how r u",
            },
            {
              title: "Menu",
              description: "hello how r u",
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
    const [current, setCurrent] = useState(0);

    const onClick = (value: number) => {
      console.log("onChange:", value);
      setCurrent(value);
    };

    return (
      <Steps
        size={size}
        current={current}
        direction={direction}
        isDisabled={isDisabled}
        onClick={onClick}
        items={[
          {
            title: "Home",
            subTitle: "dkddk dkd",
            description: "hello how r u",
          },
          {
            title: "Menu",
            description: "hello how r u",
          },
          {
            title: <span>Article</span>,
          },
        ]}
      />
    );
  },
};
