import { classNames } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";
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
  render: ({ size }) => {
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
      />
    );
  },
};

export const WrapWithDiv: Story = {
  render: ({ size }) => (
    <div className="text-3xl">
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
