import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { classNames } from "../../../ui/src";
import { Breadcrumbs } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Corp / Breadcrumbs",
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  render: function Render() {
    const onClick = (current: string) => {
      console.log(current);
    };

    return (
      <Breadcrumbs
        onClick={onClick}
        labels={["Home", "Application", "Menu", "Article"]}
        seperator=">"
      />
    );
  },
};

export const WrappeWithDive: Story = {
  render: () => (
    <div className="text-2xl">
      <Breadcrumbs
        labels={["Home", "Application", "Menu", "Article"]}
        seperator=">"
      />
    </div>
  ),
};

export const WithChildren: Story = {
  render: () => (
    <Breadcrumbs
      labels={["Home", "Application", "Menu", "Article"]}
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
