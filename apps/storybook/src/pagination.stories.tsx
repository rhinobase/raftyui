import { Pagination } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "Components / Pagination",
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: function Render({ size }) {
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
          defaultPageSize={20}
          showQuickJumper
          showSizeChanger
          size={size}
          showTotal={(total, range) =>
            `Total ${total} items, Range is ${range}`
          }
          current={current}
          onChange={onChange}
          className="flex gap-5"
        />
      </div>
    );
  },
};

export const Goto: Story = {
  render: ({ size }) => (
    <div className="flex h-full items-center justify-center">
      <Pagination
        total={100}
        pageSizeOptions={[10, 20, 30]}
        showQuickJumper
        size={size}
        className="flex gap-5"
      />
    </div>
  ),
};

export const SizeChanger: Story = {
  render: ({ size }) => (
    <div className="flex h-full items-center justify-center">
      <Pagination
        total={100}
        pageSizeOptions={[10, 20, 30]}
        showSizeChanger
        size={size}
        className="flex gap-5"
      />
    </div>
  ),
};
export const Buttons: Story = {
  render: ({ size }) => (
    <div className="flex h-full items-center justify-center">
      <Pagination
        total={100}
        pageSizeOptions={[10, 20, 30]}
        size={size}
        className="flex gap-5"
      />
    </div>
  ),
};
