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
  render: () => (
    <Breadcrumbs
      items={[
        {
          label: "home",
        },
        {
          label: <a href=" "> Application </a>,
        },
        {
          label: <a href=" "> Menu </a>,
        },
        {
          label: "Article",
        },
      ]}
      seperator="<"
    />
  ),
};

export const WrappeWithDive: Story = {
  render: () => (
    <div className="text-2xl">
      <Breadcrumbs
        items={[
          {
            label: "home",
          },
          {
            label: <a href=" "> Application </a>,
          },
          {
            label: <a href=" "> Menu </a>,
          },
          {
            label: "Article",
          },
        ]}
        seperator="<"
      />
    </div>
  ),
};

export const WithChildren: Story = {
  render: () => (
    <Breadcrumbs
      items={[
        {
          label: "home",
        },
        {
          label: <a href=" "> Application </a>,
        },
        {
          label: <a href=" "> Menu </a>,
        },
        {
          label: "Article",
        },
      ]}
      seperator="<"
    >
      {({ label, onClick, isLastElement }) => {
        return (
          <span className={classNames(isLastElement && "text-blue-500")}>
            {label}
          </span>
        );
      }}
    </Breadcrumbs>
  ),
};
