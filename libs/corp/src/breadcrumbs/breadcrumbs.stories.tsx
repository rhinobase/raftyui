import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { classNames } from "../../../ui/src";
import { Breadcrumbs } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Corp / Breadcrumbs",
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
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  render: function Render({ size }) {
    const onClick = (current: string) => {
      console.log(current);
    };

    return (
      <Breadcrumbs
        onClick={onClick}
        size={size}
        items={[
          { label: "Home", href: "/" },
          { label: "Application", href: "/" },
          { label: "Menu", href: "/" },
          { label: "Article" },
        ]}
        seperator=">"
      />
    );
  },
};

export const WrapWithDiv: Story = {
  render: ({ size }) => (
    <div className="text-2xl">
      <Breadcrumbs
        size={size}
        items={[
          { label: "Home", href: "/" },
          { label: "Application", href: "/" },
          { label: "Menu", href: "/" },
          { label: "Article", href: "/" },
        ]}
        seperator=">"
      />
    </div>
  ),
};

export const WithChildren: Story = {
  render: ({ size }) => (
    <Breadcrumbs
      size={size}
      items={[
        { label: "Home", href: "/" },
        { label: "Application", href: "/" },
        { label: "Menu", href: "/" },
        { label: "Article", href: "/" },
      ]}
      seperator=">"
    >
      {({ label, isLastElement }) => {
        return (
          <span className={classNames(isLastElement && "text-blue-500")}>
            {label}
          </span>
        );
      }}
    </Breadcrumbs>
  ),
};
