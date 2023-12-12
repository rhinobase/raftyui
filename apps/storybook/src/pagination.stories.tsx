import { Pagination } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "Components / Pagination",
  args: {
    size: "md",
    isDisabled: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: ({ size, isDisabled }) => (
    <div className="flex h-full items-center justify-center">
      <Pagination
        total={100}
        pageSizeOptions={[10, 20, 30]}
        hideOnSinglePage
        defaultPageSize={20}
        showQuickJumper
        isDisabled={isDisabled}
        showSizeChanger
        size={size}
        showTotal={(total, range) => `Total ${total} items, Range is ${range}`}
        className="flex gap-5"
      />
    </div>
  ),
};

export const Goto: Story = {
  render: ({ size, isDisabled }) => (
    <div className="flex h-full items-center justify-center">
      <Pagination
        total={100}
        pageSizeOptions={[10, 20, 30]}
        showQuickJumper
        size={size}
        isDisabled={isDisabled}
        className="flex gap-5"
      />
    </div>
  ),
};

export const SizeChanger: Story = {
  render: ({ size, isDisabled }) => (
    <div className="flex h-full items-center justify-center">
      <Pagination
        total={100}
        pageSizeOptions={[10, 20, 30]}
        showSizeChanger
        size={size}
        isDisabled={isDisabled}
        className="flex gap-5"
      />
    </div>
  ),
};
export const Buttons: Story = {
  render: ({ size, isDisabled }) => (
    <div className="flex h-full items-center justify-center">
      <Pagination
        total={100}
        pageSizeOptions={[10, 20, 30]}
        size={size}
        isDisabled={isDisabled}
        className="flex gap-5"
      />
    </div>
  ),
};

export const ControledPageNumber: Story = {
  render: function Render({ size, isDisabled }) {
    const [current, setCurrent] = useState(3);

    const onChange = (page: number) => {
      setCurrent(page);
    };

    return (
      <div className="flex h-full items-center justify-center">
        <Pagination
          total={100}
          pageSizeOptions={[10, 20, 30]}
          hideOnSinglePage
          showQuickJumper
          showSizeChanger
          size={size}
          isDisabled={isDisabled}
          current={current}
          onChange={onChange}
          className="flex gap-5"
        />
      </div>
    );
  },
};

export const TotalNumber: Story = {
  render: ({ size, isDisabled }) => (
    <div className="flex h-full items-center justify-center">
      <Pagination
        total={100}
        pageSizeOptions={[10, 20, 30]}
        size={size}
        showTotal={(total, range) => `Total ${total} items, Range is ${range}`}
        isDisabled={isDisabled}
        className="flex gap-5"
      />
    </div>
  ),
};
