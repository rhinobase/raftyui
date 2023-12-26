import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BreadcrumbItem } from "./BreadcrumbItem";
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
  render: ({ size }) => (
    <Breadcrumbs size={size} seperator="<">
      <BreadcrumbItem link="/home">Home</BreadcrumbItem>
      <BreadcrumbItem link="/menu">Menu</BreadcrumbItem>
      <BreadcrumbItem>Articles</BreadcrumbItem>
    </Breadcrumbs>
  ),
};
