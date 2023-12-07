import { Pagination } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";

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
  render: ({ size }) => {
    return (
      <div className="flex h-full items-center justify-center">
        <Pagination
          total={100}
          pageSizeOptions={[10, 20, 30]}
          hideOnSinglePage
          pageSize={10}
          showQuickJumper
          showSizeChanger
          showButton
          size={size}
          // showTotal={(total, range) =>
          //   `Range is ${range} ,Total ${total} items`
          // }
          // onChange={console.log}
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
        pageSize={10}
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
        pageSize={10}
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
        pageSize={10}
        size={size}
        showButton
        className="flex gap-5"
      />
    </div>
  ),
};
