import type { Meta, StoryObj } from "@storybook/react";
import { BreadcrumbDivider, BreadcrumbItem, Breadcrumbs } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components / Breadcrumbs",
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
    <Breadcrumbs size={size}>
      <a href="/">
        <BreadcrumbItem>Home</BreadcrumbItem>
      </a>
      <BreadcrumbDivider />
      <a href="/">
        <BreadcrumbItem>Application</BreadcrumbItem>
      </a>
      <BreadcrumbDivider />
      <a href="/">
        <BreadcrumbItem>Menu</BreadcrumbItem>
      </a>
      <BreadcrumbDivider />
      <BreadcrumbItem isActive>Article</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const WithChildren: Story = {
  render: ({ size }) => (
    <Breadcrumbs size={size}>
      <a href="/">
        <BreadcrumbItem isUnstyled>Home</BreadcrumbItem>
      </a>
      <BreadcrumbDivider>{">"}</BreadcrumbDivider>
      <a href="/">
        <BreadcrumbItem isUnstyled>Application</BreadcrumbItem>
      </a>
      <BreadcrumbDivider>{">"}</BreadcrumbDivider>
      <a href="/">
        <BreadcrumbItem isUnstyled>Menu</BreadcrumbItem>
      </a>
      <BreadcrumbDivider>{">"}</BreadcrumbDivider>
      <BreadcrumbItem className="text-blue-500" isUnstyled>
        Article
      </BreadcrumbItem>
    </Breadcrumbs>
  ),
};
